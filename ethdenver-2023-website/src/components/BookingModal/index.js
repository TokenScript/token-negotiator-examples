import React, {useReducer, useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardContent from '@material-ui/core/CardContent';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {TokenContext} from "./../../TokenContextProvider";
import './BookingModal.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0071c3',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default function BookingModal({room}) {

  const {type, price, image, frequency} = room;

  const {negotiator, tokens, proof} = useContext(TokenContext);

  const [open, setOpen] = useState(false);

  const [bookingDone, setBookingDone] = useState(false);
  
  const [loadingTokenProof, setLoadingTokenProof] = useState(false);

  const useToken = async () => {
    try {
      negotiator.authenticate({
        issuer: 'devcon',
        unsignedToken: tokens[0]
      });

      setLoadingTokenProof(true);

    } catch (e) {
      console.error(e);
    }
  }

  const book = async (formData) => {

    const checkoutEndPoint = "https://raw.githubusercontent.com/TokenScript/token-negotiator-examples/main/mock-backend-payment-process-request.json?";

    const params = {
      tokenProof: proof,
      bookingData: {formData}
    }

    fetch(checkoutEndPoint + new URLSearchParams(params)).then(_data => {

      setBookingDone(true);

    });

  }

  const [formInput, setFormInput] = useReducer(
      (state, newState) => ({...state, ...newState}), {
        reference: "Beeple",
        cardNo: "00000000000",
        cardSort: "00-00-00",
        cardCsv: "000"
      });

  const handleInput = evt => {

    const name = evt.target.name;

    const newValue = evt.target.value;

    setFormInput({[name]: newValue});

  };

  const handleSubmit = evt => {

    evt.preventDefault();

    book({formInput, type});

  };

  const handleClickOpen = () => {

    setOpen(true);

  };

  const handleClose = () => {

    setOpen(false);
    
  };

  return (
      <ThemeProvider theme={theme}>
        <Button color="primary" className="bookButton" onClick={handleClickOpen}
                variant="contained">
          Book
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
          {
            bookingDone &&
            <div className='modalContainer'>
              <div className='center'>
                <h3>Booking Confirmed!</h3>
                <CheckCircleIcon style={{color: 'green', fontSize: '80px'}}/>
              </div>
            </div>
          }
          {
            !bookingDone &&
            <div className='modalContainer'>
              <div style={{width: '100%', height: '138px', overflow: 'hidden'}}>
                <img
                    style={{width: '100%', position: 'relative', top: '-71px'}}
                    src={image}
                />
              </div>
              <DialogTitle
                  className="title"
                  disableTypography={true}
              >
                {type}
              </DialogTitle>
              {!room.applyDiscount &&
              <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                  {price} / {frequency}
                </Typography>
              </CardContent>
              }
              {room.applyDiscount &&
              <CardContent>
                <div style={{display: 'flex'}}>
                  <Typography
                      style={{
                        color: '#d3182e',
                        textDecoration: 'line-through',
                        marginRight: '4px'
                      }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                  >
                    {room.price} / {frequency}
                  </Typography>
                  <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                  >
                    {room.discountPrice} / {frequency}
                  </Typography>
                </div>
              </CardContent>
              }
              <DialogContent>
                <form onSubmit={handleSubmit}>
                  <TextField
                      id="booking-name"
                      label="Reference name"
                      placeholder="Beeple"
                      value="Beeple"
                      helperText="(a check-in reference name for your booking)"
                      fullWidth
                      name="reference"
                      margin="normal"
                      onChange={handleInput}
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                  <TextField
                      id="card-no"
                      label="Card Number"
                      fullWidth
                      placeholder="00000000000"
                      value="00000000000"
                      name="cardNo"
                      margin="normal"
                      onChange={handleInput}
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                  <TextField
                      id="card-sort"
                      label="Card Sort Number"
                      fullWidth
                      placeholder="00-00-00"
                      value="00-00-00"
                      name="cardSort"
                      margin="normal"
                      onChange={handleInput}
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                  <TextField
                      id="card-csv"
                      label="CSV"
                      fullWidth
                      value="000"
                      placeholder="000"
                      name="cardCsv"
                      margin="normal"
                      onChange={handleInput}
                      InputLabelProps={{
                        shrink: true,
                      }}
                  />
                </form>
              </DialogContent>
              <div className="booking">
                <DialogActions>
                  {
                    tokens.length > 0 && !proof && !loadingTokenProof &&
                    <Button
                        color="primary"
                        className="paynow"
                        variant="contained"
                        onClick={useToken}
                        color="primary"
                    >
                      Use Token
                    </Button>
                  }
                  {
                    tokens.length > 0 && !proof && loadingTokenProof === true &&
                    <Button
                        color="primary"
                        className="paynow"
                        variant="contained"
                        onClick={useToken}
                        color="primary"
                    >
                      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </Button>
                  }
                  {
                    (tokens.length === 0 || proof) &&
                    <Button
                        color="primary"
                        className="paynow"
                        variant="contained"
                        onClick={handleSubmit}
                        color="primary"
                    >
                      Pay Now
                    </Button>
                  }
                </DialogActions>
              </div>
            </div>
          }
        </Dialog>
      </ThemeProvider>
  );
}



