import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <p
              className="text-xl font-bold tracking-widest text-white mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SHIDDUCH.IM
            </p>
            <p className="text-sm text-navy-200 leading-relaxed">
              A global network of dedicated shadchanim, combining timeless
              tradition with modern technology to help frum singles across
              Europe find their bashert.
            </p>
            <p className="mt-4 text-xs text-navy-400">
              In partnership with{" "}
              <a
                href="https://www.sawyouatsinai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-navy-200 transition-colors"
              >
                SawYouAtSinai
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get in Touch
            </h3>
            <p className="text-sm text-navy-200 leading-relaxed mb-3">
              Have a question? We&rsquo;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 text-center text-xs text-navy-400">
          © {new Date().getFullYear()} SHIDDUCH.IM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
