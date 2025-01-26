"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("@hookform/resolvers/zod");
const input_1 = require("@/components/ui/input");
const textarea_1 = require("@/components/ui/textarea");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const form_1 = require("./ui/form");
const zod_2 = require("zod");
const button_1 = require("./ui/button");
const ContactForm = () => {
    const [sucessForm, setSucessForm] = (0, react_1.useState)(false);
    const formSchema = zod_2.z.object({
        username: zod_2.z.string().min(2).max(50),
        email: zod_2.z.string().email(),
        message: zod_2.z.string()
    });
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    });
    const onSubmit = async (values) => {
        const response = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(values),
        });
        if (response.status === 200) {
            setSucessForm(true);
        }
    };
    return (<form_1.Form {...form}>
        {sucessForm ? (<h4 className="text-green-500">Mensaje enviado con éxito 👌</h4>) : (<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <form_1.FormField control={form.control} name="username" render={({ field }) => (<form_1.FormItem>
                        <form_1.FormControl>
                            <input_1.Input placeholder="Your name" {...field} className="dark:bg-slate-800"/>
                        </form_1.FormControl>
                        <form_1.FormMessage />
                    </form_1.FormItem>)}/>
                <form_1.FormField control={form.control} name="email" render={({ field }) => (<form_1.FormItem>
                        <form_1.FormControl>
                            <input_1.Input placeholder="Your email" {...field} className="dark:bg-slate-800"/>
                        </form_1.FormControl>
                        <form_1.FormMessage />
                    </form_1.FormItem>)}/>
                <form_1.FormField control={form.control} name="message" render={({ field }) => (<form_1.FormItem>
                        <form_1.FormControl>
                            <textarea_1.Textarea placeholder="Escribe tu mensaje" {...field} className="dark:bg-slate-800"/>
                        </form_1.FormControl>
                        <form_1.FormMessage />
                    </form_1.FormItem>)}/>
                <button_1.Button type="submit">Enviar</button_1.Button>
            </form>)}
            
       </form_1.Form>);
};
exports.default = ContactForm;
