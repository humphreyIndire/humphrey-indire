import React from "react";
import leadershipImg from "../../assets/images/leadership.jpeg";
import { EXPERIENCES } from "../../constants";
import { useFadeIn } from "../../hooks/useFadeIn";
import ProgressiveImage from "../ui/ProgressiveImage";

const Leadership = () => {
  const headerRef = useFadeIn();
  const listRef = useFadeIn();
  const sidebarRef = useFadeIn();
  const cardsRef = useFadeIn();

  return (
    <section
      className="bg-bg-supporting py-24 px-6 md:px-20 lg:px-24"
      id="leadership"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Leadership & Experience</h2>
          <p className="section-desc">
            Executive leadership across energy infrastructure, climate finance,
            and electric mobility — spanning three continents.
          </p>
        </div>

        {/* First 3 experiences */}
        <div className="flex flex-col gap-1 fade-in mb-16" ref={listRef}>
          {EXPERIENCES.slice(0, 3).map((exp, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl p-7 md:p-8 relative transition-all group hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:translate-x-1 ${
                exp.current
                  ? "border-l-4 border-l-accent"
                  : "border-border-subtle"
              }`}
            >
              {exp.current && (
                <div className="absolute top-5 right-8 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.1em] py-1 px-2.5 rounded">
                  CURRENT
                </div>
              )}
              <h3 className="font-bold text-base text-primary mb-1 group-hover:text-accent transition-colors">
                {exp.role}
              </h3>
              <div className="font-semibold text-[13px] text-accent mb-1.5">
                {exp.company}
              </div>
              <div className="font-dm-mono text-[11px] text-text-muted mb-2.5 uppercase">
                {exp.period}
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining experiences - mobile: image + cards stacked, desktop: image left + cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="fade-in" ref={sidebarRef}>
            <div className="w-full aspect-[4/5] bg-primary rounded-[20px] relative overflow-hidden shadow-xl group lg:sticky lg:top-24">
              <ProgressiveImage
                src={leadershipImg}
                alt="Eng. Humphrey Indire Leadership"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
          </div>

          <div className="flex flex-col gap-1 fade-in" ref={cardsRef}>
            {EXPERIENCES.slice(3).map((exp, i) => (
              <div
                key={i + 3}
                className={`bg-white border rounded-2xl p-7 md:p-8 relative transition-all group hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:translate-x-1 ${
                  exp.current
                    ? "border-l-4 border-l-accent"
                    : "border-border-subtle"
                }`}
              >
                {exp.current && (
                  <div className="absolute top-5 right-8 bg-accent/10 text-accent text-[10px] font-bold tracking-[0.1em] py-1 px-2.5 rounded">
                    CURRENT
                  </div>
                )}
                <h3 className="font-bold text-base text-primary mb-1 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <div className="font-semibold text-[13px] text-accent mb-1.5">
                  {exp.company}
                </div>
                <div className="font-dm-mono text-[11px] text-text-muted mb-2.5 uppercase">
                  {exp.period}
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
