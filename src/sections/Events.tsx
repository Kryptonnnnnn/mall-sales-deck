import SectionWrapper from "../components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const events = [
  {
    title: "Live Concerts",
    desc: "Host large-scale concerts with global artists and thousands of attendees.",
  },
  {
    title: "Brand Launches",
    desc: "Premium space for high-impact product launches and campaigns.",
  },
  {
    title: "Immersive Experiences",
    desc: "Create unforgettable brand activations and audience engagement.",
  },
];

const stats = [
  { value: "100+", label: "Events Per Year" },
  { value: "1M+", label: "Event Visitors" },
  { value: "Global", label: "Audience Reach" },
];

const Events = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen w-full flex items-center">

      <div className="absolute inset-0">
        <img src="/images/events.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full">
        <SectionWrapper>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              A Global Platform for Events & Experiences
            </h2>

            <p className="text-gray-400 mb-10">
              Transform your brand into an unforgettable experience with
              world-class venues and massive audience reach.
            </p>

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-bold">{s.value}</h3>
                  <p className="text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActive(i)}
                  className="cursor-pointer p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  {event.title}
                </motion.div>
              ))}
            </div>

            <button className="mt-12 px-8 py-3 bg-white text-black rounded-full">
              Book an Event
            </button>

          </div>

          <AnimatePresence>
            {active !== null && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setActive(null)}
              >
                <motion.div className="bg-black p-10 rounded-2xl border border-white/10 max-w-md">
                  <h3 className="text-3xl font-bold mb-4">
                    {events[active].title}
                  </h3>
                  <p className="text-gray-400">{events[active].desc}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </SectionWrapper>
      </div>

    </section>
  );
};

export default Events;