import React, { useState, useEffect } from 'react';
import LogoCard from './LogoCard';
import RoomCard from './RoomCard';
import TokenNotificationCard from './TokenNotificationCard';
import Typography from '@material-ui/core/Typography';
import BookingDate from './BookingDate';
import { Client } from '@tokenscript/token-negotiator';
import './App.css';
import config from '../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";
import "@tokenscript/token-negotiator/dist/theme/style.css";
import Button from "@material-ui/core/Button";

// mock data e.g. server side hotel room price database
const mockRoomData = [{ "type": "Deluxe Room", "price": 200000, "frequency": "per night", "image": "./hotel_3.jpg" }, { "type": "King Suite", "price": 320000, "frequency": "per night", "image": "./hotel_2.png" }, { "type": "Superior Deluxe Suite", "price": 250030, "frequency": "per night", "image": "./hotel_1.jpg" }]

// mock discount of 10% applied to any ticket selected. In a real world scenario, this maybe different per ticket type and retrieved from a backend service.
const mockRoomDiscountData = 10;

let devonConfig = updateTokenConfig(config);

let tokenIssuers = [
  devonConfig
];

window.negotiator = new Client({
  type: 'passive',
  issuers: tokenIssuers
});

function App() {

  // devcont tickets (react state of tokens)
  let [tokens, setTokens] = useState([]);

  let [tokenProofData, setTokenProofData] = useState({ issuer: null, proof: null });

  // react state of token specical offer
  let [freeShuttle, setFreeShuttle] = useState(false);

  // react state of hotel room data
  let [roomTypesData, setRoomTypesData] = useState([]);

  // selected token instance to apply discount, with the discount value on hotel booking.
  let [discount, setDiscount] = useState({ value: undefined, tokenInstance: null });
  
  let [selectedPendingTokenInstance, setSelectedPendingTokenInstance] = useState();

  let [retryButton, setRetryButton] = useState("");

  window.negotiator.on('tokens', (issuerTokens) => {
    let tokens = [];
    tokenIssuers.map((issuer) => {
      tokens.push(...issuerTokens[issuer.collectionID].tokens);
    });
    if (tokens.length > 0) {
      setTokens(tokens);
      setFreeShuttle(true);
    }
  });

  window.negotiator.on("token-proof", (result) => {

    setTimeout(() => {

      setSelectedPendingTokenInstance(null);
      setTokenProofData({issuer: result.issuer, proof: result.data.proof});
      setDiscount({ value: getApplicableDiscount(), tokenInstance: selectedPendingTokenInstance });

    }, 0);

  });

  window.negotiator.on("error", ({error, issuer}) => {
    if (error.name === "POPUP_BLOCKED"){
      setRetryButton("Popup blocked");
    } else if (error.name === "USER_ABORT"){
      setRetryButton("Action aborted");
    } else {
      console.log(error);
      setRetryButton("An error occurred loading tokens");
    }
  });

  // async example of initial hotel data loaded from source
  const getRoomTypesData = () => {
    return mockRoomData;
  }

  // example to return a discount
  const getApplicableDiscount = () => {
    return mockRoomDiscountData;
  }

  // When a ticket is present and user applies it, the discount will be shown
  const applyDiscount = async (ticket) => {

    // toggle room discount offer on/off
    if (!ticket || ticket === null) {

      // clear discount
      setDiscount({ value: undefined, tokenInstance: undefined });
      setTokenProofData({ issuer: null, proof: null });

    } else {

      // ticket selected, but owner is not yet authenticated.
      setSelectedPendingTokenInstance(ticket);

      // authenticate ownership of token
      window.negotiator.authenticate({
        issuer: 'devcon',
        unsignedToken: ticket
      });
    
    }

  }

  // This is the example at which the hotel would begin a hotel room booking transaction.
  const book = async (formData) => {
    const checkoutEndPoint = "https://raw.githubusercontent.com/TokenScript/token-negotiator-examples/main/mock-backend-payment-process-request.json?";
    const params = {
      tokenProof: JSON.stringify(tokenProofData),
      bookingData: { formData }
    }
    fetch(checkoutEndPoint + new URLSearchParams(params)).then(_data => {
      if(tokenProofData && tokenProofData.proof) {
        alert('Transaction Complete with token discount, we look forward to your stay with us!');
      } else {
        alert('Transaction Complete with no discount, we look forward to your stay with us!');
      }
    });
  }

  useEffect(() => {
    // assign room data to react local state
    setRoomTypesData(getRoomTypesData());
    // 
    window.negotiator.negotiate();
  }, []);

  return (
    <div>
      <div className="header">
        <LogoCard title={"Hotel Bogota"} />
        <TokenNotificationCard tokensNumber={tokens.length} />
      </div>
      <BookingDate />
      <div className="roomCardsContainer">
        {roomTypesData.map((room, index) => {
          return <RoomCard
            key={index}
            room={room}
            applyDiscount={applyDiscount}
            discount={discount}
            tokens={tokens}
            book={book}
            selectedPendingTokenInstance={selectedPendingTokenInstance}
          />
        })}
      </div>
      {
        freeShuttle &&
        <div>
          <Typography
            style={{ padding: '20px' }}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p">
            Free shuttle service available to you as a Devcon Ticket holder! Enjoy the event.
          </Typography>
        </div>
      }
      { retryButton &&
        <div style={{color: "#f50057", textAlign:"center"}}>
          <Typography
            gutterBottom
            variant="body2"
            component="h4">{retryButton}</Typography>
          <Button
              style={{background: "#fff8f8"}}
              onClick={() => {
              setRetryButton("");
              window.negotiator.negotiate();
            }}>Retry</Button>
        </div>
      }
    </div>
  );
}

export default App;
