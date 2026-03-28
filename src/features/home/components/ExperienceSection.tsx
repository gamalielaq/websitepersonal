"use client";

import Container from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import SectionHeading from "@/shared/components/ui/SectionHeading";
import { experiences } from "@/content/experience";



export default function ExperienceSection() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Experiencia"
                        title="Trayectoria profesional en desarrollo Front-End"
                    />

                    <div className="mt-10 grid gap-10 lg:grid-cols-[160px_1fr] lg:gap-12">
                        <div className="hidden lg:flex lg:justify-center">
                            <div className="relative h-full w-px bg-border/90">
                                <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-accent/90  shadow-[0_0_0_8px_rgba(34,197,94,0.06)]" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-0 top-2 h-px w-12 bg-border/80 lg:hidden" />
                            <div className="absolute left-10 top-0 h-4 w-4 rounded-full border border-accent/50  shadow-[0_0_0_8px_rgba(34,197,94,0.06)] lg:hidden" />

                            <div className="grid gap-5">
                                {experiences.map((item) => (
                                    <article
                                        key={`${item.company}-${item.dates}`}
                                        className="rounded-[1.5rem] border border-border/80 bg-surface/45 p-5 sm:p-6"
                                    >
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-text/90">
                                                {item.role}
                                            </p>
                                            <span className="h-1 w-1 rounded-full bg-border/70" />
                                            <p className="text-sm text-text/80">
                                                {item.company} - {item.location}
                                            </p>
                                        </div>
                                        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-text/50">
                                            {item.dates}
                                        </p>

                                        <ul className="mt-4 space-y-2 text-sm leading-6 text-text/75 sm:text-[0.95rem]">
                                            {item.bullets.map((bullet) => (
                                                <li key={bullet} className="flex gap-2">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}




