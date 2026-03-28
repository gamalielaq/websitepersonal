import SectionDivider from "@/shared/components/layout/SectionDivider";
import AngularArchitecturePracticeSection from "@/features/home/components/AngularArchitecturePracticeSection";
import ClosingQuoteSection from "@/features/home/components/ClosingQuoteSection";
import ExperienceSection from "@/features/home/components/ExperienceSection";
import FrontendArchitectureSection from "@/features/home/components/FrontendArchitectureSection";
import HeroSection from "@/features/home/components/HeroSection";
import HomePreviewsSection from "@/features/home/components/HomePreviewsSection";
import ServicesSection from "@/features/home/components/ServicesSection";
import TechnicalSkillsSection from "@/features/home/components/TechnicalSkillsSection";
import TechSolarSystemSection from "@/features/home/components/TechSolarSystemSection";
import TechnologiesSection from "@/features/home/components/TechnologiesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <SectionDivider />
            <ServicesSection />
            <SectionDivider />
            <FrontendArchitectureSection />
            <SectionDivider />
            <AngularArchitecturePracticeSection />
            <SectionDivider />
            <TechnicalSkillsSection />
            <SectionDivider />
            <HomePreviewsSection />
            <SectionDivider />
            <TechnologiesSection />
            <SectionDivider />
            <TechSolarSystemSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <ClosingQuoteSection />
        </>
    );
}




