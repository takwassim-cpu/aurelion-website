import { X, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const SlideOutCart = () => {
    const { cartItems, removeFromCart, isCartOpen, setIsCartOpen } = useCart();



    const handleCheckout = () => {
        alert('Proceeding to checkout... (Coming soon)');
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[100] transition-opacity duration-500 ease-out bg-obsidian/40 backdrop-blur-sm ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Slide-out Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[450px] max-w-[100vw] bg-alabaster z-[101] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-8 border-b border-light-gray bg-white">
                    <h2 className="font-serif text-2xl text-obsidian uppercase tracking-wide">
                        Your Selections
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="w-10 h-10 flex items-center justify-center text-obsidian/50 hover:text-obsidian transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {cartItems.length > 0 ? (
                        <div className="space-y-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6 pb-6 border-b border-light-gray/50">
                                    <div className="w-24 h-24 bg-obsidian rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1 flex flex-col pt-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-serif text-sm text-obsidian uppercase tracking-wider pr-4 leading-snug">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-warm-gray hover:text-obsidian transition-colors mt-0.5"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="font-sans text-[10px] text-warm-gray uppercase tracking-wider mb-4">
                                            Qty: {item.quantity}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <p className="font-serif text-2xl text-obsidian mb-4">Empty</p>
                            <p className="font-sans text-sm text-warm-gray mb-8 max-w-[250px]">
                                Your selection is currently empty. Discover our brilliant collections.
                            </p>
                            <Link
                                to="/collection"
                                onClick={() => setIsCartOpen(false)}
                                className="btn-fill-left inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500"
                            >
                                <span>Explore</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>

                {/* Footer Summary */}
                {cartItems.length > 0 && (
                    <div className="bg-white p-8 border-t border-light-gray mt-auto">
                        <div className="mb-8">
                            <p className="font-sans text-xs text-warm-gray tracking-wide">Pricing provided upon inquiry</p>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="btn-fill-left w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-champagne/20"
                        >
                            <span>Secure Checkout</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SlideOutCart;
