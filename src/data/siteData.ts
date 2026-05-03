// data/siteData.ts — içerik AN Teknik Çatı markasına göre; sayfa yapısı referans çatı sitesi akışına paralel.
import { Shield, Building2, Wrench, Home } from "lucide-react";
import { roofMedia } from "./roofMedia";

export const siteData = {
  navbar: {
    brand: "AN Teknik Çatı",
    phone: "0539 480 88 68",
    phoneTel: "+905394808868",
    email: "info@anteknikcati.com",
    address:
      "2. Mahrukatçılar Cad., No:8A, Şazi Bey Mah., Onikişubat, Kahramanmaraş",
  },

  whatsapp: {
    href: "https://wa.me/905394808868",
  },

  mapStrip: {
    /** Şazi Bey mah. (OSM) — harita pini; gerekirse sokak seviyesinde güncellenebilir */
    officeCoords: { lat: 37.5713469, lng: 36.9217295 },
    mapDefaultZoom: 16,
    mapMinZoom: 16,
    cards: [
      {
        title: "Adres",
        body: "2. Mahrukatçılar Cad., No:8A, Şazi Bey Mah., Onikişubat, Kahramanmaraş",
        footer: "Kahramanmaraş / Türkiye",
        icon: "home" as const,
      },
      {
        title: "Hızlı Teklif Alın",
        body: "Fiyat mı öğrenmek istiyorsunuz?",
        footer: "info@anteknikcati.com",
        icon: "mail" as const,
      },
      {
        title: "Hemen Ara",
        body: "Size Bir Telefon Kadar Yakınız!",
        footer: "0539 480 88 68",
        icon: "phone" as const,
      },
    ],
  },

  serviceMenu: [
    { label: "Sandviç Panel Çatı", anchor: "hizmetler" },
    { label: "Çelik Konstrüksiyon Çatılar", anchor: "svc-celik" },
    { label: "Devrabond Çatı", anchor: "svc-devrabond" },
    { label: "Alüminyum Kenet Çatı", anchor: "hizmetler" },
    { label: "Membran Çatı", anchor: "svc-su-yalitim" },
    { label: "Çatı Kaplama Shingle", anchor: "hizmetler" },
    { label: "Çatı Yalıtımı", anchor: "hizmetler" },
    { label: "OSB Montajı", anchor: "hizmetler" },
    { label: "Su Yalıtımı Membran Uygulamaları", anchor: "svc-su-yalitim" },
  ],

  hero: {
    titleLine1: "Dayanıklı ve Estetik",
    titleLine2: "Çatılar",
    subtitle:
      "Profesyonel çatı uygulama hizmetleri sayesinde, binanızı hem koruyabilir hem de estetik olarak göz alıcı hale getirebilirsiniz.",
    slideshow: [...roofMedia.heroSlideshow],
    quickTags: [
      "Çatı yapımı",
      "Çatı tamiri",
      "Çatı yenileme",
      "Çatı izolasyonu",
      "Çelik konstrüksiyon çatı",
      "Çatı su yalıtımı",
      "Membran uygulaması",
    ],
  },

  intro: {
    sideImage: roofMedia.introSide,
    blocks: [
      {
        title: "Uzman Çatı Uygulamaları ile Güvenli Yapılar !",
        body:
          "Profesyonel çatı uygulama hizmetleri sayesinde, binanızı hem koruyabilir hem de estetik olarak göz alıcı hale getirebilirsiniz.",
      },
      {
        title: "Çatı Uygulamaları Her Detayıyla  Mükemmel Çatılar",
        body:
          "Profesyonel çatı sistemleri ile binanızı uzun yıllar güvenle kullanabilirsiniz!",
      },
    ],
    bullets: [
      "Çatı Sistemlerinin Önemi ve Yapıya Etkisi",
      "Çelik Konstrüksiyon Çatı: Dayanıklı ve Hafif Çözümler",
      "OSB Montajı: Sağlam ve Dayanıklı Alt Yapı",
    ],
    /** Ana vitrin (3 sütun) — görseller `roofMedia` */
    showcase: {
      leftHeadline: "Çatı Uygulamaları Her Detayıyla Mükemmel Çatılar",
      leftLead:
        "Profesyonel çatı sistemleri ile binanızı yağmur, kar, rüzgâr ve güneşe karşı korursunuz; ısı ve ses konforu artar, yapı ömrü uzar.",
      points: [
        "Çatı taşıyıcı, eğim ve kaplama uyumu ile güvenli davranış",
        "Su yalıtımı ve detay çözümlerinde sızdırmazlık odaklı uygulama",
        "Malzeme seçimi ve işçilikte standartlara uygun saha disiplini",
        "Teslim, dokümantasyon ve bakım önerileriyle sürdürülebilir performans",
      ],
      ctaStripTitle: "Uzman Çatı Uygulamaları ile Güvenli Yapılar",
      rightTitle: "Doğallığın Gücü Ahşap Kereste ile Sağlam Çatı İskeleti",
      rightBody:
        "Çatı iskeletinde doğru kereste, bağlantı ve koruma detayları; yük taşıma ve ömür açısından belirleyicidir. Projelerinizde doğru kesit ve detaylarla uzun ömürlü bir alt yapı sunuyoruz.",
      images: {
        center: roofMedia.introShowcaseCenter,
        rightTop: roofMedia.introShowcaseRightTop,
      },
    },
  },

  experience: {
    value: 15,
    suffix: "+",
    label: "Yıllık Tecrübe",
  },

  featureSplits: [
    {
      id: "svc-celik",
      eyebrow: "Endüstriyel ve konut",
      title: "Çelik Konstrüksiyon Çatılar",
      desc:
        "Paslanmaz ve yangına dayanıklı özellikleriyle endüstriyel ve konut projelerinde sıklıkla tercih edilir. Modern yapılar için en ideal çatı taşıyıcı sistemler",
      bullets: [
        "Depreme dayanıklı",
        "Yangına dayanıklı",
        "Hafif ve kolay monte edilir.",
        "Uzun ömürlüdür ve bakım gerektirmez.",
      ],
      image: roofMedia.featureSplits.celik,
      reverse: false,
    },
    {
      id: "svc-devrabond",
      eyebrow: "Hafif, Dayanıklı ve Ekonomik Çözüm",
      title: "Devrabond Çatı",
      desc:
        "Günümüzde yapıların çatısında hem estetik hem de fonksiyonel çözümler sunan Devrabond çatı sistemleri, su yalıtımı, dayanıklılık ve kolay montaj özellikleriyle ön plana çıkıyor.",
      bullets: [
        "Doğal ve estetik bir görünüme sahiptir.",
        "Uygun bakım yapıldığında uzun ömürlüdür.",
      ],
      image: roofMedia.featureSplits.devrabond,
      reverse: true,
    },
    {
      id: "svc-su-yalitim",
      eyebrow: "Çatılarda Maksimum Koruma",
      title: "Su Yalıtımı Membran Uygulama",
      desc:
        "Membran uygulamaları, çatılarda maksimum koruma sağlayarak suyun yapıya zarar vermesini engeller.",
      bullets: [
        "Nem ve küf oluşumunu engeller.",
        "Bina ömrünü uzatır.",
        "Enerji tasarrufu sağlar.",
      ],
      image: roofMedia.featureSplits.membran,
      reverse: false,
    },
  ],

  serviceShowcase: [
    {
      title: "Membran Çatı",
      teaser: "Membran Çatı Sistem Uygulamasında;",
      image: roofMedia.serviceShowcase[0],
      target: "svc-su-yalitim",
    },
    {
      title: "Devrabond Çatı",
      teaser: "Hafif, dayanıklı ve ekonomik çatı kaplama çözümü.",
      image: roofMedia.serviceShowcase[1],
      target: "svc-devrabond",
    },
    {
      title: "Çatı Kaplama Shingle",
      teaser: "Pergole Çatı Kaplama Shingle,",
      image: roofMedia.serviceShowcase[2],
      target: "hizmetler",
    },
    {
      title: "OSB montajı",
      teaser: "Sağlam ve Dayanıklı Alt Yapı",
      image: roofMedia.serviceShowcase[3],
      target: "hizmetler",
    },
    {
      title: "Alüminyum Kenet Çatı",
      teaser: "Paslanmaz ve bakım gerektirmez",
      image: roofMedia.serviceShowcase[4],
      target: "hizmetler",
    },
    {
      title: "Çatı Yalıtımı",
      teaser: "Enerji Tasarrufu ve Uzun Ömürlü Koruma",
      image: roofMedia.serviceShowcase[5],
      target: "hizmetler",
    },
    {
      title: "Sandviç Panel Çatı",
      teaser: "Dayanıklı, Estetik ve Ekonomik Çözüm",
      image: roofMedia.serviceShowcase[6],
      target: "hizmetler",
    },
    {
      title: "Çelik Konstrüksiyon",
      teaser: "Endüstriyel ve konut projelerinde güvenli taşıyıcı sistem.",
      image: roofMedia.serviceShowcase[7],
      target: "svc-celik",
    },
  ],

  roofNeeds: {
    stackImages: [...roofMedia.roofNeedsStack],
    title: "Projeniz için nasıl bir çatıya ihtiyacınız var",
    subtitle:
      "En iyi olduğumuz konu olan çatı kaplama çözümlerimiz, zorlu İskandinav iklimi için geliştirildiğinden dolayı çok yüksek kalite standartlarına sahiptir.",
    cards: [
      {
        title: "Açıkta Kalan Çatı Sistemleri",
        text:
          "Çevresel etkilere direkt açık olacak şekilde tasarladığı tek kat olarak uygulanan çatı membranları kaliteli ve uzun ömürlüdür. Her türlü iklime dayanıklı, teknik olarak güvenilir ve sürdürülebilir sistemlerdir.",
      },
      {
        title: "Yeşil Çatılar",
        text:
          "Yeşil çatılar, özellikle çatı kullanımının önemli olduğu yoğun nüfuslu kentsel alanlarda giderek daha popüler hale geliyor. Yeşil alanlar ve çatı terasları, hem inşaat firmaları hem de binalarda yaşayanlar için bir değer artışı sağlıyor.",
      },
      {
        title: "Tasarım Çatılar",
        text:
          "Tasarım çatı kaplamalarını kullanan mimarlar ve inşaatçılar, dayanıklılık, sağlamlık ve ekolojik sorumluluklardan ödün vermeksizin tasarımlarında esnek olabilir ve ortaya çıkan görsellikten keyif alabilirler.",
      },
    ],
  },

  repair: {
    title: "Çatı Onarımı",
    text:
      "Bir çatının ömrü birkaç faktöre bağlıdır. Kontrol ve bakım, ürün kalitesi ve uygulanması kadar çok önemlidir.",
    cta: "İletişim",
  },

  guide: {
    title: "Dayanıklı ve Uzun Ömürlü Çatılar İçin Uygulama Rehberi",
    tabs: [
      {
        key: "golden",
        label: "Sağlam Bir Yapı İçin Altın Kurallar",
        sections: [
          {
            heading: "Çatı Uygulamaları",
            body:
              "Çatı uygulamaları, bir yapının en önemli savunma hattıdır. Yağmur, kar, rüzgar, güneş ve diğer dış etkenlere karşı binayı koruyan bu sistemin doğru şekilde planlanıp uygulanması, hem yapı güvenliği hem de konfor açısından büyük önem taşır.",
          },
          {
            heading: "Doğru Malzeme Seçimi",
            body:
              "Her çatı tipi, bulunduğu bölgenin iklim şartlarına göre farklı malzeme gerektirir. Kar yağışının yoğun olduğu bölgelerde sağlam taşıyıcı sistemler; sıcak bölgelerde ise UV ışınlarına dayanıklı kaplamalar tercih edilmelidir. Şıngıl, sandviç panel, membran gibi malzemelerin kalitesi ve özellikleri mutlaka göz önünde bulundurulmalıdır.",
          },
          {
            heading: "Eğimin Doğru Hesaplanması",
            body:
              "Çatı eğimi, yağmur ve kar sularının hızlıca tahliye edilmesi için hayati öneme sahiptir. Yetersiz eğimli çatılarda su birikmesi yaşanabilir, bu da zamanla çatı yalıtımına zarar vererek su sızıntılarına neden olabilir. Bu yüzden proje aşamasında eğim hesapları profesyonelce yapılmalıdır.",
          },
          {
            heading: "Yalıtım Katmanları İhmal Edilmemeli",
            body:
              "Çatının sadece dış etkenlere karşı değil, aynı zamanda ısı kaybı ve nemlenme gibi içsel sorunlara karşı da koruma sağlaması gerekir. Isı yalıtımı (taş yünü, strafor, EPS vb.), su yalıtımı (membran, sürme esaslı izolasyon) ve ses yalıtımı bir bütün olarak düşünülmelidir.",
          },
          {
            heading: "Usta İşçilik ve Profesyonel Ekip",
            body:
              "En kaliteli malzemeyi bile tercih etseniz, uygulamada hata yapılırsa çatının ömrü kısalır. Bu yüzden işin ehli, deneyimli ustalar ve mühendislik altyapısı olan firmalarla çalışmak büyük fark yaratır. Doğru montaj, detay çözümleri ve sızdırmazlık uygulamaları profesyonel yaklaşım gerektirir.",
          },
        ],
      },
      {
        key: "compare",
        label: "Çelikten Şıngıla: Tüm Çatı Uygulama Türlerini Karşılaştırdık",
        sections: [
          {
            heading: "Çelikten Şıngıla: Tüm Çatı Uygulama",
            body:
              "Evinizin ya da iş yerinizin çatısı sadece yağmurdan korumakla kalmaz; aynı zamanda yalıtım, dayanıklılık ve estetik açıdan da hayati bir rol üstlenir. Çelik konstrüksiyon, şıngıl, sandviç panel ve membran çözümleri proje ihtiyacına göre değerlendirilir.",
          },
          {
            heading: "Şıngıl Çatı: Hafif ve Estetik Kaplama",
            body:
              "Shingle (Şıngıl) Çatı Hafiftir, çatılarda fazla yük oluşturmaz. Renk ve desen çeşitliliği ile modern görünüm sağlar. OSB üzerine doğrudan uygulanabilir. Uzun ömür için kaliteli malzeme şarttır. Rüzgar ve UV ışınlarına karşı dayanıklı şıngıllar tercih edilmelidir.",
          },
          {
            heading: "Sandviç Panel Çatı: Isı Yalıtımı İçin Kompakt Çözüm",
            body:
              "Isı ve ses yalıtımı çok yüksektir. Uygulaması hızlı ve montajı pratiktir. Sanayi tesisleri, depolar ve prefabrik yapılarda idealdir. Görsel açıdan her projeye uygun olmayabilir. Ucuz paneller yalıtım performansı açısından yetersiz olabilir.",
          },
          {
            heading: "Devrabond ve Hafif Kaplamalar",
            body:
              "Devrabond çatı sistemleri; su yalıtımı, dayanıklılık ve kolay montaj özellikleriyle ön plana çıkar. Konut ve yardımcı yapılarda ekonomik ve hızlı çözüm sunar.",
          },
        ],
      },
      {
        key: "membrane",
        label: "Suya Karşı %100 Koruma: Membran ve Çatı Yalıtım Sistemleri",
        sections: [
          {
            heading: "Suya Karşı %100 Koruma",
            body:
              "Yağmur, kar, rüzgâr ve zamanın yıpratıcı etkilerine karşı yapınızı korumanın en etkili yolu doğru çatı yalıtım sistemlerinden geçer. Özellikle membran uygulamaları, çatılarda suya karşı tam koruma sağlar.",
          },
          {
            heading: "Membran Nedir? Çatı Yalıtımında Neden Tercih Edilir?",
            body:
              "Membran, su geçirmezliği maksimum seviyeye çıkaran özel malzemelerdir. Esnek yapısı, uzun ömürlü performansı ve uygulama kolaylığı ile çatılarda su yalıtımı denince akla ilk gelen sistemdir. Hem yatay hem de eğimli çatılarda etkili çözümler sunar.",
          },
          {
            heading: "Membran Çeşitleri Nelerdir? Hangi Yapıya Hangi Membran?",
            body:
              "Bitümlü membran genellikle sıcak uygulama ile yapılır; iki kat uygulanarak ekstra koruma sağlar; ek yerlerinden dahi su sızdırmaz. PVC membran kimyasal dayanımı yüksektir; endüstriyel çatılarda sık tercih edilir; UV dayanımı güçlüdür. EPDM membran kauçuk esasındadır; uzun ömürlü, elastik ve esnek yapısıyla bilinir.",
          },
        ],
      },
      {
        key: "winter",
        label: "Kışa Hazır Olun: Isı Yalıtımlı Çatı Uygulamaları",
        sections: [
          {
            heading: "Kışa Hazır Olun",
            body:
              "Kış aylarında evinizin içini sıcacık tutmanın en etkili yolu, çatıdan başlar. Doğru uygulanan ısı yalıtımlı çatı sistemleri sayesinde hem konforu artırır hem de enerji faturalarınızı düşürebilirsiniz.",
          },
          {
            heading: "Neden Isı Yalıtımı Şart? Kışın Çatılarda Karşılaşılan Sorunlar",
            body:
              "Isı Kaybı: Isıtılan havanın %30’a yakını yalıtımsız çatıdan kaçar. Yoğuşma ve Nem Sorunu: Isı yalıtımı yapılmayan çatılarda nem birikir, bu da küf ve rutubet oluşumuna neden olur. Enerji İsrafı: Kombi ya da kalorifer sistemleri daha çok çalışır, enerji maliyetleri artar.",
          },
          {
            heading: "Uzmanından Tavsiye: Doğru Malzeme + Doğru Uygulama = Maksimum Performans",
            body:
              "Isı yalıtımı sadece malzeme seçimiyle değil, doğru uygulamayla da başarıya ulaşır. Profesyonel bir ekip tarafından yapılan yalıtım, hem performans hem de estetik açıdan yıllarca sorunsuz hizmet verir.",
          },
        ],
      },
    ],
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
    title: "Projelerimiz",
    desc: "Tamamladığımız çatı uygulama ve kaplama projelerinden seçili kareler.",
    items: [
      {
        src: roofMedia.portfolio[0],
        title: "Planlama ve saha koordinasyonu",
        category: "Kurumsal",
      },
      {
        src: roofMedia.portfolio[1],
        title: "Modern konut çatı çözümleri",
        category: "Konut",
      },
      {
        src: roofMedia.portfolio[2],
        title: "Villa ve teras çatı uygulamaları",
        category: "Konut",
      },
      {
        src: roofMedia.portfolio[3],
        title: "Endüstriyel tesis çatı & membran",
        category: "Endüstriyel",
      },
      {
        src: roofMedia.portfolio[4],
        title: "Cephe detay ve kompozit kaplama",
        category: "Ticari",
      },
      {
        src: roofMedia.portfolio[5],
        title: "Karma kullanımlı yapı çatıları",
        category: "Konut",
      },
    ],
  },

  numbers: [
    {
      label: "Tamamlanan Proje",
      value: "350+",
      countEnd: 350,
      countSuffix: "+",
      icon: "projects" as const,
    },
    {
      label: "Şehir",
      value: "20+",
      countEnd: 20,
      countSuffix: "+",
      icon: "cities" as const,
    },
    {
      label: "Ekip Uzmanı",
      value: "40+",
      countEnd: 40,
      countSuffix: "+",
      icon: "team" as const,
    },
    {
      label: "Garanti Yılı",
      value: "5–10",
      icon: "warranty" as const,
    },
  ],

  process: [
    {
      title: "Keşif & Analiz",
      text:
        "Uzman ekibimiz sahada ölçüm alır, mevcut taşıyıcı ve kaplama durumunu kayıt altına alır ve riskleri net biçimde raporlar. Böylece teklif ve uygulama planı sürprizsiz ilerler.",
      bullets: [
        "Ön görüşme ve keşif randevusu",
        "Detaylı ölçüm, fotoğraf ve video kayıt",
        "Mevcut yalıtım / sızdırmazlık tespiti",
        "Ön maliyet ve süre çerçevesi",
      ],
    },
    {
      title: "Projelendirme",
      text:
        "Seçilen çatı sistemine göre uygulama detayları, malzeme listesi ve iş programı hazırlanır. Statik ve mimari gerekliliklerle uyum, montaj sırası ve eklemler netleştirilir.",
      bullets: [
        "Uygulama projesi ve kesit / detaylar",
        "Malzeme marka ve sistem seçimi",
        "İş kalemleri ve takvim",
        "Onaylı keşif ve teklif formu",
      ],
    },
    {
      title: "Uygulama",
      text:
        "İş güvenliği prosedürleri, günlük saha disiplini ve şeffaf ilerleme ile uygulama yürütülür. Kalite kontrol noktaları ve ekip şefi iletişimi süreç boyunca açıktır.",
      bullets: [
        "İSG, iskele ve emniyet önlemleri",
        "Aşamalı kalite kontrolleri",
        "Saha şefi ile doğrudan iletişim hattı",
        "Temiz saha ve çevre koruma",
      ],
    },
    {
      title: "Teslim & Garanti",
      text:
        "Son görsel ve sızdırmazlık kontrolleri, fotoğraflı teslim tutanağı ve yazılı garanti ile süreç kapanır. İsterseniz periyodik bakım ve kontrol önerileri de paylaşılır.",
      bullets: [
        "Sızdırmazlık ve görsel son kontrol",
        "Fotoğraflı teslim tutanağı",
        "Garanti ve kullanım dokümantasyonu",
        "Bakım / kontrol hatırlatması",
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "Zamanında teslim ve kusursuz detay çözümleri. Yalıtım ve aktarma hatlarında bile sorunsuz çalıştılar; tesisimizin çatısı hiç bu kadar güvenli olmamıştı.",
      name: "Mert Y.",
      role: "Fabrika Müdürü",
      company: "Gıda üretimi",
      rating: 5,
    },
    {
      quote:
        "Ekip çok profesyonel. Keşiften teslimata kadar sürekli bilgilendirildik; hiçbir sürpriz maliyet çıkmadı. Şantiye koordinasyonu mükemmeldi.",
      name: "Aylin K.",
      role: "Proje Yöneticisi",
      company: "Endüstriyel yatırım",
      rating: 5,
    },
    {
      quote:
        "Membran yenileme işinde hem hızlı hem titizler. Yağmur ve kar yükünde bile sızdırmazlık sorunu yaşamadık; garanti süreci de şeffaf ve yazılı.",
      name: "Burak T.",
      role: "İnşaat Mühendisi",
      company: "Konut projesi",
      rating: 5,
    },
    {
      quote:
        "Çelik konstrüksiyon ve sandviç panel uygulamasında statik raporlarla uyumlu ilerlediler. İş güvenliği ve şantiye düzeni gerçekten örnek seviyede.",
      name: "Selin A.",
      role: "Teknik Müdür",
      company: "Lojistik depo",
      rating: 5,
    },
    {
      quote:
        "Periyodik bakım planıyla çatımızı proaktif takip ediyorlar. Küçük çatlakları zamanında yakalayıp büyük onarım maliyetinden kurtardılar.",
      name: "Emre D.",
      role: "Tesis Amiri",
      company: "Sağlık kampüsü",
      rating: 4,
    },
    {
      quote:
        "AVM çatısındaki drenaj ve parapet detaylarında kusursuz iş çıkardılar. Gece çalışma ve çevre koordinasyonunu bizim yerimize profesyonelce yürüttüler.",
      name: "Zeynep M.",
      role: "İşletme Müdürü",
      company: "Perakende",
      rating: 5,
    },
  ],

  contact: {
    title: "Projeniz için bugün konuşalım",
    desc: "24 saat içinde dönüş yapıyoruz. Kahramanmaraş ve çevre illerde keşif ve uygulama desteği sunuyoruz.",
  },

  footer: {
    quick: [
      { label: "Kurumsal", anchor: "kurumsal" },
      { label: "Hizmetlerimiz", anchor: "hizmetler" },
      { label: "Projeler", anchor: "projeler" },
      { label: "İletişim", anchor: "iletisim" },
    ],
    serviceLinks: [
      { label: "Çelik konstrüksiyon çatılar", anchor: "svc-celik" },
      { label: "Devrabond çatı", anchor: "svc-devrabond" },
      { label: "Su yalıtımı membran", anchor: "svc-su-yalitim" },
      { label: "Sandviç panel çatı", anchor: "hizmetler" },
      { label: "Alüminyum kenet çatı", anchor: "hizmetler" },
    ],
    legal: [
      { label: "Gizlilik Politikası", href: "#" },
      { label: "Şartlar ve Koşullar", href: "#" },
    ],
  },
};

export type SiteData = typeof siteData;
