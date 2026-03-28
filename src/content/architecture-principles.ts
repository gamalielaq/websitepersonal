export type ArchitectureIconKey = "folder-tree" | "layers" | "bug" | "scan-search" | "shield-check";

export const architecturePrinciples = [
    {
        title: "Claridad estructural",
        description:
            "La estructura del proyecto debe explicar como funciona la aplicacion. Los modulos y carpetas deben tener responsabilidades claras.",
        iconKey: "folder-tree",
        badgeTone: "bg-sky-500/12",
        iconColor: "text-sky-300",
    },
    {
        title: "Separación de responsabilidades",
        description:
            "Cada parte del sistema debe tener una funcion especifica: componentes para UI, servicios para logica, y modulos para organizacion.",
        iconKey: "layers",
        badgeTone: "bg-violet-500/12",
        iconColor: "text-violet-300",
    },
    {
        title: "Errores detectables",
        description:
            "La arquitectura debe facilitar encontrar errores rapidamente. Un bug no deberia tomar dias en localizarse.",
        iconKey: "bug",
        badgeTone: "bg-amber-500/12",
        iconColor: "text-amber-300",
    },
    {
        title: "Escalabilidad",
        description:
            "La aplicación debe poder crecer sin volverse carítica. La estructura debe soportar nuevas funcionalidades sin romper lo existente.",
        iconKey: "scan-search",
        badgeTone: "bg-emerald-500/12",
        iconColor: "text-emerald-300",
    },
    {
        title: "Mantenibilidad",
        description:
            "El codigo debe ser facil de entender incluso meses despues. Un sistema claro reduce el tiempo de mantenimiento.",
        iconKey: "shield-check",
        badgeTone: "bg-cyan-500/12",
        iconColor: "text-cyan-300",
    },
];
