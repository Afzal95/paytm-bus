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
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";
import styles from "./Homepage.module.css";

const Btn = styled(Button)({
  height: "45px",
  width: "100px",
});

export function Homepage() {
  const history = useHistory();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const [
    displayDepartureDropdown,
    setDisplayDepartureDropdown,
  ] = React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] = React.useState(
    false
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const routes = useSelector((state) => state.routesReducer.routes);

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);

    if (routes) {
      let allSources = [];
      routes.forEach((route) => {
        allSources.push(route.departureLocation.name);
        allSources = [
          ...allSources,
          route.departureLocation.name,
          ...route.departureLocation.subLocations,
        ];
      });
      allSources = Array.from(new Set(allSources));
      let filteredSources = allSources.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredSources.length > 0 && value) {
        setFilteredSources(filteredSources);
        setDisplayDepartureDropdown(true);
      } else {
        setDisplayDepartureDropdown(false);
      }
    }
  };
  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
    if (routes) {
      let allDestinations = [];
      routes.forEach((route) => {
        allDestinations.push(route.arrivalLocation.name);
        allDestinations = [
          ...allDestinations,
          route.arrivalLocation.name,
          ...route.arrivalLocation.subLocations,
        ];
      });
      allDestinations = Array.from(new Set(allDestinations));
      let filteredDestinations = allDestinations.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredDestinations.length > 0 && value) {
        setFilteredDestinations(filteredDestinations);
        setDisplayArrivalDropdown(true);
      } else {
        setDisplayArrivalDropdown(false);
      }
    }
  };
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
              <div>
            <div>
              <TextField
                  id="filled-basic"
                  label="From"
                  variant="outlined"
                  value={departure}
                  onChange={onDepartureChange}
                />
            </div>
            {displayDepartureDropdown ? (
              <div className={styles.departureDd}>
                <ul style={{listStyleType:"none",textAlign:"left"}}>
                  {filteredSources.map((source) => (
                    <li
                      onClick={() => {
                        setDeparture(source);
                        setDisplayDepartureDropdown(false);
                      }}
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
                <Sync>
                  <TransDest />
                </Sync>
                <div>
            <div>
            <TextField
                  id="filled-basic"
                  label="To"
                  variant="outlined"
                  value={arrival}
                  onChange={onArrivalChange}
                />
            </div>
            {displayArrivalDropdown ? (
              <div className={styles.arrivalDd}>
                <ul style={{listStyleType:"none",textAlign:"left"}}>
                  {filteredDestinations.map((destination) => (
                    <li
                      onClick={() => {
                        setArrival(destination);
                        setDisplayArrivalDropdown(false);
                      }}
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
                <TextField
                  id="filled-basic"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  label="Departure Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <TextField
                  id="filled-basic"
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
                  color="primary"
                  onClick={() => {
                    let departureTemp = departure;
                    let arrivalTemp = arrival;
    
                    if (departureTemp.includes("(")) {
                      departureTemp = departureTemp.substring(
                        departureTemp.indexOf("(") + 1,
                        departureTemp.indexOf(")")
                      );
                    }
                    if (arrivalTemp.includes("(")) {
                      arrivalTemp = arrivalTemp.substring(
                        arrivalTemp.indexOf("(") + 1,
                        arrivalTemp.indexOf(")")
                      );
                    }
                    history.push(
                      `/search?departure=${departureTemp}&arrival=${arrivalTemp}&date=${date}`
                    );
                  }}
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
      </Container>
    </>
  );
}
