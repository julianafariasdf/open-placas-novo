# Publicação — Open Placas

O domínio oficial é `https://www.openplacas.com.br`. A configuração compartilhada em `lib/seo.ts` alimenta os metadados, links canônicos, Open Graph, `robots.txt` e `sitemap.xml`. As três páginas públicas estão incluídas no sitemap.

## Configuração

- `SITE_URL`: opcional, substitui o domínio oficial. Use apenas a origem HTTPS, sem caminhos, parâmetros ou fragmentos.
- `GOOGLE_SITE_VERIFICATION`: opcional, recebe somente o valor `content` da meta tag de verificação fornecida pelo Google Search Console. Sem valor, nenhuma tag de verificação é emitida.
- WhatsApp: contato oficial `61 99150-1000`, configurado em `lib/contact.ts`. Todos os links usam `https://wa.me/5561991501000` com a mensagem padrão "Olá! Gostaria de solicitar um orçamento para um projeto de comunicação visual."

As variáveis são utilizadas durante o build. Após alterá-las, execute um novo build e publique novamente. `.env.example` documenta os campos e não contém credenciais.

## Validação e execução

```sh
npm ci
npm run lint
npx next typegen
npx tsc --noEmit
npm run build
npm run start
```

No PowerShell com scripts desabilitados, utilize `npm.cmd` e `npx.cmd`. O build precisa de acesso ao Google Fonts para baixar as fontes Geist já utilizadas pelo projeto; elas são servidas localmente pelo Next.js após o build.

## Google Search Console

Após publicar, verifique a propriedade do domínio por DNS ou uma propriedade de prefixo de URL por meta tag. Para a segunda opção, configure `GOOGLE_SITE_VERIFICATION`, gere um novo build e conclua a verificação na conta do proprietário. Consulte as [instruções oficiais de verificação](https://support.google.com/webmasters/answer/9008080?hl=pt-BR).

Envie `https://www.openplacas.com.br/sitemap.xml` na seção Sitemaps e inspecione as três URLs públicas. Consulte a [documentação oficial de sitemaps](https://support.google.com/webmasters/answer/7451001?hl=pt-BR). Nenhuma conta foi vinculada e nenhum sitemap foi enviado automaticamente.

Na hospedagem, configure HTTPS e redirecionamento permanente de HTTP e de `openplacas.com.br` para `https://www.openplacas.com.br`. Verifique que o ambiente de produção não injeta `noindex` nem exige autenticação. Ambientes de preview devem ter proteção contra indexação configurada na hospedagem.

## Identidade

Favicon de 48 px, ícone de 192 px e Apple Touch Icon de 180 px foram exportados de `public/logo/open-logo.png`. A imagem de Open Graph reutiliza `public/images/hero/fachada-letras-caixa.png`. Não há serviços pagos ou integrações externas adicionadas.
