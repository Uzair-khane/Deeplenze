import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Newshunt() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />

      <section className="pt-50 pb-30 container">
        <h1 className="text-white text-4xl font-bold">
          Newshunt
        </h1>
      </section>

      <Footer />
    </div>
  );
}