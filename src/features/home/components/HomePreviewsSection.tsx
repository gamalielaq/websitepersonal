"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BookOpen, Cpu, Lightbulb } from "lucide-react";
import Container from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import SectionHeading from "@/shared/components/ui/SectionHeading";
import { homePreviews, type HomePreviewIconKey } from "@/content/home-previews";

const previewIconMap: Record<HomePreviewIconKey, LucideIcon> = {
    cpu: Cpu,
    lightbulb: Lightbulb,
    "book-open": BookOpen,
};

export default function HomePreviewsSection() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-45" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Exploración"
                        title="Otras áreas donde también pienso, escribo y construyo."
                    />

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {homePreviews.map((item) => {
                            const Icon = previewIconMap[item.iconKey];

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex h-full flex-col rounded-[1.75rem] border border-border/80 bg-surface/45 p-7 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/65 hover:shadow-xl hover:shadow-black/15"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-text">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <ArrowUpRight className="h-5 w-5 text-text/45 transition group-hover:text-text" />
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                                        <p className="mt-4 text-sm leading-7 text-text/68">{item.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
