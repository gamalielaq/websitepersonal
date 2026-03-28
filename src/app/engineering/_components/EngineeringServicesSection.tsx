"use client";

import type { LucideIcon } from "lucide-react";
import { Globe, Layers3, MonitorSmartphone } from "lucide-react";
import Container from "@/shared/components/layout/Container";
import FloatingTechIcons from "@/shared/components/layout/FloatingTechIcons";
import ScrollReveal from "@/shared/components/ui/ScrollReveal";
import { engineeringServices, type EngineeringServiceIconKey } from "@/content/engineering-services";

const engineeringIconMap: Record<EngineeringServiceIconKey, LucideIcon> = {
    "monitor-smartphone": MonitorSmartphone,
    layers: Layers3,
    globe: Globe,
};

export default function EngineeringServicesSection() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
            <FloatingTechIcons className="opacity-55" />
            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-2xl shadow-black/30 sm:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-text">IngenierÃ­a</p>
                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
                            Servicios de IngenierÃ­a
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-text/72 sm:text-lg">
                            Servicios enfocados en construir experiencias web modernas, arquitecturas sostenibles y productos digitales bien diseÃ±ados.
                        </p>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {engineeringServices.map((service) => {
                                const Icon = engineeringIconMap[service.iconKey];

                                return (
                                    <article
                                        key={service.title}
                                        className="group rounded-[1.5rem] border border-border bg-background/55 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/5"
                                    >
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-text">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h2 className="mt-8 text-xl font-semibold text-text">{service.title}</h2>
                                        <p className="mt-4 text-sm leading-7 text-text/72">{service.description}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
}
