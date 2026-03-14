import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  quote: string;
  name: string;
}

interface TestimonialCarouselProps {
  items: Testimonial[];
  intervalMs?: number;
}

export default function TestimonialCarousel({
  items,
  intervalMs = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const count = items.length;

  const advance = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  // Auto-rotate timer
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(advance, intervalMs);
    return () => clearInterval(id);
  }, [isPaused, intervalMs, advance]);

  const goTo = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Compute indices for the visible cards (wrapping)
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      scale: 0.85,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      scale: 0.85,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel track */}
      <div className="relative flex items-center justify-center overflow-hidden py-4 min-h-[260px]">
        {/* Left peek card – hidden on mobile */}
        <div className="hidden md:block w-1/4 flex-shrink-0 pointer-events-none select-none">
          <div
            className="bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/20 opacity-40 scale-[0.85] blur-[1px] transition-all duration-500"
          >
            <p className="text-[#F0F4F4] italic">"{items[prevIndex].quote}"</p>
            <cite className="mt-4 block text-[#3DDFF5] not-italic">— {items[prevIndex].name}</cite>
          </div>
        </div>

        {/* Center card – animated */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0 bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/40 shadow-[0_0_30px_rgba(28,177,227,0.15)]"
            >
              <p className="text-[#F0F4F4] italic text-lg leading-relaxed">
                "{items[activeIndex].quote}"
              </p>
              <cite className="mt-6 block text-[#3DDFF5] not-italic font-medium">
                — {items[activeIndex].name}
              </cite>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Right peek card – hidden on mobile */}
        <div className="hidden md:block w-1/4 flex-shrink-0 pointer-events-none select-none">
          <div
            className="bg-[#0f0066]/60 rounded-xl p-8 border border-[#1CB1E3]/20 opacity-40 scale-[0.85] blur-[1px] transition-all duration-500"
          >
            <p className="text-[#F0F4F4] italic">"{items[nextIndex].quote}"</p>
            <cite className="mt-4 block text-[#3DDFF5] not-italic">— {items[nextIndex].name}</cite>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'bg-[#3DDFF5] scale-125 shadow-[0_0_8px_rgba(61,223,245,0.6)]'
                : 'bg-[#1CB1E3]/30 hover:bg-[#1CB1E3]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
