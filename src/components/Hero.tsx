"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { EASE_LUX, txLux } from "@/lib/motionPresets";
import { scrollToSection } from "@/lib/scrollTo";

export default function Hero() {
  const slides = siteData.hero.slideshow;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.11, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 28, x: -12, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.82, ease: EASE_LUX },
    },
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-[78vh] overflow-hidden md:min-h-[88vh]"
    >
      <div className="absolute inset-0">
        <AnimatePresence>
          {slides.map((src, i) =>
            i === active ? (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.15, ease: EASE_LUX }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt="Çatı uygulaması"
                  fill
                  priority={i === 0}
                  className="object-cover ken-burns-img"
                  sizes="100vw"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/30 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[78vh] flex-col justify-center px-4 pb-16 pt-24 sm:px-6 md:min-h-[88vh] lg:px-8">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-white"
          >
            <motion.p
              variants={item}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
            >
              AN Teknik Çatı
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
            >
              {siteData.hero.titleLine1}
              <span className="block text-brand-foreground drop-shadow-sm">
                {siteData.hero.titleLine2}
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              {siteData.hero.subtitle}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand px-8 text-base font-semibold text-brand-foreground shadow-lg hover:bg-brand/90"
              >
                <Link
                  href="#iletisim"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("iletisim");
                  }}
                >
                  Teklif Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <Link
                  href="#hizmetler"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("hizmetler");
                  }}
                >
                  Hizmetlerimiz
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-2"
            >
              {siteData.hero.quickTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 16, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={
                    reduce
                      ? { duration: 0.15, delay: 0.2 + i * 0.03 }
                      : {
                          delay: 0.5 + i * 0.055,
                          type: "spring",
                          stiffness: 380,
                          damping: 22,
                        }
                  }
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md transition hover:border-brand/60 hover:bg-brand/20"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            type="button"
            aria-label={`Slayt ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-brand" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, ...txLux(0, 0.55) }}
      />
    </section>
  );
}
