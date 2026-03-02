import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'CUSTOMER CARE': [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'FAQ', path: '/faq' },
    ],
    'OUR STORY': [
      { name: 'About Us', path: '/story' },
      { name: 'Sustainability', path: '/sustainability' },
    ],
    'LEGAL': [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, path: 'https://www.instagram.com/aurelion.jewelry/', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, path: 'https://facebook.com', label: 'Facebook' },
    { icon: <Linkedin className="w-5 h-5" />, path: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white text-obsidian border-t border-light-gray">
      {/* Main Footer */}
      <div className="section-padding-sm">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <span className="font-serif text-3xl tracking-luxury text-obsidian">
                  AURELION
                </span>
              </Link>
              <p className="font-sans text-caption text-obsidian/50 max-w-sm mb-8">
                The future of luxury. Ethically crafted lab-grown diamonds of exceptional brilliance,
                created with cutting-edge technology and timeless artistry.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-light-gray flex items-center justify-center text-obsidian/50 hover:border-champagne hover:text-champagne transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-sans text-label uppercase tracking-label text-obsidian mb-6">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="font-sans text-caption text-obsidian/50 hover:text-champagne transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-light-gray">
        <div className="container-luxury px-6 md:px-10 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-caption text-obsidian/40">
              © 2026 AURELION. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-sans text-caption text-obsidian/40">
                IGI Certified
              </span>
              <span className="font-sans text-caption text-obsidian/40">
                Carbon Neutral
              </span>
              <span className="font-sans text-caption text-alabaster/40">
                Conflict Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
