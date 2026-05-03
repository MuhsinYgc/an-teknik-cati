import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "AN Teknik Çatı – Çatı Kaplama Sistemleri – Çatı İzolasyon ve Yalıtım – Çatı Tadilat ve Bakım – Endüstriyel ve Hafif Çelik Çatı Sistemleri",
    template: "%s | AN Teknik Çatı",
  },
  description:
    "Çatı yapımı, çatı tamiri, çatı yenileme, çatı izolasyonu, çelik konstrüksiyon çatı, çatı su yalıtımı ve membran uygulamalarında profesyonel hizmet.",
  icons: {
    icon: [{ url: "/brand/1-06.jpg", type: "image/jpeg" }],
    apple: [{ url: "/brand/1-06.jpg", type: "image/jpeg" }],
    shortcut: "/brand/1-06.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
