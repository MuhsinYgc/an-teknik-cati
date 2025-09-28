"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Process() {
    return (
        <section id="process" className="bg-background py-20">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold">Nasıl Çalışıyoruz?</h2>
                    <p className="text-muted-foreground">Şeffaf, ölçülebilir ve güvenli bir proje akışı.</p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {siteData.process.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="hover:scale-105 transition"
                        >
                            <Card className="h-full">
                                <CardHeader className="space-y-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <CheckCircle2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-lg font-semibold">{step.title}</div>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    {step.text}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
