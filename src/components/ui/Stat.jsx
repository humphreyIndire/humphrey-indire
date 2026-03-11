import React from 'react';

const Stat = ({ num, label, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="font-playfair text-[28px] font-bold text-gold">{num}</div>
      <div className="text-[11px] text-white/50 uppercase tracking-[0.1em] mt-0.5">{label}</div>
    </div>
  );
};

export default Stat;
