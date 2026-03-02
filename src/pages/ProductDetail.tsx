import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Shield, Gem, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  price: number;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  // Engagement Rings (6)
  { id: 'e1', name: 'The Eternal Solitaire — Round', shape: 'round', carat: 2.0, color: 'D', clarity: 'VVS1', price: 18500, image: '/images/Engagement Rings/Eternal Solitaire -Round Brilliant.png', category: 'engagement' },
  { id: 'e2', name: 'Halo Light — Oval Halo', shape: 'oval', carat: 1.6, color: 'E', clarity: 'VS1', price: 14200, image: '/images/Engagement Rings/Vintage Romance — Oval Pavé.png', category: 'engagement' },
  { id: 'e3', name: 'Princess Grace — Pavé Princess', shape: 'princess', carat: 1.5, color: 'E', clarity: 'VVS2', price: 13200, image: '/images/Engagement Rings/Princess Elegance —Princess Cut.png', category: 'engagement' },
  { id: 'e4', name: 'Emerald Signature — Step Cut Solitaire', shape: 'emerald', carat: 2.4, color: 'D', clarity: 'VVS2', price: 24500, image: '/images/Engagement Rings/Emerald Luxe —  Emerald Cut.png', category: 'engagement' },
  { id: 'e5', name: 'Cushion Charm — Vintage Halo', shape: 'cushion', carat: 2.1, color: 'F', clarity: 'VS2', price: 16800, image: '/images/Engagement Rings/Halo Dream —Cushion Cut.png', category: 'engagement' },
  { id: 'e6', name: 'Trilogy Radiant — Three-Stone Radiant', shape: 'radiant', carat: 1.9, color: 'E', clarity: 'VS1', price: 15500, image: '/images/Engagement Rings/Three Stone Legacy —.png', category: 'engagement' },

  // Wedding Bands (3)
  { id: 'w1', name: 'Eternity Full — Pavé Full Eternity Band', shape: 'band', carat: 0.0, color: '-', clarity: '-', price: 4200, image: '/images/Wedding Bands/white-gold-pave.png', category: 'wedding' },
  { id: 'w2', name: 'Eternity Half — Half Pavé Band', shape: 'band', carat: 0.0, color: '-', clarity: '-', price: 3200, image: '/images/Wedding Bands/two-tone-twisted.png', category: 'wedding' },
  { id: 'w3', name: 'Classic Plain Gold — Polished Comfort Fit', shape: 'band', carat: 0.0, color: '-', clarity: '-', price: 1200, image: '/images/Wedding Bands/classic-gold-band.png', category: 'wedding' },

  // Fine Jewelry (6)
  { id: 'j1', name: 'Radiance Tennis Bracelet — 4.5ct Total', shape: 'bracelet', carat: 4.5, color: 'G', clarity: 'VS2', price: 11200, image: '/images/Fine Jewelry/radiance-tennis-bracelet.png', category: 'jewelry' },
  { id: 'j2', name: 'Lumière Diamond Studs — Classic Stud Earrings', shape: 'earrings', carat: 1.2, color: 'F', clarity: 'VVS1', price: 6800, image: '/images/Fine Jewelry/Lumière Diamond Studs — Classic Stud Earrings.png', category: 'jewelry' },
  { id: 'j3', name: 'Solitaire Pendant — Minimal Gold Pendant', shape: 'pendant', carat: 0.8, color: 'E', clarity: 'VS1', price: 4200, image: '/images/Fine Jewelry/Solitaire Pendant — Minimal Gold Pendant.png', category: 'jewelry' },
  { id: 'j4', name: 'Orbit Hoops — Diamond Hoop Earrings', shape: 'hoops', carat: 1.6, color: 'G', clarity: 'VS2', price: 5400, image: '/images/Fine Jewelry/Orbit Hoops — Diamond Hoop Earrings.png', category: 'jewelry' },
  { id: 'j5', name: 'Bangle of Light — Diamond Bangle', shape: 'bangle', carat: 2.8, color: 'F', clarity: 'VVS2', price: 9800, image: '/images/Fine Jewelry/Bangle of Light — Diamond Bangle.png', category: 'jewelry' },
  { id: 'j6', name: 'Cascade Drops — Diamond Drop Earrings', shape: 'drop', carat: 1.4, color: 'E', clarity: 'VS1', price: 7300, image: '/images/Fine Jewelry/Cascade Drops — Diamond Drop Earrings.png', category: 'jewelry' },

  // Loose Diamonds (6)
  { id: 'l1', name: 'Pear Perfection — 1.8ct Fancy Cut', shape: 'pear', carat: 1.8, color: 'D', clarity: 'VVS1', price: 14400, image: '/images/Loose Diamonds/pear.png', category: 'loose' },
  { id: 'l2', name: 'Marquise Majesty — 2.1ct Brilliant', shape: 'marquise', carat: 2.1, color: 'E', clarity: 'VVS2', price: 15800, image: '/images/Loose Diamonds/marquise.png', category: 'loose' },
  { id: 'l3', name: 'Heart of Light — 1.2ct Fancy Heart', shape: 'heart', carat: 1.2, color: 'F', clarity: 'VS1', price: 9600, image: '/images/Loose Diamonds/heart.png', category: 'loose' },
  { id: 'l4', name: 'Asscher Allure — 2.0ct Step Cut', shape: 'asscher', carat: 2.0, color: 'D', clarity: 'VVS2', price: 17200, image: '/images/Loose Diamonds/asscher.png', category: 'loose' },
  { id: 'l5', name: 'Oval Horizon — 1.7ct Oval Cut', shape: 'oval', carat: 1.7, color: 'E', clarity: 'VS1', price: 12800, image: '/images/Loose Diamonds/oval.png', category: 'loose' },
  { id: 'l6', name: 'Round Brilliant — 2.5ct Classic Round', shape: 'round', carat: 2.5, color: 'D', clarity: 'VVS1', price: 32500, image: '/images/Loose Diamonds/round-brilliant.png', category: 'loose' },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-alabaster pt-32 pb-20">
        <div className="container-luxury px-6 md:px-10 lg:px-20">
          <div className="text-center py-20">
            <p className="font-serif text-h2 text-obsidian mb-6">Product not found</p>
            <button
              onClick={() => navigate('/collection')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-alabaster font-sans text-label uppercase tracking-label hover:bg-champagne hover:text-obsidian transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </button>
          </div>
        </div>
      </main>
    );
  }



  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, 1);
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-alabaster pt-28 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 font-sans text-[11px] uppercase tracking-[0.15em] text-warm-gray">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-champagne transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name.split('—')[0].trim()}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Product Image — Immersive Display */}
          <div className="bg-obsidian aspect-square overflow-hidden sticky top-28">
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-4">
                {product.category === 'engagement' ? 'Engagement Ring' : product.category === 'wedding' ? 'Wedding Band' : product.category === 'jewelry' ? 'Fine Jewelry' : 'Loose Diamond'}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-obsidian uppercase tracking-wide mb-6 leading-tight">
                {product.name}
              </h1>

              {/* Pricing */}
              <div className="mb-8 pb-8 border-b border-light-gray">
                <p className="font-sans text-sm text-warm-gray">Contact us for pricing</p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian mb-4">Specifications</h3>
                <div className="space-y-0 border-t border-light-gray">
                  {product.carat > 0 && (
                    <div className="flex justify-between py-3 border-b border-light-gray font-sans text-sm">
                      <span className="text-warm-gray">Carat Weight</span>
                      <span className="text-obsidian font-medium">{product.carat}ct</span>
                    </div>
                  )}
                  {product.shape !== 'band' && (
                    <>
                      <div className="flex justify-between py-3 border-b border-light-gray font-sans text-sm">
                        <span className="text-warm-gray">Shape</span>
                        <span className="text-obsidian font-medium capitalize">{product.shape}</span>
                      </div>
                      {product.color !== '-' && (
                        <div className="flex justify-between py-3 border-b border-light-gray font-sans text-sm">
                          <span className="text-warm-gray">Color Grade</span>
                          <span className="text-obsidian font-medium">{product.color}</span>
                        </div>
                      )}
                      {product.clarity !== '-' && (
                        <div className="flex justify-between py-3 border-b border-light-gray font-sans text-sm">
                          <span className="text-warm-gray">Clarity</span>
                          <span className="text-obsidian font-medium">{product.clarity}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Narrative */}
              <p className="font-sans text-sm text-warm-gray mb-10 leading-relaxed">
                A testament to modern luxury. This piece emerges from the intersection of science and artistry — lab-grown diamonds that are physically, chemically, and optically identical to mined stones, set with master craftsmanship.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <button
                onClick={handleAddToCart}
                className="btn-fill-left w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-champagne/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Selections</span>
              </button>

              <p className="text-center font-sans text-[11px] text-warm-gray mt-4 tracking-wide">
                30-day returns · Lifetime warranty · GIA certified
              </p>
            </div>
          </div>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-gray">
          <div className="bg-alabaster p-10 text-center">
            <Gem className="w-6 h-6 text-champagne mx-auto mb-4" />
            <p className="font-serif text-lg text-obsidian uppercase tracking-wide mb-2">100% Lab-Grown</p>
            <p className="font-sans text-xs text-warm-gray leading-relaxed">Ethically sourced diamonds with identical physical and optical properties to mined stones.</p>
          </div>
          <div className="bg-alabaster p-10 text-center">
            <Heart className="w-6 h-6 text-champagne mx-auto mb-4" />
            <p className="font-serif text-lg text-obsidian uppercase tracking-wide mb-2">Expert Crafted</p>
            <p className="font-sans text-xs text-warm-gray leading-relaxed">Meticulously designed by master artisans with decades of fine jewelry experience.</p>
          </div>
          <div className="bg-alabaster p-10 text-center">
            <Shield className="w-6 h-6 text-champagne mx-auto mb-4" />
            <p className="font-serif text-lg text-obsidian uppercase tracking-wide mb-2">Lifetime Warranty</p>
            <p className="font-sans text-xs text-warm-gray leading-relaxed">Comprehensive warranty with complimentary maintenance and cleaning.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
