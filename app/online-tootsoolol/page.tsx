"use client";
import { useState } from "react";
export default function OnlineTootsoololPage() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("8");
  const [thickness, setThickness] = useState("0.15");
  const [volumeResult, setVolumeResult] = useState<number>(0);
  const [totalM3, setTotalM3] = useState("80");
  const [unitPrice, setUnitPrice] = useState("230000");
  const [priceResult, setPriceResult] = useState<number>(0);
  const [totalForTrips, setTotalForTrips] = useState("120");
  const [truckCapacity, setTruckCapacity] = useState("7");
  const [tripResult, setTripResult] = useState<number | null>(null);
  const parse = (v: string) => {
    const n = parseFloat(v.replace(",", "."));
    return isNaN(n) ? 0 : n;
  };
  const formatNumber = (n: number) =>
    n.toLocaleString("mn-MN", { maximumFractionDigits: 2 });
  const handleCalcVolume = () => {
    const v = parse(length) * parse(width) * parse(thickness);
    setVolumeResult(v || 0);
  };
  const handleCalcPrice = () => {
    const v = parse(totalM3) * parse(unitPrice);
    setPriceResult(v || 0);
  };
  const handleCalcTrips = () => {
    const total = parse(totalForTrips);
    const cap = parse(truckCapacity);
    if (!total || !cap) {
      setTripResult(null);
      return;
    }
    setTripResult(Math.ceil(total / cap));
  };
  const labelClass =
    "mb-1 block text-[12px] text-gray-500";
  const inputClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2.5 text-[14px] outline-none focus:border-orange-400";
  const cardClass =
    "rounded-2xl border border-gray-200 bg-white px-5 pb-4 pt-5 shadow-2xl shadow-slate-300/60";
  const buttonClass =
  "w-full rounded-full px-4 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/50 bg-linear-to-r from-neutral-800 via-neutral-900 to-black transition-transform hover:-translate-y-px";
  return (
    <section className="min-h-screen bg-gray-100 py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4">
        {/* HERO хэсэг */}
        <section className="mb-8 text-center md:mb-10">
          <p className="text-[12px] uppercase tracking-[0.25em] text-blacke-800">
            tools
          </p>
          <h1 className="mt-2 text-[24px] font-semibold text-gray-900 md:text-[26px]">
            Онлайн бетон тооцооллын 3 хэрэгсэл
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-gray-600">
            Бетон эзлэхүүн, ойролцоох үнэ, миксерийн рейсний тоог энгийн
            байдлаар тооцолж харуулна. Талбайн хэмжээгээ оруулаад шууд
            ашиглаарай.
          </p>
        </section>
        {/* Гурван картын grid */}
        <section>
          <div className="grid gap-5 md:grid-cols-3">
            {/* 1. Шал / суурийн эзлэхүүн */}
            <div className={cardClass}>
              <h3 className="mb-1 text-[16px] font-semibold text-gray-900">
                1. Шал / суурийн эзлэхүүн
              </h3>
              <p className="mb-3 text-[12px] text-gray-500">
                Урт × өргөн × зузаан → м³
              </p>
              <div className="mb-2.5">
                <label className={labelClass}>Урт (м)</label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="mb-2.5">
                <label className={labelClass}>Өргөн (м)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="mb-3.5">
                <label className={labelClass}>Зузаан (м)</label>
                <input
                  type="number"
                  step="0.01"
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button
                type="button"
                onClick={handleCalcVolume}
                className={buttonClass}
              >
                м³ тооцоолох
              </button>
              <p className="mt-2 text-[13px] text-gray-700">
                Үр дүн:{" "}
                <strong>{formatNumber(volumeResult)}</strong> м³
              </p>
            </div>
            {/* 2. Ойролцоогоо үнийн санал */}
            <div className={cardClass}>
              <h3 className="mb-1 text-[16px] font-semibold text-gray-900">
                2. Ойролцоогоо үнийн санал
              </h3>
              <p className="mb-3 text-[12px] text-gray-500">
                Нийт м³ × нэгж үнэ
              </p>
              <div className="mb-2.5">
                <label className={labelClass}>Нийт хэмжээ (м³)</label>
                <input
                  type="number"
                  value={totalM3}
                  onChange={(e) => setTotalM3(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="mb-3.5">
                <label className={labelClass}>1 м³ үнэ (₮)</label>
                <input
                  type="number"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button
                type="button"
                onClick={handleCalcPrice}
                className={buttonClass}
              >
                Нийт үнийг харах
              </button>
              <p className="mt-2 text-[13px] text-gray-700">
                Ойролцоогоор:{" "}
                <strong>
                  {priceResult ? formatNumber(priceResult) : "0"}
                </strong>{" "}
                ₮
              </p>
            </div>
            {/* 3. Миксер / рейсний тоо */}
            <div className={cardClass}>
              <h3 className="mb-1 text-[16px] font-semibold text-gray-900">
                3. Миксер / рейсний тоо
              </h3>
              <p className="mb-3 text-[12px] text-gray-500">
                Нэг миксерийн багтаамжаар
              </p>
              <div className="mb-2.5">
                <label className={labelClass}>Нийт хэмжээ (м³)</label>
                <input
                  type="number"
                  value={totalForTrips}
                  onChange={(e) => setTotalForTrips(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="mb-3.5">
                <label className={labelClass}>Нэг миксер (м³)</label>
                <input
                  type="number"
                  value={truckCapacity}
                  onChange={(e) => setTruckCapacity(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button
                type="button"
                onClick={handleCalcTrips}
                className={buttonClass}
              >
                Рейсийн тоог тооцоолох
              </button>
              <p className="mt-2 text-[13px] text-gray-700">
                Шаардагдах рейс:{" "}
                <strong>
                  {tripResult !== null ? tripResult : "-"}
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
