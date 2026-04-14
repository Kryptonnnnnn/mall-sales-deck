import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import TiltCard from "../components/TiltCard";

const brands = ["Zara", "H&M", "Nike", "Apple", "Adidas", "Sephora"];

const cardStyle = `
p-10 h-56 rounded-2xl 
bg-white/5 backdrop-blur-xl 
border border-white/10 
hover:bg-white/10 hover:scale-105
transition duration-300 
shadow-[0_0_40px_rgba(255,255,255,0.05)]
flex items-center justify-center text-xl font-semibold
`;

const Retail = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">

      <div className="absolute inset-0">
        <img src="/images/retail.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Home to the World’s Leading Brands
            </motion.h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              From global flagships to emerging brands, Dubai Hills Mall offers
              unmatched exposure, footfall, and a premium retail environment.
            </p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-10"
            >
              {brands.map((brand, i) => (
                <TiltCard key={i}>
                  <motion.div variants={fadeUp} className={cardStyle}>
                    {brand}
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>

            <button className="mt-12 px-8 py-3 bg-white text-black rounded-full">
              Explore Leasing Opportunities
            </button>

          </div>

        </SectionWrapper>
      </div>

    </section>
  );
};

export default Retail;