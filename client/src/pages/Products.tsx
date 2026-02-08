/* Desert Futurism Design - Products Page
 * Showcase of six innovative products
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

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

// import Nalyst from "./pages/product/nalyst";


export default function Products() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const products = [
    {
      id: 'nalyst',
      name: t('products.nalyst.name'),
      description: t('products.nalyst.description'),
      icon: BarChart3,
      color: '#00D4AA',
      tagline: language === 'en' ? 'AI-Powered Analytics' : 'تحليلات مدعومة بالذكاء الاصطناعي',
      features: language === 'en'
        ? ['Real-time data processing', 'Custom dashboard builder', 'Predictive insights', 'Multi-source integration']
        : ['معالجة البيانات في الوقت الفعلي', 'منشئ لوحات المعلومات المخصصة', 'رؤى تنبؤية', 'تكامل متعدد المصادر'],
    },
    {
      id: 'newshunt',
      name: t('products.newshunt.name'),
      description: t('products.newshunt.description'),
      icon: Newspaper,
      color: '#C9A227',
      tagline: language === 'en' ? 'Media Intelligence' : 'الذكاء الإعلامي',
      features: language === 'en'
        ? ['AI-powered news aggregation', 'Sentiment analysis', 'Trend detection', 'Custom alerts & reports']
        : ['تجميع الأخبار بالذكاء الاصطناعي', 'تحليل المشاعر', 'اكتشاف الاتجاهات', 'تنبيهات وتقارير مخصصة'],
    },
    {
      id: 'asaad',
      name: t('products.asaad.name'),
      description: t('products.asaad.description'),
      icon: ShieldCheck,
      color: '#00D4AA',
      tagline: language === 'en' ? 'Enterprise Security' : 'أمان المؤسسات',
      features: language === 'en'
        ? ['Threat detection & response', 'Vulnerability management', 'Compliance monitoring', 'Security analytics']
        : ['اكتشاف التهديدات والاستجابة', 'إدارة الثغرات', 'مراقبة الامتثال', 'تحليلات الأمان'],
    },
    {
      id: 'khella',
      name: t('products.khella.name'),
      description: t('products.khella.description'),
      icon: MessageSquare,
      color: '#C9A227',
      tagline: language === 'en' ? 'Smart Collaboration' : 'التعاون الذكي',
      features: language === 'en'
        ? ['Secure messaging', 'Video conferencing', 'File sharing & collaboration', 'AI meeting assistant']
        : ['المراسلة الآمنة', 'مؤتمرات الفيديو', 'مشاركة الملفات والتعاون', 'مساعد الاجتماعات بالذكاء الاصطناعي'],
    },
    {
      id: '4kast',
      name: t('products.4kast.name'),
      description: t('products.4kast.description'),
      icon: TrendingUp,
      color: '#00D4AA',
      tagline: language === 'en' ? 'Predictive Intelligence' : 'الذكاء التنبؤي',
      features: language === 'en'
        ? ['Demand forecasting', 'Risk prediction', 'Market analysis', 'Scenario planning']
        : ['التنبؤ بالطلب', 'التنبؤ بالمخاطر', 'تحليل السوق', 'تخطيط السيناريوهات'],
    },
    {
      id: 'hr360',
      name: t('products.hr360.name'),
      description: t('products.hr360.description'),
      icon: Users,
      color: '#C9A227',
      tagline: language === 'en' ? 'HR Management' : 'إدارة الموارد البشرية',
      features: language === 'en'
        ? ['Employee lifecycle management', 'Performance tracking', 'Payroll automation', 'Learning & development']
        : ['إدارة دورة حياة الموظف', 'تتبع الأداء', 'أتمتة الرواتب', 'التعلم والتطوير'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A227]/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-sm font-medium mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Our Solutions' : 'حلولنا'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('products.title')}
            </h1>
            <p className={`text-xl text-gray-300 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className={`group relative p-8 rounded-2xl overflow-hidden ${dir === 'rtl' ? 'text-right' : ''}`}
          style={{ 
            background: `linear-gradient(135deg, ${product.color}10 0%, transparent 50%)`,
            border: `1px solid ${product.color}20`
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {/* Background Glow */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: product.color }}
          />

          <div className={`relative z-10 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {/* Header */}
            <div className={`flex items-start justify-between mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>

                {/*logo is clickable */}
                <Link href={`/products/${product.id}`}>
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer"
                    style={{ 
                      backgroundColor: `${product.color}20`, 
                      border: `1px solid ${product.color}40` 
                    }}
                  >
                    <product.icon className="w-7 h-7" style={{ color: product.color }} />
                  </div>
                </Link>

                <div>
                  <h3 className={`text-2xl font-bold text-white ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                    {product.name}
                  </h3>
                  <span 
                    className={`text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}
                    style={{ color: product.color }}
                  >
                    {product.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-gray-300 mb-6 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {product.features.map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: product.color }}
                  />
                  <span className={`text-gray-400 text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-2 text-sm font-medium ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                style={{ color: product.color }}
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
</section>


      {/* Integration Section */}
      <section className="py-20 relative bg-[#050d18]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4AA]/30 to-transparent" />
        
        <div className="container">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4AA] to-[#C9A227] flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}
            </h2>
            <p className={`text-gray-300 text-lg leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'All our products are designed to work together seamlessly, creating a unified ecosystem that enhances your organization\'s capabilities. Whether you need one solution or the complete suite, we ensure smooth integration with your existing systems.'
                : 'جميع منتجاتنا مصممة للعمل معاً بسلاسة، مما يخلق نظاماً بيئياً موحداً يعزز قدرات مؤسستك. سواء كنت بحاجة إلى حل واحد أو المجموعة الكاملة، نضمن التكامل السلس مع أنظمتك الحالية.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/10 via-transparent to-[#00D4AA]/10" />
        
        <div className="container relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Ready to Get Started?' : 'هل أنت مستعد للبدء؟'}
            </h2>
            <p className={`text-gray-300 text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' 
                ? 'Contact us today to schedule a personalized demo and discover how our products can transform your business.'
                : 'تواصل معنا اليوم لجدولة عرض توضيحي مخصص واكتشف كيف يمكن لمنتجاتنا تحويل أعمالك.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/80 text-[#0A1628] font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-[#C9A227]/25 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Schedule a Demo' : 'جدولة عرض توضيحي'}
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
