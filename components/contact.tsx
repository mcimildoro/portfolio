import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-4 md:ox-12 md:pty-44 max-w-5xl mx-auto" id="contact">
            <Title title="Contact" subtitle="Ponte en contacto conmigo 📩"/>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((contact) => (
                        <div key={contact.id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
                            {contact.icon}
                            <p>{contact.title}</p>
                            <p>{contact.subtitle}</p>
                            <Link href={contact.link} target="_blank">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}                   
                </div>

                <div className="col-span-2">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}

export default Contact;