import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

// Saját projektjeid - leírások aktualizálva!
const projects = [
  {
    title: "Tenisz weboldal",
    image: "/images/munka1.png",
    description:
      "Egy modern, reszponzív tenisz weboldal, melyen a látogatók könnyedén böngészhetnek termékek és szolgáltatások között.",
    link: "",
  },
  {
    title: "Projektkezelő kezdőlap",
    image: "/images/munka3.png",
    description:
      "A projektkezelő alkalmazás letisztult, felhasználóbarát főoldala Tailwind CSS-sel megvalósítva.",
    link: "",
  },
  {
    title: "Projektkezelő böngésző felület",
    image: "/images/munka5.png",
    description:
      "A projektek és feladatok áttekintését, gyors böngészését biztosító modern felület.",
    link: "",
  },
  {
    title: "Projektkezelő előfizetés felület",
    image: "/images/munka6.png",
    description:
      "Az előfizetések és csomagok kezelését segítő, átlátható dizájn és egyszerű használat.",
    link: "",
  },
  {
    title: "Projekt létrehozás felület",
    image: "/images/munka7.png",
    description:
      "Új projekt létrehozására szolgáló intuitív, modern dizájnú oldal.",
    link: "",
  },
  {
    title: "Feladatkezelő modul",
    image: "/images/munka8.png",
    description:
      "A projektekhez tartozó feladatok hatékony kezelését lehetővé tevő felület.",
    link: "",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, delay: 0.18 },
  },
  exit: { opacity: 0, y: -22, transition: { duration: 0.3 } },
};

const Works = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Lapozás (irány szerint)
  const handleManualNav = (arg: number) => {
    if (arg === -1) {
      setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else if (arg === 1) {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    } else if (typeof arg === "number") {
      setCurrent(arg);
    }
  };

  return (
    <section
      id="munkaim"
      className="w-full flex flex-col items-center justify-center py-20 px-4"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 drop-shadow text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        {t.worksTitle}
      </motion.h2>
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Carousel kép */}
        <div className="w-full h-[60vw] md:h-[40rem] max-h-[80vh] rounded-3xl overflow-hidden flex items-center justify-center shadow-xl transition-all duration-500 bg-white/70">
          <img
            key={projects[current].image}
            src={projects[current].image}
            alt={t.projects[current].title}
            className="object-contain w-full h-full transition-all duration-500"
            style={{
              maxHeight: "70vh",
              maxWidth: "100%",
              margin: "0 auto",
              display: "block",
            }}
            draggable={false}
          />
        </div>
        {/* Bal/jobb gomb */}
        <button
          onClick={() => handleManualNav(-1)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-blue-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold transition z-10"
          aria-label="Előző projekt"
          style={{ outline: "none" }}
        >
          &#8592;
        </button>
        <button
          onClick={() => handleManualNav(1)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-100 text-blue-700 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold transition z-10"
          aria-label="Következő projekt"
          style={{ outline: "none" }}
        >
          &#8594;
        </button>
        {/* Leírás */}
        <div className="w-full mt-8 p-8 bg-white/90 rounded-2xl shadow text-center max-w-3xl min-h-[135px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.projects[current].title}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              className="w-full"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {t.projects[current].title}
              </h3>
              <p className="text-blue-900 mb-2">
                {t.projects[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Carousel pontok */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualNav(idx)}
              aria-label={`Ugrás a(z) ${idx + 1}. projekthez`}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                idx === current
                  ? "bg-blue-600 border-blue-600 scale-110"
                  : "bg-blue-300 border-blue-200"
              }`}
              style={{
                outline: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
