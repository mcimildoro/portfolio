"use client"
import Image from "next/image";

import { dataAboutMe, dataSlider } from "../data";
import Link from "next/link";
import { dataPhone } from "../data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";



const AboutMe = () => {
    return (
        <div className="p-6 md:px-12  max-w-5xl mx-auto" id="about-me">
            <Title title=" " subtitle="About me" />
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justigy-center">
                    {/* CAROUSEl */}    
                    <Carousel opts={{align: "start"}} orientation="vertical" className="w-full max-w-sm h-fit">
                        <CarouselContent className="-mt-1 h-[300px]">
                            {dataSlider.map((data) =>
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg" />
                                        
                                       
                                    </div>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-1 mt-7 gap-4 ">
                        {dataAboutMe.map((data) =>  
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md  dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        )}
                    </div>
                    <p className="my-8">
                    I am a frontend developer with experience in technologies such as React, Node.js, Python, JavaScript, Git, Tailwind CSS, and more.
                    ditionally, I have experience in developing industrial applications using Ignition Automation (SCADA) and specialized tools for process monitoring and control.
                    I Adam passionate about learning new technologies, tackling complex challenges, and sharing knowledge with the community, always striving to optimize performance and user experience in every project.</p>
                
                        {dataPhone.map((contact) => (
                            <div key={contact.id}>
                                <Link href={contact.link} target="_blank">
                                    <Button>{contact.icon}Shall we talk?</Button>
                                </Link>
                            </div>
                        ))}

                    
                </div>   
            </div>
        </div>
    );
}

export default AboutMe;