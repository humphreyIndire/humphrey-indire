import React from 'react';
import aboutImg from '../../assets/images/about.png';
import { ABOUT_PILLARS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import ProgressiveImage from '../ui/ProgressiveImage';

const About = () => {
  const photoRef = useFadeIn();
  const contentRef = useFadeIn();

  return (
    <section className="bg-white py-24 px-4 md:px-20 lg:px-24" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div className="w-full aspect-[3/4] relative overflow-hidden group fade-in" ref={photoRef}>
          <ProgressiveImage 
            src={aboutImg} 
            alt="Eng. Humphrey Indire" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 block"
          />
        </div>

        <div className="fade-in" ref={contentRef}>
          <span className="section-label">About</span>
          <h2 className="section-title mb-6">Meet Eng.<br />Humphrey Indire</h2>
          
          <blockquote className="font-playfair text-[22px] italic text-navy leading-relaxed mb-7 pb-2 pl-6 border-l-4 border-gold">
            "The most powerful lever for Africa's development is the intersection of climate capital and indigenous engineering intelligence."
          </blockquote>

          <p className="text-base text-[#445] leading-relaxed mb-6">
            Humphrey Indire is a senior engineering leader and climate finance strategist with over 15 years of experience driving energy transitions across Sub-Saharan Africa. He currently serves in executive and advisory capacities across electric mobility, carbon markets, and sustainable infrastructure — bringing together technical depth, policy fluency, and investment acumen.
          </p>
          
          <p className="text-base text-[#445] leading-relaxed mb-8">
            Based in Nairobi, Kenya, Humphrey works at the confluence of government, private capital, and development finance to engineer climate-resilient economies at continental scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
            {ABOUT_PILLARS.map((pillar) => (
              <div key={pillar.title} className="bg-light-bg rounded-xl p-5 border border-border-subtle hover:border-teal hover:-translate-y-0.5 transition-all">
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <h4 className="font-semibold text-sm text-navy mb-1">{pillar.title}</h4>
                <p className="text-[13px] text-slate leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#booking" className="btn-gold">Book a Session</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
