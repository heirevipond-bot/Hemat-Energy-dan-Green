import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import RenewableEnergySection from "@/components/sections/RenewableEnergySection";
import ProductSection from "@/components/sections/ProductSection";
import CampaignFormSection from "@/components/sections/CampaignFormSection";
import ImpactSection from "@/components/sections/ImpactSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <EducationSection />
        <RenewableEnergySection />
        <ProductSection />
        <ImpactSection />
        <CampaignFormSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;