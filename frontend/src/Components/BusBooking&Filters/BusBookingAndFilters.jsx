
import { Sortings } from './Sortings/Sortings'
import bbf from './BusBookingAndFilters.module.css'
import { BookingCard } from './BookingCard/BookingCard'



const BusBookingAndFilters = () => {


  return (
    <div className={bbf.wrapper}>
      <div className={bbf.cont}>
            <div className={bbf.border}>left</div>
            <div className={bbf.border}>
                <Sortings />
                <BookingCard />
            </div>
      </div>
    </div>
  );
};

export { BusBookingAndFilters }
