import { Leaf, TrendingUp, Users } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    { value: "30%", label: "Penghematan Listrik Rata-Rata", icon: TrendingUp },
    { value: "100+", label: "Rumah Telah Bergabung", icon: Users },
    { value: "Jutaan", label: "Ton CO2 Berhasil Dikurangi", icon: Leaf },
  ];

  const testimonial = {
    quote: "Sejak mengikuti kampanye ini dan beralih ke LED, tagihan listrik bulanan saya turun drastis. Sangat direkomendasikan!",
    name: "Budi Santoso",
    title: "Pemilik Rumah Tangga",
  };

  return (
    <section id="impact" className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Dampak Nyata yang Telah Kami Ciptakan
        </h2>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-green-700/50 rounded-lg shadow-xl">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-green-200" />
              <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
          <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
          <p className="font-semibold text-green-600">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;