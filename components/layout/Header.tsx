"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { whatsappUrl } from "@/lib/contact";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/#empresa", label: "Empresa" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getScrollSnapshot = () => window.scrollY > 24;
const getServerSnapshot = () => false;
const budgetClassName = "rounded-md border border-[#D4AF37] bg-linear-to-b from-[#D4AF37]/10 to-transparent px-5 py-3 text-sm font-semibold tracking-wide text-[#D4AF37] shadow-[inset_0_1px_0_rgba(192,192,192,0.2),0_4px_18px_rgba(212,175,55,0.12)] transition-[color,background-color,box-shadow] duration-300 hover:bg-[#D4AF37] hover:text-[#080808] hover:shadow-[inset_0_1px_0_rgba(192,192,192,0.3),0_6px_24px_rgba(212,175,55,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] motion-reduce:transition-none";
const linkClassName = "group relative py-3 text-sm lg:text-base font-medium tracking-wide text-[#C0C0C0] lg:text-[#E5E5E5] lg:hover:text-[#D4AF37] lg:focus-visible:text-[#D4AF37] transition-colors duration-300 hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] motion-reduce:transition-none";

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrollSnapshot, getServerSnapshot);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b font-[family-name:var(--font-geist-sans)] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none ${scrolled ? "border-[#D4AF37]/15 bg-[#080808]/85 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl" : "border-transparent bg-transparent"}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 sm:px-6 lg:py-4">
        <Link href="/#inicio" aria-label="Open Placas — início" onClick={() => setMenuOpen(false)} className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]">
          <Image
            src="/logo/open-logo-completa.png"
            alt="Open Placas"
            width={465}
            height={158}
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 220px, 180px"
            className="h-auto w-[180px] sm:w-[220px] lg:w-[280px]"
            preload
          />
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClassName}>
              {label}
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
            </Link>
          ))}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`hidden shrink-0 lg:block ${budgetClassName}`}>
          Solicitar orçamento
        </a>
        <button
          ref={menuButton}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#D4AF37]/40 text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] lg:hidden"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação mobile" hidden={!menuOpen} className="max-h-[70dvh] overflow-y-auto border-t border-[#D4AF37]/20 bg-[#080808]/95 px-5 py-4 shadow-xl backdrop-blur-xl lg:hidden">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`block border-b border-[#C0C0C0]/10 hover:border-[#D4AF37] ${linkClassName}`}>
            {label}
          </Link>
        ))}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className={`mt-5 block w-full text-center ${budgetClassName}`}>
          Solicitar orçamento
        </a>
      </nav>
    </header>
  );
}
