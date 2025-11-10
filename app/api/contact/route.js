import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, contact, location, email, message } = await request.json();

  if (!name || !contact || !location || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Fortem Website Contact" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Contact: ${contact}\nLocation: ${location}\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Contact:</strong> ${contact}</p><p><strong>Location:</strong> ${location}</p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
