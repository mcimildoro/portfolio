"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const image_1 = __importDefault(require("next/image"));
const data_1 = require("../data");
const title_1 = __importDefault(require("./shared/title"));
const carousel_1 = require("./ui/carousel");
const button_1 = require("./ui/button");
const AboutMe = () => {
    return (<div className="p-6 md:px-12  max-w-5xl mx-auto" id="about-me">
            <title_1.default title="Sobre Mi" subtitle="Conoceme"/>
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justigy-center">
                    {/* CAROUSEl */}    
                    <carousel_1.Carousel opts={{ align: "start" }} orientation="vertical" className="w-full max-w-sm h-fit">
                        <carousel_1.CarouselContent className="-mt-1 h-[300px]">
                            {data_1.dataSlider.map((data) => <carousel_1.CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <image_1.default src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg"/>
                                        
                                       
                                    </div>
                                </carousel_1.CarouselItem>)}
                        </carousel_1.CarouselContent>
                        <carousel_1.CarouselPrevious />
                        <carousel_1.CarouselNext />
                    </carousel_1.Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-1 mt-7 gap-4 ">
                        {data_1.dataAboutMe.map((data) => <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md  dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>)}
                    </div>
                    <p className="my-8">
                        Soy un desarrollador frontend y fullstack con experiencia en tecnologías como React, Node.js, Python, JavaScript, Git, TailwindCSS, y más. 
                        También cuento con experiencia en el desarrollo de aplicaciones industriales utilizando Ignition Automation (SCADA) y herramientas relacionadas. 
                        Me apasiona aprender nuevas tecnologías, afrontar retos complejos y compartir mis conocimientos con la comunidad.</p>

                    <button_1.Button>
                        <lucide_react_1.Phone size={24} className="mr-2"/>Hablamos
                    </button_1.Button>

                </div>   
            </div>
        </div>);
};
exports.default = AboutMe;
