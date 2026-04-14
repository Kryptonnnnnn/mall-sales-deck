import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/location.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">

            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-10"
            >
              Prime Location
            </motion.h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Strategically located in Dubai Hills Estate, with seamless
              connectivity to Downtown Dubai, Dubai Marina, and major highways.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                Downtown Dubai – 15 min
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                Dubai Marina – 20 min
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                DXB Airport – 25 min
              </div>

            </div>

          </div>

        </SectionWrapper>
      </div>
    </section>
  );
};

export default Location;