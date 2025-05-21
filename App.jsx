import { useState } from "react";

export default function TajwidWebApp() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-green-700">Jom Kenal Tajwid!</h1>
      <div className="space-y-4">
        <section className="border p-4 rounded-lg shadow bg-white">
          <h2 className="text-xl font-semibold text-green-800">Bahagian 1: Asas Mengenal al-Quran</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kenal Huruf Hijaiyah (ا - ي)</li>
            <li>Huruf Mad dan Tanda-Tanda Mad (ا، و، ي)</li>
            <li>Tanda-Tanda Baris: Fathah, Kasrah, Dhammah, Sukun, Tanwin</li>
          </ul>
        </section>

        <section className="border p-4 rounded-lg shadow bg-white">
          <h2 className="text-xl font-semibold text-green-800">Bahagian 2: Hukum Tajwid Asas</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mad Asli dan Mad Wajib/Jaiz (4, 5, 6 harakat)</li>
            <li>Nun Sakinah & Tanwin (Izhar, Idgham, Ikhfa’, Iqlab)</li>
            <li>Mim Sakinah (Ikhfa’ Syafawi, Idgham Mimi, Izhar Syafawi)</li>
            <li>Qalqalah (ق، ط، ب، ج، د)</li>
            <li>Alif Lam Qamariah & Syamsiah</li>
          </ul>
        </section>

        <section className="border p-4 rounded-lg shadow bg-white">
          <h2 className="text-xl font-semibold text-green-800">Bahagian 3: Kuiz & Lembaran Kerja</h2>
          <p>Murid boleh jawab kuiz interaktif atau muat turun latihan PDF. Boleh juga guna pautan Google Form / Wordwall.</p>
        </section>

        <section className="border p-4 rounded-lg shadow bg-white">
          <h2 className="text-xl font-semibold text-green-800">Bahagian 4: Maklum Balas Pengguna</h2>
          <textarea
            placeholder="Tulis maklum balas anda di sini..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => alert("Terima kasih atas maklum balas anda!")}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            Hantar
          </button>
        </section>
      </div>
    </div>
  );
}