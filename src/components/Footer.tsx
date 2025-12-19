import { Facebook, Instagram, Twitter, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Mission Statement */}
          <div>
            <div className="flex items-center space-x-2 font-bold text-xl mb-4 text-green-400">
              <Zap className="w-6 h-6" />
              <span>GreenTech</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Misi kami adalah mengedukasi dan memberdayakan masyarakat untuk beralih ke gaya hidup hemat energi dan mendukung teknologi hijau demi masa depan yang berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#education" className="hover:text-green-400 transition-colors">Edukasi</a></li>
              <li><a href="#renewable" className="hover:text-green-400 transition-colors">Energi Terbarukan</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Produk</a></li>
              <li><a href="#campaign-form" className="hover:text-green-400 transition-colors">Daftar Kampanye</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kampanye Hemat Energi & Green Technology. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;