"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section className="px-10 py-20 max-w-3xl mx-auto">
      <p style={{ color: "var(--muted)" }} className="text-xs tracking-widest uppercase mb-4">
        Get In Touch
      </p>
      <h1
        style={{ fontFamily: "var(--font-bebas)", color: "var(--text)", lineHeight: 0.95 }}
        className="text-[clamp(3.5rem,8vw,6rem)] tracking-wide mb-12"
      >
        Let&apos;s Build
        <br />
        <em style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>Together.</em>
      </h1>

      {status === "sent" ? (
        <div style={{ color: "var(--text)" }} className="text-xl font-medium py-12 text-center">
          ✓ Message received! We&apos;ll respond within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {[
            { id: "name", label: "Your Name", type: "text", placeholder: "Rahul Sharma" },
            { id: "email", label: "Email Address", type: "email", placeholder: "rahul@company.com" },
          ].map((field) => (
            <div key={field.id}>
              <label style={{ color: "var(--muted)" }} className="text-xs uppercase tracking-widest block mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.id as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                required
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  borderRadius: 8,
                }}
                className="w-full px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-current placeholder:opacity-40 transition-all"
              />
            </div>
          ))}

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
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 8,
                resize: "none",
              }}
              className="w-full px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-current placeholder:opacity-40 transition-all font-body"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
            className="self-start px-8 py-3 rounded-full text-sm font-semibold hover:opacity-80 transition-all disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please email us directly at hello@macropage.in</p>
          )}
        </form>
      )}

      <div style={{ borderTop: "1px solid var(--border)" }} className="mt-16 pt-8">
        <p style={{ color: "var(--muted)" }} className="text-sm">hello@macropage.in</p>
        <p style={{ color: "var(--muted)" }} className="text-sm mt-1">Aligarh, Uttar Pradesh, India</p>
      </div>
    </section>
  );
}
