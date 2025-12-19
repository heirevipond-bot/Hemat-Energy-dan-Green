import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertUserInterest } from "@/integrations/supabase/mutations";
import { showSuccess, showError } from "@/utils/toast";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";

const INTEREST_CATEGORIES = ["Edukasi", "Energi Terbarukan", "Produk"] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi minimal 2 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  interest_category: z.enum(INTEREST_CATEGORIES, {
    required_error: "Pilih kategori minat.",
  }),
});

type CampaignFormValues = z.infer<typeof formSchema>;
type InterestCategory = CampaignFormValues["interest_category"];

const CampaignFormSection = () => {
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest_category: undefined,
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  // Effect to handle autofill from Education cards
  useEffect(() => {
    const handleAutofill = (event: Event) => {
      const customEvent = event as CustomEvent<InterestCategory>;
      const category = customEvent.detail;
      
      if (category && INTEREST_CATEGORIES.includes(category)) {
        form.setValue("interest_category", category, { shouldValidate: true });
      }
    };

    window.addEventListener('autofill-interest', handleAutofill as EventListener);
    
    return () => {
      window.removeEventListener('autofill-interest', handleAutofill as EventListener);
    };
  }, [form]);

  const onSubmit = async (values: CampaignFormValues) => {
    setIsLoading(true);
    try {
      await insertUserInterest(values);
      showSuccess("Terima kasih! Anda telah terdaftar dalam kampanye kami.");
      form.reset({
        name: "",
        email: "",
        interest_category: undefined,
      });
    } catch (error) {
      showError("Gagal mendaftar. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="campaign-form" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Bergabunglah dengan Kampanye Kami
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Daftar sekarang untuk mendapatkan tips eksklusif, informasi terbaru tentang teknologi hijau, dan penawaran produk hemat energi.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Masukkan email Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interest_category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori Minat</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori minat Anda" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Edukasi">Edukasi Hemat Energi</SelectItem>
                      <SelectItem value="Energi Terbarukan">Energi Terbarukan</SelectItem>
                      <SelectItem value="Produk">Produk Hemat Energi</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Ikut Kampanye"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CampaignFormSection;