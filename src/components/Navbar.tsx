import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { TbManFilled } from "react-icons/tb";
import { useLanguage } from "../contexts/LanguageContext";
import "../Navbar.css";

const flags = {
  hu: "/images/hun.png",
  en: "/images/eng.png",
};

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => setLang(lang === "hu" ? "en" : "hu");
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 dark:bg-gray-900 shadow transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <img className="h-12 w-12" src="/images/logo.png" alt="logo" />
        </a>

        {/* Hamburger menu (mobilon) */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // X icon
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Menü (mobil + desktop) */}
        <div
          id="navbar-menu"
          className={`
            Navbar__menu
            ${menuOpen ? "Navbar__menu--open" : ""}
            md:static md:flex md:flex-row md:items-center md:bg-transparent md:shadow-none md:border-0 md:w-auto md:gap-0 md:top-auto md:left-auto
          `}
        >
          <ul className="font-medium flex flex-col items-center justify-center md:flex-row md:space-x-8 w-full md:w-auto text-center md:text-left gap-3">
            <li>
              <a
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <AiFillHome />
                {t.home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <TbManFilled />
                {t.about}
              </a>
            </li>
            <li>
              <a
                href="#munkaim"
                onClick={closeMenu}
                className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <FaLaptopCode />
                {t.works}
              </a>
            </li>
            <li>
              <a
                href="#elerhetoseg"
                onClick={closeMenu}
                className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <MdContactSupport />
                {t.contacts}
              </a>
            </li>
            {/* Nyelvválasztó csak mobil menüben */}
            <li className="flex justify-center md:hidden">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 border rounded-full px-3 py-1 dark:hover:bg-gray-700 transition mt-2 mb-2"
                aria-label="Nyelvválasztó"
              >
                <img
                  src={flags[lang]}
                  alt={lang === "hu" ? "Magyar" : "English"}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {lang === "hu" ? "HU" : "EN"}
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Nyelvválasztó csak desktopon */}
        <div className="ml-4 items-center hidden md:flex">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Nyelvválasztó"
          >
            <img
              src={flags[lang]}
              alt={lang === "hu" ? "Magyar" : "English"}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {lang === "hu" ? "HU" : "EN"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
