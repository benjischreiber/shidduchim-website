import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Shadchanim — Shidduch.im",
  description:
    "Meet our dedicated team of shadchanim based across the UK and Europe, each passionate about helping frum singles find their bashert.",
};

type Shadchan = {
  name: string;
  location: string;
  bio: string;
  accepts: string;
  photo?: string;
};

const shadchanim: Shadchan[] = [
  {
    name: "Suzy Goldberg",
    location: "London",
    bio: "Suzy is a mother and grandmother and Kodesh teacher for many years. She also teaches kallot and Hebrew Reading to adults. She fell into matchmaking almost 30 years ago when a simple introduction between two friends resulted in their getting married — and she hasn't looked back since!",
    accepts: "Singles of any age from pretty much anywhere in the world, except the USA.",
    photo: "/shadchanim/suzy.jpeg",
  },
  {
    name: "Linda Sireling",
    location: "Jerusalem",
    bio: "Linda has been doing shidduchim for over 45 years. From yeshivish to modern orthodox machmir, including baalei teshuva. She works online with people in the UK and Anglos in Israel.",
    accepts: "Singles aged 18–45 from the UK and Anglos in Israel.",
    photo: "/shadchanim/linda.jpeg",
  },
  {
    name: "Judy Minsky",
    location: "Borehamwood, Greater London",
    bio: "Judy is a mother and grandmother whose three married children live in New York. She became a matchmaker in 2016 to ensure representation for Borehamwood's fast-growing community. Having worked in HR for many years, she brings strong people skills to help make matches.",
    accepts: "Singles of any age and religious level, mostly from the UK.",
  },
  {
    name: "Elana Sotil",
    location: "Basel, Switzerland",
    bio: "Elana grew up in Sydney, Australia and moved to Basel after getting married. A qualified Financial Analyst and Writer, she understands the global challenges of shidduchim and has been involved with matchmaking for over ten years.",
    accepts:
      "Singles of any age from any place, as long as she can meet or speak with them.",
  },
  {
    name: "Debbie Weissbraun",
    location: "London",
    bio: "Debbie lives in Golders Green and has been teaching in Jewish schools for over twenty years, heading Special Needs at Mathilda Marks Kennedy Primary School. She has been involved with shidduchim for the last seven years and is passionate about helping more singles find their bashert.",
    accepts: "Singles between 18 and 55 from the UK and Europe.",
  },
  {
    name: "Sarita Mandelbaum",
    location: "Amsterdam",
    bio: "Sarita is Dutch, a mother of two and a grandmother, living in Amsterdam with her American husband. She works part-time as an Occupational Therapist and is involved in community volunteer work. She is dedicated to helping European singles find their match.",
    accepts: "Singles of any age from anywhere in Europe.",
  },
  {
    name: "Brevice Azoulay",
    location: "Edgware, London",
    bio: "Brevice is a mother and grandmother, married to Haim for over 33 years. She has worked at Beis Yaakov Primary School for 17 years and made her first shidduch over 20 years ago — with that couple happily married ever since.",
    accepts: "Singles between 20 and 60 from the UK and Europe.",
  },
  {
    name: "Tovah Shapiro",
    location: "London",
    bio: "Tovah is a mother and grandmother who is passionate about helping people find their other half in her spare time. She focuses mostly on baalei teshuva and modern orthodox singles in the UK and likes to meet in person.",
    accepts: "Singles aged 20–40 from anywhere, subject to meeting in person.",
    photo: "/shadchanim/tova.jpeg",
  },
  {
    name: "Dini Sharman",
    location: "London",
    bio: "Dini lives in Golders Green and is a professional pianist and freelance piano teacher. She made her first successful match five years ago and has been involved in setting people up ever since. She is truly passionate about helping singles find their bashert.",
    accepts: "Singles between 18 and 40 from anywhere in the UK.",
  },
  {
    name: "Aviva Rowe",
    location: "London",
    bio: "Aviva is married and the mother of four girls and two sons-in-law. She was previously a teacher and is now a therapist. Aviva has been involved in making shidduchim for a number of years — there are few things that give her greater joy than being the shaliach of a new Choson and Kallah. She is mainly involved with middle-of-the-road MO to Yeshivish singles.",
    accepts: "Singles of all ages, particularly 19–35, from the UK.",
  },
  {
    name: "Ariella Hacmoun",
    location: "TBC", // TODO: confirm location
    // TODO: Add bio for Ariella Hacmoun
    bio: "",
    accepts: "",
  },
  {
    name: "Chaya Rubinson",
    location: "TBC", // TODO: confirm location
    // TODO: Add bio for Chaya Rubinson
    bio: "",
    accepts: "",
  },
  {
    name: "Elizabeth Bergman",
    location: "TBC", // TODO: confirm location
    // TODO: Add bio for Elizabeth Bergman
    bio: "",
    accepts: "",
  },
  {
    name: "Liza Taitz",
    location: "Hendon, London",
    bio: "Liza is a mum and Educational Consultant who lives in Hendon. She was a Head of Kodesh and Assistant Headteacher for many years. Liza is also a Kallah teacher. She made her first match in 2020 and is passionate about helping people find their besherts.",
    accepts: "Singles aged 20–45 from the UK.",
    photo: "/shadchanim/liza.jpeg",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ShadchanimPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Our Team
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Our Shadchanim
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
            We are very proud of our shadchanim — a fantastic group of
            dedicated individuals who all share a passion for helping frum
            singles find their zivug.
          </p>
        </div>
      </section>

      {/* ── How to Choose ── */}
      <section className="bg-white py-10 px-4 border-b border-cream-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-navy-600 text-sm leading-relaxed">
            When you complete your registration, you are invited to select your
            named shadchan. These descriptions should help you choose. Selecting
            a shadchan is done via the system when you sign up or log in — if
            your chosen shadchan is too busy at that moment, they will let you
            know and you can try someone else.
          </p>
        </div>
      </section>

      {/* ── Shadchanim Grid ── */}
      <section className="bg-cream-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shadchanim.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 flex flex-col"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blush-200 flex items-center justify-center shrink-0 overflow-hidden">
                  {s.photo ? (
                    <Image
                      src={s.photo}
                      alt={s.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-sm font-bold text-navy-700"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {initials(s.name)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 leading-tight">{s.name}</h3>
                  <p className="text-xs text-gold-600 font-medium">{s.location}</p>
                </div>
              </div>

              {/* Bio */}
              {s.bio ? (
                <p className="text-navy-600 text-sm leading-relaxed flex-1">{s.bio}</p>
              ) : (
                <p className="text-navy-300 text-sm italic flex-1">
                  Bio coming soon.
                </p>
              )}

              {/* Accepts */}
              {s.accepts && (
                <div className="mt-4 pt-4 border-t border-cream-200">
                  <p className="text-xs text-navy-500">
                    <span className="font-semibold text-navy-700">Accepts: </span>
                    {s.accepts}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-navy-800 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Choose Your Shadchan?
          </h2>
          <p className="text-navy-200 mb-8 leading-relaxed">
            Sign up to get started, or get in touch with any questions about
            which shadchan might be right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.sawyouatsinai.com/signup" // TODO: confirm URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors"
            >
              Join Today
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-navy-400 text-navy-100 font-semibold hover:bg-navy-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
