import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import Container from "./Container";
import { socialLinks, type SocialIconKey } from "@/content/social-links";

const socialIconMap: Record<SocialIconKey, LucideIcon> = {
    linkedin: Linkedin,
    github: Github,
    email: Mail,
};

export default function Footer() {
    return (
        <footer id="contacto" className="border-t border-border/80">
            <Container className="py-10">
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-text">Contacto</p>
                    {/* <h2 className="mt-3 text-lg font-semibold text-text">Gamaliel Abanto</h2> */}
                    <div className="mt-4 space-y-2 text-sm text-text/70">
                        <p>
                            <span className="font-semibold text-text">E-mail de contacto:</span> gamaliel.aq96@gmail.com
                        </p>
                        <p className="inline-flex items-center gap-2 text-text/70">
                            <MapPin className="h-4 w-4 text-text" />
                            Ubicación: Lima - Perú
                        </p>
                    </div>

                    <nav className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-text/70">
                        {socialLinks.map((link) => {
                            const Icon = socialIconMap[link.iconKey];
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                    className="flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition duration-300 hover:border-accent hover:text-text"
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
