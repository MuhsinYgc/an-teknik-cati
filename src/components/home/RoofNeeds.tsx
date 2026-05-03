"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

export default function RoofNeeds() {
  const stackImages = siteData.roofNeeds.stackImages;
  return (
    <section className="border-y bg-muted/30 py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {stackImages.map((src, i) => (
              <Reveal
                key={src}
                from={i === 0 ? "left" : "down"}
                travel={i === 0 ? 68 : 52}
                delay={i * 0.14}
                className={`relative aspect-[2/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 ${
                  i === 0 ? "translate-y-6" : "-translate-y-6"
                }`}
              >
                <Image
                  src={src}
                  alt={`Çatı projesi ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>

          <Reveal from="right" travel={72} delay={0.08} className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Projeniz için{" "}
              <span className="text-brand">nasıl bir çatıya</span> ihtiyacınız var
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              {siteData.roofNeeds.subtitle}
            </p>

            <ul className="mt-8 space-y-4">
              {siteData.roofNeeds.cards.map((c, i) => (
                <motion.li
                  key={c.title}
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? 40 : -40,
                    y: 12,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={VIEW_PREMIUM}
                  transition={txLux(i * 0.07, 0.74)}
                  className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md md:p-6"
                >
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
