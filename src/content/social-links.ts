export type SocialIconKey = "linkedin" | "github" | "email";

export const LINKEDIN_URL = "https://www.linkedin.com/in/gamalielaq/";

export const socialLinks: Array<{ href: string; label: string; iconKey: SocialIconKey }> = [
    { href: LINKEDIN_URL, label: "LinkedIn", iconKey: "linkedin" },
    { href: "https://github.com/gamalielaq", label: "GitHub", iconKey: "github" },
    { href: "mailto:gamaliel.aq96@gmail.com", label: "Email", iconKey: "email" },
];
