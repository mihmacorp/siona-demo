import Navbar from "./components/Navbar";
import BenefitsSection from "./components/sections/BenefitsSection";
import HeroSection from "./components/sections/HeroSection";
import SubHeroSection from "./components/sections/SubHeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SubHeroSection />
      <BenefitsSection />
    </>
  );
}
