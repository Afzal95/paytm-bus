import {Navbar} from "./Components/Navbar/Navbar.jsx"
import './App.css';
import { Homepage } from "./Components/Homepage/Homepage.jsx";
import { Faq } from "./Components/Faq/Faq.jsx";
import { Payment } from "./Components/PaymentPage/payment.jsx";
import { BusBookingAndFilters } from "./Components/BusBooking&Filters/BusBookingAndFilters.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Homepage/> 
      {/* <Payment /> */}
      {/* <BusBookingAndFilters /> */}
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
