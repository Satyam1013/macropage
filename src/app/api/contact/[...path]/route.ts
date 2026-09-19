import { NextRequest, NextResponse } from "next/server";

// Only these backend contact routes are reachable through the proxy.
const ALLOWED = new Set([
  "email/send-otp",
  "email/verify-otp",
  "phone/send-otp",
  "phone/verify-otp",
  "submit",
]);

export async function POST(req: NextRequest, { params }: { params: { path: string[] } }) {
  const route = params.path.join("/");
  if (!ALLOWED.has(route)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/contact/${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      const message = Array.isArray(data.message) ? data.message[0] : data.message;
      return NextResponse.json(
        { error: message ?? "Something went wrong. Please try again." },
        { status: res.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Contact ${route} error:`, error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
