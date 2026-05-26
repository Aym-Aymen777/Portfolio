import React from "react";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import StackSection from "./components/sections/StackSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ServicesSection from "./components/sections/ServicesSection";
import {
  CertsSection,
  ContentSection,
  BlogSection,
} from "./components/sections/ContentSections";
import ContactSection from "./components/sections/ContactSection";
import { SectionDivider } from "./components/ui/index";
import Ribbons from "./components/ui/Ribbons";
import SplashCursor from "./components/ui/Splash";

const App: React.FC = () => (
  <>
    <Background />

    {/*   <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Ribbons
        baseThickness={30}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={true}
        enableShaderEffect={false}
      />
    </div>
 */}
    <Navbar />

    <main className="relative z-10">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#00ccff"
      />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <StackSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <CaseStudiesSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <CertsSection />
      <SectionDivider />
      <ContentSection />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <ContactSection />
    </main>

    <Footer />
  </>
);

export default App;
