import * as React from "react";

interface EmailTemplateProps{
    firstName: string;
    message: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, message, email
}) => (
    <div>
        <h1>Mail sent from: {firstName}</h1>
        <h2>Message:{message}</h2>
        <h3>Mail sent from:{email}</h3>
    </div>
)