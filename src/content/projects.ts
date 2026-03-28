export const projects = [
    {
        id: "comprobantes",
        title: "Módulo de comprobantes",
        summary: "Optimización de flujos críticos y experiencia de usuarios internos.",
        description:
            "Proyecto orientado a reducir fricción operativa, consolidar procesos y asegurar una arquitectura mantenible. Se diseñó un flujo modular con componentes reutilizables, priorizando claridad, rendimiento y consistencia visual.",
        technologies: ["Angular", "Tailwind", "TypeScript"],
        images: ["Comprobantes 01", "Comprobantes 02", "Comprobantes 03", "Comprobantes 04"],
    },
    {
        id: "clinica",
        title: "Web para clínica dental",
        summary: "Sitio informativo con reservas rápidas y enfoque en confianza.",
        description:
            "Landing informativa pensada para conversión y reputación. Incluye secciones educativas, testimonios y un flujo de contacto optimizado para dispositivos móviles.",
        technologies: ["React", "Node.js"],
        images: ["Clínica 01"],
        link: "https://example.com",
    },
    {
        id: "inventarios",
        title: "Sistema de gestión de inventarios",
        summary: "Panel operativo con métricas en tiempo real y control de stock.",
        description:
            "Sistema multi-módulo para control de existencias, alertas de reposición y trazabilidad. La interfaz prioriza lectura rápida de datos y acciones críticas con baja fricción.",
        technologies: ["Laravel", "Vue", "MySQL"],
        images: ["Inventario 01", "Inventario 02", "Inventario 03"],
    },
    {
        id: "startup",
        title: "Landing page para startup",
        summary: "Narrativa visual minimalista con foco en producto.",
        description:
            "Landing enfocada en explicar valor en pocos segundos. Se cuidó micro-copy, jerarquía visual y performance para campañas de adquisición.",
        technologies: ["Next.js", "Tailwind"],
        images: ["Startup 01"],
        link: "https://example.com",
    },
];

export type PortfolioProject = (typeof projects)[number];
