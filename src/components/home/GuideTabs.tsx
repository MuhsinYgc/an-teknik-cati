"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { EASE_LUX } from "@/lib/motionPresets";

export default function GuideTabs() {
  const [active, setActive] = useState(siteData.guide.tabs[0].key);
  const [openIndex, setOpenIndex] = useState(0);

  const tab = siteData.guide.tabs.find((t) => t.key === active) ?? siteData.guide.tabs[0];

  const switchTab = (key: string) => {
    setActive(key);
    setOpenIndex(0);
  };

  return (
    <section id="rehber" className="scroll-mt-24 bg-muted/25 py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal from="left" travel={52} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Çatınız İçin En Doğru Seçim
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-brand">Dayanıklı ve Uzun Ömürlü</span>{" "}
            Çatılar İçin Uygulama Rehberi
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
          <Reveal
            from="up"
            travel={40}
            delay={0.08}
            className="flex flex-row flex-wrap gap-2 lg:w-72 lg:flex-shrink-0 lg:flex-col"
          >
            {siteData.guide.tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => switchTab(t.key)}
                className={`rounded-xl border px-3 py-2.5 text-left text-sm font-medium leading-snug transition lg:px-4 lg:py-3.5 ${
                  active === t.key
                    ? "border-brand bg-brand text-brand-foreground shadow-md"
                    : "border-transparent bg-card text-foreground hover:border-border hover:bg-muted/60"
                }`}
              >
                {t.label}
              </button>
            ))}
          </Reveal>

          <Reveal
            from="right"
            travel={48}
            delay={0.12}
            className="flex-1 rounded-2xl border bg-card p-4 shadow-sm md:p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, x: 28, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: -6 }}
                transition={{ duration: 0.42, ease: EASE_LUX }}
                className="space-y-2"
              >
                {tab.sections.map((s, i) => {
                  const open = openIndex === i;
                  return (
                    <div
                      key={s.heading}
                      className={`rounded-xl border transition ${
                        open
                          ? "border-brand/40 bg-brand/5"
                          : "border-border bg-background"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? -1 : i)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left md:px-5 md:py-4"
                      >
                        <span className="text-sm font-semibold md:text-base">
                          {s.heading}
                        </span>
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                            open
                              ? "bg-brand text-brand-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {open ? (
                            <Minus className="h-3.5 w-3.5" />
                          ) : (
                            <Plus className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.38, ease: EASE_LUX }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground md:px-5 md:pb-6 md:text-[15px]">
                              {s.body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
