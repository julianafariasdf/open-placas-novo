import Image from "next/image";
import styles from "./AboutShowcase.module.css";

const highlights = [
  {
    title: "Projetos personalizados",
    description: "Soluções pensadas para a identidade de cada empresa.",
    mobileDescription: "Soluções alinhadas à identidade da sua marca.",
  },
  {
    title: "Qualidade e acabamento",
    description: "Materiais selecionados e atenção aos detalhes em cada etapa.",
    mobileDescription: "Atenção aos detalhes em cada etapa.",
  },
  {
    title: "Brasília e Entorno",
    description: "Atendimento para empresas que buscam fortalecer sua presença visual.",
    mobileDescription: "Atendimento para empresas da região.",
  },
];

export default function AboutShowcase() {
  return (
    <section id="empresa" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.layout}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>SOBRE A OPEN PLACAS</p>
          <h2 id="about-heading" className={styles.title}>
            Comunicação visual que transforma espaços em{" "}
            <span>marcas de presença.</span>
          </h2>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/about/about-processo.webp"
            alt="Processo de produção de comunicação visual da Open Placas"
            fill
            sizes="(min-width: 1280px) 592px, (min-width: 1024px) calc(50vw - 48px), calc(100vw - 48px)"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              Desde 2022, a Open Placas desenvolve soluções em comunicação visual
              para empresas de Brasília e do Entorno.
            </p>
            <p>
              Criamos projetos personalizados que unem design, qualidade e
              acabamento para valorizar marcas, fachadas e ambientes corporativos.
            </p>
            <p className={styles.desktopCopy}>
              Mais do que produzir placas, buscamos entender cada negócio para
              entregar soluções que transmitam profissionalismo, confiança e
              reconhecimento.
            </p>
            <p className={styles.mobileCopy}>
              Mais do que produzir placas, entendemos cada negócio para entregar
              soluções que transmitam profissionalismo e reconhecimento.
            </p>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((highlight) => (
              <li key={highlight.title} className={styles.highlight}>
                <h3>{highlight.title}</h3>
                <p className={styles.desktopCopy}>{highlight.description}</p>
                <p className={styles.mobileCopy}>{highlight.mobileDescription}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
