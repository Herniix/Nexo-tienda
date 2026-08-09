import React from "react";
import { ProductIcon, CartIcon } from "./Icons.jsx";
import { useCart } from "../context/CartContext.jsx";

const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const fmt = (n) => "$" + n.toLocaleString("es-AR");

export default function ProductCard({ product }) {
  const { addToCart, openCart, openDetail } = useCart();

  const handleQuickBuy = (e) => {
    e.stopPropagation();
    // Sin variantes propias: se agrega con las opciones por defecto del producto
    const defaultOpts = {};
    Object.entries(product.options || {}).forEach(([k, v]) => (defaultOpts[k] = v[0]));
    addToCart(product.id, defaultOpts);
    openCart();
  };

  return (
    <article
      onClick={() => openDetail(product)}
      className="bg-white border border-border rounded-xl2 shadow-card overflow-hidden flex flex-col cursor-pointer transition hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[#C9DBFF]"
    >
      <div className="relative aspect-[1/0.86] flex items-center justify-center bg-gradient-to-br from-[#F1F5FB] to-[#E7EEFA]">
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.off > 0 && (
            <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-green text-white">
              -{product.off}%
            </span>
          )}
          {product.isNew && (
            <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-ink text-white">
              NUEVO
            </span>
          )}
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 w-8 h-8 rounded-[10px] bg-white/90 border border-border flex items-center justify-center"
          aria-label="Favorito"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
        <ProductIcon name={product.icon} />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="text-[11.5px] text-ink-soft uppercase tracking-wide font-semibold">
          {product.cat}
        </div>
        <div className="text-[15px] font-semibold leading-tight min-h-[39px]">{product.name}</div>
        <div className="flex gap-1.5 flex-wrap">
          {product.specs.map((s) => (
            <span key={s} className="spec-chip">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[12.5px] text-ink-soft">
          <span className="text-[#F5A623] tracking-wider text-xs">{stars(product.rating)}</span>
          {product.rating} ({product.reviews})
        </div>
        <div className="mt-auto pt-1.5 flex items-baseline gap-2">
          <span className="font-mono text-[19px] font-semibold text-ink">{fmt(product.price)}</span>
          {product.old && (
            <span className="font-mono text-[13px] text-[#A3AEC2] line-through">{fmt(product.old)}</span>
          )}
        </div>
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={handleQuickBuy}
          className="w-full bg-accent-soft text-accent-dark py-2.5 rounded-xl font-semibold text-[13.5px] flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition"
        >
          <CartIcon width={15} height={15} />
          Compra rápida
        </button>
      </div>
    </article>
  );
}
