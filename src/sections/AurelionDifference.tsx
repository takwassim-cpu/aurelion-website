import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, Gem, Leaf, Shield, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'IGI CERTIFIED',
    description: 'Every diamond graded by world-renowned gemological institutes.',
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'TYPE IIa PURE',
    description: 'The rarest, most chemically pure form of diamond.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'CARBON NEUTRAL',
    description: 'Sustainably created with zero environmental impact.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'CONFLICT FREE',
    description: 'Ethically crafted. No mining. No compromise.',
  },
];

const AurelionDifference = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      // Divider
      gsap.fromTo(
        dividerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: dividerRef.current, start: 'top 85%' },
        }
      );

      // Cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.card-glass');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        );
      }

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' },
        }
      );

      // Stats
      if (statsRef.current) {
        const statItems = statsRef.current.children;
        gsap.fromTo(
          statItems,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)',
            stagger: 0.12,
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-alabaster relative overflow-hidden"
    >
      {/* Inline animations */}
      <style>{`
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes shimmerGold {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes cardReveal {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statCount {
          0% { opacity: 0; transform: scale(0.5); }
          60% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(201, 169, 98, 0.1); }
          50% { border-color: rgba(201, 169, 98, 0.3); }
        }
        .text-shimmer-gold {
          background: linear-gradient(
            90deg,
            #C9A962 0%,
            #A88B4A 25%,
            #1A1A1A 50%,
            #A88B4A 75%,
            #C9A962 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 3s linear infinite;
        }
        .card-glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(201, 169, 98, 0.15);
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
        }
        .card-glass:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%);
          border-color: rgba(201, 169, 98, 0.4);
          box-shadow: 0 0 30px rgba(201, 169, 98, 0.1), 0 20px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-8px) perspective(800px) rotateX(2deg);
        }
        .card-glass:hover .icon-container {
          animation: iconPulse 0.6s ease-in-out;
        }
        .animate-card-reveal {
          opacity: 0;
          animation: cardReveal 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .animate-stat-count {
          opacity: 0;
          animation: statCount 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
      `}</style>

      {/* Diamond Grid Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gold ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(201, 169, 98, 0.3), transparent 70%)',
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 md:mb-24 opacity-0"
        >
          <p className="font-sans text-label uppercase tracking-label text-champagne mb-4">
            WHY AURELION
          </p>
          <h2 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury mb-6">
            CRAFTED BY SCIENCE.
            <br />
            <span className="text-shimmer-gold">PERFECTED BY NATURE.</span>
          </h2>
          <p className="font-sans text-body-lg text-warm-gray max-w-2xl mx-auto">
            We believe luxury should never come at the cost of our planet.
            Our lab-grown diamonds are identical to mined diamonds—atomically,
            optically, and physically without the environmental toll.
          </p>
        </div>

        {/* Gold Divider */}
        <div
          ref={dividerRef}
          className="flex items-center justify-center mb-16 opacity-0"
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[#C9A962]/50" />
          <div className="mx-4">
            <Gem className="w-5 h-5 text-[#C9A962]" />
          </div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[#C9A962]/50" />
        </div>

        {/* Trust Points Grid — Glassmorphism Cards with Staggered Reveal */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 mb-16">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="card-glass rounded-lg text-center p-8 opacity-0"
            >
              {/* Icon with gold ring */}
              <div className="icon-container inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full border border-[#C9A962]/30 text-[#C9A962]"
                style={{
                  background: 'radial-gradient(circle, rgba(201, 169, 98, 0.1), transparent)',
                }}
              >
                {point.icon}
              </div>
              <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-3">
                {point.title}
              </h3>
              <p className="font-sans text-caption text-warm-gray">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          ref={ctaRef}
          className="text-center opacity-0"
        >
          <Link
            to="/story"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#C9A962] text-[#C9A962] font-sans text-label uppercase tracking-label transition-all duration-500 hover:bg-[#C9A962] hover:text-white hover:shadow-lg hover:shadow-[#C9A962]/20"
          >
            DISCOVER OUR STORY
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stats with animated counters */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-obsidian/10"
        >
          {[
            { value: '100%', label: 'IDENTICAL TO MINED' },
            { value: '0%', label: 'ENVIRONMENTAL IMPACT' },
            { value: '30%', label: 'MORE AFFORDABLE' },
            { value: '∞', label: 'YEARS OF BEAUTY' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center opacity-0"
            >
              <p className="font-serif text-4xl md:text-5xl text-shimmer-gold mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-label uppercase tracking-label text-warm-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AurelionDifference;
