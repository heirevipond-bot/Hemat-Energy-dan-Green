import { Button } from "@/components/ui/button";
import { Sun, Wind } from "lucide-react";

const RenewableEnergySection = () => {
  return (
    <section id="renewable" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Masa Depan Energi: Terbarukan
        </h2>
        
        <div className="space-y-12">
          {/* Panel Surya */}
          <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-xl shadow-lg">
            <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-3">Panel Surya (Solar Panel)</h3>
              <p className="text-muted-foreground mb-4">
                Panel surya mengubah sinar matahari menjadi listrik melalui efek fotovoltaik. Ini adalah cara paling populer bagi pemilik rumah untuk menghasilkan energi bersih.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengurangi tagihan listrik secara signifikan.</li>
                <li>Sumber energi yang bersih dan tak terbatas.</li>
                <li>Meningkatkan nilai properti.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              {/* Placeholder for Illustration */}
              <div className="h-48 bg-yellow-200 rounded-lg flex items-center justify-center text-gray-600">
                Ilustrasi Panel Surya
              </div>
            </div>
          </div>

          {/* Energi Angin */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 md:p-10 rounded-xl shadow-lg">
            <div className="md:w-1/2 md:pl-10 mb-6 md:mb-0">
              <Wind className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-3">Energi Angin</h3>
              <p className="text-muted-foreground mb-4">
                Turbin angin menangkap energi kinetik angin dan mengubahnya menjadi listrik. Ini adalah solusi skala besar yang berdampak positif pada lingkungan global.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Tidak menghasilkan emisi gas rumah kaca.</li>
                <li>Mengurangi ketergantungan pada bahan bakar fosil.</li>
                <li>Potensi besar di daerah pesisir dan dataran tinggi.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              {/* Placeholder for Illustration */}
              <div className="h-48 bg-blue-200 rounded-lg flex items-center justify-center text-gray-600">
                Ilustrasi Energi Angin
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Pelajari Energi Terbarukan Lebih Lanjut
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RenewableEnergySection;