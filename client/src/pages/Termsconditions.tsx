import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from "@/assets/images/herosection.png";
export default function TermsConditions() {
  const { dir, language } = useLanguage();
  const isRTL = dir === 'rtl';

  const sections = [
    {
      number: '1.',
      title: language === 'en' ? 'Acceptance of Terms' : 'قبول الشروط',
      content: language === 'en'
        ? 'By accessing or using Deeplenze services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.'
        : 'بالوصول إلى خدمات ديب لنز أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.',
    },
    {
      number: '2.',
      title: language === 'en' ? 'Use of Services' : 'استخدام الخدمات',
      isList: true,
      items: language === 'en'
        ? [
            'You must be at least 18 years old to use our services.',
            'You agree not to misuse or attempt to disrupt our platform.',
            'You are responsible for maintaining the confidentiality of your account credentials.',
            'You agree to provide accurate and up-to-date information.',
          ]
        : [
            'يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام خدماتنا.',
            'توافق على عدم إساءة استخدام منصتنا أو محاولة تعطيلها.',
            'أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك.',
            'توافق على تقديم معلومات دقيقة ومحدّثة.',
          ],
    },
    {
      number: '3.',
      title: language === 'en' ? 'Intellectual Property' : 'الملكية الفكرية',
      content: language === 'en'
        ? 'All content, trademarks, and technology on our platform are owned by or licensed to Deeplenze. You may not copy, reproduce, or distribute any part of our services without prior written permission.'
        : 'جميع المحتويات والعلامات التجارية والتقنيات الموجودة على منصتنا مملوكة لشركة ديب لنز أو مرخصة لها. لا يجوز لك نسخ أي جزء من خدماتنا أو إعادة إنتاجه أو توزيعه دون إذن كتابي مسبق.',
    },
    {
      number: '4.',
      title: language === 'en' ? 'User Content' : 'محتوى المستخدم',
      content: language === 'en'
        ? 'You retain ownership of any content you submit. By submitting content, you grant Deeplenze a non-exclusive, royalty-free license to use it solely for providing and improving our services.'
        : 'تحتفظ بملكية أي محتوى تقدمه. بتقديم المحتوى، فإنك تمنح ديب لنز ترخيصاً غير حصري وخالياً من حقوق الملكية لاستخدامه فقط لتقديم خدماتنا وتحسينها.',
    },
    {
      number: '5.',
      title: language === 'en' ? 'Limitation of Liability' : 'تحديد المسؤولية',
      content: language === 'en'
        ? 'Deeplenze shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the past 12 months.'
        : 'لن تكون ديب لنز مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناجمة عن استخدامك لخدماتنا. لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته خلال الاثني عشر شهراً الماضية.',
    },
    {
      number: '6.',
      title: language === 'en' ? 'Termination' : 'الإنهاء',
      content: language === 'en'
        ? 'We reserve the right to suspend or terminate your access at any time if you violate these terms or engage in conduct harmful to other users or our platform.'
        : 'نحتفظ بالحق في تعليق وصولك أو إنهائه في أي وقت إذا انتهكت هذه الشروط أو تصرفت بطريقة ضارة بالمستخدمين الآخرين أو منصتنا.',
    },
    {
      number: '7.',
      title: language === 'en' ? 'Third-Party Links' : 'روابط الطرف الثالث',
      content: language === 'en'
        ? 'Our services may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.'
        : 'قد تحتوي خدماتنا على روابط لمواقع إلكترونية تابعة لجهات خارجية. نحن لسنا مسؤولين عن محتوى تلك المواقع أو ممارسات الخصوصية الخاصة بها.',
    },
    {
      number: '8.',
      title: language === 'en' ? 'Modifications to Terms' : 'تعديلات الشروط',
      content: language === 'en'
        ? 'We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.'
        : 'قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرار استخدامك للخدمات بعد التغييرات يُعدّ قبولاً للشروط المعدّلة.',
    },
    {
      number: '9.',
      title: language === 'en' ? 'Governing Law' : 'القانون الحاكم',
      content: language === 'en'
        ? 'These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Saudi Arabia.'
        : 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. وتخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية.',
    },
    {
      number: '10.',
      title: language === 'en' ? 'Contact' : 'تواصل معنا',
      content: language === 'en'
        ? 'For any questions regarding these Terms, please reach out to us at support@deeplenze.com.'
        : 'لأي أسئلة تتعلق بهذه الشروط، يرجى التواصل معنا على support@deeplenze.com.',
    },
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />

      <main className="flex-1 pt-20">

    
    {/* Hero */}
<div className="relative w-full pl-5 pr-8 py-24 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={HeroImage}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-blue-900/40" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <p className="text-[#32a7b5] text-sm font-semibold uppercase tracking-widest mb-3">
      {language === 'en' ? 'Legal' : 'قانوني'}
    </p>
    <h1 className={`text-4xl md:text-6xl font-bold text-white mb-5 ${isRTL ? 'font-arabic' : 'font-display'}`}>
      {language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
    </h1>
    <p className={`text-white/80 text-center text-lg leading-relaxed mb-4  ${isRTL ? 'font-arabic' : 'font-body'}`}>
      {language === 'en'
        ? "Please read these Terms and Conditions carefully before using Deeplenze's platform and services."
        : 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة وخدمات ديب لنز.'}
    </p>
    <p className="text-white/50 text-base">
      {language === 'en' ? 'Last updated: February 7, 2026' : 'آخر تحديث: ٧ فبراير ٢٠٢٦'}
    </p>
  </div>

</div>

        {/* Content */}
        <div className="w-full  pl-5 pr-8 py-14">
          <div className="space-y-10 max-w-4xl">
            {sections.map((section) => (
              <div key={section.number} className={isRTL ? 'text-right' : ''}>
                <h2 className={`text-3xl font-bold text-slate-900 mb-3 ${isRTL ? 'font-arabic' : 'font-display'}`}>
                  {section.number} {section.title}
                </h2>

                {section.isList && section.items ? (
                  <ul className={`space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className={`text-slate-600 text-lg leading-relaxed list-disc ${isRTL ? 'font-arabic' : 'font-body'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`text-slate-600  text-lg leading-relaxed ${isRTL ? 'font-arabic' : 'font-body'}`}>
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-14 border border-slate-200 rounded-xl p-8 bg-slate-50 max-w-4xl">
            <h3 className={`text-2xl font-bold text-slate-900 mb-2 ${isRTL ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
            </h3>
            <p className={`text-slate-600 text-lg ${isRTL ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? <>If you have any questions about these Terms, contact us at{' '}
                    <a href="mailto:support@deeplenze.com" className="text-[#32a7b5] hover:underline">support@deeplenze.com</a>.</>
                : <>إذا كانت لديك أي أسئلة حول هذه الشروط، تواصل معنا على{' '}
                    <a href="mailto:support@deeplenze.com" className="text-[#32a7b5] hover:underline">support@deeplenze.com</a>.</>
              }
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}