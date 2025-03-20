"use client"

import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data";
import { useLanguage } from "@/context/LanguageContext";


const Services = () => {
    const { t } = useLanguage(); 

    return (
        <section id="experience" className="py-20 md:py-32 bg-background dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                    >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8" />
                        <p className="text-foreground/80 max-w-2xl mx-auto">{t.experience.description}</p>
                </motion.div>
                    <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                {t.experience.exp.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className={`relative mb-12 md:mb-24 ${
                            index % 2 === 0 || index === experiences.length - 1 ? "md:text-right md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:ml-0 md:mr-auto"
                        } ml-12 md:ml-auto md:w-1/2`}
                        >
                        {/* Timeline dot */}
                        <div
                            className={`absolute top-0 left-0 md:left-auto ${
                            index % 2 === 0 || index === experiences.length - 1 ? "md:right-0 md:-mr-3" : "md:left-0 md:-ml-3"
                            } -ml-3 w-6 h-6 rounded-full bg-primary border-4 border-background`}
                        />

                        <div className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold mb-1">{exp?.title}</h3>
                            <h4 className="text-primary font-medium mb-3">{exp?.company}</h4>
                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {exp?.period}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {exp?.location}
                            </div>
                            </div>
                            <p className="text-foreground/80">{exp?.description}</p>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Services;