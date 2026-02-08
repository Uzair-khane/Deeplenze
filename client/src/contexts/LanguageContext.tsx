import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About Us', ar: 'من نحن' },
  'nav.services': { en: 'Services', ar: 'خدماتنا' },
  'nav.products': { en: 'Products', ar: 'منتجاتنا' },
  'nav.industries': { en: 'Industries', ar: 'القطاعات' },
  'nav.contact': { en: 'Contact Us', ar: 'اتصل بنا' },
  
  // Hero Section
  'hero.title': { en: 'Transforming Tomorrow', ar: 'نصنع المستقبل' },
  'hero.subtitle': { en: 'Through Innovation', ar: 'من خلال الابتكار' },
  'hero.description': { en: 'Leading Saudi Arabia\'s digital transformation with cutting-edge AI, Cybersecurity, and Smart City solutions aligned with Vision 2030.', ar: 'نقود التحول الرقمي في المملكة العربية السعودية من خلال حلول الذكاء الاصطناعي والأمن السيبراني والمدن الذكية المتوافقة مع رؤية 2030.' },
  'hero.cta.services': { en: 'Explore Services', ar: 'استكشف خدماتنا' },
  'hero.cta.contact': { en: 'Get in Touch', ar: 'تواصل معنا' },
  
  // Services Section
  'services.title': { en: 'Our Expertise', ar: 'خبراتنا' },
  'services.subtitle': { en: 'Four Pillars of Digital Excellence', ar: 'أربعة ركائز للتميز الرقمي' },
  'services.ai.title': { en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
  'services.ai.description': { en: 'Harness the power of machine learning and AI to automate processes, gain insights, and drive innovation across your organization.', ar: 'استفد من قوة التعلم الآلي والذكاء الاصطناعي لأتمتة العمليات واكتساب الرؤى ودفع الابتكار في مؤسستك.' },
  'services.cyber.title': { en: 'Cyber Security', ar: 'الأمن السيبراني' },
  'services.cyber.description': { en: 'Protect your digital assets with comprehensive security solutions, threat detection, and compliance frameworks tailored for the Saudi market.', ar: 'احمِ أصولك الرقمية من خلال حلول أمنية شاملة واكتشاف التهديدات وأطر الامتثال المصممة للسوق السعودي.' },
  'services.digital.title': { en: 'Digital Transformation', ar: 'التحول الرقمي' },
  'services.digital.description': { en: 'Navigate your digital journey with strategic consulting, process optimization, and technology integration aligned with Vision 2030.', ar: 'انتقل في رحلتك الرقمية من خلال الاستشارات الاستراتيجية وتحسين العمليات وتكامل التكنولوجيا المتوافقة مع رؤية 2030.' },
  'services.smart.title': { en: 'Smart Cities', ar: 'المدن الذكية' },
  'services.smart.description': { en: 'Build intelligent urban infrastructure with IoT solutions, data analytics, and sustainable technologies for the cities of tomorrow.', ar: 'ابنِ بنية تحتية حضرية ذكية مع حلول إنترنت الأشياء وتحليلات البيانات والتقنيات المستدامة لمدن الغد.' },
  'services.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },
  
  // Products Section
  'products.title': { en: 'Our Products', ar: 'منتجاتنا' },
  'products.subtitle': { en: 'Innovative Solutions for Modern Challenges', ar: 'حلول مبتكرة للتحديات الحديثة' },
  'products.nalyst.name': { en: 'Nalyst', ar: 'ناليست' },
  'products.nalyst.description': { en: 'Advanced analytics platform powered by AI for data-driven decision making.', ar: 'منصة تحليلات متقدمة مدعومة بالذكاء الاصطناعي لاتخاذ القرارات المبنية على البيانات.' },
  'products.newshunt.name': { en: 'NewsHunt', ar: 'نيوز هانت' },
  'products.newshunt.description': { en: 'Intelligent news aggregation and media monitoring solution.', ar: 'حل ذكي لتجميع الأخبار ومراقبة وسائل الإعلام.' },
  'products.asaad.name': { en: 'Asaad', ar: 'أسعد' },
  'products.asaad.description': { en: 'Comprehensive cybersecurity suite for enterprise protection.', ar: 'مجموعة شاملة للأمن السيبراني لحماية المؤسسات.' },
  'products.khella.name': { en: 'Khella', ar: 'خلة' },
  'products.khella.description': { en: 'Smart communication and collaboration platform.', ar: 'منصة ذكية للتواصل والتعاون.' },
  'products.4kast.name': { en: '4kast', ar: 'فوركاست' },
  'products.4kast.description': { en: 'Predictive analytics and forecasting engine.', ar: 'محرك التحليلات التنبؤية والتوقعات.' },
  'products.hr360.name': { en: 'HR360', ar: 'إتش آر 360' },
  'products.hr360.description': { en: 'Complete human resources management system.', ar: 'نظام إدارة الموارد البشرية المتكامل.' },
  
  // Industries Section
  'industries.title': { en: 'Industries We Serve', ar: 'القطاعات التي نخدمها' },
  'industries.subtitle': { en: 'Tailored Solutions Across Sectors', ar: 'حلول مخصصة عبر القطاعات' },
  'industries.government.title': { en: 'Government Organizations', ar: 'المنظمات الحكومية' },
  'industries.government.description': { en: 'Digital transformation solutions for public sector efficiency and citizen services.', ar: 'حلول التحول الرقمي لكفاءة القطاع العام وخدمات المواطنين.' },
  'industries.thinktanks.title': { en: 'Think Tanks', ar: 'مراكز الأبحاث' },
  'industries.thinktanks.description': { en: 'Research analytics and knowledge management platforms.', ar: 'منصات تحليلات البحث وإدارة المعرفة.' },
  'industries.ecommerce.title': { en: 'E-Commerce', ar: 'التجارة الإلكترونية' },
  'industries.ecommerce.description': { en: 'Secure, scalable digital commerce solutions.', ar: 'حلول التجارة الرقمية الآمنة والقابلة للتطوير.' },
  'industries.media.title': { en: 'Media Departments', ar: 'الأقسام الإعلامية' },
  'industries.media.description': { en: 'Content management and media intelligence solutions.', ar: 'حلول إدارة المحتوى والذكاء الإعلامي.' },
  'industries.municipalities.title': { en: 'Municipalities', ar: 'البلديات' },
  'industries.municipalities.description': { en: 'Smart city infrastructure and citizen engagement platforms.', ar: 'البنية التحتية للمدن الذكية ومنصات مشاركة المواطنين.' },
  'industries.private.title': { en: 'Private Companies', ar: 'الشركات الخاصة' },
  'industries.private.description': { en: 'Enterprise solutions for digital growth and operational excellence.', ar: 'حلول المؤسسات للنمو الرقمي والتميز التشغيلي.' },
  
  // About Section
  'about.title': { en: 'About Deeplenze', ar: 'عن تك فيجن' },
  'about.subtitle': { en: 'Pioneering Digital Excellence in Saudi Arabia', ar: 'ريادة التميز الرقمي في المملكة العربية السعودية' },
  'about.description': { en: 'Deeplenze is a leading technology consulting firm headquartered in Saudi Arabia, dedicated to driving digital transformation across the Kingdom. Our team of experts combines deep technical knowledge with regional insights to deliver innovative solutions that align with Vision 2030.', ar: 'تك فيجن هي شركة استشارات تقنية رائدة مقرها في المملكة العربية السعودية، مكرسة لدفع التحول الرقمي في جميع أنحاء المملكة. يجمع فريقنا من الخبراء بين المعرفة التقنية العميقة والرؤى الإقليمية لتقديم حلول مبتكرة تتوافق مع رؤية 2030.' },
  'about.mission.title': { en: 'Our Mission', ar: 'مهمتنا' },
  'about.mission.description': { en: 'To empower organizations with cutting-edge technology solutions that drive growth, enhance security, and create sustainable digital ecosystems.', ar: 'تمكين المؤسسات من خلال حلول تقنية متطورة تدفع النمو وتعزز الأمان وتخلق أنظمة رقمية مستدامة.' },
  'about.vision.title': { en: 'Our Vision', ar: 'رؤيتنا' },
  'about.vision.description': { en: 'To be the premier technology partner for organizations seeking to thrive in the digital age, setting the standard for innovation in the Middle East.', ar: 'أن نكون الشريك التقني الأول للمؤسسات التي تسعى للازدهار في العصر الرقمي، ووضع معايير الابتكار في الشرق الأوسط.' },
  'about.values.title': { en: 'Our Values', ar: 'قيمنا' },
  'about.values.innovation': { en: 'Innovation', ar: 'الابتكار' },
  'about.values.excellence': { en: 'Excellence', ar: 'التميز' },
  'about.values.integrity': { en: 'Integrity', ar: 'النزاهة' },
  'about.values.partnership': { en: 'Partnership', ar: 'الشراكة' },
  
  // Contact Section
  'contact.title': { en: 'Get in Touch', ar: 'تواصل معنا' },
  'contact.subtitle': { en: 'Let\'s Build the Future Together', ar: 'لنبني المستقبل معاً' },
  'contact.form.name': { en: 'Full Name', ar: 'الاسم الكامل' },
  'contact.form.email': { en: 'Email Address', ar: 'البريد الإلكتروني' },
  'contact.form.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
  'contact.form.company': { en: 'Company Name', ar: 'اسم الشركة' },
  'contact.form.service': { en: 'Service of Interest', ar: 'الخدمة المطلوبة' },
  'contact.form.message': { en: 'Your Message', ar: 'رسالتك' },
  'contact.form.submit': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'contact.info.address': { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
  'contact.info.email': { en: 'info@Deeplenze.sa', ar: 'info@Deeplenze.sa' },
  'contact.info.phone': { en: '+966 11 XXX XXXX', ar: '+966 11 XXX XXXX' },
  
  // Footer
  'footer.description': { en: 'Leading Saudi Arabia\'s digital transformation journey with innovative technology solutions.', ar: 'نقود رحلة التحول الرقمي في المملكة العربية السعودية من خلال حلول تقنية مبتكرة.' },
  'footer.quicklinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.services': { en: 'Our Services', ar: 'خدماتنا' },
  'footer.contact': { en: 'Contact Info', ar: 'معلومات الاتصال' },
  'footer.copyright': { en: '© 2024 Deeplenze. All rights reserved.', ar: '© 2024 تك فيجن. جميع الحقوق محفوظة.' },
  
  // Common
  'common.readMore': { en: 'Read More', ar: 'اقرأ المزيد' },
  'common.viewAll': { en: 'View All', ar: 'عرض الكل' },
  'common.loading': { en: 'Loading...', ar: 'جاري التحميل...' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
