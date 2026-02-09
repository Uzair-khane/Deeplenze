/* Desert Futurism Design - Services Page
 * Four service verticals with detailed information
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Brain,
  Shield,
  Sparkles,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Lock,
  RefreshCw,
  Wifi,
  Cloud,
  Server
} from 'lucide-react';

const AI_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/hYVpeMLXqLiWYyQt.jpg";
const CYBER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/ttqBQgjepjeNgSMT.jpg";
const DIGITAL_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/xsqFgzTMBLvupfxK.jpg";
const SMART_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030867079/zxhLFuUlDPKEooqo.jpg";

export default function Services() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: 'ai',
      icon: Brain,
      smallIcon: Cpu,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      image: AI_IMG,
      color: '#00D4AA',
      features: language === 'en'
        ? ['Machine Learning Solutions', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Strategy Consulting', 'Custom AI Model Development']
        : ['حلول التعلم الآلي', 'معالجة اللغة الطبيعية', 'الرؤية الحاسوبية', 'التحليلات التنبؤية', 'استشارات استراتيجية الذكاء الاصطناعي', 'تطوير نماذج الذكاء الاصطناعي المخصصة'],
    },
    {
      id: 'cyber',
      icon: Shield,
      smallIcon: Lock,
      title: t('services.cyber.title'),
      description: t('services.cyber.description'),
      image: CYBER_IMG,
      color: '#C9A227',
      features: language === 'en'
        ? ['Security Assessment & Audit', 'Threat Detection & Response', 'Identity & Access Management', 'Data Protection & Privacy', 'Security Operations Center', 'Compliance & Governance']
        : ['تقييم وتدقيق الأمان', 'اكتشاف التهديدات والاستجابة', 'إدارة الهوية والوصول', 'حماية البيانات والخصوصية', 'مركز عمليات الأمان', 'الامتثال والحوكمة'],
    },
    {
      id: 'digital',
      icon: Sparkles,
      smallIcon: RefreshCw,
      title: t('services.digital.title'),
      description: t('services.digital.description'),
      image: DIGITAL_IMG,
      color: '#00D4AA',
      features: language === 'en'
        ? ['Digital Strategy Development', 'Process Automation', 'Cloud Migration', 'Legacy System Modernization', 'Change Management', 'Digital Workforce Training']
        : ['تطوير الاستراتيجية الرقمية', 'أتمتة العمليات', 'الانتقال إلى السحابة', 'تحديث الأنظمة القديمة', 'إدارة التغيير', 'تدريب القوى العاملة الرقمية'],
    },
   
    {
      id: 'aws',
      icon: Cloud,
      smallIcon: Server,
      title: language === 'en' ? 'AWS Cloud Management' : 'إدارة سحابة AWS',
      description: language === 'en'
        ? 'Comprehensive AWS cloud services including architecture design, migration, optimization, and managed services for scalable and secure cloud infrastructure.'
        : 'خدمات سحابة AWS الشاملة بما في ذلك تصميم البنية والترحيل والتحسين والخدمات المدارة للبنية التحتية السحابية القابلة للتوسع والآمنة.',
      image: DIGITAL_IMG,
      color: '#FF9900',
      features: language === 'en'
        ? ['Cloud Architecture Design', 'AWS Migration Services', 'Cost Optimization', 'DevOps & CI/CD', 'Managed Cloud Services', '24/7 Cloud Monitoring']
        : ['تصميم البنية السحابية', 'خدمات الترحيل إلى AWS', 'تحسين التكاليف', 'DevOps و CI/CD', 'الخدمات السحابية المدارة', 'مراقبة السحابة 24/7'],
    },
  
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Our Expertise' : 'خبراتنا'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('services.title')}
            </h1>
            <p className={`text-xl text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`py-16 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 && dir === 'ltr' ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden shadow-lg border border-border ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  {/* Subtle gradient for depth, but not too dark */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/50 border border-white/20 shadow-sm"
                      style={{ borderColor: `${service.color}40` }}
                    >
                      <service.icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''} ${dir === 'rtl' ? 'text-right' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                    {service.title}
                  </h2>
                  <p className={`text-muted-foreground text-lg mb-8 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                        <span className={`text-muted-foreground text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.button
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                      style={{
                        backgroundColor: `${service.color}10`,
                        border: `1px solid ${service.color}40`,
                        color: service.color
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                      <ArrowIcon className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Need a Custom Solution?' : 'هل تحتاج إلى حل مخصص؟'}
            </h2>
            <p className={`text-muted-foreground text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'Our team of experts is ready to help you design and implement solutions tailored to your specific needs.'
                : 'فريقنا من الخبراء مستعد لمساعدتك في تصميم وتنفيذ حلول مصممة خصيصاً لاحتياجاتك.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.contact')}
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
