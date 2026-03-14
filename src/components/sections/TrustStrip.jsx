import React from 'react';
import { TRUST_LOGOS } from '../../constants';

const TrustStrip = () => {
 return (
 <div className="bg-bg-supporting py-7 px-6 md:px-20 border-b border-border-subtle overflow-hidden">
 <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
 <div className="font-dm-mono text-[11px] tracking-[0.15em] uppercase text-text-muted whitespace-nowrap">Associated with</div>
 <div className="flex flex-wrap justify-center gap-10 items-center">
 {TRUST_LOGOS.map((logo) => (
 <div key={logo} className="font-bold text-[13px] text-primary opacity-45 tracking-tight uppercase hover:opacity-80 transition-opacity">
 {logo}
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};

export default TrustStrip;
