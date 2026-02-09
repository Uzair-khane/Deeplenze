/* Desert Futurism Design - Header Component
 * Floating glass navigation with language switcher
 * Colors: Midnight Blue bg, Gold/Teal accents
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/images/DeepLenz.svg';

export default function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/products', label: t('nav.products') },
    { href: '/industries', label: t('nav.industries') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-3 glass shadow-sm'
        : 'py-5 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-18 h-18 object-contain transition-transform duration-300"
              />


              {/* Optional Text */}
              {/* 
    <span className="text-foreground font-semibold text-lg tracking-wide">
      Deeplenz
    </span> 
    */}
            </motion.div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link key={link.href} href={link.href}>
      <motion.span
        className={`relative text-sm font-medium transition-colors cursor-pointer ${
          location === link.href
            ? 'text-[#32a7b5]'
            : 'text-black hover:text-black'
        } ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {link.label}
        {location === link.href && (
          <motion.div
            className="absolute -bottom-1 left-1 right-1 h-0.5 bg-[#32a7b5]"
            layoutId="activeNav"
          />
        )}
      </motion.span>
    </Link>
  ))}
</div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-black"
            >
              <Globe className="w-4 h-4" />
              <span className={`text-sm font-medium ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                {language === 'en' ? 'العربية' : 'ENG'}
              </span>
            </button>

            <Link href="/contact">
              <button
                className="px-5 py-2.5 bg-transparent text-black font-semibold text-sm rounded-lg border border-black"
              >
                <span className={dir === 'rtl' ? 'font-arabic' : 'font-body'}>
                  {t('nav.contact')}
                </span>
              </button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-secondary/30 text-secondary"
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-10 h-10 text-sky-400" />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="py-4 px-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-colors cursor-pointer ${location === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        } ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
