"use client"
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"
import { useLanguage } from '@/context/LanguageContext';


const Footer = () => {
    const { t } = useLanguage(); 
    return (
        <section className="bg-background dark:bg-background-dark">
            <footer className="max-w-3xl mx-auto ">
                <div className="md:flex md:justify-between  mt-8">
                    <div className="md:flex md:justify-between">
                        <h4 className="text-3xl font-bold my-6 md:my-0 text-center">mcimildoro</h4>
                    </div>
                    <div className="px-2 flex justify-between md:gap-8 items-center">
                        <Link href="#about-me">{t.footer.about}</Link>
                        <Link href="#skills">{t.footer.skills}</Link>
                        <Link href="#projects">{t.footer.projects}</Link>
                        <Link href="#experience">{t.footer.experience}</Link>
    
                    
                    </div>
                </div>

                <Separator className='my-4'/>
                <div className="text-center">
                    <p>&copy; 2025 mcimildoro. {t.footer.derechos}</p>
                </div>
            </footer>
        </section>
    );  
}

export default Footer;