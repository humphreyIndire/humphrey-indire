import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ 
  src, 
  alt, 
  className, 
  fetchPriority, 
  placeholderSrc,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurry placeholder layer or starting state */}
      <img
        {...props}
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
          isLoaded ? 'blur-0 scale-100 opacity-100' : 'blur-2xl scale-110 opacity-70'
        }`}
        fetchPriority={fetchPriority}
      />
      
      {/* Optional: Add a subtle loading shimmer or overlay if needed, 
          but for now, the blur effect is what was requested */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-navy/5 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

export default ProgressiveImage;
