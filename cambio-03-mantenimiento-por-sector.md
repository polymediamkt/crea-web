# Cambio 03 — Sección de Mantenimiento: correctivo y preventivo en obra, por sector

Lee primero `AGENTS.md`, `cambio-01-mantenimiento.md` y el código actual del sitio. Esta tarea **modifica solo la sección "Mantenimiento" del inicio** (la creada en el cambio 01) y lo que depende de ella. No rehagas el sitio. **Si algo de los archivos de instrucciones contradice el código actual, manda el código actual.**

## Objetivo
La sección de Mantenimiento se presenta como **"Mantenimiento correctivo y preventivo en obra"** y se divide en tres sectores: **Residencial, Comercial e Industrial**. Cada sector es una tarjeta con su ícono y su botón de cotizar.

## Referencia de patrón (imagen adjunta del usuario)
Es una página de otra empresa. Toma **solo el patrón**: un título que enuncia el servicio, tres tarjetas iguales con ícono circular, una línea azul separadora y el nombre del sector en mayúsculas, y una banda ancha de color debajo con un mensaje grande.
- **No copies** sus colores, su tipografía, sus íconos ni sus textos.
- El texto "en sus equipos" de la referencia aquí es **"en obra"**.
- Respeta la identidad de CREA: colores del sitio, Anton y Montserrat, botones pill, tarjetas redondeadas y motivos de rejilla.

## Estructura de la sección (en este orden)
Mantén `id="mantenimiento"`, la posición actual (después de Servicios) y el eyebrow numerado.

1. **Encabezado**
   - Eyebrow: "02 — Mantenimiento".
   - Título (Anton): "Mantenimiento correctivo y preventivo en obra."
   - Texto breve: "Prevenimos fallas antes de que ocurran (mantenimiento preventivo) y las resolvemos cuando aparecen (mantenimiento correctivo). Elige el tipo de obra."
2. **Tres tarjetas de sector**, en este orden: **Residencial, Comercial, Industrial.** Cada una con:
   - Ícono: SVG inline outline, `aria-hidden`, dentro de un círculo o cuadro redondeado con borde `--blue`, con el estilo de íconos del sitio. Un ícono distinto por sector (casa, comercio o edificio, y nave o casco con engrane).
   - Una línea fina azul separadora.
   - Nombre del sector en mayúsculas (Montserrat 800).
   - Una línea descriptiva corta (borrador, a validar con CREA): *Residencial:* "Casas, departamentos y conjuntos habitacionales." · *Comercial:* "Locales, oficinas y plazas." · *Industrial:* "Naves, bodegas e instalaciones industriales."
   - Botón "Cotizar mantenimiento →".
   Rejilla: 3 columnas en escritorio y 1 columna en móvil (el sitio usa un solo breakpoint, 800px). La tarjeta completa debe ser clicable, o al menos todo el botón.
3. **Áreas que cubrimos:** conserva los chips del cambio 01 (Obra civil, Instalaciones, Obra eléctrica, Hidrosanitaria, Vías terrestres, Media y baja tensión eléctrica y "y todas las áreas de tu proyecto"), ahora como fila secundaria debajo de las tarjetas.
4. **Banda de cierre** (equivalente a la banda azul de la referencia): fondo `--black` con el motivo de rejilla azul (si la sección ya es oscura, usa `--blue`), ancho del contenedor, texto grande y un botón.
   - Texto (en Anton, con la palabra "pólizas" resaltada en `--blue` sobre fondo negro, como en la referencia): "¡Ofrecemos pólizas de mantenimiento! Preventivo y correctivo para tu obra."
   - Botón: "Cotizar mi póliza →".
   - CREA **sí ofrece pólizas de mantenimiento** (confirmado). No afirmes nada más sobre ellas: ni qué incluyen, ni periodicidad, ni precios, ni descuentos, ni tiempos de atención, ni "rehabilitación de equipos" u otros servicios que no estén confirmados.
5. **Marcador visible:** `[POR CONFIRMAR] — Qué incluyen las pólizas de mantenimiento, tiempos de respuesta y cobertura.` (reemplaza al marcador anterior).

## Qué se elimina o se mueve
- Quita las **dos tarjetas grandes "Preventivo" y "Correctivo"** del cambio 01: la explicación pasa al texto breve del encabezado y la división ahora es por sector.
- La **imagen de stock de la sección** sale de esta sección, porque las tarjetas llevan el peso visual. **No borres el archivo** ni sus versiones responsivas de `assets/img/stock/`; déjalos para reutilizarlos cuando lleguen las fotos reales de CREA, y dime las rutas.
- En la tarjeta "Mantenimiento" de Servicios, agrega solo un elemento a la lista: "Pólizas de mantenimiento". No toques nada más de esa tarjeta ni el resto de la página.

## Botones y página de contacto
Revisa cómo funcionan hoy los botones de cotizar:
- **Si ya existe `contacto/` con parámetros de URL (cambio 02):** los botones de las tarjetas y de la banda llevan a `contacto/?servicio=mantenimiento&sector=<residencial|comercial|industrial>`. La banda lleva a `contacto/?servicio=mantenimiento&tipo=poliza`. Agrega el parámetro **`sector`** a la página de contacto, con valores válidos `residencial`, `comercial` e `industrial` (los desconocidos se ignoran):
  - Muestra el sector en la etiqueta del hero: "Servicio: Mantenimiento · Residencial".
  - Envía `sector` en un campo oculto del formulario.
  - Personaliza los mensajes. WhatsApp: "Hola, me interesa el mantenimiento preventivo y correctivo para obra [residencial/comercial/industrial] con CREA." Correo: asunto "Mantenimiento [sector] — CREA".
  - Sin `sector`, se usan los mensajes del cambio 02.
  - El parámetro `tipo` acepta ahora `preventivo`, `correctivo` y **`poliza`**. La banda usa `tipo=poliza`: mensaje de WhatsApp "Hola, me interesa una póliza de mantenimiento con CREA.", asunto de correo "Póliza de mantenimiento — CREA" y etiqueta del hero "Servicio: Mantenimiento · Póliza".
- **Si todavía no existe:** conserva el comportamiento actual de los botones (WhatsApp con mensaje prellenado) y usa los mensajes de arriba. Dime que el cambio 02 aún no estaba aplicado.

## Medición
Eventos con la ubicación del botón: `mantenimiento_sector_residencial`, `mantenimiento_sector_comercial`, `mantenimiento_sector_industrial` y `mantenimiento_banner`. Reemplazan a los eventos de los botones eliminados (`mantenimiento_seccion_preventivo` y `mantenimiento_seccion_correctivo`).

## SEO
Actualiza la meta description y `og:description` para mencionar "mantenimiento preventivo y correctivo residencial, comercial e industrial, y pólizas de mantenimiento". No cambies el title.

## Accesibilidad y reglas
- Foco visible, altura táctil mínima de 44px, texto de 12px mínimo, `prefers-reduced-motion` respetado.
- Texto sobre `--blue`: peso 700+ y 14px+ (contraste de ~3.5:1). No cambies `--blue`.
- No inventes datos. Usa `[POR CONFIRMAR]` donde falte información.

## Forma de trabajo
1. Resume qué archivos vas a tocar. Espera mi confirmación solo si algo no está claro.
2. Aplica los cambios.
3. Revisa a 1440px y a 390px, y prueba los enlaces de las tarjetas y de la banda (incluida la página de contacto, si existe).
4. Entrégame un resumen con: qué cambió, las rutas de la imagen de stock que dejaste sin usar y qué quedó como `[POR CONFIRMAR]`.
