"use client";

import type { LucideIcon } from "lucide-react";
import {
    Bug,
    FolderTree,
    Layers3,
    ScanSearch,
    ShieldCheck,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import SectionHeading from "@/shared/components/ui/SectionHeading";
import { architecturePrinciples, type ArchitectureIconKey } from "@/content/architecture-principles";

const architectureIconMap: Record<ArchitectureIconKey, LucideIcon> = {
    "folder-tree": FolderTree,
    layers: Layers3,
    bug: Bug,
    "scan-search": ScanSearch,
    "shield-check": ShieldCheck,
};

export default function FrontendArchitectureSection() {
    return (
        <section id="frontend-architecture" className="relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-60" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Arquitectura Frontend"
                        title="Como pienso la arquitectura antes de escribir componentes."
                        description="Como diseno aplicaciones Angular claras, mantenibles y faciles de evolucionar. Creo aplicaciones donde el codigo se entiende rapido, los errores se encuentran facilmente y el sistema puede evolucionar sin romperse."
                        className="max-w-4xl"
                    />

                    <div className="mt-10 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
                        {architecturePrinciples.map((principle) => {
                            const Icon = architectureIconMap[principle.iconKey];

                            return (
                                <article
                                    key={principle.title}
                                    className="group flex min-h-[184px] flex-col rounded-[1.25rem] border border-border/80 bg-surface/55 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/75 hover:shadow-xl hover:shadow-black/15"
                                >
                                    <span
                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 group-hover:scale-[1.04] ${principle.badgeTone}`}
                                    >
                                        <Icon className={`h-4.5 w-4.5 ${principle.iconColor}`} />
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-text sm:text-xl">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6.5 text-text/68 sm:text-[0.95rem]">
                                        {principle.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
