export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Value for the <html lang> attribute and Intl formatting. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
};

/** Text in more than one language, one entry per locale. */
export type Localized = Record<Locale, string>;

const en = {
  meta: {
    title: "Renan Bastos · Software Engineer",
    description:
      "Renan Bastos builds backend systems, APIs and AI agents with Go, and offers consulting and forward deployed engineering (FDE). 12+ years of experience, open source contributions and articles.",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Sections",
    about: "About",
    services: "Services",
    experience: "Experience",
    projects: "Projects",
    openSource: "Open source",
    writing: "Writing",
    contact: "Contact",
  },
  language: {
    label: "Language",
    names: { en: "English", pt: "Português", es: "Español" } as Localized,
  },
  hero: {
    eyebrow: "Software engineer & consultant · Florianópolis, Brazil",
    title: "I build backend systems that stay simple as they grow.",
    lead: "12+ years shipping software, from Go services, APIs and integrations to AI agents. Through my consultancy I also work inside companies as a forward deployed engineer, taking AI and integrations into production.",
    ctaPrimary: "Message me on LinkedIn",
    ctaSecondary: "See my work",
  },
  stats: {
    label: "At a glance",
    years: "years building software",
    downloads: "monthly npm downloads of image-to-base64",
    articles: "articles published",
    prs: "pull requests merged in open source",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a backend engineer. Most of my work is in Go: system architecture, cloud infrastructure, databases, observability and automation. I've built CRM integrations, real estate lead management, WhatsApp automation, AI agents, data pipelines and the internal tools that keep operations running.",
      "I like working close to product and business teams, turning complex problems into simple, reliable software. Lately most of my time goes into AI agents and the products I'm building on my own.",
    ],
    outside: "Away from the keyboard: surfing, biking, hiking and video games.",
  },
  services: {
    title: "Services",
    intro:
      "Consulting through Renan Bastos Desenvolvimento, my company since 2020. I work hands-on, writing the code with your team, not just advising.",
    featured: {
      badge: "Forward Deployed Engineering · FDE",
      title: "An engineer inside your operation",
      body: "I join your team, learn how the business actually runs and ship AI and integrations in your real environment, with your data and your systems, until they are in production and in use.",
      points: [
        "Discovery with the people who run the process every day",
        "AI agents and automations built on your data and tools",
        "Integrations with your CRM, ERP, WhatsApp and internal APIs",
        "Production setup, monitoring and handover to your team",
      ],
    },
    offers: [
      {
        title: "AI agents and automation",
        body: "Agents that qualify leads, answer customers and take over repetitive work, connected to WhatsApp, your CRM and internal tools.",
        stack: ["LLMs", "AI agents", "RAG", "WhatsApp"],
      },
      {
        title: "Backend and integrations",
        body: "Go services, APIs and integrations between systems that need to talk reliably, from webhooks to data pipelines.",
        stack: ["Go", "REST", "gRPC", "Kafka"],
      },
      {
        title: "Architecture and cloud",
        body: "Architecture reviews, performance and cost tuning, and cloud infrastructure on AWS, GCP and Kubernetes.",
        stack: ["AWS", "GCP", "Kubernetes", "Postgres"],
      },
    ],
    process: {
      title: "How it works",
      steps: [
        { title: "Diagnose", body: "A short conversation to understand the problem, the systems involved and what success looks like." },
        { title: "Build together", body: "I work alongside your team in short cycles, with working software in front of you early and often." },
        { title: "Hand over", body: "Documentation, monitoring and knowledge transfer, so your team runs it without depending on me." },
      ],
    },
    cta: "Talk about a project",
    note: "Remote, on-site in Florianópolis or hybrid. In English, Portuguese or Spanish.",
  },
  experience: {
    title: "Experience",
    intro: "From GeneXus and C# in 2014 to Go and AI agents today.",
    present: "Present",
    educationTitle: "Education",
  },
  projects: {
    title: "Projects",
    intro: "Products I've founded and tools I've built.",
    kinds: {
      product: "Product",
      studio: "Studio",
      npm: "npm package",
      go: "Go module",
      social: "Community project",
    },
    status: { live: "Live", archived: "Archived" },
    visit: "Visit",
    source: "Source code",
  },
  openSource: {
    title: "Open source",
    intro:
      "Contributions merged into Fiber, fasthttp and gomemcache, projects the Go community runs in production.",
    merged: (n: number) => `${n} merged ${n === 1 ? "pull request" : "pull requests"}`,
    author: "Author of the redirect middleware",
  },
  writing: {
    title: "Writing",
    intro:
      "Notes on Go, performance and engineering, published on dev.to and Medium. Articles stay in the language they were written in.",
    filterLabel: "Filter articles by language",
    all: "All",
    pt: "Portuguese",
    en: "English",
    count: (n: number) => `Showing ${n} ${n === 1 ? "article" : "articles"}`,
    langBadge: { pt: "PT", en: "EN" },
  },
  contact: {
    title: "Let's talk",
    body: "Have a project, a consulting engagement, a role or a question about Go? The best way to reach me is LinkedIn.",
    cta: "Message me on LinkedIn",
    elsewhere: "Profiles",
  },
  footer: {
    built: "Built with Next.js and Tailwind CSS.",
  },
  a11y: {
    newTab: "(opens in a new tab)",
  },
  notFound: {
    title: "Page not found",
    body: "This page moved or never existed.",
    back: "Back to home",
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  meta: {
    title: "Renan Bastos · Engenheiro de software",
    description:
      "Renan Bastos constrói sistemas backend, APIs e agentes de IA com Go, e oferece consultoria e forward deployed engineering (FDE). Mais de 12 anos de experiência, contribuições open source e artigos.",
  },
  skipLink: "Pular para o conteúdo",
  nav: {
    label: "Seções",
    about: "Sobre",
    services: "Serviços",
    experience: "Experiência",
    projects: "Projetos",
    openSource: "Open source",
    writing: "Artigos",
    contact: "Contato",
  },
  language: {
    label: "Idioma",
    names: { en: "English", pt: "Português", es: "Español" },
  },
  hero: {
    eyebrow: "Engenheiro de software e consultor · Florianópolis, Brasil",
    title: "Construo sistemas backend que continuam simples enquanto crescem.",
    lead: "Mais de 12 anos entregando software, de serviços em Go, APIs e integrações a agentes de IA. Pela minha consultoria também atuo dentro das empresas como forward deployed engineer, levando IA e integrações para produção.",
    ctaPrimary: "Falar comigo no LinkedIn",
    ctaSecondary: "Ver meu trabalho",
  },
  stats: {
    label: "Em números",
    years: "anos construindo software",
    downloads: "downloads mensais do image-to-base64 no npm",
    articles: "artigos publicados",
    prs: "pull requests aceitos em open source",
  },
  about: {
    title: "Sobre",
    paragraphs: [
      "Sou engenheiro backend. A maior parte do meu trabalho é em Go: arquitetura de sistemas, infraestrutura em nuvem, bancos de dados, observabilidade e automação. Já construí integrações com CRM, gestão de leads imobiliários, automação de WhatsApp, agentes de IA, pipelines de dados e as ferramentas internas que mantêm a operação de pé.",
      "Gosto de trabalhar perto de produto e de negócio, transformando problemas complexos em software simples e confiável. Hoje passo a maior parte do tempo com agentes de IA e com os produtos que estou construindo por conta própria.",
    ],
    outside: "Longe do teclado: surfe, bike, trilha e videogame.",
  },
  services: {
    title: "Serviços",
    intro:
      "Consultoria pela Renan Bastos Desenvolvimento, minha empresa desde 2020. Trabalho com a mão no código, junto com o seu time, não só dando conselhos.",
    featured: {
      badge: "Forward Deployed Engineering · FDE",
      title: "Um engenheiro dentro da sua operação",
      body: "Entro no seu time, entendo como o negócio funciona de verdade e entrego IA e integrações no seu ambiente real, com os seus dados e os seus sistemas, até estarem em produção e em uso.",
      points: [
        "Imersão com as pessoas que tocam o processo no dia a dia",
        "Agentes de IA e automações em cima dos seus dados e ferramentas",
        "Integrações com seu CRM, ERP, WhatsApp e APIs internas",
        "Colocação em produção, monitoramento e passagem para o seu time",
      ],
    },
    offers: [
      {
        title: "Agentes de IA e automação",
        body: "Agentes que qualificam leads, atendem clientes e assumem o trabalho repetitivo, conectados ao WhatsApp, ao seu CRM e às ferramentas internas.",
        stack: ["LLMs", "AI agents", "RAG", "WhatsApp"],
      },
      {
        title: "Backend e integrações",
        body: "Serviços em Go, APIs e integrações entre sistemas que precisam conversar de forma confiável, de webhooks a pipelines de dados.",
        stack: ["Go", "REST", "gRPC", "Kafka"],
      },
      {
        title: "Arquitetura e nuvem",
        body: "Revisão de arquitetura, ajuste de performance e de custo, e infraestrutura em nuvem na AWS, no GCP e em Kubernetes.",
        stack: ["AWS", "GCP", "Kubernetes", "Postgres"],
      },
    ],
    process: {
      title: "Como funciona",
      steps: [
        { title: "Diagnóstico", body: "Uma conversa curta para entender o problema, os sistemas envolvidos e o que é sucesso para você." },
        { title: "Construção junto", body: "Trabalho lado a lado com o seu time em ciclos curtos, com software funcionando na sua frente desde cedo." },
        { title: "Passagem", body: "Documentação, monitoramento e transferência de conhecimento, para o seu time seguir sem depender de mim." },
      ],
    },
    cta: "Conversar sobre um projeto",
    note: "Remoto, presencial em Florianópolis ou híbrido. Em português, inglês ou espanhol.",
  },
  experience: {
    title: "Experiência",
    intro: "De GeneXus e C# em 2014 a Go e agentes de IA hoje.",
    present: "hoje",
    educationTitle: "Formação",
  },
  projects: {
    title: "Projetos",
    intro: "Produtos que fundei e ferramentas que criei.",
    kinds: {
      product: "Produto",
      studio: "Estúdio",
      npm: "Pacote npm",
      go: "Módulo Go",
      social: "Projeto social",
    },
    status: { live: "No ar", archived: "Arquivado" },
    visit: "Acessar",
    source: "Código-fonte",
  },
  openSource: {
    title: "Open source",
    intro:
      "Contribuições aceitas no Fiber, no fasthttp e no gomemcache, projetos que a comunidade Go roda em produção.",
    merged: (n: number) => `${n} ${n === 1 ? "pull request aceito" : "pull requests aceitos"}`,
    author: "Autor do middleware redirect",
  },
  writing: {
    title: "Artigos",
    intro:
      "Notas sobre Go, performance e engenharia, publicadas no dev.to e no Medium. Cada artigo fica no idioma em que foi escrito.",
    filterLabel: "Filtrar artigos por idioma",
    all: "Todos",
    pt: "Português",
    en: "Inglês",
    count: (n: number) => `${n} ${n === 1 ? "artigo" : "artigos"}`,
    langBadge: { pt: "PT", en: "EN" },
  },
  contact: {
    title: "Vamos conversar",
    body: "Tem um projeto, uma consultoria, uma vaga ou uma dúvida sobre Go? O melhor jeito de falar comigo é pelo LinkedIn.",
    cta: "Falar comigo no LinkedIn",
    elsewhere: "Perfis",
  },
  footer: {
    built: "Feito com Next.js e Tailwind CSS.",
  },
  a11y: {
    newTab: "(abre em nova aba)",
  },
  notFound: {
    title: "Página não encontrada",
    body: "Esta página mudou de endereço ou nunca existiu.",
    back: "Voltar para o início",
  },
};

const es: Dictionary = {
  meta: {
    title: "Renan Bastos · Ingeniero de software",
    description:
      "Renan Bastos construye sistemas backend, APIs y agentes de IA con Go, y ofrece consultoría y forward deployed engineering (FDE). Más de 12 años de experiencia, contribuciones open source y artículos.",
  },
  skipLink: "Saltar al contenido",
  nav: {
    label: "Secciones",
    about: "Sobre mí",
    services: "Servicios",
    experience: "Experiencia",
    projects: "Proyectos",
    openSource: "Open source",
    writing: "Artículos",
    contact: "Contacto",
  },
  language: {
    label: "Idioma",
    names: { en: "English", pt: "Português", es: "Español" },
  },
  hero: {
    eyebrow: "Ingeniero de software y consultor · Florianópolis, Brasil",
    title: "Construyo sistemas backend que siguen siendo simples mientras crecen.",
    lead: "Más de 12 años creando software, de servicios en Go, APIs e integraciones a agentes de IA. Con mi consultora también trabajo dentro de las empresas como forward deployed engineer, llevando IA e integraciones a producción.",
    ctaPrimary: "Escríbeme en LinkedIn",
    ctaSecondary: "Ver mi trabajo",
  },
  stats: {
    label: "En cifras",
    years: "años construyendo software",
    downloads: "descargas mensuales de image-to-base64 en npm",
    articles: "artículos publicados",
    prs: "pull requests aceptados en open source",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy ingeniero backend. La mayor parte de mi trabajo es en Go: arquitectura de sistemas, infraestructura en la nube, bases de datos, observabilidad y automatización. He construido integraciones con CRM, gestión de leads inmobiliarios, automatización de WhatsApp, agentes de IA, pipelines de datos y las herramientas internas que mantienen la operación en marcha.",
      "Me gusta trabajar cerca del producto y del negocio, convirtiendo problemas complejos en software simple y confiable. Hoy paso la mayor parte del tiempo con agentes de IA y con los productos que construyo por mi cuenta.",
    ],
    outside: "Lejos del teclado: surf, bici, senderismo y videojuegos.",
  },
  services: {
    title: "Servicios",
    intro:
      "Consultoría a través de Renan Bastos Desenvolvimento, mi empresa desde 2020. Trabajo con las manos en el código, junto a tu equipo, no solo dando consejos.",
    featured: {
      badge: "Forward Deployed Engineering · FDE",
      title: "Un ingeniero dentro de tu operación",
      body: "Me sumo a tu equipo, entiendo cómo funciona realmente el negocio y entrego IA e integraciones en tu entorno real, con tus datos y tus sistemas, hasta que estén en producción y en uso.",
      points: [
        "Inmersión con las personas que llevan el proceso día a día",
        "Agentes de IA y automatizaciones sobre tus datos y herramientas",
        "Integraciones con tu CRM, ERP, WhatsApp y APIs internas",
        "Puesta en producción, monitoreo y traspaso a tu equipo",
      ],
    },
    offers: [
      {
        title: "Agentes de IA y automatización",
        body: "Agentes que califican leads, atienden clientes y asumen el trabajo repetitivo, conectados a WhatsApp, a tu CRM y a las herramientas internas.",
        stack: ["LLMs", "AI agents", "RAG", "WhatsApp"],
      },
      {
        title: "Backend e integraciones",
        body: "Servicios en Go, APIs e integraciones entre sistemas que necesitan comunicarse de forma confiable, de webhooks a pipelines de datos.",
        stack: ["Go", "REST", "gRPC", "Kafka"],
      },
      {
        title: "Arquitectura y nube",
        body: "Revisión de arquitectura, ajuste de rendimiento y de costos, e infraestructura en la nube en AWS, GCP y Kubernetes.",
        stack: ["AWS", "GCP", "Kubernetes", "Postgres"],
      },
    ],
    process: {
      title: "Cómo funciona",
      steps: [
        { title: "Diagnóstico", body: "Una conversación corta para entender el problema, los sistemas involucrados y qué significa el éxito para ti." },
        { title: "Construcción conjunta", body: "Trabajo junto a tu equipo en ciclos cortos, con software funcionando frente a ti desde el principio." },
        { title: "Traspaso", body: "Documentación, monitoreo y transferencia de conocimiento, para que tu equipo siga sin depender de mí." },
      ],
    },
    cta: "Hablar de un proyecto",
    note: "Remoto, presencial en Florianópolis o híbrido. En español, inglés o portugués.",
  },
  experience: {
    title: "Experiencia",
    intro: "De GeneXus y C# en 2014 a Go y agentes de IA hoy.",
    present: "actualidad",
    educationTitle: "Formación",
  },
  projects: {
    title: "Proyectos",
    intro: "Productos que fundé y herramientas que creé.",
    kinds: {
      product: "Producto",
      studio: "Estudio",
      npm: "Paquete npm",
      go: "Módulo Go",
      social: "Proyecto social",
    },
    status: { live: "En línea", archived: "Archivado" },
    visit: "Visitar",
    source: "Código fuente",
  },
  openSource: {
    title: "Open source",
    intro:
      "Contribuciones aceptadas en Fiber, fasthttp y gomemcache, proyectos que la comunidad Go usa en producción.",
    merged: (n: number) => `${n} ${n === 1 ? "pull request aceptado" : "pull requests aceptados"}`,
    author: "Autor del middleware redirect",
  },
  writing: {
    title: "Artículos",
    intro:
      "Notas sobre Go, rendimiento e ingeniería, publicadas en dev.to y Medium. Cada artículo se mantiene en el idioma en que fue escrito.",
    filterLabel: "Filtrar artículos por idioma",
    all: "Todos",
    pt: "Portugués",
    en: "Inglés",
    count: (n: number) => `${n} ${n === 1 ? "artículo" : "artículos"}`,
    langBadge: { pt: "PT", en: "EN" },
  },
  contact: {
    title: "Hablemos",
    body: "¿Tienes un proyecto, una consultoría, una vacante o una duda sobre Go? La mejor forma de contactarme es por LinkedIn.",
    cta: "Escríbeme en LinkedIn",
    elsewhere: "Perfiles",
  },
  footer: {
    built: "Hecho con Next.js y Tailwind CSS.",
  },
  a11y: {
    newTab: "(se abre en una pestaña nueva)",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esta página cambió de dirección o nunca existió.",
    back: "Volver al inicio",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, pt, es };

/** Picks the first supported locale from the browser's preference list. */
export function matchLocale(preferred: readonly string[]): Locale {
  for (const tag of preferred) {
    const base = tag.toLowerCase().split("-")[0];
    if ((locales as readonly string[]).includes(base)) return base as Locale;
  }
  return defaultLocale;
}
