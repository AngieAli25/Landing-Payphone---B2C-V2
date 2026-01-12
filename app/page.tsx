import { Header } from "@/components/Header";
// import { StickyBanner } from "@/components/StickyBanner";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { ProfessionalsCarousel } from "@/components/ProfessionalsCarousel";

import { Counters } from "@/components/Counters";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* <StickyBanner /> */}
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <HowItWorks />
        <ProfessionalsCarousel />

        <Counters />
        <TestimonialsSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
