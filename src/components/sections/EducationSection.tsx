import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, PowerOff, Thermometer, Zap } from "lucide-react";
import React, { useState } from "react";
import EducationDetailModal from "../EducationDetailModal";

interface EducationItem {
  icon: React.ElementType;
  title: string;
  description: string;
  interestCategory: "Edukasi" | "Energi Terbarukan" | "Produk";
  tips: string[];
  benefits: string[];
}

const educationItems: EducationItem[] = [
  {
    icon: PowerOff,
    title: "Matikan Perangkat Saat Tidak Digunakan",
    description: "Selalu matikan perangkat elektronik dan cabut charger saat tidak digunakan untuk menghindari 'phantom load'.",
    interestCategory: "Edukasi",
    tips: [
      "Cabut charger meski tidak digunakan (hindari phantom load)",
      "Gunakan power strip dengan tombol on/off",
      "Matikan TV, komputer, dan WiFi saat tidur",
      "Hindari mode standby terlalu lama",
    ],
    benefits: [
      "Menghemat hingga 10–15% listrik bulanan",
      "Umur perangkat lebih panjang",
      "Mengurangi risiko korsleting",
      "Tagihan listrik lebih ringan",
    ],
  },
  {
    icon: Lightbulb,
    title: "Beralih ke Lampu LED",
    description: "Beralih ke lampu LED yang jauh lebih hemat energi dan memiliki masa pakai yang lebih lama daripada lampu pijar tradisional.",
    interestCategory: "Produk",
    tips: [
      "Ganti lampu pijar dengan LED",
      "Pilih LED sesuai kebutuhan lumen ruangan",
      "Matikan lampu saat siang hari",
      "Gunakan sensor cahaya atau smart lamp",
    ],
    benefits: [
      "Hemat listrik hingga 80%",
      "Masa pakai 10x lebih lama",
      "Panas lebih rendah",
      "Lebih ramah lingkungan",
    ],
  },
  {
    icon: Thermometer,
    title: "Gunakan AC Secara Bijak",
    description: "Setel suhu AC pada 24-26°C. Gunakan timer dan pastikan ruangan tertutup rapat saat AC menyala.",
    interestCategory: "Edukasi",
    tips: [
      "Set suhu ideal di 24–26°C",
      "Gunakan timer saat tidur",
      "Tutup pintu dan jendela rapat",
      "Bersihkan filter AC secara rutin",
    ],
    benefits: [
      "Menghemat listrik hingga 20–30%",
      "Udara lebih sehat",
      "AC lebih awet",
      "Tagihan listrik stabil",
    ],
  },
  {
    icon: Zap,
    title: "Pilih Peralatan Hemat Energi",
    description: "Pilih peralatan rumah tangga (kulkas, mesin cuci) yang memiliki label efisiensi energi tinggi.",
    interestCategory: "Produk",
    tips: [
      "Pilih produk berlabel hemat energi",
      "Gunakan mesin cuci mode eco",
      "Atur kulkas di suhu optimal",
      "Gunakan smart plug untuk monitoring",
    ],
    benefits: [
      "Konsumsi listrik lebih efisien",
      "Biaya listrik jangka panjang turun",
      "Mendukung gaya hidup hijau",
      "Lebih ramah lingkungan",
    ],
  },
];

// Utility function to scroll to the campaign form and set the interest category
const scrollToFormAndAutofill = (category: EducationItem["interestCategory"]) => {
  const formElement = document.getElementById("campaign-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
    
    // Dispatch a custom event to notify the form component to autofill
    window.dispatchEvent(new CustomEvent('autofill-interest', { detail: category }));
  }
};

const EducationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);

  const handleCardClick = (item: EducationItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCtaClick = (category: EducationItem["interestCategory"]) => {
    setIsModalOpen(false);
    scrollToFormAndAutofill(category);
  };

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          4 Cara Mudah Mengurangi Konsumsi Listrik
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer border-t-4 border-green-500"
              onClick={() => handleCardClick(item)}
            >
              <CardHeader>
                <item.icon className="w-10 h-10 text-green-600 mb-3" />
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <EducationDetailModal
        detail={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCtaClick={handleCtaClick}
      />
    </section>
  );
};

export default EducationSection;