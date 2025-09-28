"use client";
import { siteData } from "@/data/siteData";

export default function TrustBar() {
    return (
        <section className="py-10 border-y bg-background/60">
            <div className="container flex flex-wrap items-center justify-center gap-8 opacity-80">
                {siteData.trustBar.map((company) => (
                    <span
                        key={company}
                        className="text-sm md:text-base hover:text-primary transition"
                    >
                        {company}
                    </span>
                ))}
            </div>
        </section>
    );
}
