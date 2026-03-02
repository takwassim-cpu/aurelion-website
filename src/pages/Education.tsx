import { useState, useEffect, useRef } from 'react';
import { HelpCircle } from 'lucide-react';

interface FourCInfo {
  title: string;
  subtitle: string;
  description: string;
  grades: { grade: string; description: string }[];
}

const fourCsData: Record<string, FourCInfo> = {
  cut: {
    title: 'CUT',
    subtitle: 'The Most Important C',
    description: 'Cut determines how brilliantly a diamond sparkles. It refers to how well the diamond\'s facets interact with light, creating fire, brilliance, and scintillation.',
    grades: [
      { grade: 'EXCELLENT', description: 'Maximum light return, exceptional sparkle' },
      { grade: 'VERY GOOD', description: 'Superior brilliance, minimal light loss' },
      { grade: 'GOOD', description: 'Nice sparkle, good value' },
      { grade: 'FAIR', description: 'Acceptable brilliance' },
      { grade: 'POOR', description: 'Significant light leakage' },
    ],
  },
  color: {
    title: 'COLOR',
    subtitle: 'The Absence of Color',
    description: 'Diamond color grades measure the absence of color. The less color, the higher the grade. D is completely colorless; Z has noticeable yellow or brown tint.',
    grades: [
      { grade: 'D-F', description: 'Colorless - Extremely rare, highest value' },
      { grade: 'G-J', description: 'Near Colorless - Excellent value, slight warmth' },
      { grade: 'K-M', description: 'Faint Yellow - Noticeable tint' },
      { grade: 'N-R', description: 'Very Light Yellow - Obvious tint' },
      { grade: 'S-Z', description: 'Light Yellow - Strong tint' },
    ],
  },
  clarity: {
    title: 'CLARITY',
    subtitle: 'Purity Within',
    description: 'Clarity measures the presence of inclusions (internal) and blemishes (external). Fewer imperfections mean higher clarity and greater brilliance.',
    grades: [
      { grade: 'FL/IF', description: 'Flawless/Internally Flawless - No visible inclusions' },
      { grade: 'VVS1/VVS2', description: 'Very Very Slightly Included - Minute inclusions' },
      { grade: 'VS1/VS2', description: 'Very Slightly Included - Minor inclusions' },
      { grade: 'SI1/SI2', description: 'Slightly Included - Noticeable inclusions' },
      { grade: 'I1/I2/I3', description: 'Included - Obvious inclusions' },
    ],
  },
  carat: {
    title: 'CARAT',
    subtitle: 'Weight, Not Size',
    description: 'Carat measures weight, not size. One carat equals 200 milligrams. Cut affects how large a diamond appears—well-cut diamonds look larger than poorly cut ones of the same weight.',
    grades: [
      { grade: '3+ CT', description: 'Statement size, exceptional rarity' },
      { grade: '2-3 CT', description: 'Impressive presence, luxury choice' },
      { grade: '1-2 CT', description: 'Classic size, popular choice' },
      { grade: '0.5-1 CT', description: 'Elegant and versatile' },
      { grade: '< 0.5 CT', description: 'Delicate and affordable' },
    ],
  },
};

const Education = () => {
  const [activeC, setActiveC] = useState<string>('cut');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeData = fourCsData[activeC];

  return (
    <main className="min-h-screen bg-alabaster">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/Loose Diamonds/round-brilliant.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
            DIAMOND EDUCATION
          </p>
          <h1 className="font-serif text-display md:text-[80px] md:leading-[88px] text-obsidian uppercase tracking-luxury mb-6">
            UNDERSTANDING
            <br />
            <span className="text-gradient-gold">THE 4Cs</span>
          </h1>
          <p className="font-sans text-body-lg text-warm-gray max-w-xl">
            The universal language of diamond quality
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding-sm">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider-luxury mb-8" />
            <p className="font-sans text-body-lg text-warm-gray">
              The 4Cs—Cut, Color, Clarity, and Carat—are the global standard for evaluating
              diamond quality. Understanding these four characteristics will help you make
              an informed decision and find the perfect diamond for your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 4Cs Section */}
      <section ref={sectionRef} className="section-padding bg-mist-gray">
        <div className="container-luxury">
          {/* 4C Selector */}
          <div
            className={`flex justify-center gap-4 mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {Object.keys(fourCsData).map((c) => (
              <button
                key={c}
                onClick={() => setActiveC(c)}
                className={`w-20 h-20 md:w-24 md:h-24 font-serif text-2xl md:text-3xl transition-all duration-300 ${activeC === c
                  ? 'bg-champagne text-white'
                  : 'bg-white text-obsidian hover:bg-champagne/10'
                  }`}
              >
                {c.charAt(0).toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active C Content */}
          <div
            className={`bg-white p-8 md:p-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury">
                    {activeData.title}
                  </h2>
                  <button
                    className="text-warm-gray hover:text-champagne transition-colors"
                    title="Learn more"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-6">
                  {activeData.subtitle}
                </p>
                <p className="font-sans text-body-lg text-warm-gray mb-8">
                  {activeData.description}
                </p>

                {/* Visual Scale */}
                <div className="relative h-2 bg-mist-gray mb-2">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-champagne to-obsidian"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="flex justify-between font-sans text-caption text-warm-gray">
                  <span>Best</span>
                  <span>Lowest Grade</span>
                </div>
              </div>

              {/* Right: Grades */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian mb-6">
                  GRADE SCALE
                </h3>
                <div className="space-y-4">
                  {activeData.grades.map((grade, index) => (
                    <div
                      key={grade.grade}
                      className="flex items-center gap-4 p-4 bg-mist-gray hover:bg-champagne/10 transition-colors duration-300"
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center bg-champagne text-white font-serif text-lg"
                        style={{ opacity: 1 - index * 0.15 }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-serif text-h3 text-obsidian uppercase tracking-luxury">
                          {grade.grade}
                        </p>
                        <p className="font-sans text-caption text-warm-gray">
                          {grade.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
              EXPERT TIPS
            </p>
            <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury">
              HOW TO CHOOSE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Prioritize Cut',
                description: 'A well-cut diamond sparkles more, making it appear larger and more brilliant than a poorly cut diamond of the same carat weight.',
              },
              {
                title: 'Color Sweet Spot',
                description: 'G-H color diamonds offer excellent value—they appear colorless to the naked eye but cost significantly less than D-F grades.',
              },
              {
                title: 'Clarity Balance',
                description: 'VS1-VS2 clarity diamonds have inclusions invisible to the naked eye, offering the best balance of beauty and value.',
              },
              {
                title: 'Carat Savings',
                description: 'Diamonds just under popular carat weights (0.9ct vs 1ct) can offer significant savings with minimal visual difference.',
              },
            ].map((tip, index) => (
              <div key={tip.title} className="p-6 border border-light-gray">
                <div className="w-10 h-10 bg-champagne/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-lg text-champagne">{index + 1}</span>
                </div>
                <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-3">
                  {tip.title}
                </h3>
                <p className="font-sans text-caption text-warm-gray">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding bg-mist-gray text-obsidian">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
                CERTIFICATION
              </p>
              <h2 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-6">
                IGI CERTIFIED<br />DIAMONDS
              </h2>
              <div className="space-y-4 font-sans text-body text-warm-gray">
                <p>
                  Every Aurelion diamond comes with a certificate from the International
                  Gemological Institute (IGI), one of the world's most respected diamond
                  grading laboratories.
                </p>
                <p>
                  Your certificate includes detailed information about your diamond's
                  4Cs, proportions, fluorescence, and a unique identification number
                  laser-inscribed on the girdle.
                </p>
                <p>
                  This certificate ensures the authenticity and quality of your diamond,
                  providing peace of mind and protecting your investment.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 border border-light-gray">
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-light-gray">
                  <div className="w-16 h-16 bg-champagne/10 flex items-center justify-center">
                    <span className="font-serif text-2xl text-champagne">IGI</span>
                  </div>
                  <div>
                    <p className="font-serif text-h3 text-obsidian uppercase tracking-luxury">
                      INTERNATIONAL
                    </p>
                    <p className="font-sans text-caption text-warm-gray">
                      Gemological Institute
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    '4Cs Grading Report',
                    'Proportions Diagram',
                    'Clarity Plot',
                    'Laser Inscription ID',
                    'Online Verification',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-champagne rounded-full" />
                      <span className="font-sans text-caption text-obsidian/70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
