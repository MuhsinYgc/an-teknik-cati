"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

export type RevealDirection =
  | "left"
  | "right"
  | "up"
  | "down"
  | "scale"
  | "pop";

export type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  from: RevealDirection;
  delay?: number;
  /** Piksel cinsinden giriş mesafesi */
  travel?: number;
  /** Sadece büyük bloklarda; mobilde GPU yükü için varsayılan kapalı */
  blur?: boolean;
  viewport?: typeof VIEW_PREMIUM;
};

export default function Reveal({
  from,
  delay = 0,
  travel = 56,
  blur = false,
  viewport = VIEW_PREMIUM,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const duration = reduce ? 0.18 : from === "pop" || from === "scale" ? 0.78 : 0.9;

  const initial = reduce
    ? { opacity: 0 }
    : from === "left"
      ? { opacity: 0, x: -travel, ...(blur ? { filter: "blur(8px)" } : {}) }
      : from === "right"
        ? { opacity: 0, x: travel, ...(blur ? { filter: "blur(8px)" } : {}) }
        : from === "up"
          ? { opacity: 0, y: -travel }
          : from === "down"
            ? { opacity: 0, y: travel }
            : from === "scale"
              ? { opacity: 0, scale: 0.92 }
              : { opacity: 0, scale: 0.9, y: Math.min(40, travel * 0.6) };

  const whileInView = reduce
    ? { opacity: 1 }
    : {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        ...(blur ? { filter: "blur(0px)" } : {}),
      };

  const transition = reduce
    ? { duration: 0.2, delay }
    : from === "pop"
      ? {
          type: "spring" as const,
          stiffness: 118,
          damping: 20,
          mass: 0.88,
          delay,
        }
      : txLux(delay, duration);

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
