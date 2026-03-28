export type ServiceTechnology = "Angular" | "Next.js" | "NestJS" | "Laravel";

export type ServiceIconKey = "applications" | "architecture" | "backend" | "websites";

export type ServiceItem = {
    slug: string;
    title?: string;
    subTitle?: string;
    description: string;
    technologies: ServiceTechnology[];
    solutions: string[];
    iconKey: ServiceIconKey;
};

export const services: ServiceItem[] = [
    {
        slug: "aplicaciones-web",
        title: "Desarrollo de aplicaciones web",
        description: "Impulse la agilidad de su negocio con interfaces reactivas de alto rendimiento que transforman la interacción del usuario en resultados transaccionales.",
        technologies: ["Angular", "Next.js"],
        solutions: [
            "Aplicaciones internas para equipos y operaciones",
            "Plataformas web para productos digitales",
            "Interfaces enfocadas en rendimiento y mantenibilidad",
        ],
        iconKey: "applications",
    },
    {
        slug: "arquitectura-frontend",
        // title: "Arquitectura Frontend para Empresas",
        subTitle: 'Arquitectura Frontend para Empresas',
        description: "Estandarice su desarrollo con sistemas de diseño y arquitecturas modulares que permiten a múltiples equipos trabajar en armonía.",
        technologies: ["Angular"],
        solutions: [
            "Estructuras modulares para proyectos Angular",
            "Refactorización de frontend legacy",
            "Organización de componentes, servicios y estado",
        ],
        iconKey: "architecture",
    },
    {
        slug: "backend",
        title: "Fullstack Development",
        subTitle: 'NestJS & Laravel',
        description: "Construcción de APIs y microservicios para soportar aplicaciones modernas.",
        technologies: ["NestJS", "Laravel"],
        solutions: [
            "APIs REST para productos y plataformas web",
            "Servicios de autenticación y gestión de datos",
            "Backends preparados para integraciones y crecimiento",
        ],
        iconKey: "backend",
    },
    {
        slug: "paginas-web",
        title: "Desarrollo de páginas web",
        description: "Creación de páginas web profesionales optimizadas para presencia digital.",
        technologies: ["Next.js"],
        solutions: [
            "Sitios corporativos y páginas de servicios",
            "Landing pages para productos o campañas",
            "Webs rápidas enfocadas en SEO y conversión",
        ],
        iconKey: "websites",
    },
];
