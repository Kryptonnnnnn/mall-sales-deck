import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";

const Luxury = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/luxury.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-5xl md:text-7xl font-bold mb-16"
            >
              Luxury Experience
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              className="grid md:grid-cols-2 gap-10"
            >
              <motion.div
                variants={fadeUp}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                Premium Brands
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                Exclusive Experience
              </motion.div>
            </motion.div>

          </div>

        </SectionWrapper>
      </div>

    </section>
  );
};

export default Luxury;