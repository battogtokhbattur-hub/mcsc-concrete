import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

import Header from "./components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "MCSC | Бетон зуурмагийн үйлдвэр",
  description: "Бетон зуурмаг, үйлчилгээ, төсөл",
};

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/amarsanaa.battsengel", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/amaraa_006/", Icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com/@YOUR_USERNAME", Icon: FaYoutube },
  { label: "TikTok", href: "https://www.tiktok.com/@amkamaraa?lang=en", Icon: FaTiktok },
  { label: "Gmail", href: "mailto:amarsanaa@gmail.com", Icon: FaEnvelope },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <body className="min-h-screen bg-white font-sans text-gray-800">

        {/* HEADER */}
        <Header />

        {/* offset */}
        <div className="h-20"></div>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid items-start gap-6 md:grid-cols-[auto_1fr_1fr_1fr]">

              {/* SOCIALS */}
              <div className="flex items-center justify-center gap-3 md:justify-start">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    className="grid h-7 w-7 place-items-center rounded-full bg-black text-white hover:bg-[#0b4f7d]"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>

              <div className="text-center text-[12px] md:text-left">
                <h4 className="mb-1 font-semibold">ЦЭС</h4>
                <ul className="space-y-0.5">
                  <li><Link href="/business/concrete">Бетон зуурмаг</Link></li>
                  <li><Link href="/services/rental">Түрээс үйлчилгээ</Link></li>
                  <li><Link href="/projects">Төслүүд</Link></li>
                </ul>
              </div>

              <div className="text-center text-[12px] md:text-left">
                <h4 className="mb-1 font-semibold">БАЙРШИЛ</h4>
                <ul className="space-y-0.5">
                  <li>Төв офис: Улаанбаатар</li>
                  <li>Үйлдвэр: Сонгинохайрхан</li>
                </ul>
              </div>

              <div className="text-center text-[12px] md:text-left">
                <h4 className="mb-1 font-semibold">ХОЛБОО БАРИХ</h4>
                <ul className="space-y-0.5">
                  <li>Гар утас: 99912437</li>
                  <li>Office утас: 70421437</li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
