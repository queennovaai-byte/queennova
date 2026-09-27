import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { site } from "../config/site";
import { SECTIONS, scrollToSection } from "../lib/nav";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const goSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${id}` });
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="relative z-10 border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <span className="font-display text-[0.82rem] font-semibold tracking-[0.22em]">
                QUEEN&nbsp;<span className="text-nova-gradient">NOVA</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-dim">
              {site.tagline} One goal in — tools, memory and supervised Minions carry it out.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-dim uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              System online
            </div>
          </div>

          {/* product */}
          <div>
            <p className="eyebrow !text-[0.6rem]">Product</p>
            <ul className="mt-5 space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => goSection(s.id)}
                    className="text-sm text-mist transition-colors duration-300 hover:text-frost"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* legal */}
          <div>
            <p className="eyebrow !text-[0.6rem]">Legal</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="group inline-flex items-center gap-1 text-sm text-mist transition-colors duration-300 hover:text-frost"
                >
                  Terms of Service
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="group inline-flex items-center gap-1 text-sm text-mist transition-colors duration-300 hover:text-frost"
                >
                  Privacy Policy
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="eyebrow !text-[0.6rem]">Contact</p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-gold-soft"
            >
              <Mail size={14} />
              {site.contactEmail}
            </a>
            <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-dim">
              Support, integration, privacy and legal inquiries are handled from this address.
            </p>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-dim md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.copyrightHolder}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            All third-party integrations are optional and require your explicit authorization. TikTok and YouTube are
            trademarks of their respective owners; Queen Nova is an independent product and is not affiliated with or
            endorsed by them.
          </p>
        </div>
      </div>
    </footer>
  );
}
