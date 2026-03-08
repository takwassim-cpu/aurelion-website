import { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Grid3X3, LayoutList } from 'lucide-react';



import { mockProducts, type Product } from '../data/products';

const shapes = ['round', 'princess', 'emerald', 'oval', 'cushion', 'pear', 'marquise', 'asscher', 'radiant', 'heart'];
const colors = ['D', 'E', 'F', 'G', 'H'];
const clarities = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2'];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams<{ category?: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [categoryTitle, setCategoryTitle] = useState('OUR COLLECTION');

  // Filter states
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedClarities, setSelectedClarities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [caratRange, setCaratRange] = useState<[number, number]>([0, 5]);

  // Map URL category -> internal product tag and get display title
  const mapUrlCategoryToTag = (cat?: string): string | undefined => {
    if (!cat) return undefined;
    if (['fine-jewelry', 'jewelry'].includes(cat)) return 'jewelry';
    if (['loose-diamonds', 'loose'].includes(cat)) return 'loose';
    if (cat === 'engagement') return 'engagement';
    if (cat === 'wedding') return 'wedding';
    return undefined;
  };

  const getCategoryTitle = (cat?: string): string => {
    switch (cat) {
      case 'engagement':
        return 'ENGAGEMENT RINGS';
      case 'wedding':
        return 'WEDDING BANDS';
      case 'fine-jewelry':
      case 'jewelry':
        return 'FINE JEWELRY';
      case 'loose-diamonds':
      case 'loose':
        return 'LOOSE DIAMONDS';
      default:
        return 'OUR COLLECTION';
    }
  };

  // Update category title when URL changes
  useEffect(() => {
    setCategoryTitle(getCategoryTitle(category));
  }, [category]);

  // Initialize from URL params
  useEffect(() => {
    const shapeParam = searchParams.get('shape');
    if (shapeParam) {
      setSelectedShapes([shapeParam]);
    }
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    let filtered = mockProducts;

    // Map URL category (e.g. fine-jewelry, loose-diamonds) to internal product tag
    const categoryTag = mapUrlCategoryToTag(category);
    if (categoryTag) {
      filtered = filtered.filter(p => p.category === categoryTag);
    }

    if (selectedShapes.length > 0) {
      filtered = filtered.filter(p => selectedShapes.includes(p.shape));
    }
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => selectedColors.includes(p.color));
    }
    if (selectedClarities.length > 0) {
      filtered = filtered.filter(p => selectedClarities.includes(p.clarity));
    }
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    filtered = filtered.filter(p => p.carat >= caratRange[0] && p.carat <= caratRange[1]);

    setFilteredProducts(filtered);
  }, [selectedShapes, selectedColors, selectedClarities, priceRange, caratRange, category]);

  const toggleShape = (shape: string) => {
    setSelectedShapes(prev =>
      prev.includes(shape) ? prev.filter(s => s !== shape) : [...prev, shape]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleClarity = (clarity: string) => {
    setSelectedClarities(prev =>
      prev.includes(clarity) ? prev.filter(c => c !== clarity) : [...prev, clarity]
    );
  };

  const clearFilters = () => {
    setSelectedShapes([]);
    setSelectedColors([]);
    setSelectedClarities([]);
    setPriceRange([0, 50000]);
    setCaratRange([0, 5]);
    setSearchParams({});
  };

  const activeFiltersCount = selectedShapes.length + selectedColors.length + selectedClarities.length;



  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne mb-3">
            Discover
          </p>
          <h1 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury">
            {categoryTitle}
          </h1>
          <p className="font-serif text-xl md:text-2xl italic text-obsidian/80 mt-6 max-w-2xl leading-relaxed font-light">
            Each piece in our collection represents the pinnacle of lab-grown diamond craftsmanship.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-light-gray mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 font-sans text-label uppercase tracking-label text-obsidian hover:text-champagne transition-colors duration-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              FILTER
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-champagne text-alabaster text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 font-sans text-caption text-warm-gray hover:text-obsidian transition-colors duration-300"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-6">
            <span className="font-sans text-caption text-warm-gray">
              {filteredProducts.length} RESULTS
            </span>
            <div className="flex items-center gap-2 border-l border-light-gray pl-6">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-300 ${viewMode === 'grid' ? 'text-obsidian' : 'text-warm-gray hover:text-obsidian'}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-300 ${viewMode === 'list' ? 'text-obsidian' : 'text-warm-gray hover:text-obsidian'}`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide-Out Filter Panel */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsFilterOpen(false)}
        >
          <div className="absolute inset-0 bg-obsidian/30 backdrop-blur-sm" />
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-[380px] max-w-[90vw] bg-white z-50 shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-serif text-2xl text-obsidian uppercase tracking-wide">Refine</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-obsidian/50 hover:text-obsidian transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Shape Filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian mb-4">
                Shape
              </h4>
              <div className="flex flex-wrap gap-2">
                {shapes.map(shape => (
                  <button
                    key={shape}
                    onClick={() => toggleShape(shape)}
                    className={`px-4 py-2 font-sans text-xs uppercase tracking-wide transition-all duration-300 ${selectedShapes.includes(shape)
                      ? 'bg-obsidian text-alabaster'
                      : 'bg-mist-gray text-obsidian hover:bg-light-gray border border-transparent hover:border-obsidian/10'
                      }`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian mb-4">
                Color Grade
              </h4>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`w-11 h-11 font-sans text-xs transition-all duration-300 ${selectedColors.includes(color)
                      ? 'bg-obsidian text-alabaster'
                      : 'bg-mist-gray text-obsidian hover:bg-light-gray'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Clarity Filter */}
            <div className="mb-8">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian mb-4">
                Clarity
              </h4>
              <div className="flex flex-wrap gap-2">
                {clarities.map(clarity => (
                  <button
                    key={clarity}
                    onClick={() => toggleClarity(clarity)}
                    className={`px-4 py-2 font-sans text-xs uppercase tracking-wide transition-all duration-300 ${selectedClarities.includes(clarity)
                      ? 'bg-obsidian text-alabaster'
                      : 'bg-mist-gray text-obsidian hover:bg-light-gray'
                      }`}
                  >
                    {clarity}
                  </button>
                ))}
              </div>
            </div>



            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-obsidian/20 font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian hover:bg-mist-gray transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-obsidian font-sans text-[11px] uppercase tracking-[0.2em] text-alabaster hover:bg-champagne transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedShapes.map(s => (
              <button key={s} onClick={() => toggleShape(s)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-obsidian/5 text-obsidian font-sans text-[10px] uppercase tracking-wider hover:bg-obsidian/10 transition-colors">
                {s} <X className="w-3 h-3" />
              </button>
            ))}
            {selectedColors.map(c => (
              <button key={c} onClick={() => toggleColor(c)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-obsidian/5 text-obsidian font-sans text-[10px] uppercase tracking-wider hover:bg-obsidian/10 transition-colors">
                Color {c} <X className="w-3 h-3" />
              </button>
            ))}
            {selectedClarities.map(cl => (
              <button key={cl} onClick={() => toggleClarity(cl)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-obsidian/5 text-obsidian font-sans text-[10px] uppercase tracking-wider hover:bg-obsidian/10 transition-colors">
                {cl} <X className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}

        {/* Products Grid — Editorial Cards */}
        <div className={`grid gap-x-6 gap-y-10 ${viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
          }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group card-lift ${viewMode === 'list' ? 'flex gap-8 items-center' : 'flex flex-col'}`}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="contents">
                <div className={`relative overflow-hidden bg-obsidian ${viewMode === 'list'
                  ? 'w-48 h-48 flex-shrink-0'
                  : 'aspect-square'
                  }`}>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <span className="px-6 py-2.5 bg-white/90 backdrop-blur-sm font-sans text-[10px] uppercase tracking-[0.2em] text-obsidian">
                      Quick View
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <Link to={`/product/${product.id}`} className="contents">
                <div className={`${viewMode === 'list' ? 'flex-1' : 'pt-4'}`}>
                  <h3 className="font-serif text-base text-obsidian uppercase tracking-wide mb-1.5 group-hover:text-champagne transition-colors duration-300">
                    {product.name}
                  </h3>
                  {/* Spec row */}
                  <div className="flex items-center gap-2 mb-2">
                    {product.carat > 0 && (
                      <span className="font-sans text-[10px] uppercase tracking-wider text-warm-gray">{product.carat}ct</span>
                    )}
                    {product.carat > 0 && <span className="text-light-gray">·</span>}
                    <span className="font-sans text-[10px] uppercase tracking-wider text-warm-gray">{product.shape}</span>
                    {product.color !== 'N/A' && (
                      <><span className="text-light-gray">·</span><span className="font-sans text-[10px] uppercase tracking-wider text-warm-gray">{product.color}</span></>
                    )}
                    {product.clarity !== 'N/A' && (
                      <><span className="text-light-gray">·</span><span className="font-sans text-[10px] uppercase tracking-wider text-warm-gray">{product.clarity}</span></>
                    )}
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Elegant Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif text-3xl text-obsidian mb-4">
              No diamonds match your exact criteria
            </p>
            <p className="font-sans text-sm text-warm-gray mb-8 max-w-md mx-auto">
              Our concierge can help you find exactly what you're looking for.
              Every diamond is unique — let us guide your discovery.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-6 py-3 border border-obsidian/20 font-sans text-[11px] uppercase tracking-[0.2em] text-obsidian hover:bg-mist-gray transition-all duration-300"
              >
                Clear Filters
              </button>
              <Link
                to="/bespoke"
                className="inline-flex items-center gap-2 px-6 py-3 bg-champagne font-sans text-[11px] uppercase tracking-[0.2em] text-white hover:bg-soft-gold transition-all duration-300"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Collection;
