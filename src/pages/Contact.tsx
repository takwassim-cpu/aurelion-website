import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            GET IN TOUCH
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black uppercase tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="font-sans text-lg text-gray-700 max-w-2xl leading-relaxed">
            Have questions about our diamonds or services? Our expert team is here to help you find the perfect piece.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-sans text-sm uppercase tracking-widest text-gray-800 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 text-black placeholder:text-gray-500 font-sans text-base focus:border-[#d4af37] focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-sans text-sm uppercase tracking-widest text-gray-800 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 text-black placeholder:text-gray-500 font-sans text-base focus:border-[#d4af37] focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block font-sans text-sm uppercase tracking-widest text-gray-800 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 text-black placeholder:text-gray-500 font-sans text-base focus:border-[#d4af37] focus:outline-none focus:bg-white transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block font-sans text-sm uppercase tracking-widest text-gray-800 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 text-black placeholder:text-gray-500 font-sans text-base focus:border-[#d4af37] focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-sans text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:bg-[#e5c158] hover:shadow-2xl hover:shadow-[#d4af37]/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <Send className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded">
                  <p className="font-sans text-sm text-green-400">
                    Thank you! Your message has been sent successfully. We'll be in touch shortly.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded">
                  <p className="font-sans text-sm text-red-400">
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-12">
              {/* Email */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@aurelion.com"
                      className="font-sans text-lg text-black hover:text-[#d4af37] transition-colors duration-300"
                    >
                      hello@aurelion.com
                    </a>
                    <p className="font-sans text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="font-sans text-lg text-black hover:text-[#d4af37] transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="font-sans text-sm text-gray-600 mt-1">
                      Monday - Friday, 10am - 6pm EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-2">
                      Showroom
                    </h3>
                    <p className="font-sans text-lg text-black">
                      123 Luxury Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                    <p className="font-sans text-sm text-gray-600 mt-1">
                      Visit us by appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-8 border-t border-gray-300">
                <h4 className="font-serif text-h3 text-black uppercase tracking-luxury mb-4">
                  Why Aurelion?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <p className="font-sans text-gray-700">100% Lab-Grown Diamonds</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <p className="font-sans text-gray-700">Ethically Sourced & Certified</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <p className="font-sans text-gray-700">Lifetime Warranty & Support</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <p className="font-sans text-gray-700">Expert Personal Consultations</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
