import {Navbar} from "./Components/Navbar/Navbar.jsx"
import './App.css';
import { Homepage } from "./Components/Homepage/Homepage.jsx";
import { Faq } from "./Components/Faq/Faq.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
     
    </div>
  );
}

export default App;
