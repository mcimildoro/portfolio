import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Container from './shared/container';

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m Miguel</h3>
                <h1 className="text-4xl font-bold mb-2" >Cimildoro💻</h1>
                <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
                
                <div className="flex items-center justify-center mt-5">

                    <div className="flex flex-col md:flex-row gap-2 justify-center mx-auto">
                        <Link className={buttonVariants()} href="#contact">  
                            <Mail className="mr-2"/>Contacta conmigo
                        </Link>

                        <Link className={buttonVariants({variant: "secondary"})} href="/CVmc.pdf" target="_blank">  
                            <Paperclip className="mr-2"/>Descargar CV
                        </Link>              
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <Image  src="/profilem2.png" alt="Profile pic" width={400} height={400} />
                </div>
            </div>
        </Container>
    );
};
export default Introduction;
