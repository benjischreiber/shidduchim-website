import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Shidduch.im",
  description: "Useful resources for frum singles on the shidduch journey.",
};

// TODO: Add resources here — links to useful sites, documents, advice sheets, etc.
const resources: {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  category: string;
}[] = [
  {
    title: "SawYouAtSinai",
    description:
      "Our partner platform — the international database of frum singles powering the SHIDDUCH.IM network.",
    href: "https://www.sawyouatsinai.com",
    external: true,
    category: "Partners",
  },
  // TODO: Add more resources
];

const categories = [...new Set(resources.map((r) => r.category))];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Helpful Links
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Resources
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-navy-600 max-w-xl mx-auto">
            A curated collection of useful links and resources for frum singles
            on the shidduch journey.
          </p>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="bg-cream-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {resources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-navy-400 text-lg mb-2">Resources coming soon.</p>
              <p className="text-navy-300 text-sm">
                We&rsquo;re putting together a collection of helpful links and
                materials. Check back shortly.
              </p>
            </div>
          ) : (
            categories.map((cat) => (
              <div key={cat} className="mb-10">
                <h2 className="text-lg font-bold text-navy-700 uppercase tracking-widest mb-5 pb-2 border-b border-cream-300">
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resources
                    .filter((r) => r.category === cat)
                    .map((resource) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target={resource.external ? "_blank" : undefined}
                        rel={resource.external ? "noopener noreferrer" : undefined}
                        className="block bg-white rounded-2xl p-5 shadow-sm border border-cream-200 hover:border-gold-300 hover:shadow-md transition group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                            {resource.title}
                          </h3>
                          {resource.external && (
                            <svg
                              className="w-4 h-4 text-navy-300 shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </div>
                        <p className="text-navy-500 text-sm mt-1 leading-relaxed">
                          {resource.description}
                        </p>
                      </a>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-12 px-4 border-t border-cream-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-navy-600 mb-4">
            Something you&rsquo;d like to see added here?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-navy-700 text-navy-800 font-semibold text-sm hover:bg-navy-50 transition-colors"
          >
            Let Us Know
          </Link>
        </div>
      </section>
    </>
  );
}
