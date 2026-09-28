import type { Metadata } from "next";

// O domínio oficial pode ser sobrescrito no ambiente antes do build.
const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = new URL(configuredUrl || "https://www.openplacas.com.br");

if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password) {
  throw new Error("SITE_URL deve conter apenas a origem do site, como https://www.exemplo.com.br.");
}

export const isPublicSite = siteUrl.protocol === "https:";
export const siteTitle = "Open Placas | Fachadas e Letras Caixa em Brasília DF";
export const siteDescription = "Fachadas comerciais, letras caixa e comunicação visual em Brasília e Entorno. Projetos em ACM, acrílico, PVC expandido e iluminação LED para valorizar sua marca.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Open Placas",
      title,
      description,
      url: path,
      images: [{
        url: "/images/hero/fachada-letras-caixa.png",
        width: 1672,
        height: 941,
        alt: "Fachada comercial com letras caixa — Open Placas",
      }],
    },
  };
}
