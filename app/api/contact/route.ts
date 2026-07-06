import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

const REFERRAL_SOURCES = [
  "Google",
  "Facebook",
  "Friend / Referral",
  "Wedding Venue",
  "Wedding Show",
  "Other",
] as const;

type ReferralSource = (typeof REFERRAL_SOURCES)[number];

type ContactPayload = {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  weddingDate?: string;
  referralSource?: string;
  message?: string;
};

const clean = (value?: string) => (value ?? "").trim();

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const fullName = clean(body.fullName);
  const email = clean(body.email);
  const phoneNumber = clean(body.phoneNumber);
  const weddingDate = clean(body.weddingDate);
  const referralSource = clean(body.referralSource);
  const message = clean(body.message);

  if (!fullName || !email || !weddingDate || !message) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (referralSource && !REFERRAL_SOURCES.includes(referralSource as ReferralSource)) {
    return NextResponse.json(
      { message: "Please select a valid referral source." },
      { status: 400 }
    );
  }

  if (!resendApiKey) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Halo & Pine <onboarding@resend.dev>";

  const inquiryLines = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phoneNumber || "Not provided"}`,
    `Wedding Date: ${weddingDate || "Not provided"}`,
    `How did you hear about us?: ${referralSource || "Not provided"}`,
    "",
    "Wedding Details:",
    message,
  ];

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: ["info@haloandpine.ca"],
    subject: `New Wedding Inquiry - ${fullName}`,
    replyTo: email,
    text: inquiryLines.join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { message: "Failed to send your inquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}