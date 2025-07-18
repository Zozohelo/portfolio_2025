import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

// Socials config
const socials = [
  {
    name: "E-mail",
    icon: <FaEnvelope />,
    link: "https://mail.google.com/",
    color: "text-blue-500",
    value: "zoltankozma39@gmail.com",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    link: "https://discord.com/",
    color: "text-indigo-500",
    value: "z o z o",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=100004340988481",
    color: "text-blue-800",
    value: "Zoltán Kozma",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    color: "text-pink-500",
    value: "_zoltankozma_",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Zozohelo",
    color: "text-gray-800",
    value: "Zozohelo",
  },
];

// Animációk
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.65, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "tween", delay: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      id="elerhetoseg"
      className="w-full bg-gradient-to-t from-gray-700 via-blue-400 to-gray-950 py-10 mt-12 border-t border-blue-200"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Logo és név középre animációval */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full shadow-md object-contain mb-2"
            variants={logoVariants}
          />
          <motion.h3
            className="text-xl font-bold text-white text-center"
            variants={nameVariants}
          >
            {t.profileName}
          </motion.h3>
          <motion.span
            className="text-white font-bold text-sm mt-1 text-center"
            variants={nameVariants}
          >
            {t.profileRole}
          </motion.span>
        </motion.div>
        {/* Social ikonok animáltan, egysorban, középen */}
        <motion.div
          className="flex flex-row flex-wrap justify-center gap-4 w-full mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className={`
                flex flex-col items-center justify-center
                w-28 h-28 sm:w-32 sm:h-32
                bg-white/80 rounded-2xl shadow-md border border-blue-200
                transition
                cursor-pointer
              `}
            >
              <span
                className={`text-3xl sm:text-4xl transition-all ${s.color}`}
              >
                {s.icon}
              </span>
              <span className="font-semibold text-blue-800 text-sm mt-2 text-center">
                {s.name}
              </span>
              <span className="text-blue-600 text-xs mt-1 break-all text-center">
                {s.name === "E-mail" ? (
                  <span className="">{s.value}</span>
                ) : (
                  s.value
                )}
              </span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="text-white text-xs text-center opacity-80 px-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} {t.footerCopyright}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
