"use client";
/**
 * A parallax hero section that displays past MacHacks cards
 * in three rows with scroll-driven animations. Cards move in alternating
 * directions as the user scrolls, creating a depth effect.
 */
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  // Split products into three rows of 5 cards each
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  // Track scroll progress from top to bottom of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Spring config for smooth, bouncy parallax motion
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Horizontal movement: rows 1 & 3 move right, row 2 moves left
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  // 3D perspective transforms (active during first 20% of scroll)
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Fixed header - stays visible above parallax content */}
      <div className="opacity-100 relative z-10">
        <Header />
      </div>

      {/* Parallax card container - applies 3D rotation & fade based on scroll */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-0"
      >
        {/* Row 1: moves right on scroll */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* Row 2: moves left on scroll */}
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* Row 3: moves right on scroll */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

/** Header section with title and description for the Past MacHacks parallax hero */
export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-0 pb-6 md:pb-8 px-4 w-full left-0 top-0">
      <h1 className="font-heading text-2xl md:text-7xl font-bold text-[#F0F4F4]">
        Past MacHacks
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-[#A7C2C3]">
        Years of innovation, collaboration, and community. Browse our past hackathons.
      </p>
    </div>
  );
};

/** Individual card that displays a hackathon/product with thumbnail, link, and parallax translation */
export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate, // Scroll-driven horizontal parallax
      }}
      whileHover={{
        y: -20, // Lift on hover
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
