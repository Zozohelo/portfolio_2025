const translations = {
  hu: {
    home: "Kezdőlap",
    about: "Rólam",
    works: "Munkáim",
    contact: "Elérhetőség",
    welcome: "Üdvözöllek!",
    description:
      "Kozma Zoltán vagyok, Frontend fejlesztéssel foglalkozom. Szenvedélyem a modern, letisztult és reszponzív weboldalak, mobil applikációk készítése, amelyek nemcsak jól néznek ki, de felhasználóbarátok is.",
    contacts: "Elérhetőségek",
    myworks: "Munkáim",

    // About/Skills rész
    aboutTitle: "Rólam",
    profileName: "Kozma Zoltán",
    profileRole: "Frontend fejlesztő",
    aboutSectionTitle: "Technológiák, amiket ismerek",
    age: "19 éves vagyok",
    education: "szoftverfejlesztő és tesztelő szakon végeztem a technikumban.",
    aboutParagraph1:
      "A programozás világa már korán magával ragadott, különösen a webfejlesztés terén érzem igazán otthon magam.",
    aboutParagraph2:
      "Szenvedélyem a modern, esztétikus weboldalak készítése, és úgy gondolom, hogy a projektjeim ezt tükrözik is – mindig törekszem a letisztult, egyedi megjelenésre és a felhasználóbarát élményre.",
    aboutParagraph3:
      "Nyitott vagyok az új technológiákra, folyamatosan fejlesztem magam, mert hiszek a tanulás és fejlődés erejében. Készen állok arra, hogy új kihívásokkal találkozzak és még jobbá váljak!",

    // Works/projektek section
    worksTitle: "Munkáim",
    projects: [
      {
        title: "Tenisz weboldal",
        description:
          "Egy modern, reszponzív one-page tenisz weboldal, amely Reactban készült. A navigációt React Router biztosítja, a letisztult dizájnt Tailwind CSS-sel alakítottam ki, míg a látványos animációkért a Framer Motion felel. A látogatók könnyedén böngészhetnek a termékek és szolgáltatások között.",
      },

      {
        title: "Projektkezelő iskolai projekt",
        description:
          "Ezt a projektkezelő alkalmazást a szakmai vizsga egyik részeként készítettük. Egy React és Laravel alapú projekt, Tailwind CSS-sel és animációkkal megvalósítva. A vizsgabiztosoknak nagyon tetszett.",
      },
      {
        title: "Projektkezelő böngésző felület",
        description:
          "A projektek és feladatok áttekintését, gyors böngészését biztosító modern felület.",
      },
      {
        title: "Projektkezelő előfizetés felület",
        description:
          "Az előfizetések és csomagok kezelését segítő, átlátható dizájn és egyszerű használat.",
      },
      {
        title: "Projekt létrehozás felület",
        description:
          "Új projekt létrehozására szolgáló intuitív, modern dizájnú oldal.",
      },
      {
        title: "Feladatkezelő",
        description:
          "Ez egy React és Laravel alapokra épült feladatkezelő modul, melynek letisztult dizájnját Tailwind CSS biztosítja. A feladatokat egyszerűen lehet áthúzni egyik oszlopból a másikba drag-and-drop módszerrel, és minden művelet valós időben mentődik az adatbázisba.",
      },
      {
        title: "NextTech Webshop",
        description:
          "React frontend és Laravel backend alapokra épült, modern, reszponzív és felhasználóbarát webshop. A dizájnt Tailwind CSS és különböző animációk teszik vonzóvá, valós idejű adatkezeléssel és élvezetes felhasználói élménnyel.",
      },
    ],
    footerCopyright: "Kozma Zoltán. Minden jog fenntartva.",
  },
  en: {
    home: "Home",
    about: "About",
    works: "My Works",
    contact: "Contact",
    welcome: "Welcome!",
    description:
      "I'm Zoltán Kozma, a Frontend developer. My passion is creating modern, clean, and responsive websites and mobile apps that not only look great but are also user-friendly.",
    contacts: "Contact",
    myworks: "My Works",

    // About/Skills section
    aboutTitle: "About Me",
    profileName: "Zoltán Kozma",
    profileRole: "Frontend developer",
    aboutSectionTitle: "Technologies I Use",
    age: "I'm 19 years old",
    education:
      "I graduated as a software developer and tester at technical school.",
    aboutParagraph1:
      "I was captivated by the world of programming early on, and I truly feel at home in web development.",
    aboutParagraph2:
      "My passion is creating modern, aesthetic websites, and I believe my projects reflect this – I always strive for a clean, unique design and a user-friendly experience.",
    aboutParagraph3:
      "I'm open to new technologies and constantly improving myself, because I believe in the power of learning and growth. I'm ready to face new challenges and become even better!",
    worksTitle: "My Works",
    projects: [
      {
        title: "Tennis Website",
        description:
          "A modern, responsive one-page tennis website built with React. Navigation is handled by React Router, the clean design is crafted with Tailwind CSS, and smooth animations are powered by Framer Motion. Visitors can easily browse products and services.",
      },

      {
        title: "Project Management School Project",
        description:
          "This project management application was created as part of our professional exam. It is a React and Laravel based project, styled with Tailwind CSS and enhanced with animations. The examiners were very impressed with the result.",
      },

      {
        title: "Project Browser Interface",
        description:
          "A modern interface for a quick overview and browsing of projects and tasks.",
      },
      {
        title: "Subscription Management Interface",
        description:
          "A clear design and easy-to-use interface for managing subscriptions and packages.",
      },
      {
        title: "Project Creation Page",
        description: "An intuitive, modern page for creating new projects.",
      },
      {
        title: "Task Management",
        description:
          "A task management feature built with React and Laravel, featuring a sleek Tailwind CSS design. Tasks can be easily moved between columns using drag-and-drop, with every action instantly saved to the database in real time.",
      },
      {
        title: "NextTech Webshop",
        description:
          "A modern, responsive and user-friendly webshop built with a React frontend and Laravel backend. The clean design is styled with Tailwind CSS and enhanced by various animations, providing real-time data handling and an engaging user experience.",
      },
    ],
    footerCopyright: "Zoltán Kozma. All rights reserved.",
  },
};

export default translations;
