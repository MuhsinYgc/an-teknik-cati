"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Numbers from "@/components/Numbers";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Numbers />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
