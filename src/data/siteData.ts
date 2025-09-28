// data/siteData.ts
import { Shield, Building2, Wrench, Home, CheckCircle2 } from "lucide-react";

export const siteData = {
  navbar: {
    brand: "AN Teknik Çatı",
    links: [
      { id: "services", label: "Hizmetler" },
      { id: "portfolio", label: "Referanslar" },
      { id: "process", label: "Süreç" },
      { id: "contact", label: "İletişim" },
    ],
    phone: "+90 5xx xxx xx xx",
    email: "info@an-teknik-cati.com",
  },

  hero: {
    title: "Dayanıklılık, Estetik ve Mükemmel Zanaat",
    subtitle:
      "AN Teknik Çatı; endüstriyel tesislerden modern konutlara kadar; membran, trapez, sandviç panel, çelik konstrüksiyon ve bakım onarım hizmetlerinde uzman ekiple yanınızda.",
    highlights: {
      customers: "100+ memnun müşteri",
      experience: "10+ yıl deneyim",
    },
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1600&auto=format&fit=crop",
  },

  trustBar: [
    "ASEL İnşaat",
    "Marmara Yapı",
    "İleri Tesisler",
    "Kuzey Enerji",
    "Anka Mimarlık",
  ],

  services: [
    {
      title: "Membran & PVC TPO Sistemleri",
      desc: "Yalıtım performansı yüksek, uzun ömürlü çatı membran uygulamaları.",
      icon: Shield,
    },
    {
      title: "Sandviç Panel & Trapez Kaplama",
      desc: "Endüstriyel tesisler için hız, dayanıklılık ve maliyet optimizasyonu.",
      icon: Building2,
    },
    {
      title: "Çelik Konstrüksiyon",
      desc: "Statik hesaplara uygun, güvenli ve estetik çatı taşıyıcı sistemleri.",
      icon: Wrench,
    },
    {
      title: "Bakım & Onarım",
      desc: "Sızdırmazlık, detay onarımları ve periyodik bakım hizmetleri.",
      icon: Home,
    },
  ],

  portfolio: {
    title: "Öne Çıkan Projeler",
    desc: "Son yıllarda teslim ettiğimiz seçili işlerden kareler.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  numbers: [
    { label: "Tamamlanan Proje", value: "350+" },
    { label: "Şehir", value: "20+" },
    { label: "Ekip Uzmanı", value: "40+" },
    { label: "Garanti Yılı", value: "5-10" },
  ],

  process: [
    {
      title: "Keşif & Analiz",
      text: "Saha ziyareti, ölçüm ve ihtiyaçların netleştirilmesi.",
    },
    {
      title: "Projelendirme",
      text: "Statik ve detay çizimleri, malzeme seçimi.",
    },
    { title: "Uygulama", text: "İş güvenliği odaklı, planlı ve şeffaf süreç." },
    {
      title: "Teslim & Garanti",
      text: "Kontrol, devreye alma ve garanti dokümantasyonu.",
    },
  ],

  testimonials: [
    {
      quote:
        "Zamanında teslim ve kusursuz detay çözümleri. Tesisimizin çatısı hiç bu kadar güvenli olmamıştı.",
      name: "Mert Y.",
      role: "Fabrika Müdürü",
    },
    {
      quote:
        "Ekip çok profesyonel. Keşiften teslimata kadar sürekli bilgilendirildik.",
      name: "Aylin K.",
      role: "Proje Yöneticisi",
    },
  ],

  contact: {
    title: "Projeniz için bugün konuşalım",
    desc: "24 saat içinde dönüş yapıyoruz. İstanbul ve çevre illerinde aynı gün keşif mümkün.",
  },
};
