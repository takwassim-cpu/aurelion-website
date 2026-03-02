import { useEffect, useRef, useState } from 'react';
import { Gem, Leaf, Award, Sparkles } from 'lucide-react';

const Story = () => {
  const [isVisible, setIsVisible] = useState<Set<string>>(new Set());
  const sectionsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-section');
          if (id && entry.isIntersecting) {
            setIsVisible((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionsRef.current.set(id, el);
    }
  };

  return (
    <main className="min-h-screen bg-alabaster">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/journal/lab-grown-science.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
            OUR STORY
          </p>
          <h1 className="font-serif text-display md:text-[96px] md:leading-[104px] text-obsidian uppercase tracking-luxury mb-6">
            BORN FROM
            <br />
            <span className="text-gradient-gold">INNOVATION</span>
          </h1>
          <p className="font-sans text-body-lg text-warm-gray max-w-2xl">
            Crafted with purpose. Designed for eternity.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        ref={setSectionRef('mission')}
        data-section="mission"
        className="section-padding"
      >
        <div className="container-luxury">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-800 ease-luxury ${isVisible.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="divider-luxury mb-8" />
            <p className="font-serif text-h2 md:text-[40px] md:leading-[48px] text-obsidian italic mb-8">
              "We believe that true luxury should never come at the cost of our planet.
              Our mission is to create diamonds of exceptional beauty,
              ethically and sustainably."
            </p>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne">
              — THE AURELION FOUNDERS
            </p>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section
        ref={setSectionRef('science')}
        data-section="science"
        className="section-padding bg-mist-gray"
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-800 ease-luxury ${isVisible.has('science') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
                THE SCIENCE
              </p>
              <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-6">
                HOW LAB-GROWN<br />DIAMONDS ARE CREATED
              </h2>
              <div className="space-y-6 font-sans text-body text-warm-gray">
                <p>
                  Our diamonds are created using two advanced technologies:
                  High Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD).
                  Both methods replicate the natural conditions deep within the Earth
                  that form diamonds over billions of years—compressed into weeks.
                </p>
                <p>
                  The result? Diamonds that are chemically, physically, and optically
                  identical to mined diamonds. Even expert gemologists cannot distinguish
                  them without specialized equipment.
                </p>
                <p>
                  Each Aurelion diamond is graded by the International Gemological Institute (IGI),
                  ensuring the highest standards of quality and authenticity.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-800 ease-luxury ${isVisible.has('science') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                <img
                  src="/images/journal/lab-grown-science.png"
                  alt="Lab-grown diamond creation"
                  className="w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-champagne p-6">
                  <p className="font-serif text-4xl text-white mb-1">100%</p>
                  <p className="font-sans text-caption text-white/80 uppercase tracking-label">
                    Identical to Mined
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={setSectionRef('values')}
        data-section="values"
        className="section-padding"
      >
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
              OUR VALUES
            </p>
            <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury">
              WHAT WE STAND FOR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gem className="w-8 h-8" />,
                title: 'PERFECTION',
                description: 'Every diamond is meticulously crafted to achieve exceptional brilliance and fire.',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'SUSTAINABILITY',
                description: 'Zero mining, zero conflict, zero environmental degradation.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'TRANSPARENCY',
                description: 'Full disclosure of origin, grading, and certification for every stone.',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'INNOVATION',
                description: 'Pushing the boundaries of what is possible in diamond creation.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-8 border border-light-gray hover:border-champagne transition-all duration-500 ${isVisible.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-champagne bg-champagne/10">
                  {value.icon}
                </div>
                <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-caption text-warm-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section
        ref={setSectionRef('difference')}
        data-section="difference"
        className="section-padding bg-mist-gray text-obsidian"
      >
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
              THE DIFFERENCE
            </p>
            <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury">
              LAB-GROWN VS MINED
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Comparison Cards */}
            <div
              className={`p-8 border border-light-gray transition-all duration-800 ${isVisible.has('difference') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-6">
                ORIGIN
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-2">
                    LAB-GROWN
                  </p>
                  <p className="font-sans text-caption text-warm-gray">
                    Created in controlled laboratory environments using advanced technology
                  </p>
                </div>
                <div className="border-t border-light-gray pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-2">
                    MINED
                  </p>
                  <p className="font-sans text-caption text-obsidian/40">
                    Extracted from the earth through mining operations
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-8 border border-light-gray transition-all duration-800 ${isVisible.has('difference') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-6">
                QUALITY
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-2">
                    LAB-GROWN
                  </p>
                  <p className="font-sans text-caption text-warm-gray">
                    Atomically, physically, and optically identical to mined diamonds
                  </p>
                </div>
                <div className="border-t border-light-gray pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-2">
                    MINED
                  </p>
                  <p className="font-sans text-caption text-obsidian/40">
                    Natural variations in quality and clarity
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-8 border border-light-gray transition-all duration-800 ${isVisible.has('difference') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-6">
                IMPACT
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-2">
                    LAB-GROWN
                  </p>
                  <p className="font-sans text-caption text-warm-gray">
                    Zero mining, conflict-free, significantly lower carbon footprint
                  </p>
                </div>
                <div className="border-t border-light-gray pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-2">
                    MINED
                  </p>
                  <p className="font-sans text-caption text-obsidian/40">
                    Environmental disruption, potential ethical concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section
        ref={setSectionRef('craftsmanship')}
        data-section="craftsmanship"
        className="section-padding"
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`order-2 lg:order-1 transition-all duration-800 ease-luxury ${isVisible.has('craftsmanship') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
            >
              <img
                src="/images/collections/bespoke-craft.png"
                alt="Master craftsmanship"
                className="w-full"
              />
            </div>
            <div
              className={`order-1 lg:order-2 transition-all duration-800 ease-luxury ${isVisible.has('craftsmanship') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
                CRAFTSMANSHIP
              </p>
              <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-6">
                FROM SEED TO<br />FINISHED JEWELRY
              </h2>
              <div className="space-y-6 font-sans text-body text-warm-gray">
                <p>
                  Every Aurelion piece begins as a tiny diamond seed. Through weeks of
                  precise growth, cutting, and polishing, we transform that seed into a
                  masterpiece of light and brilliance.
                </p>
                <p>
                  Our master craftsmen bring decades of experience to every piece they touch.
                  From the initial cut to the final setting, each step is executed with
                  meticulous attention to detail.
                </p>
                <p>
                  The result is jewelry that doesn't just sparkle—it tells a story of
                  innovation, sustainability, and uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Story;
