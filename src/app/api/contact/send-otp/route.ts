import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

function createToken(payload: object): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const secret = process.env.CONTACT_JWT_SECRET || "fallback-secret";
  const sig = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = schema.parse(body);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    const token = createToken({ name, email, message, otp, expiresAt });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"MacroPage" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Your verification code — MacroPage",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="margin-bottom: 8px; color: #111;">Verify your email</h2>
          <p style="color: #666; margin-bottom: 24px;">Hi ${name}, use the code below to submit your message to MacroPage.</p>
          <div style="font-size: 2.2rem; font-weight: 700; letter-spacing: 0.4em; background: #f5f5f5; padding: 24px; border-radius: 10px; text-align: center; color: #111;">
            ${otp}
          </div>
          <p style="color: #999; font-size: 0.85rem; margin-top: 20px;">This code expires in 10 minutes. If you didn't request this, ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json({ error: "Failed to send verification code" }, { status: 500 });
  }
}
