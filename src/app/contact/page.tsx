"use client";

import { useEffect, useState } from "react";
import { faqs } from "@/data/content";

const OTP_TTL_SECONDS = 10 * 60;

function formatCountdown(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+977", label: "🇳🇵 +977" },
  { code: "+880", label: "🇧🇩 +880" },
  { code: "+94", label: "🇱🇰 +94" },
];

const INITIAL_FORM = { name: "", email: "", countryCode: "+91", phone: "", message: "" };

type VerifyStatus = "idle" | "sending" | "sent" | "verifying" | "verified";

// One independent OTP flow per channel: send a code, check it, keep the proof
// the backend hands back so the final submit can show it was verified.
function useChannelVerification(channel: "email" | "phone") {
  const [status, setStatus] = useState<VerifyStatus>("idle");
  const [token, setToken] = useState("");
  const [proof, setProof] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (status !== "sent" && status !== "verifying") return;
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [status, secondsLeft]);

  const reset = () => {
    setStatus("idle");
    setToken("");
    setProof("");
    setOtp("");
    setError("");
    setSecondsLeft(0);
  };

  const send = async (payload: Record<string, string>) => {
    setStatus("sending");
    setError("");
    setOtp("");
    try {
      const res = await fetch(`/api/contact/${channel}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setSecondsLeft(OTP_TTL_SECONDS);
        setStatus("sent");
      } else {
        setError(data.error || "Failed to send code.");
        setStatus("idle");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const verify = async () => {
    setStatus("verifying");
    setError("");
    try {
      const res = await fetch(`/api/contact/${channel}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setProof(data.proof);
        setStatus("verified");
      } else {
        setError(data.error || "Verification failed.");
        setStatus("sent");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("sent");
    }
  };

  return { status, proof, otp, setOtp, error, secondsLeft, send, verify, reset };
}

type Verification = ReturnType<typeof useChannelVerification>;

const inputStyle = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  borderRadius: 8,
} as const;

// Sits to the right of the input it verifies.
function VerifyAction({
  v,
  canSend,
  hint,
  onSend,
}: {
  v: Verification;
  canSend: boolean;
  hint: string;
  onSend: () => void;
}) {
  if (v.status === "verified") {
    return (
      <span
        style={{ color: "#12b76a" }}
        className="shrink-0 flex items-center text-sm font-medium"
      >
        ✓ Verified
      </span>
    );
  }

  if (v.status !== "idle" && v.status !== "sending") return null;

  return (
    <button
      type="button"
      onClick={onSend}
      disabled={!canSend || v.status === "sending"}
      title={canSend ? undefined : hint}
      style={{ border: "1px solid var(--border)", color: "var(--text)" }}
      className="shrink-0 px-5 rounded-full text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {v.status === "sending" ? "Sending..." : "Verify"}
    </button>
  );
}

// Appears below the input once a code has been sent.
function OtpPanel({ v, onSend }: { v: Verification; onSend: () => void }) {
  if (v.status === "verified") return null;

  if (v.status === "idle" || v.status === "sending") {
    return v.error ? <p className="text-red-500 text-sm mt-2">{v.error}</p> : null;
  }

  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest">
          Verification Code
        </label>
        <span
          style={{ color: v.secondsLeft > 0 ? "var(--muted)" : "#ef4444" }}
          className="text-xs font-medium tabular-nums"
        >
          {v.secondsLeft > 0 ? `Expires in ${formatCountdown(v.secondsLeft)}` : "Code expired"}
        </span>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="000000"
          value={v.otp}
          onChange={(e) => v.setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (v.otp.length === 6) v.verify();
            }
          }}
          style={{ ...inputStyle, letterSpacing: "0.4em" }}
          className="w-full min-w-0 px-4 py-3 text-lg outline-none focus:border-current placeholder:opacity-20 transition-all"
        />
        <button
          type="button"
          onClick={v.verify}
          disabled={v.otp.length < 6 || v.status === "verifying" || v.secondsLeft <= 0}
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {v.status === "verifying" ? "Verifying..." : "Verify"}
        </button>
      </div>
      {v.error && <p className="text-red-500 text-sm">{v.error}</p>}
      <button
        type="button"
        onClick={onSend}
        style={{ color: "var(--muted)" }}
        className="self-start text-sm hover:opacity-60 transition-opacity underline underline-offset-4"
      >
        Resend code
      </button>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const emailV = useChannelVerification("email");
  const phoneV = useChannelVerification("phone");

  // The backend expects E.164 (+919876543210); leading zeros are trunk prefixes.
  const fullPhone = `${form.countryCode}${form.phone.replace(/^0+/, "")}`;
  const nameOk = form.name.trim().length >= 2;
  const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
  const phoneOk = form.phone.replace(/^0+/, "").length >= 6;
  const bothVerified = emailV.status === "verified" && phoneV.status === "verified";

  const sendEmailCode = () => emailV.send({ name: form.name.trim(), email: form.email.trim() });
  const sendPhoneCode = () => phoneV.send({ name: form.name.trim(), phone: fullPhone });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bothVerified) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: fullPhone,
          message: form.message,
          emailProof: emailV.proof,
          phoneProof: phoneV.proof,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("sent");
        setForm(INITIAL_FORM);
        emailV.reset();
        phoneV.reset();
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const handleBack = () => {
    setForm(INITIAL_FORM);
    emailV.reset();
    phoneV.reset();
    setErrorMsg("");
    setStatus("idle");
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Hero heading full width ── */}
      <section
        style={{ borderBottom: "1px solid var(--border)" }}
        className="px-6 sm:px-10 pt-16 pb-10"
      >
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs tracking-widest uppercase mb-4"
        >
          [ 06 ] Get In Touch
        </p>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          className="text-[clamp(4rem,12vw,10rem)] tracking-wide"
        >
          Let&apos;s Build
          <br />
          <em
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Together.
          </em>
        </h1>
      </section>

      {/* ── 2 col — info + form ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Left — info */}
        <div
          style={{ borderRight: "1px solid var(--border)" }}
          className="px-6 sm:px-10 py-14 flex flex-col justify-between gap-12"
        >
          <div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-base leading-relaxed max-w-sm"
            >
              Whether you&apos;re ready to start a project or just exploring,
              we&apos;d love to hear from you. We respond within 24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-1"
              >
                Email
              </p>
              <a
                href="mailto:info@macropage.in"
                style={{ color: "var(--text)" }}
                className="text-lg font-medium hover:opacity-60 transition-opacity"
              >
                info@macropage.in
              </a>
            </div>

            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-1"
              >
                Location
              </p>
              <p
                style={{ color: "var(--text)" }}
                className="text-lg font-medium"
              >
                Raigarh, Chattisgarh, India
              </p>
            </div>

            <div>
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs uppercase tracking-widest mb-3"
              >
                Follow Us
              </p>
              <div className="flex gap-6">
                {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{ color: "var(--muted)" }}
                    className="text-sm hover:opacity-100 transition-opacity relative group"
                  >
                    {s}
                    <span
                      style={{ background: "var(--accent)" }}
                      className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Big muted text */}
          <p
            style={{
              fontFamily: "var(--font-bebas)",
              color: "var(--border)",
              lineHeight: 1,
            }}
            className="text-[clamp(3rem,6vw,5rem)] tracking-wide select-none"
          >
            MACROPAGE
          </p>
        </div>

        {/* Right — form */}
        <div className="px-6 sm:px-10 py-14">
          {/* ── Step 3: Success ── */}
          {status === "sent" ? (
            <div
              style={{ color: "var(--text)" }}
              className="relative flex flex-col items-center justify-center h-full gap-4 text-center"
            >
              <button
                type="button"
                onClick={handleBack}
                aria-label="Back to form"
                style={{ color: "var(--muted)" }}
                className="absolute top-0 left-0 text-sm hover:opacity-60 transition-opacity"
              >
                ← Back
              </button>
              <div
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{ fontFamily: "var(--font-bebas)" }}
                className="text-3xl tracking-wide"
              >
                Message Received!
              </h3>
              <p style={{ color: "var(--muted)" }} className="text-sm">
                We&apos;ll respond within 24 hours.
              </p>
            </div>

          ) : (
            /* ── Contact Form (email + WhatsApp are verified inline) ── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
              <p style={{ color: "var(--muted)" }} className="text-xs tracking-widest uppercase mb-2">
                Send a Message
              </p>

              <div>
                <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  style={inputStyle}
                  className="w-full px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                />
              </div>

              <div>
                <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest block mb-2">
                  Email Address
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="rahul@company.com"
                    value={form.email}
                    readOnly={emailV.status === "verified"}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (emailV.status !== "idle") emailV.reset();
                    }}
                    required
                    style={inputStyle}
                    className="w-full min-w-0 px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                  />
                  <VerifyAction
                    v={emailV}
                    canSend={nameOk && emailOk}
                    hint="Enter your name and a valid email first"
                    onSend={sendEmailCode}
                  />
                </div>
                <OtpPanel v={emailV} onSend={sendEmailCode} />
              </div>

              <div>
                <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest block mb-2">
                  WhatsApp Number
                </label>
                <div className="flex gap-3">
                  <select
                    aria-label="Country code"
                    value={form.countryCode}
                    disabled={phoneV.status === "verified"}
                    onChange={(e) => {
                      setForm({ ...form, countryCode: e.target.value });
                      if (phoneV.status !== "idle") phoneV.reset();
                    }}
                    style={inputStyle}
                    className="w-24 shrink-0 px-3 py-3 text-sm outline-none focus:border-current transition-all"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="98765 43210"
                    minLength={6}
                    maxLength={14}
                    value={form.phone}
                    readOnly={phoneV.status === "verified"}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value.replace(/\D/g, "") });
                      if (phoneV.status !== "idle") phoneV.reset();
                    }}
                    required
                    style={inputStyle}
                    className="w-full min-w-0 px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                  />
                  <VerifyAction
                    v={phoneV}
                    canSend={nameOk && phoneOk}
                    hint="Enter your name and WhatsApp number first"
                    onSend={sendPhoneCode}
                  />
                </div>
                <OtpPanel v={phoneV} onSend={sendPhoneCode} />
              </div>

              <div>
                <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest block mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  style={{ ...inputStyle, resize: "none" }}
                  className="w-full px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                />
              </div>

              {errorMsg && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <div className="flex flex-col gap-2 items-start">
                <button
                  type="submit"
                  disabled={status === "submitting" || !bothVerified}
                  style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
                  className="px-8 py-3 rounded-full text-sm font-semibold transition-all relative overflow-hidden group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span
                    style={{ background: "var(--accent)" }}
                    className="absolute inset-0 w-full translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-out rounded-full group-disabled:hidden"
                  />
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending..." : "Send Message →"}
                  </span>
                </button>
                {!bothVerified && (
                  <p style={{ color: "var(--muted)" }} className="text-xs">
                    Verify your email and WhatsApp number to send your message.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{ borderTop: "1px solid var(--border)" }}
        className="px-6 sm:px-10 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left label */}
          <div>
            <p
              style={{ color: "var(--muted)" }}
              className="text-xs tracking-widest uppercase mb-3"
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                color: "var(--text)",
                lineHeight: 0.95,
              }}
              className="text-[clamp(2.5rem,5vw,4rem)] tracking-wide"
            >
              Frequently
              <br />
              <em
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                }}
              >
                Asked
              </em>
              <br />
              Questions
            </h2>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left group"
                >
                  <span
                    style={{ color: "var(--text)" }}
                    className="text-base font-medium pr-6"
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: "1.4rem",
                      lineHeight: 1,
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{ color: "var(--muted)" }}
                    className="text-sm leading-relaxed pb-5"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
