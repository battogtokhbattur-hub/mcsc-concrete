import Image from "next/image";
export default function ConcretePage() {
  return (
    <div className="min-h-screen bg-[#eaeaea] font-sans text-gray-900 pb-16">
      {/* MAIN CONTENT WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 pt-10 flex flex-col lg:flex-row gap-10">
        {/* ================= LEFT TABLE ================= */}
        <div className="w-full lg:w-[48%] bg-white rounded-2xl shadow-lg border border-gray-300 p-0 overflow-hidden">
          {/* TABLE HEADER */}
          <div className="bg-[#0b4f7d] text-white font-semibold text-sm py-3 px-4 rounded-t-2xl flex">
            <div className="w-[12%]">№</div>
            <div className="w-[28%]">Бетоны марк</div>
            <div className="w-[30%]">Тоо хэмжээ</div>
            <div className="flex-1">Бетоны үнэ</div>
          </div>
          {/* TABLE BODY */}
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                ["БМ100", "1м3", "275,000"],
                ["БМ150", "1м3", "290,000"],
                ["БМ200", "1м3", "305,000"],
                ["БМ250", "1м3", "315,000"],
                ["БМ300", "1м3", "325,000"],
                ["БМ350", "1м3", "340,000"],
                ["БМ400", "1м3", "355,000"],
                ["БМ450", "1м3", "375,000"],
                ["БМ500", "1м3", "395,000"],
                ["БМ550", "1м3", "415,000"],
                ["БМ600", "1м3", "455,000"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4 border-r w-[12%] text-center">
                    {i + 1}
                  </td>
                  <td className="py-2 px-4 border-r w-[28%]">{row[0]}</td>
                  <td className="py-2 px-4 border-r w-[30%] text-center">
                    {row[1]}
                  </td>
                  <td className="py-2 px-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-[52%]">
          <div className="relative w-full h-[430px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/concrete-main.jpg"
              alt="Бетон зуурмаг"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center font-bold text-gray-800 tracking-wide text-[15px]">
            БЕТОН ЗУУРМАГ НИЙЛҮҮЛЭЛТ
          </div>
        </div>
      </div>
      {/* ================ DESCRIPTION TEXT ================= */}
      <div className="mx-auto max-w-6xl px-4 mt-10 text-[13.5px] leading-relaxed text-gray-700">
        <p>
          Бетоны нягтрал нь шинэлэг болон нягтрал нягтарсан 2 төрөлтэй байдаг. Нягтрал бодис нь бетон дахь усал уургийг гүйцэтгэдэг.
          Нягтрал бодис нь нягтас өгөх өндөр маркийн бетон үйлдвэрлэх боломж хязгаарлагдмал байсан байдаг. Нягтралт харахгүй хольцын хэмжээ дээр хэт
          ихээр тохирох хольцон нягтрал шалгалт гаргах боломжтой болсон.
        </p>
        <p className="mt-3">
          Нягтрал ашиглахад цементийн жингийн хувьд тохирох хэмжээг гаргаж эд нягтрал цемент, дүүргэгч материалыг туршилтын үр дүн дээр
          үндэслэн үйлдвэрлэгчийн инженер нар тогтоодог. Хавтгайн багтаамж цементийн жингийн 0.6%-5% хүртэл харгалзана.
        </p>
        <p className="mt-3">
          Манай компани нь Монгол Улсад бетон нягтрал бодисын албан ёсны үйлдвэрийг байгуулан 15 дахь жилдээ үйл ажиллагаагаа явуулж байна.
          Хамтран ажиллаад бидний үүд хаалга үргэлж нээлттэй байна.
        </p>
      </div>
      <div className="h-20" />
    </div>
  );
}
