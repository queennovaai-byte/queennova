import type { ReactNode } from "react";
import {
  Brain,
  Wrench,
  GraduationCap,
  Briefcase,
  CalendarCheck,
  Compass,
  Bot,
  Sparkles,
  Boxes,
} from "lucide-react";
import Logo from "./Logo";

/**
 * The Nova system, visualized: a reasoning core with orbiting
 * capabilities and supervised Minions. Pure CSS motion.
 */

type NodeProps = {
  ring: 1 | 2 | 3;
  /** fraction of one full revolution used as starting angle */
  offset: number;
  reverse?: boolean;
  children: ReactNode;
};

const RING_INSET = ["inset-[30%]", "inset-[16.5%]", "inset-[4%]"];
const RING_DURATION = [30, 46, 64];

function OrbNode({ ring, offset, reverse = false, children }: NodeProps) {
  const dur = RING_DURATION[ring - 1];
  const dir = reverse ? "spin-rev" : "spin-slow";
  const counter = reverse ? "spin-slow" : "spin-rev";
  return (
    <div
      className={`pointer-events-none absolute ${RING_INSET[ring - 1]}`}
      style={{ animation: `${dir} ${dur}s linear infinite`, animationDelay: `-${offset * dur}s` }}
    >
      <div className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div style={{ animation: `${counter} ${dur}s linear infinite`, animationDelay: `-${offset * dur}s` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Chip({ label, children, dim = false }: { label?: string; children: ReactNode; dim?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-300 hover:scale-110 ${
          dim
            ? "border-dashed border-line bg-abyss/60 text-dim"
            : "border-line bg-panel/85 text-iris-soft shadow-[0_8px_28px_-10px_rgba(91,67,214,0.55)]"
        }`}
      >
        {children}
      </div>
      {label && (
        <span className="hidden font-mono text-[0.55rem] tracking-[0.22em] text-dim uppercase md:block">
          {label}
        </span>
      )}
    </div>
  );
}

function M1Chip() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/60 bg-[#1a1206]/90 text-gold-soft shadow-[0_0_32px_-6px_rgba(230,182,85,0.55)]">
        <Bot size={19} />
        <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative h-2 w-2 rounded-full bg-gold" />
        </span>
      </div>
      <span className="rounded-full border border-gold/30 bg-void/80 px-2 py-0.5 font-mono text-[0.55rem] tracking-[0.2em] text-gold-soft uppercase backdrop-blur-sm">
        M1 · Content
      </span>
    </div>
  );
}

export default function OrbitSystem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] md:max-w-[540px]" aria-hidden="true">
      {/* rotating scan beam */}
      <div
        className="absolute inset-[2%] rounded-full opacity-40"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, rgba(143,124,255,0.14) 40deg, transparent 90deg)",
          animation: "spin-slow 14s linear infinite",
          maskImage: "radial-gradient(circle, transparent 30%, black 45%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 45%, transparent 72%)",
        }}
      />

      {/* rings */}
      <div className="absolute inset-[30%] rounded-full border border-line/70" />
      <div className="absolute inset-[16.5%] rounded-full border border-line/50" />
      <div className="absolute inset-[4%] rounded-full border border-dashed border-gold/25" />

      {/* core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-1/2 top-1/2 h-44 w-44 rounded-full"
          style={{
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(0,210,255,0.3), rgba(255,0,127,0.1) 60%, transparent 75%)",
            animation: "core-pulse 5s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full border border-nova-cyan/40"
          style={{ transform: "translate(-50%,-50%) scale(0.55)", animation: "ping-ring 3.6s cubic-bezier(0,0,0.2,1) infinite" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full border border-nova-pink/30"
          style={{ transform: "translate(-50%,-50%) scale(0.55)", animation: "ping-ring 3.6s cubic-bezier(0,0,0.2,1) 1.8s infinite" }}
        />
        <div className="relative flex h-[6rem] w-[6rem] items-center justify-center rounded-[1.8rem] border border-nova-cyan/40 bg-void shadow-[0_0_60px_-10px_rgba(0,210,255,0.6)] backdrop-blur-xl">
          <Logo size={96} className="scale-110" />
        </div>
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-mono text-[0.6rem] tracking-[0.4em] text-nova-cyan/80 uppercase">
          Nova · Core
        </p>
      </div>

      {/* ring 1 — brain resources */}
      <OrbNode ring={1} offset={0}>
        <Chip label="Memory">
          <Brain size={18} />
        </Chip>
      </OrbNode>
      <OrbNode ring={1} offset={0.5}>
        <Chip label="Tools">
          <Wrench size={17} />
        </Chip>
      </OrbNode>

      {/* ring 2 — capabilities */}
      <OrbNode ring={2} offset={0} reverse>
        <Chip label="Study">
          <GraduationCap size={18} />
        </Chip>
      </OrbNode>
      <OrbNode ring={2} offset={0.27} reverse>
        <Chip label="Business">
          <Briefcase size={17} />
        </Chip>
      </OrbNode>
      <OrbNode ring={2} offset={0.52} reverse>
        <Chip label="Personal">
          <CalendarCheck size={17} />
        </Chip>
      </OrbNode>
      <OrbNode ring={2} offset={0.77} reverse>
        <Chip label="Research">
          <Compass size={17} />
        </Chip>
      </OrbNode>

      {/* ring 3 — minions */}
      <OrbNode ring={3} offset={0.08}>
        <M1Chip />
      </OrbNode>
      <OrbNode ring={3} offset={0.46}>
        <Chip label="Planned" dim>
          <Sparkles size={16} />
        </Chip>
      </OrbNode>
      <OrbNode ring={3} offset={0.8}>
        <Chip label="Planned" dim>
          <Boxes size={16} />
        </Chip>
      </OrbNode>
    </div>
  );
}
