import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import React from "react";

const navItems = [
  { name: "Edukasi", href: "#education" },
  { name: "Terbarukan", href: "#renewable" },
  { name: "Produk", href: "#products" },
  { name: "Dampak", href: "#impact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <a href="#hero" className="flex items-center space-x-2 font-bold text-xl text-green-600">
          <Zap className="w-6 h-6" />
          <span>GreenTech</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="#campaign-form">
          <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700">
            Daftar Kampanye
          </Button>
        </a>
        
        {/* Mobile Menu Placeholder (For simplicity, I'll skip the full mobile menu implementation but ensure responsiveness) */}
        <a href="#campaign-form" className="md:hidden">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Daftar
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;