export const fadeInUpAnimation = {
    initial: { opacity: 0, scale: 0.8, y: '-100vh' },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, y: '-100vh' },
    transition: { duration: 1, type: 'spring', damping: 10, stiffness: 80, delay: 0.2 },
  };

export const slideInAnimation = {
    initial: { x: '100vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, type: 'spring', damping: 12, stiffness: 80, delay: 0.5 },
  };