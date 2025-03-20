"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import  Flag  from "react-world-flags"; // Usa esta librería para banderas

export function ToggleLanguage() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      {language === "en" ? (
        <Flag code="us" className="w-6 h-6" /> // 🇺🇸
      ) : (
        <Flag code="es" className="w-6 h-6" /> // 🇪🇸
      )}
      <span className="sr-only">
        {language === "en" ? "Cambiar a Español" : "Switch to English"}
      </span>
    </Button>
  );
}

export default ToggleLanguage;
