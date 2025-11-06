import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, inView] = useIntersectionObserver({
    threshold: 0,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (inView) {
      setImageSrc(src);
    }
  }, [inView, src]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

// Хук для Intersection Observer
function useIntersectionObserver(options) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, inView];
}

export default LazyImage;
