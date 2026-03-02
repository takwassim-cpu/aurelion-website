import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// Sparkle particle component
const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: '4px',
      height: '4px',
      background: 'radial-gradient(circle, rgba(201,169,98,0.6), rgba(201,169,98,0.2))',
      boxShadow: '0 0 6px 2px rgba(201,169,98,0.3)',
      ...style,
    }}
  />
);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Diamond entrance
      if (diamondRef.current) {
        tl.fromTo(
          diamondRef.current,
          { opacity: 0, scale: 0.7, rotation: -5, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' },
          0
        );
      }

      // Label
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.3
        );
      }

      // Headline — split-text reveal
      if (word1Ref.current) {
        tl.fromTo(
          word1Ref.current,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.9, ease: 'power4.out' },
          0.4
        );
      }
      if (word2Ref.current) {
        tl.fromTo(
          word2Ref.current,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.9, ease: 'power4.out' },
          0.55
        );
      }

      // Underline
      if (underlineRef.current) {
        tl.fromTo(
          underlineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
          1.2
        );
      }

      // Subheading
      if (subheadingRef.current) {
        tl.fromTo(
          subheadingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.8
        );
      }

      // CTA buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          1.0
        );
      }

      // Trust indicators
      if (trustRef.current) {
        tl.fromTo(
          trustRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          1.3
        );
      }

      // Scroll indicator
      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out' },
          2.0
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
    if (!isHovering) setIsHovering(true);
  }, [isHovering]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  // Generate sparkle positions
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      left: `${50 + (Math.random() - 0.5) * 60}%`,
      top: `${50 + (Math.random() - 0.5) * 60}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    } as React.CSSProperties,
  }));

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
    >
      {/* Styles for all animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes lightRay {
          0% { opacity: 0; transform: translateX(-100%) rotate(25deg); }
          20% { opacity: 0.08; }
          80% { opacity: 0.08; }
          100% { opacity: 0; transform: translateX(200%) rotate(25deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes scrollPulse {
          0% { transform: scaleY(0); opacity: 0; transform-origin: top; }
          30% { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; transform-origin: top; }
        }
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes diamondEntrance {
          0% { opacity: 0; transform: scale(0.7) rotate(-5deg); filter: blur(10px); }
          60% { opacity: 1; transform: scale(1.05) rotate(1deg); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle ease-in-out infinite; }
        .text-gold-shimmer {
          background: linear-gradient(
            90deg,
            #1A1A1A 0%,
            #C9A962 20%,
            #A88B4A 40%,
            #1A1A1A 50%,
            #C9A962 60%,
            #A88B4A 80%,
            #1A1A1A 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .animate-reveal-up {
          opacity: 0;
          animation: revealUp 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .animate-reveal-fade {
          opacity: 0;
          animation: revealFade 1s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .animate-diamond-entrance {
          opacity: 0;
        }
        .animate-light-ray {
          animation: lightRay 8s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Luxury Gradient Background - Dark Navy to Black with Gold */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />

        {/* Subtle Gold Accent Light */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(201, 169, 98, 0.15), transparent)',
          }}
        />

        {/* Ambient Light Rays */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: 1 }}
        >
          <div
            className="absolute animate-light-ray"
            style={{
              width: '200px',
              height: '150vh',
              top: '-25vh',
              left: '0',
              background: 'linear-gradient(90deg, transparent, rgba(201,169,98,0.08), rgba(201,169,98,0.04), transparent)',
              transform: 'rotate(25deg)',
              animationDelay: '0s',
            }}
          />
          <div
            className="absolute animate-light-ray"
            style={{
              width: '150px',
              height: '150vh',
              top: '-25vh',
              left: '20%',
              background: 'linear-gradient(90deg, transparent, rgba(201,169,98,0.06), rgba(201,169,98,0.04), transparent)',
              transform: 'rotate(25deg)',
              animationDelay: '3s',
            }}
          />
          <div
            className="absolute animate-light-ray"
            style={{
              width: '120px',
              height: '150vh',
              top: '-25vh',
              left: '50%',
              background: 'linear-gradient(90deg, transparent, rgba(201,169,98,0.06), transparent)',
              transform: 'rotate(25deg)',
              animationDelay: '5s',
            }}
          />
        </div>
      </div>

      {/* Diamond Showcase - Right Section with 3D Parallax */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center pointer-events-none max-md:w-full max-md:opacity-20 max-md:z-0"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative"
          ref={diamondRef}
          style={{
            transformStyle: 'preserve-3d',
            transform: [
              `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              `rotateY(${mousePos.x * 15}deg)`,
              `rotateX(${-mousePos.y * 15}deg)`,
              `translateZ(${Math.abs(mousePos.x * mousePos.y) * 30}px)`,
            ].join(' '),
            transition: isHovering
              ? 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              : 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Diamond Glow Ring 1 — White pulse */}
          <div
            className="absolute rounded-full blur-2xl animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(201, 169, 98, 0.2), transparent)',
              width: '600px',
              height: '600px',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
            }}
          />

          {/* Diamond Glow Ring 2 — Gold pulse */}
          <div
            className="absolute rounded-full blur-3xl animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(201, 169, 98, 0.15), transparent)',
              width: '700px',
              height: '700px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: '1.5s',
            }}
          />

          {/* Sparkle Particles */}
          {sparkles.map((s) => (
            <Sparkle key={s.id} style={s.style} />
          ))}

          {/* Main Diamond Image with Float + 3D rotation */}
          <div
            className={`relative ${!isHovering ? 'animate-float' : ''}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/cushion-diamond.png"
              alt="Aurelion Cushion Cut Diamond"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
              style={{
                mixBlendMode: 'lighten',
                filter: `brightness(1.05) contrast(1.1) saturate(0.15) sepia(0.08) drop-shadow(0 0 80px rgba(201, 169, 98, 0.3)) drop-shadow(0 0 120px rgba(201, 169, 98, 0.15)) drop-shadow(${-mousePos.x * 25}px ${-mousePos.y * 25 + 40}px 80px rgba(0, 0, 0, 0.18))`,
                transition: 'filter 0.3s ease-out',
              }}
            />
          </div>
        </div>
      </div>

      {/* Content - Overlaid Left Side */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-20">
        <div className="max-w-2xl">
          {/* Premium Label — Cinematic Reveal */}
          <div
            ref={labelRef}
            className="flex items-center gap-3 mb-8 opacity-0"
          >
            <div className="w-12 h-px bg-gradient-to-r from-[#C9A962] to-transparent" />
            <p className="font-sans text-xs uppercase tracking-widest text-champagne font-semibold">
              Lab-Grown Excellence
            </p>
          </div>

          {/* Main Headline — Split-Text Reveal */}
          <h1
            ref={headlineRef}
            className="font-serif text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-6 leading-tight font-light"
          >
            <span className="block overflow-hidden">
              <span ref={word1Ref} className="block text-gold-shimmer" style={{ transform: 'translateY(110%)' }}>
                Eternal
              </span>
            </span>
            <span className="block overflow-hidden relative">
              <span ref={word2Ref} className="block text-gold-shimmer" style={{ transform: 'translateY(110%)' }}>
                Radiance
              </span>
              <span
                ref={underlineRef}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#C9A962] to-[#A88B4A] opacity-0 origin-left"
                style={{ width: '100%' }}
              ></span>
            </span>
          </h1>

          {/* Subheading — Staggered Reveal */}
          <p
            ref={subheadingRef}
            className="font-sans text-lg md:text-xl text-warm-gray max-w-xl mb-12 leading-relaxed font-light opacity-0"
          >
            Experience diamonds crafted with uncompromising precision.
            Each stone tells a story of brilliance, ethics, and timeless elegance.
          </p>

          {/* CTA Buttons — Staggered Reveal */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-start gap-5 opacity-0"
          >
            <Link
              to="/collection"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-white font-sans text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C9A962]/30"
              style={{ background: 'linear-gradient(135deg, #C9A962 0%, #D4B978 50%, #C9A962 100%)' }}
            >
              <span className="relative z-10">Discover Collection</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/bespoke"
              className="btn-fill-left group relative inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-obsidian/30 text-obsidian font-sans text-sm uppercase tracking-widest font-semibold transition-all duration-500 hover:border-obsidian hover:shadow-lg"
            >
              <span>Custom Design</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Indicators — Staggered Reveal */}
          <div
            ref={trustRef}
            className="flex flex-col sm:flex-row gap-8 mt-16 pt-8 border-t border-obsidian/10 opacity-0"
          >
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-champagne font-semibold mb-1">
                Ethically Sourced
              </p>
              <p className="font-sans text-sm text-warm-gray">100% Lab-Grown</p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-champagne font-semibold mb-1">
                Certified Excellence
              </p>
              <p className="font-sans text-sm text-warm-gray">GIA Certified</p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-champagne font-semibold mb-1">
                Lifetime Guarantee
              </p>
              <p className="font-sans text-sm text-warm-gray">Forever Protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — Elegant Pulsing Line */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto z-30 opacity-0"
      >
        <button
          onClick={() => {
            const nextSection = document.querySelector('main')?.querySelector('section:nth-child(2)') || document.body;
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-3 cursor-pointer group hover:opacity-100"
        >
          <span className="font-sans text-[10px] text-obsidian/40 uppercase tracking-[0.25em] font-light group-hover:text-champagne transition-colors">
            Scroll
          </span>
          <div className="relative w-px h-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-champagne to-transparent"
              style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
            <div className="absolute top-0 left-0 w-full h-full bg-champagne/20" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
