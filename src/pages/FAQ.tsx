import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      id: 0,
      question: 'Are lab-grown diamonds real diamonds?',
      answer: 'Absolutely! Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They are grown in controlled laboratory environments using advanced technology that replicates the natural diamond formation process. The only difference is their origin – they are created in a lab rather than deep within the Earth, making them more ethical and sustainable.',
    },
    {
      id: 1,
      question: 'How are lab-grown diamonds certified?',
      answer: 'Our diamonds are certified by the Gemological Institute of America (GIA), the world\'s most respected diamond certification authority. Each diamond receives a comprehensive assessment of the 4 Cs: Carat weight, Color, Clarity, and Cut. You\'ll receive a detailed certification report with your diamond.',
    },
    {
      id: 2,
      question: 'Are lab-grown diamonds more affordable?',
      answer: 'Yes, lab-grown diamonds are typically 40-70% more affordable than mined diamonds of comparable quality. This price difference reflects the lower environmental impact and shorter production time. You get the same luxury and beauty at a better value.',
    },
    {
      id: 3,
      question: 'Do lab-grown diamonds hold their value?',
      answer: 'Lab-grown diamonds hold their value well, though their resale value may differ from mined diamonds due to market perception. We recommend viewing your diamond as a personal luxury item and symbol of love rather than a financial investment.',
    },
    {
      id: 4,
      question: 'How do I care for my diamond?',
      answer: 'Lab-grown diamonds require the same care as mined diamonds. We recommend cleaning your diamond regularly with a soft brush, mild soap, and warm water. Avoid exposing it to harsh chemicals or extreme temperature changes. For professional cleaning, visit a jeweler annually.',
    },
    {
      id: 5,
      question: 'What about the lifetime warranty?',
      answer: 'All Aurelion diamonds come with a lifetime warranty covering manufacturing defects and structural integrity. This warranty protects against damage due to normal wear and ensures your diamond remains as brilliant as the day you received it.',
    },
    {
      id: 6,
      question: 'Can I customize my engagement ring?',
      answer: 'Yes! We offer full customization through our Bespoke service. You can choose your diamond, metal, setting design, and more. Our expert consultants will work with you to create a unique piece that perfectly reflects your style and vision.',
    },
    {
      id: 7,
      question: 'How long does custom jewelry take?',
      answer: 'Bespoke pieces typically take 4-6 weeks from the time your design is finalized. Rush services are available for an additional fee. We keep you updated throughout the creation process with progress photos and updates.',
    },
    {
      id: 8,
      question: 'What are your shipping and delivery options?',
      answer: 'We offer insured shipping worldwide. Standard shipping takes 5-7 business days, while expedited shipping is available for 2-3 day delivery. All packages are fully insured and require a signature upon delivery for security.',
    },
    {
      id: 9,
      question: 'Do you offer ring resizing?',
      answer: 'Yes, we offer complimentary ring resizing within one year of purchase. After that, professional resizing services are available at a nominal fee. Simply contact our customer care team to arrange resizing.',
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            COMMON QUESTIONS
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-6">
            Frequently Asked
            <br />
            Questions
          </h1>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            Find answers to common questions about our lab-grown diamonds, customization options, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
              >
                <h3 className="font-serif text-lg md:text-xl text-white text-left group-hover:text-[#d4af37] transition-colors duration-300">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#d4af37] flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 md:px-8 py-6 bg-black/50 border-t border-white/10">
                  <p className="font-sans text-base text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-white/10">
          <div className="max-w-2xl">
            <h3 className="font-serif text-h2 text-white uppercase tracking-luxury mb-4">
              Didn't find your answer?
            </h3>
            <p className="font-sans text-lg text-gray-300 mb-6">
              Our expert team is here to help. Contact us directly for personalized assistance with your questions or to schedule a private consultation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#e5c158] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
