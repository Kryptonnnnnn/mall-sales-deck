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

const Navbar = () => {
  const [active, setActive] = useState("why");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`text-xs tracking-widest transition ${
            active === item
              ? "text-white"
              : "text-white/40 hover:text-white"
          }`}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default Navbar;