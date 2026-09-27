import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShieldCheck, Mail } from "lucide-react";
import Logo from "./Logo";
import { SECTIONS, scrollToSection } from "../lib/nav";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const goSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${id}` });
    } else {
      scrollToSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${
          scrolled || open ? "py-3" : "py-5"
        }`}
      >
        {/* wordmark */}
        <Link
          to="/"
          className="group relative z-50 flex items-center gap-3"
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="transition-transform duration-500 group-hover:rotate-[8deg]">
            <Logo size={34} />
          </span>
          <span className="font-display text-[0.82rem] font-semibold tracking-[0.22em] text-frost">
            QUEEN&nbsp;<span className="text-nova-gradient">NOVA</span>
          </span>
        </Link>

        {/* desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* glass pill behind the desktop nav only */}
          <div className="flex items-center gap-1 rounded-full border border-line-soft bg-abyss/55 px-2 py-1.5 backdrop-blur-md">
            {SECTIONS.filter((s) => s.id !== "contact").map((s) => (
              <button
                key={s.id}
                onClick={() => goSection(s.id)}
                className="rounded-full px-4 py-1.5 font-head text-[0.83rem] font-medium text-mist transition-colors duration-300 hover:bg-white/5 hover:text-frost"
              >
                {s.label}
              </button>
            ))}
            <Link
              to="/privacy"
              className="rounded-full px-4 py-1.5 font-head text-[0.83rem] font-medium text-mist transition-colors duration-300 hover:bg-white/5 hover:text-frost"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="rounded-full px-4 py-1.5 font-head text-[0.83rem] font-medium text-mist transition-colors duration-300 hover:bg-white/5 hover:text-frost"
            >
              Terms
            </Link>
          </div>
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => goSection("contact")}
            className="group flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 font-head text-[0.83rem] font-semibold text-gold-soft transition-all duration-300 hover:border-gold/70 hover:bg-gold/20 hover:shadow-[0_0_28px_rgba(230,182,85,0.25)]"
          >
            <Mail size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            Contact
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="relative z-50 rounded-lg border border-line bg-abyss/70 p-2.5 text-frost backdrop-blur-md lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void/95 px-8 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => goSection(s.id)}
                  className="border-b border-line-soft py-4 text-left font-display text-xl font-semibold text-frost/90 transition-colors hover:text-iris-soft"
                >
                  {s.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * SECTIONS.length, duration: 0.5 }}
                className="mt-6 flex flex-col gap-3"
              >
                <Link
                  to="/privacy"
                  className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-dim uppercase"
                >
                  <ShieldCheck size={14} /> Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-dim uppercase"
                >
                  <ShieldCheck size={14} /> Terms of Service
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
