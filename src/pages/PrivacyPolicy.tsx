const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="font-sans text-label uppercase tracking-label text-[#d4af37] mb-4">
            LEGAL
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-gray-400">
            Last updated: January 31, 2026
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              1. Introduction
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-4">
              Aurelion ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="font-sans text-base text-gray-300 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. By accessing and using Aurelion, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              2. Information We Collect
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="font-sans text-base text-gray-300 leading-relaxed">
                <strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
              </li>
              <li className="font-sans text-base text-gray-300 leading-relaxed">
                <strong className="text-white">Payment Information:</strong> Financial and billing information, including credit card numbers and bank account information, when you choose to purchase products or services through the Site.
              </li>
              <li className="font-sans text-base text-gray-300 leading-relaxed">
                <strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your referral source, and your activity on the Site.
              </li>
            </ul>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              3. Use of Your Information
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="font-sans text-base text-gray-300">• Generate a personal profile about you so that future visits to the Site are personalized</li>
              <li className="font-sans text-base text-gray-300">• Increase the efficiency and operation of the Site</li>
              <li className="font-sans text-base text-gray-300">• Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li className="font-sans text-base text-gray-300">• Notify you of updates to the Site</li>
              <li className="font-sans text-base text-gray-300">• Process your transactions and send related information</li>
              <li className="font-sans text-base text-gray-300">• Email you regarding updates, news, and general information</li>
            </ul>
          </section>

          {/* Disclosure of Information */}
          <section>
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              4. Disclosure of Your Information
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="font-sans text-base text-gray-300">• <strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to comply with the law.</li>
              <li className="font-sans text-base text-gray-300">• <strong className="text-white">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing, data analysis, and customer service.</li>
              <li className="font-sans text-base text-gray-300">• <strong className="text-white">Business Transfers:</strong> If we are involved in a merger, acquisition, or bankruptcy, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              5. Security of Your Information
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="font-serif text-h2 text-[#d4af37] uppercase tracking-luxury mb-4">
              6. Contact Us
            </h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 font-sans text-gray-300">
              <p><strong className="text-white">Aurelion</strong></p>
              <p>123 Luxury Avenue<br />New York, NY 10001<br />United States</p>
              <p className="pt-2"><strong className="text-white">Email:</strong> <a href="mailto:privacy@aurelion.com" className="text-[#d4af37] hover:text-[#e5c158]">privacy@aurelion.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
