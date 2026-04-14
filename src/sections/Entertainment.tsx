import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const items = ["Adventure Park", "Roxy Cinemas", "Family Zones", "Events & Shows"];

const Entertainment = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">

      <div className="absolute inset-0">
        <img src="/images/entertainment.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <motion.h2 className="text-5xl md:text-7xl font-bold mb-16">
              Attractions & Entertainment
            </motion.h2>

            <motion.div className="grid md:grid-cols-2 gap-10">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className="p-10 rounded-2xl bg-white/5 border border-white/10"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

          </div>

        </SectionWrapper>
      </div>
    </section>
  );
};

export default Entertainment;