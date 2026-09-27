import { useEffect, useRef } from "react";

/**
 * Ambient deep-space canvas: drifting stars, subtle twinkle,
 * occasional shooting star. Fixed behind all content.
 */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; r: number; base: number; phase: number; speed: number; tint: string };
    type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number };

    let stars: Star[] = [];
    const meteors: Meteor[] = [];
    let nextMeteor = performance.now() + 4000;
    const tints = ["#c9c0ff", "#fff", "#f4d9a0", "#a89df0"];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(230, Math.floor((w * h) / 8500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.05 + 0.012,
        tint: tints[Math.floor(Math.random() * tints.length)],
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const tw = s.base + Math.sin(t * 0.0011 + s.phase) * 0.22;
        ctx.globalAlpha = Math.max(0.05, tw);
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y -= s.speed;
        s.x -= s.speed * 0.35;
        if (s.y < -4) {
          s.y = h + 4;
          s.x = Math.random() * w;
        }
        if (s.x < -4) s.x = w + 4;
      }

      // Occasional shooting star
      if (!reduced && t > nextMeteor) {
        nextMeteor = t + 6000 + Math.random() * 9000;
        meteors.push({
          x: Math.random() * w * 0.7 + w * 0.15,
          y: Math.random() * h * 0.3,
          vx: -5 - Math.random() * 3,
          vy: 2.2 + Math.random() * 1.4,
          life: 0,
          max: 60 + Math.random() * 30,
        });
      }
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += m.vx;
        m.y += m.vy;
        const fade = Math.sin((m.life / m.max) * Math.PI);
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 12, m.y - m.vy * 12);
        grad.addColorStop(0, `rgba(214, 200, 255, ${0.75 * fade})`);
        grad.addColorStop(1, "rgba(214, 200, 255, 0)");
        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 12, m.y - m.vy * 12);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.fillStyle = `rgba(255,255,255,${0.85 * fade})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
        if (m.life > m.max) meteors.splice(i, 1);
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div
        className="nebula left-[-12%] top-[-14%] h-[44rem] w-[44rem]"
        style={{ background: "radial-gradient(circle, rgba(0,210,255,0.18), transparent 65%)" }}
      />
      <div
        className="nebula right-[-14%] top-[34%] h-[38rem] w-[38rem]"
        style={{ background: "radial-gradient(circle, rgba(255,0,127,0.07), transparent 62%)" }}
      />
      <div
        className="nebula bottom-[-18%] left-[22%] h-[42rem] w-[42rem]"
        style={{ background: "radial-gradient(circle, rgba(157,0,255,0.1), transparent 65%)" }}
      />
      <canvas ref={ref} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full" />
    </>
  );
}
