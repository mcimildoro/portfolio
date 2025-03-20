"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

// Definir los idiomas soportados
type Language = "en" | "es";

// Obtener los tipos de `translations`
type TranslationsType = typeof translations;

// Definir el contexto
const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: TranslationsType["en"]; // El objeto con los textos traducidos
}>({
  language: "en",
  toggleLanguage: () => {},
  t: translations.en,
});

// Hook personalizado para acceder al contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor de idioma
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Cargar idioma desde localStorage si existe
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage === "en" || storedLanguage === "es") {
      setLanguage(storedLanguage);
    }
  }, []);

  // Función para alternar el idioma
  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
