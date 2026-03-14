import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Wind } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-3 group translate-y-0 hover:-translate-y-1 transition-transform duration-300">
            <img 
              src={logo} 
              alt="Golden Winds Pro Logo" 
              className="h-16 w-auto object-contain brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link-premium text-white ${isActive ? 'text-gw-gold after:w-full' : 'text-white/70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-premium py-2.5 px-6 text-xs group">
              <span>GET STARTED</span>
              <Wind size={14} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors text-white"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gw-black/95 backdrop-blur-2xl shadow-2xl border-b border-white/5 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="px-6 pt-10 pb-12 space-y-6 sm:px-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-3xl font-serif font-bold ${isActive ? 'text-gw-gold translate-x-4' : 'text-white/80 hover:text-gw-gold hover:translate-x-2'} transition-all duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-8">
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="w-full btn-premium py-5">
                GET STARTED
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
