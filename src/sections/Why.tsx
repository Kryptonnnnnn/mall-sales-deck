import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../utils/animations";
import AIInsights from "../components/AIInsights";

const data = [
  { title: "750+", subtitle: "Global Retail & Dining Brands" },
  { title: "2M+ sq ft", subtitle: "Prime Premium Retail Space" },
  { title: "40M+", subtitle: "Annual Visitors & Growing" },
];

const cardStyle = `
p-10 rounded-2xl 
bg-white/5 backdrop-blur-xl 
border border-white/10 
hover:scale-105 hover:bg-white/10 
transition duration-300 
shadow-[0_0_40px_rgba(255,255,255,0.05)]
`;

const Why = () => {
  return (
    <section
      id="why"
      className="relative min-h-screen w-full flex items-center snap-start"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src="/images/why.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              The Region’s Most Powerful Retail Destination
            </motion.h2>

            {/* SUBTEXT */}
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Dubai Hills Mall is not just a shopping center — it’s a high-impact
              commercial ecosystem designed to maximize visibility, engagement,
              and revenue for brands, partners, and experiences.
            </p>

            {/* STATS */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-10"
            >
              {data.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className={cardStyle}>
                  <h3 className="text-4xl font-bold">{item.title}</h3>
                  <p className="text-gray-400 mt-3">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* 🔥 AI SECTION (VERY IMPORTANT) */}
            <AIInsights />

            {/* CTA */}
            <button className="mt-12 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
              Explore Partnership Opportunities
            </button>

          </div>

        </SectionWrapper>
      </div>

    </section>
  );
};

export default Why;