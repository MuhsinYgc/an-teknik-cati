"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { siteData } from "@/data/siteData";
import { scrollToSection } from "@/lib/scrollTo";

export default function ServiceShowcase() {
  const timer = useRef<number | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 18 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const start = () => {
      stop();
      timer.current = window.setInterval(() => {
        instanceRef.current?.next();
      }, 3500);
    };
    const stop = () => {
      if (timer.current) window.clearInterval(timer.current);
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
    <section id="hizmetler" className="scroll-mt-24 py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal
          from="down"
          travel={40}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Hem şık hem de güvenli bir{" "}
            <span className="text-brand">çatı</span> istiyorsanız doğru yerdesiniz...
          </h2>
        </Reveal>

        <Reveal from="scale" delay={0.1} className="relative mt-12">
          <div ref={sliderRef} className="keen-slider !overflow-hidden">
            {siteData.serviceShowcase.map((s) => (
              <article
                key={s.title}
                className="keen-slider__slide group relative overflow-hidden rounded-2xl border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-base font-bold leading-tight md:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/85">
                    {s.teaser}
                  </p>
                  <Link
                    href={`#${s.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(s.target);
                    }}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand underline-offset-4 hover:text-brand/80 hover:underline"
                  >
                    İncele
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Önceki"
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 text-foreground shadow-md transition hover:scale-105 hover:text-brand sm:flex md:-left-3"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Sonraki"
            onClick={() => instanceRef.current?.next()}
            className="absolute right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 text-foreground shadow-md transition hover:scale-105 hover:text-brand sm:flex md:-right-3"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
