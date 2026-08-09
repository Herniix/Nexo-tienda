import React from "react";
import { PRODUCTS } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { ProductIcon, WhatsappIcon } from "./Icons.jsx";

const fmt = (n) => "$" + n.toLocaleString("es-AR");

export default function CartDrawer() {
  const { cart, changeQty, isCartOpen, closeCart, total, shipping, whatsappCheckoutLink } = useCart();
  const entries = Object.entries(cart);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-ink/45 backdrop-blur-[2px] z-[60] transition-opacity ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-[420px] max-w-[92vw] bg-white z-[70] shadow-float flex flex-col transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-[22px] py-5 border-b border-border">
          <h3 className="text-[18px] font-semibold">Tu carrito</h3>
          <button
            onClick={closeCart}
            className="w-[34px] h-[34px] rounded-[10px] border border-border bg-white flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[22px] py-4.5 flex flex-col gap-4">
          {entries.length === 0 ? (
            <div className="text-center text-ink-soft text-sm py-16">
              Tu carrito está vacío.
              <br />
              Agregá productos desde el catálogo.
            </div>
          ) : (
            entries.map(([key, c]) => {
              const p = PRODUCTS.find((pp) => pp.id === c.id);
              if (!p) return null;
              const optsStr = Object.values(c.opts).join(" · ");
              return (
                <div key={key} className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F1F5FB] to-[#E7EEFA] flex items-center justify-center shrink-0">
                    <ProductIcon name={p.icon} className="w-1/2 h-1/2 text-accent" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="text-[13.5px] font-semibold">{p.name}</div>
                    {optsStr && <div className="font-mono text-[13px] text-ink-soft">{optsStr}</div>}
                    <div className="font-mono text-[13px] text-ink-soft">{fmt(p.price)}</div>
                    <div className="flex items-center gap-2.5 mt-0.5">
                      <button
                        onClick={() => changeQty(key, -1)}
                        className="w-6 h-6 rounded-[7px] border border-border bg-white text-sm leading-none"
                      >
                        −
                      </button>
                      <span className="font-mono text-[13px] min-w-[14px] text-center">{c.qty}</span>
                      <button
                        onClick={() => changeQty(key, 1)}
                        className="w-6 h-6 rounded-[7px] border border-border bg-white text-sm leading-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => changeQty(key, -999)}
                    className="text-[11.5px] text-red-500 self-start"
                  >
                    Quitar
                  </button>
                </div>
              );
            })
          )}
        </div>

        {entries.length > 0 && (
          <div className="border-t border-border px-[22px] pt-5 pb-6 flex flex-col gap-3">
            <div className="flex justify-between text-sm text-ink-soft">
              <span>Subtotal</span>
              <span className="font-mono">{fmt(total)}</span>
            </div>
            <div className="flex justify-between text-sm text-ink-soft">
              <span>Envío</span>
              <span className="font-mono">{shipping === 0 ? "Gratis" : fmt(shipping)}</span>
            </div>
            <div className="flex justify-between text-[18px] font-bold">
              <span>Total</span>
              <span className="font-mono text-[20px]">{fmt(total + shipping)}</span>
            </div>
            <a
              href={whatsappCheckoutLink()}
              target="_blank"
              rel="noreferrer"
              className="bg-green text-white w-full py-3.5 rounded-2xl font-semibold text-[14.5px] flex items-center justify-center gap-2.5 shadow-[0_10px_22px_-8px_rgba(22,163,74,.5)] hover:bg-[#128a3e] transition"
            >
              <WhatsappIcon />
              Finalizar por WhatsApp
            </a>
            <button
              onClick={closeCart}
              className="w-full py-3 rounded-2xl font-semibold text-[14.5px] bg-white text-ink border border-border hover:border-ink transition"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
