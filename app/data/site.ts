// Todo el contenido del sitio vive en este archivo.
// Para editar textos, fechas o enlaces, solo cambia los valores de aquí abajo.
// Cada página (app/*/page.tsx) importa de aquí lo que necesita mostrar.

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Quién soy" },
  { href: "/historia", label: "Historia" },
  { href: "/formacion", label: "Formación" },
  { href: "/intereses", label: "Intereses" },
  { href: "/vida-actual", label: "Vida actual" },
  { href: "/futuro", label: "Futuro" },
];

// ---------------------------------------------------------------------------
// Quién soy (home)
// ---------------------------------------------------------------------------

export const profile = {
  name: "Carlos Andrés Rodríguez Troncoso",
  shortName: "Carlos Rodríguez",
  location: "Barranquilla, Colombia",
  headline: "Carlos Rodríguez",
  subheadline:
    "Estudiante de Ingeniería de Sistemas en transición hacia Cloud/DevOps.",
  bio: [
    "Estoy en el último año de Ingeniería de Sistemas en la Universidad de la Costa (CUC), en Barranquilla, dando el salto hacia una carrera en Cloud/DevOps. Mi lenguaje más fuerte es Python y ya soy AWS Certified Cloud Practitioner.",
    "Me gusta entender bien lo que construyo: escribir mi propia infraestructura, documentar lo que aprendo y avanzar paso a paso hacia roles de Cloud Support / Cloud Operations, con la mira puesta en MLOps a mediano plazo.",
  ],
  ctaPrimary: { label: "Conocer mi historia", href: "/historia" },
  ctaSecondary: {
    label: "Escríbeme",
    href: "mailto:carlos27rodriguez3@gmail.com",
  },
};

export type FichaItem = { label: string; value: string };

export const ficha: FichaItem[] = [
  { label: "Ciudad Natal", value: "Barranquilla, Colombia" },
  { label: "Especialidad Principal", value: "Cloud / DevOps" },
  { label: "Graduación Esperada", value: "Agosto 2027" },
  { label: "Enfoque Actual", value: "AWS & Infraestructura" },
];

export type Principio = {
  icon: string;
  title: string;
  text: string;
  meta: string;
};

export const principios: Principio[] = [
  {
    icon: "psychology",
    title: "Entender lo que construyo",
    text: "Entender por qué algo funciona es indispensable para gestionar de forma correcta un sistema. Es la única forma de defender un proyecto con seguridad.",
    meta: "Enfoque / Comprensión profunda",
  },
  {
    icon: "school",
    title: "La disciplina del autodidacta",
    text: "Buena parte de lo que uso a diario lo aprendí fuera del aula: documentación oficial, laboratorios prácticos y mucho ensayo y error.",
    meta: "Método / Aprendizaje autónomo",
  },
  {
    icon: "public",
    title: "Resiliente",
    text: "No me rindo ante las adversidades y siempre busco dar lo mejor de mi en cada desafío!",
    meta: "Valor agregado",
  },
];

// ---------------------------------------------------------------------------
// Historia
// ---------------------------------------------------------------------------

export type HistoriaDetail =
  | { kind: "pares"; items: { icon: string; text: string }[] }
  | { kind: "cita"; text: string }
  | { kind: "tags"; items: string[] };

export type HistoriaItem = {
  period: string;
  phase: string;
  location: string;
  tag: string;
  title: string;
  text: string;
  detail: HistoriaDetail;
  enCurso?: boolean;
};

export const historia: HistoriaItem[] = [
  {
    period: "Infancia",
    phase: "Raíces,curiosidad y propósito",
    location: "Barranquilla, Colombia",
    tag: "Hito 01",
    title: "La inquietud y salud",
    text: "Crecí en Barranquilla, entre el calor del Caribe y diversas dificultades de salud que me llevaron a pasar gran parte de mi infancia en clínicas. En medio de esas experiencias, encontré en la tecnología un espacio de distracción y una forma de escapar por momentos de aquellas dificultades. Con el tiempo, esa curiosidad se transformó en un interés genuino por comprender cómo funcionaba la tecnología y en una motivación para aprender y construir con ella. ",
    detail: {
      kind: "pares",
      items: [
        { icon: "build", text: "Curiosidad por desarmar aparatos" },
        { icon: "computer", text: "Primer contacto con una computadora" },
      ],
    },
  },
  {
    period: "Adolescencia",
    phase: "Cultura del esfuerzo",
    location: "Barranquilla, Colombia",
    tag: "Hito 02",
    title: "Aprender que la constancia vale más que los atajos",
    text: "En casa aprendí que el esfuerzo sostenido y el estudio abren puertas, sin importar el punto de partida, ni las limitantes de salud. Ese acompañamiento fue clave para decidirme a estudiar Ingeniería de Sistemas y no soltar el paso incluso cuando el camino se pone cuesta arriba.",
    detail: {
      kind: "cita",
      text: "La constancia importa más que el punto de partida.",
    },
  },
  {
    period: "Universidad",
    phase: "Autonomía y vocación",
    location: "Universidad de la Costa (CUC)",
    tag: "Hito 03",
    title: "De la universidad a la nube",
    text: "Entrar a la Universidad de la Costa marcó un antes y un después: ahí descubrí la programación en serio y, más adelante, el mundo cloud. Certificarme como AWS Cloud Practitioner fue el primer paso concreto hacia una meta clara: construir una carrera en Cloud/DevOps, con la mirada puesta en MLOps más adelante.",
    detail: {
      kind: "tags",
      items: ["Ingeniería de Sistemas", "AWS Cloud Practitioner"],
    },
  },
  {
    period: "Actualidad",
    phase: "Momentos decisivos",
    location: "Barranquilla, Colombia",
    tag: "Hito 04",
    title: "Construir en público: Collawork y la transición a Cloud/DevOps",
    text: "Hoy escribo mi propia infraestructura para Collawork, mi proyecto de portafolio, en lugar de copiarla: Docker, Terraform, Kubernetes y CI/CD, paso a paso y de forma defendible. En paralelo preparo la certificación AWS Solutions Architect Associate como siguiente escalón hacia un rol junior de Cloud Support / Cloud Operations.",
    detail: {
      kind: "tags",
      items: ["FastAPI", "Next.js", "Docker", "Terraform", "AWS"],
    },
    enCurso: true,
  },
];

// ---------------------------------------------------------------------------
// Formación
// ---------------------------------------------------------------------------

export type EducationStat = { label: string; value: string };

export type EducationItem = {
  title: string;
  place: string;
  period: string;
  detail: string;
  stats?: EducationStat[];
};

export const educacion: EducationItem[] = [
  {
    title: "Ingeniería de Sistemas",
    place: "Universidad de la Costa (CUC) · Barranquilla",
    period: "Último año · Graduación esperada: agosto 2027",
    detail:
      "Formación en desarrollo de software e infraestructura, cursada en paralelo con la transición hacia el mundo Cloud/DevOps.",
    stats: [
      { label: "Enfoque", value: "Cloud/DevOps" },
      { label: "Cursos actuales", value: "IA & Blockchain" },
      { label: "Modalidad", value: "Presencial" },
    ],
  },
  {
    title: "Técnico en Sistemas",
    place: "SENA",
    period: "Cursado un año antes que la universidad",
    detail:
      "Formación técnica complementaria en fundamentos de sistemas, que reforzó la base práctica de la carrera universitaria.",
  },
];

export type Certification = {
  issuer: string;
  title: string;
  detail: string;
};

export const certificaciones: Certification[] = [
  {
    issuer: "Amazon Web Services",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    detail: "Primera certificación cloud, base del camino hacia Cloud/DevOps.",
  },
  {
    issuer: "Oxford Online Placement Test",
    title: "Inglés B2",
    detail: "Certificación de nivel de inglés.",
  },
  {
    issuer: "Amazon Web Services",
    title: "AWS Solutions Architect Associate (SAA-C03)",
    detail:
      "En preparación: teoría en la mañana, laboratorios prácticos por la tarde.",
  },
  {
    issuer: "Universidad de la Costa",
    title: "Cursos del semestre",
    detail:
      "Inteligencia Artificial y Blockchain, en el último año de la carrera.",
  },
];

export type Metodologia = { title: string; text: string };

export const metodologia: Metodologia[] = [
  {
    title: "Entender lo que construyo",
    text: "Entender por qué algo funciona es indispensable para gestionar de forma correcta un sistema. Es la única forma de defender un proyecto con seguridad.",
  },
  {
    title: "La disciplina del autodidacta",
    text: "Buena parte de lo que uso a diario lo aprendí fuera del aula: documentación oficial, laboratorios prácticos y ensayo y error.",
  },
  {
    title: "Resiliente",
    text: "No me rindo ante las adversidades y siempre busco dar lo mejor de mi en cada desafío!",
  },
];

export const compromisoDiario = {
  label: "Compromiso Diario",
  stat: "2–4 HORAS / DÍA",
  statLabel: "Tiempo de estudio dedicado",
  barras: [
    { label: "Certificación AWS (entre semana)", value: 70 },
    { label: "Proyecto de portafolio (fin de semana)", value: 30 },
  ],
  quote:
    "Entre semana, certificación y curso de DevOps. El sábado es el bloque largo para el portafolio; el domingo, repaso de AWS y estudio acerca de ML.",
};

export type TechPill = { name: string; primary?: boolean };

export const techStack: TechPill[] = [
  { name: "AWS", primary: true },
  { name: "Python" },
  { name: "Next.js" },
  { name: "FastAPI" },
  { name: "Docker" },
  { name: "Terraform (Aprendiendo)" },
  { name: "Kubernetes (Aprendiendo)" },
  { name: "PostgreSQL" },
  { name: "TypeScript" },
  { name: "GitHub Actions (Aprendiendo)" },
];

// ---------------------------------------------------------------------------
// Intereses
// ---------------------------------------------------------------------------

export const musica = {
  title: "Música y concentración",
  text: "Suelo tener música de fondo mientras estudio o programo, algo que ayude a mantener el ritmo sin quitar concentración. Con el tiempo se ha vuelto casi un ritual antes de sentarme a trabajar.",
  tags: ["Lo-fi", "Instrumental", "Rutina de enfoque"],
  // Alturas relativas (0-1) para dibujar la onda decorativa de la tarjeta.
  waveform: [
    0.3, 0.5, 0.8, 0.4, 0.6, 0.9, 0.35, 0.55, 0.7, 0.4, 0.25, 0.6, 0.85, 0.45,
    0.5, 0.75, 0.3, 0.6, 0.4, 0.65, 0.9, 0.35, 0.5, 0.7,
  ],
};

export const teclados = {
  title: "Teclados mecánicos",
  text: "Uno de mis gustos más nerd son los teclados mecánicos: actualmente escribo en un teclado ergonómico dividido (IF-WSofle). También me gusta mantener pequeños proyectos personales corriendo en paralelo a los grandes, solo para experimentar.",
  tags: ["IF-WSofle", "Split ergonómico"],
};

export const movimiento = {
  title: "Movimiento y despeje mental",
  text: "Trato de mantener algo de actividad física haciendo ejercicio, entre semestre y certificaciones: despejar la cabeza ayuda tanto como cualquier repaso teórico antes de un examen.",
};

export type LecturaItem = { title: string; author: string; icon: string };

export const lecturas: LecturaItem[] = [
  {
    title: "Libros técnicos",
    author: "Cloud, DevOps e infraestructura",
    icon: "menu_book",
  },
  {
    title: "Ficción para desconectar",
    author: "Alternando con lo técnico",
    icon: "auto_stories",
  },
  {
    title: "Minecraft RPG server",
    author: "Idea de proyecto propio",
    icon: "sports_esports",
  },
  {
    title: "Overwatch",
    author: "Juego para compartir conmigos",
    icon: "sports_esports",
  },
];

export const exploracionTecnica = {
  title: "Exploración Cloud & MLOps",
  text: "Sigo de cerca AWS, Terraform, Kubernetes y las buenas prácticas de CI/CD. Cada vez me interesa más el punto donde el DevOps se cruza con el Machine Learning: cómo se entrena, despliega y monitorea un modelo en producción.",
  terminal: [
    "$ terraform plan",

    '+ resource "aws_instance" "app"',

    "$ aws ec2 describe-instances",

    "InstanceState: running",
  ],
};

// ---------------------------------------------------------------------------
// Mi vida actual
// ---------------------------------------------------------------------------

export const rolActual = {
  title: "Estudiante de Ingeniería de Sistemas, en transición a Cloud/DevOps",
  text: "Curso el último año de la carrera mientras preparo mi salida al mundo laboral en roles de Cloud Support / Cloud Operations, construyendo evidencia real de lo que sé hacer en el camino.",
  schedule: [
    {
      day: "Lunes – Viernes",
      detail: "Certificación AWS (SAA-C03) y curso de DevOps",
    },
    {
      day: "Sábado",
      detail: "Bloque largo de proyecto de portafolio (Collawork)",
    },
    { day: "Domingo", detail: "Repaso de AWS y estudio de ML" },
  ],
};

export type ProyectoActual = {
  name: string;
  status: string;
  text: string;
};

export const proyectosActuales: ProyectoActual[] = [
  {
    name: "Collawork",
    status: "Fase 3 · Docker",
    text: "Plataforma social minimalista para encontrar colaboradores de trabajo. Backend en FastAPI, frontend en Next.js, y me sirve como laboratorio para Docker, Terraform, Kubernetes y CI/CD.",
  },
  {
    name: "Entrenamiento de modelos ML",
    status: "En progreso",
    text: "Aplicación de conocimientos de ML en proyectos demostrables.",
  },
];

export type ChecklistItem = {
  text: string;
  status: "done" | "progreso" | "pendiente";
};

export const checklist2026: ChecklistItem[] = [
  {
    text: "Obtener la certificación AWS Cloud Practitioner (CLF-C02).",
    status: "done",
  },
  {
    text: "Aprobar la certificación AWS Solutions Architect Associate (SAA-C03).",
    status: "progreso",
  },
  {
    text: "Conseguir un rol junior de Cloud Support / Cloud Operations.",
    status: "pendiente",
  },
  {
    text: "Graduarme como Ingeniero de Sistemas (agosto de 2027).",
    status: "pendiente",
  },
];

export const rendimiento = {
  progresoLabel: "Avance del roadmap 2025 – 2026",
  progreso: 35,
  cierre: "Cierre de ciclo Q4 · Diciembre 2026",
};

// ---------------------------------------------------------------------------
// Mi futuro
// ---------------------------------------------------------------------------

export const manifiesto = {
  quote:
    "No busco acumular certificaciones por acumularlas, sino entender de verdad la infraestructura que sostiene los sistemas que uso todos los días.",
  attribution: "— Nota personal de trabajo",
};

export type FuturoMilestone = {
  period: string;
  year: string;
  title: string;
  text: string;
  hito: string;
  destacado?: boolean;
};

export const futuroMilestones: FuturoMilestone[] = [
  {
    period: "2 – 3 años",
    year: "2027 – 2028",
    title: "Entrar al mundo Cloud/DevOps",
    text: "Graduarme como Ingeniero de Sistemas, aprobar la certificación AWS Solutions Architect Associate y conseguir mi primer rol junior de Cloud Support / Cloud Operations.",
    hito: "Hito: certificación SAA-C03 + primer rol junior",
  },
  {
    period: "5 años",
    year: "~2031",
    title: "Especializarme hacia DevSecOps y MLOps",
    text: "Avanzar en el roadmap de certificaciones AWS (Security Specialty, DevOps Engineer Professional) y profundizar en Kubernetes, observabilidad y despliegue de modelos de Machine Learning.",
    hito: "Hito: certificaciones AWS de especialidad",
  },
  {
    period: "10 años",
    year: "~2036",
    title: "Construir y operar sistemas de ML en producción",
    text: "Llegar a un rol de arquitectura o liderazgo técnico en sistemas Cloud, con foco en MLOps, y seguir documentando y compartiendo en público lo que voy aprendiendo por el camino.",
    hito: "Hito: arquitecto / líder técnico en sistemas Cloud + ML",
    destacado: true,
  },
];

export type ContactLink = { label: string; href: string; icon: string };

export const contacto: ContactLink[] = [
  {
    label: "carlos27rodriguez3@gmail.com",
    href: "mailto:carlos27rodriguez3@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub — krlo-dev",
    href: "https://github.com/krlo-dev",
    icon: "code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/carlos-rodriguez-krlodev",
    icon: "work",
  },
];
