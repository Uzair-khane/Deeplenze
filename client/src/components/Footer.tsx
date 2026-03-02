import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/images/logo.svg';
import pillersLogo from '@/assets/images/3pillers.svg';

export default function Footer() {
  const { t, dir, language } = useLanguage();
  const isRTL = dir === 'rtl';

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/products', label: t('nav.products') },
    { href: '/industries', label: t('nav.industries') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const services = [
    { label: t('services.ai.title') },
    { label: t('services.cyber.title') },
    { label: t('services.digital.title') },
    { label: t('services.aws.title') },
  ];

  return (
    <footer className="bg-slate-50">

      {/* Main footer content */}
      <div className="container mx-auto px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${isRTL ? 'text-right' : ''}`}>

          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/">
              <img src={logo} alt="Logo" className="h-20 w-auto object-contain cursor-pointer" />
            </Link>
            <p className={`text-slate-500 text-sm leading-relaxed my-8 max-w-xs ${isRTL ? 'font-arabic' : 'font-body'}`}>
              {t('footer.description')}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'justify-start' : ''}`}>
              {[Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-md border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#32a7b5] hover:border-[#32a7b5] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-slate-800 font-bold text-sm uppercase tracking-widest mb-4 ${isRTL ? 'font-arabic' : 'font-display'}`}>
              {t('footer.quicklinks')}
            </h4>
            {/* Colored underline accent */}
            <div className="w-8 h-0.5 bg-[#32a7b5] mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className={`text-slate-500 hover:text-[#32a7b5] transition-colors text-sm cursor-pointer ${isRTL ? 'font-arabic' : 'font-body'}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-slate-800 font-bold text-sm uppercase tracking-widest mb-4 ${isRTL ? 'font-arabic' : 'font-display'}`}>
              {t('footer.services')}
            </h4>
            <div className="w-8 h-0.5 bg-[#32a7b5] mb-6" />
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="/services">
                    <span className={`text-slate-500 hover:text-[#32a7b5] transition-colors text-sm cursor-pointer ${isRTL ? 'font-arabic' : 'font-body'}`}>
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
         <div>
  <h4 className={`text-slate-800 font-bold text-sm uppercase tracking-widest mb-4 ${isRTL ? 'font-arabic text-right' : 'font-display'}`}>
    {t('footer.contact')}
  </h4>
  <div className={`w-8 h-0.5 bg-[#32a7b5] mb-6 ${isRTL ? 'ml-auto' : ''}`} />

  <ul className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>

    {/* Email */}
    <li className="flex items-start gap-3">
      <Mail className="w-4 h-4 text-[#32a7b5] flex-shrink-0 mt-0.5" />
      <span className={`text-slate-500 text-sm ${isRTL ? 'font-arabic' : 'font-body'}`}>
        {t('contact.info.email')}
      </span>
    </li>

    {/* Phone */}
    <li className="flex items-center gap-3">
      <Phone className="w-4 h-4 text-[#32a7b5] flex-shrink-0" />
      <span className="text-slate-500 text-sm font-body" dir="ltr">
        {t('contact.info.phone')}
      </span>
    </li>

    {/* Address */}
    <li className="flex items-start gap-3">
      <MapPin className="w-4 h-4 text-[#32a7b5] flex-shrink-0 mt-0.5" />
      <span className={`text-slate-500 text-sm ${isRTL ? 'font-arabic' : 'font-body'}`}>
        {t('contact.info.address')}
      </span>
    </li>

  </ul>
</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-8 py-4">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

            {/* Copyright */}
            <p className={`text-slate-400 text-sm ${isRTL ? 'font-arabic' : 'font-body'}`}>
              {t('footer.copyright')}
            </p>

            {/* Vision 2030 */}
            <div className="flex items-center gap-1.5 text-sm">
              <Link href="/privacy-policy">
                <span className="text-slate-400 hover:text-[#32a7b5] cursor-pointer transition-colors duration-200 hover:underline underline-offset-4">
                  Privacy Policy
                </span>
              </Link>
              <span className="text-slate-300">|</span>
              <Link href="/terms-conditions">
                <span className="text-slate-400 hover:text-[#32a7b5] cursor-pointer transition-colors duration-200 hover:underline underline-offset-4">
                  Terms & Conditions
                </span>
              </Link>
            </div>

            {/* Logos row — right side of bottom bar */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="https://3pillars-sa.com/" target="_blank">
                <motion.img
                  src={pillersLogo}
                  alt="3 Pillars"
                  className="h-10 w-auto object-contain cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}