import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import type { LegalSection } from "../content/terms";
import { site } from "../config/site";

type Props = {
  badge: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  crossLink: { to: string; label: string };
};

/** Shared, data-driven layout for /terms and /privacy. */
export default function LegalPage({ badge, title, intro, sections, crossLink }: Props) {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pt-44">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <Link
          to="/"
          className="group mb-10 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.22em] text-dim uppercase transition-colors hover:text-iris-soft"
        >
          <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-panel/70 text-iris-soft">
            <FileText size={17} />
          </div>
          <p className="eyebrow">{badge}</p>
        </div>
        <h1 className="mt-6 font-display text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-mist">{intro}</p>
        <p className="mt-6 font-mono text-[0.65rem] tracking-[0.24em] text-dim uppercase">
          Last updated — {site.lastUpdated}
        </p>
        <div className="hairline mt-10" />
      </motion.div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[240px_1fr]">
        {/* sticky TOC */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden lg:block"
        >
          <div className="sticky top-28">
            <p className="eyebrow !text-[0.6rem]">On this page</p>
            <ul className="mt-5 space-y-3 border-l border-line-soft">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px border-l border-transparent pl-4 text-[0.8rem] text-dim transition-all duration-300 hover:border-iris hover:text-frost"
                  >
                    {s.title.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

        {/* sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line-soft py-9 first:border-t-0 first:pt-0">
              <h2 className="font-head text-xl font-semibold text-frost md:text-[1.35rem]">{s.title}</h2>
              {s.blocks.map((b, bi) => (
                <div key={bi} className={bi > 0 ? "mt-4" : ""}>
                  {b.paragraphs?.map((p, pi) => (
                    <p key={pi} className="mt-4 text-[0.93rem] leading-[1.85] text-mist">
                      {p}
                    </p>
                  ))}
                  {b.bullets && (
                    <ul className="mt-4 space-y-3">
                      {b.bullets.map((li, liI) => (
                        <li key={liI} className="flex gap-3.5 text-[0.93rem] leading-[1.75] text-mist">
                          <span className="mt-[0.72rem] h-1 w-1 shrink-0 rotate-45 bg-gold" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* cross link footer */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line-soft bg-panel/50 p-7">
            <p className="max-w-md text-sm leading-relaxed text-dim">
              This document should be read together with our {crossLink.label.toLowerCase()}.
            </p>
            <Link
              to={crossLink.to}
              className="group inline-flex items-center gap-2 rounded-full border border-iris/40 bg-iris/10 px-6 py-3 font-head text-sm font-semibold text-iris-soft transition-all duration-300 hover:border-iris/70 hover:bg-iris/20"
            >
              {crossLink.label}
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
