import React, { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ searchQuery = "" }) {
  const [activeCat, setActiveCat] = useState("Todos");

  const list = useMemo(() => {
    let items = PRODUCTS.filter((p) => activeCat === "Todos" || p.cat === activeCat);
    if (searchQuery) {
      items = items.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return items;
  }, [activeCat, searchQuery]);

  return (
    <section id="catalogo" className="max-w-[1240px] mx-auto px-6 py-14">
      <div className="flex items-end justify-between gap-5 flex-wrap mb-7">
        <div>
          <h2 className="font-display font-bold text-[24px] md:text-[32px]">Catálogo destacado</h2>
          <p className="text-ink-soft text-[14.5px] mt-1.5">
            Filtrá por categoría o buscá el modelo exacto que necesitás.
          </p>
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap mb-7">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCat(c)}
            className={`px-4 py-2.5 rounded-full border text-[13.5px] font-medium transition ${
              c === activeCat
                ? "bg-ink text-white border-ink"
                : "bg-white text-ink-soft border-border hover:border-accent hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-ink-soft">No encontramos productos para tu búsqueda.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
