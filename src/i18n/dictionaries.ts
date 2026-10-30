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
      "Renan Bastos builds backend systems, APIs and AI agents with Go. 10+ years of experience, open source contributions and articles.",
  },
  skipLink: "Skip to content",
  nav: {
    label: "Sections",
    about: "About",
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
    eyebrow: "Software engineer · Florianópolis, Brazil",
    title: "I build backend systems that stay simple as they grow.",
    lead: "10+ years shipping software, from Go services, APIs and integrations to AI agents, and giving back to the open source tools I rely on.",
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
    body: "Have a project, a role or a question about Go? The best way to reach me is LinkedIn.",
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
      "Renan Bastos constrói sistemas backend, APIs e agentes de IA com Go. Mais de 10 anos de experiência, contribuições open source e artigos.",
  },
  skipLink: "Pular para o conteúdo",
  nav: {
    label: "Seções",
    about: "Sobre",
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
    eyebrow: "Engenheiro de software · Florianópolis, Brasil",
    title: "Construo sistemas backend que continuam simples enquanto crescem.",
    lead: "Mais de 10 anos entregando software, de serviços em Go, APIs e integrações a agentes de IA, e contribuindo com as ferramentas open source que uso todo dia.",
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
    body: "Tem um projeto, uma vaga ou uma dúvida sobre Go? O melhor jeito de falar comigo é pelo LinkedIn.",
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
      "Renan Bastos construye sistemas backend, APIs y agentes de IA con Go. Más de 10 años de experiencia, contribuciones open source y artículos.",
  },
  skipLink: "Saltar al contenido",
  nav: {
    label: "Secciones",
    about: "Sobre mí",
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
    eyebrow: "Ingeniero de software · Florianópolis, Brasil",
    title: "Construyo sistemas backend que siguen siendo simples mientras crecen.",
    lead: "Más de 10 años creando software, de servicios en Go, APIs e integraciones a agentes de IA, y contribuyendo a las herramientas open source que uso todos los días.",
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
    body: "¿Tienes un proyecto, una vacante o una duda sobre Go? La mejor forma de contactarme es por LinkedIn.",
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
