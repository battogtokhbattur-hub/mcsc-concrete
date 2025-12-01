const branchCards = [
  {
    title: "Main Concrete Plant",
    address: "Улаанбаатар хот, Сонгинохайрхан дүүрэг, Аж үйлдвэрийн бүс",
    phone: "+976 7777 0001",
    website: "www.amraas.mn",
  },
  {
    title: "East Batching Plant",
    address: "Улаанбаатар хот, Баянзүрх дүүрэг, Барилгын гудамж",
    phone: "+976 7777 0002",
    website: "www.amraas.mn/east",
  },
  {
    title: "West Batching Plant",
    address: "Улаанбаатар хот, Хан-Уул дүүрэг, Үйлдвэрийн район",
    phone: "+976 7777 0003",
    website: "www.amraas.mn/west",
  },
  {
    title: "Sales & Engineering Office",
    address: "Улаанбаатар хот, Сүхбаатар дүүрэг, Бизнес төв, 8-р давхар",
    phone: "+976 7777 0004",
    website: "sales.amraas.mn",
  },
];
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* ДЭЭД МЭДЭЭЛЭЛ */}
      <section className="mx-auto mt-6 mb-3 max-w-5xl px-4 text-center">
        <h1 className="mb-1 text-xl font-semibold md:text-2xl">
          Amraas Concrete
        </h1>
        <p className="mb-1 text-sm">
          <a
            href="tel:+97677770001"
            className="text-blue-600 no-underline hover:underline"
          >
            +976 7777 0001
          </a>{" "}
          ·{" "}
          <a
            href="https://www.amraas.mn"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 no-underline hover:underline"
          >
            www.amraas.mn
          </a>
        </p>
        <p className="text-[13px] text-gray-600">
          Монгол Улс, Улаанбаатар хот, Сонгинохайрхан дүүрэг, Аж үйлдвэрийн бүс
        </p>
      </section>
      {/* GOOGLE MAPS */}
      <section className="mx-auto mb-6 max-w-5xl px-4">
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-xl shadow-slate-300/60">
          <iframe
            title="Amraas Concrete Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.354835989853!2d106.882!3d47.918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzA1LjAiTiAxMdKwNTMnMDIuMCJF!5e0!3m2!1sen!2smn!4v0000000000000"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-1 text-right text-[11px] text-gray-400">
          * <code>iframe</code>-ийн <code>src</code>-ийг өөрийн Google Maps
          embed линкээр солино.
        </p>
      </section>
      {/* САЛБАР / ТӨСЛҮҮДИЙН КАРТУУД */}
      <section className="mx-auto mb-10 max-w-5xl px-4 pb-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {branchCards.map((b, idx) => (
            <div
              key={idx}
              className="
                rounded-xl border border-gray-200 bg-white
                p-5 shadow-lg shadow-slate-300/50
              "
            >
              <h3 className="mb-1 text-[15px] font-semibold text-gray-900">
                {b.title}
              </h3>
              <div className="mb-2 mt-1 h-0.5 w-7 bg-blue-700" />
              <p className="mb-3 text-[13px] leading-relaxed text-gray-600">
                {b.address}
              </p>
              <p className="mb-1 text-[13px]">
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="text-blue-600 no-underline hover:underline"
                >
                  {b.phone}
                </a>
              </p>
              <p className="text-[13px]">
                <a
                  href={`https://${b.website.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 no-underline hover:underline"
                >
                  {b.website}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
