import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CollectionItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  path: string;
}

const collections: CollectionItem[] = [
  {
    id: 'engagement',
    name: 'Engagement Rings',
    subtitle: 'FOREVER BEGINS HERE',
    description: 'Symbolize your forever with our exquisite solitaires and halo designs.',
    image: '/images/collections/engagement-rings.png',
    path: '/collection/engagement',
  },
  {
    id: 'wedding',
    name: 'Wedding Bands',
    subtitle: 'ETERNAL UNION',
    description: 'Eternal bands crafted to celebrate your union.',
    image: '/images/collections/wedding-bands.png',
    path: '/collection/wedding',
  },
  {
    id: 'fine-jewelry',
    name: 'Fine Jewelry',
    subtitle: 'TIMELESS LEGACY',
    description: 'Timeless pieces that transcend generations.',
    image: '/images/collections/fine-jewelry.png',
    path: '/collection/fine-jewelry',
  },
];

const FeaturedCollection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      // Card 1 (large)
      gsap.fromTo(
        card1Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card1Ref.current, start: 'top 80%' },
        }
      );

      // Card 2 (medium)
      gsap.fromTo(
        card2Ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: card2Ref.current, start: 'top 80%' },
        }
      );

      // Card 3 (full-width)
      gsap.fromTo(
        card3Ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card3Ref.current, start: 'top 85%' },
        }
      );

      // View all link
      gsap.fromTo(
        viewAllRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: viewAllRef.current, start: 'top 90%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-alabaster">
      <style>{`
        .collection-card .card-title-underline {
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 1px;
          background: var(--champagne);
          transition: width 0.4s ease, left 0.4s ease;
        }
        .collection-card:hover .card-title-underline {
          width: 100%;
          left: 0;
        }
        .collection-card .card-arrow {
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .collection-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="container-luxury">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24 opacity-0">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury">
            Discover Perfection
          </h2>
          <div className="divider-luxury mt-6" />
        </div>

        {/* Asymmetric Editorial Grid */}
        {/* Row 1: 60% Engagement + 40% Wedding */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Engagement Rings — Large Featured Card (60%) */}
          <div ref={card1Ref} className="lg:col-span-3 opacity-0">
            <Link to={collections[0].path} className="collection-card group block relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-mist-gray">
                <img
                  src={collections[0].image}
                  alt={collections[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3">
                    {collections[0].subtitle}
                  </p>
                  <h3 className="relative inline-block font-serif text-3xl md:text-4xl text-white uppercase tracking-wide mb-3">
                    {collections[0].name}
                    <span className="card-title-underline" />
                  </h3>
                  <p className="font-sans text-sm text-white/60 max-w-md mb-5">
                    {collections[0].description}
                  </p>
                  <span className="card-arrow inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-white/90">
                    Discover <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Wedding Bands — Medium Card (40%) */}
          <div ref={card2Ref} className="lg:col-span-2 opacity-0">
            <Link to={collections[1].path} className="collection-card group block relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-mist-gray">
                <img
                  src={collections[1].image}
                  alt={collections[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3">
                    {collections[1].subtitle}
                  </p>
                  <h3 className="relative inline-block font-serif text-2xl md:text-3xl text-white uppercase tracking-wide mb-3">
                    {collections[1].name}
                    <span className="card-title-underline" />
                  </h3>
                  <p className="font-sans text-sm text-white/60 max-w-sm mb-5">
                    {collections[1].description}
                  </p>
                  <span className="card-arrow inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-white/90">
                    Discover <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Row 2: Full-Width Cinematic Strip */}
        <div ref={card3Ref} className="opacity-0">
          <Link to={collections[2].path} className="collection-card group block relative">
            <div className="relative aspect-[16/7] md:aspect-[21/7] overflow-hidden bg-mist-gray">
              <img
                src={collections[2].image}
                alt={collections[2].name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content overlay — left aligned */}
              <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-center p-8 md:p-16">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3">
                  {collections[2].subtitle}
                </p>
                <h3 className="relative inline-block font-serif text-3xl md:text-5xl text-white uppercase tracking-wide mb-3">
                  {collections[2].name}
                  <span className="card-title-underline" />
                </h3>
                <p className="font-sans text-sm text-white/60 max-w-md mb-6">
                  {collections[2].description}
                </p>
                <span className="card-arrow inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-white/90">
                  Discover <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* View All Link */}
        <div ref={viewAllRef} className="text-center mt-16 opacity-0">
          <Link
            to="/collection"
            className="link-underline-center inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian hover:text-champagne transition-colors duration-300 group"
          >
            View All Collections
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
