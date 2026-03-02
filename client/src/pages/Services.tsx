/* Desert Futurism Design - Services Page
 * Four service verticals with detailed information
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */
import HeroImage from "@/assets/images/herosection.png";
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
import AI_IMG from "@/assets/images/AI.png";
import CYBER_IMG from "@/assets/images/CyberSecurity.png";
import DIGITAL_IMG from "@/assets/images/AWSCloudManagement.png";
import AWS from "@/assets/images/DigitalTransformation.png";

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
        ? [
            'Generative AI Solutions',
            'AI Integration & Automation',
            'Natural Language Processing (NLP)',
            'Computer Vision & Video Analytics',
            'Predictive & Prescriptive Analytics',
            'Custom AI Model Development & Deployment',
          ]
        : [
            'حلول الذكاء الاصطناعي التوليدي',
            'تكامل الذكاء الاصطناعي والأتمتة',
            'معالجة اللغة الطبيعية',
            'الرؤية الحاسوبية وتحليل الفيديو',
            'التحليلات التنبؤية والتوجيهية',
            'تطوير ونشر نماذج الذكاء الاصطناعي المخصصة',
          ],
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
      image: AWS,
      color: '#FF9900',
      features: language === 'en'
        ? ['Cloud Architecture Design', 'AWS Migration Services', 'Cost Optimization', 'DevOps & CI/CD', 'Managed Cloud Services', '24/7 Cloud Monitoring']
        : ['تصميم البنية السحابية', 'خدمات الترحيل إلى AWS', 'تحسين التكاليف', 'DevOps و CI/CD', 'الخدمات السحابية المدارة', 'مراقبة السحابة 24/7'],
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          {/* Blue semi-transparent dark overlay */}
          <div className="absolute inset-0 bg-blue-900/40"></div>
          <div className="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Our Expertise' : 'خبراتنا'}
            </span> */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('services.title')}
            </h1>
            <p className={`text-lg sm:text-xl text-white leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-6 sm:py-10">
        {services.map((service, index) => (
          <div key={service.id} className="py-10 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 && dir === 'ltr' ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover opacity-87"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center backdrop-blur-md bg-[#32A7B51A] border border-white/20 shadow-sm"
                      style={{ borderColor: `${service.color}40` }}
                    >
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: service.color }} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''} ${dir === 'rtl' ? 'text-right' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                >
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 mb-3 sm:mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                    {service.title}
                  </h2>
                  <p className={`text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 sm:gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#32A7B5] flex-shrink-0" />
                        <span className={`text-muted-foreground text-xs sm:text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.button
                      className={`inline-flex bg-[#32A7B5] text-white items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
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
      <section className="py-16 sm:py-24 relative overflow-hidden bg-[#E0F2F4]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#314158] mb-4 sm:mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Need a Custom Solution?' : 'هل تحتاج إلى حل مخصص؟'}
            </h2>
            <p className={`text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'Our team of experts is ready to help you design and implement solutions tailored to your specific needs.'
                : 'فريقنا من الخبراء مستعد لمساعدتك في تصميم وتنفيذ حلول مصممة خصيصاً لاحتياجاتك.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-2 sm:gap-3 px-7 sm:px-10 py-4 sm:py-5 bg-[#32A7B5] text-primary-foreground font-bold text-base sm:text-lg rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.contact')}
                <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}