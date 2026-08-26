export const desktopAuthItemVariants = [
  {
    x: [0, 40, 80, 40, 0],
    y: [-20, 180, 400, 180, -20],
  },
  {
    x: [0, -30, -60, -30, 0],
    y: [0, 200, 450, 200, 0],
  },
  {
    x: [0, 50, 20, 50, 0],
    y: [40, 220, 500, 220, 40],
  },
  {
    x: [0, -40, -80, -40, 0],
    y: [10, 200, 430, 200, 10],
  },
  {
    x: [0, 30, -20, 30, 0],
    y: [-30, 180, 450, 180, -30],
  },
];

export const mobileAuthItemVariants = [
  {
    x: [0, 20, 40, 20, 0],
    y: [-10, 45, 110, 45, -10],
  },
  {
    x: [0, -15, -30, -15, 0],
    y: [0, 55, 125, 55, 0],
  },
  {
    x: [0, 25, 10, 25, 0],
    y: [20, 70, 140, 70, 20],
  },
  {
    x: [0, -20, -40, -20, 0],
    y: [5, 60, 120, 60, 5],
  },
  {
    x: [0, 15, -10, 15, 0],
    y: [-15, 50, 130, 50, -15],
  },
];
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};
export const authTransitionVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction * 300,
    y: 60,
    scale: 0.8,
  }),

  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction * -300,
    y: -60,
    scale: 0.8,
  }),
};
export const authTransition = {
  duration: 0.7,
  ease: "easeInOut",
};