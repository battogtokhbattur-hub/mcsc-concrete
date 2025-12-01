import Link from "next/link";
import Image from "next/image";
const CARDS = [
  {
    title: "Бетон зуурмаг",
    desc:
      "Бүх төрлийн бетон зуурмагийг миксерээр баттай нийлүүлэх менежмент, үнэ, боломжийн нөхцөлтэй бетон зуурмаг гаргах боломжтой.",
    href: "/business/concrete",
    image: "/images/card-concrete.jpg",
  },
  {
    title: "Түрээс үйлчилгээ",
    desc:
      "Бетон шахуургын төхөөрөмж, бетон насос, миксер автоматын бетон зуурмаг түгэлт болон автомашин түрээсийн үйлчилгээ.",
    href: "/business/rental",
    image: "/images/card-rental.jpg",
  },
  {
    title: "Төслүүд",
    desc:
      "Манай улсын хэмжээнд томоохон төсөл хөтөлбөрүүдтэй хамтран хэрэгжүүлж байсан богино танилцуулга.",
    href: "/projects",
    image: "/images/card-project.jpg",
  },
];
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#eaeaea] font-sans text-gray-900">
      {/* --- HERO --- */}
      <section className="relative h-[420px] w-full md:h-[520px] overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero.jpg"
      alt="MCSC Concrete hero"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* soft overlay */}
  <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/25 to-transparent" />

  {/* left text */}
  <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-8 md:px-6">
    <div>
      <h1 className="text-3xl font-bold text-white drop-shadow md:text-4xl lg:text-5xl">
        MCSC Concrete
      </h1>
      <p className="mt-1 text-sm text-white/90 md:text-base">
        Бетон зуурмагийн үйлдвэр
      </p>
    </div>
  </div>
</section>

      {/* --- SECTION TITLE --- */}
      <section className="mx-auto max-w-6xl px-4 py-6 text-center md:py-8">
        <h2 className="text-xl font-semibold md:text-2xl">MCSC concrete</h2>
      </section>
      {/* --- CARDS --- */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="
                group flex min-h-[360px] flex-col justify-between
                rounded-2xl border border-gray-200 bg-white p-4
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-transform hover:-translate-y-0.5
              "
            >
              <div>
                <h3 className="text-[17px] font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {c.desc}
                </p>
                <div className="mt-2 text-right">
                  <span className="text-[12px] font-medium text-blue-600 group-hover:text-blue-700">
                    Дэлгэрэнгүй →
                  </span>
                </div>
              </div>
              {/* fixed aspect ratio to keep cards equal height */}
              <div className="mt-3 overflow-hidden rounded-xl border border-gray-100">
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="pb-8" />
    </div>
  );
}
