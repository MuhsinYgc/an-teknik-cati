"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

const tileMotion = [
  { initial: { opacity: 0, y: 40, scale: 0.97 } as const, in: { opacity: 1, y: 0, scale: 1 } as const },
  { initial: { opacity: 0, x: -36, y: 24 } as const, in: { opacity: 1, x: 0, y: 0 } as const },
  { initial: { opacity: 0, x: 36, y: 24 } as const, in: { opacity: 1, x: 0, y: 0 } as const },
  { initial: { opacity: 0, y: 52 } as const, in: { opacity: 1, y: 0 } as const },
  { initial: { opacity: 0, x: -32, scale: 0.96 } as const, in: { opacity: 1, x: 0, scale: 1 } as const },
  { initial: { opacity: 0, x: 32, scale: 0.96 } as const, in: { opacity: 1, x: 0, scale: 1 } as const },
] as const;

export default function Portfolio() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projeler"
      className="scroll-mt-24 relative overflow-hidden py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/25 via-background to-muted/20"
        aria-hidden
      />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <Reveal
          from="up"
          travel={32}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Referanslarımız
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            {siteData.portfolio.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteData.portfolio.desc}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {siteData.portfolio.items.map((item, i) => {
            const t = tileMotion[i % tileMotion.length];
            const initial = reduce ? { opacity: 0 } : t.initial;
            const whileInView = reduce ? { opacity: 1 } : t.in;

            return (
              <motion.article
                key={item.src}
                initial={initial}
                whileInView={whileInView}
                viewport={VIEW_PREMIUM}
                transition={txLux(i * 0.06, 0.78)}
                className="group relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.06] transition-shadow duration-500 group-hover:shadow-[0_28px_60px_-18px_rgba(15,23,42,0.45)]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />
                  <div className="absolute left-4 top-4 md:left-5 md:top-5">
                    <span className="inline-flex items-center rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
                    <h3 className="max-w-[85%] text-left text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
                      {item.title}
                    </h3>
                    <span className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
