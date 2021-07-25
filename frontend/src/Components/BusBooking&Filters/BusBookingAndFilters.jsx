import { Sortings } from "./Sortings/Sortings";
import bbf from "./BusBookingAndFilters.module.css";
import { BookingCard } from "./BookingCard/BookingCard";
import { LeftFilterSection } from "./BookingCard/leftFilterSection";
import { useSelector, useDispatch } from "react-redux";
import { getBusDetails } from "../../Redux/BookBus/action";
import React from "react";
import { useLocation } from "react-router-dom";

const BusBookingAndFilters = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get("departure");
  const arrival = query.get("arrival");
  const date = query.get("date");
  const matchedBuses = useSelector(
    (state) => state.busDetailsReducer.matchedBuses
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBusDetails(departure, arrival, date));
  }, [arrival, date, departure, dispatch]);
  var filteredMatchedBuses = [...matchedBuses];
  const routeDetails = useSelector(
    (state) => state.busDetailsReducer.routeDetails
  );
  return (
    <div className={bbf.wrapper}>
      <div className={bbf.cont}>
        <div className={bbf.border}>
          <LeftFilterSection />
        </div>
        <div className={bbf.border}>
          <Sortings />
          {filteredMatchedBuses.map((item) => (
            <BookingCard
              {...item}
              departure={departure}
              arrival={arrival}
              date={date}
              routeDetails={routeDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { BusBookingAndFilters };
