import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/assets/images/herosection.png";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

import NewshuntImage from "@/assets/images/nalystcard.jpg";
import NewshuntImage2 from "@/assets/images/nalystimg2.jpg"; // Add your second image

export default function Newshunt() {
  const { dir, language } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;



  const newshuntSections = [
    {
      id: 1,
      text: {
        en: "Newshunt transforms how you stay informed by bringing together news from thousands of global sources onto one streamlined platform. Track breaking headlines from major outlets, regional stories from local publishers, and specialized coverage from expert journalists—all in one place. Tailor your feed by country, source, language, and category. Archive important articles with ease, and never miss what matters. With multilingual support and smart filtering, Newshunt delivers news that fits your world.",

        ar: "يحول نيوزهنت طريقة متابعتك للأخبار من خلال جمع الأخبار من آلاف المصادر العالمية على منصة واحدة مبسطة. تتبع العناوين العاجلة من وسائل الإعلام الكبرى، والقصص الإقليمية من الناشرين المحليين، والتغطية المتخصصة من الصحفيين الخبراء—كل ذلك في مكان واحد. خصص موجزك حسب البلد والمصدر واللغة والفئة. احفظ المقالات المهمة بسهولة، ولن تفوتك أي أخبار مهمة."
      },
      image: NewshuntImage,
    },
    {
      id: 2,
      text: {
        en: "Discover what's trending with Newshunt's intelligent news engine. Browse diverse topics—politics, business, technology, culture, entertainment, and more—curated from trusted sources worldwide. Identify emerging trends before they go mainstream with real-time updates and personalized recommendations. Newshunt goes beyond headlines, delivering context, credibility, and comprehensive coverage in the languages you speak. Stay informed, stay ahead.",

        ar: "اكتشف الأخبار الرائجة مع محرك الأخبار الذكي من نيوزهنت. تصفح مواضيع متنوعة—السياسة والأعمال والتكنولوجيا والثقافة والترفيه والمزيد—منسقة من مصادر موثوقة عالميًا. تعرف على الاتجاهات الناشئة قبل انتشارها مع التحديثات الفورية والتوصيات المخصصة. يتجاوز نيوزهنت العناوين الرئيسية، ويقدم السياق والمصداقية والتغطية الشاملة باللغات التي تتحدثها."
      },
      image: NewshuntImage2,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
              {/* Blue semi-transparent dark overlay */}
    <div className="absolute inset-0 bg-blue-900/40"></div>
          {/* Light Overlay */}
          <div className="absolute inset-0" />
        </div>

        {/* Gradient + Blur Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === "rtl" ? "font-arabic" : ""
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span
              className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === "rtl" ? "font-arabic" : "font-body"
                }`}
            >
              {language === "en"
                ? "Global News Aggregator"
                : "مجمع الأخبار العالمية"}
            </span>

            {/* Title */}
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"
                }`}
            >
              {language === "en"
                ? "Hunt The News That Matters"
                : "اصطد الأخبار المهمة"}
            </h1>

            {/* Description */}
            <p
              className={`text-xl text-white leading-relaxed mb-10 ${dir === "rtl" ? "font-arabic" : "font-body"
                }`}
            >
              {language === "en"
                ? "Thousands of sources. Your language. One unified feed."
                : "آلاف المصادر. لغتك. موجز واحد موحد."}
            </p>

            {/* Button */}
            <div
              className={`flex justify-center ${dir === "rtl" ? "flex-row-reverse" : ""
                }`}
            >
              <a
                href="https://newshunt.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`group flex items-center gap-2 px-8 py-4 bg-[#32a7b5] text-white font-bold rounded-xl shadow-lg hover:bg-[#2a8f9a] hover:-translate-y-1 transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"
                    }`}
                >
                  {language === "en" ? "Visit Newshunt" : "زيارة نيوزهنت"}
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="relative py-20 px-4 md:px-6 bg-[#e2e8f0]">
        <h1 className={`text-4xl md:text-6xl font-bold text-[#314158] pl-4 md:pl-12 ${dir === "rtl" ? "font-arabic text-right pr-4 md:pr-12 pl-0" : ""
          }`}>
          {language === "en" ? "Newshunt" : "نيوزهنت"}
        </h1>

        <div className="container pt-12 mx-auto px-4 md:px-12 ">
          {newshuntSections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-20 md:mb-32 
          ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text */}
              <motion.div
                className={`md:w-1/2 order-1 ${language === "ar" ? "text-right" : "text-left"
                  }`}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p
                  className={`text-base md:text-lg text-black leading-normal md:leading-relaxed ${language === "ar"
                      ? "text-right font-arabic"
                      : "text-justify font-body"
                    }`}
                >
                  {section.text[language]}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                className="md:w-1/2 order-2"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={section.image}
                  alt={`Newshunt illustration ${section.id}`}
                  className="w-full bg-[#f5f5f5] h-[300px] md:h-[430px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}