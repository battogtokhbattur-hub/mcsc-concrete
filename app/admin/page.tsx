"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SectionKey = "business" | "about" | "contact" | "news";

interface ContentItem {
  id: number;
  section: SectionKey;
  title: string;
  content: string;
  image: string | null;
}

interface FormState {
  id?: number;
  title: string;
  content: string;
  image: File | null;
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:5000"; // ✅ IPv4 хэрэглэсэн

export default function AdminPage() {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [section, setSection] = useState<SectionKey>("about");
  const [form, setForm] = useState<FormState>({
    title: "",
    content: "",
    image: null,
  });
  const [message, setMessage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // === FETCH ALL CONTENTS ===
  const fetchContents = async (): Promise<void> => {
    try {
      const res = await fetch(`${API_BASE}/api/contents`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store", // ✅ Next.js SSR кэш болиулна
        next: { revalidate: 0 }, // ✅ Revalidation болиулна
      });

      if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
      const data: ContentItem[] = await res.json();
      setContents(data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setMessage("⚠️ Сервертэй холбогдож чадсангүй.");
    }
  };

  // === SAVE (CREATE or UPDATE) ===
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("section", section);
      if (form.image) formData.append("image", form.image);

      const url = form.id
        ? `${API_BASE}/api/contents/${form.id}`
        : `${API_BASE}/api/contents`;

      const method = form.id ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) {
        const text = await res.text();
        throw new Error("Save failed: " + text);
      }

      setMessage(form.id ? "✏️ Амжилттай засагдлаа" : "✅ Амжилттай нэмэгдлээ");
      setForm({ title: "", content: "", image: null, id: undefined });
      await fetchContents();
    } catch (err) {
      console.error(err);
      setMessage("❌ Алдаа гарлаа (хадгалах боломжгүй байна).");
    }
  };

  // === DELETE ===
  const handleDelete = async (id: number) => {
    if (!confirm("Энэ мэдээллийг устгах уу?")) return;
    try {
      await fetch(`${API_BASE}/api/contents/${id}`, {
        method: "DELETE",
      });
      await fetchContents();
    } catch (err) {
      console.error(err);
      setMessage("❌ Устгах үед алдаа гарлаа.");
    }
  };

  // === EDIT ===
  const handleEdit = (item: ContentItem) => {
    setForm({
      id: item.id,
      title: item.title,
      content: item.content,
      image: null,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchContents();
  }, [section]); // ✅ tab солигдоход дахин ачаална

  // === RENDER ===
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl mb-4 font-semibold">{section} хэсгийн агуулга</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["business", "about", "contact", "news"] as SectionKey[]).map(
          (tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded text-sm font-medium ${
                section === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => {
                setSection(tab);
                setMessage("");
                setForm({ title: "", content: "", image: null, id: undefined });
              }}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* FORM */}
      <div className="space-y-4 border-b pb-6">
        <div>
          <label className="block mb-1 text-sm font-medium">Гарчиг</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 text-sm"
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Тайлбар</label>
          <textarea
            className="w-full border rounded px-3 py-2 text-sm min-h-[120px]"
            value={form.content}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Зураг нэмэх (сонголттой)
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setForm((prev) => ({ ...prev, image: file }));
              }}
            />
            <button
              type="button"
              className="bg-blue-500 text-white rounded px-4 py-2 text-sm hover:bg-blue-600"
              onClick={() => fileInputRef.current?.click()}
            >
              Файл сонгох
            </button>
            <span className="text-[13px] text-gray-600">
              {form.image ? form.image.name : "Файл сонгогдоогүй"}
            </span>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white rounded px-5 py-2 text-sm font-semibold hover:bg-blue-700"
        >
          {form.id ? "Засах" : "Хадгалах"}
        </button>

        {message && (
          <p
            className={`mt-3 text-sm ${
              message.startsWith("✅") || message.startsWith("✏️")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* LIST */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3 text-sm">
          Одоогийн хадгалсан агуулга ({section}):
        </h3>
        {contents.filter((c) => c.section === section).length === 0 && (
          <p className="text-sm text-gray-500">
            Энэ хэсэгт агуулга байхгүй байна.
          </p>
        )}
        <ul className="space-y-3">
          {contents
            .filter((c) => c.section === section)
            .map((item) => (
              <li
                key={item.id}
                className="border rounded p-3 bg-white shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {item.content}
                  </p>
                  {item.image && (
                    <div className="relative mt-2 w-[150px] h-[100px]">
                      <Image
                        src={`${API_BASE}${item.image}`}
                        alt={item.title}
                        fill
                        className="object-cover rounded border"
                        sizes="150px"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-3 mt-2 sm:mt-0">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Засах
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Устгах
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
