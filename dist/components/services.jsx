"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const title_1 = __importDefault(require("./shared/title"));
const lucide_react_1 = require("lucide-react");
const Services = () => {
    return (<div className="p-6 md:px-12 md:py-14 max-w-5xl mx-auto" id="services">
            <title_1.default title="Servicios" subtitle="Que ofrezco"/>

            <div className="grid md:grid-cols-2 gap-5 mt-7">
                {data_1.dataServices.map((service) => (<div key={service.id} className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit">
                        <h4 className="mb-4 text-xl flex gap-2">{service.icon}{service.title}</h4>
                        <ul className="list-disc ml-5">
                            {service.features.map((features, index) => (<li key={index} className="flex gap-3 mb-3">
                                    <lucide_react_1.Check size={20}/>
                                    {features.name}
                                </li>))}
                        </ul>
                    </div>))}
            </div>
        </div>);
};
exports.default = Services;
