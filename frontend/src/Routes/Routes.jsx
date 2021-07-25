import React from "react";
import { Switch, Route } from "react-router-dom";
import {Navbar} from '../Components/Navbar/Navbar.jsx';
import {Homepage} from "../Components/Homepage/Homepage.jsx";
import { ConfirmBus } from "../Components/ConfirmBus/ConfirmBus";
const Routes = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/confirm-bus" exact>
          <ConfirmBus />
        </Route>
        <Route>
          <h1>Error</h1>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;