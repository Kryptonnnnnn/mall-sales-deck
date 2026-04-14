import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ y, opacity, scale }}
      className="min-h-screen w-full flex items-center justify-center snap-start"
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;