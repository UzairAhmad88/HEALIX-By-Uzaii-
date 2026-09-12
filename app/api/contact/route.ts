import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
  website: z.string().max(0).optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed. Please check required fields." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, website } = result.data;

    // Honeypot check
    if (website && website.length > 0) {
      return NextResponse.json({ ok: true }); // Silent drop for bots
    }

    // Safely process submission or send via Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      // In production, integrate with Resend API:
      // await resend.emails.send({ ... })
    } else {
      console.log("Healix contact inquiry logged (Development Mode):", {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({ ok: true, message: "Inquiry received" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
