import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Deck = ({ slides }: { slides: React.ReactNode[] }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <div className="h-screen w-screen overflow-hidden relative">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-50">
        <button
          onClick={prev}
          className="px-5 py-2 bg-white/10 backdrop-blur rounded-full"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-5 py-2 bg-white text-black rounded-full"
        >
          Next
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
        <div
          className="h-full bg-white transition-all"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="absolute top-6 left-6 text-white/40 text-xs tracking-widest">
        {index + 1} / {slides.length}
      </div>

    </div>
  );
};

export default Deck;