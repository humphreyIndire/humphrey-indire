import React from 'react';
import { MERCHANDISE } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import Button from '../ui/Button';

const Merchandise = () => {
    const headerRef = useFadeIn();
    const gridRef = useFadeIn();
    const bundlesRef = useFadeIn();
    const footerRef = useFadeIn();

    return (
        <section className="bg-primary py-24 px-6 md:px-20 lg:px-24 relative overflow-hidden" id="merch">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(201,168,76,0.08)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-14 fade-in" ref={headerRef}>
                    <span className="section-label text-accent">The HI Collection</span>
                    <h2 className="section-title text-white">Merchandise & Resources</h2>
                    <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
                        Carry the mission forward. From branded leadership gear to exclusive publications and digital resources — curated for climate professionals and changemakers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 fade-in" ref={gridRef}>
                    {MERCHANDISE.map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-[18px] overflow-hidden group hover:border-accent transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-square bg-white/[0.04] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-sm text-white mb-1">{item.name}</h3>
                                <p className="text-[12px] text-white/40 mb-3.5 leading-tight">{item.tagline}</p>
                                <div className="font-dm-sans text-xl font-bold text-accent mb-3">{item.price}</div>
                                {/* <Button variant="merch" className="w-full py-2.5 text-xs">
 {item.cta}
 </Button> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 fade-in" ref={bundlesRef}>
 <div className="bg-white/5 border border-white/10 rounded-[18px] p-1 flex items-center gap-1 hover:border-accent transition-all group">
 <div className="w-32 h-32 bg-white/[0.04] flex items-center justify-center text-5xl rounded-[14px]">🎧</div>
 <div className="p-4 flex-1">
 <h3 className="font-semibold text-sm text-white mb-1">Annual Masterclass Bundle</h3>
 <p className="text-[11px] text-white/40 mb-3 leading-tight">All 12 monthly webinars + recordings, Q&A access, and exclusive newsletter.</p>
 <div className="flex justify-between items-center">
 <div className="font-dm-sans text-lg font-bold text-accent">$299 <span className="font-dm-sans text-xs text-white/35 font-normal">/ year</span></div>
 <button className="text-xs font-bold text-white hover:text-accent transition-colors">Subscribe →</button>
 </div>
 </div>
 </div>

 <div className="bg-white/5 border border-white/10 rounded-[18px] p-1 flex items-center gap-1 hover:border-accent transition-all group">
 <div className="w-32 h-32 bg-white/[0.04] flex items-center justify-center text-5xl rounded-[14px]">📊</div>
 <div className="p-4 flex-1">
 <h3 className="font-semibold text-sm text-white mb-1">Carbon Project Toolkit</h3>
 <p className="text-[11px] text-white/40 mb-3 leading-tight">Financial models, VCS/Gold Standard templates, community consultation frameworks.</p>
 <div className="flex justify-between items-center">
 <div className="font-dm-sans text-lg font-bold text-accent">$149</div>
 <button className="text-xs font-bold text-white hover:text-accent transition-colors">Buy Now →</button>
 </div>
 </div>
 </div>
 </div> */}

                {/* <div className="text-center text-[13px] text-white/30 fade-in" ref={footerRef}>
                    🚚 Free shipping on orders over <span className="text-accent">$100</span> · Worldwide delivery · Digital downloads available instantly
                </div> */}
            </div>
        </section>
    );
};

export default Merchandise;
