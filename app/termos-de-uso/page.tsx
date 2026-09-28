import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Termos de Uso | Open Placas",
  "Conheça as condições de uso do site institucional da Open Placas, do conteúdo apresentado e do contato para projetos de comunicação visual.",
  "/termos-de-uso",
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      introduction="Aqui você encontra as condições para utilizar o site da Open Placas e as orientações sobre nossos conteúdos, o contato comercial e o envio de materiais para projetos."
      relatedPage={{ href: "/politica-de-privacidade", title: "Política de Privacidade" }}
      sections={[
        {
          id: "finalidade",
          title: "Finalidade do site",
          content: <p>Este é o site institucional da Open Placas, empresa de comunicação visual. Seu objetivo é apresentar serviços, soluções e exemplos de projetos, além de facilitar o contato. Não há cadastro de usuários, formulário, compra ou pagamento pelo site.</p>,
        },
        {
          id: "uso-responsavel",
          title: "Uso responsável",
          content: <p>Utilize o site de forma lícita, respeitando os direitos da Open Placas e de terceiros. Não tente comprometer sua segurança ou funcionamento, distribuir arquivos maliciosos ou utilizar seus conteúdos para fraudes e comunicações enganosas.</p>,
        },
        {
          id: "conteudo",
          title: "Conteúdo e propriedade intelectual",
          content: <><p>Textos, identidade visual, fotografias e demais materiais apresentados pertencem à Open Placas ou a seus respectivos titulares. A disponibilização no site não concede autorização para reprodução comercial, alteração ou uso de marcas sem a permissão correspondente.</p><p>As imagens do portfólio ilustram projetos e possibilidades de execução. Cores, materiais, proporções e resultados podem variar conforme a tela, as condições do local e as especificações de cada trabalho.</p></>,
        },
        {
          id: "orcamentos",
          title: "Contato, orçamentos e contratação",
          content: <><p>O atendimento acontece pelo WhatsApp disponível na <Link href="/#contato">seção de contato</Link>. Uma conversa inicial ou o envio de referências não confirma automaticamente a contratação de um serviço.</p><p>Escopo, medidas, materiais, preços, prazos, instalação e condições de pagamento são definidos na proposta e nos documentos da contratação. A execução depende das aprovações combinadas entre as partes, inclusive da arte final quando aplicável.</p></>,
        },
        {
          id: "materiais-enviados",
          title: "Fotos, arquivos e informações enviados",
          content: <><p>Ao enviar fotos, logotipos, artes ou outros arquivos, forneça informações corretas e materiais que você tenha direito ou autorização para utilizar. Informe eventuais restrições e evite compartilhar dados pessoais desnecessários de terceiros.</p><p>Os materiais recebidos serão utilizados para avaliar e atender à sua solicitação e executar o projeto acordado. O envio não transfere a propriedade dos arquivos nem concede autorização automática para uso em publicidade ou portfólio.</p></>,
        },
        {
          id: "servicos-externos",
          title: "Links e serviços externos",
          content: <p>O site pode direcionar você ao WhatsApp e a outros serviços externos. Esses ambientes possuem suas próprias condições de uso e políticas de privacidade. A Open Placas não controla o funcionamento dessas plataformas.</p>,
        },
        {
          id: "disponibilidade",
          title: "Atualização e disponibilidade",
          content: <p>Buscamos manter as informações claras e atualizadas, mas podem ocorrer correções, alterações de conteúdo ou interrupções para manutenção. Confirme os detalhes do seu projeto durante o atendimento. Estes termos não afastam direitos assegurados pela legislação aplicável, incluindo os direitos do consumidor.</p>,
        },
        {
          id: "privacidade",
          title: "Privacidade e dúvidas",
          content: <p>O tratamento de informações pessoais é explicado na <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Para esclarecer dúvidas sobre estes termos, procure a Open Placas pelo WhatsApp indicado na <Link href="/#contato">seção de contato</Link>.</p>,
        },
        {
          id: "alteracoes",
          title: "Alterações destes termos",
          content: <p>Estes termos podem ser atualizados para acompanhar mudanças no site e nos serviços. A versão disponível é identificada pela data no início da página. Alterações no site não modificam, por si só, condições de serviços já contratados.</p>,
        },
      ]}
    />
  );
}
