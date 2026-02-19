/* Desert Futurism Design - Industries Page
 * Sectors we serve with tailored solutions
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import HeroImage from "@/assets/images/herosection.png";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  ArrowRight,
  ArrowLeft,
  Landmark,
  Lightbulb,
  ShoppingCart,
  Newspaper,
  Building,
  Briefcase,
  CheckCircle2,
  Heart,
  Store
} from 'lucide-react';

export default function Industries() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const industries = [
    {
      id: 'government',
      icon: Landmark,
      title: t('industries.government.title'),
      description: t('industries.government.description'),
      color: '#00D4AA',
      solutions: language === 'en'
        ? ['E-Government Platforms', 'Citizen Services Portal', 'Document Management', 'Inter-agency Integration', 'Public Sector Analytics']
        : ['منصات الحكومة الإلكترونية', 'بوابة خدمات المواطنين', 'إدارة الوثائق', 'التكامل بين الجهات', 'تحليلات القطاع العام'],
      caseStudy: language === 'en'
        ? 'Implemented a unified digital platform serving 2M+ citizens with 40% improvement in service delivery time.'
        : 'تم تنفيذ منصة رقمية موحدة تخدم أكثر من 2 مليون مواطن مع تحسين بنسبة 40% في وقت تقديم الخدمة.',
    },
    {
      id: 'thinktanks',
      icon: Lightbulb,
      title: t('industries.thinktanks.title'),
      description: t('industries.thinktanks.description'),
      color: '#C9A227',
      solutions: language === 'en'
        ? ['Research Analytics Platform', 'Knowledge Management', 'Publication Systems', 'Data Visualization', 'Collaboration Tools']
        : ['منصة تحليلات البحث', 'إدارة المعرفة', 'أنظمة النشر', 'تصور البيانات', 'أدوات التعاون'],
      caseStudy: language === 'en'
        ? 'Deployed AI-powered research platform reducing analysis time by 60% for policy research initiatives.'
        : 'تم نشر منصة بحثية مدعومة بالذكاء الاصطناعي مما قلل وقت التحليل بنسبة 60% لمبادرات البحث السياسي.',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: t('industries.ecommerce.title'),
      description: t('industries.ecommerce.description'),
      color: '#00D4AA',
      solutions: language === 'en'
        ? ['Secure Payment Systems', 'Inventory Management', 'Customer Analytics', 'Fraud Detection', 'Personalization Engine']
        : ['أنظمة الدفع الآمنة', 'إدارة المخزون', 'تحليلات العملاء', 'اكتشاف الاحتيال', 'محرك التخصيص'],
      caseStudy: language === 'en'
        ? 'Built scalable e-commerce infrastructure handling 100K+ daily transactions with 99.9% uptime.'
        : 'تم بناء بنية تحتية للتجارة الإلكترونية قابلة للتطوير تتعامل مع أكثر من 100 ألف معاملة يومية بوقت تشغيل 99.9%.',
    },
    {
      id: 'media',
      icon: Newspaper,
      title: t('industries.media.title'),
      description: t('industries.media.description'),
      color: '#C9A227',
      solutions: language === 'en'
        ? ['Content Management', 'Media Monitoring', 'Audience Analytics', 'Digital Asset Management', 'Multi-channel Publishing']
        : ['إدارة المحتوى', 'مراقبة وسائل الإعلام', 'تحليلات الجمهور', 'إدارة الأصول الرقمية', 'النشر متعدد القنوات'],
      caseStudy: language === 'en'
        ? 'Implemented NewsHunt platform for real-time media monitoring across 500+ sources in Arabic and English.'
        : 'تم تنفيذ منصة نيوز هانت لمراقبة وسائل الإعلام في الوقت الفعلي عبر أكثر من 500 مصدر بالعربية والإنجليزية.',
    },
    {
      id: 'municipalities',
      icon: Building,
      title: t('industries.municipalities.title'),
      description: t('industries.municipalities.description'),
      color: '#00D4AA',
      solutions: language === 'en'
        ? ['Smart City Infrastructure', 'IoT Sensor Networks', 'Traffic Management', 'Waste Management', 'Citizen Engagement Apps']
        : ['البنية التحتية للمدن الذكية', 'شبكات أجهزة الاستشعار', 'إدارة المرور', 'إدارة النفايات', 'تطبيقات مشاركة المواطنين'],
      caseStudy: language === 'en'
        ? 'Deployed smart city solutions across 3 municipalities, reducing energy consumption by 25%.'
        : 'تم نشر حلول المدن الذكية عبر 3 بلديات، مما قلل استهلاك الطاقة بنسبة 25%.',
    },
    {
      id: 'private',
      icon: Briefcase,
      title: t('industries.private.title'),
      description: t('industries.private.description'),
      color: '#C9A227',
      solutions: language === 'en'
        ? ['Enterprise Resource Planning', 'Business Intelligence', 'Process Automation', 'Cloud Migration', 'Digital Workplace']
        : ['تخطيط موارد المؤسسة', 'ذكاء الأعمال', 'أتمتة العمليات', 'الانتقال إلى السحابة', 'مكان العمل الرقمي'],
      caseStudy: language === 'en'
        ? 'Completed digital transformation for Fortune 500 company, achieving 35% operational efficiency gains.'
        : 'أكملنا التحول الرقمي لشركة فورتشن 500، محققين مكاسب في الكفاءة التشغيلية بنسبة 35%.',
    },
    {
      id: 'health',
      icon: Heart,
      title: language === 'en' ? 'Healthcare' : 'الرعاية الصحية',
      description: language === 'en'
        ? 'Digital health solutions for hospitals, clinics, and healthcare providers.'
        : 'حلول الصحة الرقمية للمستشفيات والعيادات ومقدمي الرعاية الصحية.',
      color: '#00D4AA',
      solutions: language === 'en'
        ? ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Management', 'Medical AI Diagnostics', 'Healthcare Analytics']
        : ['السجلات الصحية الإلكترونية', 'منصات الطب عن بعد', 'إدارة المرضى', 'تشخيصات الذكاء الاصطناعي الطبي', 'تحليلات الرعاية الصحية'],
      caseStudy: language === 'en'
        ? 'Implemented integrated healthcare platform across 15 hospitals, improving patient care coordination by 45%.'
        : 'تم تنفيذ منصة رعاية صحية متكاملة عبر 15 مستشفى، مما حسّن تنسيق رعاية المرضى بنسبة 45%.',
    },
    {
      id: 'retail',
      icon: Store,
      title: language === 'en' ? 'Retail' : 'التجزئة',
      description: language === 'en'
        ? 'Omnichannel retail solutions for modern shopping experiences.'
        : 'حلول التجزئة متعددة القنوات لتجارب تسوق حديثة.',
      color: '#C9A227',
      solutions: language === 'en'
        ? ['Point of Sale Systems', 'Inventory Optimization', 'Customer Loyalty Programs', 'Supply Chain Management', 'Retail Analytics']
        : ['أنظمة نقاط البيع', 'تحسين المخزون', 'برامج ولاء العملاء', 'إدارة سلسلة التوريد', 'تحليلات التجزئة'],
      caseStudy: language === 'en'
        ? 'Deployed unified retail platform for major chain with 200+ stores, increasing sales by 28% through data-driven insights.'
        : 'تم نشر منصة تجزئة موحدة لسلسلة كبرى تضم أكثر من 200 متجر، مما زاد المبيعات بنسبة 28% من خلال رؤى مبنية على البيانات.',
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
            alt="Industries Background"
            className="w-full h-full object-cover opacity-87"
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
              {language === 'en' ? 'Sectors We Serve' : 'القطاعات التي نخدمها'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('industries.title')}
            </h1>
            <p className={`text-xl text-white leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('industries.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                className={`p-8 rounded-2xl border-2 border-[#32a7b5]/20 hover:border-[#32a7b5] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <div className={`flex items-center gap-4 mb-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md bg-[#32a7b5]/10 border-2 border-[#32a7b5]/30">
                        <industry.icon className="w-7 h-7 text-[#32a7b5]" />
                      </div>
                      <h3 className={`text-2xl font-bold text-black ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                        {industry.title}
                      </h3>
                    </div>
                    <p className={`text-gray-700 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {industry.description}
                    </p>
                  </div>

                  {/* Solutions */}
                  <div className="lg:col-span-1">
                    <h4 className={`text-sm font-bold text-[#32a7b5] uppercase tracking-wider mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {language === 'en' ? 'Solutions' : 'الحلول'}
                    </h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#32a7b5]" />
                          <span className={`text-gray-700 text-sm font-medium ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                            {solution}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="lg:col-span-1">
                    <h4 className={`text-sm font-bold text-[#32a7b5] uppercase tracking-wider mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {language === 'en' ? 'Success Story' : 'قصة نجاح'}
                    </h4>
                    <p className={`text-gray-700 text-sm leading-relaxed mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {industry.caseStudy}
                    </p>
                    <Link href="/contact">
                      <motion.button
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-[#32a7b5] text-white font-bold rounded-lg  shadow-md hover:shadow-lg transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                        whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                      >
                        {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                        <ArrowIcon className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-[#314158] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Don\'t See Your Industry?' : 'لا ترى قطاعك؟'}
            </h2>
            <p className={`text-gray-700 text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'Our expertise extends across many sectors. Contact us to discuss how we can help transform your organization.'
                : 'تمتد خبرتنا عبر العديد من القطاعات. تواصل معنا لمناقشة كيف يمكننا المساعدة في تحويل مؤسستك.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5 bg-[#32a7b5] text-white font-bold text-lg rounded-xl shadow-lg  hover:shadow-xl transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
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