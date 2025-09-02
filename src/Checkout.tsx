import React, { useState } from "react";
import { SETTINGS } from "./settings";
import { CardPDF } from "./components/CardPDF";
import { FAQ } from "./components/FAQ";
import { PixModal } from "./components/PixModal";
import { Footer } from "./components/Footer";

export default function Checkout() {
  const [showPix, setShowPix] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{SETTINGS.heroHeadline}</h1>
        <p className="mt-3 text-lg">{SETTINGS.heroSub}</p>
        <p className="mt-5 text-2xl font-bold">{SETTINGS.checkoutPrice}</p>
        <button
          onClick={() => setShowPix(true)}
          className="mt-6 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-200"
        >
          Pagar com Pix
        </button>
      </section>

      {/* PDFs gratuitos */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Materiais Gratuitos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CardPDF title="Bilhete Necessário" description="Guia gratuito para começar bem." link={SETTINGS.pdfBilhete} />
          <CardPDF title="Renda Oculta" description="Mini-guia para acelerar resultados." link={SETTINGS.pdfRenda} />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Perguntas Frequentes</h2>
        <div className="grid gap-4">
          <FAQ q="Quando recebo o acesso?" a="Logo após a confirmação do pagamento." />
          <FAQ q="Tem garantia?" a="Sim, 7 dias de garantia incondicional." />
          <FAQ q="Posso pagar no Pix?" a="Sim, basta clicar em 'Pagar com Pix'." />
        </div>
      </section>

      <Footer />
      <PixModal open={showPix} onClose={() => setShowPix(false)} />
    </div>
  );
}