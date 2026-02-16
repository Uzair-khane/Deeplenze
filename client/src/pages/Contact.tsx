/* Desert Futurism Design - Contact Page
 * Contact form and company information
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */

import { useState } from 'react';
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
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
      title: language === 'en' ? 'Visit Us' : 'زورنا',
      details: [
        language === 'en' ? 'King Fahd Road' : 'طريق الملك فهد',
        language === 'en' ? 'Riyadh, Saudi Arabia' : 'الرياض، المملكة العربية السعودية',
      ],
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email Us' : 'راسلنا',
      details: ['info@techvision.sa', 'support@techvision.sa'],
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Call Us' : 'اتصل بنا',
      details: ['+966 11 XXX XXXX', '+966 11 XXX XXXX'],
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
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full bg-[#32a7b5]/10 border border-[#32a7b5]/30 text-[#32a7b5] text-sm font-bold mb-6 tracking-wide uppercase ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
            </span>
            <h1 className={`text-4xl md:text-6xl font-bold text-[#1D293D] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('contact.title')}
            </h1>
            <p className={`text-xl text-slate-600 leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className={`lg:col-span-1 space-y-6 ${dir === 'rtl' ? 'text-right' : ''}`}
              initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
            >
              <div className="mb-8">
                <h2 className={`text-2xl font-bold text-[#32A7B5] mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                </h2>
                <p className={`text-muted-foreground ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {language === 'en'
                    ? 'Reach out to us through any of the following channels.'
                    : 'تواصل معنا من خلال أي من القنوات التالية.'
                  }
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-xl bg-white  shadow-sm ${dir === 'rtl' ? 'text-right' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex items-start gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className={`text-[#32A7B5] font-semibold mb-1 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className={`text-muted-foreground text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
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
              <div className={`p-8 rounded-2xl bg-white  shadow-md ${dir === 'rtl' ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-3 mb-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold text-[#32A7B5]  ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                      {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
                    </h2>
                    <p className={`text-muted-foreground text-sm ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                      {language === 'en' ? 'We\'ll respond within 24 hours' : 'سنرد خلال 24 ساعة'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50  text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
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
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
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
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body`}
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
                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
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
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                    >
                      <option value="">{language === 'en' ? 'Select a service' : 'اختر خدمة'}</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
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
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 text-slate-800 placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none ${dir === 'rtl' ? 'font-arabic text-right' : 'font-body'}`}
                      placeholder={language === 'en' ? 'Tell us about your project or inquiry...' : 'أخبرنا عن مشروعك أو استفسارك...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#32A7B5] text-primary-foreground font-bold rounded-lg hover:shadow-lg  transition-all disabled:opacity-50 disabled:cursor-not-allowed ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span>{language === 'en' ? 'Sending...' : 'جاري الإرسال...'}</span>
                    ) : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 relative bg-[#E0F2F4]">
        <div className="container mx-auto px-4">
          <motion.div
            className={`text-center mb-12 ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
          >
            <h2 className={`text-3xl font-bold text-[#314158] mb-4 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Our Location' : 'موقعنا'}
            </h2>
            <p className={`text-slate-600 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en' ? 'Visit us at our headquarters in Riyadh' : 'زورنا في مقرنا الرئيسي في الرياض'}
            </p>
          </motion.div>

          <motion.div
            className="rounded-md overflow-hidden h-[400px] relative bg-slate-100 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
          >
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className={`text-xl font-bold text-[#314158] mb-2 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                  {language === 'en' ? 'TechVision Headquarters' : 'المقر الرئيسي لتك فيجن'}
                </h3>
                <p className={`text-muted-foreground ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                  {language === 'en' ? 'King Fahd Road, Riyadh, Saudi Arabia' : 'طريق الملك فهد، الرياض، المملكة العربية السعودية'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
