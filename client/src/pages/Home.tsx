/* Desert Futurism Design - Home Page
 * Hero with geometric patterns, services grid, products showcase
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Sparkles,
  Building2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Landmark,
  Lightbulb,
  ShoppingCart,
  Newspaper,
  Building,
  Briefcase,
  Cloud,
  Heart,
  Store,
} from "lucide-react";

// Image URLs
import HeroImage from "@/assets/images/hero.png";
// logs
import nalystLogo from "@/assets/images/nalyst.png";
import newsHuntLogo from "@/assets/images/newshunt_logo.png";
import AI_IMG from "@/assets/images/AI.jpeg";
import CYBER_IMG from "@/assets/images/CyberSecurity.webp";
import DIGITAL_IMG  from "@/assets/images/DigitalTransformation.webp";
import AWS  from "@/assets/images/AWSCloudManagement.webp";

const SMART_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/zxhLFuUlDPKEooqo.jpg";

export default function Home() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const ChevronIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  const services = [
    {
      icon: Brain,
      title: t("services.ai.title"),
      description: t("services.ai.description"),
      image: AI_IMG,
      color: "#00D4AA",
    },
    {
      icon: Shield,
      title: t("services.cyber.title"),
      description: t("services.cyber.description"),
      image: CYBER_IMG,
      color: "#C9A227",
    },
    {
      icon: Sparkles,
      title: t("services.digital.title"),
      description: t("services.digital.description"),
      image: DIGITAL_IMG,
      color: "#00D4AA",
    },
    {
      icon: Cloud,
      title: language === "en" ? "AWS Cloud Management" : "إدارة سحابة AWS",
      description:
        language === "en"
          ? "Comprehensive AWS cloud services for scalable and secure infrastructure."
          : "خدمات سحابة AWS الشاملة للبنية التحتية القابلة للتوسع والآمنة.",
      image: AWS,
      color: "#FF9900",
    },
  ];

  const products = [
    {
      name: t("products.nalyst.name"),
      description: t("products.nalyst.description"),
      icon: nalystLogo,
      url: "https://nalyst.ai", // link for Nalyst
    },
    {
      name: t("products.newshunt.name"),
      description: t("products.newshunt.description"),
      icon: newsHuntLogo,
      url: "https://newshunt.io", // link for Newshunt
    },
    {
      name: t("products.asaad.name"),
      description: t("products.asaad.description"),
      icon: newsHuntLogo,
      url: "https://example.com/asaad", // placeholder, change later
    },
    {
      name: t("products.khella.name"),
      description: t("products.khella.description"),
      icon: newsHuntLogo,
      url: "https://example.com/khella", // placeholder, change later
    },
    {
      name: t("products.4kast.name"),
      description: t("products.4kast.description"),
      icon: newsHuntLogo,
      url: "https://example.com/4kast", // placeholder, change later
    },
    {
      name: t("products.hr360.name"),
      description: t("products.hr360.description"),
      icon: newsHuntLogo,
      url: "https://example.com/hr360", // placeholder, change later
    },
  ];

  const industries = [
    {
      icon: Landmark,
      title: t("industries.government.title"),
      description: t("industries.government.description"),
    },
    {
      icon: Lightbulb,
      title: t("industries.thinktanks.title"),
      description: t("industries.thinktanks.description"),
    },
    {
      icon: ShoppingCart,
      title: t("industries.ecommerce.title"),
      description: t("industries.ecommerce.description"),
    },
    {
      icon: Newspaper,
      title: t("industries.media.title"),
      description: t("industries.media.description"),
    },
    {
      icon: Building,
      title: t("industries.municipalities.title"),
      description: t("industries.municipalities.description"),
    },
    {
      icon: Briefcase,
      title: t("industries.private.title"),
      description: t("industries.private.description"),
    },
    {
      icon: Heart,
      title: language === "en" ? "Healthcare" : "الرعاية الصحية",
      description:
        language === "en"
          ? "Digital health solutions for healthcare providers."
          : "حلول الصحة الرقمية لمقدمي الرعاية الصحية.",
    },
    {
      icon: Store,
      title: language === "en" ? "Retail" : "التجزئة",
      description:
        language === "en"
          ? "Omnichannel retail solutions for modern shopping."
          : "حلول التجزئة متعددة القنوات للتسوق الحديث.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-sky-800 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div
            className={`max-w-4xl ${dir === "rtl" ? "mr-0 ml-auto text-right" : ""}`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === "rtl" ? "font-arabic" : "font-body"}`}
              >
                {language === "en"
                  ? "Aligned with Vision 2030"
                  : "متوافق مع رؤية 2030"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block text-black">{t("hero.title")}</span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-[#32a7b5]">
                {t("hero.subtitle")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className={`text-lg md:text-xl text-black mb-12 max-w-2xl leading-relaxed ${dir === "rtl" ? "font-arabic" : "font-body"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className={`flex flex-wrap gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/services">
                <motion.button
                  className={`group flex items-center gap-2 px-8 py-4 bg-[#32a7b5] text-white font-bold rounded-xl shadow-lg hover:bg-[#2a8f9a] hover:-translate-y-1 transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("hero.cta.services")}
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className={`flex items-center gap-2 px-8 py-4 border-2 border-[#32a7b5] text-black font-bold rounded-xl hover:bg-[#32a7b5]/10 hover:-translate-y-1 transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("hero.cta.contact")}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden bg-slate-200">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            className={`text-center mb-16 max-w-3xl mx-auto ${dir === "rtl" ? "font-arabic" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#32A7B51A] text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider">
              {language === "en" ? "What We Do" : "ما نقدمه"}
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
            >
              {t("services.title")}
            </h2>
            <p
              className={`text-slate-700 text-lg ${dir === "rtl" ? "font-arabic" : "font-body"}`}
            >
              {t("services.subtitle")}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-yellow-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div
                  className={`relative p-8 ${dir === "rtl" ? "text-right" : ""}`}
                >
                  
                  <h3
                    className={`text-2xl font-bold text-slate-800 mb-3 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-slate-700 mb-6 leading-relaxed ${dir === "rtl" ? "font-arabic" : "font-body"}`}
                  >
                    {service.description}
                  </p>

                  <Link href="/services">
                    <motion.span
                      className={`inline-flex items-center gap-2 text-sm font-bold text-[#32a7b5]  cursor-pointer hover:underline ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                      whileHover={{ x: dir === "rtl" ? -5 : 5 }}
                    >
                      {t("services.learnMore")}
                      <ChevronIcon className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative bg-slate-100">
        <div className="container mx-auto px-4 relative">
          {/* Section Heading */}
          <motion.div
            className={`text-center mb-16 max-w-3xl mx-auto ${dir === "rtl" ? "font-arabic" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#32A7B51A] text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider">
              {language === "en" ? "Our Solutions" : "حلولنا"}
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-700 mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
            >
              {t("products.title")}
            </h2>
            <p
              className={`text-slate-600 text-lg ${dir === "rtl" ? "font-arabic" : "font-body"}`}
            >
              {t("products.subtitle")}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-2xl bg-white border border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300 ${dir === "rtl" ? "text-right" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <a
                  href={product.url} // external URL
                  target="_blank" // open in new tab
                  rel="noopener noreferrer" // security best practice
                  className="group" // preserve hover effects
                >
                  <div className="text-5xl   -mt-8 transform group-hover:scale-110 transition-transform duration-300 flex justify-center items-center ">
                    <img
                      src={product.icon}
                      alt={product.name}
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                </a>

                {/* Product Title */}
                {/* <h3
                  className={`text-xl font-bold text-slate-700 mb-3 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
                >
                  {product.name}
                </h3> */}

                {/* Product Description */}
                <p
                  className={`text-slate-600 text-sm text-center leading-relaxed -mt-8 ${dir === "rtl" ? "font-arabic" : "font-body"}`}
                >
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/products">
              <motion.button
                className={`inline-flex items-center gap-2 px-8 py-4 bg-[#32A7B5] text-white rounded-xl font-bold hover:bg-sky-500 transition-colors ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("common.viewAll")}
                <ChevronIcon className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            className={`text-center mb-16 max-w-3xl mx-auto ${dir === "rtl" ? "font-arabic" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#32A7B51A] text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider">
              {language === "en" ? "Sectors" : "القطاعات"}
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-700 mb-6 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
            >
              {t("industries.title")}
            </h2>
            <p
              className={`text-slate-600 text-lg ${dir === "rtl" ? "font-arabic" : "font-body"}`}
            >
              {t("industries.subtitle")}
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  items-center lg:grid-cols-3 gap-8 ">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-2xl bg-white border border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300 
flex flex-col items-center text-center h-full
${dir === "rtl" ? "font-arabic" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl  text-[#32a7b5]  flex items-center justify-center mb-6  transition-colors duration-300">
                  <industry.icon className="w-12 h-12 " />
                </div>

                {/* Industry Title */}
                <h3
                  className={`text-xl font-bold text-slate-700 mb-3 transition-colors ${dir === "rtl" ? "font-arabic" : "font-display"}`}
                >
                  {industry.title}
                </h3>

                {/* Industry Description */}
                <p
                  className={`text-slate-600 text-sm leading-relaxed ${dir === "rtl" ? "font-arabic" : "font-body"}`}
                >
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/industries">
              <motion.button
                className={`inline-flex items-center gap-2 px-8 py-4 bg-[#32A7B5] text-white rounded-xl font-bold hover:bg-sky-500 transition-colors ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("common.viewAll")}
                <ChevronIcon className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#E0F2F4]">
        <div className="absolute inset-0 bg-yellow-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className={`text-center max-w-4xl mx-auto ${dir === "rtl" ? "font-arabic" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Heading */}
            <h2
              className={`text-4xl md:text-6xl font-bold text-slate-700 mb-8 ${dir === "rtl" ? "font-arabic" : "font-display"}`}
            >
              {language === "en"
                ? "Ready to Transform Your Business?"
                : "هل أنت مستعد لتحويل أعمالك؟"}
            </h2>

            {/* Section Description */}
            <p
              className={`text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${dir === "rtl" ? "font-arabic" : "font-body"}`}
            >
              {language === "en"
                ? "Partner with us to unlock the full potential of digital innovation and drive your organization forward."
                : "شاركنا لإطلاق الإمكانات الكاملة للابتكار الرقمي ودفع مؤسستك إلى الأمام."}
            </p>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5  text-[#32A7B5] font-bold text-lg rounded-xl shadow-xl border-2 border-[#32A7B5] hover:-translate-y-1 transition-all duration-300 ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.cta.contact")}
                <ArrowIcon className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
