"use server";

import nodemailer from "nodemailer";

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="background-color: #f7f9fc; padding: 50px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333333;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eef2f6;">
            <!-- Subtle Accent Bar -->
            <div style="height: 6px; background: linear-gradient(90deg, #5fafff 0%, #a4cc4d 100%);"></div>
            
            <div style="padding: 40px;">
              <!-- Sender Header -->
              <div style="margin-bottom: 30px; border-bottom: 1px solid #f0f4f8; padding-bottom: 20px;">
                <p style="margin: 0; font-size: 12px; font-weight: 700; color: #5fafff; text-transform: uppercase; letter-spacing: 1px;">New Portfolio Ping</p>
                <h1 style="margin: 10px 0 0; font-size: 28px; font-weight: 800; color: #1a1e23; letter-spacing: -0.5px;">${name}</h1>
                <a href="mailto:${email}" style="color: #6b7280; font-size: 14px; text-decoration: none; margin-top: 5px; display: block;">${email}</a>
              </div>

              <!-- Message Body -->
              <div style="margin-bottom: 40px;">
                <div style="font-size: 11px; font-weight: 600; color: #9ca3af; text-transform: uppercase; margin-bottom: 10px;">The Message</div>
                <div style="font-size: 16px; line-height: 1.8; color: #374151; background: #fdfdfd; padding: 25px; border-radius: 12px; border: 1px solid #f1f5f9; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Footer Actions -->
              <div style="text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background: #1a1e23; color: #ffffff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">Reply</a>
                <div style="margin-top: 25px; font-size: 12px; color: #94a3b8;">
                  Sent via your Portfolio • 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log(`Email successfully sent to ${process.env.GMAIL_USER}. Message ID: ${info.messageId}`);
    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer details:", error.message || error);
    if (error.code === 'EAUTH') {
      return { success: false, error: "Authentication failed. Check your Gmail credentials or App Password." };
    }
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
