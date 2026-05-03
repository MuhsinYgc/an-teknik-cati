"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { scrollToSection } from "@/lib/scrollTo";

export default function RepairCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Reveal from="pop" className="block">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-8 py-12 text-primary-foreground shadow-2xl md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
                Ekstra yalıtım
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                {siteData.repair.title}
              </h2>
              <p className="mt-4 text-primary-foreground/90 leading-relaxed">
                {siteData.repair.text}
              </p>
              <p className="mt-6 text-sm font-medium text-primary-foreground/85">
                Çatınız İçin En Doğru Seçim
                <br />
                Her Mevsime Uygun Çatı Sistemleri: Yağmur, Kar ve Güneşe Karşı Koruma
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-brand text-brand-foreground hover:bg-brand/90"
              >
                <Link
                  href="#iletisim"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("iletisim");
                  }}
                >
                  {siteData.repair.cta}
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
