import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.services, path: '/services' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-zkth-navy/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-zkth-navy dark:bg-zkth-blue flex items-center justify-center rounded-lg">
              <span className="text-white font-bold text-xl">ZK</span>
            </div>
            <span className="text-2xl font-black text-zkth-navy dark:text-white tracking-tighter">ZKTH</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-semibold transition ${
                  location.pathname === link.path 
                    ? 'text-zkth-blue dark:text-zkth-gold' 
                    : 'text-zkth-navy dark:text-gray-300 hover:text-zkth-blue dark:hover:text-zkth-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
            <a 
              href="tel:089528518" 
              className="flex items-center bg-zkth-navy dark:bg-zkth-gold text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-zkth-blue dark:hover:bg-zkth-gold/80 transition shadow-lg"
            >
              <Phone size={16} className="mr-2" /> 089 528 518
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} className="dark:text-white" /> : <Menu size={28} className="dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-zkth-navy border-b dark:border-gray-800 shadow-xl p-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className="block text-lg font-medium p-2 text-zkth-navy dark:text-gray-200 hover:text-zkth-blue dark:hover:text-zkth-gold"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:089528518" 
            className="flex items-center justify-center bg-zkth-navy dark:bg-zkth-gold text-white px-5 py-3 rounded-full text-sm font-bold"
          >
            <Phone size={16} className="mr-2" /> 089 528 518
          </a>
        </div>
      )}
    </nav>
  );
}