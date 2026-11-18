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
    title: "Renan Bastos · Software Engineer & Consultant",
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
    homelab: "Homelab",
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
      "I'm a software engineer and consultant. Most of my work is in Go: system architecture, cloud infrastructure, databases, observability and automation. I've built CRM integrations, real estate lead management, WhatsApp automation, AI agents, data pipelines and the internal tools that keep operations running.",
      "I like working close to product and business teams, turning complex problems into simple, reliable software. I've been the technical reference for several teams, helping shape architecture decisions and weighing trade-offs with technical and non-technical people alike.",
      "What drives me is where engineering, AI and entrepreneurship meet: I run my own consultancy and build my own products, like Conteúdo de Vitrine. I also keep a homelab where I practice infrastructure and security, and I bring that security mindset to every project.",
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
        title: "Architecture, cloud and security",
        body: "Architecture reviews, performance and cost tuning, cloud infrastructure on AWS, GCP and Kubernetes, and security built into the delivery pipeline.",
        stack: ["AWS", "GCP", "Kubernetes", "DevSecOps"],
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
  homelab: {
    title: "Homelab",
    intro:
      "My homelab, built entirely as code for a dedicated GMKtec K8 Plus running Proxmox VE. It's where I test the infrastructure, security and delivery practices I take to clients.",
    stages: [
      {
        label: "Target",
        title: "GMKtec K8 Plus with Proxmox VE",
        body: "The whole architecture is already declared in code for the dedicated hardware: shared services, data, the app platform, a lab network and an isolated security network. It goes live one workload at a time, following a written migration plan.",
      },
      {
        label: "Proof of concept · running",
        title: "Proxmox on Hyper-V",
        body: "The same code runs today on Proxmox nested in Hyper-V. It validates the Terraform modules and Ansible roles before the hardware arrives, and already hosts the Arandu apps.",
      },
    ],
    pillars: [
      {
        title: "Everything as code",
        body: "Terraform creates every container and VM; Ansible configures them with 17 roles, each one tested in a container in CI. Nothing is set up by hand.",
      },
      {
        title: "Private by default",
        body: "Networks split by purpose, including an isolated security network with no internet access. Unprivileged containers, and access only through a private Tailscale network: nothing is published to the internet.",
      },
      {
        title: "Security in the pipeline",
        body: "Least-privilege API tokens per environment, secret scanning on every change, SSH hardening and automatic security updates, Vault for secrets, ACLs on Redis and SCRAM on PostgreSQL.",
      },
      {
        title: "Observable and recoverable",
        body: "Prometheus and Grafana with metrics from every host and container, an append-only backup server and a written disaster recovery plan.",
      },
    ],
    pipeline: {
      title: "How a change reaches the server",
      steps: [
        { title: "Pull request", body: "CI runs formatting, validation, linting, secret scanning and the tests of every role." },
        { title: "Saved plan", body: "Terraform writes a plan that I read before anything changes." },
        { title: "Guarded apply", body: "A guard refuses any delete or replace without explicit approval. No automation ever applies." },
        { title: "Configuration", body: "Ansible brings each machine to the declared state, idempotently." },
      ],
    },
    note: "The repository is private. I'm happy to walk through it in a conversation.",
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
    title: "Renan Bastos · Engenheiro de software e consultor",
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
    homelab: "Homelab",
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
      "Sou engenheiro de software e consultor. A maior parte do meu trabalho é em Go: arquitetura de sistemas, infraestrutura em nuvem, bancos de dados, observabilidade e automação. Já construí integrações com CRM, gestão de leads imobiliários, automação de WhatsApp, agentes de IA, pipelines de dados e as ferramentas internas que mantêm a operação de pé.",
      "Gosto de trabalhar perto de produto e de negócio, transformando problemas complexos em software simples e confiável. Já fui referência técnica para vários times, ajudando nas decisões de arquitetura e avaliando trade-offs com pessoas técnicas e não técnicas.",
      "O que me move é o encontro entre engenharia, IA e empreendedorismo: tenho minha própria consultoria e construo meus próprios produtos, como o Conteúdo de Vitrine. Também mantenho um homelab onde pratico infraestrutura e segurança, e levo esse cuidado com segurança para todo projeto.",
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
        title: "Arquitetura, nuvem e segurança",
        body: "Revisão de arquitetura, ajuste de performance e de custo, infraestrutura em nuvem na AWS, no GCP e em Kubernetes, e segurança desde o pipeline de entrega.",
        stack: ["AWS", "GCP", "Kubernetes", "DevSecOps"],
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
  homelab: {
    title: "Homelab",
    intro:
      "Meu homelab, construído inteiro como código para um GMKtec K8 Plus dedicado rodando Proxmox VE. É onde testo as práticas de infraestrutura, segurança e entrega que levo para os clientes.",
    stages: [
      {
        label: "Destino",
        title: "GMKtec K8 Plus com Proxmox VE",
        body: "A arquitetura inteira já está declarada em código para o hardware dedicado: serviços compartilhados, dados, a plataforma das aplicações, uma rede de lab e uma rede de segurança isolada. Ela entra no ar um workload por vez, seguindo um plano de migração documentado.",
      },
      {
        label: "Prova de conceito · no ar",
        title: "Proxmox no Hyper-V",
        body: "O mesmo código roda hoje num Proxmox aninhado no Hyper-V. Ele valida os módulos do Terraform e as roles do Ansible antes do hardware chegar, e já hospeda as aplicações da Arandu.",
      },
    ],
    pillars: [
      {
        title: "Tudo como código",
        body: "O Terraform cria cada container e VM; o Ansible configura tudo com 17 roles, cada uma testada em container na CI. Nada é configurado à mão.",
      },
      {
        title: "Privado por padrão",
        body: "Redes separadas por finalidade, incluindo uma rede de segurança isolada, sem acesso à internet. Containers não privilegiados e acesso só por uma rede privada Tailscale: nada é publicado na internet.",
      },
      {
        title: "Segurança no pipeline",
        body: "Tokens de API com privilégio mínimo por ambiente, varredura de segredos em toda mudança, SSH endurecido e atualizações de segurança automáticas, Vault para segredos, ACL no Redis e SCRAM no PostgreSQL.",
      },
      {
        title: "Observável e recuperável",
        body: "Prometheus e Grafana com métricas de cada host e container, um servidor de backup append-only e um plano de recuperação de desastre documentado.",
      },
    ],
    pipeline: {
      title: "Como uma mudança chega ao servidor",
      steps: [
        { title: "Pull request", body: "A CI roda formatação, validação, lint, varredura de segredos e os testes de cada role." },
        { title: "Plano salvo", body: "O Terraform gera um plano que eu leio antes de qualquer mudança." },
        { title: "Apply protegido", body: "Uma trava recusa qualquer remoção ou recriação sem aprovação explícita. Nenhuma automação aplica nada." },
        { title: "Configuração", body: "O Ansible leva cada máquina ao estado declarado, de forma idempotente." },
      ],
    },
    note: "O repositório é privado. Posso mostrar como ele funciona numa conversa.",
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
    title: "Renan Bastos · Ingeniero de software y consultor",
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
    homelab: "Homelab",
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
      "Soy ingeniero de software y consultor. La mayor parte de mi trabajo es en Go: arquitectura de sistemas, infraestructura en la nube, bases de datos, observabilidad y automatización. He construido integraciones con CRM, gestión de leads inmobiliarios, automatización de WhatsApp, agentes de IA, pipelines de datos y las herramientas internas que mantienen la operación en marcha.",
      "Me gusta trabajar cerca del producto y del negocio, convirtiendo problemas complejos en software simple y confiable. He sido referente técnico de varios equipos, ayudando en las decisiones de arquitectura y evaluando trade-offs con personas técnicas y no técnicas.",
      "Lo que me mueve es el encuentro entre ingeniería, IA y emprendimiento: tengo mi propia consultora y construyo mis propios productos, como Conteúdo de Vitrine. También mantengo un homelab donde practico infraestructura y seguridad, y llevo ese cuidado por la seguridad a cada proyecto.",
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
        title: "Arquitectura, nube y seguridad",
        body: "Revisión de arquitectura, ajuste de rendimiento y de costos, infraestructura en la nube en AWS, GCP y Kubernetes, y seguridad desde el pipeline de entrega.",
        stack: ["AWS", "GCP", "Kubernetes", "DevSecOps"],
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
  homelab: {
    title: "Homelab",
    intro:
      "Mi homelab, construido entero como código para un GMKtec K8 Plus dedicado con Proxmox VE. Es donde pruebo las prácticas de infraestructura, seguridad y entrega que llevo a los clientes.",
    stages: [
      {
        label: "Destino",
        title: "GMKtec K8 Plus con Proxmox VE",
        body: "Toda la arquitectura ya está declarada en código para el hardware dedicado: servicios compartidos, datos, la plataforma de las aplicaciones, una red de lab y una red de seguridad aislada. Entra en producción un workload a la vez, siguiendo un plan de migración documentado.",
      },
      {
        label: "Prueba de concepto · en marcha",
        title: "Proxmox en Hyper-V",
        body: "El mismo código corre hoy en un Proxmox anidado en Hyper-V. Valida los módulos de Terraform y los roles de Ansible antes de que llegue el hardware, y ya aloja las aplicaciones de Arandu.",
      },
    ],
    pillars: [
      {
        title: "Todo como código",
        body: "Terraform crea cada contenedor y VM; Ansible los configura con 17 roles, cada uno probado en un contenedor en la CI. Nada se configura a mano.",
      },
      {
        title: "Privado por defecto",
        body: "Redes separadas por propósito, incluida una red de seguridad aislada, sin acceso a internet. Contenedores sin privilegios y acceso solo por una red privada Tailscale: nada se publica en internet.",
      },
      {
        title: "Seguridad en el pipeline",
        body: "Tokens de API con privilegio mínimo por entorno, escaneo de secretos en cada cambio, SSH endurecido y actualizaciones de seguridad automáticas, Vault para secretos, ACL en Redis y SCRAM en PostgreSQL.",
      },
      {
        title: "Observable y recuperable",
        body: "Prometheus y Grafana con métricas de cada host y contenedor, un servidor de backup append-only y un plan de recuperación ante desastres documentado.",
      },
    ],
    pipeline: {
      title: "Cómo un cambio llega al servidor",
      steps: [
        { title: "Pull request", body: "La CI ejecuta formato, validación, lint, escaneo de secretos y las pruebas de cada rol." },
        { title: "Plan guardado", body: "Terraform genera un plan que leo antes de cualquier cambio." },
        { title: "Apply protegido", body: "Un bloqueo rechaza cualquier borrado o reemplazo sin aprobación explícita. Ninguna automatización aplica nada." },
        { title: "Configuración", body: "Ansible lleva cada máquina al estado declarado, de forma idempotente." },
      ],
    },
    note: "El repositorio es privado. Con gusto te lo muestro en una conversación.",
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
