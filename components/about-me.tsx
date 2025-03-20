"use client"
import Image from "next/image";

import {  about } from "../data";

import { motion  } from 'framer-motion';
import { CodeXml, Palette , Globe , Zap } from 'lucide-react';


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
const aboutIcons = {
    CodeXml: (props: React.ComponentProps<typeof CodeXml>) => <CodeXml  {...props} />,
    Palette: (props:  React.ComponentProps<typeof Palette>) => <Palette {...props} />,
    Globe: (props:  React.ComponentProps<typeof Globe>) => <Globe {...props} />,
    Zap: (props:  React.ComponentProps<typeof Zap>) => <Zap {...props} />,
};


const AboutMe = () => {
   
    return (
        <section id="about" className="py-20 md:py-32 bg-muted/30 dark:bg-muted/10 relative">
            <div className="container mx-auto px-4">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
                >
                <motion.h2 variants={fadeIn} custom={0} className="text-3xl md:text-4xl font-bold mb-4">
                    About Me
                </motion.h2>
                <motion.div variants={fadeIn} custom={1} className="w-20 h-1 bg-primary mx-auto mb-8" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform -rotate-6" />
                    <div className="absolute inset-0 bg-background/90 dark:bg-background/80 backdrop-blur-sm rounded-2xl border border-border transform rotate-3" />
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                        src="/cvme.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className="object-cover h-full w-full rounded-2xl"
                    />
                        
                    </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Hi, I`m <span className="text-primary">Miguel Cimildoro</span>
                    </h3>
                    <p className="text-foreground/80 mb-6">
                        Passionate Frontend Developer focused on building modern, fast, and user-friendly web applications. I specialize in React, Next.js, TailwindCSS, 
                        and performance optimization to create seamless digital experiences.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        
                    {about.map((item) => (
                       
                        <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.4 + item.id * 0.1, duration: 0.6 }}
                        className="flex flex-col items-center sm:items-start"
                        >
                            {aboutIcons[item.icon as keyof typeof aboutIcons]?.({ size: 25, color: "#fff", strokeWidth: 1 })}
                            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-foreground/70 text-center sm:text-left">{item.description}</p>
                        </motion.div>
                    ))}
                    </div>
                    
                </motion.div>
                </div>
            </div>
        </section>
       
    );
}

export default AboutMe;



