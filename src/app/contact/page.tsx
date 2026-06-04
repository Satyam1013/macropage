"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services does MacroPage provide?",
    a: "We build web apps, mobile apps, AI integrations, cloud infrastructure, business automation, and complete digital products from scratch.",
  },
  {
    q: "How does your development process work?",
    a: "We start with a discovery call, then move to design, development, testing, and launch — all with clear communication at every step.",
  },
  {
    q: "What is the typical project timeline?",
    a: "Simple websites take 2–3 weeks. Complex web apps or mobile apps typically take 6–12 weeks depending on scope.",
  },
  {
    q: "How much does a project cost?",
    a: "Projects start from ₹30,000 for landing pages and go up based on complexity. We provide a detailed quote after the discovery call.",
  },
  {
    q: "Can I see examples of your past work?",
    a: "Yes! Check out our Work page for case studies and live project links.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We offer maintenance packages and are available for ongoing support, updates, and scaling.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
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
          {status === "sent" ? (
            <div
              style={{ color: "var(--text)" }}
              className="flex flex-col items-center justify-center h-full gap-4 text-center"
            >
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 max-w-lg"
            >
              <p
                style={{ color: "var(--muted)" }}
                className="text-xs tracking-widest uppercase mb-2"
              >
                Send a Message
              </p>

              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Rahul Sharma",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "rahul@company.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    style={{ color: "var(--muted)" }}
                    className="text-xs uppercase tracking-widest block mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) =>
                      setForm({ ...form, [field.id]: e.target.value })
                    }
                    required
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      borderRadius: 8,
                    }}
                    className="w-full px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                  />
                </div>
              ))}

              <div>
                <label
                  style={{ color: "var(--muted)" }}
                  className="text-xs uppercase tracking-widest block mb-2"
                >
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    borderRadius: 8,
                    resize: "none",
                  }}
                  className="w-full px-4 py-3 text-sm outline-none focus:border-current placeholder:opacity-30 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  background: "var(--btn-bg)",
                  color: "var(--btn-text)",
                }}
                className="self-start px-8 py-3 rounded-full text-sm font-semibold hover:opacity-80 transition-all disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Email us at info@macropage.in
                </p>
              )}
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
