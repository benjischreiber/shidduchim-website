"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is SHIDDUCH.IM?",
    a: "SHIDDUCH.IM is a London-based organisation focused primarily on helping frum singles living in the UK and across Europe find their other half. We combine the traditional Torah values of meeting one's bashert through a shadchan with the advantages and accessibility of modern technology.",
  },
  {
    q: "How does SHIDDUCH.IM work?",
    a: "SHIDDUCH.IM has brought together shadchanim from communities around Europe and given them the ability to view thousands of singles on one online database. Singles' details are confidential and secure, viewed only by a team of selected, trained shadchanim. Members can choose whether to share their profile with a number of shadchanim on site or only a specific shadchan of their choice. Match suggestions are sent by e-mail, and members respond by accepting or declining through the system, giving feedback to their shadchan along the way.",
  },
  {
    q: "What does SHIDDUCH.IM offer?",
    a: "SHIDDUCH.IM offers members access to a wide range of shadchanim, catering for different ages, backgrounds and hashkafa — in the UK, Europe and worldwide. Members benefit from the personal touch of a shadchan in their own community who gets to know them, networks for them and helps them find their bashert. We also offer various privacy options, giving all members the ability to choose how many shadchanim can view their information.",
  },
  {
    q: "Why do we need SHIDDUCH.IM?",
    a: "Traditionally, every shadchan has their own file of singles, usually based on the section of community they are associated with. This limits shadchanim to suggesting matches only between people they know personally. SHIDDUCH.IM gives every shadchan the ability to search for each person's bashert wherever they may be in the world, whilst maintaining the traditional values and personal touch of meeting through a shadchan.",
  },
  {
    q: "Why is SHIDDUCH.IM connected to the SawYouAtSinai site?",
    a: "When creating SHIDDUCH.IM, it was felt beneficial to connect with the database of an established worldwide organisation to maximise potential. SHIDDUCH.IM has therefore joined forces with the US-based Saw You At Sinai platform — an ever-growing database of over 30,000 singles from around the world. This gives our members the accessibility of a worldwide network combined with the personal touch of their home-based shadchan.",
  },
  {
    q: "What is the difference between SHIDDUCH.IM and SYAS?",
    a: "SHIDDUCH.IM is focused primarily on UK and Europe-based singles, with the emphasis on members having an authentic and personal relationship with their shadchan. All SHIDDUCH.IM members can select one or multiple shadchanim to network for them. Additionally, members can choose whether to share their profile with all shadchanim on the combined international SYAS network, only shadchanim on the Europe-based SHIDDUCH.IM network, or only a specific shadchan of their choice.",
  },
  {
    q: "If I'm already on SYAS, do I need to join SHIDDUCH.IM?",
    a: "If you are already on SYAS, there is no need to re-join SHIDDUCH.IM — the system is fully integrated. However, you now have the opportunity to select a shadchan nearer to home and choose whether to share your profile with shadchanim on the worldwide SYAS network or only on the Europe-based SHIDDUCH.IM network.",
  },
  {
    q: "Does SHIDDUCH.IM have a membership fee?",
    a: "SHIDDUCH.IM currently has a free membership option. This includes having your profile on the database, receiving up to one match per week, the ability to decline matches, and notifications about our events. There is also an option to upgrade to a gold membership if you want a personal shadchan who will actively search for you, priority listing, up to 10 matches per week, and the ability to accept matches.",
  },
  {
    q: "What happens after I sign up?",
    a: "Once you sign up and fill in your profile, choose a specific shadchan to network for you and send you potential match suggestions. Many shadchanim will arrange to meet with you to get a better idea of who would be compatible with your values and personality. They will then search the database and send through profiles of potential matches for you to review — which you then accept or decline through the system. Once you are happy to meet, and have a mutually approved match, you arrange the first meeting. Your shadchan can be as involved as you would like throughout the process.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-navy-900 font-semibold group-hover:text-gold-600 transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-cream-300 text-navy-400 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-navy-600 leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-gradient-to-br from-cream-50 to-blush-100 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-3">
            Questions & Answers
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
            FAQs
          </h1>
          <div className="w-16 h-1 bg-gold-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-navy-600">
            Everything you need to know about SHIDDUCH.IM.
          </p>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="bg-cream-100 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">
            Still have a question?
          </h2>
          <p className="text-navy-600 mb-6">
            Feel free to reach out — we&rsquo;re happy to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy-800 text-white font-semibold hover:bg-navy-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
