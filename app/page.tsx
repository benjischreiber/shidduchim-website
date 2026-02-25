import Link from "next/link";

const JOIN_URL = "https://www.sawyouatsinai.com/signup"; // TODO: confirm URL

const testimonials = [
  {
    quote:
      "I was really skeptical when I first signed up — but now I'm married to the most wonderful girl! Try it!",
    attribution: "A happy member",
  },
  {
    quote:
      "We are so grateful to Shidduch.im for helping us find each other! We recommend it to all our friends!",
    attribution: "A happy couple",
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Create your profile on our secure platform, powered by the trusted SawYouAtSinai network.",
  },
  {
    number: "02",
    title: "Meet Your Shadchan",
    description:
      "Choose a dedicated shadchan from our network who will get to know you personally and search on your behalf.",
  },
  {
    number: "03",
    title: "Find Your Bashert",
    description:
      "Receive personalised match suggestions and let your shadchan guide you every step of the way.",
  },
];

const features = [
  {
    title: "Personal Touch",
    description:
      "Every member has a named shadchan who knows them personally — not just an algorithm.",
  },
  {
    title: "European Focus",
    description:
      "Shadchanim based in the UK and across Europe, with an understanding of our communities.",
  },
  {
    title: "Global Network",
    description:
      "Connected to the worldwide SawYouAtSinai database of over 30,000 frum singles.",
  },
  {
    title: "Your Privacy",
    description:
      "You control who can view your profile. Your information is confidential and secure.",
  },
];

const rabbonim = [
  "Dayan CH Ehrentreu",
  "Rabbi SH Weingarten",
  "Rabbi G Hager",
  "Rabbi E Zobin",
  "Manchester Beis Din",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-blush-100 pt-16">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blush-200 rounded-full opacity-30 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-200 rounded-full opacity-20 blur-3xl -translate-x-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold-600 mb-4">
            A Global Network of Shadchanim
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6">
            It All Starts
            <br />
            <span className="text-blush-400">Here</span>
          </h1>
          <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            SHIDDUCH.IM combines the warmth and wisdom of a personal shadchan
            with modern technology — helping frum singles across Europe find
            their bashert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy-800 text-white font-semibold text-base hover:bg-navy-900 transition-colors shadow-lg"
            >
              Join Today
            </a>
            <Link
              href="/shadchanim"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-navy-700 text-navy-800 font-semibold text-base hover:bg-navy-50 transition-colors"
            >
              Meet Our Shadchanim
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-navy-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Tradition Meets Technology ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Our Approach
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Tradition Meets Technology
          </h2>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-8 rounded-full" />
          <p className="text-lg text-navy-600 leading-relaxed">
            SHIDDUCH.IM brings together a network of dedicated, community-based
            shadchanim and gives them access to a sophisticated shared platform,
            so that every single has a named shadchan working personally for
            them — with the breadth of a worldwide database behind them.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-cream-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
              The Process
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 shadow-sm border border-cream-200 text-center"
              >
                <div
                  className="text-5xl font-bold text-blush-200 mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{step.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-navy-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-3">
              Why Shidduch.im
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              The Shidduch.im Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-navy-800 rounded-2xl p-6 border border-navy-700"
              >
                <div className="w-8 h-1 bg-gold-400 rounded-full mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-navy-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-blush-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
              Success Stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Some of Our Couples
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-blush-100"
              >
                <svg className="w-8 h-8 text-blush-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-navy-700 text-lg italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm text-navy-400 font-medium">— {t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rabbonim Endorsements ── */}
      <section className="bg-cream-200 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Rabbinic Endorsements
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Supported by Leading Rabbonim
          </h2>
          <p className="text-navy-600 mb-10">
            We are grateful to the below Rabbonim and Dayonim for giving
            SHIDDUCH.IM their full support and encouragement.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {rabbonim.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full bg-white border border-cream-300 text-navy-700 text-sm font-medium shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm border border-cream-300">
            <p className="text-navy-700 italic leading-relaxed mb-4">
              &ldquo;Combining new technology with our traditional values, I
              highly recommend Shidduch.im as an effective and kosher way to
              find one&rsquo;s soulmate. Signing up gives you access to the
              best Shadchanim, the broadest database and the clearest criteria
              — to find the person that is a match for you!&rdquo;
            </p>
            <p className="font-bold text-navy-900">Rabbi E Zobin</p>
            <p className="text-sm text-navy-400">Ner Yisrael</p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-navy-800 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your Bashert?
          </h2>
          <p className="text-navy-200 text-lg mb-10 leading-relaxed">
            Join our growing network of frum singles across the UK and Europe.
            Your shadchan is waiting to meet you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold-500 text-white font-semibold text-base hover:bg-gold-600 transition-colors shadow-lg"
            >
              Join Today — It&rsquo;s Free
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-navy-400 text-navy-100 font-semibold text-base hover:bg-navy-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
