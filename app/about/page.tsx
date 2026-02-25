import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Shidduch.im",
  description:
    "Learn about SHIDDUCH.IM — a volunteer-run network of shadchanim helping frum singles across the UK and Europe find their bashert.",
};

const JOIN_URL = "https://www.sawyouatsinai.com/signup"; // TODO: confirm URL

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Our Story
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
            About Us
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full" />
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Who We Are</h2>
          <div className="prose prose-lg text-navy-600 space-y-4">
            <p>
              We are a group of volunteers who have come together with one aim:
              to help frum singles find their life partner. SHIDDUCH.IM is built
              as a network, so that every single has a named shadchan — and the
              shadchanim share all their information using sophisticated,
              purpose-built software developed in the USA over the last ten
              years for a large shidduch organisation called{" "}
              <a
                href="https://www.sawyouatsinai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 underline"
              >
                Saw You At Sinai
              </a>
              .
            </p>
            <p>
              If you have already joined Saw You At Sinai, you don&rsquo;t need
              to join us separately — you will be able to select any of our
              shadchanim using your existing account.
            </p>
            <p>
              We hope you will find us professional and dedicated. If you have
              questions, suggestions or issues, please do be in touch by
              e-mailing{" "}
              <a
                href="mailto:support@shidduch.im"
                className="text-gold-600 hover:text-gold-700 underline"
              >
                support@shidduch.im
              </a>{" "}
              or by using our{" "}
              <Link
                href="/contact"
                className="text-gold-600 hover:text-gold-700 underline"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Info cards ── */}
      <section className="bg-cream-100 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aimed at */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-200">
            <div className="w-10 h-1 bg-gold-400 rounded-full mb-5" />
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Who We&rsquo;re Aimed At
            </h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              We are geared for Jewish Shabbat-observant singles of all ages
              from anywhere in Europe. If you live in Israel or North America,
              we would suggest signing up directly at{" "}
              <a
                href="https://www.sawyouatsinai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 underline hover:text-gold-700"
              >
                sawyouatsinai.com
              </a>{" "}
              instead.
            </p>
          </div>

          {/* Based */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-200">
            <div className="w-10 h-1 bg-blush-300 rounded-full mb-5" />
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Where We&rsquo;re Based
            </h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              We have shadchanim in London, Manchester, Israel, Antwerp,
              Amsterdam, Zurich, Basel and beyond — and we are continuously
              expanding our network across Europe.
            </p>
          </div>

          {/* Help */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-200">
            <div className="w-10 h-1 bg-navy-300 rounded-full mb-5" />
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Would You Like to Help?
            </h3>
            <p className="text-navy-600 text-sm leading-relaxed">
              If you are interested in helping with events or behind the scenes,
              or are married and interested in becoming a shadchan, please get
              in touch via our{" "}
              <Link
                href="/contact"
                className="text-gold-600 underline hover:text-gold-700"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── SYAS Partnership ── */}
      <section className="bg-navy-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-3">
            Our Partnership
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Powered by SawYouAtSinai
          </h2>
          <p className="text-navy-200 leading-relaxed mb-4">
            SHIDDUCH.IM is the European branch of the US-based shidduch
            platform Saw You At Sinai — an ever-growing database of over 30,000
            frum singles, with a constant stream of newly engaged couples every
            week.
          </p>
          <p className="text-navy-200 leading-relaxed">
            By connecting with this network, our members benefit from a truly
            global reach while still having a personal shadchan in their own
            community who knows them, networks for them, and guides them through
            the process.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blush-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-600 mb-8">
            Join our network and let a dedicated shadchan help you find your
            bashert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy-800 text-white font-semibold hover:bg-navy-900 transition-colors"
            >
              Join Today
            </a>
            <Link
              href="/shadchanim"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-navy-700 text-navy-800 font-semibold hover:bg-cream-100 transition-colors"
            >
              Meet Our Shadchanim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
