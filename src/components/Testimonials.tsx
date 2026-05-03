"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { siteData } from "@/data/siteData";
import { cn } from "@/lib/utils";

function initialsFromName(name: string) {
  const cleaned = name.replace(/\./g, "").trim().split(/\s+/).filter(Boolean);
  if (cleaned.length >= 2) {
    const a = cleaned[0][0];
    const b = cleaned[cleaned.length - 1][0];
    return `${a}${b}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function StarRating({ rating }: { rating: number }) {
  const label = `${rating} üzerinden 5 yıldız`;
  return (
    <div className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]",
            i < rating
              ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)]"
              : "fill-muted/40 text-muted-foreground/25",
          )}
          strokeWidth={i < rating ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const timer = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  const testimonials = siteData.testimonials;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.12,
      spacing: 18,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.85, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.35, spacing: 22 },
      },
    },
    slideChanged(slider) {
      setActive(slider.track.details.rel);
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const stop = () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    const start = () => {
      stop();
      timer.current = window.setInterval(() => {
        instanceRef.current?.next();
      }, 4200);
    };
    start();
    const el = instanceRef.current.container;
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    return () => {
      stop();
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
    };
  }, [instanceRef]);

  return (
    <section
      id="gorusler"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-muted/40 via-background to-amber-50/30 py-20 dark:from-muted/20 dark:to-amber-950/20"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-brand/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-amber-400/25 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.07] via-transparent to-transparent"
        aria-hidden
      />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <Reveal from="down" travel={32} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-gradient-to-r from-amber-400/15 to-brand/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-800 dark:text-amber-200">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
            Gerçek proje deneyimleri
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Müşteri{" "}
            <span className="bg-gradient-to-r from-brand via-brand to-amber-600 bg-clip-text text-transparent dark:to-amber-400">
              Görüşleri
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Kaydırarak gezin — otomatik olarak da dönüyor; üzerine gelince duraklıyor.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div ref={sliderRef} className="keen-slider !overflow-hidden pb-2">
            {testimonials.map((t) => (
              <div key={`${t.name}-${t.role}`} className="keen-slider__slide">
                <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-brand/15 bg-gradient-to-br from-card via-card to-brand/[0.04] p-6 shadow-lg shadow-brand/[0.07] transition duration-300 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/15 sm:min-h-[280px]">
                  <div className="pointer-events-none absolute -right-4 -top-4 text-brand/[0.12] transition group-hover:text-brand/20">
                    <Quote className="h-24 w-24 -rotate-12" strokeWidth={1} />
                  </div>

                  <StarRating rating={t.rating} />

                  <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-foreground/95 md:text-base">
                    <span className="text-brand/90">“</span>
                    {t.quote}
                    <span className="text-brand/90">”</span>
                  </p>

                  <div className="relative mt-6 flex items-center gap-4 border-t border-brand/10 pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/70 text-sm font-bold text-brand-foreground shadow-md ring-2 ring-amber-400/40">
                      {initialsFromName(t.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                      <div className="truncate text-xs font-medium text-brand/90">
                        {t.company}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Önceki görüş"
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand/20 bg-background/95 text-foreground shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-brand/40 hover:text-brand sm:flex md:-left-2 lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Sonraki görüş"
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand/20 bg-background/95 text-foreground shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-brand/40 hover:text-brand sm:flex md:-right-2 lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={`dot-${t.name}-${idx}`}
              type="button"
              aria-label={`${idx + 1}. görüşe git`}
              aria-current={active === idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === idx
                  ? "w-8 bg-gradient-to-r from-brand to-amber-500"
                  : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
