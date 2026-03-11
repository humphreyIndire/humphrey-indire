import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import Button from '../ui/Button';

const Contact = () => {
  const headerRef = useFadeIn();
  const infoRef = useFadeIn();
  const formRef = useFadeIn();

  return (
    <section className="bg-cream py-24 px-6 md:px-20 lg:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Start a Conversation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <div className="fade-in" ref={infoRef}>
            <div className="w-full aspect-[3/4] bg-navy rounded-[20px] mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-white/20">
                <div className="text-5xl mb-2 opacity-20">👤</div>
                <p className="text-[13px]">Replace with<br />Eng. Indire's photo</p>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {[
                { icon: '✉️', title: 'humphrey@indire.com', sub: 'Responds within 48 hours' },
                { icon: '💼', title: 'LinkedIn Profile', sub: 'https://www.linkedin.com/in/enghumphreyindire/' },
                { icon: '📍', title: 'Nairobi, Kenya', sub: 'EAT — UTC+3 · Global travel' },
                { icon: '💬', title: 'WhatsApp', sub: 'For urgent enquiries only' }
              ].map((link, i) => (
                link.title !== "LinkedIn Profile" ?
                  (<span
                    key={i}
                    className="bg-white border border-border-subtle rounded-xl p-4.5 flex items-center gap-4 group transition-all hover:border-teal hover:translate-x-1"
                  >
                    <div className="text-xl w-10 text-center select-none group-hover:scale-110 transition-transform">{link.icon}</div>
                    <div>
                      <div className="font-semibold text-sm text-navy mb-0.5">{link.title}</div>
                      <div className="text-xs text-slate">{link.sub}</div>
                    </div>
                  </span>)
                  :
                  (<a
                    key={i}
                    href={link.sub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-border-subtle rounded-xl p-4.5 flex items-center gap-4 group transition-all hover:border-teal hover:translate-x-1"
                  >
                    <div className="text-xl w-10 text-center select-none group-hover:scale-110 transition-transform">{link.icon}</div>
                    <div>
                      <div className="font-semibold text-sm text-navy mb-0.5">{link.title}</div>
                      <div className="text-xs text-slate">{link.sub}</div>
                    </div>
                  </a>)
              ))}
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-[20px] p-8 md:p-12 fade-in" ref={formRef}>
            <h3 className="font-playfair text-[26px] font-bold text-navy mb-2">Send a Message</h3>
            <p className="text-[15px] text-slate mb-10 leading-relaxed">
              I'm always open to discussing new projects, advisory opportunities, or ideas to advance climate finance across Africa.
            </p>

            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-navy">First Name *</label>
                  <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="Enter first name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-navy">Last Name *</label>
                  <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="Enter last name" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Email *</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="example@domain.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Organisation</label>
                <input className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors" placeholder="Company or institution" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Subject *</label>
                <select className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors appearance-none cursor-pointer">
                  <option>Booking enquiry</option>
                  <option>Advisory / Consulting</option>
                  <option>Speaking / Conference</option>
                  <option>Partnership opportunity</option>
                  <option>Media / Press</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-navy">Message *</label>
                <textarea className="w-full bg-white border border-border-subtle rounded-lg py-3 px-4 text-sm focus:border-teal outline-none transition-colors min-h-[140px] resize-y" placeholder="Type your message here..."></textarea>
              </div>
              <Button className="w-full justify-center py-4 mt-2">Send Message →</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
