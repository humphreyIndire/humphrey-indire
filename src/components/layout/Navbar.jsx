import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section, footer');
      let currentSection = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the section encompasses the navbar's vertical center (approx 30px from top)
        if (rect.top <= 30 && rect.bottom >= 30) {
           currentSection = section;
        }
      });
      
      if (currentSection) {
        if (currentSection.classList.contains('bg-white') || currentSection.classList.contains('bg-bg-supporting')) {
          setNavTheme('light');
        } else {
          setNavTheme('dark');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
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
      <nav className={`fixed top-0.5 left-1/2 -translate-x-1/2 z-[130] w-[calc(100%-2rem)] max-w-7xl transition-all duration-500 rounded-full border border-white/10 ${isScrolled || isMenuOpen
        ? `backdrop-blur-xl shadow-lg border-white/20 ${navTheme === 'light' ? 'bg-primary/[0.65]' : 'bg-primary/[0.35]'}`
        : 'bg-white/5 backdrop-blur-md shadow-none'
      }`}>
        <div className="flex items-center justify-between px-6 md:px-10 h-[55px]">
          {/* Brand */}
          <div className="flex flex-col gap-0.5 relative z-[120]">
            <div className="font-dm-sans font-bold text-base md:text-lg text-white leading-tight">Eng. Humphrey Indire</div>
            <div className="font-dm-mono text-[9px] md:text-[10px] text-accent tracking-[0.12em] uppercase">ENERGY · ESG · CLIMATE FINANCE</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full text-xs text-white/90 font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_2s_infinite]"></span>
              Open to Advisory
            </div>
            <a
              href="#contact"
              className="bg-accent text-white py-2.5 px-6 rounded-full text-sm font-semibold hover:bg-accent hover:-translate-y-px transition-all shadow-lg shadow-accent/20"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center z-[120]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/10 rounded-lg transition-all"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`}></span>
              </div>
            </button>
          </div>
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
                className={`text-3xl font-dm-sans font-black text-primary transition-all duration-500 hover:text-accent transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {link.label}
              </a>
            ))}

            <div className={`h-px bg-primary/10 my-4 transition-all duration-700 ${isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transitionDelay: '400ms' }}></div>

            <div className={`flex flex-col gap-8 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-3 text-accent font-semibold text-sm tracking-wide uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
                Board & Advisory Ready
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-primary text-white py-4 px-8 rounded-xl text-center font-bold text-lg hover:bg-accent transition-all active:scale-95 shadow-xl shadow-primary/10"
                >
                  Let's Connect
                </a>
                <p className="text-center text-text-muted text-sm font-medium">Strategizing for the Energy Transition</p>
              </div>
            </div>
          </div>

          <div className={`mt-auto pt-10 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex justify-between items-center text-text-muted text-[10px] tracking-[0.2em] uppercase font-dm-mono">
              <span>© 2026</span>
              <span className="w-8 h-px bg-text-muted/30"></span>
              <span>Eng. H. Indire</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
