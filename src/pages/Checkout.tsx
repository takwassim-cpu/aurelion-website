import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        contactPreference: 'email'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate premium submission
        setTimeout(() => {
            setIsSubmitted(true);
            clearCart();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-alabaster pt-40 pb-20">
                <div className="container-luxury px-6 text-center">
                    <div className="max-w-2xl mx-auto bg-white p-12 md:p-20 shadow-luxury">
                        <div className="flex justify-center mb-8">
                            <CheckCircle2 className="w-16 h-16 text-champagne" />
                        </div>
                        <h1 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-6">
                            Request Received
                        </h1>
                        <p className="font-sans text-body text-warm-gray mb-12 leading-relaxed">
                            Thank you for choosing Aurelion. Your inquiry has been prioritized and assigned to a personal concierge who will contact you within the next 24 hours to finalize your selection.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-obsidian text-white font-sans text-sm uppercase tracking-widest hover:bg-champagne transition-all duration-500"
                        >
                            Return Home
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-alabaster pt-40 pb-20">
                <div className="container-luxury px-6 text-center">
                    <h1 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-6">
                        No Selections Found
                    </h1>
                    <p className="font-sans text-body text-warm-gray mb-12">
                        Your private selection list is currently empty.
                    </p>
                    <Link
                        to="/collection"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-obsidian text-white font-sans text-sm uppercase tracking-widest hover:bg-champagne transition-all duration-500"
                    >
                        Explore Collection
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-alabaster pt-32 pb-20">
            <div className="container-luxury px-6 md:px-10 lg:px-20">
                {/* Header */}
                <div className="mb-16 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <ShieldCheck className="w-5 h-5 text-champagne" />
                        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-champagne">Secure Concierge Inquiry</span>
                    </div>
                    <h1 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury">
                        Finalize Your Selection
                    </h1>
                    <p className="font-sans text-body text-warm-gray mt-4 max-w-2xl">
                        As a boutique luxury brand, we handle every purchase with personalized care. Complete the details below, and our concierge will reach out to finalize your order.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Form Section */}
                    <div className="bg-white p-8 md:p-12 shadow-luxury border border-light-gray/50">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">First Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">Last Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">Preferred Contact Method</label>
                                <select
                                    name="contactPreference"
                                    value={formData.contactPreference}
                                    onChange={handleInputChange}
                                    className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans bg-transparent"
                                >
                                    <option value="email">Email</option>
                                    <option value="phone">Phone Call</option>
                                    <option value="whatsapp">WhatsApp</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[11px] uppercase tracking-widest text-obsidian">Personal Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-0 py-3 border-b border-light-gray focus:border-obsidian outline-none transition-colors font-sans resize-none"
                                    placeholder="Specify any custom requirements or questions..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-obsidian text-alabaster font-sans text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-champagne hover:text-white transition-all duration-500 shadow-luxury"
                            >
                                Submit Private Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Summary Section */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-serif text-2xl text-obsidian uppercase tracking-wide mb-8 border-b border-light-gray pb-4">
                                Your Selections
                            </h2>
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-6">
                                        <div className="w-20 h-20 bg-mist-gray flex-shrink-0 p-2">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-sm text-obsidian uppercase tracking-wider mb-1 line-clamp-1">{item.name}</h3>
                                            <p className="font-sans text-[10px] text-warm-gray uppercase tracking-widest">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-obsidian text-alabaster p-10 space-y-8">
                            <h3 className="font-serif text-xl uppercase tracking-widest">Personal Concierge</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-champagne" />
                                    <span className="font-sans text-sm tracking-wide">concierge@aurelion.jewelry</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-champagne" />
                                    <span className="font-sans text-sm tracking-wide">+1 212-AURELION</span>
                                </div>
                                <div className="flex items-center gap-4 text-left">
                                    <MapPin className="w-5 h-5 text-champagne" />
                                    <span className="font-sans text-sm tracking-wide leading-relaxed">Fifth Avenue, New York City<br />By Appointment Only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
