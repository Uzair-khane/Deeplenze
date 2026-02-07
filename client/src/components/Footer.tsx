/* Desert Futurism Design - Footer Component
 * Geometric patterns with gold/teal accents
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/images/DeepLenz.svg';
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
    { label: t('services.smart.title') },
  ];

  return (
    <footer className="relative bg-[#050d18] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />

      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className={`space-y-6 ${dir === 'rtl' ? 'text-right' : ''}`}>
            <div className="flex items-center gap-3">
                      <Link href="/">
  <motion.div
    className="flex items-center gap-3 cursor-pointer"
    whileHover={{ scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
<img
  src={logo}
  alt="Logo"
  className="w-24 h-24 object-contain transition-transform duration-300"
/>


    {/* Optional Text */}
    {/* 
    <span className="text-white font-semibold text-lg tracking-wide">
      Deeplenz
    </span> 
    */}
  </motion.div>
</Link>
             
            </div>
            <p className={`text-gray-400 text-sm leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D4AA] hover:border-[#00D4AA]/30 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D4AA] hover:border-[#00D4AA]/30 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.quicklinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className={`text-gray-400 hover:text-[#00D4AA] transition-colors text-sm cursor-pointer ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services">
                    <span className={`text-gray-400 hover:text-[#00D4AA] transition-colors text-sm cursor-pointer ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className={`text-white font-semibold mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span className={`text-gray-400 text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {t('contact.info.address')}
                </span>
              </li>
              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                <span className="text-gray-400 text-sm font-body">
                  {t('contact.info.email')}
                </span>
              </li>
              <li className={`flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                <span className="text-gray-400 text-sm font-body" dir="ltr">
                  {t('contact.info.phone')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-gray-500 text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="font-body">Aligned with</span>
              <span className="text-[#C9A227] font-semibold">Vision 2030</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
