import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DiamondShape {
  id: string;
  name: string;
  description: string;
  facets: string;
  image: string;
}

const diamondShapes: DiamondShape[] = [
  {
    id: 'round',
    name: 'Round Brilliant',
    description: 'The most popular cut, designed for maximum brilliance with 58 precisely angled facets.',
    facets: '58 FACETS',
    image: '/images/Loose Diamonds/round-brilliant.png',
  },
  {
    id: 'princess',
    name: 'Princess',
    description: 'A modern classic with sharp, uncut corners and exceptional fire.',
    facets: '57-58 FACETS',
    image: '/images/Loose Diamonds/princess-cut.png',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    description: 'Step-cut elegance with a hall-of-mirrors effect and understated sophistication.',
    facets: '50-58 FACETS',
    image: '/images/Loose Diamonds/emerald-cut.png',
  },
  {
    id: 'oval',
    name: 'Oval',
    description: 'Elongated brilliance that creates the illusion of longer, slender fingers.',
    facets: '56-58 FACETS',
    image: '/images/Loose Diamonds/oval-cut.png',
  },
  {
    id: 'cushion',
    name: 'Cushion',
    description: 'Romantic antique appeal with rounded corners and larger facets.',
    facets: '58 FACETS',
    image: '/images/Loose Diamonds/cushion-cut.png',
  },
  {
    id: 'pear',
    name: 'Pear',
    description: 'A teardrop of brilliance combining round and marquise cuts.',
    facets: '56-58 FACETS',
    image: '/images/Loose Diamonds/pear-cut.png',
  },
  {
    id: 'marquise',
    name: 'Marquise',
    description: 'Dramatic elongated shape with pointed ends for maximum carat weight.',
    facets: '56-58 FACETS',
    image: '/images/Loose Diamonds/marquise.png',
  },
  {
    id: 'asscher',
    name: 'Asscher',
    description: 'Art Deco elegance with a distinctive X pattern and cropped corners.',
    facets: '58 FACETS',
    image: '/images/Loose Diamonds/asscher.png',
  },
  {
    id: 'radiant',
    name: 'Radiant',
    description: 'Brilliant-cut fire meets emerald-cut elegance in a versatile shape.',
    facets: '70 FACETS',
    image: '/images/Loose Diamonds/radiant.png',
  },
  {
    id: 'heart',
    name: 'Heart',
    description: 'The ultimate symbol of love, requiring master craftsmanship.',
    facets: '56-58 FACETS',
    image: '/images/Loose Diamonds/heart.png',
  },
];

const DiamondShapeSelector = () => {
  const [activeShape, setActiveShape] = useState<DiamondShape>(diamondShapes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: tabsRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        displayRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: displayRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleShapeChange = (shape: DiamondShape) => {
    if (shape.id === activeShape.id || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveShape(shape);
      setIsTransitioning(false);
    }, 300);
  };

  const scrollShapes = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-alabaster overflow-hidden"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 md:mb-20 opacity-0"
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
            FIND YOUR PERFECT CUT
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-obsidian uppercase tracking-wide">
            CHOOSE YOUR SHAPE
          </h2>
          <div className="divider-luxury mt-8" />
        </div>

        {/* Shape Selector Tabs */}
        <div
          ref={tabsRef}
          className="relative mb-12 md:mb-16 opacity-0"
        >
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollShapes('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-alabaster border border-light-gray flex items-center justify-center text-obsidian hover:border-champagne hover:text-champagne transition-colors duration-300 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollShapes('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-alabaster border border-light-gray flex items-center justify-center text-obsidian hover:border-champagne hover:text-champagne transition-colors duration-300 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Shape Tabs */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-6 border-b border-light-gray snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {diamondShapes.map((shape) => (
              <button
                key={shape.id}
                onClick={() => handleShapeChange(shape)}
                className={`snap-center flex-shrink-0 flex flex-col items-center gap-3 px-2 py-4 font-sans uppercase transition-all duration-500 relative group overflow-visible ${activeShape.id === shape.id
                  ? 'text-obsidian'
                  : 'text-warm-gray hover:text-obsidian'
                  }`}
              >
                {/* Active Indicator Line */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-champagne transition-all duration-500 transform origin-left ${activeShape.id === shape.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />

                <span className="text-[11px] tracking-[0.2em]">{shape.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Shape Display */}
        <div
          ref={displayRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch opacity-0 mt-16"
        >
          {/* Diamond Image Container */}
          <div className="lg:col-span-7 relative flex items-center justify-center bg-obsidian aspect-square md:aspect-[4/3] overflow-hidden">
            <div
              className={`relative z-10 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isTransitioning ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'
                }`}
            >
              <img
                src={activeShape.image}
                alt={activeShape.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cinematic Lighting Effect */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-champagne/10 blur-[100px] rounded-full point-events-none transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} />

            {/* Facets Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 font-sans text-[10px] uppercase tracking-[0.2em] text-alabaster">
                {activeShape.facets}
              </span>
            </div>
          </div>

          {/* Shape Details - White Panel */}
          <div
            className={`lg:col-span-5 bg-white p-10 md:p-16 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
              }`}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">THE CUT</p>
            <h3 className="font-serif text-3xl md:text-5xl text-obsidian uppercase tracking-wide mb-6">
              {activeShape.name}
            </h3>

            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-10 max-w-sm">
              {activeShape.description}
            </p>

            <Link
              to={`/collection?shape=${activeShape.id}`}
              className="btn-fill-left w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondShapeSelector;
