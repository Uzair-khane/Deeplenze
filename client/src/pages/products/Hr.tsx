import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hr() {
  const { t, dir, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background text-black">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Hr</h1>
          <p>Hr product page content...</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}