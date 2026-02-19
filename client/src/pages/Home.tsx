/* Desert Futurism Design - Home Page
 * Hero with geometric patterns, services grid, products showcase
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { Link } from "wouter";
import { useState } from "react";
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
import HeroImage from "@/assets/images/herosection.png";
// logs
import nalystLogo from "@/assets/images/nalyst.png";
import newsHuntLogo from "@/assets/images/newshunt_logo.png";
import kastLogo from "@/assets/images/4kastLogo.svg";
import hr360Logo from "@/assets/images/Hr360Logo.svg";
import khellaLogo from "@/assets/images/khellaLogo.svg";
import assadLogo from "@/assets/images/assadLogo.svg";
import AI_IMG from "@/assets/images/AI.png";
import CYBER_IMG from "@/assets/images/CyberSecurity.png";
import DIGITAL_IMG  from "@/assets/images/DigitalTransformation.jpeg";
import AWS  from "@/assets/images/AWSCloudManagement.jpeg";
const galleryImages = [
  AI_IMG,
  CYBER_IMG,
  DIGITAL_IMG,
  AWS,
  AI_IMG,
  CYBER_IMG,
  DIGITAL_IMG,
  AWS,
  AI_IMG,
  CYBER_IMG,
  DIGITAL_IMG,
  AWS,
 
];
  const spans = [
    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-4",
    "col-span-12 md:col-span-4",
    "col-span-6 md:col-span-3",
    "col-span-6 md:col-span-6",
    "col-span-12 md:col-span-3",
  ];


const SMART_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/zxhLFuUlDPKEooqo.jpg";

export default function Home() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const ChevronIcon = dir === "rtl" ? ChevronLeft : ChevronRight;
const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      url: "/products/nalyst", // Internal route to Nalyst page
    },
    {
      name: t("products.newshunt.name"),
      description: t("products.newshunt.description"),
      icon: newsHuntLogo,
      url: "/products/newshunt", // Internal route to Newshunt page
    },
    {
      name: t("products.asaad.name"),
      description: t("products.asaad.description"),
      icon: assadLogo,
      url: "/products/asaad", // You'll need to create Asaad.tsx
     
      // placeholder, change later
    },
    {
      name: t("products.khella.name"),
      description: t("products.khella.description"),
   
      url: "/products/khella", // You'll need to create Khella.tsx
      icon: khellaLogo,
     // placeholder, change later
    },
    {
      name: t("products.4kast.name"),
      description: t("products.4kast.description"),
      url: "/products/4kast", // You'll need to create 4kast.tsx
      icon: kastLogo,
     // placeholder, change later
    },
    {
      name: t("products.hr360.name"),
      description: t("products.hr360.description"),
      url: "/products/hr360", // You'll need to create Hr360.tsx
      icon: hr360Logo,
      // placeholder, change later
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
// Add this helper ABOVE return inside your component
const TypingText = ({
  text,
  delayOffset = 0,
  speed = 0.08, // typing speed (bigger = slower)
  className,
}: {
  text: string;
  delayOffset?: number;
  speed?: number;
  className?: string;
}) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delayOffset + index * speed,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};


const FloatingProducts = ({
  products,
  color = "#1c7f87",
  repeat = 3,
}: {
  products: string[];
  color?: string;
  repeat?: number;
}) => {
  const repeatedProducts = Array.from({ length: repeat }).flatMap(() => products);

  // store used positions to avoid collision
  const positions: { top: number; left: number }[] = [];

  const getSafePosition = () => {
    let top: number, left: number, attempts = 0;

    do {
      top = 10 + Math.random() * 80; // 10%-90%
      left = 10 + Math.random() * 80; // 10%-90%
      attempts++;
    } while (
      positions.some(
        (pos) =>
          Math.abs(pos.top - top) < 12 && // vertical spacing
          Math.abs(pos.left - left) < 20 // horizontal spacing
      ) &&
      attempts < 100
    );

    positions.push({ top, left });
    return { top, left };
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {repeatedProducts.map((product, index) => {
        const { top, left } = getSafePosition();

        const rotateStart = -15 + Math.random() * 30; // small tilt
        const xAmplitude = 15 + Math.random() * 25; // small horizontal float
        const yAmplitude = 15 + Math.random() * 25; // small vertical float
        const direction = Math.random() > 0.5 ? 1 : -1;

        return (
          <motion.div
            key={index}
            className="absolute font-bold text-2xl md:text-4xl whitespace-nowrap"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              color: color,
              opacity: 0.16,
              rotate: `${rotateStart}deg`,
            }}
            animate={{
              y: [0, yAmplitude * direction, 0],
              x: [0, xAmplitude * -direction, 0],
              rotate: [rotateStart, rotateStart + 8 * direction, rotateStart],
            }}
            transition={{
              duration: 18 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {product}
          </motion.div>
        );
      })}
    </div>
  );
};



const productNames = [
  t("products.nalyst.name"),
  t("products.newshunt.name"),
  t("products.asaad.name"),
  t("products.khella.name"),
  t("products.4kast.name"),
  t("products.hr360.name"),
];


  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />

      {/* Hero Section */}
   
<section className="relative min-h-[90vh] flex bg-cover items-center overflow-hidden">
  {/* Background Image with Smooth Zoom */}
  <motion.div
    className="absolute inset-0"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6, ease: "easeOut" }}
  >
    <img
      src={HeroImage}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
    {/* Blue semi-transparent dark overlay */}
    <div className="absolute inset-0 bg-blue-900/40"></div>
  </motion.div>

  <FloatingProducts
    products={productNames}
    color="#1c7f87"
    repeat={2}
  />

  <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span
          className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/20 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${
            dir === "rtl" ? "font-arabic" : "font-body"
          }`}
        >
          {language === "en"
            ? "Aligned with Vision 2030"
            : "متوافق مع رؤية 2030"}
        </span>
      </motion.div>

      {/* Typing Title */}
      <motion.h1
        className={`text-3xl sm:text-4xl md:text-6xl text-center lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 ${
          dir === "rtl" ? "font-arabic" : "font-display"
        }`}
      >
        <div className="block text-white">
          <TypingText text={t("hero.title")} delayOffset={0.5} />
        </div>

        <div className="text-4xl md:text-5xl lg:text-6xl text-[#32a7b5] mt-4">
          <TypingText
            text={t("hero.subtitle")}
            delayOffset={0.5 + t("hero.title").length * 0.035}
          />
        </div>
      </motion.h1>

      {/* Description */}
      <motion.p
        className={`text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed ${
          dir === "rtl" ? "font-arabic" : "font-body"
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:
            0.8 + t("hero.title").length * 0.035 +
            t("hero.subtitle").length * 0.02,
          duration: 0.8,
        }}
      >
        {t("hero.description")}
      </motion.p>

      {/* Buttons */}
      <motion.div
        className={`flex flex-wrap gap-4 justify-center ${
          dir === "rtl" ? "flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay:
            1 +
            t("hero.title").length * 0.035 +
            t("hero.subtitle").length * 0.02,
        }}
      >
        <Link href="/services">
          <motion.button
            className={`group flex items-center gap-2 px-8 py-4 bg-[#32a7b5] text-white font-bold rounded-xl shadow-lg hover:bg-[#2a8f9a] transition-all duration-300 ${
              dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"
            }`}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.cta.services")}
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            className={`flex items-center gap-2 px-8 py-4 border-2 border-[#32a7b5] text-white font-bold rounded-xl hover:bg-[#32a7b5]/10 transition-all duration-300 ${
              dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"
            }`}
            whileHover={{ scale: 1.05, y: -4 }}
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
            viewport={{ once: false }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">

                  <div className="absolute inset-0   z-10" />
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
     <section className="py-24 relative bg-slate-100 overflow-hidden">
  <div className="container mx-auto px-4 relative">

    {/* Section Heading */}
    <motion.div
      className={`text-center mb-16 max-w-3xl mx-auto ${
        dir === "rtl" ? "font-arabic" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false}}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-block px-4 py-2 rounded-full bg-[#32A7B51A] text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider">
        {language === "en" ? "Our Solutions" : "حلولنا"}
      </span>

      <h2
        className={`text-4xl md:text-5xl font-bold text-slate-700 mb-6 ${
          dir === "rtl" ? "font-arabic" : "font-display"
        }`}
      >
        {t("products.title")}
      </h2>

      <p
        className={`text-slate-600 text-lg ${
          dir === "rtl" ? "font-arabic" : "font-body"
        }`}
      >
        {t("products.subtitle")}
      </p>
    </motion.div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Link key={index} href={product.url}>
          <motion.div
            className={`group relative p-8 rounded-2xl bg-white  shadow-sm cursor-pointer overflow-hidden ${
              dir === "rtl" ? "text-right" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: index * 0.12,
              duration: 0.6,
              ease: "easeOut",
            }}
            // whileHover={{
            //   y: -10,
            //   scale: 1.02,
            // }}
          >

            {/* Hover Shine Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(120deg, transparent 20%, rgba(50,167,181,0.08) 50%, transparent 80%)",
              }}
            />

            {/* Icon */}
            <motion.div
              className="text-5xl -mt-6 flex justify-center items-center relative z-10"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={product.icon}
                alt={product.name}
                className="w-44 h-44 object-contain"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Product Description */}
            <p
              className={`text-slate-600 text-sm text-center leading-relaxed -mt-6 relative z-10 ${
                dir === "rtl" ? "font-arabic" : "font-body"
              }`}
            >
              {product.description}
            </p>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl  duration-500" />

          </motion.div>
        </Link>
      ))}
    </div>

    {/* View All Button */}
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
    >
      <Link href="/products">
        <motion.button
          className={`inline-flex items-center gap-2 px-8 py-4 bg-[#32A7B5] text-white rounded-xl font-bold transition-colors ${
            dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"
          }`}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("common.viewAll")}
          <ChevronIcon className="w-5 h-5" />
        </motion.button>
      </Link>
    </motion.div>
  </div>
</section>


  <section className="py-24 bg-slate-100">
      {/* Section Heading */}
      <motion.div
        className={`text-center mb-16 max-w-3xl mx-auto ${
          dir === "rtl" ? "font-arabic" : ""
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-[#32A7B51A] text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider">
          {language === "en" ? "Gallery" : "المعرض"}
        </span>

        <h2
          className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 ${
            dir === "rtl" ? "font-arabic" : "font-display"
          }`}
        >
          {language === "en" ? "Our Products Gallery" : "معرض منتجاتنا"}
        </h2>

        <p
          className={`text-slate-700 text-lg ${
            dir === "rtl" ? "font-arabic" : "font-body"
          }`}
        >
          {language === "en"
            ? "Explore visuals of our innovative solutions and digital transformation services."
            : "استكشف صور حلولنا المبتكرة وخدمات التحول الرقمي."}
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-12 gap-3 mx-8 md:mx-12 lg:mx-16">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className={`relative group cursor-pointer overflow-hidden ${
              spans[index % spans.length]
            }`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#32a7b5]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center"
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">
                {language === "en" ? "View Image" : "عرض الصورة"}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl mx-4 md:mx-0">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold p-2 hover:text-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>




      {/* Industries Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            className={`text-center mb-16 max-w-3xl mx-auto ${dir === "rtl" ? "font-arabic" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false}}
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
                className={`group p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 
flex flex-col items-center text-center h-full
${dir === "rtl" ? "font-arabic" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
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
            viewport={{ once: false}}
          >
            <Link href="/industries">
              <motion.button
                className={`inline-flex items-center gap-2 px-8 py-4 bg-[#32A7B5] text-white rounded-xl font-bold  transition-colors ${dir === "rtl" ? "flex-row-reverse font-arabic" : "font-body"}`}
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
           viewport={{ once: false }}
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