import { DIGITAL_TEMPLATES, PROFESSIONAL_MERCHANDISE } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="bg-white/5 border border-white/10 rounded-[18px] overflow-hidden group hover:border-accent transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square bg-white/[0.04] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                )}
            </div>
            <div className="p-5">
                <h3 className="font-semibold text-sm text-white mb-1 leading-tight h-10 line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between mt-4">
                    <div className="font-dm-sans text-lg font-bold text-accent">
                        <span className="text-[10px] text-white/40 font-normal mr-1">KES</span>
                        {item.price}
                    </div>
                    {/* <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <ShoppingCart size={14} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

const Merchandise = () => {
    const headerRef = useFadeIn();
    const digitalRef = useFadeIn();
    const merchRef = useFadeIn();
    const bundleRef = useFadeIn();

    return (
        <section className="bg-primary py-24 px-6 md:px-20 lg:px-24 relative overflow-hidden" id="merch">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(201,168,76,0.08)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 fade-in" ref={headerRef}>
                    <span className="section-label text-accent">The HI Collection</span>
                    <h2 className="section-title text-white">Merchandise & Resources</h2>
                    <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
                        Professional resources and branded gear curated for climate leaders, engineers, and sustainability changemakers.
                    </p>
                </div>

                {/* Category A: Digital Templates */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-xl font-bold text-white whitespace-nowrap">Digital Professional Templates</h3>
                        <div className="h-[1px] bg-white/10 w-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 fade-in" ref={digitalRef}>
                        {DIGITAL_TEMPLATES.map((item, i) => (
                            <ProductCard key={i} item={item} />
                        ))}
                    </div>

                    {/* Bundle Offer */}
                    <div className="mt-10 p-6 bg-accent/5 border border-accent/20 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-6 fade-in" ref={bundleRef}>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Launch Bundle Deal</h4>
                            <p className="text-white/50 text-sm">Select any 3 templates and save ~20% on your professional toolkit.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <span className="block text-[10px] text-accent uppercase tracking-wider font-bold">Bundle Price</span>
                                <div className="text-2xl font-bold text-white">
                                    <span className="text-xs text-white/40 font-normal mr-1">KES</span>6,500
                                </div>
                            </div>
                            <a href="#contact" className="bg-accent text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors inline-block text-center">
                                Get Bundle
                            </a>
                        </div>
                    </div>
                </div>

                {/* Category B: Professional Merchandise */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-xl font-bold text-white whitespace-nowrap">Professional Merchandise</h3>
                        <div className="h-[1px] bg-white/10 w-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 fade-in" ref={merchRef}>
                        {PROFESSIONAL_MERCHANDISE.map((item, i) => (
                            <ProductCard key={i} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Merchandise;
