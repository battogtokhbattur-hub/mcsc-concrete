"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

interface ContentItem {
  id: number;
  title: string;
  content: string;
  image: string | null;
  section: string;
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5000";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<ContentItem[]>([]);

  // backend-ээс about хэсгийн өгөгдөл авах
  const fetchAboutContents = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/contents?section=about`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Fetch failed");
      const data: ContentItem[] = await res.json();
      setAboutData(data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchAboutContents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="mx-auto flex max-w-5xl flex-wrap items-center gap-7 px-4 pt-6 pb-8 md:flex-nowrap md:pt-10">
        <div className="min-w-[280px] flex-1">
          <p className="mb-1 text-[12px] uppercase tracking-[0.22em] text-orange-500">
            БЕТОН ЗУУРМАГИЙН ҮЙЛДВЭР
          </p>
          <h1 className="mb-2 text-[28px] font-semibold leading-tight md:text-[32px]">
            MCSC Concrete – таны төслийн{" "}
            <span className="text-orange-500">найдвартай бетон түнш</span>
          </h1>
          <p className="mb-3 text-[14px] leading-relaxed text-gray-600">
            Цагт 120 м³ хүчин чадалтай бүрэн автомат үйлдвэр, GPS хяналттай
            миксерийн парк, лабораторийн чанарын хяналтаар таны төслийг
            хугацаанд нь, стандартын дагуу гүйцэтгэхэд тусална.
          </p>
          <ul className="mb-4 list-disc pl-5 text-[13px] text-gray-700">
            <li>24/7 захиалга, хүргэлтийн боломжтой миксерийн парк</li>
            <li>M100–M500 хүртэл бүх төрлийн бетон – шоо сорьц, протоколтой</li>
            <li>Төслийн инженерүүдтэй шууд харилцах зөвлөх үйлчилгээ</li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/online-tootsoolol"
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-orange-500/40 bg-linear-to-r from-orange-500 via-orange-400 to-orange-300 transition-transform hover:-translate-y-px"
            >
              Онлайн бетон тооцоолуур
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-[14px] font-medium text-gray-900 hover:border-gray-400 transition-colors"
            >
              Компанийн тухай
            </Link>
          </div>
        </div>

        {/* RIGHT – видео */}
        <div className="relative min-w-[280px] flex-1 overflow-hidden rounded-2xl bg-black shadow-2xl shadow-slate-900/70">
          <div className="relative pb-[56.25%]">
            <iframe
              src={heroVideoUrl}
              title="Үйлдвэрийн танилцуулга видео"
              className="absolute inset-0 h-full w-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute bottom-2 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-100">
            Танилцуулга видеоны линкийг өөрийн YouTube / Vimeo линкээр солино
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - dynamic content from backend */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Компанийн тухай
        </h2>

        {aboutData.length === 0 ? (
          <p className="text-center text-gray-500">
            Админ хэсгээс мэдээлэл нэмэгдээгүй байна.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {aboutData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border shadow-md p-5"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-3 whitespace-pre-line">
                  {item.content}
                </p>
                {item.image && (
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={`${API_BASE}${item.image}`}
                      alt={item.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
