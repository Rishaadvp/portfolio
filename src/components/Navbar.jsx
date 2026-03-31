import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-slate-950/70 backdrop-blur-lg border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <a href="#home" className="text-3xl font-extrabold tracking-tight text-slate-100 hover:scale-105 transition-transform">
          MR<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[90%] md:hidden bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl p-6 overflow-hidden">
          <ul className="flex flex-col gap-6 text-center relative z-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-slate-200 hover:text-cyan-400 transition-colors font-medium text-lg block tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
