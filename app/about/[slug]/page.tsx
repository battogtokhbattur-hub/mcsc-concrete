// app/about/[slug]/page.tsx
import { notFound } from "next/navigation";

const ABOUT_SECTIONS = {
  values: {
    title: "Үнэт зүйлс",
    body: [
      "Хэрэглэгчиддээ стандартын дагуу, баталгаатай бетон нийлүүлэх нь бидний өдөр тутмын үндсэн зарчим.",
      "Чанар, аюулгүй байдал, цаг хугацааны хариуцлагатай хүргэлт дээр үндэслэн урт хугацааны хамтын ажиллагааг бий болгодог.",
      "Цагт 120 м³ хүчин чадалтай автомат үйлдвэр, GPS хяналттай тээвэрлэлтийн системээр дамжуулан аливаа төслүүдэд найдвартай нийлүүлэлт хийдэг.",
    ],
  },
  vision: {
    title: "Алсын хараа",
    body: [
      "Монголын бетон үйлдвэрлэлийн салбарт технологи, чанар, үйлчилгээгээрээ жишиг тогтоох.",
      "Ухаалаг үйлдвэр, дижитал логистикийг бүрэн нэвтрүүлсэн, бүтээн байгуулалтын стратегийн түнш байх.",
    ],
  },
  mission: {
    title: "Эрхэм зорилго",
    body: [
      "Бүтээн байгуулалтын төслүүдийг хугацаанд нь, төсөвт нь багтаан хэрэгжүүлэхэд туслах бетон зуурмагийн цогц шийдэл нийлүүлэх.",
      "Лабораторийн чанарын хяналт, инженерийн зөвлөх үйлчилгээний тусламжтайгаар төслийн эрсдэлийг бууруулах.",
    ],
  },
  slogan: {
    title: "Уриа үг",
    body: [
      "“Чанартай бетон – найдвартай хүргэлт” уриан дор бид төслийн бүх үе шатанд хариуцлагатай ханддаг.",
      "Хуваарь, чанар, аюулгүй байдлын шаардлагыг чанд баримталж, харилцагчийн итгэлийг хамгаалдаг.",
    ],
  },
} as const;

type Slug = keyof typeof ABOUT_SECTIONS;

interface PageProps {
  params: { slug: Slug };
}

export default function AboutDetailPage({ params }: PageProps) {
  const section = ABOUT_SECTIONS[params.slug as Slug];

  if (!section) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
          {section.title}
        </h1>
        <div className="space-y-3 text-sm leading-relaxed md:text-base">
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
