"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdawrky";

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
                    Something went wrong. Please try again.
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
