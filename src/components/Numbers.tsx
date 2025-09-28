"use client";
import { Card, CardContent } from "@/components/ui/card";
import { siteData } from "@/data/siteData";

export default function Numbers() {
    return (
        <section className="container px-4 sm:px-6 lg:px-8 py-16">
            <Card>
                <CardContent className="py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {siteData.numbers.map((stat) => (
                            <div key={stat.label} className="space-y-2">
                                <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                                <div className="text-xs uppercase text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
