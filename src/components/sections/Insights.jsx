import React, { useState } from 'react';
import { INSIGHTS } from '../../constants';
import { useFadeIn } from '../../hooks/useFadeIn';
import technicalSessionImg from '../../assets/images/technical-session.jpeg';
import ProgressiveImage from '../ui/ProgressiveImage';

const Insights = () => {
 const headerRef = useFadeIn();
 const gridRef = useFadeIn();
 const [showAll, setShowAll] = useState(false);

 const displayedArticles = showAll ? INSIGHTS.list : INSIGHTS.list.slice(0, 4);

 return (
 <section className="bg-white py-24 px-6 md:px-20 lg:px-24" id="insights">
 <div className="max-w-7xl mx-auto">
 <div className="mb-14 fade-in" ref={headerRef}>
 <span className="section-label">Insights</span>
 <h2 className="section-title">Thought Leadership</h2>
 <p className="section-desc">Deep-dive perspectives on climate finance, energy transition, and the evolution of emerging markets.</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 fade-in" ref={gridRef}>
 {/* Featured Article */}
 <div className="border border-border-subtle rounded-[20px] overflow-hidden group cursor-pointer hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 h-fit">
 <div className="w-full h-[320px] relative overflow-hidden">
 <ProgressiveImage 
 src={technicalSessionImg} 
 alt="Technical Session"
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <span className="absolute bottom-5 left-6 bg-accent text-primary text-[11px] font-bold tracking-[0.1em] uppercase py-1.5 px-3.5 rounded shadow-lg z-10">
 {INSIGHTS.featured.tag}
 </span>
 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
 </div>
 <div className="p-8 md:p-12">
 <div className="font-dm-mono text-[11px] text-accent mb-4 uppercase tracking-[0.2em] font-semibold">
 {INSIGHTS.featured.date} • {INSIGHTS.featured.readTime} read
 </div>
 <h3 className="font-dm-sans text-2xl md:text-3xl font-bold text-primary mb-5 leading-tight group-hover:text-accent transition-colors">
 {INSIGHTS.featured.title}
 </h3>
 <p className="text-[15px] text-text-muted leading-relaxed mb-8">
 {INSIGHTS.featured.excerpt}
 </p>
 <a 
 href={INSIGHTS.featured.link} 
 target="_blank" 
 rel="noopener noreferrer" 
 className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all group/link"
 >
 Read Full Article 
 <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
 </a>
 </div>
 </div>

 {/* Article List */}
 <div className="flex flex-col gap-6">
 <div className="flex flex-col gap-4">
 {displayedArticles.map((item, i) => (
 <a 
 key={i} 
 href={item.link}
 target="_blank"
 rel="noopener noreferrer"
 className="border border-border-subtle rounded-2xl p-6 cursor-pointer hover:border-accent hover:translate-x-1 hover:bg-bg-supporting/50 transition-all group block shadow-sm hover:shadow-md"
 >
 <div className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mb-2">{item.tag}</div>
 <h4 className="font-bold text-[16px] text-primary mb-2.5 group-hover:text-accent transition-colors leading-snug">{item.title}</h4>
 <div className="text-[12px] text-text-muted font-medium">{item.date} • {item.readTime} read</div>
 </a>
 ))}
 </div>
 
 <div className="mt-4 flex flex-col gap-4">
 <button 
 onClick={() => setShowAll(!showAll)}
 className="w-full py-4 border border-primary/10 rounded-xl text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
 >
 {showAll ? 'Show Fewer Articles' : `View More Articles (${INSIGHTS.list.length - 4}+)`}
 <span className={`transform transition-transform ${showAll ? 'rotate-180' : ''}`}>↓</span>
 </button>
 
 <a 
 href="https://www.linkedin.com/in/humphrey-indire/recent-activity/all/" 
 target="_blank" 
 rel="noopener noreferrer"
 className="w-full py-4 bg-bg-supporting/50 border border-transparent rounded-xl text-xs font-semibold text-text-muted hover:text-accent text-center transition-all"
 >
 View all activity on LinkedIn
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default Insights;
