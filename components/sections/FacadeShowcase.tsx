import Image from "next/image";
import styles from "./FacadeShowcase.module.css";
import { whatsappUrl } from "@/lib/contact";

const highlights = [
  { title: "Design personalizado", description: "Projetos exclusivos para sua marca." },
  { title: "Materiais premium", description: "ACM, letras caixa, iluminação e muito mais." },
  { title: "Mais visibilidade", description: "Sua empresa em evidência, dia e noite." },
];

export default function FacadeShowcase() {
  return (
    <section id="fachadas" className={styles.section} aria-labelledby="facade-heading">
      <div className={styles.layout}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>FACHADAS COMERCIAIS</p>
          <h2 id="facade-heading" className={styles.title}>
            Fachadas que <span>fortalecem marcas</span>
          </h2>
        </div>

        <div className={styles.visual}>
          <Image
            src="/portfolio/fachadas/fachada-principal.webp"
            alt="Fachada comercial com comunicação visual em destaque"
            fill
            sizes="(min-width: 1280px) 653px, (min-width: 1024px) 53vw, calc(100vw - 48px)"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.description}>
            Transformamos espaços comerciais em pontos de referência, unindo design,
            materiais premium e iluminação estratégica.
          </p>
          <ul className={styles.highlights}>
            {highlights.map((highlight) => (
              <li key={highlight.title} className={styles.highlight}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </li>
            ))}
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Solicitar projeto de fachada
          </a>
        </div>
      </div>
    </section>
  );
}
