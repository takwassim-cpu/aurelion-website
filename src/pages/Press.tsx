import { Calendar, ExternalLink } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      date: 'January 28, 2026',
      title: 'Aurelion Launches Revolutionary Lab-Grown Diamond Collection',
      description: 'Introducing a new era of sustainable luxury with our latest collection of GIA-certified lab-grown diamonds.',
      source: 'Press Release',
    },
    {
      id: 2,
      date: 'January 15, 2026',
      title: 'Featured in Luxury Magazine: "The Future of Diamond Fashion"',
      description: 'Aurelion recognized as a leader in ethical luxury and sustainable diamond innovation.',
      source: 'Luxury Magazine',
    },
    {
      id: 3,
      date: 'December 30, 2025',
      title: 'Aurelion Announces Partnership with Sustainable Mining Initiative',
      description: 'New collaboration focuses on promoting ethical practices across the jewelry industry.',
      source: 'Industry News',
    },
    {
      id: 4,
      date: 'December 15, 2025',
      title: 'Aurelion Named "Best Lab-Grown Diamond Retailer 2025"',
      description: 'Industry recognition for commitment to quality, ethics, and customer satisfaction.',
      source: 'Awards',
    },
    {
      id: 5,
      date: 'December 1, 2025',
      title: 'Expert Interview: "Why Lab-Grown Diamonds are the Future"',
      description: 'Our CEO discusses the technology, ethics, and beauty of lab-grown diamonds in this exclusive interview.',
      source: 'Jewelry Journal',
    },
    {
      id: 6,
      date: 'November 18, 2025',
      title: 'Aurelion Launches Bespoke Customization Service',
      description: 'New service allows customers to design their perfect diamond rings with expert consultations.',
      source: 'Press Release',
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            MEDIA RELATIONS
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-6">
            Aurelion In
            <br />
            The News
          </h1>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            Stay updated on the latest news, press releases, and media coverage about Aurelion and our commitment to sustainable luxury.
          </p>
        </div>

        {/* Press Releases */}
        <div className="space-y-6 mb-20">
          {pressReleases.map((release) => (
            <article
              key={release.id}
              className="p-6 md:p-8 bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <p className="font-sans text-sm text-gray-400">
                      {release.date}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded text-[#d4af37] font-sans text-xs uppercase tracking-widest font-semibold">
                      {release.source}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-h3 text-white uppercase tracking-luxury mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {release.title}
                  </h3>
                  
                  <p className="font-sans text-gray-300 leading-relaxed">
                    {release.description}
                  </p>
                </div>
                
                <button className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/20 transition-all duration-300 group-hover:border-[#d4af37] self-start md:self-center">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Media Kit CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-white/10">
            <h3 className="font-serif text-h3 text-white uppercase tracking-luxury mb-3">
              Media Kit
            </h3>
            <p className="font-sans text-gray-300 mb-6 leading-relaxed">
              Download our comprehensive media kit with brand information, high-resolution images, and company background.
            </p>
            <button className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white font-sans text-sm uppercase tracking-widest font-semibold hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
              Download Media Kit
            </button>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-white/10">
            <h3 className="font-serif text-h3 text-white uppercase tracking-luxury mb-3">
              Press Inquiries
            </h3>
            <p className="font-sans text-gray-300 mb-6 leading-relaxed">
              For media inquiries, interviews, or additional information about Aurelion, please contact our press team.
            </p>
            <a
              href="mailto:press@aurelion.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#d4af37] text-black font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#e5c158] transition-all duration-300"
            >
              Contact Press Team
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="p-8 md:p-12 bg-white/5 border border-white/10">
          <div className="max-w-2xl">
            <h3 className="font-serif text-h2 text-white uppercase tracking-luxury mb-4">
              Stay Updated
            </h3>
            <p className="font-sans text-gray-300 mb-6 leading-relaxed">
              Subscribe to our press mailing list to receive the latest news, press releases, and media updates directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/40 font-sans focus:border-[#d4af37] focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#d4af37] text-black font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#e5c158] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Press;
