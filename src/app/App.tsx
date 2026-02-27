import { AmbientBackground } from "./components/AmbientBackground";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PainSection } from "./components/PainSection";
import { MythsSection } from "./components/MythsSection";
import { MethodSection } from "./components/MethodSection";
import { StepsSection } from "./components/StepsSection";
import { TransformationSection } from "./components/TransformationSection";
import { WhatYouGetSection } from "./components/WhatYouGetSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { OfferSection } from "./components/OfferSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { SectionTransition } from "./components/SectionTransition";

export default function App() {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundColor: "#0A0A0F",
        fontFamily: "'Inter', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      {/* Global ambient background system */}
      <AmbientBackground />

      {/* UI Layer */}
      <div className="relative z-[2]">
        <ScrollProgressBar />
        <Navbar />
        <HeroSection />
        <SectionTransition variant="neutral" />
        <PainSection />
        <SectionTransition variant="warm" />
        <MythsSection />
        <SectionTransition variant="green" />
        <MethodSection />
        <SectionTransition variant="neutral" />
        <StepsSection />
        <TransformationSection />
        <SectionTransition variant="green" />
        <WhatYouGetSection />
        <SectionTransition variant="neutral" />
        <TestimonialsSection />
        <SectionTransition variant="green" />
        <OfferSection />
        <SectionTransition variant="neutral" />
        <FAQSection />
        <SectionTransition variant="green" />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
