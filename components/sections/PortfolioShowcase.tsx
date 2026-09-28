import Image from "next/image";
import flyDesign from "@/public/portfolio/projetos/fachada-fly-design-studios.webp";
import reiDoConforto from "@/public/portfolio/projetos/fachada-rei-do-conforto.webp";
import outbeco from "@/public/portfolio/projetos/neon-flex-outbeco.webp";
import inside from "@/public/portfolio/projetos/logo-acrilico-inside.webp";
import losangos from "@/public/portfolio/projetos/painel-acm-losangos.webp";
import dauto from "@/public/portfolio/projetos/fachada-acm-dauto-tintas.webp";
import styles from "./PortfolioShowcase.module.css";

const projects = [
  {
    name: "Fachada Fly Design Studios",
    category: "Letras Caixa / Fachada",
    image: flyDesign,
    alt: "Letras caixa da Fly Design Studios sobre fachada escura",
    wide: true,
  },
  {
    name: "Rei do Conforto",
    category: "ACM + Iluminação LED",
    image: reiDoConforto,
    alt: "Fachada Rei do Conforto em ACM com letras iluminadas e detalhes em LED azul",
    wide: false,
  },
  {
    name: "Outbeco",
    category: "Neon Flex",
    image: outbeco,
    alt: "Letreiro Outbeco em neon vermelho no interior de um restaurante",
    wide: false,
  },
  {
    name: "Inside",
    category: "Acrílico",
    image: inside,
    alt: "Logo Inside em acrílico verde e azul aplicado em parede clara",
    wide: true,
  },
  {
    name: "Losangos",
    category: "Painel ACM",
    image: losangos,
    alt: "Painéis em ACM azul e laranja na frente de loja e no balcão",
    wide: true,
  },
  {
    name: "Dauto Tintas",
    category: "Fachada ACM",
    image: dauto,
    alt: "Fachada Dauto Tintas com revestimento em ACM preto e vermelho e letras em relevo",
    wide: false,
  },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-heading">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PORTFÓLIO</p>
          <h2 id="portfolio-heading" className={styles.title}>Projetos em destaque</h2>
        </div>
        <div className={styles.gallery}>
          {projects.map((project) => (
            <figure key={project.name} className={`${styles.project} ${project.wide ? styles.wide : styles.narrow}`}>
              <Image
                src={project.image}
                alt={project.alt}
                sizes={project.wide
                  ? "(min-width: 1280px) 700px, (min-width: 1024px) 57vw, calc(100vw - 48px)"
                  : "(min-width: 1280px) 500px, (min-width: 1024px) 41vw, calc(100vw - 48px)"}
                className={styles.image}
              />
              <figcaption className={styles.caption}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.category}>{project.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
