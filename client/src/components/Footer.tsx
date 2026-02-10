/* Footer.jsx - Desert Futurism Gold/Slate Theme */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/images/logo.svg';

export default function Footer() {
  const { t, dir, language } = useLanguage();

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
    <footer className="relative bg-white  overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className={dir === 'rtl' ? 'text-right space-y-6' : 'space-y-6'}>
            <Link href="/" className="ml-0 pl-0">
              <motion.div
                className="flex items-center gap-3 cursor-pointer ml-0 pl-0"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-24 h-24 ml-0 pl-0 mb-6 object-contain"
                />
              </motion.div>
            </Link>

            <p className={`text-slate-600 text-sm leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-slate-700 font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.quicklinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className={`text-slate-600 hover:text-sky-500 transition-colors text-sm cursor-pointer ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-slate-700 font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="/services">
                    <span className={`text-slate-600 hover:text-sky-500 transition-colors text-sm cursor-pointer ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-slate-700 font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-[#32a7b5] flex-shrink-0 mt-0.5" />
                <span className={`text-slate-600 text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {t('contact.info.address')}
                </span>
              </li>

              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-[#32a7b5] flex-shrink-0" />
                <span className="text-slate-600 text-sm font-body">
                  {t('contact.info.email')}
                </span>
              </li>

              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-[#32a7b5] flex-shrink-0" />
                <span className="text-slate-600 text-sm font-body" dir="ltr">
                  {t('contact.info.phone')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-slate-600 text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <span className="font-body">Aligned with</span>
              <span className="text-[#32a7b5] font-semibold">Vision 2030</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
