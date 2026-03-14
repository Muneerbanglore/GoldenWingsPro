import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gw-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <NavLink to="/" className="block">
              <img 
                src={logo} 
                alt="Golden Winds Pro Logo" 
                className="h-20 w-auto object-contain brightness-100"
              />
            </NavLink>
            <p className="text-gray-400 font-light leading-relaxed">
              Your premier gateway to business excellence in Dubai. We transform complexities into seamless legal success stories.
            </p>
            <div className="flex space-x-4">
              {['FB', 'TW', 'LN', 'IG'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-gw-gold hover:text-gw-gold transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gw-gold rounded-full"></div>
                <span>Navigation</span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-500 hover:text-gw-gold transition-colors flex items-center space-x-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    <span>{item}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gw-gold rounded-full"></div>
                <span>Our Core</span>
            </h4>
            <ul className="space-y-4">
              {['Mainland Setup', 'Free Zone', 'PRO Services', 'Visa Processing'].map((item) => (
                <li key={item} className="text-gray-500 hover:text-gw-gold cursor-pointer transition-colors flex items-center space-x-2">
                    <div className="w-1 h-1 bg-gw-gold/30 rounded-full"></div>
                    <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 flex items-center space-x-2">
                <div className="w-1 h-6 bg-gw-gold rounded-full"></div>
                <span>Connect</span>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gw-gold/5 p-3 rounded-xl border border-white/5 group-hover:border-gw-gold/30 transition-colors">
                    <MapPin className="text-gw-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Deira Office</div>
                  <p className="text-white text-sm">101, Business Center, Dubai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-gw-gold/5 p-3 rounded-xl border border-white/5 group-hover:border-gw-gold/30 transition-colors">
                    <Phone className="text-gw-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">24/7 Support</div>
                  <a href="tel:+971569775916" className="text-white text-sm hover:text-gw-gold transition-colors">+971 56 977 5916</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center gap-6">
          <p className="text-gray-600 text-xs font-bold tracking-[0.2em] uppercase">
            © 2026 Golden Winds Pro Business Excellence. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-gw-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gw-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
