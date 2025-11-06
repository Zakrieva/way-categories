import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageRef, inView] = useIntersectionObserver({
    threshold: 0,
    rootMargin: '50px'
  });

  // Проверяем поддержку WebP
  const [webpSupported, setWebpSupported] = useState(false);

  useEffect(() => {
    // Проверяем поддержку WebP
    const webp = new Image();
    webp.onload = webp.onerror = () => {
      setWebpSupported(webp.height === 2);
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }, []);

  useEffect(() => {
    if (inView && !isLoaded) {
      // Создаем WebP версию если поддерживается
      const optimizedSrc = webpSupported && src.endsWith('.jpg') 
        ? src.replace('.jpg', '.webp') 
        : src;
      
      const img = new Image();
      img.onload = () => {
        setImageSrc(optimizedSrc);
        setIsLoaded(true);
      };
      img.onerror = () => {
        // Fallback на оригинальный формат
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.src = optimizedSrc;
    }
  }, [inView, src, webpSupported, isLoaded]);

  return (
    <picture>
      {webpSupported && src.endsWith('.jpg') && (
        <source 
          srcSet={src.replace('.jpg', '.webp')} 
          type="image/webp"
          sizes={sizes}
        />
      )}
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        loading="lazy"
        sizes={sizes}
        {...props}
      />
    </picture>
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

export default OptimizedImage;
