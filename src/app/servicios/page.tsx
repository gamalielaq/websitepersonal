import Link from "next/link";
import {
    AppWindow,
    ArrowRight,
    ArrowUpRight,
    Blocks,
    DatabaseZap,
    Globe2,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import Container from "@/shared/components/layout/Container";
import TechnologyChip from "@/features/services/components/TechnologyChip";
import { services, type ServiceIconKey } from "@/content/services";
import { LINKEDIN_URL } from "@/content/social-links";

const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
    applications: AppWindow,
    architecture: Blocks,
    backend: DatabaseZap,
    websites: Globe2,
};

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "Definimos objetivos de negocio, alcance tecnico y riesgos antes de construir.",
    },
    {
        step: "02",
        title: "Arquitectura",
        description: "Disenamos una base modular para crecer sin deuda tecnica innecesaria.",
    },
    {
        step: "03",
        title: "Implementacion",
        description: "Entregas por iteraciones cortas, con foco en calidad, performance y claridad.",
    },
    {
        step: "04",
        title: "Evolucion",
        description: "Monitoreo, mejoras y soporte para mantener velocidad sin perder estabilidad.",
    },
];

export default function ServicesPage() {
    const [featured, ...rest] = services;

    return (
        <main>
            <Container>
                <section className="relative py-10 lg:py-12">
                    <div className="pointer-events-none absolute inset-0" />
                    <header className="relative z-10 flex flex-col justify-between gap-12 md:flex-row md:items-end">
                        <div className="mr-10 max-w-3xl">
                            <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-accent">Soluciones de Ingenieria de Software</p>
                            <h1 className="mb-8 text-5xl font-bold leading-none tracking-tight text-text sm:text-6xl md:text-7xl lg:text-7xl">
                                SERVICIOS & <br />
                                <span className="text-accent">SOLUCIONES.</span>
                            </h1>
                        </div>
                        <div className="max-w-sm md:mb-4">
                            <p className="border-l-2 border-border/35 pl-6 text-md leading-relaxed text-text/90">
                                Arquitectura de software de elite disenada para escalar operaciones, optimizar procesos criticos y dominar el mercado digital.
                            </p>
                        </div>
                    </header>
                </section>

                <section className="mt-16">
                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12">
                        {featured && (
                            <article className="relative overflow-hidden bg-[#1a1a1a]/92 p-7 md:col-span-8 sm:p-8 rounded-md">
                                <div className="relative z-10">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                                        {(() => {
                                            const Icon = serviceIconMap[featured.iconKey];
                                            return <Icon className="h-5 w-5" />;
                                        })()}
                                    </span>
                                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">{featured.title}</h3>
                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text/70 sm:text-base">{featured.description}</p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {featured.technologies.map((technology) => (
                                            <TechnologyChip key={technology} technology={technology} />
                                        ))}
                                    </div>

                                    <ul className="mt-7 grid gap-2 text-sm text-text/78 sm:grid-cols-2">
                                        {featured.solutions.map((solution) => (
                                            <li key={solution} className="flex gap-2">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                <span>{solution}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/servicios/${featured.slug}`}
                                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-accent/20"
                                    >
                                        Ver detalle
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        )}

                        {rest.map((service) => {
                            const Icon = serviceIconMap[service.iconKey];

                            return (
                                <article
                                    key={service.slug}
                                    className="flex h-full flex-col justify-between bg-[#1d1d1d]/88 p-8 md:col-span-4 rounded-md"
                                >
                                    <div>
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <p className="mt-6 font-semibold tracking-[0.03em] text-sm text-accent/80">{service.title}</p>
                                        <h1 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-text">{service.subTitle}</h1>
                                        <p className="mt-4 text-sm leading-7 text-[#bac9cc]">{service.description}</p>
                                    </div>

                                    <div className="mt-8">
                                        <ul className="space-y-3">
                                            {service.solutions.slice(0, 3).map((solution) => (
                                                <li key={`${service.slug}-${solution}`} className="flex items-start gap-3 text-xs font-medium text-[#bac9cc]">
                                                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                                    <span>{solution}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/servicios/${service.slug}`}
                                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-text"
                                        >
                                            Ver detalle
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}

                        <article className="flex flex-col items-center justify-between gap-12 bg-[#1c1b1b] p-10 rounded-md ring-border/20 md:col-span-12 md:flex-row">
                            <div className="max-w-2xl">
                                <div className="mb-6 flex items-center gap-4">
                                    <Sparkles className="h-10 w-10 text-accent" />
                                    <h3 className="text-3xl font-bold text-text">Refactorización y Mejora de Código Front End</h3>
                                </div>
                                <p className="text-lg leading-relaxed text-[#bac9cc]">
                                    Transformamos deuda tecnica en activos estrategicos. Optimizamos sistemas existentes para mejorar la velocidad, mantenibilidad y seguridad sin interrumpir su operacion actual.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                                <div>
                                    <p className="mb-1 text-4xl font-bold text-accent">+40%</p>
                                    <p className="text-xs uppercase tracking-widest text-text/65">Performance Boost</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-4xl font-bold text-accent">-60%</p>
                                    <p className="text-xs uppercase tracking-widest text-text/65">Maintenance Cost</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="mt-20">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px w-12 bg-accent/80" />
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">Metodo de trabajo</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {processSteps.map((item) => (
                            <article key={item.step} className="bg-[#14242a]/25 p-6">
                                <p className="font-mono text-3xl font-semibold text-accent/80">{item.step}</p>
                                <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-text/70">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-20 mb-20 rounded-md bg-[#1c1b1b] p-10 text-center sm:p-14">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-accent">Proxima etapa</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-text sm:text-5xl">
                            Listo para construir una base tecnica mas solida
                        </h2>
                        <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
                            Si ya tienes un sistema en marcha o empiezas desde cero, definimos una ruta clara para construir con velocidad y sostenibilidad.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-accent/50 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                            >
                                Solicitar propuesta tecnica
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-text/85 transition hover:border-accent/50 hover:text-text"
                            >
                                Ver proyectos
                            </Link>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}
