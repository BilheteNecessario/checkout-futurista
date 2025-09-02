import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Lock, Mail, Phone, FileDown, Sparkles, CheckCircle2, Shield, ArrowRight, X, Wallet } from "lucide-react";

/**
 * Checkout Futurista – Página única
 *
 * Como usar:
 * 1) Substitua os links em SETTINGS abaixo (PDFs, checkout, WhatsApp, suporte).
 * 2) Publique em qualquer host (Vercel/Netlify) ou incorpore na sua página.
 * 3) Os botões de pagamento redirecionam para o seu checkout (ex.: Kiwify/CartPanda/Hotmart).
 */
const SETTINGS = {
  brand: "Renda Oculta",
  heroHeadline: "Desbloqueie sua Renda Oculta",
  heroSub: "Método prático, direto ao ponto e comprovado por quem vive do digital.",
  checkoutCTA: "Garantir meu acesso",
  checkoutPrice: "R$ 97,00",
  checkoutPromo: "Acesso vitalício + Atualizações",
  checkoutLink: "https://sua-plataforma-de-checkout.com/SEU-LINK", // ex.: Kiwify
  pdfBilheteUrl: "https://seu-link.com/bilhete-necessario.pdf",
  pdfRendaUrl: "https://seu-link.com/renda-oculta.pdf",
  whatsappUrl: "https://chat.whatsapp.com/seu-grupo",
  supportEmail: "suporte@seudominio.com",
};

const badges = [
  { icon: <Shield className="w-5 h-5"/>, text: "Pagamento 100% Seguro" },
  { icon: <Lock className="w-5 h-5"/>, text: "Satisfação Garantida" },
  { icon: <Wallet className="w-5 h-5"/>, text: "Pix • Cartão • Boleto" },
];

const bullets = [
  "Passo a passo simples, sem enrolação",
  "Estratégias aplicáveis no mesmo dia",
  "Suporte e comunidade exclusiva",
  "Modelos e checklists prontos",
];

export default function CheckoutFuturista() {
  const [showPix, setShowPix] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [coupon, setCoupon] = useState("");

  const handleCheckout = () => {
    // Sugestão: anexe query params para rastrear nome/email/cupom no seu checkout
    const url = new URL(SETTINGS.checkoutLink);
    if (name) url.searchParams.set("name", name);
    if (email) url.searchParams.set("email", email);
    if (coupon) url.searchParams.set("coupon", coupon);
    window.location.href = url.toString();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(45,212,191,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(147,51,234,0.12),transparent)] bg-slate-950 text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-300"/>
            <span className="font-semibold tracking-wide">{SETTINGS.brand}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#beneficios" className="hover:text-white">Benefícios</a>
            <a href="#materiais" className="hover:text-white">PDFs</a>
            <a href="#checkout" className="hover:text-white">Checkout</a>
            <a href={SETTINGS.whatsappUrl} target="_blank" className="hover:text-white">Comunidade</a>
          </div>
          <button onClick={() => document.getElementById('checkout')?.scrollIntoView({behavior:'smooth'})} className="px-4 py-2 rounded-2xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-200 text-sm">
            {SETTINGS.checkoutCTA}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-teal-500/20 rounded-full blur-3xl"/>
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-fuchsia-500/20 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-3xl md:text-5xl font-bold leading-tight">
            {SETTINGS.heroHeadline}
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.05,duration:0.5}} className="mt-4 text-slate-300 max-w-2xl">
            {SETTINGS.heroSub}
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {badges.map((b, i) => (
              <div key={i} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {b.icon}
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {bullets.map((t, i) => (
            <motion.div key={i} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.05*i}} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-300 mt-0.5"/>
                <p className="text-slate-200">{t}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MATERIAIS GRATUITOS */}
      <section id="materiais" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Materiais Gratuitos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CardPDF
            title="Bilhete Necessário (PDF)"
            description="Guia gratuito para começar com o pé direito."
            url={SETTINGS.pdfBilheteUrl}
          />
          <CardPDF
            title="Renda Oculta (PDF)"
            description="Material de apoio para acelerar seus resultados."
            url={SETTINGS.pdfRendaUrl}
          />
        </div>
        <p className="mt-3 text-sm text-slate-400">Dica: hospede seus PDFs no Google Drive/Dropbox com link público e cole acima.</p>
      </section>

      {/* CHECKOUT */}
      <section id="checkout" className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-teal-300"/>
              <h3 className="text-lg font-semibold">Finalizar Compra</h3>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{SETTINGS.checkoutPromo}</p>

            <div className="mt-6 grid gap-4">
              <label className="text-sm text-slate-300">Nome completo
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-400/40"/>
              </label>
              <label className="text-sm text-slate-300">E-mail
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@email.com" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-400/40"/>
              </label>
              <label className="text-sm text-slate-300">Cupom (opcional)
                <input value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="DIGITE O CUPOM" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-400/40"/>
              </label>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-2xl font-bold">{SETTINGS.checkoutPrice}</div>
                  <div className="text-xs text-slate-400">1x no cartão • Pix à vista • Boleto</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setShowPix(true)} className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Pagar com Pix</button>
                  <button onClick={handleCheckout} className="rounded-xl bg-teal-500/90 hover:bg-teal-400 px-4 py-2 text-sm text-slate-900 font-semibold inline-flex items-center gap-2">Cartão/Boleto <ArrowRight className="w-4 h-4"/></button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Lock className="w-4 h-4"/>
                Seus dados são protegidos com criptografia SSL.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <h4 className="text-lg font-semibold">O que você vai receber</h4>
            <ul className="mt-4 space-y-3">
              {[
                "Acesso imediato à área de membros",
                "Aulas gravadas + atualizações futuras",
                "Modelos editáveis e planilhas",
                "Comunidade no WhatsApp para tirar dúvidas",
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-300 mt-0.5"/>
                  <span className="text-slate-200">{li}</span>
                </li>
              ))}
            </ul>
            <a href={SETTINGS.whatsappUrl} target="_blank" className="mt-5 inline-flex items-center gap-2 text-sm text-teal-300 hover:underline">
              Entrar na Comunidade <ArrowRight className="w-4 h-4"/>
            </a>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p><strong>Suporte:</strong> fale com a gente no e-mail <a className="underline" href={`mailto:${SETTINGS.supportEmail}`}>{SETTINGS.supportEmail}</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Perguntas frequentes</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          <FAQ q="Quando recebo o acesso?" a="Logo após a confirmação do pagamento você recebe um e-mail com o acesso."/>
          <FAQ q="Tem garantia?" a="Sim, 7 dias de garantia incondicional conforme o CDC."/>
          <FAQ q="Posso pagar no Pix?" a="Sim! Clique em 'Pagar com Pix' ou use a opção Pix no checkout."/>
          <FAQ q="Como recebo os PDFs?" a="Os links ficam disponíveis nesta página e também na área de membros."/>
        </div>
      </section>

      <Footer />

      <PixModal open={showPix} onClose={() => setShowPix(false)} email={email} />
    </div>
  );
}

function CardPDF({ title, description, url }: { title: string; description: string; url: string; }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-slate-300 mt-1">{description}</p>
        </div>
        <FileDown className="w-5 h-5 text-teal-300"/>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <a href={url} target="_blank" className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 text-sm inline-flex items-center gap-2">
          Baixar PDF <ArrowRight className="w-4 h-4"/>
        </a>
        <a href={url} target="_blank" className="text-xs text-slate-400 underline">Abrir no navegador</a>
      </div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string; }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <ArrowRight className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`}/>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="text-slate-300 text-sm pt-3">
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function PixModal({ open, onClose, email }: { open: boolean; onClose: () => void; email: string; }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}/>
      <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} exit={{opacity:0, y:12}} className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-teal-300"/>
            <h4 className="font-semibold">Pagamento via Pix</h4>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10"><X className="w-4 h-4"/></button>
        </div>
        <p className="text-sm text-slate-300 mt-2">Escaneie o QR Code no app do seu banco ou copie o código Pix abaixo.</p>
        {/* Placeholder do QRCode - substitua pela imagem/código dinâmico da sua plataforma de checkout */}
        <div className="mt-4 h-40 rounded-xl bg-slate-800 border border-white/10 grid place-items-center">
          <span className="text-xs text-slate-400">QR Code Pix (placeholder)</span>
        </div>
        <div className="mt-4">
          <label className="text-xs text-slate-400">Copia e cola</label>
          <div className="mt-1 flex items-center gap-2">
            <input value={`PIX-CODE-EXEMPLO-${email || 'SEU-EMAIL'}`} readOnly className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-xs"/>
            <button onClick={() => navigator.clipboard.writeText(`PIX-CODE-EXEMPLO-${email || 'SEU-EMAIL'}`)} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs hover:bg-white/20">Copiar</button>
          </div>
        </div>
        <button onClick={onClose} className="mt-5 w-full rounded-xl bg-teal-500/90 hover:bg-teal-400 text-slate-900 font-semibold py-2">Ok, já paguei</button>
      </motion.div>
    </div>
  );
}

function Footer(){
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-300">
        <div>
          <div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4 text-teal-300"/><span className="font-semibold">{SETTINGS.brand}</span></div>
          <p className="text-slate-400">Resultados práticos com um plano direto ao ponto.</p>
        </div>
        <div>
          <p className="font-medium mb-2">Links úteis</p>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#materiais">PDFs gratuitos</a></li>
            <li><a className="hover:underline" href="#checkout">Checkout</a></li>
            <li><a className="hover:underline" href={SETTINGS.whatsappUrl} target="_blank">Comunidade WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Suporte</p>
          <p className="text-slate-400">E-mail: <a className="underline" href={`mailto:${SETTINGS.supportEmail}`}>{SETTINGS.supportEmail}</a></p>
          <p className="text-slate-400">Políticas: 7 dias de garantia • Termos & Privacidade</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} {SETTINGS.brand}. Todos os direitos reservados.</div>
    </footer>
  );
}
