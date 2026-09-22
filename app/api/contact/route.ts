import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  city: z.string().min(2),
  budget: z.string().optional(),
  inquiryType: z.string().min(1),
  subject: z.string().optional(),
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

    const { name, email, phone, city, budget, inquiryType, subject, message, website } = result.data;

    // Honeypot check for spam bots
    if (website && website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Log contact inquiry safely in server console
    console.log("Healix contact inquiry received:", {
      name,
      email,
      phone,
      city,
      budget: budget || "Not specified",
      inquiryType,
      subject: subject || inquiryType,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ ok: true, message: "Inquiry received successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
