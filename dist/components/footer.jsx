"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const separator_1 = require("@/components/ui/separator");
const Footer = () => {
    return (<footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between  mt-8">
                <div className="md:flex md:justify-between">
                    <h4 className="text-3xl font-bold my-6 md:my-0">mcimildoro</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <link_1.default href="#about-me">Sobre mi</link_1.default>
                    <link_1.default href="#skills">Skills</link_1.default>
                    <link_1.default href="#services">Servicios</link_1.default>
                    <link_1.default href="#portfolio">Portfolio</link_1.default>
                    <link_1.default href="#contact">Contacto</link_1.default>
                </div>
            </div>

            <separator_1.Separator className='my-4'/>
            <div className="text-center">
                <p>&copy; 2025 mcimildoro. All rights reserved.</p>
            </div>
        </footer>);
};
exports.default = Footer;
