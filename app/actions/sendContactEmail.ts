"use server";

import { z } from "zod";
import { Resend } from "resend";
import ContactEmail from "@/components/emails/contactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactEmail(data: unknown) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // change domain in production
      to: "sdhanish92@gmail.com", // your email here
      subject: `Enquiry Message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
