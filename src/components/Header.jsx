import React, { useState, useRef, useEffect } from "react";
import { PRODUCTS } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { SearchIcon, CartIcon } from "./Icons.jsx";

const CATS = ["Notebooks", "Celulares", "Audio", "Gaming", "Ofertas"];

export default function Header({ onSearch }) {
  const { count, openCart, openDetail } = useCart();
  const [query, setQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const wrapRef = useRef(null);

  const matches = query
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  useEffect(() => {
    onSearch?.(query);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShowSuggest(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <div className="bg-ink text-white text-[13px] text-center py-2 px-3 tracking-wide">
        🚚 Envío gratis desde <b className="text-[#7CC4FF]">$80.000</b> · Hasta{" "}
        <b className="text-[#7CC4FF]">12 cuotas sin interés</b> en toda la web
      </div>

      <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-[22px] shrink-0">
            <span className="w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_0_4px_#EAF1FF]" />
            NEXO
          </a>

          <nav className="hidden md:flex gap-7 text-[14.5px] font-medium text-ink-soft">
            {CATS.map((c) => (
              <a key={c} href="#" className="relative py-1.5 hover:text-ink transition-colors group">
                {c}
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <div ref={wrapRef} className="relative flex-1 max-w-[380px] ml-auto">
            <SearchIcon className="absolute left-[13px] top-1/2 -translate-y-1/2 opacity-50" />
            <input
              type="text"
              placeholder="Buscar auriculares, notebooks, monitores…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggest(true);
              }}
              className="w-full py-2.5 pl-[38px] pr-3.5 rounded-full border border-border bg-white text-[14px] outline-none focus:border-accent focus:ring-4 focus:ring-accent-soft transition"
            />
            {showSuggest && matches.length > 0 && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-border rounded-2xl shadow-float overflow-hidden z-50">
                {matches.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      openDetail(p);
                      setShowSuggest(false);
                    }}
                    className="w-full text-left bg-transparent px-3.5 py-2.5 flex justify-between gap-2.5 text-[13.5px] border-b border-border last:border-none hover:bg-accent-soft"
                  >
                    {p.name}
                    <span className="font-mono text-[12.5px] text-ink-soft">
                      ${p.price.toLocaleString("es-AR")}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center hover:border-accent hover:-translate-y-0.5 transition shrink-0"
            aria-label="Mi cuenta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4.2 5-6 8-6s6.5 1.8 8 6" />
            </svg>
          </button>

          <button
            onClick={openCart}
            className="relative w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center hover:border-accent hover:-translate-y-0.5 transition shrink-0"
            aria-label="Carrito"
          >
            <CartIcon />
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10.5px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 border-2 border-bg">
              {count}
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
