"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shadchanim", label: "Shadchanim" },
  { href: "/faq", label: "FAQ" },
  { href: "/articles", label: "Articles" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const MEMBER_LOGIN_URL = "https://www.sawyouatsinai.com/login";
const SHADCHAN_LOGIN_URL = "https://www.sawyouatsinai.com/shadchan";
const JOIN_URL = "http://www.sawyouatsinai.com/MemberSignup.aspx?Partner=Shidduchim";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream-50 shadow-sm border-b border-cream-200"
          : "bg-cream-50/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="SHIDDUCH.IM"
              height={40}
              width={180}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-600 ${
                  pathname === link.href
                    ? "text-gold-600 border-b-2 border-gold-500 pb-0.5"
                    : "text-navy-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-navy-700 border border-navy-300 rounded-full hover:bg-navy-50 transition-colors"
            >
              Member login
            </a>
            <a
              href={SHADCHAN_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-navy-700 border border-navy-300 rounded-full hover:bg-navy-50 transition-colors"
            >
              Shadchan login
            </a>
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-semibold text-white bg-navy-800 rounded-full hover:bg-navy-900 transition-colors"
            >
              Join us!
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-navy-700 hover:text-navy-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-blush-100 text-navy-900"
                  : "text-navy-700 hover:bg-cream-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-cream-200 flex flex-col gap-2">
            <a
              href={MEMBER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 text-sm font-medium text-navy-700 border border-navy-300 rounded-full hover:bg-navy-50 transition-colors"
            >
              Member login
            </a>
            <a
              href={SHADCHAN_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 text-sm font-medium text-navy-700 border border-navy-300 rounded-full hover:bg-navy-50 transition-colors"
            >
              Shadchan login
            </a>
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 text-sm font-semibold text-white bg-navy-800 rounded-full hover:bg-navy-900 transition-colors"
            >
              Join us!
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
