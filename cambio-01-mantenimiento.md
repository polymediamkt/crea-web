# Cambio 01 — Dar énfasis al servicio de Mantenimiento

Lee primero `AGENTS.md` y el código actual del sitio. Esta tarea **modifica la página ya construida**; no la rehagas. No toques nada que no esté listado aquí.

## Objetivo
CREA es una constructora con varios servicios. Pide dar **más promoción al servicio de mantenimiento**, sin descuidar los demás. Ofrece mantenimiento **preventivo y correctivo, y cubre todas las áreas**. Hoy la página no lo menciona en ningún lado.

## Cambios

### 1. Hero
- Eyebrow: "Construcción · Mantenimiento · Arquitectura · Diseño".
- Línea de apoyo: "Arquitectura, diseño, construcción y mantenimiento bajo un mismo equipo."
- El título y los botones se quedan igual.

### 2. Servicios: de 3 a 4 bloques
- Agrega la tarjeta **Mantenimiento** y hazla la **destacada** (por ejemplo, fondo `--blue` con texto blanco). Mantén las otras tres como están.
- Contenido de la tarjeta:
  - Beneficio: "Preventivo y correctivo, en todas las áreas."
  - Lista: Mantenimiento preventivo · Mantenimiento correctivo · Todas las áreas.
  - Enlace "Cotizar →" a WhatsApp con el mensaje: "Hola, me interesa el servicio de mantenimiento con CREA."
- Ajusta la rejilla para 4 tarjetas: 4 columnas en escritorio, 2×2 en tablet y 1 columna en móvil.
- Texto blanco sobre azul: peso 700+ y 14px+ (el contraste es de ~3.5:1).

### 3. Nueva sección "Mantenimiento"
Colócala **justo después de Servicios y antes de "Cómo trabajamos"**, con `id="mantenimiento"`. Renumera los eyebrows de las secciones siguientes (02 Mantenimiento, 03 Cómo trabajamos, etc.).

Contenido:
- **Eyebrow:** "02 — Mantenimiento".
- **Título (Anton):** "Mantenimiento preventivo y correctivo, en todas las áreas."
- **Texto:** "En CREA damos mantenimiento preventivo y correctivo, y cubrimos todas las áreas. Prevenimos fallas antes de que ocurran y las resolvemos cuando aparecen."
- **Dos tarjetas lado a lado:**
  - *Preventivo:* "Revisiones y trabajos programados para evitar fallas y alargar la vida útil de tu inmueble o instalación." CTA: "Cotizar preventivo →", mensaje de WhatsApp: "Hola, me interesa el mantenimiento preventivo con CREA."
  - *Correctivo:* "Reparación de fallas y daños cuando ya ocurrieron, para que tu operación vuelva a la normalidad." CTA: "Cotizar correctivo →", mensaje de WhatsApp: "Hola, necesito mantenimiento correctivo con CREA."
- **Áreas que cubrimos:** chips con las áreas que ya aparecen en el sitio (Obra civil, Instalaciones, Obra eléctrica, Hidrosanitaria, Vías terrestres, Media y baja tensión eléctrica) y la nota "y todas las áreas de tu proyecto".
- **CTA principal:** botón grande "Cotiza mantenimiento por WhatsApp →" con el mensaje: "Hola, me interesa el servicio de mantenimiento con CREA."
- **Marcador visible:** `[POR CONFIRMAR] — Tipos de cliente atendidos, tiempos de respuesta y cobertura.` No inventes tiempos de respuesta, atención 24/7, garantías, contratos ni planes.
- **Imagen:** una foto de stock relacionada con mantenimiento (técnico o personal revisando una instalación, obra o inmueble). Usa los motivos gráficos del sitio (rejilla, íconos outline, círculos numerados) para que encaje con el resto.

### 4. Imágenes de stock (temporales)
CREA todavía no entrega las fotos de mantenimiento. Mientras tanto:
- Usa imágenes de stock de licencia libre para uso comercial (Unsplash o Pexels) y **verifica la licencia**.
- Sigue la convención de las demás imágenes de stock del sitio: carpeta `assets/img/stock/`, `.webp`, versiones responsivas (por ejemplo, `mantenimiento-768.webp`), `loading="lazy"`, `width/height`, y `alt` que termine con: "Imagen de archivo con fines ilustrativos, no corresponde a una obra de CREA."
- Deja un comentario `<!-- TODO: reemplazar por foto real de CREA -->` junto a cada imagen y mantén las rutas fáciles de sustituir.
- Si no puedes descargar imágenes, crea placeholders con los mismos nombres y dimensiones y dime qué imágenes debo conseguir.

### 5. Navegación, formulario y footer
- Menú del header (escritorio y móvil): agrega "Mantenimiento" entre Servicios y Proyectos, apuntando a `#mantenimiento`.
- Formulario: agrega la opción **"Mantenimiento"** al select de tipo de proyecto.
- Footer: agrega "Mantenimiento" a la lista de servicios y a la línea "Construcción · Arquitectura · Diseño" (© y descripción).
- Eventos de medición: registra los clics de los nuevos botones de WhatsApp con su ubicación (`mantenimiento_card`, `mantenimiento_seccion_preventivo`, `mantenimiento_seccion_correctivo`, `mantenimiento_seccion_principal`).

### 6. SEO
- Title: "Construcción, mantenimiento y arquitectura en Cancún, Quintana Roo | CREA".
- Meta description y `og:description`: incluye "mantenimiento preventivo y correctivo".
- Si existen datos estructurados `LocalBusiness`, agrega el servicio de mantenimiento.

## Reglas
- Mantén el lenguaje visual actual (colores, Anton y Montserrat, botones pill, tarjetas redondeadas).
- Cumple la accesibilidad de `AGENTS.md`: texto de 12px mínimo, altura táctil de 44px, `alt`, foco visible y `prefers-reduced-motion`.
- No cambies el resto del contenido, ni los datos de contacto, ni el comportamiento de otras secciones.

## Forma de trabajo
1. Resume brevemente qué archivos vas a tocar y espera mi confirmación solo si algo no está claro.
2. Aplica los cambios.
3. Revisa a 1440px y a 390px.
4. Entrégame un resumen con: qué cambió, qué imágenes de stock usaste (y sus rutas, para que yo las reemplace) y qué quedó marcado como `[POR CONFIRMAR]`.
