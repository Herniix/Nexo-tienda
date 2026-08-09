import React from "react";
import { ProductIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_480px_at_78%_-10%,#DCE9FF_0%,transparent_60%)] border-b border-border">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-10 items-center py-12 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[12.5px] font-semibold text-accent-dark bg-accent-soft px-3 py-1.5 rounded-full mb-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            NUEVA GENERACIÓN · YA DISPONIBLE
          </div>
          <h1 className="font-display font-bold text-ink text-[34px] md:text-[56px] leading-[1.04]">
            Tecnología que
            <br />
            <em className="not-italic text-accent">se siente</em> más rápida.
          </h1>
          <p className="mt-4 text-[17px] text-ink-soft max-w-[460px] leading-relaxed">
            Notebooks, audio y accesorios seleccionados por rendimiento real. Comprás hoy, lo
            tenés funcionando esta semana — con garantía oficial y soporte directo por WhatsApp.
          </p>
          <div className="flex gap-3 mt-8 flex-wrap">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[14.5px] bg-accent text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,.55)] hover:bg-accent-dark hover:-translate-y-0.5 transition"
            >
              Ver catálogo →
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-[14.5px] bg-white text-ink border border-border hover:border-ink hover:-translate-y-0.5 transition"
            >
              Ofertas de la semana
            </a>
          </div>
          <div className="flex gap-7 mt-10">
            <div>
              <b className="block font-display text-[22px]">100+</b>
              <span className="text-[12.5px] text-ink-soft">productos activos</span>
            </div>
            <div>
              <b className="block font-display text-[22px]">4.8★</b>
              <span className="text-[12.5px] text-ink-soft">valoración promedio</span>
            </div>
            <div>
              <b className="block font-display text-[22px]">24-48h</b>
              <span className="text-[12.5px] text-ink-soft">envío a todo el país</span>
            </div>
          </div>
        </div>

        <div className="relative h-[260px] md:h-[420px] order-first md:order-last">
          <div className="absolute inset-y-5 right-0 md:right-10 left-0 md:left-0 bg-white border border-border rounded-xl2 shadow-float flex flex-col items-center justify-center gap-3.5">
            <div className="absolute w-[220px] h-[220px] rounded-full bg-[conic-gradient(from_180deg,#2563EB,#7CC4FF,#2563EB)] blur-[2px] opacity-20" />
            <ProductIcon name="laptop" className="w-[130px] h-[130px] text-accent relative" />
          </div>
          <div className="absolute top-2 left-0 md:-left-4 bg-white border border-border rounded-xl2 shadow-float px-4 py-3 flex items-center gap-2.5 animate-float">
            <span className="w-[9px] h-[9px] rounded-full bg-green shadow-[0_0_0_4px_#E9FBF1]" />
            <div>
              <b className="block text-[13px]">Envío en camino</b>
              <span className="text-[11.5px] text-ink-soft">Pedido #4821</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 md:-right-2.5 bg-white border border-border rounded-xl2 shadow-float px-4 py-3 flex items-center gap-2.5 animate-float [animation-delay:.4s]">
            <div className="w-[30px] h-[30px] rounded-lg bg-green-soft flex items-center justify-center text-green font-bold text-[12px]">
              -20%
            </div>
            <div>
              <b className="block text-[13px]">Oferta flash</b>
              <span className="text-[11.5px] text-ink-soft">Solo por hoy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
