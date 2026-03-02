import { Leaf, Zap, Droplet, Target } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Lab-Grown Technology',
      description: 'Our diamonds are created in controlled laboratory environments using advanced technology, dramatically reducing environmental impact compared to traditional mining.',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Water Conservation',
      description: 'Lab-grown diamond production uses significantly less water than mining operations. We employ closed-loop systems to minimize water waste and ensure responsible consumption.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Renewable Energy',
      description: 'We partner with manufacturers who prioritize renewable energy sources. Our production facilities operate with a commitment to carbon neutrality and sustainable power.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Ethical Sourcing',
      description: 'Every diamond in our collection is certified conflict-free and ethically sourced. We maintain full transparency throughout our supply chain.',
    },
  ];

  const impactStats = [
    { number: '99.5%', description: 'Less environmental impact than mined diamonds' },
    { number: '~250', description: 'Tons of earth moved per carat of mined diamond' },
    { number: '0', description: 'Carbon emissions with renewable energy production' },
    { number: '100%', description: 'Ethical sourcing & conflict-free certification' },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            OUR COMMITMENT
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-6">
            Sustainability
            <br />
            & Ethics
          </h1>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            At Aurelion, we believe luxury should never come at the expense of our planet. Our lab-grown diamonds represent a responsible choice for conscientious consumers who value both beauty and ethical integrity.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="p-6 bg-white/5 border border-white/10 text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-2">
                {stat.number}
              </p>
              <p className="font-sans text-sm text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Lab-Grown? */}
        <div className="mb-20 p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-white/10">
          <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-6">
            Why Lab-Grown Diamonds?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Environmental Benefits
              </h3>
              <ul className="space-y-3 font-sans text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>No mining required – eliminates habitat destruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>99.5% lower environmental footprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Minimal water consumption during production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Reduced carbon emissions with renewable energy</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Ethical Advantages
              </h3>
              <ul className="space-y-3 font-sans text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>100% conflict-free and ethically sourced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Full transparency in the supply chain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Fair labor practices and worker protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] mt-1">•</span>
                  <span>Supporting scientific advancement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Initiatives */}
        <div className="mb-20">
          <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="p-8 bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                  <div className="text-[#d4af37]">
                    {initiative.icon}
                  </div>
                </div>
                <h3 className="font-serif text-h3 text-white uppercase tracking-luxury mb-3">
                  {initiative.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="p-8 md:p-12 bg-black border border-[#d4af37]/30">
          <h3 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
            Our Promise
          </h3>
          <p className="font-sans text-lg text-gray-300 leading-relaxed max-w-2xl">
            We are committed to continuous improvement in our sustainability practices. By choosing Aurelion, you're not just investing in a beautiful diamond – you're making a conscious choice to support ethical practices and environmental responsibility. Every purchase contributes to a more sustainable future.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Sustainability;
