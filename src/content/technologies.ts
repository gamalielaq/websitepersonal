export type TechnologyIconKey =
    | "monitor-cog"
    | "boxes"
    | "server-cog"
    | "leaf"
    | "layers"
    | "file-code"
    | "database"
    | "container"
    | "git-branch";

export const technologies: Array<{ name: string; iconKey: TechnologyIconKey; badgeTone: string; iconColor: string }> = [
    {
        name: "Angular",
        iconKey: "monitor-cog",
        badgeTone: "bg-gradient-to-br from-rose-500/24 to-pink-500/14 ring-1 ring-rose-300/28 shadow-[0_0_24px_rgba(244,63,94,0.16)]",
        iconColor: "text-rose-300",
    },
    {
        name: "Next.js",
        iconKey: "boxes",
        badgeTone: "bg-gradient-to-br from-slate-200/16 to-zinc-400/10 ring-1 ring-slate-100/18 shadow-[0_0_20px_rgba(255,255,255,0.06)]",
        iconColor: "text-slate-100",
    },
    {
        name: "Nest JS",
        iconKey: "server-cog",
        badgeTone: "bg-gradient-to-br from-red-500/24 to-rose-500/14 ring-1 ring-red-300/26 shadow-[0_0_24px_rgba(239,68,68,0.16)]",
        iconColor: "text-red-300",
    },
    {
        name: "Laravel",
        iconKey: "leaf",
        badgeTone: "bg-gradient-to-br from-orange-500/24 to-red-500/14 ring-1 ring-orange-300/26 shadow-[0_0_24px_rgba(249,115,22,0.16)]",
        iconColor: "text-orange-300",
    },
    {
        name: "React",
        iconKey: "layers",
        badgeTone: "bg-gradient-to-br from-cyan-500/24 to-sky-500/14 ring-1 ring-cyan-300/28 shadow-[0_0_24px_rgba(34,211,238,0.16)]",
        iconColor: "text-cyan-300",
    },
    {
        name: "TypeScript",
        iconKey: "file-code",
        badgeTone: "bg-gradient-to-br from-blue-500/24 to-indigo-500/14 ring-1 ring-blue-300/28 shadow-[0_0_24px_rgba(59,130,246,0.16)]",
        iconColor: "text-blue-300",
    },
    {
        name: "PostgreSQL",
        iconKey: "database",
        badgeTone: "bg-gradient-to-br from-sky-500/24 to-blue-500/14 ring-1 ring-sky-300/26 shadow-[0_0_24px_rgba(14,165,233,0.16)]",
        iconColor: "text-sky-300",
    },
    {
        name: "Docker",
        iconKey: "container",
        badgeTone: "bg-gradient-to-br from-indigo-500/24 to-blue-500/14 ring-1 ring-indigo-300/28 shadow-[0_0_24px_rgba(99,102,241,0.16)]",
        iconColor: "text-indigo-300",
    },
    {
        name: "Git",
        iconKey: "git-branch",
        badgeTone: "bg-gradient-to-br from-amber-500/24 to-orange-500/14 ring-1 ring-amber-300/28 shadow-[0_0_24px_rgba(245,158,11,0.16)]",
        iconColor: "text-amber-300",
    },
];
