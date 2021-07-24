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
  BusTick,
  Imag,
  Phone12,
  Book,
  Train,
  Formlabel,
  Sync,
  TransDest,
  Fly,
  Fly1,
  FormData,
  SearchBus,
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
import { Faq } from "../Faq/Faq.jsx";
import { TopRoutes } from "./TopRoutes.jsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {OffersCar} from "./OffersCar.jsx"
import { styled } from "@material-ui/core/styles";
import { Footer } from "../Footer/Footer.jsx";

const Btn = styled(Button)({
  height: "45px",
  width: "100px",
});

export function Homepage() {
  return (
    <>
      <Container>
        <Main>
          <Home>
            <Phone>
              <Android>
                <PhoneAndroidIcon />
              </Android>
              Mobile
            </Phone>

            <Phone>
              <Android>
                <EmojiObjectsIcon />
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
          <BusTick>
            <Flight>
              <Bus>
                <Phone1>
                  <Android1>
                    <Imag src="/fli.png" />
                  </Android1>
                  <Fly>Flight </Fly>
                </Phone1>

                <Phone1>
                  <Android1>
                    <Train src="/buss.png" />
                  </Android1>
                  <Fly> Bus </Fly>
                </Phone1>

                <Phone1>
                  <Android1>
                    <Train src="/train.png" />
                  </Android1>
                  <Fly> Trains </Fly>
                </Phone1>

                <Phone1>
                  <Android1>
                    <Imag src="/hotel.png" />
                  </Android1>
                  <Fly> Hotels </Fly>
                </Phone1>

                <Phone12>
                  <Android1>
                    <Imag src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbYWRTvPiXncDOaZlgvrp0z3tc_QZlkMw0g&usqp=CAU" />
                  </Android1>
                  <Fly> International Flights</Fly>
                </Phone12>
              </Bus>
            </Flight>
            <Book>
              <strong>Book Bus Tickets</strong>
            </Book>
            <div>
              <RadioGroup aria-label="bus-booking" name="booktick">
                <Formlabel>
                  <FormControlLabel
                    value="Oneway"
                    control={<Radio />}
                    label="Oneway"
                  />
                  <FormControlLabel
                    value="round"
                    control={<Radio />}
                    label="Round Trip"
                  />
                </Formlabel>
              </RadioGroup>
            </div>
            <SearchBus>
              <FormData>
                <TextField
                  id="filled-basic"
                  // className={classes.inp}
                  label="From"
                  variant="outlined"
                />
                <Sync>
                  <TransDest />
                </Sync>
                <TextField
                  id="filled-basic"
                  // className={classes.inp}
                  label="To"
                  variant="outlined"
                />
                <TextField
                  id="filled-basic"
                  // className={classes.inp}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  label="Departure Date"
                />
                <TextField
                  id="filled-basic"
                  // className={classes.inp}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  label="Return Date"
                />
              </FormData>
              <div>
                <Btn
                  variant="contained"
                  // className={classes.button}
                  color="primary"
                >
                  Search
                </Btn>
              </div>
            </SearchBus>
          </BusTick>
        </Main>
        <OffersCar />
        <TopRoutes />
        <div>
          <Faq />
        </div>
        <Footer/>
      </Container>
    </>
  );
}
