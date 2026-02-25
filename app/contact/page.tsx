"use client";

import { useState } from "react";

// TODO: Create a Formspree account at https://formspree.io and replace this endpoint.
// The form will email responses to T.Shapiro@me.com once configured.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

const shadchanOptions = [
  "General enquiry",
  "Suzy Goldberg",
  "Linda Sireling",
  "Judy Minsky",
  "Elana Sotil",
  "Debbie Weissbraun",
  "Sarita Mandelbaum",
  "Brevice Azoulay",
  "Tovah Shapiro",
  "Dini Sharman",
  "Aviva Rowe",
  "Ariella Hacmoun",
  "Chaya Rubinson",
  "Elizabeth Bergman",
  "Liza Taitz",
  "I'd like to become a shadchan",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            We&rsquo;d Love to Hear From You
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-navy-600 text-sm leading-relaxed">
                Whether you have a question about how the service works, want
                to know more about a specific shadchan, or are interested in
                becoming a shadchan yourself — we&rsquo;re here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blush-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:support@shidduch.im" className="text-navy-700 hover:text-gold-600 text-sm transition-colors">
                    support@shidduch.im
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blush-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 font-medium uppercase tracking-wide mb-0.5">Phone</p>
                  <a href="tel:+447971572998" className="text-navy-700 hover:text-gold-600 text-sm transition-colors">
                    +44 7971 572998
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="rounded-2xl bg-blush-50 border border-blush-200 p-10 text-center">
                <svg className="w-12 h-12 text-gold-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                <p className="text-navy-600 text-sm">
                  Thank you for getting in touch. We&rsquo;ll be back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      First name <span className="text-blush-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">
                      Last name <span className="text-blush-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Email address <span className="text-blush-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Phone number <span className="text-navy-300 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition"
                    placeholder="+44 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Regarding
                  </label>
                  <select
                    name="regarding"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition"
                  >
                    {shadchanOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">
                    Message <span className="text-blush-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-200 transition resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly at support@shidduch.im.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-full bg-navy-800 text-white font-semibold hover:bg-navy-900 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
