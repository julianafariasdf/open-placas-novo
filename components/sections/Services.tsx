"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    name: "Letras Caixa",
    image: "/portfolio/servicos/letras-caixa.webp",
    alt: "Letras caixa metálicas sobre painel de madeira em consultório odontológico",
    description: "Volume, presença e acabamento refinado para destacar sua marca em fachadas e ambientes internos.",
  },
  {
    name: "Fachadas em ACM",
    image: "/portfolio/servicos/acm-led.webp",
    alt: "Fachada Rei do Conforto com revestimento ACM e iluminação LED",
    description: "Revestimento em ACM e iluminação LED que valorizam a arquitetura e a identidade da sua fachada.",
  },
  {
    name: "Neon LED",
    image: "/portfolio/servicos/neon-led.webp",
    alt: "Neon LED flexível com iluminação colorida",
    description: "Luz e formas personalizadas para criar ambientes marcantes e dar personalidade ao seu espaço.",
  },
  {
    name: "Placas em Acrílico",
    image: "/portfolio/servicos/acrilico-led.webp",
    preserveFullImage: true,
    alt: "Placa Nobre Nails em acrílico com iluminação LED",
    description: "Peças em acrílico com iluminação delicada para apresentar sua marca com elegância em cada detalhe.",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function navigate(index: number) {
    const track = trackRef.current;
    if (!track || !window.matchMedia("(max-width: 767px)").matches) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    const left = card.getBoundingClientRect().left - track.getBoundingClientRect().left
      + track.scrollLeft - parseFloat(getComputedStyle(track).paddingLeft);
    track.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function syncActiveCard() {
    const track = trackRef.current;
    if (!track || !window.matchMedia("(max-width: 767px)").matches) return;
    const start = track.getBoundingClientRect().left;
    const padding = parseFloat(getComputedStyle(track).paddingLeft);
    const maxScroll = track.scrollWidth - track.clientWidth;
    let nearest = 0;
    let distance = Infinity;
    Array.from(track.children).forEach((card, index) => {
      const target = Math.min(maxScroll, Math.max(0,
        card.getBoundingClientRect().left - start + track.scrollLeft - padding));
      const delta = Math.abs(track.scrollLeft - target);
      if (delta < distance) {
        distance = delta;
        nearest = index;
      }
    });
    setActive(nearest);
  }

  const controlClass = "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37] disabled:opacity-30 md:hidden";
  const arrowClass = "flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#080808]/60";

  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="min-w-0 scroll-mt-32 bg-[#080808] pt-10 pb-16 font-[family-name:var(--font-geist-sans)] md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 max-w-2xl md:mb-12">
          <span aria-hidden="true" className="mb-5 block h-px w-12 bg-[#D4AF37]" />
          <h2 id="services-heading" className="whitespace-nowrap text-[clamp(1.25rem,6vw,1.75rem)] font-semibold leading-tight tracking-tight text-[#C0C0C0] md:whitespace-normal md:text-4xl md:tracking-normal">
            Soluções em destaque
          </h2>
        </div>

        <p id="services-navigation-hint" className="mb-4 text-xs text-[#C0C0C0] md:hidden">
          Deslize para explorar
          <span className="sr-only"> Com o teclado, foque a lista e use as setas para navegar.</span>
        </p>
        <div
          ref={trackRef}
          id="services-carousel"
          onScroll={syncActiveCard}
          onKeyDown={(event) => {
            if (!window.matchMedia("(max-width: 767px)").matches) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              navigate(Math.max(0, Math.min(services.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
            }
          }}
          role="region"
          aria-label="Lista de serviços"
          aria-describedby="services-navigation-hint"
          tabIndex={0}
          className="-mx-6 flex min-w-0 snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] motion-reduce:scroll-auto motion-reduce:snap-none md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
        >
          {services.map((service, index) => (
            <article
              key={service.image}
              className="min-w-0 flex-[0_0_85vw] snap-start snap-always overflow-hidden rounded-lg border border-[#D4AF37]/15 bg-[#080808]"
            >
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  draggable={false}
                  sizes="(min-width: 1280px) 594px, (min-width: 1024px) calc((100vw - 88px) / 2), (min-width: 768px) calc((100vw - 80px) / 2), 85vw"
                  className={service.preserveFullImage ? "object-contain" : "object-cover"}
                />
                <button type="button" className={`${controlClass} left-1`} aria-label="Serviço anterior" aria-controls="services-carousel" disabled={index === 0} onClick={() => navigate(index - 1)}>
                  <span className={arrowClass} aria-hidden="true"><ChevronLeft size={16} /></span>
                </button>
                <button type="button" className={`${controlClass} right-1`} aria-label="Próximo serviço" aria-controls="services-carousel" disabled={index === services.length - 1} onClick={() => navigate(index + 1)}>
                  <span className={arrowClass} aria-hidden="true"><ChevronRight size={16} /></span>
                </button>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-medium tracking-tight text-[#D4AF37]">{service.name}</h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-[#C0C0C0]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
