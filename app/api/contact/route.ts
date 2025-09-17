import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev", // can be any verified domain/email
      to: process.env.EMAIL_TO as string,
      subject: `New message from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
