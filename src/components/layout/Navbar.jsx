import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[130] flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm' : 'bg-white/90 backdrop-blur-sm shadow-none border-b border-transparent'
        }`}>
        {/* Brand */}
        <div className="flex flex-col gap-0.5 relative z-[120]">
          <div className="font-playfair font-bold text-base md:text-lg text-navy leading-tight">Eng. Humphrey Indire</div>
          <div className="font-dm-mono text-[9px] md:text-[10px] text-teal tracking-[0.12em] uppercase">ENERGY · ESG · CLIMATE FINANCE</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-1.5 bg-teal/5 border border-teal/20 py-1.5 px-3 rounded-full text-xs text-teal font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-light animate-[pulse_2s_infinite]"></span>
            Open to Advisory
          </div>
          <a
            href="#contact"
            className="bg-navy text-white py-2.5 px-6 rounded-md text-sm font-medium hover:bg-teal hover:-translate-y-px transition-all shadow-md shadow-navy/5"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center z-[120]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy p-2 focus:outline-none focus:ring-2 focus:ring-teal/20 rounded-lg transition-all"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-navy transition-all duration-300 transform origin-left ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`}></span>
              <span className={`w-full h-0.5 bg-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-navy transition-all duration-300 transform origin-left ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[110] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col h-full pt-28 pb-12 px-8">
          <div className="flex flex-col gap-6 overflow-y-auto">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-playfair font-black text-navy transition-all duration-500 hover:text-teal transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {link.label}
              </a>
            ))}

            <div className={`h-px bg-navy/10 my-4 transition-all duration-700 ${isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transitionDelay: '400ms' }}></div>

            <div className={`flex flex-col gap-8 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-3 text-teal font-semibold text-sm tracking-wide uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-light animate-pulse"></span>
                Board & Advisory Ready
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-navy text-white py-4 px-8 rounded-xl text-center font-bold text-lg hover:bg-teal transition-all active:scale-95 shadow-xl shadow-navy/10"
                >
                  Let's Connect
                </a>
                <p className="text-center text-slate text-sm font-medium">Strategizing for the Energy Transition</p>
              </div>
            </div>
          </div>

          <div className={`mt-auto pt-10 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex justify-between items-center text-slate text-[10px] tracking-[0.2em] uppercase font-dm-mono">
              <span>© 2026</span>
              <span className="w-8 h-px bg-slate/30"></span>
              <span>Eng. H. Indire</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

