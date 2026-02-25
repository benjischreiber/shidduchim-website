import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles — Shidduch.im",
  description: "Articles and advice for frum singles navigating the shidduch process.",
};

// TODO: Add articles here. Each article can link to its own page at /articles/[slug]
// or to an external URL.
const articles: {
  title: string;
  excerpt: string;
  date?: string;
  href: string;
  external?: boolean;
}[] = [
  // Example — uncomment and edit to add real articles:
  // {
  //   title: "How to Get the Most Out of Your Shadchan",
  //   excerpt: "Tips for building a productive relationship with your shadchan and maximising your chances of finding a great match.",
  //   date: "January 2025",
  //   href: "/articles/how-to-get-the-most-out-of-your-shadchan",
  // },
];

export default function ArticlesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Reading & Advice
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            Articles
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-navy-600 max-w-xl mx-auto">
            Guidance, advice and insights for frum singles navigating the
            shidduch process.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="bg-cream-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-navy-400 text-lg mb-2">Articles coming soon.</p>
              <p className="text-navy-300 text-sm">
                Check back shortly for advice and guidance on the shidduch
                process.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target={article.external ? "_blank" : undefined}
                  rel={article.external ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-cream-200 hover:border-gold-300 hover:shadow-md transition group"
                >
                  {article.date && (
                    <p className="text-xs text-gold-600 font-medium mb-2">
                      {article.date}
                    </p>
                  )}
                  <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-gold-600">
                    Read more →
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-12 px-4 border-t border-cream-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-navy-600 mb-4">
            Have a question not covered here?
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-navy-700 text-navy-800 font-semibold text-sm hover:bg-navy-50 transition-colors"
          >
            Read Our FAQs
          </Link>
        </div>
      </section>
    </>
  );
}
