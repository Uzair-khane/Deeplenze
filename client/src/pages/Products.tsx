/* Desert Futurism Design - Products Page
 * Showcase of six innovative products
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */
import HeroImage from "@/assets/images/hero.png";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Newspaper,
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Products() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const products = [
    {
      id: 1,
      name: t('products.nalyst.name'),
      description: t('products.nalyst.description'),
      icon: BarChart3,
      color: '#00D4AA',
      tagline: language === 'en' ? 'AI-Powered Analytics' : 'تحليلات مدعومة بالذكاء الاصطناعي',
      url: 'https://nalyst.ai/',
      features: language === 'en'
        ? ['Real-time data processing', 'Custom dashboard builder', 'Predictive insights', 'Multi-source integration']
        : ['معالجة البيانات في الوقت الفعلي', 'منشئ لوحات المعلومات المخصصة', 'رؤى تنبؤية', 'تكامل متعدد المصادر'],
    },
    {
      id: 2,
      name: t('products.newshunt.name'),
      description: t('products.newshunt.description'),
      icon: Newspaper,
      color: '#C9A227',
      tagline: language === 'en' ? 'Media Intelligence' : 'الذكاء الإعلامي',
      url: 'https://newshunt.io/',
      features: language === 'en'
        ? ['AI-powered news aggregation', 'Sentiment analysis', 'Trend detection', 'Custom alerts & reports']
        : ['تجميع الأخبار بالذكاء الاصطناعي', 'تحليل المشاعر', 'اكتشاف الاتجاهات', 'تنبيهات وتقارير مخصصة'],
    },
    {
      id: 3,
      name: t('products.asaad.name'),
      description: t('products.asaad.description'),
      icon: ShieldCheck,
      color: '#00D4AA',
      tagline: language === 'en' ? 'Enterprise Security' : 'أمان المؤسسات',
      url: 'https://example.com/asaad',
      features: language === 'en'
        ? ['Threat detection & response', 'Vulnerability management', 'Compliance monitoring', 'Security analytics']
        : ['اكتشاف التهديدات والاستجابة', 'إدارة الثغرات', 'مراقبة الامتثال', 'تحليلات الأمان'],
    },
    {
      id: 4,
      name: t('products.khella.name'),
      description: t('products.khella.description'),
      icon: MessageSquare,
      color: '#C9A227',
      tagline: language === 'en' ? 'Smart Collaboration' : 'التعاون الذكي',
      url: 'https://example.com/khella',
      features: language === 'en'
        ? ['Secure messaging', 'Video conferencing', 'File sharing & collaboration', 'AI meeting assistant']
        : ['المراسلة الآمنة', 'مؤتمرات الفيديو', 'مشاركة الملفات والتعاون', 'مساعد الاجتماعات بالذكاء الاصطناعي'],
    },
    {
      id: 5,
      name: t('products.4kast.name'),
      description: t('products.4kast.description'),
      icon: TrendingUp,
      color: '#00D4AA',
      tagline: language === 'en' ? 'Predictive Intelligence' : 'الذكاء التنبؤي',
      url: 'https://example.com/4kast',
      features: language === 'en'
        ? ['Demand forecasting', 'Risk prediction', 'Market analysis', 'Scenario planning']
        : ['التنبؤ بالطلب', 'التنبؤ بالمخاطر', 'تحليل السوق', 'تخطيط السيناريوهات'],
    },
    {
      id: 6,
      name: t('products.hr360.name'),
      description: t('products.hr360.description'),
      icon: Users,
      color: '#C9A227',
      tagline: language === 'en' ? 'HR Management' : 'إدارة الموارد البشرية',
      url: 'https://example.com/hr360',
      features: language === 'en'
        ? ['Employee lifecycle management', 'Performance tracking', 'Payroll automation', 'Learning & development']
        : ['إدارة دورة حياة الموظف', 'تتبع الأداء', 'أتمتة الرواتب', 'التعلم والتطوير'],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Very light dark overlay */}
          <div className="absolute inset-0 " />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Our Solutions' : 'حلولنا'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-[#1D293D] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('products.title')}
            </h1>
            <p className={`text-xl text-black leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group relative p-8 rounded-2xl overflow-hidden bg-white shadow-lg border-2 border-[#32a7b5]/20 hover:border-[#32a7b5] hover:shadow-2xl transition-all duration-300 ${dir === 'rtl' ? 'text-right' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#32a7b5]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`relative z-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
                  {/* Header */}
                  <div className={`flex items-start justify-between mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      {/* logo is clickable */}

                      {/* logo is clickable */}

                     <a href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-[#32a7b5]/10 border-2 border-[#32a7b5]/30 hover:border-[#32a7b5] hover:scale-110"
>
                      <product.icon className="w-8 h-8 text-[#32a7b5]" />
                    </a>

                    <div>
                      <h3 className={`text-2xl font-bold text-black mb-1 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                        {product.name}
                      </h3>
                      <span className={`text-sm font-bold text-[#32a7b5] uppercase tracking-wide ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {product.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-gray-700 mb-6 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#32a7b5]" />
                      <span className={`text-gray-700 text-sm font-medium ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href="/contact">
                  <motion.button
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-[#32a7b5] text-white font-bold rounded-lg hover:bg-[#2a8f9a] shadow-md hover:shadow-lg transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                    whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                  >
                    {language === 'en' ? 'Request Demo' : 'طلب عرض توضيحي'}
                    <ArrowIcon className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
              </motion.div>
            ))}
        </div>
    </div>
      </section >

    {/* Integration Section */ }
    < section className = "py-20 relative bg-white" >
      <div className="container mx-auto px-4">
        <motion.div
          className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#32a7b5]/10 border-2 border-[#32a7b5]/30 flex items-center justify-center mx-auto mb-6 shadow-md">
            <Sparkles className="w-8 h-8 text-[#32a7b5]" />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-[#32a7b5] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
            {language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}
          </h2>
          <p className={`text-gray-700 text-lg leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
            {language === 'en'
              ? 'All our products are designed to work together seamlessly, creating a unified ecosystem that enhances your organization\'s capabilities. Whether you need one solution or the complete suite, we ensure smooth integration with your existing systems.'
              : 'جميع منتجاتنا مصممة للعمل معاً بسلاسة، مما يخلق نظاماً بيئياً موحداً يعزز قدرات مؤسستك. سواء كنت بحاجة إلى حل واحد أو المجموعة الكاملة، نضمن التكامل السلس مع أنظمتك الحالية.'
            }
          </p>
        </motion.div>
      </div>
      </section >

    {/* CTA Section */ }
    < section className = "py-24 relative overflow-hidden bg-gray-50" >
      <div className="container mx-auto px-4 relative">
        <motion.div
          className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-[#32a7b5] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
            {language === 'en' ? 'Ready to Get Started?' : 'هل أنت مستعد للبدء؟'}
          </h2>
          <p className={`text-gray-700 text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
            {language === 'en'
              ? 'Contact us today to schedule a personalized demo and discover how our products can transform your business.'
              : 'تواصل معنا اليوم لجدولة عرض توضيحي مخصص واكتشف كيف يمكن لمنتجاتنا تحويل أعمالك.'
            }
          </p>
          <Link href="/contact">
            <motion.button
              className={`inline-flex items-center gap-3 px-10 py-5 bg-[#32a7b5] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#2a8f9a] hover:shadow-xl transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'Schedule a Demo' : 'جدولة عرض توضيحي'}
              <ArrowIcon className="w-6 h-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
      </section >

    <Footer />
    </div >
  );
}
