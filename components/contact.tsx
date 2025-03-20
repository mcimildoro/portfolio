"use client"
//import { dataContact } from "@/data";
import Link from "next/link";
import ContactForm from "./contact-form";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage(); 
    return (
        <section className="bg-background dark:bg-background-dark">
            <div className="p-4 md:ox-12 md:pty-44 max-w-5xl mx-auto" id="contact">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-8" />
                    
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                    <div>
                        {t.contact.form.map((contact) => (
                            <div key={contact.id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
                                {contact.icon()}
                                <p>{contact.title}</p>
                                
                                <Link href={contact.link} target="_blank"
                                    className={buttonVariants({variant: "link"})}
                                >
                                    {contact.subtitle}
                                </Link>
                            </div>
                        ))}                   
                    </div>

                    <div className="col-span-2">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;