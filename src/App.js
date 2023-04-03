import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import DaySection from "./components/DaySection";
import './style.css'
import HourSection from "./components/HourSection";

function App() {
  return (
    
      <div class="remove-scroll ">
        <div class="grid">
          <Navbar />
          <HourSection/>
          <Home />
          <DaySection />
        </div>
      </div>
    
  );
}

export default App;
