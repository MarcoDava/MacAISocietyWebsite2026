// Shared Motion spring animation presets
// Used site-wide for consistent scroll-triggered and hero entrance animations.

export const fadeIn = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.2 },
} as const;

export const fadeInRight = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.2 },
} as const;

export const fadeInDown = {
  initial: { opacity: 0, y: -24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.2 },
} as const;

// For page hero sections (initial mount, more dramatic entry)
export const springHero = { type: 'spring', stiffness: 60, damping: 18 } as const;
