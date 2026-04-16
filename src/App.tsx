import Deck from "./components/Deck";

import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Retail from "./sections/Retail";
import Luxury from "./sections/Luxury";
import Dining from "./sections/Dining";
import Entertainment from "./sections/Entertainment";
import Events from "./sections/Events";
import Location from "./sections/Location";

import CursorGlow from "./components/CursorGlow";

function App() {
  const slides = [
    <Hero />,
    <Why />,
    <Retail />,
    <Luxury />,
    <Dining />,
    <Entertainment />,
    <Events />,
    <Location />,
  ];

  return (
    <div className="bg-black text-white">
      <CursorGlow />
      <Deck slides={slides} />
    </div>
  );
}

export default App;