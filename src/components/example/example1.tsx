"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Building2, CheckCircle2, HardHat, Home, Mail, Menu, Phone, Shield,
  Sparkles, Star, Wrench, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


// Animasyon ayarları
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

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

/* ---------------------- NAVBAR ----------------------- */
function Nav() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-background/80">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2 font-semibold hover:scale-105 transition">
          <HardHat className="h-5 w-5" />
          <span>AN Teknik Çatı</span>
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {["services", "portfolio", "process", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}
              className="hover:text-primary transition cursor-pointer">
              {id === "services" ? "Hizmetler" : id === "portfolio" ? "Referanslar" :
                id === "process" ? "Süreç" : "İletişim"}
            </a>
          ))}
        </nav>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menüyü Aç/Kapat">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Masaüstü Butonlar */}
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

      {/* Mobil Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            transition={{ duration: 0.3 }}
            className="origin-top md:hidden bg-background border-t shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-4 text-sm">
              {["services", "portfolio", "process", "contact"].map((id) => (
                <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}
                  className="hover:text-primary transition cursor-pointer">
                  {id === "services" ? "Hizmetler" : id === "portfolio" ? "Referanslar" :
                    id === "process" ? "Süreç" : "İletişim"}
                </a>
              ))}
              <Button asChild className="mt-2">
                <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Teklif Al</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------------- HERO ----------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-16 lg:py-24 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 text-center lg:text-left">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mx-auto lg:mx-0">
            <Sparkles className="h-3.5 w-3.5" /> Üst düzey endüstriyel & mimari çatı çözümleri
          </motion.div>

          <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Dayanıklılık, Estetik ve <span className="text-primary">Mükemmel Zanaat</span>
          </motion.h1>

          <motion.p variants={item} className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            AN Teknik Çatı; endüstriyel tesislerden modern konutlara kadar; membran, trapez,
            sandviç panel, çelik konstrüksiyon ve bakım onarım hizmetlerinde uzman ekiple yanınızda.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto hover:scale-105 transition">
              <Link href="#contact">Hızlı Teklif Al <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition">
              <Link href="#portfolio">Referanslara Göz At</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              <span className="ml-2">100+ memnun müşteri</span>
            </div>
            <Badge variant="secondary" className="text-xs">10+ yıl deneyim</Badge>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full max-w-lg mx-auto lg:mx-0">
          <Image src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1600&auto=format&fit=crop"
            alt="Çatı uygulaması" width={600} height={400}
            className="rounded-2xl object-cover shadow-2xl" priority />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------- TRUST BAR --------------------- */
function TrustBar() {
  return (
    <section className="py-10 border-y bg-background/60">
      <div className="container flex flex-wrap items-center justify-center gap-8 opacity-80">
        {["ASEL İnşaat", "Marmara Yapı", "İleri Tesisler", "Kuzey Enerji", "Anka Mimarlık"].map((c) => (
          <span key={c} className="text-sm md:text-base hover:text-primary transition">{c}</span>
        ))}
      </div>
    </section>
  );
}

/* ------------------- SERVICES --------------------- */
function Services() {
  const items = [
    { title: "Membran & PVC TPO Sistemleri", desc: "Yalıtım performansı yüksek, uzun ömürlü çatı membran uygulamaları.", icon: Shield },
    { title: "Sandviç Panel & Trapez Kaplama", desc: "Endüstriyel tesisler için hız, dayanıklılık ve maliyet optimizasyonu.", icon: Building2 },
    { title: "Çelik Konstrüksiyon", desc: "Statik hesaplara uygun, güvenli ve estetik çatı taşıyıcı sistemleri.", icon: Wrench },
    { title: "Bakım & Onarım", desc: "Sızdırmazlık, detay onarımları ve periyodik bakım hizmetleri.", icon: Home },
  ];

  return (
    <section id="services" className="container px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-2xl text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">Uzmanlık Alanlarımız</h2>
        <p className="text-muted-foreground">Standartların üzerindeki iş güvenliği ve kalite yönetimiyle çalışıyoruz.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="hover:scale-105 transition">
            <Card className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-lg font-semibold">{s.title}</div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------- PORTFOLIO --------------------- */
function Portfolio() {
  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="portfolio" className="bg-muted/30 py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Öne Çıkan Projeler</h2>
          <p className="text-muted-foreground">Son yıllarda teslim ettiğimiz seçili işlerden kareler.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative hover:scale-105 transition">
              <div className="relative h-56 md:h-60 overflow-hidden rounded-2xl">
                <Image src={src} alt={`Proje ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
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

/* ------------------- NUMBERS --------------------- */
function Numbers() {
  const stats = [
    { label: "Tamamlanan Proje", value: "350+" },
    { label: "Şehir", value: "20+" },
    { label: "Ekip Uzmanı", value: "40+" },
    { label: "Garanti Yılı", value: "5-10" },
  ];

  return (
    <section className="container px-4 sm:px-6 lg:px-8 py-16">
      <Card>
        <CardContent className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="text-xs uppercase text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

/* ------------------- PROCESS --------------------- */
function Process() {
  const steps = [
    { title: "Keşif & Analiz", text: "Saha ziyareti, ölçüm ve ihtiyaçların netleştirilmesi." },
    { title: "Projelendirme", text: "Statik ve detay çizimleri, malzeme seçimi." },
    { title: "Uygulama", text: "İş güvenliği odaklı, planlı ve şeffaf süreç." },
    { title: "Teslim & Garanti", text: "Kontrol, devreye alma ve garanti dokümantasyonu." },
  ];

  return (
    <section id="process" className="bg-background py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Nasıl Çalışıyoruz?</h2>
          <p className="text-muted-foreground">Şeffaf, ölçülebilir ve güvenli bir proje akışı.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="hover:scale-105 transition">
              <Card className="h-full">
                <CardHeader className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-lg font-semibold">{s.title}</div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{s.text}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const data = [
    { quote: "Zamanında teslim ve kusursuz detay çözümleri. Tesisimizin çatısı hiç bu kadar güvenli olmamıştı.", name: "Mert Y.", role: "Fabrika Müdürü" },
    { quote: "Ekip çok profesyonel. Keşiften teslimata kadar sürekli bilgilendirildik.", name: "Aylin K.", role: "Proje Yöneticisi" },
    { quote: "Teklif ve keşif süreci çok hızlıydı, sonuçtan çok memnun kaldık.", name: "Ahmet D.", role: "İnşaat Mühendisi" },
    { quote: "Çatı uygulaması tam zamanında bitti, işçilik kalitesi harika.", name: "Selin P.", role: "Mimar" },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Müşteri Görüşleri</h2>
          <p className="text-muted-foreground">Bizi müşterilerimizden dinleyin.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2">
          {data.map((t, i) => (
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


function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border bg-card shadow-xl overflow-hidden">

          {/* Sol: Görsel + Overlay */}
          <div className="relative h-64 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop"
              alt="İletişim"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
              Projeniz İçin Hemen Başlayalım!
            </div>
          </div>

          {/* Sağ: İçerik */}
          <div className="p-6 md:p-10 space-y-6">
            <div>
              <Badge className="mb-3 w-fit" variant="secondary">Teklif & Keşif</Badge>
              <h3 className="text-3xl font-bold">Projeniz için bugün konuşalım</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                24 saat içinde dönüş yapıyoruz. İstanbul ve çevre illerinde aynı gün keşif mümkün.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +90 5xx xxx xx xx
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> info@an-teknik-cati.com
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg" className="hover:scale-105 transition">
                <a href="tel:+905000000000">
                  <Phone className="mr-2 h-4 w-4" /> Hemen Ara
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:scale-105 transition">
                <a href="mailto:info@an-teknik-cati.com">
                  <Mail className="mr-2 h-4 w-4" /> E-posta Gönder
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <HardHat className="h-4 w-4" />
            <span>© {new Date().getFullYear()} AN Teknik Çatı</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#services" className="hover:text-foreground">Hizmetler</Link>
            <Link href="#portfolio" className="hover:text-foreground">Referanslar</Link>
            <Link href="#process" className="hover:text-foreground">Süreç</Link>
            <Link href="#contact" className="hover:text-foreground">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Basit ikon bileşenleri (lucide kombinasyonları)
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16a6.471 6.471 0 0 0 4.23-1.57l.27.28v.79L20 21.49 21.49 20 15.5 14Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z" /></svg>;
}
function DraftIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}><path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm11 0v4h4" /></svg>;
}
function BuildIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}><path fill="currentColor" d="M22.7 19.3 13.4 10a5 5 0 0 0-6.9 6.9l9.3 9.3 7-7Z" /></svg>;
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}><path fill="currentColor" d="M9 16.17 4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>;
}