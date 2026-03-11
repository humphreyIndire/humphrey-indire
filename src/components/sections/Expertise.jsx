import React, { useState } from 'react';
import { EXPERTISE_AREAS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';

const Expertise = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useFadeIn();
  const pillsRef = useFadeIn();
  const gridRef = useFadeIn();

  const filters = ['All', 'Energy Transition', 'Carbon Markets', 'ESG Strategy', 'Infrastructure', 'EV Mobility', 'Climate Finance', 'Risk Management', 'Policy'];

  const filteredAreas = activeFilter === 'All' 
    ? EXPERTISE_AREAS 
    : EXPERTISE_AREAS.filter(area => area.categories.includes(activeFilter));

  return (
    <section className="bg-cream py-24 px-6 md:px-20 lg:px-24" id="expertise">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-desc">Strategic capabilities focused on sustainable growth, resilient infrastructure, and long-term value creation.</p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-14 fade-in" ref={pillsRef}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-2 px-5 rounded-full text-[13px] font-medium transition-all border cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-navy text-white border-navy shadow-md shadow-navy/20' 
                  : 'bg-white text-navy border-border-subtle hover:border-navy'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in" ref={gridRef}>
          {filteredAreas.map((area, i) => (
            <div 
              key={area.title} 
              className="bg-white border border-border-subtle rounded-2xl p-8 transition-all duration-300 hover:border-teal hover:shadow-xl hover:shadow-teal/5 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{area.icon}</div>
              <h3 className="font-bold text-base text-navy mb-3 leading-tight">{area.title}</h3>
              <p className="text-sm text-slate leading-relaxed mb-6">{area.desc}</p>
              <a href="#insights" className="text-[13px] font-semibold text-teal hover:text-navy transition-colors flex items-center gap-1.5">
                View Insights →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
