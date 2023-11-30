export const fadeInUpAnimation = {
    initial: { opacity: 0, scale: 0.8, y: '-100vh' },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, y: '-100vh' },
    transition: { duration: 1, type: 'spring', damping: 10, stiffness: 80 },
  };