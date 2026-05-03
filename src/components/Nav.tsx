"use client";

import { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { siteData } from "@/data/siteData";
import { scrollToSection } from "@/lib/scrollTo";

const menuAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: easeInOut },
};

const navBtn =
  "rounded-xl px-4 py-2.5 text-base font-medium text-white/75 transition hover:bg-white/10 hover:text-white";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const go = (id: string) => {
    scrollToSection(id, () => setOpen(false));
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-slate-950 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/92">
      <div className="container flex min-h-[4.25rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:min-h-[5rem] md:py-3.5 lg:px-8">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            go("anasayfa");
          }}
          className="flex shrink-0 items-center gap-2 transition hover:opacity-90"
        >
          <BrandLogo surface="header" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          <button type="button" onClick={() => go("anasayfa")} className={navBtn}>
            Anasayfa
          </button>
          <button type="button" onClick={() => go("kurumsal")} className={navBtn}>
            Kurumsal
          </button>

          <div className="group relative">
            <button
              type="button"
              className={`${navBtn} inline-flex items-center gap-1`}
            >
              Hizmetlerimiz
              <ChevronDown className="h-4 w-4 opacity-80 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="w-[min(100vw-2rem,36rem)] rounded-2xl border border-white/10 bg-slate-900/98 p-4 shadow-2xl backdrop-blur-xl">
                <div className="grid max-h-[min(70vh,28rem)] grid-cols-2 gap-1 overflow-y-auto text-sm">
                  {siteData.serviceMenu.map((item) => (
                    <button
                      key={item.anchor}
                      type="button"
                      onClick={() => go(item.anchor)}
                      className="rounded-xl px-3 py-2.5 text-left text-white/80 transition hover:bg-brand/25 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button type="button" onClick={() => go("projeler")} className={navBtn}>
            Projeler
          </button>
          <button type="button" onClick={() => go("iletisim")} className={navBtn}>
            İletişim
          </button>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-brand px-6 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand/90"
          >
            <Link
              href="#iletisim"
              onClick={(e) => {
                e.preventDefault();
                go("iletisim");
              }}
            >
              Teklif Al
            </Link>
          </Button>
        </div>

        <button
          className="rounded-xl p-2.5 text-white transition hover:bg-white/10 lg:hidden"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç veya kapat"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            {...menuAnimation}
            className="border-t border-white/10 bg-slate-950 lg:hidden"
          >
            <nav className="container flex max-h-[calc(100vh-7rem)] flex-col gap-0.5 overflow-y-auto px-4 py-4">
              {[
                ["Anasayfa", "anasayfa"],
                ["Kurumsal", "kurumsal"],
                ["Projeler", "projeler"],
                ["İletişim", "iletisim"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  className="rounded-xl px-3 py-3.5 text-left text-base font-medium text-white/85 hover:bg-white/10"
                  onClick={() => go(id)}
                >
                  {label}
                </button>
              ))}
              <button
                type="button"
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-medium text-white/85 hover:bg-white/10"
                onClick={() => setMobileServices(!mobileServices)}
              >
                Hizmetlerimiz
                <ChevronDown
                  className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {mobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-2"
                  >
                    <div className="flex flex-col border-l border-white/15 py-1">
                      {siteData.serviceMenu.map((item) => (
                        <button
                          key={item.anchor}
                          type="button"
                          className="px-3 py-2.5 text-left text-sm text-white/70 hover:text-white"
                          onClick={() => go(item.anchor)}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="mt-3 rounded-xl bg-brand py-6 text-base font-semibold text-brand-foreground hover:bg-brand/90"
                asChild
              >
                <Link
                  href="#iletisim"
                  onClick={(e) => {
                    e.preventDefault();
                    go("iletisim");
                  }}
                >
                  Teklif Al
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
