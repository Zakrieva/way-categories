// Предзагрузка критических ресурсов
export const preloadCriticalResources = () => {
  // Предзагружаем основные изображения
  const criticalImages = [
    '/src/assets/img/home/img1.jpg',
    '/src/assets/img/home/img2.png',
    '/src/assets/img/about.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Предзагружаем шрифты
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/ttf';
  fontLink.href = '/src/assets/fonts/GolosText-Regular.ttf';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

// Оптимизация для мобильных устройств
export const optimizeForMobile = () => {
  // Отключаем hover эффекты на мобильных
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }

  // Предзагружаем viewport изображения
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 768) {
    // Для мобильных загружаем меньшие изображения
    const mobileImages = document.querySelectorAll('img[data-mobile-src]');
    mobileImages.forEach(img => {
      img.src = img.dataset.mobileSrc;
    });
  }
};

// Инициализация оптимизаций
export const initPerformanceOptimizations = () => {
  // Запускаем только после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeForMobile();
    });
  } else {
    preloadCriticalResources();
    optimizeForMobile();
  }
};
