import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Política de Privacidade | Open Placas",
  "Saiba como a Open Placas trata informações recebidas no atendimento por WhatsApp e conheça seus direitos de privacidade.",
  "/politica-de-privacidade",
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      introduction="Respeitamos sua privacidade. Esta política explica como lidamos com informações relacionadas à visita ao nosso site e ao atendimento dos seus projetos de comunicação visual."
      relatedPage={{ href: "/termos-de-uso", title: "Termos de Uso" }}
      sections={[
        {
          id: "sobre-o-site",
          title: "Sobre o site e o atendimento",
          content: <p>O site da Open Placas apresenta nossos serviços e projetos. Não oferecemos cadastro de usuários nem formulários de coleta de dados. O contato comercial acontece pelo WhatsApp, por iniciativa do visitante.</p>,
        },
        {
          id: "informacoes-recebidas",
          title: "Informações que podemos receber",
          content: <><p>Ao conversar conosco, você pode enviar voluntariamente seu nome, telefone, informações da empresa, endereço do projeto, medidas, fotos de fachadas, referências visuais e arquivos necessários ao orçamento ou à produção.</p><p>Envie apenas o necessário para seu pedido. Evite incluir documentos pessoais, informações sensíveis ou imagens de outras pessoas sem necessidade e sem a devida autorização.</p></>,
        },
        {
          id: "finalidades",
          title: "Como utilizamos as informações",
          content: <><p>Utilizamos as informações para responder dúvidas, avaliar a viabilidade do projeto, preparar orçamentos, combinar visitas, executar serviços contratados e prestar suporte.</p><p>Conforme a situação, o tratamento se apoia nos procedimentos solicitados antes de uma contratação, na execução do contrato, no cumprimento de obrigações legais ou no consentimento, quando necessário. O envio de fotos para orçamento não autoriza, por si só, sua divulgação em portfólio ou publicidade; esse uso exige autorização específica.</p></>,
        },
        {
          id: "whatsapp-e-compartilhamento",
          title: "WhatsApp e compartilhamento",
          content: <><p>Ao abrir o WhatsApp, você passa a utilizar um serviço externo, sujeito às políticas de privacidade e condições de seu próprio fornecedor.</p><p>Informações necessárias ao projeto podem ser acessadas por profissionais e prestadores envolvidos no atendimento, na produção ou na instalação, limitadas à finalidade do serviço. Também podem ser fornecidas quando houver obrigação legal ou determinação de autoridade competente.</p></>,
        },
        {
          id: "navegacao",
          title: "Dados de navegação",
          content: <p>O site não possui ferramentas próprias de publicidade comportamental ou análise de audiência. A infraestrutura de hospedagem pode gerar registros técnicos, como endereço IP, data de acesso e informações do navegador, para operação e segurança. Serviços externos acessados por links têm práticas próprias de coleta de dados e uso de cookies.</p>,
        },
        {
          id: "conservacao",
          title: "Conservação e cuidado com os dados",
          content: <p>As informações devem ser mantidas pelo período necessário ao atendimento e ao serviço, considerando obrigações legais e o exercício de direitos. Depois desse período, devem ser eliminadas ou anonimizadas quando aplicável. O acesso deve se limitar a quem precisa das informações para realizar suas atividades, com cuidados para evitar uso e divulgação indevidos.</p>,
        },
        {
          id: "seus-direitos",
          title: "Seus direitos e nosso contato",
          content: <><p>Nos termos da <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei Geral de Proteção de Dados Pessoais (LGPD)</a>, você pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento e, nas hipóteses legais, anonimização, bloqueio ou eliminação de dados. Também pode revogar consentimento e solicitar portabilidade quando aplicável.</p><p>Para exercer seus direitos ou esclarecer dúvidas, fale com a Open Placas pelo WhatsApp indicado na <Link href="/#contato">seção de contato</Link>. Podemos solicitar informações estritamente necessárias para confirmar sua identidade e proteger seus dados.</p></>,
        },
        {
          id: "atualizacoes",
          title: "Atualizações desta política",
          content: <p>Esta política pode ser atualizada para refletir mudanças no site, no atendimento ou nas exigências legais. A data no início desta página identifica a versão disponível. Consulte também nossos <Link href="/termos-de-uso">Termos de Uso</Link>.</p>,
        },
      ]}
    />
  );
}
