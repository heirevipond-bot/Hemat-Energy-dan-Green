import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Home, Lightbulb } from "lucide-react";

const productItems = [
  {
    icon: Lightbulb,
    title: "Lampu LED Pintar",
    description: "Hemat hingga 80% energi dibandingkan lampu biasa. Dapat diatur melalui aplikasi.",
    saving: "Hemat 80%",
    imagePlaceholder: "bg-yellow-100",
  },
  {
    icon: Zap,
    title: "Smart Plug (Stop Kontak Pintar)",
    description: "Otomatis mematikan daya ke perangkat saat tidak digunakan, menghilangkan 'phantom load'.",
    saving: "Hemat 10-15%",
    imagePlaceholder: "bg-gray-100",
  },
  {
    icon: Home,
    title: "Smart Thermostat",
    description: "Mengoptimalkan suhu AC/pemanas berdasarkan jadwal dan kehadiran Anda, mengurangi pemborosan.",
    saving: "Hemat 20%",
    imagePlaceholder: "bg-red-100",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Produk Pilihan Hemat Energi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productItems.map((product, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className={`h-40 ${product.imagePlaceholder} rounded-t-lg flex items-center justify-center`}>
                  <product.icon className="w-16 h-16 text-gray-600" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-green-600">
                    {product.saving}
                  </span>
                  <Button variant="secondary" size="sm" className="text-green-600 border border-green-300 hover:bg-green-50">
                    Saya Tertarik
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;