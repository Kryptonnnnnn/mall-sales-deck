import { useScroll, useTransform } from "framer-motion";

export const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return { scale, opacity, y };
};