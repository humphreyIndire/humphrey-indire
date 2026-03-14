import React, { useState } from 'react';
import sessionImg from '../../assets/images/technical-session.jpeg';
import { BOOKING_CARDS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';

const Booking = () => {
    const headerRef = useFadeIn();
    const gridRef = useFadeIn();
    const calendarRef = useFadeIn();

    return (
        <section className="bg-primary py-24 px-6 md:px-20 lg:px-24 relative overflow-hidden" id="booking">
            <div className="absolute top-0 right-0 w-[600px] h-full opacity-20 pointer-events-none">
                <img
                    src={sessionImg}
                    alt=""
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-primary"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-14 fade-in" ref={headerRef}>
                    <span className="section-label text-accent">Work With Humphrey</span>
                    <h2 className="section-title text-white">Book a Session</h2>
                    <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
                        From keynote speeches to fractional executive leadership — structured engagements designed to move the needle on your climate and energy goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 fade-in" ref={gridRef}>
                    {BOOKING_CARDS.map((card, i) => (
                        <div
                            key={i}
                            className={`bg-white/5 border rounded-[20px] p-9 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${card.featured ? 'border-accent' : 'border-white/10 hover:border-accent'
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            {card.featured && !card.theme && (
                                <div className="absolute top-5 right-5 bg-accent text-primary text-[10px] font-bold tracking-[0.1em] py-1 px-2.5 rounded">POPULAR</div>
                            )}

                            <div className="text-4xl mb-5">{card.icon}</div>
                            <div className="font-dm-mono text-[10px] tracking-[0.15em] uppercase text-accent mb-2">{card.type}</div>
                            <h3 className="font-dm-sans text-2xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-sm text-white/55 leading-relaxed mb-6">{card.desc}</p>

                            <div className="flex gap-4 mb-7">
                                {card.meta.map((m, j) => (
                                    <div key={j} className="flex items-center gap-1.5 text-xs text-white/50">
                                        <span className="text-sm opacity-80">{m.icon}</span> {m.text}
                                    </div>
                                ))}
                            </div>

                            {/* <div className="font-dm-sans text-[28px] font-bold text-accent mb-2">
 {card.price} <small className="font-dm-sans text-[13px] text-white/40 font-normal">{card.priceSub}</small>
 </div> */}

                            <a
                                href={card.href}
                                className={`w-full block text-center py-3.5 rounded-lg text-sm font-semibold transition-all border bg-transparent border-white/20 text-white hover:bg-accent hover:border-accent`}
                            >
                                {card.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Booking;
