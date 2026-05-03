"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPinned, ShieldCheck, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";

const icons = {
  projects: Building2,
  cities: MapPinned,
  team: Users,
  warranty: ShieldCheck,
} as const;

export default function Numbers() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,oklch(0.535_0.118_30/0.12),transparent)]"
        aria-hidden
      />
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <Reveal from="scale" travel={0} className="block">
          <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-card via-card to-muted/25 p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] md:p-12 lg:p-14">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border/60">
              {siteData.numbers.map((stat) => (
                <StatBlock key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatBlock({
  stat,
}: {
  stat: (typeof siteData.numbers)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });
  const Icon = icons[stat.icon];

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center lg:px-6 lg:py-1"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06] text-brand ring-1 ring-primary/10 shadow-inner">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="text-[2.35rem] font-bold leading-none tracking-tight text-foreground sm:text-5xl md:text-[2.75rem]">
        {"countEnd" in stat && typeof stat.countEnd === "number" ? (
          inView ? (
            <CountUp
              end={stat.countEnd}
              duration={2.35}
              suffix={stat.countSuffix ?? ""}
              useEasing
            />
          ) : (
            <span className="tabular-nums text-muted-foreground/40">
              0{stat.countSuffix}
            </span>
          )
        ) : (
          <span className="tabular-nums">{stat.value}</span>
        )}
      </div>
      <p className="mt-3 max-w-[14rem] text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}
