"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardList,
  DraftingCompass,
  HardHat,
  Check,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

const stepIcons = [ClipboardList, DraftingCompass, HardHat, BadgeCheck] as const;

const cardEntrance = [
  { initial: { opacity: 0, x: -52, y: 16 } as const, in: { opacity: 1, x: 0, y: 0 } as const },
  { initial: { opacity: 0, y: 56 } as const, in: { opacity: 1, y: 0 } as const },
  { initial: { opacity: 0, x: 52, y: 16 } as const, in: { opacity: 1, x: 0, y: 0 } as const },
  { initial: { opacity: 0, y: 48, scale: 0.96 } as const, in: { opacity: 1, y: 0, scale: 1 } as const },
] as const;

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="surec"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-muted/35 via-background to-background py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <Reveal
          from="right"
          travel={48}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        >
          <div className="max-w-2xl lg:max-w-none lg:flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Proje süreci
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Nasıl Çalışıyoruz?
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:max-w-lg lg:text-right lg:text-lg">
            Şeffaf, ölçülebilir ve güvenli bir akışla ilerliyoruz. Her aşamada ne
            yapılacağını, ne zaman biteceğini ve garanti kapsamını net şekilde
            paylaşıyoruz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {siteData.process.map((step, i) => {
            const Icon = stepIcons[i] ?? ClipboardList;
            const n = String(i + 1).padStart(2, "0");
            const ent = cardEntrance[i % cardEntrance.length];
            const initial = reduce ? { opacity: 0 } : ent.initial;
            const whileInView = reduce ? { opacity: 1 } : ent.in;

            return (
              <motion.article
                key={step.title}
                initial={initial}
                whileInView={whileInView}
                viewport={VIEW_PREMIUM}
                transition={txLux(i * 0.07, 0.84)}
                className="group relative flex min-h-full flex-col rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm ring-1 ring-black/[0.04] backdrop-blur-sm transition hover:border-brand/30 hover:shadow-md md:p-7"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand/0 via-brand/70 to-brand/0 opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />

                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/12 text-brand ring-1 ring-brand/15">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-3xl font-black leading-none text-brand/25 transition group-hover:text-brand/40">
                    {n}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight md:text-[1.35rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {step.text}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/60 pt-5">
                  {step.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-foreground/90"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
