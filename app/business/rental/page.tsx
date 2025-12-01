import Image from "next/image";
export default function RentalPage() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] pb-16">
      {/* Wrapper */}
      <div className="mx-auto max-w-[1300px] px-4 pt-10">
        {/* 3 IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* === CARD 1 === */}
          <div className="relative w-full h-[520px] rounded-md overflow-hidden shadow-md">
            <Image
              src="/images/rental-truck-1.jpg" // Таны файл нэр
              alt="Бетон зуурмаг тээвэрлэх автомашин"
              fill
              className="object-cover object-bottom-right"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-xl">
              Бетон зуурмаг<br />тээвэрлэх автомашин
            </div>
          </div>
          {/* === CARD 2 === */}
          <div className="relative w-full h-[520px] rounded-md overflow-hidden shadow-md">
            <Image
              src="/images/rental-truck-2.jpg"
              alt="Бетон зуурмаг цутгах автомашин"
              fill
              className="object-cover object-bottom-right"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-xl">
              Бетон зуурмаг<br />цутгах автомашин
            </div>
          </div>
          {/* === CARD 3 === */}
          <div className="relative w-full h-[520px] rounded-md overflow-hidden shadow-md bg-gray-200">
            <Image
              src="/images/rental-logo.jpg"
              alt="MCSC Logo"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-xl">
              {/* Хэрэв текст байхгүй бол хоосон орхиж болно */}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
  );
}
