/* Desert Futurism Design - About Page
 * Company story, mission, vision, values
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe2, Zap, Shield } from 'lucide-react';

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/cJitkDjaOurylpAqKOrTJu/sandbox/O6ymgbeo1BgDfhRv3o7SAz-img-1_1770235129000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0ppdGtEamFPdXJ5bHBBcUtPclRKdS9zYW5kYm94L082eW1nYmVvMUJnRGZoUnYzbzdTQXotaW1nLTFfMTc3MDIzNTEyOTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dwAlh~IW-KDhDfweKDxBK4-SrlOg8OFvkg26CWk7AwrbIkuGn2G4mghPkgkkId1aSbeqSYbbk4gVGDkMHPXhR7GwnpYFeQTf1LYbXd4M0RCEmuZi75Iik6d5mwfvLMI0dqeUzIOoAKYqw0obJKq8XllH1cxNBxl9Cgkq07uz3Rxyw3HXSX2LHLJohfnmB-9Zn70wKjONVJzCAOcuGXEw8m3ULpFXkfs1lAqHD3TU3sLPpad4CUn80JkJmRPUrKocI5uP1A9104xpLk69i1VElrIsCCgdnBSfyehakKv6LO7q1cXylqC8yfb6QtBH1p0099VB50bxKMwIDzLKREGZgg__";

export default function About() {
  const { t, dir, language } = useLanguage();

  const values = [
    {
      icon: Zap,
      title: t('about.values.innovation'),
      description: language === 'en'
        ? 'Constantly pushing boundaries to deliver cutting-edge solutions.'
        : 'نسعى دائماً لتجاوز الحدود وتقديم حلول متطورة.'
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: language === 'en'
        ? 'Committed to the highest standards in everything we do.'
        : 'ملتزمون بأعلى المعايير في كل ما نقوم به.'
    },
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: language === 'en'
        ? 'Building trust through transparency and ethical practices.'
        : 'بناء الثقة من خلال الشفافية والممارسات الأخلاقية.'
    },
    {
      icon: Users,
      title: t('about.values.partnership'),
      description: language === 'en'
        ? 'Collaborating closely with clients to achieve shared success.'
        : 'التعاون الوثيق مع العملاء لتحقيق النجاح المشترك.'
    },
  ];

  const stats = [
    { value: '100+', label: language === 'en' ? 'Projects Delivered' : 'مشروع منجز' },
    { value: '50+', label: language === 'en' ? 'Enterprise Clients' : 'عميل مؤسسي' },
    { value: '6', label: language === 'en' ? 'Innovative Products' : 'منتجات مبتكرة' },
    { value: '4', label: language === 'en' ? 'Service Verticals' : 'قطاعات خدمية' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="About Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl ${dir === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Who We Are' : 'من نحن'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('about.title')}
            </h1>
            <p className={`text-xl text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              className={dir === 'rtl' ? 'text-right order-2 lg:order-1' : 'order-2 lg:order-1'}
              initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                {language === 'en' ? 'Our Story' : 'قصتنا'}
              </h2>
              <div className={`space-y-4 text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                <p>{t('about.description')}</p>
                <p>
                  {language === 'en'
                    ? 'Founded with a vision to bridge the gap between traditional business practices and modern technology, we have grown to become a trusted partner for organizations across Saudi Arabia and the wider Gulf region.'
                    : 'تأسسنا برؤية لسد الفجوة بين ممارسات الأعمال التقليدية والتكنولوجيا الحديثة، ونمونا لنصبح شريكاً موثوقاً للمؤسسات في جميع أنحاء المملكة العربية السعودية ومنطقة الخليج الأوسع.'
                  }
                </p>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl glass text-center border-border shadow-sm ${dir === 'rtl' ? 'font-arabic' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                    <div className={`text-muted-foreground text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative bg-background">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className={`p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 ${dir === 'rtl' ? 'text-right' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center gap-4 mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className={`text-2xl font-bold text-primary ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {t('about.mission.title')}
                </h3>
              </div>
              <p className={`text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                {t('about.mission.description')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className={`p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 ${dir === 'rtl' ? 'text-right' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={`flex items-center gap-4 mb-6 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className={`text-2xl font-bold text-primary ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {t('about.vision.title')}
                </h3>
              </div>
              <p className={`text-muted-foreground leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className={`text-center mb-16 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              {language === 'en' ? 'What Drives Us' : 'ما يحركنا'}
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 ${dir === 'rtl' ? 'text-right' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className={`text-lg font-bold text-primary mb-2 group-hover:text-primary transition-colors ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {value.title}
                </h3>
                <p className={`text-muted-foreground text-sm leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            className={`max-w-4xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8">
              <Globe2 className="w-10 h-10 text-white" />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Aligned with Saudi Vision 2030' : 'متوافقون مع رؤية السعودية 2030'}
            </h2>
            <p className={`text-muted-foreground text-lg leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'Our commitment to innovation and digital transformation directly supports the Kingdom\'s ambitious Vision 2030 goals. We are proud to contribute to building a thriving digital economy and developing local talent to lead the technological future of Saudi Arabia.'
                : 'التزامنا بالابتكار والتحول الرقمي يدعم بشكل مباشر أهداف رؤية المملكة الطموحة 2030. نحن فخورون بالمساهمة في بناء اقتصاد رقمي مزدهر وتطوير المواهب المحلية لقيادة المستقبل التكنولوجي للمملكة العربية السعودية.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
