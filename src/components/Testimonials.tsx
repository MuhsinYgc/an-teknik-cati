"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Testimonials() {
    return (
        <section className="bg-muted/30 py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold">Müşteri Görüşleri</h2>
                    <p className="text-muted-foreground">Bizi müşterilerimizden dinleyin.</p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2">
                    {siteData.testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="hover:scale-105 transition"
                        >
                            <Card className="h-full text-sm">
                                <CardContent className="pt-4">
                                    <p className="leading-relaxed">“{t.quote}”</p>
                                </CardContent>
                                <CardFooter className="flex items-center gap-3 pt-2">
                                    <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center">
                                        <Star className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">{t.name}</div>
                                        <div className="text-xs text-muted-foreground">{t.role}</div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
