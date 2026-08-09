import React, { createContext, useContext, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products.js";

const CartContext = createContext(null);

const WHATSAPP_NUMBER = "5491100000000"; // TODO: reemplazar por el número real de la tienda
const FREE_SHIPPING_THRESHOLD = 80000;
const SHIPPING_COST = 6999;

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}); // { key: { id, opts, qty } }
  const [isCartOpen, setCartOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);

  const addToCart = (id, opts = {}) => {
    const key = id + JSON.stringify(opts);
    setCart((prev) => {
      const existing = prev[key];
      return { ...prev, [key]: { id, opts, qty: (existing?.qty || 0) + 1 } };
    });
  };

  const changeQty = (key, delta) => {
    setCart((prev) => {
      const next = { ...prev };
      const item = next[key];
      if (!item) return prev;
      const qty = item.qty + delta;
      if (qty <= 0) delete next[key];
      else next[key] = { ...item, qty };
      return next;
    });
  };

  const { count, total } = useMemo(() => {
    let count = 0;
    let total = 0;
    Object.values(cart).forEach((c) => {
      const p = PRODUCTS.find((pp) => pp.id === c.id);
      if (!p) return;
      count += c.qty;
      total += p.price * c.qty;
    });
    return { count, total };
  }, [cart]);

  const shipping = total === 0 ? 0 : total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  const whatsappCheckoutLink = () => {
    const items = Object.values(cart)
      .map((c) => {
        const p = PRODUCTS.find((pp) => pp.id === c.id);
        return `${c.qty}x ${p?.name}`;
      })
      .join(", ");
    const msg = `Hola! Quiero finalizar mi compra: ${items}. Total: $${(total + shipping).toLocaleString("es-AR")}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const whatsappInquiryLink = (product) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Quiero consultar por ${product.name}`)}`;

  const value = {
    cart,
    addToCart,
    changeQty,
    count,
    total,
    shipping,
    isCartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    detailProduct,
    openDetail: (product) => setDetailProduct(product),
    closeDetail: () => setDetailProduct(null),
    whatsappCheckoutLink,
    whatsappInquiryLink,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};
