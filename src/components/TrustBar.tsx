"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

export default function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW_PREMIUM}
      transition={txLux(0, 0.65)}
      className="overflow-hidden border-y bg-muted/50 py-8"
    >
      <div className="partner-scroll flex w-max gap-12 md:gap-16">
        {siteData.trustBar.map((company) => (
          <span
            key={company}
            className="shrink-0 text-sm font-medium text-muted-foreground md:text-base"
          >
            {company}
          </span>
        ))}
        {siteData.trustBar.map((company) => (
          <span
            key={`${company}-dup`}
            className="shrink-0 text-sm font-medium text-muted-foreground md:text-base"
            aria-hidden
          >
            {company}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
