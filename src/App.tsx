import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Retail from "./sections/Retail";
import Luxury from "./sections/Luxury";
import Dining from "./sections/Dining";
import Entertainment from "./sections/Entertainment";
import Events from "./sections/Events";
import Location from "./sections/Location";

import ScrollSection from "./components/ScrollSection";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import SectionDots from "./components/SectionDots";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <SectionDots />

      <Hero />

      <ScrollSection id="why"><Why /></ScrollSection>
      <ScrollSection id="retail"><Retail /></ScrollSection>
      <ScrollSection id="luxury"><Luxury /></ScrollSection>
      <ScrollSection id="dining"><Dining /></ScrollSection>
      <ScrollSection id="entertainment"><Entertainment /></ScrollSection>
      <ScrollSection id="events"><Events /></ScrollSection>
      <ScrollSection id="location"><Location /></ScrollSection>

    </div>
  );
}

export default App;