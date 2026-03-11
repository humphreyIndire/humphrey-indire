import React from 'react';
import { REFERRAL_REWARDS, REFERRAL_STATS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import Button from '../ui/Button';

const Referrals = () => {
  const headerRef = useFadeIn();
  const heroRef = useFadeIn();
  const formRef = useFadeIn();

  return (
    <section className="bg-white py-24 px-6 md:px-20 lg:px-24" id="referrals">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Grow Together</span>
          <h2 className="section-title">Refer & Earn</h2>
          <p className="section-desc">Know an organization that would benefit from Humphrey's expertise? Refer them and earn rewards when they book any engagement.</p>
        </div>

        <div className="bg-gradient-to-br from-navy to-[#1a3a5c] rounded-[24px] p-10 md:p-16 mb-16 relative overflow-hidden fade-in" ref={heroRef}>
          <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,76,0.2)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Turn Your Network Into a<br />Force for Good — and Reward
              </h3>
              <p className="text-base text-white/60 leading-relaxed mb-9 max-w-xl">
                Climate action needs more leaders. When you connect your network to Humphrey's engagements, you earn meaningful rewards while helping organizations build better climate strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                {[
                  { num: 1, title: 'Share', text: "Submit a referral with your contact's info." },
                  { num: 2, title: 'They Book', text: "When they book an engagement, it's confirmed." },
                  { num: 3, title: 'You Earn', text: "Receive reward within 14 days of completion." }
                ].map(step => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center shrink-0">{step.num}</div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-sm text-white font-semibold">{step.title}</strong>
                      <span className="text-[13px] text-white/50 leading-tight">{step.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 min-w-[280px]">
              {REFERRAL_REWARDS.map((reward, i) => (
                <div key={i} className="bg-white/8 border border-white/12 rounded-xl p-4.5 flex items-center gap-4 transition-transform hover:translate-x-1">
                  <div className="text-3xl shrink-0">{reward.icon}</div>
                  <div>
                    <div className="font-semibold text-sm text-white tracking-tight">{reward.title}</div>
                    <div className="text-[12px] text-white/45">{reward.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start fade-in" ref={formRef}>
          <div className="bg-light-bg/50 border border-border-subtle rounded-3xl p-8 md:p-10">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-2">Submit a Referral</h3>
            <p className="text-sm text-slate mb-8">Fill in your contact's details and we'll take it from there.</p>
            
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Your Name *</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="Jane Osei" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Your Email *</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="jane@company.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Referee Name *</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="Contact's full name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Referee Email *</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="contact@org.com" />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Engagement Type</label>
                <select className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors appearance-none">
                  <option>Webinar / Masterclass</option>
                  <option>Conference / Keynote</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2 mt-4">
                <Button className="w-full justify-center py-4">Submit Referral →</Button>
                <p className="text-[11px] text-slate text-center mt-3.5 opacity-60">By submitting, you confirm you have permission to share your contact's details.</p>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-5">
            {REFERRAL_STATS.map((stat, i) => (
              <div key={i} className="bg-light-bg border border-border-subtle rounded-2xl p-7 transition-all hover:bg-white hover:shadow-xl hover:shadow-navy/5">
                <div className="font-playfair text-[40px] font-black text-teal leading-none mb-1">{stat.num}</div>
                <div className="font-bold text-sm text-navy mb-1">{stat.label}</div>
                <p className="text-[13px] text-slate leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
