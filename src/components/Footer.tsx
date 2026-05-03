"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { siteData } from "@/data/siteData";
import { scrollToSection } from "@/lib/scrollTo";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BrandLogo surface="light" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Çatı uygulama ve kaplama sistemlerinde keşiften teslime profesyonel çözüm ortağınız.
            </p>
            <div className="flex gap-3 text-brand">
              <a
                href="#"
                className="rounded-full border border-border bg-card p-2 transition hover:border-brand hover:text-brand"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-border bg-card p-2 transition hover:border-brand hover:text-brand"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-border bg-card p-2 transition hover:border-brand hover:text-brand"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Hızlı menü
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {siteData.footer.quick.map((l) => (
                <li key={l.anchor}>
                  <Link
                    href={`#${l.anchor}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.anchor);
                    }}
                    className="transition hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {siteData.footer.serviceLinks.map((l) => (
                <li key={l.anchor}>
                  <Link
                    href={`#${l.anchor}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.anchor);
                    }}
                    className="transition hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Bize ulaşın
            </h3>
            <a
              href={`tel:${siteData.navbar.phoneTel.replace(/\s/g, "")}`}
              className="flex items-start gap-2 text-muted-foreground transition hover:text-foreground"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {siteData.navbar.phone}
            </a>
            <a
              href={`mailto:${siteData.navbar.email}`}
              className="flex items-start gap-2 text-muted-foreground transition hover:text-foreground"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {siteData.navbar.email}
            </a>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {siteData.navbar.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteData.navbar.brand}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteData.footer.legal.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
