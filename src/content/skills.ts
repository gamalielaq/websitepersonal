export type SkillIconKey =
    | "panel-left"
    | "sparkles"
    | "workflow"
    | "layers"
    | "cpu"
    | "component"
    | "refresh"
    | "file-code"
    | "braces"
    | "blocks";

export const skills: Array<{ name: string; iconKey: SkillIconKey; iconColor: string; badgeTone: string }> = [
    { name: "Angular", iconKey: "panel-left", iconColor: "text-red-300", badgeTone: "bg-red-400/10" },
    { name: "Signals", iconKey: "sparkles", iconColor: "text-emerald-300", badgeTone: "bg-emerald-400/10" },
    { name: "RxJS", iconKey: "workflow", iconColor: "text-fuchsia-300", badgeTone: "bg-fuchsia-400/10" },
    { name: "Arquitectura modular", iconKey: "layers", iconColor: "text-sky-300", badgeTone: "bg-sky-400/10" },
    { name: "Stores centralizados", iconKey: "cpu", iconColor: "text-orange-300", badgeTone: "bg-orange-400/10" },
    { name: "Componentes reutilizables", iconKey: "component", iconColor: "text-pink-300", badgeTone: "bg-pink-400/10" },
    { name: "Refactorización de código legacy", iconKey: "refresh", iconColor: "text-amber-300", badgeTone: "bg-amber-400/10" },
    { name: "TypeScript", iconKey: "file-code", iconColor: "text-blue-300", badgeTone: "bg-blue-400/10" },
    { name: "HTML", iconKey: "braces", iconColor: "text-orange-300", badgeTone: "bg-orange-400/10" },
    { name: "CSS", iconKey: "blocks", iconColor: "text-cyan-300", badgeTone: "bg-cyan-400/10" },
];
