"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "start" | "none";
}

/**
 * Scroll-triggered reveal: fades + slides children into view once.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = prefersReducedMotion
    ? {}
    : direction === "up"
      ? { y: 24 }
      : direction === "down"
        ? { y: -24 }
        : direction === "start"
          ? { x: -24 }
          : {};

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
