"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    alt: string;
    title?: string;
    event?: string;
    link?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_60%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => {
          const isPriority = idx < 2; // First 2 images load immediately
          return (
            <li
              key={idx}
              className="group relative h-[200px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-transparent flex items-center justify-center md:w-[420px] cursor-pointer"
            >
              <a
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className="relative block h-full w-full"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain p-4 transition duration-300 group-hover:grayscale group-hover:brightness-75"
                  loading={isPriority ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={isPriority ? "high" : undefined}
                />
                {(item.title || item.event) && (
                  <div className="pointer-events-none absolute inset-0">
                    {item.title && (
                      <div className="absolute top-2 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                        {item.title}
                      </div>
                    )}
                    {item.event && (
                      <div className="absolute top-2 right-3 rounded-md bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                        {item.event}
                      </div>
                    )}
                  </div>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
