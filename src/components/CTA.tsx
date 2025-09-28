"use client";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

export default function CTA() {
    return (
        <section id="contact" className="relative py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10">
            <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border bg-card shadow-xl overflow-hidden">

                    {/* Sol: Görsel + Overlay */}
                    <div className="relative h-64 md:h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop"
                            alt="İletişim"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                            Projeniz İçin Hemen Başlayalım!
                        </div>
                    </div>

                    {/* Sağ: İçerik */}
                    <div className="p-6 md:p-10 space-y-6">
                        <div>
                            <Badge className="mb-3 w-fit" variant="secondary">Teklif & Keşif</Badge>
                            <h3 className="text-3xl font-bold">{siteData.contact.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {siteData.contact.desc}
                            </p>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" /> {siteData.navbar.phone}
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" /> {siteData.navbar.email}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <Button asChild size="lg" className="hover:scale-105 transition">
                                <a href={`tel:${siteData.navbar.phone}`}>
                                    <Phone className="mr-2 h-4 w-4" /> Hemen Ara
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition">
                                <a href={`mailto:${siteData.navbar.email}`}>
                                    <Mail className="mr-2 h-4 w-4" /> E-posta Gönder
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
