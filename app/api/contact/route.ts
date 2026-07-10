import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  fullName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  weddingDate?: string;
  serviceInterestedIn?: string;
  venue?: string;
  referralSource?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;
  const { fullName, lastName, email, phoneNumber, weddingDate, serviceInterestedIn, venue, referralSource, message } = body;

  if (!fullName) {
    return NextResponse.json({ error: "fullName" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "email" }, { status: 400 });
  }

  if (!weddingDate) {
    return NextResponse.json({ error: "weddingDate" }, { status: 400 });
  }

  if (!serviceInterestedIn) {
    return NextResponse.json({ error: "serviceInterestedIn" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const html = `
    <h2>New Wedding Inquiry</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    ${lastName ? `<p><strong>Last Name:</strong> ${lastName}</p>` : ""}
    <p><strong>Email:</strong> ${email}</p>
    ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ""}
    <p><strong>Wedding Date:</strong> ${weddingDate}</p>
    <p><strong>Service Interested In:</strong> ${serviceInterestedIn}</p>
    ${venue ? `<p><strong>Venue:</strong> ${venue}</p>` : ""}
    ${referralSource ? `<p><strong>Referral Source:</strong> ${referralSource}</p>` : ""}
    ${message ? `<p><strong>Message:</strong><br />${message.replace(/\n/g, "<br />")}</p>` : ""}
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Wedding Inquiry - ${fullName}`,
      html,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: "Thank you for contacting Halo & Pine",
      html: `
        <p>Hello ${fullName},</p>
        <p>Thank you for reaching out to Halo & Pine Wedding Coordination.</p>
        <p>We have received your inquiry and will review your wedding details shortly.</p>
        <p>We typically respond within 24–48 hours.</p>
        <p>We're excited to learn more about your special day.</p>
        <p>Warm regards,</p>
        <p>Halo & Pine Wedding Coordination<br />https://haloandpine.ca</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : JSON.stringify(error, null, 2),
      },
      { status: 500 }
    );
  }
}
