import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Bespoke from './pages/Bespoke';
import Story from './pages/Story';
import Education from './pages/Education';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SizeGuide from './pages/SizeGuide';
import Sustainability from './pages/Sustainability';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import SlideOutCart from './components/SlideOutCart';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-alabaster flex flex-col">
          <Navigation />
          <SlideOutCart />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/collection/:category" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/bespoke" element={<Bespoke />} />
              <Route path="/story" element={<Story />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
