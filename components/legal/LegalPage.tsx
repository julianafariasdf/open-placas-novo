import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from "./LegalPage.module.css";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  introduction: string;
  sections: LegalSection[];
  relatedPage: { href: string; title: string };
};

export default function LegalPage({ title, introduction, sections, relatedPage }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.article} aria-labelledby="legal-title">
          <header className={styles.heading}>
            <p className={styles.eyebrow}>OPEN PLACAS · INSTITUCIONAL</p>
            <h1 id="legal-title">{title}</h1>
            <p className={styles.introduction}>{introduction}</p>
            <p className={styles.updated}>Última atualização: <time dateTime="2026-09-14">14 de setembro de 2026</time></p>
          </header>
          <div className={styles.sections}>
            {sections.map(({ id, title: sectionTitle, content }, index) => (
              <section key={id} aria-labelledby={id}>
                <h2 id={id}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{sectionTitle}</h2>
                <div className={styles.content}>{content}</div>
              </section>
            ))}
          </div>
          <nav className={styles.related} aria-label="Navegação entre páginas legais">
            <Link href="/">Voltar ao início</Link>
            <Link href={relatedPage.href}>{relatedPage.title} <span aria-hidden="true">→</span></Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
