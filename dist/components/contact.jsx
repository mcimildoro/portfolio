"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const title_1 = __importDefault(require("./shared/title"));
const link_1 = __importDefault(require("next/link"));
const contact_form_1 = __importDefault(require("./contact-form"));
const Contact = () => {
    return (<div className="p-4 md:ox-12 md:pty-44 max-w-5xl mx-auto" id="contact">
            <title_1.default title="Contact" subtitle="Ponte en contacto conmigo 📩"/>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {data_1.dataContact.map((contact) => (<div key={contact.id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
                            {contact.icon}
                            <p>{contact.title}</p>
                            <p>{contact.subtitle}</p>
                            <link_1.default href={contact.link} target="_blank">
                                Enviar mensaje
                            </link_1.default>
                        </div>))}                   
                </div>

                <div className="col-span-2">
                    <contact_form_1.default />
                </div>

            </div>
        </div>);
};
exports.default = Contact;
