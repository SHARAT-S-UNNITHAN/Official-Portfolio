import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { JourneySection } from "@/sections/JourneySection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <JourneySection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
