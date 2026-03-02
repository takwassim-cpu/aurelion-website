const Careers = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We pursue perfection in everything we do, from our diamonds to our customer service.',
    },
    {
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and ethical practices in all our dealings.',
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative approaches to luxury.',
    },
    {
      title: 'Sustainability',
      description: 'We are committed to creating a positive impact on our environment and communities.',
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            BECOME PART OF OUR TEAM
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-6">
            Join Our
            <br />
            Team
          </h1>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            At Aurelion, we're building the future of luxury diamonds. We're looking for talented, passionate individuals who share our commitment to excellence, ethics, and innovation.
          </p>
        </div>

        {/* No Current Openings */}
        <div className="mb-16 p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-[#d4af37]/30 rounded">
          <p className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
            Currently Hiring
          </p>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            We don't currently have any open positions, but we're always interested in hearing from talented individuals. If you believe you'd be a great fit for Aurelion, please reach out to us directly.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-12">
            Why Work With Aurelion?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors duration-300">
                <h3 className="font-serif text-h3 text-[#d4af37] uppercase tracking-luxury mb-4">
                  {value.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-20 p-8 md:p-12 bg-white/5 border border-white/10">
          <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-6">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Collaborative
              </p>
              <p className="font-sans text-gray-300 leading-relaxed">
                We work together as a unified team, valuing diverse perspectives and ideas from everyone.
              </p>
            </div>
            <div>
              <p className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Innovative
              </p>
              <p className="font-sans text-gray-300 leading-relaxed">
                We encourage creativity and forward-thinking approaches to solving challenges.
              </p>
            </div>
            <div>
              <p className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Professional
              </p>
              <p className="font-sans text-gray-300 leading-relaxed">
                We maintain the highest standards of professionalism and customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Opportunities */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/30">
          <div className="max-w-2xl">
            <h3 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              Interested in Joining Us?
            </h3>
            <p className="font-sans text-base text-gray-300 mb-6 leading-relaxed">
              Even if we don't have current openings, we'd love to hear from you. Send us your resume and a brief introduction about why you're passionate about joining the Aurelion team.
            </p>
            <a
              href="mailto:careers@aurelion.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-sans text-sm uppercase tracking-widest font-bold hover:bg-[#e5c158] transition-all duration-300"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Careers;
