"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const button_1 = require("./ui/button");
const lucide_react_1 = require("lucide-react");
const container_1 = __importDefault(require("./shared/container"));
const Introduction = () => {
    return (<container_1.default>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m Miguel</h3>
                <h1 className="text-4xl font-bold mb-2">Cimildoro💻</h1>
                <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
                
                <div className="flex items-center justify-center mt-5">

                    <div className="flex flex-col md:flex-row gap-2 justify-center mx-auto">
                        <link_1.default className={(0, button_1.buttonVariants)()} href="#contact">  
                            <lucide_react_1.Mail className="mr-2"/>Contacta conmigo
                        </link_1.default>

                        <link_1.default className={(0, button_1.buttonVariants)({ variant: "secondary" })} href="/CVmc.pdf" target="_blank">  
                            <lucide_react_1.Paperclip className="mr-2"/>Descargar CV
                        </link_1.default>              
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <image_1.default src="/profilem2.png" alt="Profile pic" width={400} height={400}/>
                </div>
            </div>
        </container_1.default>);
};
exports.default = Introduction;
