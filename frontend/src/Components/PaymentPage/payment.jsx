// import {Link} from "react-router-dom";
import { useState } from "react";
import styles from "./Payment.module.css";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import StripeCheckout from "react-stripe-checkout";
import React from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Payment(){

    const [credit,setCredit] = useState(false);
    const [debit,setDebit] = useState(false);
    const [UPI,setUpi] = useState(false);
    const [UpiId,setUpiId] = useState(true);

    const handle =(e)=>{
        const val = e.target.value;
        if(val==="credit"){
            setCredit(true);
            setDebit(false);
            setUpi(false);
        }else if(val==="debit"){
            setCredit(false);
            setDebit(true);
            setUpi(false);
        }else if(val==="upi"){
            setCredit(false);
            setDebit(false);
            setUpi(true);
        }
    }
    
    const passSeatsArray = useSelector((state) => state.busDetailsReducer.seats);
    const passFare = useSelector((state) => state.busDetailsReducer.fare);
    const passDepartDetails = useSelector(
      (state) => state.busDetailsReducer.departureDetails
    );
    const passArrivalDetails = useSelector(
      (state) => state.busDetailsReducer.arrivalDetails
    );
  
    const currentCustomer = useSelector(
      (state) => state.authReducer.currentCustomer
    );
    // console.log("Current Customer is: ", currentCustomer);
    const operatorName = useSelector(
      (state) => state.busDetailsReducer.operatorName
    );
    const passengerDetails = useSelector(
      (state) => state.busDetailsReducer.passengerDetails
    );
    // console.log("here passenger details:", passengerDetails);
    const email = useSelector((state) => state.busDetailsReducer.email);
    const fare = useSelector((state) => state.busDetailsReducer.fare);
    const busId = useSelector((state) => state.busDetailsReducer.busId);
    const phoneNumber = useSelector(
      (state) => state.busDetailsReducer.phoneNumber
    );
    const departureDetails = useSelector(
      (state) => state.busDetailsReducer.departureDetails
    );
    const arrivalDetails = useSelector(
      (state) => state.busDetailsReducer.arrivalDetails
    );
    const duration = useSelector((state) => state.busDetailsReducer.duration);
    const isBusinessTravel = useSelector(
      (state) => state.busDetailsReducer.isBusinessTravel
    );
    const isInsurance = useSelector(
      (state) => state.busDetailsReducer.isInsurance
    );
    const isCovidDonated = useSelector(
      (state) => state.busDetailsReducer.isCovidDonated
    );
    const [product] = React.useState({
      name: "React from facebook",
      price: 10,
      productBy: "Facebook",
    });
    const history = useHistory();

    const makePayment = async (token) => {
      history.push("/")
      // // console.log("85")
        // let myBooking = {};
        // myBooking.customerId = currentCustomer._id;
        // myBooking.passengerDetails = passengerDetails;
        // myBooking.email = email;
        // myBooking.phoneNumber = phoneNumber;
        // myBooking.fare = fare;
        // myBooking.busId = busId;
        // let date = new Date();
        // myBooking.bookingDate =
        //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        // myBooking.seats = passSeatsArray;
        // myBooking.departureDetails = departureDetails;
        // myBooking.arrivalDetails = arrivalDetails;
        // myBooking.duration = duration;
        
        // try {
            
        //   let res = await axios.post(
        //     "http://localhost:8000/v1/api/booking",
        //     myBooking
        //   );
        //   console.log("Booking post response: ", res.data);
        // } catch (err) {
        //   console.log("Error while adding booking to booking collection!", err);
        // }
    
        // const body = {
        //   token,
        //   product,
        // };
        // const headers = {
        //   "Content-Type": "application/json",
        // };
        // return fetch("http://localhost:8000/v1/api/stripe-payments", {
        //   method: "POST",
        //   headers,
        //   body: JSON.stringify(body),
        // })
        //   .then((res) => {
        //     history.push("/");
        //   })
        //   .catch((err) => {
        //     console.log("Error while making payment", err);
        //     alert(
        //       "Something went wrong while making payment! Check Internet connection!"
        //     );
        //   });
      };

    return <div style={{paddingBottom:"180px"}}>
    <div className={styles.iconDiv}>
    <img src="https://staticpg.paytm.in/pgp/web/assets/logo.png" width="100%" height="50%" alt="icon" />
    </div>
    <div className={styles.firstDiv}>
        <div className={styles.goBack}>
            {/* <Link>Go back</Link> */}
            Go back
        </div>
        <hr style={{borderBottom:".4px light grey"}} />
        <div style={{display:"flex",marginLeft:"20px",justifyContent:"space-between",marginRight:"20px"}}>
        <div>
        <h3 style={{fontSize:"18px",marginBottom:"-10px"}}>Paytm Bus tickets Order</h3>
        <p>Transaction ID: 14461199498</p>
        </div>
        <div>
        <p style={{marginBottom:"-10px"}}>Amount to be paid</p>
        <h3>Rs663</h3>
        </div>
        </div>
    </div>
    <div className={styles.firstDiv} style={{marginTop:"30px",paddingTop:"30px",borderRadius:"0"}}>
        <div className={styles.goBack}>
            SELECT AN OPTION TO PAY
        </div>
        <div className={styles.Payment__stripe}>
              <StripeCheckout
                stripeKey="pk_test_51JH6eGSAl9m1aS0XG1Ua9TAB76Whu5WXV6bK6bfUWoR5EpyDml5sDT5u5RiY7GlRC2Lw8wHhCYaW9h3cyrbtgoLE003A4x4HcW"
                token={makePayment}
                name="Paytm Bus Booking"
              >
                <button className={styles.Payment__stripe__button}>
                  Pay With Stripe
                </button>
              </StripeCheckout>
            </div>
        <div style={{display:"flex",marginLeft:"20px",justifyContent:"space-between",marginRight:"20px",lineHeight:"12px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"160px"}}>
        {/* <div style={{width:"20px",height:"20px",marginTop:"-4px"}}><input disabled type="checkbox" style={{marginTop:"20px",fontSize:"20px",width:"100%",height:"100%"}} /></div> */}
        {/* <p>Paytm Balance<br/><span style={{marginLeft:"5px",fontSize:"13px"}}>Available balance 0</span><br/></p> */}
        </div>
        {/* {show && <div>
        <button style={{width:"190px",border:"none",cursor:"pointer",height:"50px",padding:"10px",color:"white",backgroundColor:"#34c9c9"}}>PAY 663Rs</button>
        </div>} */}
        </div>
    </div>
    <div className={styles.firstDiv} style={{paddingTop:"10px",borderRadius:"0"}}>
        {/* <div className={styles.goBack}>
            SELECT AN OPTION TO PAY
        </div> */}
        <div style={{width:"160px",marginTop:"-40px"}}>
                <input style={{height:"20px",width:"20px",marginLeft:"20px"}} type="radio" value="credit" name="method" onChange={handle} /> <span style={{marginLeft:"20px"}}>&nbsp;</span> Credit Card
        </div>
        {credit && <div style={{display:"flex",marginTop:"20px",marginLeft:"80px"}}>
        <TextField style={{width:"300px"}} id="outlined-basic" label="card no" type="number" variant="outlined" />
        <TextField style={{width:"140px",marginLeft:"20px"}} id="outlined-basic" label="card expiry date" type="number" placeholder="MM/YY" variant="outlined" />
        <TextField style={{width:"140px",marginLeft:"20px"}} id="outlined-basic" label="CVV" type="number" placeholder="CVV" variant="outlined" />
        <Button variant="contained" size="large" style={{backgroundColor:"#34c9c9",width:"200px",marginLeft:"20px"}} >Pay 663</Button>
        </div>}
        <div style={{width:"160px",marginTop:"50px"}}>
                <input style={{height:"20px",width:"20px",marginLeft:"15px"}} type="radio" value="debit" name="method" onChange={handle} /> <span style={{marginLeft:"20px"}}>&nbsp;</span> Debit Card
        </div>
        {debit && <div style={{display:"flex",marginTop:"20px",marginLeft:"80px"}}>
        <TextField style={{width:"300px"}} id="outlined-basic" label="card no" type="number" variant="outlined" />
        <TextField style={{width:"140px",marginLeft:"20px"}} id="outlined-basic" label="card expiry date" type="number" placeholder="MM/YY" variant="outlined" />
        <TextField style={{width:"140px",marginLeft:"20px"}} id="outlined-basic" label="CVV" type="number" placeholder="CVV" variant="outlined" />
        <Button variant="contained" size="large" style={{backgroundColor:"#34c9c9",width:"200px",marginLeft:"20px"}} >Pay 663</Button>
        </div>}
        <div style={{width:"160px",marginTop:"50px",marginLeft:"-20px"}}>
                <input style={{height:"20px",width:"20px"}} type="radio" value="upi" name="method" onChange={handle} /> <span style={{marginLeft:"30px"}}></span> UPI
        </div>
        {UPI && <div style={{display:"flex",marginTop:"20px",marginLeft:"80px",paddingBottom:"50px",backgroundColor:"#f3f7f8"}}>
        <TextField onChange={e=>setUpiId(false)} style={{width:"300px"}} id="outlined-basic" label="UPI Id" placeholder="Enter UPI Id" type="text" variant="outlined" />
        <TextField disabled={UpiId} style={{width:"140px",marginLeft:"20px"}} id="outlined-basic" label="OTP" type="number" placeholder="enter otp" variant="outlined" />
        <Button variant="contained" size="large" style={{backgroundColor:"#34c9c9",width:"200px",marginLeft:"20px"}} >Pay 663</Button>
        </div> }
    </div>
    
    </div>
}

export {Payment}