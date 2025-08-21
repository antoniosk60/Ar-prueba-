# ARTELECOM – Sitio Demo (HTML + Tailwind + AOS)

Este es un demo moderno para **ARTELECOM (Antonio Randa Telecomunicaciones)** con diseño responsivo, animaciones y formulario funcional vía Formspree.

## Estructura
```
artelecom_site/
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ script.js
└─ images/
   ├─ hero.jpg
   ├─ about.jpg
   ├─ port1.jpg ... port6.jpg
   └─ favicon.png
```

> Coloca tus fotos reales dentro de `images/` con esos nombres o ajusta las rutas en el HTML.

## Personalización rápida
- **Título/SEO:** edita `<title>` y `<meta name="description">` en `index.html`.
- **Open Graph:** actualiza `og:url` y `og:image` (pon un cover 1200x630).
- **Colores:** ajusta la paleta en `tailwind.config` (dentro del `<script>` del head).
- **Frase del hero:** cambia el `h1` y el párrafo de la sección Hero.

## Formulario (Formspree)
1. Crea una cuenta en Formspree y un formulario nuevo.
2. Copia el endpoint (ej. `https://formspree.io/f/abcdwxyz`).
3. En `index.html`, reemplaza `https://formspree.io/f/XXXXXXXX` por tu endpoint real.

## Despliegue en GitHub Pages
1. Sube esta carpeta a tu repo (por ejemplo `grupo-ar`).
2. En **Settings → Pages**, elige la rama (`main`) y carpeta raíz (`/`).
3. Espera a que se genere la página y visita la URL que te da GitHub.
4. (Opcional) Configura un **dominio propio** y agrega registros DNS (CNAME y A).

## Rendimiento y buenas prácticas
- Todas las imágenes tienen `loading="lazy"`.
- Usa **Squoosh** o **TinyPNG** para comprimir tus fotos.
- Si quieres compilar Tailwind en producción, migra a un flujo con `postcss`/`vite`.

## Soporte
Cualquier duda o mejora, abre un issue o actualiza los textos en `index.html`.
