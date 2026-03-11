import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';

const Testimonials = () => {
  const headerRef = useFadeIn();
  const gridRef = useFadeIn();

  return (
    <section className="bg-light-bg py-24 px-6 md:px-20 lg:px-24" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Social Proof</span>
          <h2 className="section-title">What Industry Leaders Are Saying</h2>
          <p className="section-desc">Professional perspectives on leadership, climate strategy, and infrastructure expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 fade-in" ref={gridRef}>
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="bg-white border border-border-subtle rounded-[20px] p-9 transition-all duration-300 hover:border-teal hover:shadow-2xl hover:shadow-teal/10 hover:-translate-y-1 relative group"
            >
              <div className="absolute top-5 right-7 text-lg select-none" title="LinkedIn Verified">🔵</div>
              <div className="font-playfair text-7xl text-teal opacity-20 leading-[0.6] mb-6">"</div>
              <p className="text-[15px] text-[#334] leading-relaxed mb-8 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-base font-bold text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-navy">{t.name}</div>
                  <div className="text-[12px] text-slate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button className="w-10 h-10 rounded-full border border-border-subtle bg-white flex items-center justify-center text-lg hover:bg-navy hover:text-white transition-all cursor-pointer">←</button>
          <button className="w-10 h-10 rounded-full border border-border-subtle bg-white flex items-center justify-center text-lg hover:bg-navy hover:text-white transition-all cursor-pointer">→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
