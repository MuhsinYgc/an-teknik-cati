"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { siteData } from "@/data/siteData";

export default function Services() {
    return (
        <section id="ozet-hizmetler" className="container scroll-mt-24 px-4 sm:px-6 lg:px-8 py-20">
            <div className="mx-auto max-w-2xl text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold">Çekirdek uzmanlık alanlarımız</h2>
                <p className="text-muted-foreground">
                    Standartların üzerindeki iş güvenliği ve kalite yönetimiyle çalışıyoruz.
                </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {siteData.services.map((s) => (
                    <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="hover:scale-105 transition"
                    >
                        <Card className="h-full">
                            <CardHeader className="space-y-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                    <s.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-lg font-semibold">{s.title}</div>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                {s.desc}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
