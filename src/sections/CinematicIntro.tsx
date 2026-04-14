import ScrollVideo from "../components/ScrollVideo";
import CinematicText from "../components/CinematicText";

const CinematicIntro = () => {
  return (
    <div className="bg-black text-white">

      {/* 🎥 VIDEO */}
      <ScrollVideo />

      {/* ✨ TEXT STORY */}
      <div className="space-y-40 py-40">

        <CinematicText text="A New Era of Retail" />
        <CinematicText text="Where Experience Meets Innovation" />
        <CinematicText text="Designed for the Future" />

      </div>

    </div>
  );
};

export default CinematicIntro;