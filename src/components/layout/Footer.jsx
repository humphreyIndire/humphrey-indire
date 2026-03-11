import React from 'react';
import { NAV_LINKS } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-navy text-white/50 py-16 px-6 md:px-20 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="font-playfair text-2xl font-bold text-white mb-2">Eng. Humphrey Indire</div>
          <div className="text-sm text-white/40 leading-relaxed mb-6">
            Energy Transition · Climate Finance · Infrastructure Leadership<br />
            Engineering Africa's sustainable future — one bold initiative at a time.
          </div>
          {/* <div className="flex gap-2.5">
            {['💼', '🐦', '📸', '▶️'].map((icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-lg hover:bg-teal hover:border-teal hover:-translate-y-0.5 transition-all"
              >
                {icon}
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Navigate</h4>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/40 hover:text-teal-light transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#expertise" className="text-sm text-white/40 hover:text-teal-light transition-colors">Expertise</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Engage</h4>
          <div className="flex flex-col gap-2.5">
            <a href="#booking" className="text-sm text-white/40 hover:text-teal-light transition-colors">Book a Session</a>
            <a href="#booking" className="text-sm text-white/40 hover:text-teal-light transition-colors">Fractional Leadership</a>
            <a href="#booking" className="text-sm text-white/40 hover:text-teal-light transition-colors">Keynote Speaking</a>
            <a href="#merch" className="text-sm text-white/40 hover:text-teal-light transition-colors">Merchandise</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Resources</h4>
          <div className="flex flex-col gap-2.5">
            <a href="#" className="text-sm text-white/40 hover:text-teal-light transition-colors">Climate Finance Playbook</a>
            <a href="#" className="text-sm text-white/40 hover:text-teal-light transition-colors">ESG Workbook</a>
            <a href="#contact" className="text-sm text-white/40 hover:text-teal-light transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">Eng. Humphrey Indire · © 2026 All rights reserved. Nairobi, Kenya.</div>
        {/* <div className="flex gap-6">
          <a href="#" className="text-xs text-white/35 hover:text-teal-light transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-white/35 hover:text-teal-light transition-colors">Terms of Use</a>
          <a href="#" className="text-xs text-white/35 hover:text-teal-light transition-colors">Data Protection (KDPA)</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
