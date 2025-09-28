"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-muted/30 py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold">{siteData.portfolio.title}</h2>
                    <p className="text-muted-foreground">{siteData.portfolio.desc}</p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {siteData.portfolio.images.map((src, i) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.03 }}
                            className="group relative hover:scale-105 transition"
                        >
                            <div className="relative h-56 md:h-60 overflow-hidden rounded-2xl">
                                <Image
                                    src={src}
                                    alt={`Proje ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-3 left-3">
                                <Badge variant="secondary">Endüstriyel</Badge>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
