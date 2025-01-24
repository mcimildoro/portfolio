import { dataTestimonials } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselContent } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";


const Testimonials = () => {
    return (
        <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="Testimonials" subtitle="Review de los clientes"/>

            <Carousel className="mx-10 mt-6">
                <CarouselContent className="gap-8">
                    {dataTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg" >
                            <Avatar>
                                <AvatarImage src={testimonial.imageUrl} alt="Profile Avatar"/>
                                <AvatarFallback>
                                    {testimonial.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="min-h-12 text-2xl mt-4">{testimonial.name}</p>
                                <p className=" text-slate-400 text-base font-semibold mt-1">{testimonial.titulo}</p>
                                <p	className="italic text-slate-400 text-lg mt-2">{testimonial.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>    
                    <CarouselPrevious />
                    <CarouselNext /> 
            </Carousel>
        </div>
    );
}

export default Testimonials;