export type EngineeringServiceIconKey = "monitor-smartphone" | "layers" | "globe";

type EngineeringServiceItem = {
    title: string;
    description: string;
    iconKey: EngineeringServiceIconKey;
};

export const engineeringServices: EngineeringServiceItem[] = [
    {
        title: "Desarrollo Frontend",
        description: "Building modern interfaces using Angular, React and modern web technologies.",
        iconKey: "monitor-smartphone",
    },
    {
        title: "Arquitectura de aplicaciones",
        description: "Designing scalable and maintainable web architectures.",
        iconKey: "layers",
    },
    {
        title: "Desarrollo de aplicaciones web",
        description: "Creating complete web applications with modern frameworks.",
        iconKey: "globe",
    },
];
