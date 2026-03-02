import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding-sm bg-mist-gray"
    >
      <div className="container-luxury">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-800 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <p className="font-sans text-label uppercase tracking-label text-champagne mb-4">
            STAY CONNECTED
          </p>
          <h2 className="font-serif text-h1 md:text-[48px] md:leading-[56px] text-obsidian uppercase tracking-luxury mb-4">
            JOIN THE INNER CIRCLE
          </h2>
          <p className="font-sans text-body text-warm-gray mb-10">
            Be the first to discover new collections, exclusive events, and expert insights 
            from the world of lab-grown diamonds.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white border border-light-gray font-sans text-body text-obsidian placeholder:text-warm-gray focus:border-champagne focus:outline-none transition-colors duration-300"
                required
                disabled={isSubmitted}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-sans text-label uppercase tracking-label transition-all duration-400 ${
                isSubmitted
                  ? 'bg-green-600 text-white'
                  : 'bg-obsidian text-alabaster hover:bg-champagne hover:text-obsidian'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  SUBSCRIBED
                </>
              ) : (
                <>
                  SUBSCRIBE
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="font-sans text-caption text-warm-gray mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
