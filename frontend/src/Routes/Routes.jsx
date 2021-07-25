import React from "react";
import { Switch, Route } from "react-router-dom";
import {Homepage} from "../Components/Homepage/Homepage.jsx";
import { ConfirmBus } from "../Components/ConfirmBus/ConfirmBus";
import { BookingCard } from "../Components/BusBooking&Filters/BookingCard/BookingCard.jsx";
import { Payment } from "../Components/PaymentPage/payment.jsx";
import {Navbar} from "../Components/Navbar/Navbar.jsx"
import { BusBookingAndFilters } from "../Components/BusBooking&Filters/BusBookingAndFilters.jsx";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
        <Navbar />
          <Homepage />
        </Route>
        <Route path="/confirm-bus" exact>
        <Navbar />
          <ConfirmBus />
        </Route>
        <Route path="/search" exact>
        <Navbar />
        <BusBookingAndFilters/>
          {/* <BookingCard /> */}
        </Route>
        <Route path="/payment-page" exact>
          <Payment />
        </Route>
        <Route>
          <h1>Something is wrong !</h1>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
