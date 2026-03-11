import React from 'react';
import { INSIGHTS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';

const Insights = () => {
  const headerRef = useFadeIn();
  const gridRef = useFadeIn();

  return (
    <section className="bg-white py-24 px-6 md:px-20 lg:px-24" id="insights">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Insights</span>
          <h2 className="section-title">Thought Leadership</h2>
          <p className="section-desc">Deep-dive perspectives on climate finance, energy transition, and the evolution of emerging markets.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 fade-in" ref={gridRef}>
          {/* Featured Article */}
          <div className="border border-border-subtle rounded-[20px] overflow-hidden group cursor-pointer hover:border-teal hover:shadow-2xl hover:shadow-teal/10 transition-all duration-300">
            <div className="w-full h-[280px] bg-gradient-to-br from-navy to-teal flex items-center justify-center relative">
              <span className="absolute bottom-5 left-6 bg-gold text-navy text-[11px] font-bold tracking-[0.1em] uppercase py-1 px-3 rounded">
                {INSIGHTS.featured.tag}
              </span>
              <span className="text-white/30 text-sm">Article hero image</span>
            </div>
            <div className="p-8 md:p-10">
              <div className="font-dm-mono text-[11px] text-slate mb-3 uppercase">{INSIGHTS.featured.date}</div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight group-hover:text-teal transition-colors">
                {INSIGHTS.featured.title}
              </h3>
              <p className="text-[15px] text-slate leading-relaxed mb-6">
                {INSIGHTS.featured.excerpt}
              </p>
              <a href={INSIGHTS.featured.link} className="text-sm font-semibold text-teal hover:underline flex items-center gap-1.5">
                Read Full Article →
              </a>
            </div>
          </div>

          {/* Article List */}
          <div className="flex flex-col gap-4">
            {INSIGHTS.list.map((item, i) => (
              <div 
                key={i} 
                className="border border-border-subtle rounded-2xl p-6 cursor-pointer hover:border-teal hover:translate-x-1 hover:bg-light-bg/50 transition-all group"
              >
                <div className="text-[11px] font-semibold text-teal uppercase tracking-widest mb-1.5">{item.tag}</div>
                <h4 className="font-bold text-[15px] text-navy mb-2 group-hover:text-teal transition-colors leading-snug">{item.title}</h4>
                <div className="text-[12px] text-slate">{item.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
