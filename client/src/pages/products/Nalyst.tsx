import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/assets/images/herosection.png";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";

import NalystImage from "@/assets/images/nalystcard.jpg";
import NalystImage2 from "@/assets/images/nalystimg2.jpg";


export default function Nalyst() {
  const { dir, language } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const nalystSections = [
    {
      id: 1,
      text: {
        en: "NALYST is more than a news aggregator—it helps you analyze, organize, and save information for future use. With customizable folders, categorized topics, and a personal research library, it’s designed for students, researchers, and professionals who want more than just headlines. Track trends, uncover insights, and access structured knowledge from multiple sources and languages. NALYST transforms daily news into meaningful research, empowering smarter decisions and long-term understanding.",

        ar: "نالست ليس مجرد منصة لتجميع الأخبار—بل يساعدك على تحليل المعلومات وتنظيمها وحفظها للاستخدام المستقبلي. من خلال مجلدات قابلة للتخصيص، ومواضيع مصنفة، ومكتبة بحث شخصية، تم تصميمه للطلاب والباحثين والمهنيين الذين يبحثون عن أكثر من مجرد عناوين. تابع الاتجاهات، واكتشف الرؤى، واطلع على معرفة منظمة من مصادر ولغات متعددة. يحول نالست الأخبار اليومية إلى أبحاث ذات معنى، مما يمكّنك من اتخاذ قرارات أذكى وفهم طويل المدى."
      },
      image: NalystImage,
    },
    {
      id: 2,
      text: {
        en: "NALYST brings the world’s news to your fingertips, turning it into organized, actionable knowledge. From global headlines to niche topics, you can save content your way. With AI-driven tools, personalized libraries, and trend tracking, staying informed becomes smarter, faster, and more meaningful. Discover patterns, analyze developments, and turn everyday news into research-ready insights—all in one platform for curious minds, professionals, and knowledge seekers who want more than just stories.",

        ar: "يجلب نالست أخبار العالم إلى متناول يدك، ويحوّلها إلى معرفة منظمة وقابلة للتنفيذ. من العناوين العالمية إلى المواضيع المتخصصة، يمكنك حفظ المحتوى بالطريقة التي تناسبك. بفضل أدوات مدعومة بالذكاء الاصطناعي، ومكتبات مخصصة، وتتبع الاتجاهات، يصبح البقاء على اطلاع أكثر ذكاءً وسرعةً وفائدة. اكتشف الأنماط، وحلل التطورات، وحوّل الأخبار اليومية إلى رؤى جاهزة للبحث—كل ذلك في منصة واحدة للعقول الفضولية والمهنيين والباحثين عن المعرفة."
      },
      image: NalystImage2,
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
            className="w-full h-full object-cover opacity-87"
          />
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
                ? "AI-Powered Research Platform"
                : "منصة بحث مدعومة بالذكاء الاصطناعي"}
            </span>

            {/* Title */}
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"
                }`}
            >
              {language === "en" ? "Beyond Reading." : "أبعد من القراءة."}
            </h1>

            {/* Description */}
            <p
              className={`text-xl text-white leading-relaxed mb-10 ${dir === "rtl" ? "font-arabic" : "font-body"
                }`}
            >
              {language === "en"
                ? "Turn news into structured knowledge with AI-powered research."
                : "حوّل الأخبار إلى معرفة منظمة باستخدام أدوات بحث مدعومة بالذكاء الاصطناعي."}
            </p>

            {/* Button */}
            <div
              className={`flex justify-center ${dir === "rtl" ? "flex-row-reverse" : ""
                }`}
            >
              <a
                href="https://www.deeplenz.ai/#nalyst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`group flex items-center gap-2 px-8 py-4 bg-[#32a7b5] text-white font-bold rounded-xl shadow-lg hover:bg-[#2a8f9a] hover:-translate-y-1 transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"
                    }`}
                >
                  {language === "en" ? "Visit Nalyst" : "زيارة ناليست"}
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* little detaild section */}


     <section className="relative py-10 px-4 md:px-6 bg-[#e2e8f0]">
  <h1 className="text-4xl md:text-6xl font-bold text-[#314158] pl-5 md:pl-12">
    Nalyst
  </h1>

  <div className="container pt-12 mx-auto px-4 md:px-12">
    {nalystSections.map((section, index) => (
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
            className={`px-2 md:px-0 text-base md:text-lg text-black leading-normal md:leading-relaxed ${language === "ar"
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
            alt="Nalyst illustration"
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
