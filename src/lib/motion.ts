export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

export const slideUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const slideDown = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const staggerChildren = {
  transition: {
    staggerChildren: 0.08
  }
};

export const easeOutQuart = [0.22, 1, 0.36, 1];
export const easeInOut = [0.65, 0, 0.35, 1];