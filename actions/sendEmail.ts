"use server";

import { toast } from "react-toastify";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_KEY)
export const sendEmail = async (form:any)=>{
    const email = form.get("email")
    const message =form.get("message")
    try {
    await resend.emails.send({
        from: "Sandeep Portfolio <onboarding@resend.dev>",
        to: "sandeepsharmajec24@gmail.com",
        reply_to:email,
        subject: "Message from contact form.",
        text: message !== null ? message: "Invalid Message"
    })
    toast.success("Thanks For Contacting!")
} catch (error:any) {
        return {error:error.message}
}
}