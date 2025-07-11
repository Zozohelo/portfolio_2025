import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import TypewriterEffect from "typewriter-effect";
import LetterGlitch from "../LetterGlicth"; // <--- importáld be!
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};

const rightVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};

const textVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.7 } },
};

const avatarVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.4 },
  },
};

const MainPage = () => {
  const { t } = useLanguage();
  const words = t.welcome;
  return (
    <motion.div
      className="w-full p-6 md:p-10 mt-20 relative flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* LetterGlitch háttér */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Tartalom overlay */}
      <motion.div
        className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 gap-12"
        variants={containerVariants}
      >
        {/* Bal oldal: Szöveg és gombok */}
        <motion.div
          className="flex-1 flex flex-col gap-8 w-full"
          variants={leftVariants}
        >
          <motion.div variants={textVariants}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg text-center md:text-start">
              <TypewriterEffect
                options={{ strings: words, autoStart: true, loop: true }}
              />
            </h1>
            <p className="text-lg md:text-xl text-blue-800 font-medium text-center md:text-start">
              {t.description}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 items-center w-full md:flex-row md:gap-6 md:items-start md:justify-start mt-2"
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#elerhetoseg"
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-transform duration-300"
            >
              <MdEmail />
              {t.contacts}
            </a>
            <a
              href="#munkaim"
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-blue-600 text-blue-700 font-semibold shadow hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300"
            >
              <FaArrowAltCircleRight />
              {t.myworks}
            </a>
          </motion.div>
        </motion.div>

        {/* Jobb oldal: Avatar kép körben, effektussal */}
        <motion.div
          className="flex-1 flex items-center justify-center w-full"
          variants={rightVariants}
        >
          <motion.div
            className="relative w-80 h-80 sm:w-48 sm:h-48 md:w-full md:h-80 flex items-center justify-center mt-2 md:mt-0 group"
            variants={avatarVariants}
          >
            <img
              className="relative z-10 w-full h-full"
              style={{ objectFit: "contain" }} // vagy akár el is hagyhatod
              src="/images/me.png"
              alt="Kozma Zoltán"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainPage;
