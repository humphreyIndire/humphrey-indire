import React from 'react';

const Card = ({ children, className = '', ...props }) => {
 return (
 <div className={`rounded-xl border border-border-subtle bg-white p-6 shadow-sm ${className}`} {...props}>
 {children}
 </div>
 );
};

export default Card;
