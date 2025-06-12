import { createContext, useContext, useState, type ReactNode } from "react";
import translations from "./translations.tsx";

type Language = "hu" | "en";
type Translations = typeof translations;

interface LanguageContextProps {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<Language>("hu");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
