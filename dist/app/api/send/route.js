"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const resend_1 = require("resend");
const email_template_1 = require("@/components/email-template");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
async function POST(req) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["cimildoro@gmail.com"],
                subject: "New message from your website",
                react: await (0, email_template_1.EmailTemplate)({
                    firstName: dataForm.firstName,
                    message: dataForm.message,
                    email: dataForm.email
                }),
                text: "mcimildoro"
            });
            return Response.json({ data });
        }
        catch (error) {
            return Response.json({ error });
        }
    }
    catch (error) {
        return Response.json({ error });
    }
}
