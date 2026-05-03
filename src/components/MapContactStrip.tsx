"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Home, Mail, MapPin, Phone } from "lucide-react";
import { siteData } from "@/data/siteData";
import { VIEW_PREMIUM, txLux } from "@/lib/motionPresets";

const OfficeMap = dynamic(() => import("./map/OfficeMap"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 z-0 animate-pulse bg-neutral-800"
      aria-hidden
    />
  ),
});

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteData.navbar.address
)}`;

function cardHref(index: number) {
  if (index === 0) return googleMapsUrl;
  if (index === 1) return `mailto:${siteData.navbar.email}`;
  return `tel:${siteData.navbar.phoneTel.replace(/\s/g, "")}`;
}

const cardFrom = [
  { opacity: 0, x: -48, y: 24 },
  { opacity: 0, y: 40 },
  { opacity: 0, x: 48, y: 24 },
] as const;

export default function MapContactStrip() {
  const { officeCoords, mapDefaultZoom, mapMinZoom } = siteData.mapStrip;
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-neutral-900">
      <div className="relative h-[min(52vh,520px)] w-full">
        <OfficeMap
          lat={officeCoords.lat}
          lng={officeCoords.lng}
          defaultZoom={mapDefaultZoom}
          minZoom={mapMinZoom}
          googleMapsUrl={googleMapsUrl}
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/55" />
        <div className="pointer-events-auto absolute left-4 top-4 z-10 sm:left-6">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/55 px-3.5 py-2.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition hover:border-[#D4AF37]/40 hover:bg-black/75"
          >
            <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
            {`Google Maps'te aç`}
            <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
          </a>
        </div>
      </div>

      <div className="container relative z-10 -mt-24 px-4 pb-16 pt-0 sm:px-6 lg:-mt-28 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {siteData.mapStrip.cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={cardHref(i)}
              {...(i === 0
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={reduce ? { opacity: 0 } : cardFrom[i % cardFrom.length]}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              viewport={VIEW_PREMIUM}
              transition={txLux(i * 0.1, 0.72)}
              className="group relative block h-full overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-neutral-900/98 via-neutral-950/98 to-black/90 p-7 text-white shadow-[0_24px_48px_-14px_rgba(0,0,0,0.72)] ring-1 ring-white/10 outline-none transition-[box-shadow,border-color,ring-color] duration-300 hover:border-[#D4AF37]/28 hover:shadow-[0_32px_64px_-18px_rgba(0,0,0,0.88)] hover:ring-[#D4AF37]/32 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 50% -20%, rgba(212,175,55,0.12), transparent 55%)",
                }}
              />
              <div className="relative flex h-full flex-col">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/78">
                  {card.body}
                </p>
                {i === 0 && (
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#D4AF37]/90">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {`Konumu Google Maps'te aç`}
                  </p>
                )}
                <div className="mt-7 flex items-center gap-4 border-t border-white/[0.09] pt-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/14 to-white/[0.04] text-brand-foreground shadow-inner ring-1 ring-[#D4AF37]/30">
                    {card.icon === "home" ? (
                      <Home className="h-5 w-5 text-[#D4AF37]" />
                    ) : card.icon === "mail" ? (
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                    ) : (
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                    )}
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-snug text-white/95">
                    {i === 1 ? siteData.navbar.email : card.footer}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
