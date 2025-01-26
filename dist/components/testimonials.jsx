"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const title_1 = __importDefault(require("./shared/title"));
const carousel_1 = require("./ui/carousel");
const avatar_1 = require("./ui/avatar");
const Testimonials = () => {
    return (<div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
            <title_1.default title="Testimonials" subtitle="Review de los clientes"/>

            <carousel_1.Carousel className="mx-10 mt-6">
                <carousel_1.CarouselContent className="gap-8">
                    {data_1.dataTestimonials.map((testimonial) => (<carousel_1.CarouselItem key={testimonial.id} className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg">
                            <avatar_1.Avatar>
                                <avatar_1.AvatarImage src={testimonial.imageUrl} alt="Profile Avatar"/>
                                <avatar_1.AvatarFallback>
                                    {testimonial.name[0]}
                                </avatar_1.AvatarFallback>
                            </avatar_1.Avatar>
                            <div>
                                <p className="min-h-12 text-2xl mt-4">{testimonial.name}</p>
                                <p className=" text-slate-400 text-base font-semibold mt-1">{testimonial.titulo}</p>
                                <p className="italic text-slate-400 text-lg mt-2">{testimonial.description}</p>
                            </div>
                        </carousel_1.CarouselItem>))}
                </carousel_1.CarouselContent>    
                    <carousel_1.CarouselPrevious />
                    <carousel_1.CarouselNext /> 
            </carousel_1.Carousel>
        </div>);
};
exports.default = Testimonials;
