"use client"

import { motion } from "framer-motion";
import { skills } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
    const { t } = useLanguage(); 
    return (
        <>
       

            <section id="skills" className="py-20 md:py-32 bg-background dark:bg-background-dark">
            <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-8" />
                <p className="text-foreground/80 max-w-2xl mx-auto">
                    {t.skills.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup, groupIndex) => (
                <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
                    className="bg-card rounded-lg p-6 border border-border shadow-sm"
                >
                    <h3 className="text-xl font-bold mb-6 text-center">{skillGroup.category}</h3>
                    <div className="space-y-6">
                    {skillGroup.items.map((skill, index) => (
                        <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1 + groupIndex * 0.2,
                        }}
                        >
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-foreground/70">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1 + groupIndex * 0.2,
                            }}
                            className="h-full bg-primary rounded-full"
                            />
                        </div>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
            </section>
</>
    )
}

export default Experience;