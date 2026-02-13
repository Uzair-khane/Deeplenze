import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Keela() {
  const { t, dir, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background text-black">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Kheela</h1>
          <p>Kheela product page content...</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}