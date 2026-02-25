import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shadchanim", label: "Shadchanim" },
  { href: "/faq", label: "FAQ" },
  { href: "/articles", label: "Articles" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sans)" }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sans)" }}>
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-navy-200">
              <li>
                <a
                  href="mailto:support@shidduch.im"
                  className="hover:text-white transition-colors"
                >
                  support@shidduch.im
                </a>
              </li>
              <li>
                <a
                  href="tel:+447971572998"
                  className="hover:text-white transition-colors"
                >
                  +44 7971 572998
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 text-center text-xs text-navy-400">
          © {new Date().getFullYear()} SHIDDUCH.IM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
