import React from "react";

export function CardPDF({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="p-5 rounded-2xl border border-gray-200 bg-white/90 shadow-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <a
        href={link}
        target="_blank"
        className="mt-3 inline-block px-4 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
      >
        Baixar PDF
      </a>
    </div>
  );
}