import type { Localized } from "@/i18n/dictionaries";

/** Only public profiles. Contact goes through LinkedIn: no phone, no address, no email. */
export const profile = {
  name: "Renan Bastos",
  linkedin: "https://www.linkedin.com/in/renanbastos93/",
  links: [
    { label: "GitHub", href: "https://github.com/renanbastos93" },
    { label: "dev.to", href: "https://dev.to/renanbastos93" },
    { label: "Medium", href: "https://medium.com/@renanbastos93" },
  ],
};

/** Snapshot figures. Update when refreshing the content. */
export const stats = {
  years: "10+",
  npmMonthlyDownloads: { en: "1.4M", pt: "1,4 mi", es: "1,4 M" } as Localized,
};

export type Role = {
  title: Localized;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omitted while current
};

export type Job = {
  company: string;
  location: string;
  roles: Role[];
  summary: Localized;
  stack: string[];
};

const same = (text: string): Localized => ({ en: text, pt: text, es: text });

/** Technology positions from LinkedIn, newest first. */
export const experience: Job[] = [
  {
    company: "Lastro (Lais.AI)",
    location: "Florianópolis, SC",
    roles: [{ title: same("Senior Software Engineer"), start: "2024-12" }],
    summary: {
      en: "AI for the real estate market: lead qualification and engagement, WhatsApp automation, CRM integrations and AI agents that help agencies convert more leads.",
      pt: "IA para o mercado imobiliário: qualificação e engajamento de leads, automação de WhatsApp, integrações com CRM e agentes de IA que ajudam imobiliárias a converter mais.",
      es: "IA para el mercado inmobiliario: calificación y seguimiento de leads, automatización de WhatsApp, integraciones con CRM y agentes de IA que ayudan a las inmobiliarias a convertir más.",
    },
    stack: ["Go", "AI agents", "WhatsApp", "CRM"],
  },
  {
    company: "Rappi",
    location: "Florianópolis, SC",
    roles: [{ title: same("Senior Software Engineer"), start: "2023-12", end: "2024-07" }],
    summary: {
      en: "Built the Box Delivery and Rappi integrations as part of the integrations team, and drove internal projects on my own.",
      pt: "Construí as integrações entre a Box Delivery e a Rappi junto ao time de integração, com autonomia em projetos internos.",
      es: "Construí las integraciones entre Box Delivery y Rappi junto al equipo de integración, con autonomía en proyectos internos.",
    },
    stack: ["Go", "Kafka", "MongoDB"],
  },
  {
    company: "TC",
    location: "Brasil",
    roles: [
      { title: same("Staff Backend Engineer"), start: "2021-07", end: "2023-10" },
      { title: same("Senior Software Engineer"), start: "2020-09", end: "2021-07" },
    ],
    summary: {
      en: "The engineer teams turned to for technical guidance: improved a monolith-plus-microservices architecture, helped shape technical decisions and shared knowledge across teams.",
      pt: "Referência técnica para os times: evoluí uma arquitetura de monólito com microsserviços, participei das decisões técnicas e compartilhei conhecimento entre os times.",
      es: "Referente técnico para los equipos: mejoré una arquitectura de monolito con microservicios, participé en las decisiones técnicas y compartí conocimiento entre los equipos.",
    },
    stack: ["Go", "gRPC", "WebSocket", "Helm", "Jenkins"],
  },
  {
    company: "Renan Bastos Desenvolvimento",
    location: "Florianópolis, SC",
    roles: [{ title: same("Co-Founder"), start: "2020-09" }],
    summary: {
      en: "Software consulting: building software for clients and managing their cloud servers on AWS, GCP and DigitalOcean.",
      pt: "Consultoria de software: projetos complexos para empresas clientes e servidores em nuvem gerenciados na AWS, GCP e DigitalOcean.",
      es: "Consultoría de software: proyectos complejos para empresas clientes y servidores en la nube gestionados en AWS, GCP y DigitalOcean.",
    },
    stack: ["AWS", "GCP", "DigitalOcean"],
  },
  {
    company: "Azion Technologies",
    location: "Porto Alegre, RS",
    roles: [{ title: same("Software Engineer"), start: "2018-09", end: "2020-09" }],
    summary: {
      en: "Edge computing: low-level networking (HTTP, DNS, SSH) and web servers for Edge Orchestrator, Intelligent DNS and Edge Caching.",
      pt: "Edge computing: rede em baixo nível (HTTP, DNS, SSH) e servidores web para o Edge Orchestrator, o Intelligent DNS e o Edge Caching.",
      es: "Edge computing: redes a bajo nivel (HTTP, DNS, SSH) y servidores web para Edge Orchestrator, Intelligent DNS y Edge Caching.",
    },
    stack: ["Go", "Python", "NGINX", "Django"],
  },
  {
    company: "Unirede",
    location: "Porto Alegre, RS",
    roles: [{ title: same("Software Engineer"), start: "2017-06", end: "2018-09" }],
    summary: {
      en: "Backend and frontend development, plus modernizing legacy systems with open source tools.",
      pt: "Soluções de backend e frontend para a empresa, além da modernização de sistemas legados com ferramentas open source.",
      es: "Soluciones de backend y frontend para la empresa, además de la modernización de sistemas legados con herramientas open source.",
    },
    stack: [],
  },
  {
    company: "S4Fans – Shopping For Fans",
    location: "Porto Alegre, RS",
    roles: [
      {
        title: { en: "Web & Mobile Developer", pt: "Desenvolvedor Web e Mobile", es: "Desarrollador web y móvil" },
        start: "2017-01",
        end: "2017-06",
      },
    ],
    summary: {
      en: "Features for comedy apps, built with JavaScript libraries and frameworks.",
      pt: "Funcionalidades para apps de humor com bibliotecas e frameworks JavaScript.",
      es: "Funcionalidades para apps de humor con bibliotecas y frameworks JavaScript.",
    },
    stack: ["JavaScript"],
  },
  {
    company: "HemoHeroes",
    location: "Brasil",
    roles: [{ title: same("Co-Founder"), start: "2016-04", end: "2020-09" }],
    summary: {
      en: "One of three founders of an open source community project that encourages blood donation.",
      pt: "Um dos três fundadores de um projeto social open source que incentiva a doação de sangue.",
      es: "Uno de los tres fundadores de un proyecto social open source que fomenta la donación de sangre.",
    },
    stack: ["Node.js", "PWA"],
  },
  {
    company: "Microsoft Innovation Center – PUCRS",
    location: "Porto Alegre, RS",
    roles: [
      {
        title: { en: "Full Stack Intern", pt: "Estagiário Full Stack", es: "Pasante Full Stack" },
        start: "2016-04",
        end: "2017-01",
      },
    ],
    summary: {
      en: "Full stack JavaScript development.",
      pt: "Desenvolvimento full stack em JavaScript.",
      es: "Desarrollo full stack en JavaScript.",
    },
    stack: ["Node.js", "AngularJS", "Ionic", "MongoDB"],
  },
  {
    company: "Qualitá Informática",
    location: "Porto Alegre, RS",
    roles: [
      {
        title: {
          en: "Software Development Intern",
          pt: "Estagiário de Desenvolvimento",
          es: "Pasante de Desarrollo",
        },
        start: "2014-05",
        end: "2015-06",
      },
    ],
    summary: {
      en: "Web applications for financial services companies, mostly in credit cards.",
      pt: "Aplicações web para o mercado financeiro, principalmente cartões de crédito.",
      es: "Aplicaciones web para el mercado financiero, principalmente tarjetas de crédito.",
    },
    stack: ["GeneXus", "C#", "SQL"],
  },
];

export const education = [
  {
    school: "SENAC RS",
    course: {
      en: "Systems Analysis and Development",
      pt: "Análise e Desenvolvimento de Sistemas",
      es: "Análisis y Desarrollo de Sistemas",
    } as Localized,
    years: "2014 – 2018",
  },
];

export type ProjectKind = "product" | "studio" | "npm" | "go" | "social";

export type Project = {
  name: string;
  kind: ProjectKind;
  status?: "live" | "archived";
  description: Localized;
  highlight?: Localized;
  href: string;
  source?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Conteúdo de Vitrine",
    kind: "product",
    status: "live",
    description: {
      en: "AI that turns product photos into reels, feed posts and carousels for independent brands, caption and hashtags included.",
      pt: "IA que transforma fotos de produto em reels, posts de feed e carrosséis para marcas autorais, com legenda e hashtags prontas.",
      es: "IA que convierte fotos de producto en reels, publicaciones y carruseles para marcas independientes, con descripción y hashtags incluidos.",
    },
    href: "https://conteudevitrine.com.br",
    stack: ["Go", "React", "PostgreSQL", "AI agents"],
  },
  {
    name: "Arandu",
    kind: "studio",
    status: "live",
    description: {
      en: "Studio building AI products for real businesses: Conteúdo de Vitrine is live, with Ads, Data and Leads on the way.",
      pt: "Estúdio que cria produtos de IA para negócios reais: o Conteúdo de Vitrine já está no ar, com Ads, Data e Leads a caminho.",
      es: "Estudio que crea productos de IA para negocios reales: Conteúdo de Vitrine ya está en línea, con Ads, Data y Leads en camino.",
    },
    href: "https://arandu.works",
    stack: ["Go", "Next.js", "MCP"],
  },
  {
    name: "image-to-base64",
    kind: "npm",
    status: "archived",
    description: {
      en: "Converts images to Base64 from a path or URL, in Node.js and in the browser.",
      pt: "Converte imagens para Base64 a partir de um caminho ou URL, no Node.js e no navegador.",
      es: "Convierte imágenes a Base64 desde una ruta o URL, en Node.js y en el navegador.",
    },
    highlight: {
      en: "~1.4M downloads a month",
      pt: "~1,4 mi de downloads por mês",
      es: "~1,4 M de descargas al mes",
    },
    href: "https://www.npmjs.com/package/image-to-base64",
    source: "https://github.com/renanbastos93/image-to-base64",
    stack: ["JavaScript", "Node.js"],
  },
  {
    name: "boneless",
    kind: "go",
    description: {
      en: "CLI that scaffolds Go apps with Service Weaver, sqlc, gomigrate and Fiber.",
      pt: "CLI que cria apps Go com Service Weaver, sqlc, gomigrate e Fiber.",
      es: "CLI que genera la estructura base de apps en Go con Service Weaver, sqlc, gomigrate y Fiber.",
    },
    href: "https://github.com/renanbastos93/boneless",
    stack: ["Go", "Service Weaver", "Fiber"],
  },
  {
    name: "fastpath",
    kind: "go",
    description: {
      en: "Library that matches REST-style URL path patterns.",
      pt: "Biblioteca que compara caminhos de URL com padrões no estilo REST.",
      es: "Biblioteca que compara rutas de URL con patrones estilo REST.",
    },
    href: "https://github.com/renanbastos93/fastpath",
    stack: ["Go"],
  },
  {
    name: "alertcovid19",
    kind: "go",
    status: "archived",
    description: {
      en: "Cross-platform desktop alerts with COVID-19 numbers for your region, built in 2020.",
      pt: "App multiplataforma de alertas no desktop com os números da COVID-19 na sua região, criado em 2020.",
      es: "Alertas de escritorio multiplataforma con las cifras de COVID-19 de tu región, creadas en 2020.",
    },
    href: "https://github.com/renanbastos93/alertcovid19",
    stack: ["Go"],
  },
  {
    name: "HemoHeroes",
    kind: "social",
    description: {
      en: "Open source PWA and API that encourage blood donation. Also my final college project.",
      pt: "PWA e API open source que incentivam a doação de sangue. Também foi meu TCC.",
      es: "PWA y API open source que fomentan la donación de sangre. También fue mi proyecto de fin de carrera.",
    },
    href: "https://github.com/HemoHeroes",
    stack: ["Node.js", "PWA"],
  },
];

export type PullRequest = { title: string; href: string; date: string };
export type Contribution = { repo: string; href: string; authored?: boolean; prs: PullRequest[] };

/** Merged pull requests in public projects, newest first within each repo. */
export const contributions: Contribution[] = [
  {
    repo: "gofiber/fiber",
    href: "https://github.com/gofiber/fiber",
    prs: [
      { title: "Improve the *fiber.Client docs", href: "https://github.com/gofiber/fiber/pull/2553", date: "2023-07-25" },
      { title: "Filesystem middleware works with route params", href: "https://github.com/gofiber/fiber/pull/977", date: "2020-10-29" },
      { title: "Improve BodyParser logic", href: "https://github.com/gofiber/fiber/pull/602", date: "2020-07-15" },
      { title: "Use constants for status codes", href: "https://github.com/gofiber/fiber/pull/603", date: "2020-07-14" },
      { title: "Add QueryParser to the context, split from BodyParser", href: "https://github.com/gofiber/fiber/pull/585", date: "2020-07-11" },
      { title: "Add CODEOWNERS", href: "https://github.com/gofiber/fiber/pull/424", date: "2020-05-30" },
      { title: "Refactor the GoSec workflow", href: "https://github.com/gofiber/fiber/pull/286", date: "2020-04-23" },
      { title: "Security pipeline with GoSec", href: "https://github.com/gofiber/fiber/pull/162", date: "2020-02-21" },
    ],
  },
  {
    repo: "gofiber/redirect",
    href: "https://github.com/gofiber/redirect",
    authored: true,
    prs: [
      { title: "Drop the trailing slash on longer routes", href: "https://github.com/gofiber/redirect/pull/21", date: "2020-11-06" },
      { title: "Fix a typo in the usage example", href: "https://github.com/gofiber/redirect/pull/3", date: "2020-04-11" },
      { title: "Create the redirect middleware", href: "https://github.com/gofiber/redirect/pull/2", date: "2020-04-06" },
    ],
  },
  {
    repo: "bradfitz/gomemcache",
    href: "https://github.com/bradfitz/gomemcache",
    prs: [{ title: "Add a Close method for connections", href: "https://github.com/bradfitz/gomemcache/pull/134", date: "2022-08-19" }],
  },
  {
    repo: "valyala/fasthttp",
    href: "https://github.com/valyala/fasthttp",
    prs: [{ title: "Security workflow with GoSec", href: "https://github.com/valyala/fasthttp/pull/747", date: "2020-02-28" }],
  },
];

export type ArticleLang = "pt" | "en";
export type Article = { title: string; href: string; date: string; lang: ArticleLang; source: "dev.to" | "Medium" };

export const articles: Article[] = [
  { title: "The Rise of Solution Architects in the Age of Artificial Intelligence", href: "https://dev.to/renanbastos93/the-rise-of-solution-architects-in-the-age-of-artificial-intelligence-824", date: "2026-04-24", lang: "en", source: "dev.to" },
  { title: "Seu app Go no K8s está usando até 20x mais CPU do que deveria (e como corrigir do jeito certo)", href: "https://dev.to/renanbastos93/seu-app-go-no-k8s-esta-usando-ate-20x-mais-cpu-do-que-deveria-e-como-corrigir-do-jeito-certo-3g15", date: "2026-02-27", lang: "pt", source: "dev.to" },
  { title: "Pipeline em Go - Compondo operações de forma elegante e simples", href: "https://dev.to/renanbastos93/pipeline-em-go-compondo-operacoes-de-forma-elegante-e-simples-16p3", date: "2025-10-10", lang: "pt", source: "dev.to" },
  { title: "Por que você deve repensar o uso de Regex em validações de strings em Go", href: "https://dev.to/renanbastos93/por-que-voce-deve-repensar-o-uso-de-regex-em-validacoes-de-strings-no-go-1cdi", date: "2025-02-23", lang: "pt", source: "dev.to" },
  { title: "Criando meu pacote de erro usando Go", href: "https://dev.to/renanbastos93/criando-meu-pacote-de-erro-usando-go-76", date: "2024-01-02", lang: "pt", source: "dev.to" },
  { title: "Como Fazer Restore do MongoDB usando mongorestore com Arquivos wiredTriger", href: "https://dev.to/renanbastos93/como-fazer-restore-do-mongodb-usando-mongorestore-com-arquivos-wiredtriger-47af", date: "2023-12-03", lang: "pt", source: "dev.to" },
  { title: "Qual a diferença de usar um receiver com ou sem ponteiro em Go?", href: "https://dev.to/renanbastos93/qual-a-diferenca-de-usar-um-receiver-com-ou-sem-ponteiro-em-go-2do8", date: "2023-09-25", lang: "pt", source: "dev.to" },
  { title: "Criando um JSON Unmarshal personalizado em Go", href: "https://dev.to/renanbastos93/como-faco-para-substituir-o-unmarshaljson-corretamente-4o2m", date: "2023-09-13", lang: "pt", source: "dev.to" },
  { title: "Boneless: a CLI to create your apps with Go", href: "https://dev.to/renanbastos93/boneless-a-cli-to-create-your-apps-with-go-31kh", date: "2023-06-28", lang: "en", source: "dev.to" },
  { title: "Como verificar se o contexto tem um prazo para finalizar em Golang", href: "https://medium.com/@renanbastos93/como-verificar-se-o-contexto-tem-um-prazo-para-finalizar-em-golang-45435f825c40", date: "2023-02-02", lang: "pt", source: "Medium" },
  { title: "How to verify if the context has a deadline", href: "https://dev.to/renanbastos93/how-to-verify-if-my-context-has-a-deadline-4268", date: "2023-01-31", lang: "en", source: "dev.to" },
  { title: "Do we must implements unit test just to have coverage?", href: "https://dev.to/renanbastos93/do-we-must-implements-unit-test-just-to-have-coverage-1gm2", date: "2022-10-28", lang: "en", source: "dev.to" },
  { title: "Assinatura de commits com múltiplos e-mails", href: "https://medium.com/tc-tecnologia-e-produtos/assinatura-de-commits-com-m%C3%BAltiplos-e-mails-350d21dab560", date: "2022-08-18", lang: "pt", source: "Medium" },
  { title: "Using redirect middleware with GoFiber", href: "https://dev.to/renanbastos93/using-redirect-middleware-with-gofiber-1n37", date: "2021-12-16", lang: "en", source: "dev.to" },
  { title: "Usando promisify NodeJS 8", href: "https://medium.com/@renanbastos93/usando-promisify-nodejs-8-94170ff19460", date: "2017-06-24", lang: "pt", source: "Medium" },
  { title: "Criando um sistema de paginação simples com JavaScript", href: "https://medium.com/@renanbastos93/criando-um-sistema-de-pagina%C3%A7%C3%A3o-simples-com-javascript-d2dd853741ea", date: "2017-06-07", lang: "pt", source: "Medium" },
];

export const mergedPullRequests = contributions.reduce((n, c) => n + c.prs.length, 0);
