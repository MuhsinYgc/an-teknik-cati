/**
 * Ana sayfa görselleri — yerel dosyalar (`public/images/home/`).
 * Orijinal stok görseller indirilerek sabitlendi; CDN / hotlink yok.
 */
const H = "/images/home";

export const roofMedia = {
  heroSlideshow: [
    `${H}/slide-a.jpg`,
    `${H}/slide-b.jpg`,
    `${H}/slide-c.jpg`,
  ],

  introSide: `${H}/intro.jpg`,

  /** Kurumsal 3 sütun vitrin */
  introShowcaseCenter: `${H}/intro.jpg`,
  introShowcaseRightTop: `${H}/stack-b.jpg`,

  roofNeedsStack: [`${H}/stack-a.jpg`, `${H}/stack-b.jpg`],

  featureSplits: {
    celik: `${H}/slide-b.jpg`,
    devrabond: `${H}/feat-devra.jpg`,
    membran: `${H}/feat-membran.jpg`,
  },

  serviceShowcase: [
    `${H}/feat-membran.jpg`,
    `${H}/svc-1.jpg`,
    `${H}/svc-2.jpg`,
    `${H}/svc-3.jpg`,
    `${H}/svc-4.jpg`,
    `${H}/slide-a.jpg`,
    `${H}/intro.jpg`,
    `${H}/slide-c.jpg`,
  ],

  portfolio: [
    `${H}/slide-a.jpg`,
    `${H}/slide-c.jpg`,
    `${H}/slide-b.jpg`,
    `${H}/feat-devra.jpg`,
    `${H}/port-5.jpg`,
    `${H}/svc-2.jpg`,
  ],

  ctaBackground: `${H}/cta-bg.jpg`,
} as const;
