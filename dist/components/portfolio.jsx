"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const title_1 = __importDefault(require("./shared/title"));
const image_1 = __importDefault(require("next/image"));
const button_1 = require("./ui/button");
const link_1 = __importDefault(require("next/link"));
const Portfolio = () => {
    return (<div className='p-4 max-w-4xl md:py-24 mx-auto' id='portfolio'>
            <title_1.default title="Portfolio" subtitle='Trabajos recientes 💼'/>

            <div className='grid md:grid-cols-3 mt-4 gap-14 '>
                {data_1.dataPortfolio.map((data) => (<div key={data.id}>
                        <h3 className='text-xl mb-4'>{data.title}</h3>
                        <image_1.default src={data.image} alt="Image" height={300} width={600} className="rounded-2xl"/>
                   
                    
                        <div className='flex mt-5 gap-5'>
                            <link_1.default className={(0, button_1.buttonVariants)({ variant: "outline" })} href={data.urlGithub}>Github</link_1.default>
                        </div>
                    </div>))}
            </div>
        </div>);
};
exports.default = Portfolio;
