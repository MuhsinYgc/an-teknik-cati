"use client";

import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { siteData } from "@/data/siteData";
import { roofMedia } from "@/data/roofMedia";

export default function CTA() {
  return (
    <section
      id="iletisim"
      className="scroll-mt-24 relative overflow-hidden py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-muted/15 to-background"
        aria-hidden
      />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_28px_70px_-28px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04] md:grid md:min-h-[380px] md:grid-cols-2">
          <Reveal
            from="left"
            travel={56}
            blur
            className="relative min-h-[260px] md:min-h-full"
          >
            <Image
              src={roofMedia.ctaBackground}
              alt="Çatı ve yapı projesi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/65" />
            <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/70 to-[#D4AF37]/0 md:block" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]/90">
                AN Teknik Çatı
              </p>
              <p className="mt-4 max-w-sm text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
                Projeniz İçin Hemen Başlayalım!
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                Keşiften teslimata şeffaf süreç, yazılı garanti ve deneyimli saha ekibi.
              </p>
            </div>
          </Reveal>

          <Reveal
            from="right"
            travel={48}
            delay={0.1}
            className="flex flex-col justify-center space-y-6 p-5 sm:space-y-8 sm:p-8 md:p-10 lg:p-12"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Teklif & Keşif
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {siteData.contact.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                {siteData.contact.desc}
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href={`tel:${siteData.navbar.phoneTel.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-border/80 bg-muted/30 px-4 py-3.5 transition hover:border-brand/35 hover:bg-muted/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-muted-foreground">
                    Telefon
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {siteData.navbar.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${siteData.navbar.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border/80 bg-muted/30 px-4 py-3.5 transition hover:border-brand/35 hover:bg-muted/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-muted-foreground">
                    E-posta
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {siteData.navbar.email}
                  </p>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-1.5 pt-1 sm:flex sm:flex-wrap sm:gap-3">
              <Button
                asChild
                size="lg"
                className="h-auto min-h-11 flex-col gap-0.5 rounded-lg px-1.5 py-2 text-[0.65rem] font-semibold leading-tight shadow-md sm:h-12 sm:flex-row sm:gap-2 sm:rounded-xl sm:px-7 sm:text-sm sm:leading-none"
              >
                <a
                  href={`tel:${siteData.navbar.phoneTel.replace(/\s/g, "")}`}
                  className="flex flex-col items-center gap-0.5 sm:flex-row sm:gap-2"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  <span className="text-center sm:inline">Hemen Ara</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto min-h-11 flex-col gap-0.5 rounded-lg border-border/90 bg-background/90 px-1.5 py-2 text-[0.65rem] font-semibold leading-tight shadow-sm sm:h-12 sm:flex-row sm:gap-2 sm:rounded-xl sm:px-6 sm:text-sm sm:leading-none"
              >
                <a
                  href={siteData.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-0.5 sm:flex-row sm:gap-2"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#128C7E] sm:h-4 sm:w-4" />
                  <span className="text-center sm:inline">WhatsApp</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto min-h-11 flex-col gap-0.5 rounded-lg border-border/90 bg-background/90 px-1.5 py-2 text-[0.65rem] font-semibold leading-tight shadow-sm sm:h-12 sm:flex-row sm:gap-2 sm:rounded-xl sm:px-6 sm:text-sm sm:leading-none"
              >
                <a
                  href={`mailto:${siteData.navbar.email}`}
                  className="flex flex-col items-center gap-0.5 sm:flex-row sm:gap-2"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  <span className="text-center sm:inline">
                    <span className="sm:hidden">E-posta</span>
                    <span className="hidden sm:inline">E-posta Gönder</span>
                  </span>
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
