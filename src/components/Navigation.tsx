import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, X as CloseIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, setIsCartOpen } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when at top or scrolling up
      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      } else {
        // Hide nav when scrolling down
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);

      // Always show scrolled state on non-home pages, or on home page when scrolled
      const isHomePage = location.pathname === '/';
      setIsScrolled(isHomePage ? currentScrollY > 100 : true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location, lastScrollY]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when location changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add actual search logic here
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const navItems = [
    {
      name: 'COLLECTION',
      path: '/collection',
      submenu: [
        { name: 'Engagement Rings', path: '/collection/engagement' },
        { name: 'Wedding Bands', path: '/collection/wedding' },
        { name: 'Fine Jewelry', path: '/collection/fine-jewelry' },
        { name: 'Loose Diamonds', path: '/collection/loose-diamonds' },
      ]
    },
    { name: 'THE AURELION STORY', path: '/story' },
    { name: 'DIAMOND EDUCATION', path: '/education' },
    { name: 'BESPOKE', path: '/bespoke' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${isNavVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-white/90 py-6'
          }`}
      >
        <div className="container-luxury px-6 md:px-10 lg:px-20">
          {/* Search Bar (when open) */}
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="mb-4 flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search diamonds, rings, jewelry..."
                className="flex-1 px-4 py-2 bg-mist-gray border border-light-gray text-obsidian placeholder:text-warm-gray font-sans text-sm focus:outline-none focus:border-champagne transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-champagne text-white font-sans text-sm uppercase tracking-widest hover:bg-[#e5c158] transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="px-3 py-2 text-obsidian hover:text-champagne transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={handleNavClick} className="flex items-center">
              <span className={`font - serif text - 2xl md: text - 3xl tracking - luxury transition - colors duration - 300 text - obsidian`}>
                AURELION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`font - sans text - label uppercase tracking - label transition - colors duration - 300 ${isActive(item.path) ? 'text-champagne' : 'text-obsidian/80 hover:text-obsidian'
                      } `}
                  >
                    {item.name}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-alabaster shadow-luxury py-4 min-w-[220px]">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={handleNavClick}
                            className="block px-6 py-3 font-sans text-caption text-obsidian hover:bg-mist-gray hover:text-champagne transition-colors duration-300"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Utility Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition - colors duration - 300 text - obsidian / 80 hover: text - obsidian`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsAccountModalOpen(!isAccountModalOpen)}
                className={`hidden md:block transition - colors duration - 300 text - obsidian / 80 hover: text - obsidian`}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative transition - colors duration - 300 text - obsidian / 80 hover: text - obsidian`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-champagne text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden transition - colors duration - 300 text - obsidian`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset - 0 z - 40 bg - white transition - all duration - 500 ease - luxury lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`text - center transition - all duration - 500 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                } `}
              style={{ transitionDelay: `${index * 100 + 200} ms` }}
            >
              <Link
                to={item.path}
                onClick={handleNavClick}
                className="font-serif text-h1 text-obsidian hover:text-champagne transition-colors duration-300"
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="mt-4 space-y-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={handleNavClick}
                      className="block font-sans text-caption text-warm-gray hover:text-champagne transition-colors duration-300"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Account Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center pt-32">
          <div className="bg-white border border-light-gray shadow-luxury rounded p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-h3 text-obsidian uppercase">My Account</h3>
              <button
                onClick={() => setIsAccountModalOpen(false)}
                className="text-obsidian hover:text-champagne transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-champagne text-white font-sans text-sm uppercase tracking-widest hover:bg-[#e5c158] transition-colors">
                Sign In
              </button>
              <button className="w-full px-6 py-3 border border-obsidian text-obsidian font-sans text-sm uppercase tracking-widest hover:bg-mist-gray transition-colors">
                Create Account
              </button>
              <div className="pt-4 border-t border-light-gray space-y-2 text-sm font-sans text-obsidian/70">
                <p>📦 Order History</p>
                <p>❤️ Wishlist</p>
                <p>⚙️ Settings</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
