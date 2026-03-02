import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout... (Coming soon)');
    // In a real app, this would redirect to a checkout page or process payment
  };



  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury mb-4">
            Shopping Cart
          </h1>
          <p className="font-sans text-body text-warm-gray">
            Review your selections and proceed to checkout
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-8 border-b border-light-gray"
                >
                  {/* Item Image */}
                  <div className="w-32 h-32 bg-mist-gray flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-2">
                        {item.name}
                      </h3>
                      <p className="font-sans text-body text-warm-gray mb-4">
                        Quantity: <span className="font-semibold text-obsidian">{item.quantity}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 px-4 py-2 text-obsidian hover:text-champagne transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="font-sans text-caption uppercase">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8">
              <h2 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-6">
                Order Summary
              </h2>

              <div className="mb-8">
                <p className="font-sans text-sm text-warm-gray">Pricing will be provided upon inquiry</p>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:bg-champagne hover:text-obsidian hover:shadow-2xl hover:shadow-champagne/30 mb-4"
              >
                <span className="relative z-10">Proceed to Checkout</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300" />
              </button>

              <Link
                to="/collection"
                className="block text-center px-8 py-4 border border-obsidian text-obsidian font-sans text-sm uppercase tracking-widest hover:bg-obsidian hover:text-alabaster transition-all duration-300"
              >
                Continue Shopping
              </Link>


            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-h2 text-obsidian mb-6">Your cart is empty</p>
            <p className="font-sans text-body text-warm-gray mb-8 max-w-xl mx-auto">
              Explore our collection of exceptional lab-grown diamonds and luxury jewelry.
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-alabaster font-sans text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all duration-300"
            >
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
