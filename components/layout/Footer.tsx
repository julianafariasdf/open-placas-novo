import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";
import { instagramUrl, whatsappUrl } from "@/lib/contact";

const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Soluções", href: "/#servicos" },
  { label: "Fachadas", href: "/#fachadas" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#empresa" },
  { label: "Contato", href: "/#contato" },
];

const services = [
  "Fachadas comerciais", "Letras Caixa", "ACM", "Acrílico", "Neon LED", "Comunicação visual",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/#inicio" className={styles.logoLink} aria-label="Open Placas — início">
              <Image
                src="/logo/open-logo-completa.png"
                alt="Open Placas"
                width={465}
                height={158}
                sizes="(min-width: 1024px) 220px, (min-width: 768px) 180px, 120px"
                className={styles.logo}
              />
            </Link>
            <p>Comunicação visual que transforma espaços em marcas de presença.</p>
          </div>

          <nav aria-labelledby="footer-navigation">
            <h2 id="footer-navigation" className={styles.heading}>Navegação</h2>
            <ul className={styles.list}>
              {navigation.map(({ label, href }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>Serviços</h2>
            <ul className={styles.list}>
              {services.map((service) => <li key={service}><Link className={styles.serviceLink} href={service === "Fachadas comerciais" ? "/#fachadas" : "/#servicos"}>{service}</Link></li>)}
            </ul>
          </div>

          <div className={styles.contact}>
            <h2 className={styles.heading}>Contato</h2>
            <address className={styles.address}>
              <span className={styles.contactItem}>
                <MapPin size={17} aria-hidden="true" /> Brasília - DF e Entorno
              </span>
              <a className={styles.contactItem} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp
              </a>
              <a className={styles.contactItem} href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Camera size={17} aria-hidden="true" /> Instagram
              </a>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Open Placas. Todos os direitos reservados.</p>
          <nav className={styles.legal} aria-label="Links legais">
            <Link href="/politica-de-privacidade" prefetch={false}>Política de Privacidade</Link>
            <Link href="/termos-de-uso" prefetch={false}>Termos de Uso</Link>
          </nav>
          <p className={styles.credit}>
            Desenvolvido por{" "}
            <span>Code &amp; Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
