"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const title_1 = __importDefault(require("./shared/title"));
const lucide_react_1 = require("lucide-react");
const progress_1 = require("./ui/progress");
const Experience = () => {
    return (<div className="p-6 md:px-12 py-6 md:py-36 max-w-5xl mx-auto" id="experience">
            <title_1.default title="Experiencia" subtitle="Mi experiencia"/>
       
            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {data_1.dataExperience.map((data) => (<div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.experience.map((item) => (<div key={item.name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                        <lucide_react_1.BadgeCheck />{item.name}
                                    </p>
                                    <p className="text-gray-400 ">{item.subtitle}</p>
                                    <progress_1.Progress value={item.value} className="w-[60%]"/>
                                </div>))}
                        </div>
                    </div>))}
            </div>
        </div>);
};
exports.default = Experience;
