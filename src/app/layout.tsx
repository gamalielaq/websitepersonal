import type { Metadata } from "next";
import Footer from "@/shared/components/layout/Footer";
import NavigationMenu from "@/shared/components/layout/NavigationMenu";
import PageTransition from "@/shared/components/layout/PageTransition";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/shared/utils/cn";
import { siteConfig } from "@/content/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: siteConfig.openGraph,
    twitter: siteConfig.twitter,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={cn("font-sans", geist.variable)}>
            <body className="text-text antialiased">
                <div className="relative min-h-screen overflow-x-hidden">
                    <NavigationMenu />
                    <div className="flex min-h-screen flex-col pt-24">
                        <PageTransition>{children}</PageTransition>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
