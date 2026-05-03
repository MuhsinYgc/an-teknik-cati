"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { siteData } from "@/data/siteData";

export default function ExperienceStat() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="py-12 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-brand/10 px-8 py-12 text-center md:px-16 md:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Rakamlarla güven
          </p>
          <div className="mt-4 flex items-baseline justify-center gap-1 text-6xl font-black tracking-tight text-foreground md:text-7xl">
            {inView ? (
              <CountUp
                end={siteData.experience.value}
                duration={2.2}
                separator=""
                suffix={siteData.experience.suffix}
              />
            ) : (
              <span>0{siteData.experience.suffix}</span>
            )}
          </div>
          <p className="mt-3 text-base font-semibold text-muted-foreground md:text-lg">
            {siteData.experience.label}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
