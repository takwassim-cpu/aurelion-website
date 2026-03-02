const SizeGuide = () => {
  const ringSizes = [
    { size: 3, diameterMM: 14.53, diameterIN: '0.57' },
    { size: 4, diameterMM: 15.09, diameterIN: '0.59' },
    { size: 5, diameterMM: 15.65, diameterIN: '0.62' },
    { size: 6, diameterMM: 16.51, diameterIN: '0.65' },
    { size: 7, diameterMM: 17.35, diameterIN: '0.68' },
    { size: 8, diameterMM: 18.19, diameterIN: '0.72' },
    { size: 9, diameterMM: 19.05, diameterIN: '0.75' },
    { size: 10, diameterMM: 19.84, diameterIN: '0.78' },
    { size: 11, diameterMM: 20.68, diameterIN: '0.81' },
    { size: 12, diameterMM: 21.44, diameterIN: '0.84' },
    { size: 13, diameterMM: 22.23, diameterIN: '0.88' },
  ];

  const mensizes = [
    { size: 8, diameterMM: 18.19, diameterIN: '0.72' },
    { size: 9, diameterMM: 19.05, diameterIN: '0.75' },
    { size: 10, diameterMM: 19.84, diameterIN: '0.78' },
    { size: 11, diameterMM: 20.68, diameterIN: '0.81' },
    { size: 12, diameterMM: 21.44, diameterIN: '0.84' },
    { size: 13, diameterMM: 22.23, diameterIN: '0.88' },
    { size: 14, diameterMM: 23.02, diameterIN: '0.91' },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            SIZING INFORMATION
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight mb-6">
            Ring Size
            <br />
            Guide
          </h1>
          <p className="font-sans text-lg text-gray-300 leading-relaxed">
            Find your perfect ring size with our comprehensive sizing chart. When in doubt, we recommend visiting a jeweler for professional sizing.
          </p>
        </div>

        {/* Sizing Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white/5 border border-white/10">
            <h3 className="font-serif text-h3 text-[#d4af37] uppercase tracking-luxury mb-3">
              How to Measure
            </h3>
            <ol className="font-sans text-sm text-gray-300 space-y-2 list-decimal list-inside">
              <li>Use a ring that fits comfortably</li>
              <li>Measure the inside diameter in millimeters</li>
              <li>Use our chart to find your size</li>
              <li>When trying a new size, wear it for at least 24 hours</li>
            </ol>
          </div>

          <div className="p-6 bg-white/5 border border-white/10">
            <h3 className="font-serif text-h3 text-[#d4af37] uppercase tracking-luxury mb-3">
              Important Tips
            </h3>
            <ul className="font-sans text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>Ring size can vary between manufacturers</li>
              <li>Fingers swell in hot weather</li>
              <li>Size in the afternoon for most accuracy</li>
              <li>Consider your knuckle size</li>
            </ul>
          </div>

          <div className="p-6 bg-white/5 border border-white/10">
            <h3 className="font-serif text-h3 text-[#d4af37] uppercase tracking-luxury mb-3">
              Expert Help
            </h3>
            <p className="font-sans text-sm text-gray-300 mb-4">
              Unsure about your size? Our team can help you determine the perfect fit.
            </p>
            <a
              href="/contact"
              className="inline-block font-sans text-sm text-[#d4af37] hover:text-[#e5c158] transition-colors"
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* Size Charts */}
        <div className="space-y-12">
          {/* Women's Sizes */}
          <div>
            <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-6">
              Women's Ring Sizes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Ring Size
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Diameter (MM)
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Diameter (IN)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ringSizes.map((ring, index) => (
                    <tr
                      key={ring.size}
                      className={`border-b border-white/5 transition-colors ${
                        index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                      } hover:bg-white/10`}
                    >
                      <td className="px-6 py-4 font-serif text-lg text-white">
                        {ring.size}
                      </td>
                      <td className="px-6 py-4 font-sans text-base text-gray-300">
                        {ring.diameterMM} mm
                      </td>
                      <td className="px-6 py-4 font-sans text-base text-gray-300">
                        {ring.diameterIN} in
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Men's Sizes */}
          <div>
            <h2 className="font-serif text-h2 text-white uppercase tracking-luxury mb-6">
              Men's Ring Sizes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Ring Size
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Diameter (MM)
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                      Diameter (IN)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mensizes.map((ring, index) => (
                    <tr
                      key={ring.size}
                      className={`border-b border-white/5 transition-colors ${
                        index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                      } hover:bg-white/10`}
                    >
                      <td className="px-6 py-4 font-serif text-lg text-white">
                        {ring.size}
                      </td>
                      <td className="px-6 py-4 font-sans text-base text-gray-300">
                        {ring.diameterMM} mm
                      </td>
                      <td className="px-6 py-4 font-sans text-base text-gray-300">
                        {ring.diameterIN} in
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-white/5 to-[#d4af37]/5 border border-white/10">
          <div className="max-w-2xl">
            <h3 className="font-serif text-h2 text-white uppercase tracking-luxury mb-4">
              International Sizing
            </h3>
            <p className="font-sans text-base text-gray-300 mb-4">
              Ring sizes vary by country. US sizes shown above are standard. If you have a ring size from another country, please contact our team for conversion assistance.
            </p>
            <p className="font-sans text-base text-gray-300">
              For custom pieces, we can create your ring in any international size. Simply let us know your preference during the customization process.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SizeGuide;
