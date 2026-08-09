import React, { useState } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <Header onSearch={setSearchQuery} />
      <Hero />
      <ProductGrid searchQuery={searchQuery} />

      <footer className="border-t border-border py-9 mt-5 text-center text-ink-soft text-[13px]">
        © 2026 NEXO Tecnología — Todos los derechos reservados.
      </footer>

      <CartDrawer />
      <ProductDetail />
    </CartProvider>
  );
}
