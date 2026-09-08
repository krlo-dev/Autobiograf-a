# Autobiografía — Carlos Rodríguez

Sitio personal construido con Next.js (App Router) y Tailwind CSS. Cada
sección de la autobiografía es una ruta independiente.

## Rutas

- `/` — Quién soy
- `/historia` — Mi historia
- `/formacion` — Mi formación
- `/intereses` — Mis intereses
- `/vida-actual` — Mi vida actual
- `/futuro` — Mi futuro (incluye la sección de contacto)

## Estructura

- `app/data/site.ts` — todo el contenido del sitio (textos, fechas, enlaces,
  listas). Para cambiar cualquier texto, fecha o dato del sitio, edita este
  archivo; no necesitas tocar el resto del código.
- `app/layout.tsx` — layout raíz: carga las fuentes (Geist, Inter, JetBrains
  Mono), el encabezado y el pie de página comunes a todas las páginas.
- `app/globals.css` — paleta de colores y escala tipográfica, definidas con
  `@theme` de Tailwind v4.
- `app/components/Header.tsx` — encabezado con la navegación; resalta la
  sección activa según la ruta actual.
- `app/components/Footer.tsx` — pie de página.
- `app/components/ChapterFooterNav.tsx` — enlaces "capítulo anterior /
  siguiente" al final de cada sección.
- `app/<seccion>/page.tsx` — una carpeta por ruta, con el contenido visual de
  cada sección.
- `public/images/perfil.svg` — foto de perfil usada en el encabezado y en la
  sección "Quién soy". Reemplázala por una imagen real (jpg/png) y actualiza
  la ruta donde se usa `perfil.svg` en `app/components/Header.tsx` y
  `app/page.tsx`.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Producción

```bash
npm run build
npm run start
```
# Autobiograf-a
