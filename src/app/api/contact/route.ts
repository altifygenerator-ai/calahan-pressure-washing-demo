import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  service?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const location = clean(body.location);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Please include your name, phone number, and job details." },
        { status: 400 }
      );
    }

    const toEmail = process.env.QUOTE_TO_EMAIL;
    const fromEmail =
      process.env.QUOTE_FROM_EMAIL ||
      "Calahan Pressure Washing <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY || !toEmail) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const subject = `New quote request from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #111827;">
        <div style="background: #071018; color: #ffffff; padding: 24px; border-radius: 16px 16px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
          <p style="margin: 8px 0 0; color: #b7c1cc;">Calahan Pressure Washing LLC</p>
        </div>

        <div style="border: 1px solid #e5e7eb; border-top: 0; padding: 24px; border-radius: 0 0 16px 16px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Property Location:</strong> ${location || "Not provided"}</p>
          <p><strong>Service Needed:</strong> ${service || "Not selected"}</p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 22px 0;" />

          <p style="margin-bottom: 8px;"><strong>Job Details:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `;

    const text = `
New Quote Request - Calahan Pressure Washing LLC

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Property Location: ${location || "Not provided"}
Service Needed: ${service || "Not selected"}

Job Details:
${message}
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || undefined,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Something went wrong sending the request." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Something went wrong sending the request." },
      { status: 500 }
    );
  }
}