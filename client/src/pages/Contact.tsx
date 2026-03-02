/* Desert Futurism Design - Contact Page
 * Contact form and company information
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { useState } from 'react';
import HeroImage from "@/assets/images/herosection.png";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const { t, dir, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    product: '',   
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(
      language === 'en'
        ? 'Message sent successfully! We\'ll get back to you soon.'
        : 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      product: '',   
      message: '',
    });
    setIsSubmitting(false);
  };

  const services = language === 'en'
    ? [
      { value: 'ai', label: 'Artificial Intelligence' },
      { value: 'cyber', label: 'Cyber Security' },
      { value: 'digital', label: 'Digital Transformation' },
      { value: 'smart', label: 'Smart Cities' },
      { value: 'other', label: 'Other' },
    ]
    : [
      { value: 'ai', label: 'الذكاء الاصطناعي' },
      { value: 'cyber', label: 'الأمن السيبراني' },
      { value: 'digital', label: 'التحول الرقمي' },
      { value: 'smart', label: 'المدن الذكية' },
      { value: 'other', label: 'أخرى' },
    ];

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'en' ? '15 & 16 Riyadh Olaya Center, Riyadh, Saudi Arabia' : '15 و 16 مركز الرياض العليا، الرياض، المملكة العربية السعودية',
      details: [],
    },
    {
      icon: MapPin,
      title: language === 'en' ? '305 Al Worood Commercial Center, Jeddah, Saudi Arabia' : '305 مركز الورود التجاري، جدة، المملكة العربية السعودية',
      details: [],
    },
    {
      icon: MapPin,
      title: language === 'en' ? '305 & 306 Building B, B-SQUARE Nasr City, Cairo, Egypt' : '305 و 306 مبنى B، بي سكوير مدينة نصر، القاهرة، مصر',
      details: [],
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email Us' : 'راسلنا',
      details: ['sales@3pillars-sa.com', 'support@deeplenze.com.'],
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Call Us' : 'اتصل بنا',
      details: ['+966 11 245 8536'],
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Working Hours' : 'ساعات العمل',
      details: [
        language === 'en' ? 'Sunday - Thursday' : 'الأحد - الخميس',
        language === 'en' ? '9:00 AM - 6:00 PM' : '9:00 صباحاً - 6:00 مساءً',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
            </span> */}
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('contact.title')}
            </h1>
            <p className={`text-lg sm:text-xl text-white/90 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Contact Info */}
            <motion.div
              className={`lg:col-span-1 space-y-4 sm:space-y-6 ${dir === 'rtl' ? 'text-right' : ''}`}
              initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className={`text-xl sm:text-2xl font-bold text-[#32A7B5] mb-3 sm:mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                </h2>
                <p className={`text-muted-foreground text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {language === 'en'
                    ? 'Reach out to us through any of the following channels.'
                    : 'تواصل معنا من خلال أي من القنوات التالية.'}
                </p>
              </div>

              {/* Step 2: Rendering */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`p-4 sm:p-5 rounded-xl bg-white shadow-sm ${dir === 'rtl' ? 'text-right' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex items-center gap-3 sm:gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-slate-500 text-xs sm:text-sm font-medium break-words ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {info.title}
                      </p>
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-muted-foreground text-xs sm:text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <div className={`p-5 sm:p-8 rounded-2xl bg-white shadow-md ${dir === 'rtl' ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 mb-6 sm:mb-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className={`text-lg sm:text-xl font-bold text-[#32A7B5] ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                      {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                    </h2>
                    <p className={`text-muted-foreground text-xs sm:text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {language === 'en' ? "We'll respond within 24 hours" : 'سنرد خلال 24 ساعة'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                        placeholder={language === 'en' ? 'Your full name' : 'اسمك الكامل'}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                        placeholder={language === 'en' ? 'your@email.com' : 'بريدك@الإلكتروني.com'}
                        dir="ltr"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-sm sm:text-base"
                        placeholder="+966 XX XXX XXXX"
                        dir="ltr"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                        placeholder={language === 'en' ? 'Company name' : 'اسم الشركة'}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {t('contact.form.service')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                    >
                      <option value="">{language === 'en' ? 'Select a service' : 'اختر خدمة'}</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Product of Interest */}
                  <div>
                    <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {language === 'en' ? 'Product of Interest' : 'المنتج المطلوب'}
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                    >
                      <option value="">{language === 'en' ? 'Select a product' : 'اختر منتجاً'}</option>
                      <option value="nalyst">{language === 'en' ? 'Nalyst' : 'نالست'}</option>
                      <option value="newshunt">{language === 'en' ? 'Newshunt' : 'نيوزهانت'}</option>
                      <option value="4kast">{language === 'en' ? '4Kast' : '4كاست'}</option>
                      <option value="hr360">Hr360</option>
                      <option value="hoorapp">{language === 'en' ? 'HoorApp' : 'هور آب'}</option>
                      <option value="diraa">{language === 'en' ? 'Diraa' : 'دراع'}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-sm font-medium text-slate-700 mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                      placeholder={language === 'en' ? 'Tell us about your project or inquiry...' : 'أخبرنا عن مشروعك أو استفسارك...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#32A7B5] text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span>{language === 'en' ? 'Sending...' : 'جاري الإرسال...'}</span>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-20 relative bg-[#E0F2F4] overflow-hidden">

        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#32a7b5]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#32a7b5]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* Heading */}
          <motion.div
            className={`text-center mb-8 sm:mb-12 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-4 h-4" />
              {language === 'en' ? 'Find Us' : 'جدنا'}
            </motion.div> */}

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#314158] mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Our Location' : 'موقعنا'}
            </h2>
            <p className={`text-slate-600 text-sm sm:text-base ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Visit us at our headquarters in Riyadh' : 'زورنا في مقرنا الرئيسي في الرياض'}
            </p>
          </motion.div>

          {/* Map Card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Map iframe */}
            <div className="h-[280px] sm:h-[380px] md:h-[450px] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3!2d46.6828!3d24.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sOlaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Info Card overlay - hidden on mobile */}
            <motion.div
              className="hidden sm:block absolute bottom-5 left-5 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#32a7b5]/10 border border-[#32a7b5]/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#32a7b5]" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-[#314158] mb-0.5 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                    {language === 'en' ? ' Headquarters' : 'المقر الرئيسي'}
                  </h4>
                  <p className={`text-xs text-slate-500 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {language === 'en' ? '15 & 16 Riyadh Olaya Center, Riyadh' : '15 و 16 مركز الرياض العليا، الرياض'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Open in Maps button - top right */}
            <motion.a
              href="https://www.google.com/maps?q=Riyadh+Olaya+Center,+Riyadh,+Saudi+Arabia&z=16"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-md text-[#32a7b5] text-xs sm:text-sm font-bold border border-[#32a7b5]/20 hover:bg-[#32a7b5] hover:text-white hover:border-[#32a7b5] transition-all duration-300"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {language === 'en' ? 'Open in Google Maps' : 'فتح في خرائط جوجل'}
            </motion.a>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}