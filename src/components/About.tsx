import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode } from "react-icons/fa";

// Ikonok pontos elérési úttal (ha a public/images-ben vannak)
const skills = [
  { name: "HTML", icon: "/images/html.png" },
  { name: "CSS", icon: "/images/css.png" },
  { name: "Laravel", icon: "/images/laravel.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "SQL", icon: "/images/sql.png" },
  { name: "Tailwind CSS", icon: "/images/tailwindcss.png" },
  { name: "Bootstrap", icon: "/images/bootstrap.png" },
  { name: "JavaScript", icon: "/images/javascript.png" },
];

// Animációs variációk
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.9 } },
};

const iconVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 110, delay: 0.2 },
  },
};

const leftVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.3, duration: 0.7 },
  },
};

const rightVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5, duration: 0.7 },
  },
};

const skillsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90 },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="w-full flex items-center justify-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={sectionVariants}
    >
      <motion.div
        className="w-full md:w-3/4 lg:w-2/3 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-14 flex flex-col items-center gap-8"
        variants={sectionVariants}
      >
        {/* Title */}
        <motion.div
          className="flex items-center gap-3 mb-2"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <FaGraduationCap className="text-blue-700 text-3xl" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 drop-shadow mb-1">
            Rólam
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          {/* Left: illustration or icon */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={leftVariants}
          >
            <div className="rounded-full bg-gradient-to-br from-blue-400 via-sky-300 to-blue-700 p-2 shadow-lg mb-4">
              <FaCode className="text-white text-6xl md:text-7xl" />
            </div>
            <span className="text-blue-600 font-bold text-lg">
              Kozma Zoltán
            </span>
            <span className="text-gray-500 font-medium">
              Szoftverfejlesztő • Tesztelő
            </span>
          </motion.div>
          {/* Right: description */}
          <motion.div
            className="text-blue-900 text-base md:text-xl leading-relaxed flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={rightVariants}
          >
            <p className="mb-4">
              <span className="font-semibold text-blue-800">
                19 éves vagyok
              </span>
              , szoftverfejlesztő és tesztelő szakon végeztem. A programozás
              világa már korán magával ragadott, különösen a webfejlesztés terén
              érzem igazán otthon magam.
            </p>
            <p className="mb-4">
              Szenvedélyem a modern, esztétikus{" "}
              <span className="font-semibold text-blue-700">weboldalak</span>{" "}
              készítése, és úgy gondolom, hogy a projektjeim ezt tükrözik is –
              mindig törekszem a letisztult, egyedi megjelenésre és a
              felhasználóbarát élményre.
            </p>
            <p className="mb-4">
              Nyitott vagyok az{" "}
              <span className="font-semibold text-blue-700">
                új technológiákra
              </span>
              , folyamatosan fejlesztem magam, mert hiszek a{" "}
              <span className="font-semibold text-blue-700">
                tanulás és fejlődés
              </span>{" "}
              erejében. Készen állok arra, hogy új kihívásokkal találkozzak és
              még jobbá váljak!
            </p>
          </motion.div>
        </div>

        {/* Skills cards */}
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Technológiák, amiket ismerek
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-items-center p-5"
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.24 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={skillCardVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(37, 99, 235, 0.13)",
                }}
                className={`
                  flex flex-col items-center justify-center
                  w-32 h-32 
                  bg-white/90 rounded-2xl
                  shadow-md border border-blue-100
                  transition
                  hover:scale-105 hover:shadow-2xl hover:border-blue-400
                  hover:bg-gradient-to-br hover:from-sky-100 hover:to-blue-100
                  cursor-pointer
                  group
                `}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain mb-2 transition group-hover:scale-110"
                  draggable={false}
                />
                <span className="font-semibold text-blue-700 text-base text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
