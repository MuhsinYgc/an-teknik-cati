"use client";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
            </div>

            <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-12 lg:py-24 items-center">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 text-center lg:text-left">
                    <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mx-auto lg:mx-0">
                        <Sparkles className="h-3.5 w-3.5" /> Üst düzey endüstriyel & mimari çatı çözümleri
                    </motion.div>

                    <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance">
                        {siteData.hero.title.split("Mükemmel Zanaat")[0]}
                        <span className="text-primary">Mükemmel Zanaat</span>
                    </motion.h1>

                    <motion.p variants={item} className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                        {siteData.hero.subtitle}
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <Button asChild size="lg" className="w-full sm:w-auto hover:scale-105 transition">
                            <Link href="#contact">Hızlı Teklif Al <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition">
                            <Link href="#portfolio">Referanslara Göz At</Link>
                        </Button>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                            <span className="ml-2">{siteData.hero.highlights.customers}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{siteData.hero.highlights.experience}</Badge>
                    </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full max-w-lg mx-auto lg:mx-0">
                    <Image src={siteData.hero.image} alt="Çatı uygulaması" width={600} height={400}
                        className="rounded-2xl object-cover shadow-2xl" priority />
                </motion.div>
            </div>
        </section>
    );
}
