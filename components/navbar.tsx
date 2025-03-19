"use client"
import React from "react";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > window.innerHeight * 0.2); // Se muestra al 20% de la pantalla
        };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <motion.nav
            variants={fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-20 flex flex-col items-center  w-full mt-auto justify-center h-max bottom-20"
            >
                <div className="flex item-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10  background-blur-sm rounded-full">
                    {itemsNavbar.map((item) => (
                        <div key={item.id} className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150">
                            <Link href={item.link} aria-label={item.title}>
                                {item.icon()} {/* Ícono */}
                                <span className="sr-only">{item.title}</span> {/* Texto oculto para accesibilidad */}
                            </Link>
                        </div>
                    ))}
                    <ToggleTheme />
                </div>
        </motion.nav>
    );
}

export default Navbar;

