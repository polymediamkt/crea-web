# Cambio 08 — Nueva galería de proyectos (12 fotos)

Lee primero `AGENTS.md` y los `cambio-0X-*.md` anteriores. Este cambio **reemplaza por completo** las fotos del portafolio; no toca layout, copy ni conversión.

## Decisión de CREA
Las 4 destacadas se ordenan **por el número del archivo**, no por criterio visual: `obra-01` grande, `obra-02` y `obra-03` menores, `obra-04` ancha. `obra-05` a `obra-12` alimentan "Ver más proyectos". Los `alt` quedan **neutros** ("Obra de CREA en Cancún, Quintana Roo — foto NN") hasta que CREA confirme pies de foto.

## Qué cambió
- **12 fotos nuevas** (selección de CREA en `C:\Users\marti\Desktop\galería_projectos_crea`), convertidas de JPG/PNG/WebP a WebP con **ffmpeg** (`libwebp`, calidad 82, preset photo) en `assets/img/obra/`:
  - Horizontales: variantes `480`, `768`, `1200`.
  - `obra-02` (vertical, 949×1280): variantes `480`, `768`.
  - Ninguna fuente supera 1280px, así que no hay variante `1600`.
- **Originales movidos dentro del proyecto** a `assets/img/obra-originales/` (01–12 en su formato original).
- **Eliminado:** los 34 webp de las 14 fotos anteriores (`crea-project-*`, `img_2810`, `img_2823`, `img_e2805`, `anahuac`), la carpeta `assets/img/proyectos/` (3 `service-*.webp` del sitio anterior) y su línea en `.gitignore`.
- **`js/main.js`:** arreglo `PROYECTOS` con 12 entradas, dimensiones reales y `alt` neutro. La vertical `obra-02` va en un slot "par" de la rejilla destacada (se recorta con `object-fit: cover`, como el resto).
- **Botón del portafolio:** se movió **después de la galería** (antes iba entre las destacadas y las fotos extra). Así "Ver menos" queda debajo de todas las fotos y se llega a él directo al terminar de verlas; al contraer, el botón se mantiene a la vista (`scrollIntoView`).
- **Hueco bajo la foto grande:** en escritorio la tarjeta grande ahora estira a las dos filas de la rejilla (`height: 100%`), de modo que el bloque de 4 destacadas queda como un rectángulo sin espacio en blanco. En móvil/tablet (≤800px) las cuatro siguen a 240px.
- **`AGENTS.md`:** sección de imágenes, conteo de la galería (8 restantes) y pendientes.

## Pendiente de CREA
- Nombres, ubicación y tipo de las 12 obras para poblar `PROYECTO_PIE` y los `alt` descriptivos.
- Si alguna foto no debe publicarse (render, obra en proceso o marca de agua), retirarla del arreglo y del disco.

## Verificación
- 35 variantes generadas; dimensiones y pesos coherentes (15–203 KB).
- Render a 1440/390: 4 destacadas + 8 en galería, sin imágenes rotas ni desbordes.
- Botón del portafolio: colapsado queda bajo las destacadas; expandido, "Ver menos" aparece al final de las 8 fotos; al contraer, el botón vuelve a quedar visible sin salto brusco.
- Rejilla destacada a 1440: la foto grande llena las dos filas (sin hueco); a 500px las cuatro tarjetas quedan a 240px con `grid-row: auto`.
- `node --check js/main.js`, consola limpia y enlaces internos OK.

## Rollback
- Las fotos anteriores siguen en el historial: `git checkout ca1b604 -- assets/img/obra` recupera los archivos, y `git show ca1b604:js/main.js` el arreglo previo.
