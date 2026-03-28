"use client";

import type { LucideIcon } from "lucide-react";
import {
    Blocks,
    Braces,
    Component,
    Cpu,
    FileCode2,
    Layers3,
    PanelLeft,
    RefreshCcw,
    Sparkles,
    Workflow,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import SectionHeading from "@/shared/components/ui/SectionHeading";
import { skills, type SkillIconKey } from "@/content/skills";

const skillIconMap: Record<SkillIconKey, LucideIcon> = {
    "panel-left": PanelLeft,
    sparkles: Sparkles,
    workflow: Workflow,
    layers: Layers3,
    cpu: Cpu,
    component: Component,
    refresh: RefreshCcw,
    "file-code": FileCode2,
    braces: Braces,
    blocks: Blocks,
};

export default function TechnicalSkillsSection() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Habilidades técnicas"
                        title="Herramientas y patrones que sostienen aplicaciones vivas."
                    />

                    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {skills.map((skill) => {
                            const Icon = skillIconMap[skill.iconKey];

                            return (
                                <div
                                    key={skill.name}
                                    className="group flex min-h-[108px] flex-col justify-between rounded-[1.25rem] border border-border/80 bg-surface/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/65 hover:shadow-xl hover:shadow-black/15"
                                >
                                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 group-hover:scale-[1.04] ${skill.badgeTone}`}>
                                        <Icon className={`h-4.5 w-4.5 ${skill.iconColor}`} />
                                    </span>
                                    <span className="mt-5 text-sm font-semibold leading-5 text-text">{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
