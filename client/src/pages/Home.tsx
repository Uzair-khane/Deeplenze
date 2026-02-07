/* Desert Futurism Design - Home Page
 * Hero with geometric patterns, services grid, products showcase
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
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
  Store
} from 'lucide-react';

// Image URLs
const HERO_BG = "@/assets/images/herosection.png"
const AI_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/hYVpeMLXqLiWYyQt.jpg";
const CYBER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/ttqBQgjepjeNgSMT.jpg";
const DIGITAL_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/xsqFgzTMBLvupfxK.jpg";
const SMART_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/zxhLFuUlDPKEooqo.jpg";

export default function Home() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const services = [
    {
      icon: Brain,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      image: AI_IMG,
      color: '#00D4AA',
    },
    {
      icon: Shield,
      title: t('services.cyber.title'),
      description: t('services.cyber.description'),
      image: CYBER_IMG,
      color: '#C9A227',
    },
    {
      icon: Sparkles,
      title: t('services.digital.title'),
      description: t('services.digital.description'),
      image: DIGITAL_IMG,
      color: '#00D4AA',
    },
    {
      icon: Building2,
      title: t('services.smart.title'),
      description: t('services.smart.description'),
      image: SMART_IMG,
      color: '#C9A227',
    },
    {
      icon: Cloud,
      title: language === 'en' ? 'AWS Cloud Management' : 'إدارة سحابة AWS',
      description: language === 'en' 
        ? 'Comprehensive AWS cloud services for scalable and secure infrastructure.'
        : 'خدمات سحابة AWS الشاملة للبنية التحتية القابلة للتوسع والآمنة.',
      image: DIGITAL_IMG,
      color: '#FF9900',
    },
  ];

  const products = [
    { name: t('products.nalyst.name'), description: t('products.nalyst.description'), icon: '📊' },
    { name: t('products.newshunt.name'), description: t('products.newshunt.description'), icon: '📰' },
    { name: t('products.asaad.name'), description: t('products.asaad.description'), icon: '🛡️' },
    { name: t('products.khella.name'), description: t('products.khella.description'), icon: '💬' },
    { name: t('products.4kast.name'), description: t('products.4kast.description'), icon: '📈' },
    { name: t('products.hr360.name'), description: t('products.hr360.description'), icon: '👥' },
  ];

  const industries = [
    { icon: Landmark, title: t('industries.government.title'), description: t('industries.government.description') },
    { icon: Lightbulb, title: t('industries.thinktanks.title'), description: t('industries.thinktanks.description') },
    { icon: ShoppingCart, title: t('industries.ecommerce.title'), description: t('industries.ecommerce.description') },
    { icon: Newspaper, title: t('industries.media.title'), description: t('industries.media.description') },
    { icon: Building, title: t('industries.municipalities.title'), description: t('industries.municipalities.description') },
    { icon: Briefcase, title: t('industries.private.title'), description: t('industries.private.description') },
    { icon: Heart, title: language === 'en' ? 'Healthcare' : 'الرعاية الصحية', description: language === 'en' ? 'Digital health solutions for healthcare providers.' : 'حلول الصحة الرقمية لمقدمي الرعاية الصحية.' },
    { icon: Store, title: language === 'en' ? 'Retail' : 'التجزئة', description: language === 'en' ? 'Omnichannel retail solutions for modern shopping.' : 'حلول التجزئة متعددة القنوات للتسوق الحديث.' },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={HERO_BG}
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/50" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00D4AA] rounded-full"
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

        <div className="container relative z-10 pt-32 pb-20">
          <div className={`max-w-3xl ${dir === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`inline-block px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-sm font-medium mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                {language === 'en' ? 'Aligned with Vision 2030' : 'متوافق مع رؤية 2030'}
              </span>
            </motion.div>

            <motion.h1
              className={`text-5xl md:text-7xl font-bold text-white leading-tight mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.h2
              className={`text-4xl md:text-6xl font-bold mb-8 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-teal">{t('hero.subtitle')}</span>
            </motion.h2>

            <motion.p
              className={`text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/services">
                <motion.button
                  className={`group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4AA] to-[#00D4AA]/80 text-[#0A1628] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D4AA]/25 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta.services')}
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className={`flex items-center gap-2 px-8 py-4 border-2 border-[#C9A227] text-[#C9A227] font-semibold rounded-lg hover:bg-[#C9A227]/10 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta.contact')}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#C9A227]/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#C9A227] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />
        
        <div className="container">
          <motion.div
            className={`text-center mb-16 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 text-[#00D4AA] text-sm font-medium mb-4">
              {language === 'en' ? 'What We Do' : 'ما نقدمه'}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('services.title')}
            </h2>
            <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-transparent" />
                </div>
                
                <div className={`relative p-8 min-h-[320px] flex flex-col justify-end ${dir === 'rtl' ? 'text-right' : ''}`}>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-white mb-3 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-gray-300 mb-4 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {service.description}
                  </p>
                  
                  <Link href="/services">
                    <motion.span
                      className={`inline-flex items-center gap-2 text-sm font-medium cursor-pointer ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                      style={{ color: service.color }}
                      whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                    >
                      {t('services.learnMore')}
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
      <section className="py-24 relative bg-[#050d18]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D4AA]/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <motion.div
            className={`text-center mb-16 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-sm font-medium mb-4">
              {language === 'en' ? 'Our Solutions' : 'حلولنا'}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('products.title')}
            </h2>
            <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className={`group p-6 rounded-2xl bg-[#0A1628] border border-white/5 hover:border-[#00D4AA]/30 transition-all duration-300 ${dir === 'rtl' ? 'text-right' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {product.name}
                </h3>
                <p className={`text-gray-400 text-sm leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/products">
              <motion.button
                className={`inline-flex items-center gap-2 px-6 py-3 border border-[#C9A227]/50 text-[#C9A227] rounded-lg hover:bg-[#C9A227]/10 transition-colors ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('common.viewAll')}
                <ChevronIcon className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4AA]/30 to-transparent" />
        
        <div className="container">
          <motion.div
            className={`text-center mb-16 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 text-[#00D4AA] text-sm font-medium mb-4">
              {language === 'en' ? 'Sectors' : 'القطاعات'}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('industries.title')}
            </h2>
            <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('industries.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className={`group p-6 rounded-2xl glass hover:border-[#C9A227]/30 transition-all duration-300 ${dir === 'rtl' ? 'text-right' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center mb-4 group-hover:bg-[#C9A227]/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-[#C9A227] transition-colors ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {industry.title}
                </h3>
                <p className={`text-gray-400 text-sm leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/industries">
              <motion.button
                className={`inline-flex items-center gap-2 px-6 py-3 border border-[#00D4AA]/50 text-[#00D4AA] rounded-lg hover:bg-[#00D4AA]/10 transition-colors ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('common.viewAll')}
                <ChevronIcon className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/10 via-transparent to-[#C9A227]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4AA]/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Ready to Transform Your Business?' : 'هل أنت مستعد لتحويل أعمالك؟'}
            </h2>
            <p className={`text-gray-300 text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' 
                ? 'Partner with us to unlock the full potential of digital innovation and drive your organization forward.'
                : 'شاركنا لإطلاق الإمكانات الكاملة للابتكار الرقمي ودفع مؤسستك إلى الأمام.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00D4AA] to-[#00D4AA]/80 text-[#0A1628] font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-[#00D4AA]/25 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.contact')}
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
