"use client";

import type { LucideIcon } from "lucide-react";
import {
    Boxes,
    Container,
    Database,
    FileCode2,
    GitBranch,
    Layers3,
    Leaf,
    MonitorCog,
    ServerCog,
} from "lucide-react";
import ContainerLayout from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import SectionHeading from "@/shared/components/ui/SectionHeading";
import { technologies, type TechnologyIconKey } from "@/content/technologies";

const technologyIconMap: Record<TechnologyIconKey, LucideIcon> = {
    "monitor-cog": MonitorCog,
    boxes: Boxes,
    "server-cog": ServerCog,
    leaf: Leaf,
    layers: Layers3,
    "file-code": FileCode2,
    database: Database,
    container: Container,
    "git-branch": GitBranch,
};

export default function TechnologiesSection() {
    return (
        <section id="technologies" className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <ContainerLayout className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Tecnologías"
                        title="Herramientas que uso para construir sin fricción innecesaria."
                        description="Herramientas y tecnologías que utilizo para construir aplicaciones modernas."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => {
                            const Icon = technologyIconMap[technology.iconKey];

                            return (
                                <div
                                    key={technology.name}
                                    className="group flex items-center gap-4 rounded-[1.5rem] border border-border/80 bg-surface/45 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/65"
                                >
                                    <span
                                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-[1.06] ${technology.badgeTone}`}
                                    >
                                        <Icon className={`h-5.5 w-5.5 stroke-[2.2] ${technology.iconColor}`} />
                                    </span>
                                    <span className="text-base font-semibold text-text">{technology.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </ContainerLayout>
        </section>
    );
}
