"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { scrollToSection } from "@/lib/scrollTo";

export default function IntroSections() {
  const s = siteData.intro.showcase;
  const exp = siteData.experience;

  return (
    <section
      id="kurumsal"
      className="scroll-mt-24 border-y bg-gradient-to-b from-background via-muted/20 to-background py-16 md:py-24"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Sol: metin + ok maddeler + CTA şeridi */}
          <Reveal from="right" travel={64} className="flex flex-col gap-6 lg:col-span-4">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.15rem] lg:leading-tight">
                {s.leftHeadline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {s.leftLead}
              </p>
            </div>

            <ul className="flex flex-col gap-3.5">
              {s.points.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-[15px]">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand ring-1 ring-brand/20">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#iletisim"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("iletisim");
              }}
              className="group mt-2 flex items-center justify-between gap-4 rounded-2xl rounded-r-full border border-white/10 bg-slate-900 py-4 pl-6 pr-2 text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/20 transition hover:border-brand/40 hover:bg-slate-950 hover:shadow-[0_24px_56px_-18px_rgba(0,0,0,0.55)] md:py-5 md:pl-7"
            >
              <span className="min-w-0 text-left text-sm font-semibold leading-snug tracking-tight text-white/95 md:text-[0.95rem]">
                {s.ctaStripTitle}
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-md shadow-brand/25 transition group-hover:scale-105 group-hover:bg-brand/90">
                <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
            </Link>
          </Reveal>

          {/* Orta: büyük görsel + tecrübe rozeti */}
          <Reveal
            from="left"
            travel={72}
            delay={0.06}
            blur
            className="lg:col-span-4"
          >
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10 lg:mx-0 lg:max-w-none">
              <Image
                src={s.images.center}
                alt="Çatı ve şantiye planlama"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 33vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/20" />
              <div className="absolute left-4 top-4 md:left-5 md:top-5">
                <div className="rounded-full bg-brand px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-brand-foreground shadow-lg ring-2 ring-brand-foreground/20 md:px-5 md:text-sm">
                  <span className="text-base font-black md:text-lg">
                    {exp.value}
                    {exp.suffix}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-semibold normal-case tracking-normal text-brand-foreground/95 md:text-xs">
                    {exp.label}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sağ: küçük görsel + başlık + metin */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            <Reveal from="left" travel={48} delay={0.1}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
                <Image
                  src={s.images.rightTop}
                  alt="Ahşap çatı iskeleti ve kereste"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </Reveal>

            <Reveal from="right" travel={52} delay={0.14} className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {s.rightTitle}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                {s.rightBody}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
