import React from 'react';
import { HERO_STATS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import Stat from '../ui/Stat';
import Button from '../ui/Button';

const Hero = () => {
  const contentRef = useFadeIn();
  const imageRef = useFadeIn();

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-20 py-24 lg:py-32 bg-navy relative overflow-hidden" id="home">
      {/* Decorative Gradients */}
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(11,123,110,0.25)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute -bottom-[100px] left-[200px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.12)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 fade-in" ref={contentRef}>
        <div className="flex items-center gap-3 font-dm-mono text-[11px] font-medium tracking-[0.2em] uppercase text-teal-light mb-4 md:mb-6">
          <span className="w-8 h-px bg-teal-light"></span>
          Africa's Climate Finance & Energy Leader
        </div>
        
        <h1 className="font-playfair text-[clamp(42px,5vw,68px)] font-black text-white leading-[1.08] mb-5">
          Energy <em className="text-gold italic">Transition,</em><br />
          Climate Finance &<br />
          Infrastructure<br />
          Leadership
        </h1>

        <p className="text-[17px] text-white/60 leading-relaxed mb-4 max-w-[480px]">
          Engineering sustainable energy systems and climate investment strategies across Africa — bridging policy, capital, and execution.
        </p>

        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {['Energy Transition', 'ESG Strategy', 'Carbon Markets', 'Oil & Gas Infrastructure', 'EV Mobility'].map((tag) => (
            <span key={tag} className="bg-white/7 border border-white/12 text-white/75 py-1.5 px-3.5 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-8 md:mb-10">
          <a href="#leadership" className="btn-primary">View Leadership & Experience →</a>
          <a href="#booking" className="btn-outline">📅 Book a Session</a>
        </div>

        <div className="bg-white/8 backdrop-blur-md border border-white/12 rounded-xl py-4 px-8 flex justify-center lg:justify-start gap-10 w-full lg:w-max">
          {HERO_STATS.map((stat, i) => (
            <Stat key={i} {...stat} />
          ))}
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-end relative z-10 fade-in" ref={imageRef}>
        <div className="w-[420px] h-[520px] bg-gradient-to-br from-teal/30 to-gold/15 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden text-white/30 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-6xl opacity-30">👤</div>
            <p className="text-[13px] opacity-50">Replace with<br />professional portrait</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
