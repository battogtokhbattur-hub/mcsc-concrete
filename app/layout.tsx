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

import "./globals.css";
export const metadata: Metadata = {
  title: "MCSC | Бетон зуурмагийн үйлдвэр",
  description: "Бетон зуурмаг, үйлчилгээ, төсөл",
};
// Social линкүүдээ энд солино
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
        {/* --- HEADER --- */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            {/* LOGO (зүүн) */}
            <Link href="/" className="flex items-center">
              <Image
                src="/mcsc-logo.png"
                alt="MCSC Logo"
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            {/* NAV (гол) */}
            <nav className="hidden items-center gap-10 text-[13px] font-medium text-[#444] md:flex">
              <Link href="/" className="hover:text-[#0b4f7d]">Нүүр</Link>
              <Link href="/about" className="hover:text-[#0b4f7d]">Компанийн тухай</Link>
              <Link href="/products" className="hover:text-[#0b4f7d]">Бүтээгдэхүүн</Link>
              <Link href="/services" className="hover:text-[#0b4f7d]">Үйлчилгээ</Link>
              <Link href="/projects" className="hover:text-[#0b4f7d]">Төслүүд</Link>
              <Link href="/news" className="hover:text-[#0b4f7d]">Мэдээ мэдээлэл</Link>
              <Link href="/online-tootsoolol" className="hover:text-[#0b4f7d]">Онлайн тооцоолуур</Link>
            </nav>
            {/* CONTACT (баруун) */}
            <Link
              href="/contact"
              className="hidden rounded-md bg-[#0b4f7d] px-5 py-2 text-[12px] font-semibold text-white transition hover:bg-[#094262] md:inline-block"
            >
              Холбоо барих
            </Link>
          </div>
        </header>
        {/* MAIN */}
        <main>{children}</main>
        {/* --- FOOTER (нарийхан, socials + 3 багана) --- */}
        <footer className="mt-10 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid items-start gap-6 md:grid-cols-[auto_1fr_1fr_1fr]">
              {/* SOCIALS — зүүн тал */}
              <div className="flex items-center justify-center gap-3 md:justify-start">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-7 w-7 place-items-center rounded-full bg-black text-white transition hover:bg-[#0b4f7d]"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
              {/* ЦЭС */}
              <div className="text-center text-[12px] leading-5 text-gray-700 md:text-left">
                <h4 className="mb-1 font-semibold">ЦЭС</h4>
                <ul className="space-y-0.5">
                  <li>
                    <Link href="/business/concrete" className="hover:text-[#0b4f7d]">
                      Бетон зуурмаг
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/rental" className="hover:text-[#0b4f7d]">
                      Түрээс үйлчилгээ
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[#0b4f7d]">
                      Төслүүд
                    </Link>
                  </li>
                </ul>
              </div>
              {/* БАЙРШИЛ */}
              <div className="text-center text-[12px] leading-5 text-gray-700 md:text-left">
                <h4 className="mb-1 font-semibold">БАЙРШИЛ</h4>
                <ul className="space-y-0.5">
                  <li>Төв офис: Улаанбаатар</li>
                  <li>Үйлдвэр: Сонгинохайрхан</li>
                </ul>
              </div>
              {/* ХОЛБОО БАРИХ */}
              <div className="text-center text-[12px] leading-5 text-gray-700 md:text-left">
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
