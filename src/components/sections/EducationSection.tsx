import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, PowerOff, Thermometer, Zap } from "lucide-react";

const educationItems = [
  {
    icon: PowerOff,
    title: "Matikan Perangkat",
    description: "Selalu matikan perangkat elektronik dan cabut charger saat tidak digunakan untuk menghindari 'phantom load'.",
  },
  {
    icon: Lightbulb,
    title: "Gunakan Lampu LED",
    description: "Beralih ke lampu LED yang jauh lebih hemat energi dan memiliki masa pakai yang lebih lama daripada lampu pijar tradisional.",
  },
  {
    icon: Thermometer,
    title: "Atur Penggunaan AC",
    description: "Setel suhu AC pada 24-26°C. Gunakan timer dan pastikan ruangan tertutup rapat saat AC menyala.",
  },
  {
    icon: Zap,
    title: "Peralatan Hemat Energi",
    description: "Pilih peralatan rumah tangga (kulkas, mesin cuci) yang memiliki label efisiensi energi tinggi.",
  },
];

const EducationSection = () => {
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
    </section>
  );
};

export default EducationSection;