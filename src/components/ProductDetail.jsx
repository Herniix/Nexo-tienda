import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { ProductIcon, TruckIcon, WhatsappIcon } from "./Icons.jsx";

const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const fmt = (n) => "$" + n.toLocaleString("es-AR");

export default function ProductDetail() {
  const { detailProduct, closeDetail, addToCart, openCart, whatsappInquiryLink } = useCart();
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (!detailProduct) return;
    const defaults = {};
    Object.entries(detailProduct.options || {}).forEach(([k, v]) => (defaults[k] = v[0]));
    setSelected(defaults);
  }, [detailProduct]);

  if (!detailProduct) return null;
  const p = detailProduct;

  const handleAdd = () => {
    addToCart(p.id, { ...selected });
    closeDetail();
    openCart();
  };

  return (
    <>
      <div onClick={closeDetail} className="fixed inset-0 bg-ink/45 backdrop-blur-[2px] z-[65]" />
      <div className="fixed inset-0 m-auto w-[min(920px,92vw)] h-[min(560px,86vh)] bg-white rounded-[24px] z-[75] shadow-float grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <button
          onClick={closeDetail}
          className="absolute top-4 right-4 w-[34px] h-[34px] rounded-[10px] bg-white/90 border border-border flex items-center justify-center z-10"
        >
          ✕
        </button>

        <div className="bg-gradient-to-br from-[#F1F5FB] to-[#E7EEFA] flex items-center justify-center h-[200px] md:h-auto">
          <ProductIcon name={p.icon} className="w-[44%] h-[44%] text-accent" />
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-3.5">
          <div className="text-[11.5px] text-ink-soft uppercase tracking-wide font-semibold">{p.cat}</div>
          <h3 className="text-[24px] font-bold leading-tight font-display">{p.name}</h3>
          <div className="flex items-center gap-1.5 text-[12.5px] text-ink-soft">
            <span className="text-[#F5A623] tracking-wider">{stars(p.rating)}</span>
            {p.rating} · {p.reviews} reseñas
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {p.specs.map((s) => (
              <span key={s} className="spec-chip">
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-[26px] font-bold">{fmt(p.price)}</span>
            {p.old && (
              <>
                <span className="font-mono text-[13px] text-[#A3AEC2] line-through">{fmt(p.old)}</span>
                <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-green text-white">
                  -{p.off}%
                </span>
              </>
            )}
          </div>

          {Object.entries(p.options || {}).map(([label, values]) => (
            <div key={label} className="flex flex-col gap-2">
              <div className="text-[12.5px] font-semibold text-ink-soft uppercase tracking-wide">{label}</div>
              <div className="flex gap-2 flex-wrap">
                {values.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelected((s) => ({ ...s, [label]: v }))}
                    className={`px-3.5 py-2 rounded-[10px] border text-[13px] transition ${
                      selected[label] === v
                        ? "border-accent bg-accent-soft text-accent-dark font-semibold"
                        : "border-border bg-white text-ink"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2 text-[12.5px] text-ink-soft bg-bg border border-border px-3 py-2.5 rounded-xl">
            <TruckIcon />
            Envío estimado: 24–48h a Capital y GBA · 3–5 días al resto del país
          </div>

          <div className="flex gap-2.5 mt-auto pt-2">
            <button
              onClick={handleAdd}
              className="flex-1 bg-accent-soft text-accent-dark py-3.5 rounded-2xl font-semibold text-[13.5px] hover:bg-accent hover:text-white transition"
            >
              Agregar al carrito
            </button>
            <a
              href={whatsappInquiryLink(p)}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-green text-white py-3.5 rounded-2xl font-semibold text-[13.5px] flex items-center justify-center gap-2"
            >
              <WhatsappIcon />
              Consultar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
