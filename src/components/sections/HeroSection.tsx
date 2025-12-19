import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-white pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Background element for visual appeal (Green/Blue gradient) */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-green-100 to-blue-100"></div>
        
        <div className="relative z-10">
          <Zap className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hemat Energi Hari Ini, <br className="hidden sm:inline"/> Selamatkan Bumi Esok Hari
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kurangi konsumsi listrik, manfaatkan energi terbarukan, dan beralih ke teknologi hijau.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#education">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-transform transform hover:scale-[1.02]">
                Pelajari Cara Hemat Energi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#campaign-form">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 transition-transform transform hover:scale-[1.02]">
                Daftar Kampanye
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;