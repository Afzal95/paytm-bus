import { useState } from "react";
import styles from "./Payment.module.css";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";
import React from "react";
import { useHistory } from "react-router-dom";
function Payment() {
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);
  const [UPI, setUpi] = useState(false);
  const [UpiId, setUpiId] = useState(true);
  const handle = (e) => {
    const val = e.target.value;
    if (val === "credit") {
      setCredit(true);
      setDebit(false);
      setUpi(false);
    } else if (val === "debit") {
      setCredit(false);
      setDebit(true);
      setUpi(false);
    } else if (val === "upi") {
      setCredit(false);
      setDebit(false);
      setUpi(true);
    }
  };
  const history = useHistory();

  const makePayment = async (token) => {
    history.push("/success");
  };

  return (
    <div style={{ paddingBottom: "180px" }}>
      <div className={styles.iconDiv}>
        <img
          src="https://staticpg.paytm.in/pgp/web/assets/logo.png"
          width="100%"
          height="50%"
          alt="icon"
        />
      </div>
      <div className={styles.firstDiv}>
        <div className={styles.goBack}>
          {/* <Link>Go back</Link> */}
          Go back
        </div>
        <hr style={{ borderBottom: ".4px light grey" }} />
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
            justifyContent: "space-between",
            marginRight: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "-10px" }}>
              Paytm Bus tickets Order
            </h3>
            <p>Transaction ID: 14461199498</p>
          </div>
          <div>
            <p style={{ marginBottom: "-10px" }}>Amount to be paid</p>
            <h3>Rs663</h3>
          </div>
        </div>
      </div>
      <div
        className={styles.firstDiv}
        style={{ marginTop: "30px", paddingTop: "30px", borderRadius: "0" }}
      >
        <div className={styles.goBack}>SELECT AN OPTION TO PAY</div>
        <div className={styles.Payment__stripe}>
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={makePayment}
            name="Paytm Bus Booking"
          >
            <button className={styles.Payment__stripe__button}>
              Pay With Stripe
            </button>
          </StripeCheckout>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
            justifyContent: "space-between",
            marginRight: "20px",
            lineHeight: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "160px",
            }}
          ></div>
        </div>
      </div>
      <div
        className={styles.firstDiv}
        style={{ paddingTop: "10px", borderRadius: "0" }}
      >
        <div style={{ width: "160px", marginTop: "-40px" }}>
          <input
            style={{ height: "20px", width: "20px", marginLeft: "20px" }}
            type="radio"
            value="credit"
            name="method"
            onChange={handle}
          />{" "}
          <span style={{ marginLeft: "20px" }}>&nbsp;</span> Credit Card
        </div>
        {credit && (
          <div
            style={{ display: "flex", marginTop: "20px", marginLeft: "80px" }}
          >
            <TextField
              style={{ width: "300px" }}
              id="outlined-basic"
              label="card no"
              type="number"
              variant="outlined"
            />
            <TextField
              style={{ width: "140px", marginLeft: "20px" }}
              id="outlined-basic"
              label="card expiry date"
              type="number"
              placeholder="MM/YY"
              variant="outlined"
            />
            <TextField
              style={{ width: "140px", marginLeft: "20px" }}
              id="outlined-basic"
              label="CVV"
              type="number"
              placeholder="CVV"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#34c9c9",
                width: "200px",
                marginLeft: "20px",
              }}
            >
              Pay 663
            </Button>
          </div>
        )}
        <div style={{ width: "160px", marginTop: "50px" }}>
          <input
            style={{ height: "20px", width: "20px", marginLeft: "15px" }}
            type="radio"
            value="debit"
            name="method"
            onChange={handle}
          />{" "}
          <span style={{ marginLeft: "20px" }}>&nbsp;</span> Debit Card
        </div>
        {debit && (
          <div
            style={{ display: "flex", marginTop: "20px", marginLeft: "80px" }}
          >
            <TextField
              style={{ width: "300px" }}
              id="outlined-basic"
              label="card no"
              type="number"
              variant="outlined"
            />
            <TextField
              style={{ width: "140px", marginLeft: "20px" }}
              id="outlined-basic"
              label="card expiry date"
              type="number"
              placeholder="MM/YY"
              variant="outlined"
            />
            <TextField
              style={{ width: "140px", marginLeft: "20px" }}
              id="outlined-basic"
              label="CVV"
              type="number"
              placeholder="CVV"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#34c9c9",
                width: "200px",
                marginLeft: "20px",
              }}
            >
              Pay 663
            </Button>
          </div>
        )}
        <div style={{ width: "160px", marginTop: "50px", marginLeft: "-20px" }}>
          <input
            style={{ height: "20px", width: "20px" }}
            type="radio"
            value="upi"
            name="method"
            onChange={handle}
          />{" "}
          <span style={{ marginLeft: "30px" }}></span> UPI
        </div>
        {UPI && (
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              marginLeft: "80px",
              paddingBottom: "50px",
              backgroundColor: "#f3f7f8",
            }}
          >
            <TextField
              onChange={(e) => setUpiId(false)}
              style={{ width: "300px" }}
              id="outlined-basic"
              label="UPI Id"
              placeholder="Enter UPI Id"
              type="text"
              variant="outlined"
            />
            <TextField
              disabled={UpiId}
              style={{ width: "140px", marginLeft: "20px" }}
              id="outlined-basic"
              label="OTP"
              type="number"
              placeholder="enter otp"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#34c9c9",
                width: "200px",
                marginLeft: "20px",
              }}
            >
              Pay 663
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export { Payment };
