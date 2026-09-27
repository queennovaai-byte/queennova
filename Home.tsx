import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Briefcase,
  CalendarCheck,
  Clapperboard,
  ClipboardCheck,
  Compass,
  Copy,
  Check,
  Cpu,
  Eye,
  FolderCog,
  GraduationCap,
  KeyRound,
  Mail,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  Target,
  Undo2,
  Video,
} from "lucide-react";
import Reveal from "../components/Reveal";
import OrbitSystem from "../components/OrbitSystem";
import { scrollToSection } from "../lib/nav";
import { site } from "../config/site";

/* ─────────────────────────── Data ─────────────────────────── */

const TICKER = [
  "Task planning",
  "Study support",
  "Deep research",
  "File & computer tools",
  "Business operations",
  "Minion delegation",
  "Long-term memory",
  "Authorized publishing",
];

const CAPABILITIES = [
  {
    icon: CalendarCheck,
    tag: "PERSONAL OPS",
    title: "Personal tasks & organization",
    desc: "Planning, reminders, lists and daily logistics. Nova keeps track of what matters so nothing quietly slips.",
  },
  {
    icon: GraduationCap,
    tag: "ACADEMIC",
    title: "Study & university work",
    desc: "Study plans, structured summaries, practice questions and assignment support — built around your deadlines.",
  },
  {
    icon: Compass,
    tag: "RESEARCH",
    title: "Search & information gathering",
    desc: "Nova searches, reads and consolidates — returning clear, organized findings instead of a pile of raw links.",
  },
  {
    icon: FolderCog,
    tag: "TOOL USE",
    title: "Computer & file tools",
    desc: "With your permission, Nova uses tools to work with your machine and files — organizing, drafting and transforming documents.",
  },
  {
    icon: Briefcase,
    tag: "HUSTLE",
    title: "Online business workflows",
    desc: "Day-to-day operations for an online hustle: planning content, tracking the pipeline and preparing whatever ships next.",
  },
  {
    icon: Bot,
    tag: "DELEGATION",
    title: "Specialized Minions",
    desc: "Focused jobs are delegated to scoped AI workers that execute with least-privilege access and report structured results back.",
  },
];

const STEPS = [
  {
    icon: Target,
    num: "01",
    title: "Define the goal",
    desc: "You give Nova an objective in plain language — personal, academic or business.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "The brain reasons",
    desc: "Nova's reasoning core plans the approach and selects the memory, tools and skills the goal requires.",
  },
  {
    icon: Bot,
    num: "03",
    title: "Minions execute",
    desc: "Specialized work is delegated with least-privilege permissions — each Minion only gets what its job needs.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "You stay in control",
    desc: "Structured results return to Nova for review. Connections and permissions can be revoked at any time.",
  },
];

const SECURITY = [
  {
    icon: KeyRound,
    title: "OAuth only",
    desc: "Nova never sees your platform passwords. Access is granted through each service's official authorization page.",
  },
  {
    icon: SlidersHorizontal,
    title: "Scoped permissions",
    desc: "Integrations — and every Minion — receive only the exact permissions their job requires.",
  },
  {
    icon: Undo2,
    title: "Revoke anytime",
    desc: "Disconnect a service in one step — from Nova, or directly in the platform's own settings.",
  },
  {
    icon: ShieldCheck,
    title: "Data minimalism",
    desc: "Tokens are used only to provide what you authorized, and are deleted after disconnection.",
  },
];

/* ───────────────────────── Sections ───────────────────────── */

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 md:px-8 lg:pt-24">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-gold" />
            </span>
            <p className="eyebrow">Personal AI Agent — Life · Study · Business</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.04] tracking-tight"
          >
            Meet
            <br />
            <span className="text-nova-gradient">Queen Nova.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl font-head text-lg font-medium leading-relaxed text-frost/90 md:text-xl"
          >
            The AI operating partner that takes a goal, plans the work, and gets it done.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mist"
          >
            Nova isn't a chatbot built around one trick. Her reasoning core decides what a goal needs — memory, tools,
            research or specialized AI workers called{" "}
            <span className="font-semibold text-gold-soft">Minions</span> — and carries it out under your supervision,
            for personal life, study and your online business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection("how")}
              className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-iris-deep via-iris to-iris-deep bg-[length:200%_100%] px-7 py-3.5 font-head text-sm font-semibold text-white shadow-[0_14px_44px_-12px_rgba(91,67,214,0.8)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_18px_54px_-12px_rgba(91,67,214,0.95)]"
            >
              Explore how Nova works
              <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToSection("integrations")}
              className="group flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-7 py-3.5 font-head text-sm font-semibold text-frost/85 backdrop-blur-sm transition-all duration-300 hover:border-iris/50 hover:bg-white/[0.06]"
            >
              Integrations &amp; authorization
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {[
              { dot: "bg-emerald-400", label: "System online" },
              { dot: "bg-nova-pink", label: "M1 minion · in production" },
              { dot: "bg-nova-cyan", label: "Human-supervised by design" },
            ].map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-2 rounded-full border border-line-soft bg-abyss/60 px-3.5 py-1.5 font-mono text-[0.62rem] tracking-[0.16em] text-dim uppercase backdrop-blur-sm"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                {c.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitSystem />
        </motion.div>
      </div>
    </section>
  );
}

function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="relative z-10 overflow-hidden border-y border-line-soft bg-abyss/40 py-4 backdrop-blur-sm">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-mono text-[0.68rem] tracking-[0.28em] text-dim uppercase">
              {t}
            </span>
            <Sparkle size={10} className={i % 2 ? "text-gold/60" : "text-iris/60"} />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-head text-3xl font-semibold leading-tight tracking-tight text-frost md:text-[2.6rem] md:leading-[1.15]">
          {title}
        </h2>
        {lede && <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-mist">{lede}</p>}
      </div>
    </Reveal>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionHead
        eyebrow="// What Nova Does"
        title={
          <>
            A general-purpose partner,
            <br />
            <span className="text-nova-gradient">not a one-trick bot.</span>
          </>
        }
        lede="Content production is just one capability — delegated to a Minion. Nova herself is the operating layer above it all: she understands goals, decides what they need, and orchestrates the work from start to finish."
      />
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.title} delay={0.06 * i}>
            <div className="card group relative h-full overflow-hidden rounded-3xl p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(143,124,255,0.24), transparent 70%)" }}
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-abyss/70 text-iris-soft transition-all duration-500 group-hover:border-iris/50 group-hover:text-iris">
                <c.icon size={21} />
              </div>
              <h3 className="mt-6 font-head text-lg font-semibold text-frost">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{c.desc}</p>
              <p className="mt-6 font-mono text-[0.6rem] tracking-[0.26em] text-dim uppercase">{c.tag}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative z-10 border-y border-line-soft bg-abyss/30">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <SectionHead
          eyebrow="// How Nova Works"
          title={
            <>
              From goal to handled,
              <br />
              in <span className="text-nova-gradient">four steps.</span>
            </>
          }
        />

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="hairline absolute left-0 right-0 top-10 hidden lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.08 * i}>
              <div className="relative h-full rounded-3xl border border-line-soft bg-panel/50 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-void text-iris-soft">
                    <s.icon size={19} />
                  </div>
                  <span className="font-display text-2xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(143,124,255,0.45)]">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-head text-lg font-semibold text-frost">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* protocol split */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow !text-gold/90">// The Delegation Protocol</p>
              <h3 className="mt-4 font-head text-2xl font-semibold leading-snug text-frost md:text-3xl">
                Nova owns the goal.
                <br />
                Minions only ever see their job.
              </h3>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mist">
                When Nova delegates, she hands a Minion a single, narrowly defined task along with only the tools and
                permissions that task requires — nothing more. The Minion executes, and returns a structured result to
                Nova, where it is verified and assembled into the final answer you receive.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Least-privilege scopes — no Minion holds broad access",
                  "Structured results — every job returns verifiable output",
                  "Human supervision — publishing and sensitive actions happen at your instruction",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-mist">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass relative overflow-hidden rounded-3xl p-1">
              <div
                className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(230,182,85,0.14), transparent 70%)" }}
              />
              <div className="rounded-[1.35rem] bg-void/85 p-7 font-mono text-[0.78rem] leading-loose md:text-[0.84rem]">
                <div className="mb-5 flex items-center justify-between border-b border-line-soft pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3d3358]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3d3358]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                  </div>
                  <span className="text-[0.58rem] tracking-[0.24em] text-dim uppercase">
                    Example · Illustrative
                  </span>
                </div>
                <p className="text-gold-soft">$ nova.goal(&quot;Plan my exam week · prep Thursday&apos;s post&quot;)</p>
                <p className="mt-4 text-dim">
                  <span className="text-iris-soft">01 reason</span>&nbsp;&nbsp;&nbsp;&nbsp;2 skills · memory · 1 minion
                  selected
                </p>
                <p className="text-dim">
                  <span className="text-iris-soft">02 delegate</span>&nbsp;&nbsp;M1 / content&nbsp;→&nbsp;scoped
                  permissions only
                </p>
                <p className="text-dim">
                  <span className="text-iris-soft">03 verify</span>&nbsp;&nbsp;&nbsp;&nbsp;structured result → Nova
                  review
                </p>
                <p className="text-dim">
                  <span className="text-iris-soft">04 deliver</span>&nbsp;&nbsp;&nbsp;week plan + post draft → you
                  <span className="ml-2 inline-block h-3.5 w-[7px] translate-y-[3px] bg-iris" style={{ animation: "blink 1.1s step-end infinite" }} />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Minions() {
  return (
    <section id="minions" className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionHead
        eyebrow="// Minions — Specialized AI Workers"
        title={
          <>
            One supervisor.
            <br />
            <span className="text-gold-gradient">Scoped specialists.</span>
          </>
        }
        lede="Nova owns every goal end-to-end and decides when — and whether — to delegate. A Minion never receives broad access: only the capabilities its assignment needs, returning a structured result its supervisor can verify."
      />

      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {/* M1 — featured */}
        <Reveal className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-[#171006]/80 to-panel/70 p-8 md:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(230,182,85,0.16), transparent 68%)" }}
            />
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/50 bg-gold/10 text-gold-soft">
                <Clapperboard size={22} />
              </div>
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[0.6rem] tracking-[0.24em] text-gold-soft uppercase">
                In production
              </span>
            </div>
            <h3 className="mt-6 font-head text-2xl font-semibold text-frost">
              M1 — Content Production Minion
            </h3>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mist">
              M1 is Nova&apos;s first production Minion. It specializes in content production and publishing
              workflows — video production, clipping and story-based content — and, where you have connected and
              authorized platforms such as TikTok, it assists with publishing workflows for content you provide.
            </p>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-mist">
              Nova supervises M1, assigns each job, and reviews its structured results. M1 runs{" "}
              <span className="text-frost">for</span> Nova — it never replaces her, and it never broadens its own
              access.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Video production", "Clipping", "Story content", "Authorized publishing"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line-soft bg-void/60 px-3.5 py-1.5 font-mono text-[0.62rem] tracking-[0.14em] text-mist uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* planned minions */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: Radar,
              name: "M2 — Research Minion",
              desc: "A scoped worker for deep, sustained research jobs currently in design. No access exists until its role and permissions are finalized.",
            },
            {
              icon: Boxes,
              name: "M3 — Operations Minion",
              desc: "A planned specialist for repetitive business operations. Like every Minion, it will ship with least-privilege scopes from day one.",
            },
          ].map((m, i) => (
            <Reveal key={m.name} delay={0.08 * (i + 1)} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-dashed border-line bg-panel/40 p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-void/70 text-dim">
                    <m.icon size={19} />
                  </div>
                  <span className="rounded-full border border-line-soft px-3 py-1 font-mono text-[0.58rem] tracking-[0.24em] text-dim uppercase">
                    Planned
                  </span>
                </div>
                <h3 className="mt-6 font-head text-lg font-semibold text-frost/85">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* principles */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { icon: SlidersHorizontal, t: "Least-privilege scopes", d: "Each Minion receives only the exact capabilities its assigned job requires." },
          { icon: ClipboardCheck, t: "Structured results", d: "Jobs return verifiable, machine-readable output — not vague summaries." },
          { icon: Eye, t: "Supervised by Nova", d: "Nova assigns, monitors and reviews. Minions are workers, not decision-makers." },
        ].map((p, i) => (
          <Reveal key={p.t} delay={0.07 * i}>
            <div className="card h-full rounded-3xl p-7">
              <p.icon size={19} className="text-iris-soft" />
              <h4 className="mt-4 font-head text-base font-semibold text-frost">{p.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section id="integrations" className="relative z-10 border-y border-line-soft bg-abyss/30">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="// Connected Apps"
              title={
                <>
                  Explicitly authorized.
                  <br />
                  <span className="text-nova-gradient">Revocable anytime.</span>
                </>
              }
              lede="Nova connects to third-party services only when you choose to sign in and grant access. Authorization happens on the service's own OAuth page, where you approve the exact permissions Nova may use. From that point, Nova — through supervised Minions like M1 — can act on your behalf, strictly within that scope."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6">
                {SECURITY.map((s) => (
                  <div key={s.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel/70 text-iris-soft">
                      <s.icon size={17} />
                    </div>
                    <div>
                      <h4 className="font-head text-[0.95rem] font-semibold text-frost">{s.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-mist">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/privacy"
                className="group mt-10 inline-flex items-center gap-2 font-head text-sm font-semibold text-gold-soft transition-colors hover:text-gold"
              >
                Read how data is handled in the Privacy Policy
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 lg:pt-24">
            {/* TikTok — live integration */}
            <Reveal>
              <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-10">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(143,124,255,0.2), transparent 70%)" }}
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-void text-frost">
                    <Video size={21} />
                  </div>
                  <span className="rounded-full border border-iris/40 bg-iris/10 px-3 py-1 font-mono text-[0.6rem] tracking-[0.24em] text-iris-soft uppercase">
                    Supported integration
                  </span>
                </div>
                <h3 className="mt-6 font-head text-2xl font-semibold text-frost">TikTok — content workflows</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-mist">
                  Connect your account through TikTok&apos;s official login and approve the permissions you choose.
                  Nova&apos;s content Minion, M1, can then assist with publishing workflows for content you provide —
                  for example, posting a video you have reviewed to your own account.
                </p>
                <div className="mt-6 rounded-2xl border border-line-soft bg-void/60 p-4">
                  <p className="font-mono text-[0.68rem] leading-relaxed tracking-wide text-dim">
                    REVOKE ACCESS ANYTIME — TIKTOK: PROFILE → SETTINGS AND PRIVACY → SECURITY → MANAGE APP
                    PERMISSIONS
                  </p>
                </div>
              </div>
            </Reveal>

            {/* future */}
            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-dashed border-line bg-panel/40 p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-head text-lg font-semibold text-frost/85">More platforms</h3>
                  <span className="rounded-full border border-line-soft px-3 py-1 font-mono text-[0.58rem] tracking-[0.24em] text-dim uppercase">
                    Over time
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-dim">
                  New integrations are added carefully, one at a time. Every connection is opt-in, narrowly scoped and
                  revocable — no silent access, ever.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-b from-panel/80 to-abyss/70 px-6 py-16 text-center md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(143,124,255,0.22), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(230,182,85,0.7), transparent)" }}
        />
        <Reveal>
          <p className="eyebrow">// Contact</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(1.7rem,4vw,2.9rem)] font-semibold leading-tight">
            Talk to the humans behind <span className="text-nova-gradient">Nova.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-mist">
            Questions about the product, integration support, privacy requests or legal inquiries — everything is
            handled from one address. We aim to reply within a few business days.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.contactEmail}`}
              className="group flex flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-iris-deep via-iris to-iris-deep bg-[length:200%_100%] px-7 py-3.5 font-head text-sm font-semibold text-white shadow-[0_14px_44px_-12px_rgba(91,67,214,0.8)] transition-all duration-500 hover:bg-[position:100%_0]"
            >
              <Mail size={15} />
              {site.contactEmail}
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3.5 font-head text-sm font-semibold text-frost/85 transition-all duration-300 hover:border-iris/50 hover:bg-white/[0.06]"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              to="/privacy"
              className="group inline-flex items-center gap-1.5 font-head text-sm font-medium text-mist transition-colors hover:text-gold-soft"
            >
              Privacy Policy
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/terms"
              className="group inline-flex items-center gap-1.5 font-head text-sm font-medium text-mist transition-colors hover:text-gold-soft"
            >
              Terms of Service
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Capabilities />
      <HowItWorks />
      <Minions />
      <Integrations />
      <Contact />
    </>
  );
}
