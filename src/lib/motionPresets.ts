import type { Transition, UseInViewOptions } from "framer-motion";

/** Yumuşak duruş — “premium” his */
export const EASE_LUX = [0.22, 1, 0.36, 1] as const;
export const EASE_SNAP = [0.16, 1, 0.3, 1] as const;

export const VIEW_PREMIUM: UseInViewOptions = {
  once: true,
  amount: 0.22,
  margin: "-14% 0px -10% 0px",
};

export const VIEW_SOFT: UseInViewOptions = {
  once: true,
  amount: 0.18,
  margin: "-8% 0px",
};

export function txLux(delay = 0, duration = 0.88): Transition {
  return { duration, delay, ease: EASE_LUX };
}

export function txMed(delay = 0, duration = 0.68): Transition {
  return { duration, delay, ease: EASE_LUX };
}

export function txSpring(delay = 0): Transition {
  return {
    type: "spring",
    stiffness: 120,
    damping: 22,
    mass: 0.9,
    delay,
  };
}
