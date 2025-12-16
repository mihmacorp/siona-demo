import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BenefitsSection from "./components/sections/BenefitsSection";
import FinalCtaSection from "./components/sections/CTASection";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorks";
import SubHeroSection from "./components/sections/SubHeroSection";
import WhoItsForSection from "./components/sections/WhoIsItForSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SubHeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
