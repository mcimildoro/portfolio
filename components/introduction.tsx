"use client"
import Link from 'next/link';

import { Button, buttonVariants } from "./ui/button";
import { motion } from 'framer-motion';
import { Paperclip, ArrowDown } from "lucide-react";

import { useEffect, useState } from 'react';

const Introduction = () => {

    const [text, setText] = useState("")
      const fullText = "Front-end developer"
      const [index, setIndex] = useState(0)
      
      useEffect(() => {
        if (index < fullText.length) {
          const timeout = setTimeout(() => {
            setText((prev: string) => prev + fullText[index])
            setIndex((prev: number) => prev + 1)
          }, 100)
          return () => clearTimeout(timeout)
        }
      }, [index])

    return (
     


        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
            <div className="absolute inset-0 -z-10 ">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/20 dark:from-primary/10 dark:to-background/30" />
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
					Building modern, fast, and intuitive web experiences.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.5, duration: 0.8 }}
					className="flex flex-col sm:flex-row justify-center gap-4">
				<Button size="lg" asChild>
					<a href="#projects">View My Work</a>
				</Button>
				<Button size="lg" variant="outline" asChild>
					<a href="#contact">Get In Touch</a>
				</Button>
                <Link className={buttonVariants({variant: "secondary"})} href="/CVMiguelCimildoro2025E.pdf" target="_blank">  
                    <Paperclip className="mr-2"/>Download CV
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
                <span className="mb-2">Scroll Down</span>
                <ArrowDown className="animate-bounce" />
                </a>
            </motion.div>
        </section>
        
    );
};
export default Introduction;
// Remove the custom useState function

