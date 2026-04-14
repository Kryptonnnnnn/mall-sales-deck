import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CinematicText = ({ text }: { text: string }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.h2
      ref={ref}
      style={{ opacity, y }}
      className="text-5xl md:text-7xl font-bold text-center"
    >
      {text}
    </motion.h2>
  );
};

export default CinematicText;