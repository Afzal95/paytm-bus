
import { Sortings } from './Sortings/Sortings'
import bbf from './BusBookingAndFilters.module.css'
import { BookingCard } from './BookingCard/BookingCard'
import { LeftFilterSection } from './BookingCard/leftFilterSection'



const BusBookingAndFilters = () => {


  return (
    <div className={bbf.wrapper}>
      <div className={bbf.cont}>
            <div className={bbf.border}>
            <LeftFilterSection />
            </div>
            <div className={bbf.border}>
                <Sortings />
                <BookingCard />
            </div>
      </div>
    </div>
  );
};

export { BusBookingAndFilters }
