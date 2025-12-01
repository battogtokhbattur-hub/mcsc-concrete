"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
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

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[#444]">
          <Link href="/">Нүүр</Link>
          <Link href="/about">Компанийн тухай</Link>
          <Link href="/products">Бүтээгдэхүүн</Link>
          <Link href="/services">Үйлчилгээ</Link>
          <Link href="/projects">Төслүүд</Link>
          <Link href="/news">Мэдээ мэдээлэл</Link>
          <Link href="/online-tootsoolol">Онлайн тооцоолуур</Link>
        </nav>

        {/* CONTACT BUTTON */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-md bg-[#0b4f7d] px-5 py-2 
          text-[12px] font-semibold text-white hover:bg-[#094262]"
        >
          Холбоо барих
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-[15px] font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Нүүр</Link>
            <Link href="/about" onClick={() => setOpen(false)}>Компанийн тухай</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Бүтээгдэхүүн</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Үйлчилгээ</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Төслүүд</Link>
            <Link href="/news" onClick={() => setOpen(false)}>Мэдээ мэдээлэл</Link>
            <Link href="/online-tootsoolol" onClick={() => setOpen(false)}>Онлайн тооцоолуур</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-[#0b4f7d] text-white text-center py-2 rounded-lg"
            >
              Холбоо барих
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
