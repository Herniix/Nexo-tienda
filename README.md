# NEXO — Tienda de Tecnología

Storefront headless en **React + Vite + Tailwind CSS**, pensado para máxima
velocidad de carga, diseño premium tipo Apple/Anker/Logitech y conversión
directa por WhatsApp.

## Por qué esta arquitectura

- **React + Vite**: bundling con tree-shaking real y carga inicial mínima
  (a diferencia del editor visual nativo de Tienda Nube, que no permite este
  nivel de control de performance ni de componentes reutilizables).
- **Tailwind CSS**: cero CSS muerto en producción (purga automática), tokens
  de diseño centralizados en `tailwind.config.js`.
- **Sin dependencias de UI pesadas**: los íconos son SVG en línea (`Icons.jsx`),
  no se cargan librerías de íconos completas.
- **Hosting recomendado: Vercel** — despliegue por git push, CDN global,
  HTTPS automático y tiempos de build/deploy de segundos. Alternativa
  equivalente: Firebase Hosting.
- **Tienda Nube** se mantiene como backend de pagos/logística/checkout si se
  desea (vía su API) o se reemplaza el link de WhatsApp por el checkout que
  corresponda — la estructura de datos en `src/data/products.js` está lista
  para conectarse a cualquier API.

## Instalación local

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build de producción

```bash
npm run build      # genera /dist optimizado (JS/CSS minificados, code-splitting)
npm run preview    # sirve /dist localmente para verificar antes de deployar
```

## Despliegue en Vercel

1. Subir este proyecto a un repositorio Git (GitHub/GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com) → **New Project** → importar el repo.
3. Framework detectado automáticamente: **Vite**. Build command: `npm run build`.
   Output directory: `dist`.
4. Deploy. Cada push a `main` genera un nuevo despliegue automáticamente.

## Estructura de archivos

```
src/
  components/
    Header.jsx        Barra superior, megamenú y buscador predictivo
    Hero.jsx           Sección hero con banner promocional
    ProductCard.jsx     Tarjeta de producto (grid)
    ProductGrid.jsx     Grid + filtros dinámicos por categoría
    ProductDetail.jsx   Ficha de producto (selector de specs, envío, checkout)
    CartDrawer.jsx      Panel deslizante del carrito
    Icons.jsx           Set de íconos SVG sin dependencias externas
  context/
    CartContext.jsx     Estado global del carrito (React Context)
  data/
    products.js         Catálogo — reemplazar por fetch a tu API/backend
  App.jsx
  main.jsx
  index.css
```

## Puntos a personalizar antes de producción

- `src/context/CartContext.jsx` → reemplazar `WHATSAPP_NUMBER` por el número real.
- `src/data/products.js` → conectar a la API de Tienda Nube, un CMS o base
  propia en lugar del array estático (misma forma de objeto).
- Reemplazar los íconos de `ProductIcon` por fotografías reales de producto
  (componente `<img>` con `loading="lazy"` y formato WebP/AVIF).
- Meta tags de `index.html` (Open Graph, favicon) para SEO.
