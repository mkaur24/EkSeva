import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { name?: string; email?: string; subject?: string; message?: string; interests?: string[] }
    | null;

  if (!body) return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  const interests = Array.isArray(body.interests)
    ? body.interests.map((item) => String(item).trim()).filter(Boolean)
    : [];

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "admin@ekseva.co.uk";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "EkSeva Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact service is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const interestList = interests.length
    ? `<ul>${interests.map((interest) => `<li>${escapeHtml(interest)}</li>`).join("")}</ul>`
    : "<p>No specific enquiry type selected.</p>";

  const html = `
    <h2>New EkSeva Contact Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Enquiry type:</strong></p>
    ${interestList}
    <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New website message: ${subject}`,
      reply_to: email,
      html
    })
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Could not send message right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
