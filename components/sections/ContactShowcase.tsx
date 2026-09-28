import { Camera, Handshake, Lightbulb, MessageCircle } from "lucide-react";
import styles from "./ContactShowcase.module.css";
import { whatsappUrl } from "@/lib/contact";

const steps = [
  {
    icon: Camera,
    title: "Envie fotos do seu espaço",
    description: "Mostre o local, sua fachada ou ambiente interno para uma avaliação inicial.",
  },
  {
    icon: Lightbulb,
    title: "Conte sua ideia",
    description: "Explique o que você deseja transformar e nossa equipe ajuda a encontrar a melhor solução.",
  },
  {
    icon: Handshake,
    title: "Receba orientação especializada",
    description: "Analisamos cada projeto para indicar materiais, formatos e acabamentos adequados.",
  },
];

export default function ContactShowcase() {
  return (
    <section id="contato" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.layout}>
        <div className={styles.introduction}>
          <h2 id="contact-heading" className={styles.title}>
            Transforme sua ideia em um <span>projeto de impacto</span>
          </h2>
          <div className={styles.description}>
            <p>
              Sua empresa merece uma comunicação visual que represente sua marca
              e atraia olhares.
            </p>
            <p>
              Conte o que você precisa, envie fotos do local e converse com nossa
              equipe para encontrar a melhor solução.
            </p>
          </div>
        </div>

        <ul className={styles.steps}>
          {steps.map(({ icon: Icon, title, description }) => (
            <li key={title} className={styles.step}>
              <Icon className={styles.icon} size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          className={styles.button}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} strokeWidth={1.75} aria-hidden="true" />
          <span>Falar com especialista pelo WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
