import React from 'react';
import { EXPERIENCES, ESG_INDEX } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';

const Leadership = () => {
  const headerRef = useFadeIn();
  const listRef = useFadeIn();
  const sidebarRef = useFadeIn();

  return (
    <section className="bg-light-bg py-24 px-6 md:px-20 lg:px-24" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Leadership & Experience</h2>
          <p className="section-desc">Executive leadership across energy infrastructure, climate finance, and electric mobility — spanning three continents.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div className="flex flex-col gap-1 fade-in" ref={listRef}>
            {EXPERIENCES.map((exp, i) => (
              <div 
                key={i} 
                className={`bg-white border rounded-2xl p-7 md:p-8 relative transition-all group hover:border-teal hover:shadow-xl hover:shadow-teal/5 hover:translate-x-1 ${
                  exp.current ? 'border-l-4 border-l-teal' : 'border-border-subtle'
                }`}
              >
                {exp.current && (
                  <div className="absolute top-5 right-8 bg-teal/10 text-teal text-[10px] font-bold tracking-[0.1em] py-1 px-2.5 rounded">CURRENT</div>
                )}
                <h3 className="font-bold text-base text-navy mb-1 group-hover:text-teal transition-colors">{exp.role}</h3>
                <div className="font-semibold text-[13px] text-teal mb-1.5">{exp.company}</div>
                <div className="font-dm-mono text-[11px] text-slate mb-2.5 uppercase">{exp.period}</div>
                <p className="text-sm text-[#556] leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-in" ref={sidebarRef}>
            <div className="w-full aspect-[4/5] bg-navy rounded-[20px] mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-5xl opacity-20 mb-2">👤</div>
                <p className="text-[13px] text-white/20">Replace with actual photo<br />of Eng. Humphrey Indire</p>
              </div>
            </div>

            <div className="bg-white border border-border-subtle rounded-2xl p-6">
              <h4 className="font-bold text-sm text-navy mb-4 uppercase tracking-tighter">ESG Competency Index</h4>
              <div className="flex flex-col gap-3">
                {ESG_INDEX.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="text-[12px] font-semibold text-navy w-[100px] shrink-0">{item.label}</div>
                    <div className="flex-1 h-1.5 bg-border-subtle rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                    <div className="text-[12px] font-semibold text-slate w-9 text-right line-clamp-1">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
