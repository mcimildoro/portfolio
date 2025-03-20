"use client"
import Link from 'next/link';

import { Button, buttonVariants } from "./ui/button";
import { motion } from 'framer-motion';
import { Paperclip, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"
import { useEffect, useState } from 'react';

const Introduction = () => {
    const { t } = useLanguage(); 
 
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)

    const fullText = t.descIntro.title
      
    useEffect(() => {
        // 🛑 Si el idioma cambia, reiniciar el estado del texto y del índice
        setText("");
        setIndex(0);
    }, [fullText]);

      useEffect(() => {
        if (index < fullText.length) {
          const timeout = setTimeout(() => {
            setText((prev: string) => prev + fullText[index])
            setIndex((prev: number) => prev + 1)
          }, 100)
          return () => clearTimeout(timeout)
        }
      }, [index, fullText])

    return (
     


        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16 bg-background dark:bg-background-dark">
            <div className="absolute inset-0 -z-10 ">
                <div className="absolute inset-0  from-primary/5 to-background/20 dark:from-primary/10 dark:to-background/30" />
            </div>
		  
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center">

				
				<h2 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-6">
                        {text}
					<span className="animate-pulse">|</span>
				</h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className="text-base md:text-1xl text-foreground/80 max-w-2xl mx-auto mb-8"
					>
					{t.descIntro.description}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.5, duration: 0.8 }}
					className="flex flex-col sm:flex-row justify-center gap-4">
				<Button size="lg" asChild>
					<a href="#projects">{t.descIntro.buttonWork}</a>
				</Button>
				<Button size="lg" variant="outline" asChild>
					<a href="#contact">{t.descIntro.buttonTouch}</a>
				</Button>
                <Link className={buttonVariants({variant: "secondary"})} href="/CVMiguelCimildoro2025E.pdf" target="_blank">  
                    <Paperclip className="mr-2"/>{t.descIntro.buttonCV}
                </Link>   
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="absolute bottom-10"
            >
                <a
                href="#about"
                className="flex flex-col items-center text-foreground/70 hover:text-foreground transition-colors"
                >
                <span className="mb-2">{t.descIntro.scroll}</span>
                <ArrowDown className="animate-bounce" />
                </a>
            </motion.div>
        </section>
        
    );
};
export default Introduction;
// Remove the custom useState function

