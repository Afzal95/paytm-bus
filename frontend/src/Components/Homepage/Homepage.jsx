import React from "react";
import {
  Home,
  Phone,
  Android,
  Flight,
  Bus,
  Phone1,
  Android1,
  Main,
  Container,
} from "./Homepage.js";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PhoneLockedIcon from "@material-ui/icons/PhoneLocked";
import GamesIcon from "@material-ui/icons/Games";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import SubwayIcon from "@material-ui/icons/Subway";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlightIcon from "@material-ui/icons/Flight";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import TrainIcon from "@material-ui/icons/Train";
import HotelIcon from "@material-ui/icons/Hotel";
import { Faq } from "../Faq/Faq.jsx";
import { TopRoutes } from "./TopRoutes.jsx";

export function Homepage() {
  return (
    <>
      <Container>
        <Main>
          <Home>
            <Phone>
              <Android>
                {" "}
                <PhoneAndroidIcon />{" "}
              </Android>
              Mobile
            </Phone>

            <Phone>
              <Android>
                {" "}
                <EmojiObjectsIcon />{" "}
              </Android>
              Electricity
            </Phone>

            <Phone>
              <Android>
                {" "}
                <BeachAccessIcon />{" "}
              </Android>
              DTH
            </Phone>

            <Phone>
              <Android>
                {" "}
                <MenuBookIcon />{" "}
              </Android>
              Fees
            </Phone>

            <Phone>
              <Android>
                {" "}
                <PhoneLockedIcon />{" "}
              </Android>
              Landline
            </Phone>

            <Phone>
              <Android>
                {" "}
                <GamesIcon />{" "}
              </Android>
              Gold
            </Phone>

            <Phone>
              <Android>
                {" "}
                <SettingsInputHdmiIcon />{" "}
              </Android>
              DataCard
            </Phone>

            <Phone>
              <Android>
                {" "}
                <SubwayIcon />{" "}
              </Android>
              Metro
            </Phone>

            <Phone>
              <Android>
                {" "}
                <LocalGasStationIcon />{" "}
              </Android>
              Gas
            </Phone>

            <Phone>
              <Android>
                {" "}
                <WifiIcon />{" "}
              </Android>
              Broadband
            </Phone>

            <Phone>
              <Android>
                {" "}
                <LocalDrinkIcon />{" "}
              </Android>
              Water
            </Phone>

            <Phone>
              <Android>
                {" "}
                <MoreHorizIcon />{" "}
              </Android>
              more
            </Phone>
          </Home>
          <Flight>
            <Bus>
              <Phone1>
                <Android1>
                  {" "}
                  <FlightIcon />{" "}
                </Android1>
                Flight
              </Phone1>

              <Phone1>
                <Android1>
                  {" "}
                  <DirectionsBusIcon />{" "}
                </Android1>
                Bus
              </Phone1>

              <Phone1>
                <Android1>
                  {" "}
                  <TrainIcon />{" "}
                </Android1>
                Trains
              </Phone1>

              <Phone1>
                <Android1>
                  {" "}
                  <HotelIcon />{" "}
                </Android1>
                Hotels
              </Phone1>

              <Phone1>
                <Android1>
                  {" "}
                  <FlightIcon />{" "}
                </Android1>
                International Flights
              </Phone1>
            </Bus>
          </Flight>
        </Main>
        <TopRoutes />
        <div>
          <Faq />
        </div>
      </Container>
    </>
  );
}
