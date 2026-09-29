import Image from "next/image";
import { whatsappUrl } from "@/lib/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-5 sm:pt-28 md:min-h-screen md:py-32"
    >

      {/* Imagem de fundo */}
      <Image
        src="/images/hero/fachada-letras-caixa.png"
        alt="Fachada comercial com letras caixa produzida pela Open Placas"
        fill
        priority
        className="object-cover"
      />


      {/* Overlay para leitura */}
      <div
        className="
        absolute
        inset-0
        bg-black/60
        "
      />


      {/* Conteúdo */}
      <div
        className="
        relative
        z-10
        mx-auto
        w-full
        max-w-7xl
        px-6
        "
      >

        <div className="flex min-h-[calc(100svh-7.25rem)] min-w-0 max-w-xl flex-col justify-center sm:min-h-[calc(100svh-8.25rem)] md:min-h-0">

          <p
            className="
            mb-3 md:mb-5
            text-[11px] md:text-sm
            uppercase
            tracking-[0.2em] md:tracking-[0.35em]
            text-[#D4AF37]
            "
          >
            Comunicação visual em Brasília
          </p>


          <h1
            className="
            text-[clamp(2.5rem,12vw,3rem)]
            font-bold
            leading-tight
            text-white
            md:text-7xl
            "
          >
            Dê destaque
            <br />
            à sua marca.
          </h1>

          <p
            className="
            mt-3 md:mt-6
            rounded-lg
            bg-linear-to-r from-black/45 via-black/25 to-transparent
            px-3 py-2
            backdrop-blur-[2px]
            md:bg-none md:p-0 md:backdrop-blur-none
            text-base
            leading-relaxed
            text-gray-200
            md:text-xl
            "
          >
            Criamos fachadas, letras caixa e soluções em comunicação visual
            que unem design, qualidade e impacto.
          </p>


          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-3 md:mt-10
            self-start
            rounded-md
            border
            border-[#D4AF37]
            bg-linear-to-b from-[#D4AF37]/10 to-transparent
            px-8
            py-3 md:py-4
            font-semibold
            text-[#D4AF37]
            shadow-[inset_0_1px_0_rgba(192,192,192,0.2),0_4px_18px_rgba(212,175,55,0.12)]
            transition-[color,background-color,box-shadow] duration-300
            hover:bg-[#D4AF37]
            hover:text-black
            hover:shadow-[inset_0_1px_0_rgba(192,192,192,0.3),0_6px_24px_rgba(212,175,55,0.2)]
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]
            motion-reduce:transition-none
            "
          >
            Solicitar orçamento
          </a>


          <div
            className="
            mt-3 md:mt-12
            flex
            flex-wrap
            gap-x-4 gap-y-2 md:gap-6
            text-xs md:text-sm
            text-gray-300
            "
          >

            <span>
              ✓ Projeto personalizado
            </span>

            <span>
              ✓ Fabricação e instalação
            </span>

            <span>
              ✓ Atendimento em Brasília
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
