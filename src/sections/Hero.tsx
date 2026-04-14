import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

const Hero = () => {
  const { scrollY } = useScroll();

  // 🔥 Apple-style parallax
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* 🎥 VIDEO */}
      <motion.video
        style={{ scale }}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* 🌑 OVERLAY */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-black/60"
      />

      {/* ✨ CONTENT */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          The Future of Retail
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Where brands, experiences, and audiences meet
        </p>

        {/* 🔥 MAGNETIC BUTTON */}
        <div className="mt-6">
          <MagneticButton>
            Explore Opportunities
          </MagneticButton>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;