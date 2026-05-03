"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import IntroSections from "@/components/home/IntroSections";
import FeatureSplits from "@/components/home/FeatureSplits";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import RoofNeeds from "@/components/home/RoofNeeds";
import RepairCTA from "@/components/home/RepairCTA";
import Portfolio from "@/components/Portfolio";
import Numbers from "@/components/Numbers";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import GuideTabs from "@/components/home/GuideTabs";
import CTA from "@/components/CTA";
import MapContactStrip from "@/components/MapContactStrip";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <IntroSections />
      <FeatureSplits />
      <ServiceShowcase />
      <RoofNeeds />
      <RepairCTA />
      <Portfolio />
      <Numbers />
      <Process />
      <Testimonials />
      <GuideTabs />
      <CTA />
      <MapContactStrip />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
