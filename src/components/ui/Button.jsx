import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center gap-2 rounded-lg transition-all cursor-pointer';
  
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    navy: 'btn-navy',
    gold: 'btn-gold',
    merch: 'merch-btn',
    booking: 'booking-cta',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || ''} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
