"use client";
import Link from "next/link";
import { HardHat } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <HardHat className="h-4 w-4" />
                        <span>© {new Date().getFullYear()} {siteData.navbar.brand}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                        {siteData.navbar.links.map((link) => (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                className="hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
