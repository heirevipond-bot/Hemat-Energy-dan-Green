import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lightbulb, List, Zap } from "lucide-react";
import React from "react";

interface Detail {
  title: string;
  icon: React.ElementType;
  tips: string[];
  benefits: string[];
  interestCategory: "Edukasi" | "Energi Terbarukan" | "Produk";
}

interface EducationDetailModalProps {
  detail: Detail | null;
  isOpen: boolean;
  onClose: () => void;
  onCtaClick: (category: Detail["interestCategory"]) => void;
}

const EducationDetailModal: React.FC<EducationDetailModalProps> = ({
  detail,
  isOpen,
  onClose,
  onCtaClick,
}) => {
  if (!detail) return null;

  const IconComponent = detail.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg p-6">
        <DialogHeader className="text-left">
          <div className="flex items-center space-x-3 text-green-600">
            <IconComponent className="w-8 h-8" />
            <DialogTitle className="text-2xl font-bold text-primary">
              {detail.title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-md mt-2">
            Tips & Trik Hemat Energi
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4 max-h-[70vh] overflow-y-auto">
          {/* Tips & Trik */}
          <div>
            <h3 className="flex items-center font-semibold text-lg mb-3 text-gray-700">
              <List className="w-5 h-5 mr-2 text-green-500" /> Tips Praktis
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside pl-2">
              {detail.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Manfaat */}
          <div>
            <h3 className="flex items-center font-semibold text-lg mb-3 text-gray-700">
              <CheckCircle className="w-5 h-5 mr-2 text-blue-500" /> Manfaat yang Kamu Dapatkan
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside pl-2">
              {detail.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => onCtaClick(detail.interestCategory)}
          >
            Gabung Kampanye Hemat Energi <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationDetailModal;