import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Palette, Gem, Heart, Video, Building2, Home, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ConsultationType {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const consultationTypes: ConsultationType[] = [
  {
    id: 'virtual',
    icon: <Video className="w-6 h-6" />,
    title: 'Virtual Consultation',
    description: 'Connect with our experts from anywhere in the world via video call.',
    details: ['60-minute private session', 'Screen-share diamond selection', 'Complimentary follow-up'],
  },
  {
    id: 'showroom',
    icon: <Building2 className="w-6 h-6" />,
    title: 'Private Showroom',
    description: 'Experience our collection in person at our exclusive showroom.',
    details: ['Private viewing room', 'Champagne service', 'Expert gemologist on hand'],
  },
  {
    id: 'athome',
    icon: <Home className="w-6 h-6" />,
    title: 'At-Home Preview',
    description: 'We bring a curated selection of diamonds directly to you.',
    details: ['Curated selection delivered', 'No-pressure experience', 'Insurance covered'],
  },
];

const processSteps = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Private Consultation',
    description: 'Share your vision with our diamond experts.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Custom Design',
    description: 'We create a unique design tailored to you.',
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: 'Master Craftsmanship',
    description: 'Your piece is handcrafted by artisans.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Lifetime Care',
    description: 'We stand behind every piece forever.',
  },
];

const BespokeConcierge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>('virtual');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content slides in from left
      if (leftContentRef.current) {
        const leftChildren = leftContentRef.current.children;
        gsap.fromTo(
          leftChildren,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: { trigger: leftContentRef.current, start: 'top 80%' },
          }
        );
      }

      // Right content slides in from right
      if (rightContentRef.current) {
        gsap.fromTo(
          rightContentRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: rightContentRef.current, start: 'top 80%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/collections/bespoke-craft.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div ref={leftContentRef}>
            {/* Section Header */}
            <div className="mb-12 opacity-0">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
                Bespoke Service
              </p>
              <h2 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury mb-6">
                Your Vision.
                <br />
                <span className="text-gradient-gold">Our Craft.</span>
              </h2>
              <p className="font-sans text-body-lg text-warm-gray max-w-lg">
                Begin a journey of creation. From the first sketch to the final polish,
                our master craftsmen bring your dream to life with unparalleled attention to detail.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-2 gap-6 mb-12 opacity-0">
              {processSteps.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-caption text-obsidian uppercase tracking-luxury mb-1">
                      {step.title}
                    </h4>
                    <p className="font-sans text-caption text-warm-gray">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="opacity-0">
              <Link
                to="/bespoke"
                className="inline-flex items-center gap-3 px-8 py-4 bg-champagne text-white font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-400 hover:bg-soft-gold group"
              >
                Book Private Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Content — Expanding Accordion Panels */}
          <div
            ref={rightContentRef}
            className="space-y-0 opacity-0"
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian/50 mb-6">
              Choose Your Experience
            </p>

            {consultationTypes.map((type) => {
              const isOpen = openAccordion === type.id;
              return (
                <div
                  key={type.id}
                  className={`border-b border-light-gray transition-all duration-500 ${isOpen ? 'bg-mist-gray' : 'bg-transparent'}`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(type.id)}
                    className="w-full flex items-center gap-4 py-6 px-4 text-left group"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-champagne text-white' : 'bg-champagne/10 text-champagne group-hover:bg-champagne/20'}`}>
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-serif text-lg text-obsidian uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-champagne' : 'group-hover:text-champagne'}`}>
                        {type.title}
                      </h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-obsidian/30 transition-transform duration-400 ${isOpen ? 'rotate-180 text-champagne' : ''}`} />
                  </button>

                  {/* Accordion Content — Smooth Height Animation */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isOpen ? '200px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-4 pb-6 pl-20">
                      <p className="font-sans text-sm text-warm-gray mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 font-sans text-xs text-obsidian/60">
                            <span className="w-1 h-1 rounded-full bg-champagne" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Trust Note */}
            <div className="pt-6">
              <p className="font-sans text-[11px] text-warm-gray text-center tracking-wide">
                Complimentary consultation · No obligation · Expert guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeConcierge;
