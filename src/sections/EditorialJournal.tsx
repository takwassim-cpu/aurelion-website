import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: '4cs-guide',
    title: 'The Complete Guide to the 4Cs',
    excerpt: 'Understanding Cut, Color, Clarity, and Carat is essential to finding your perfect diamond.',
    image: '/images/journal/4cs-guide.png',
    category: 'EDUCATION',
    readTime: '8 MIN READ',
  },
  {
    id: 'lab-grown-science',
    title: 'The Science Behind Lab-Grown Diamonds',
    excerpt: 'Discover how cutting-edge technology creates diamonds identical to those formed deep within the earth.',
    image: '/images/journal/lab-grown-science.png',
    category: 'SCIENCE',
    readTime: '6 MIN READ',
  },
  {
    id: 'sustainable-luxury',
    title: 'The Future of Sustainable Luxury',
    excerpt: 'Aurelion combines heritage craftsmanship with ethical innovation to redefine modern excellence.',
    image: '/images/journal/sustainable-luxury.png',
    category: 'ETHICS',
    readTime: '6 MIN READ',
  },
];

const EditorialJournal = () => {
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

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-alabaster"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 transition-all duration-800 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div>
            <p className="font-sans text-label uppercase tracking-label text-champagne mb-4">
              INSIGHTS & STORIES
            </p>
            <h2 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury">
              THE AURELION JOURNAL
            </h2>
          </div>
          <Link
            to="/journal"
            className="mt-6 md:mt-0 inline-flex items-center gap-3 font-sans text-label uppercase tracking-label text-obsidian hover:text-champagne transition-colors duration-300 group"
          >
            VIEW ALL ARTICLES
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group transition-all duration-800 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <Link to={`/journal/${article.id}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/10 transition-all duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-alabaster font-sans text-[10px] uppercase tracking-label text-obsidian">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-caption text-warm-gray">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-3 group-hover:text-champagne transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-sans text-caption text-warm-gray line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-label uppercase tracking-label text-obsidian group-hover:text-champagne transition-colors duration-300">
                    READ MORE
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialJournal;
