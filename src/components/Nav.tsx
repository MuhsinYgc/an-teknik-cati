"use client";
import { useState } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

const menuAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4, ease: easeInOut },
};

export default function Nav() {
    const [open, setOpen] = useState(false);
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => setOpen(false), 400);
        } else {
            setOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur border-b bg-background/80">
            <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <Link href="#" className="flex items-center gap-2 font-semibold hover:scale-105 transition">
                    <HardHat className="h-5 w-5" />
                    <span>{siteData.navbar.brand}</span>
                </Link>

                {/* Desktop Menü */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {siteData.navbar.links.map((l) => (
                        <a key={l.id} href={`#${l.id}`} onClick={(e) => handleNavClick(e, l.id)}
                            className="hover:text-primary transition cursor-pointer">
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menü Butonu */}
                <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menüyü Aç/Kapat">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Desktop Butonlar */}
                <div className="hidden md:flex items-center gap-3">
                    <Button asChild variant="outline">
                        <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                            <Phone className="mr-2 h-4 w-4" />Hemen Ara
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                            <Mail className="mr-2 h-4 w-4" />Teklif Al
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Menü */}
            <AnimatePresence>
                {open && (
                    <motion.div {...menuAnimation} className="absolute top-16 left-0 w-full md:hidden bg-background border-t shadow-lg overflow-hidden z-50">
                        <nav className="flex flex-col p-4 gap-4 text-sm">
                            {siteData.navbar.links.map((l) => (
                                <a key={l.id} href={`#${l.id}`} onClick={(e) => handleNavClick(e, l.id)} className="hover:text-primary transition cursor-pointer">
                                    {l.label}
                                </a>
                            ))}
                            <Button asChild className="mt-2">
                                <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                                    Teklif Al
                                </Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
