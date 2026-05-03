"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";
import { scrollToSection } from "@/lib/scrollTo";

const entrance = [
  { initial: { opacity: 0, x: -64, y: 22 } as const, animate: { opacity: 1, x: 0, y: 0 } as const },
  { initial: { opacity: 0, y: 72, scale: 0.94 } as const, animate: { opacity: 1, y: 0, scale: 1 } as const },
  { initial: { opacity: 0, x: 64, y: -18 } as const, animate: { opacity: 1, x: 0, y: 0 } as const },
] as const;

export default function FeatureSplits() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-muted/15 py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.featureSplits.map((block, idx) => {
            const p = entrance[idx % 3];
            const initial = reduce ? { opacity: 0 } : p.initial;
            const whileInView = reduce ? { opacity: 1 } : p.animate;

            return (
              <motion.article
                key={block.id}
                id={block.id}
                initial={initial}
                whileInView={whileInView}
                viewport={VIEW_PREMIUM}
                transition={txLux(idx * 0.09, 0.82)}
                className="hover-reveal-card group relative min-h-[min(90vh,640px)] scroll-mt-24 overflow-hidden rounded-2xl shadow-xl md:aspect-[3/4] md:min-h-0"
              >
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/75 to-transparent md:h-[50%]" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white sm:p-6">
                  <div className="rounded-xl bg-black/35 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 backdrop-blur-[2px] sm:px-3.5 sm:py-3 md:bg-black/25 md:backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-brand drop-shadow-md sm:text-xs">
                      {block.eyebrow}
                    </p>
                    <h3 className="mt-0.5 text-balance text-xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] sm:text-2xl md:text-2xl">
                      {block.title}
                    </h3>

                    <div className="reveal-panel mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                      <p className="text-[13px] leading-snug text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] sm:text-sm sm:leading-relaxed">
                        {block.desc}
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {block.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-[13px] text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] sm:text-sm"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-md shadow-black/30">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        size="sm"
                        className="mt-1 w-full bg-brand text-brand-foreground shadow-md shadow-black/25 hover:bg-brand/90 sm:mt-0 sm:w-auto"
                      >
                      <Link
                        href="#iletisim"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection("iletisim");
                        }}
                      >
                        Daha Fazla Detay
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    </div>
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
