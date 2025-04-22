
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const translations = {
  es: {
    title: "CoolNest Air & Refrigeration",
    subtitle: "Especialistas en climatización residencial, comercial e industrial",
    servicesTitle: "Nuestros Servicios",
    services: [
      "✅ Aire acondicionado residencial y comercial",
      "✅ Refrigeración industrial",
      "✅ Instalación, mantenimiento y reparación"
    ],
    contactTitle: "Contáctanos",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Mensaje",
    send: "Enviar",
    whyUs: "¿Por qué elegirnos?",
    reason: "Más de 10 años de experiencia ofreciendo soluciones eficientes y confiables en HVAC. Nuestro equipo está comprometido con la comodidad y satisfacción de nuestros clientes."
  },
  en: {
    title: "CoolNest Air & Refrigeration",
    subtitle: "Specialists in residential, commercial, and industrial HVAC",
    servicesTitle: "Our Services",
    services: [
      "✅ Residential & Commercial Air Conditioning",
      "✅ Industrial Refrigeration",
      "✅ Installation, Maintenance & Repair"
    ],
    contactTitle: "Contact Us",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Message",
    send: "Send",
    whyUs: "Why Choose Us?",
    reason: "Over 10 years of experience delivering efficient and reliable HVAC solutions. Our team is committed to your comfort and satisfaction."
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <div className="flex justify-end mb-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-gray-800 text-white px-3 py-1 rounded"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <header className="text-center mb-12">
        <Image
          src="/logo.png"
          alt="CoolNest Logo"
          width={180}
          height={180}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-400">{t.title}</h1>
        <p className="text-lg text-gray-300 mt-2">{t.subtitle}</p>
      </header>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.servicesTitle}</h2>
        <ul className="space-y-3 text-gray-300">
          {t.services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-900 rounded-xl p-6 max-w-4xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">{t.contactTitle}</h2>
        <form
          action="https://formspree.io/f/mqkrbvzo"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            required
          />
          <textarea
            name="message"
            placeholder={t.messagePlaceholder}
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            required
          ></textarea>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500">{t.send}</Button>
        </form>
      </section>

      <section className="max-w-4xl mx-auto text-center text-gray-400">
        <h2 className="text-xl font-semibold text-white mb-4">{t.whyUs}</h2>
        <p>{t.reason}</p>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 CoolNest Air & Refrigeration</p>
        <p>📞 305-690-1311 | 📧 coolnestflorida@gmail.com</p>
      </footer>
    </div>
  );
}
