export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
};

/** Product section ids used across nav + footer. */
export const SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "how", label: "How Nova works" },
  { id: "minions", label: "Minions" },
  { id: "integrations", label: "Integrations" },
  { id: "contact", label: "Contact" },
] as const;
