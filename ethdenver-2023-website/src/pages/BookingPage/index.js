import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { TokenContext } from "./../../TokenContextProvider";
import Header from './../../components/Header';
import RoomCard from './../../components/RoomCard';
import BookingDate from './../../components/BookingDate';
import './../../App.css';

const BookingPage = () => {

  const { tokens } = useContext(TokenContext);

  const tokenHolderBenefits = {
    roomDiscount: (tokens.length > 0),
    freeShuttle: (tokens.length >= 2),
    freeFlight: (tokens.length >= 4)
  }

  const getRoomDiscountPrice = (price, discount) => {

    return (price) - ((discount / 100) * price);

  }

  const mockRoomData = [{"type":"General Admission","price": "Free","frequency":"Forever", "image":"./general_admission.png"},{"type":"Buidlr","price": "Hard Work","frequency":"Day","image":"./sporkwhale.png"},{"type":"SporkWhale","price": 100000,"frequency":"Day","image":"./sporkwhale.png"}, {"type":"Volunteer","price": "Hard Work","frequency":"Day","image":"./sporkwhale.png"}];

  const roomTypesData = mockRoomData.map((room, index) => {

    if(tokenHolderBenefits.roomDiscount) {

      if (room.type === "SporkWhale") {

        room['applyDiscount'] = true;

        room['discount'] = 50;

        room['discountPrice'] = getRoomDiscountPrice(room.price, room.discount)
      }

      if (room.type === "SporkWhale" && tokens.length >= 3) {

        room['applyDiscount'] = true;

        room['discount'] = 100;

        room['discountPrice'] = getRoomDiscountPrice(room.price, room.discount)
      }
    }

    return room;
    
  });

  return (
    <div>
      <Header />
      <BookingDate />
      <div className="roomCardsContainer">
        {roomTypesData.length > 0 && roomTypesData.map((room, index) => {
          return <RoomCard key={index} room={room}/>
        })}
      </div>
      {
        tokenHolderBenefits.freeShuttle &&
        <div>
          <Typography
            style={{ padding: '0px' }}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p">
            🎉 &nbsp; Devcon Multi Ticket holder. Free shuttle service to Breckenridge after the main event has ended.
          </Typography>
        </div>
      },
      {
        tokenHolderBenefits.freeFlight &&
        <div>
          <Typography
            style={{ padding: '0px' }}
            className="applyDiscountCopyContainer"
            gutterBottom
            variant="body2"
            component="p">
            🎉 &nbsp; Devcon MEGA Ticket holder. Free flight to Denver.
          </Typography>
        </div>
      }
      <div className="tokenSelectorContainerElement" style={{position: 'fixed', right: 0, bottom: 0, maxWidth: '100%'}}/>
    </div>
  )
}

export default BookingPage;
