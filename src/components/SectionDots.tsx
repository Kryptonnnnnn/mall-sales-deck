import { useEffect, useState } from "react";

const sections = [
  "why",
  "retail",
  "luxury",
  "dining",
  "entertainment",
  "events",
  "location",
];

const SectionDots = () => {
  const [active, setActive] = useState("why");

  useEffect(() => {
    const handleScroll = () => {
      let current = "why";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 200;
          if (window.scrollY >= top) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-2 h-2 rounded-full transition ${
            active === id ? "bg-white scale-125" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
};

export default SectionDots;