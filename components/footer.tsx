"use client"
import Link from 'next/link';
import { Separator } from "@/components/ui/separator"


const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between  mt-8">
                <div className="md:flex md:justify-between">
                    <h4 className="text-3xl font-bold my-6 md:my-0 text-center">mcimildoro</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">About me</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#projects">Portfolio</Link>
                    <Link href="#experience">Work Experience</Link>
  
                 
                </div>
            </div>

            <Separator className='my-4'/>
            <div className="text-center">
                <p>&copy; 2025 mcimildoro. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;