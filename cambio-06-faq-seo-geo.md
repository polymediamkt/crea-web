# Cambio 06 — Sección de preguntas frecuentes (SEO + GEO)

Lee primero `AGENTS.md`, los archivos `cambio-0X-*.md` anteriores y el código actual del sitio. Este cambio **agrega una sección nueva** al inicio y **otra a la página de aire acondicionado**; no toca el resto del sitio. **Si algo de los archivos de instrucciones contradice el código actual, manda el código actual.**

## Objetivo
Captar búsquedas informacionales y de intención comercial ("cuánto cuesta construir en Cancún", "cuánto tarda una obra", "qué incluye la instalación de aire acondicionado") y quedar bien posicionado tanto en buscadores clásicos como en motores generativos (ChatGPT, Perplexity, AI Overviews de Google, Gemini). El FAQ no reemplaza la conversión: la alimenta con respuestas claras y un CTA al final.

## Decisiones tomadas con CREA
1. **Costos y tiempos con rangos de mercado.** Se publican los rangos locales 2026 ($12,000–$24,000 MXN/m² en obra residencial; 8–14 meses de obra + 2–4 de proyecto y trámites) como **referencia del mercado**, no como tarifa de CREA. Quedan pendientes de confirmación (ver checklist).
2. **La cotización no tiene costo.** Dato confirmado por CREA; se responde directo ("No. La cotización de CREA no tiene costo.").
3. **FAQ propio en la página de aire acondicionado.** Ese servicio se maneja como modelo aparte y necesita su propio SEO/GEO; no reutiliza las preguntas del inicio.
4. **Sin pregunta de permisos por ahora.** "¿Tramitan permisos y licencias?" es la consulta frecuente del sector, pero CREA no lo ha confirmado. Queda anotada para cuando se confirme.

## Qué cambió

### Inicio (`index.html`)
- Sección nueva **`#faq`**, entre Nosotros y la banda de cierre, con eyebrow **"06 — Preguntas frecuentes"** y título "Preguntas frecuentes antes de cotizar."
- **12 preguntas** en acordeón nativo (`<details>/<summary>`), sin JavaScript: costo de construir, tiempos, costo de la cotización, qué se necesita para cotizar, servicios, cobertura, proyecto ejecutivo, mantenimiento, aire acondicionado, equipo integrado, proceso y contacto.
- Cada pregunta lleva círculo numerado (motivo del brief), H3 y respuesta de 40–110 palabras escrita para leerse **fuera de contexto** (answer-first, con entidades: Cancún, Quintana Roo, CREA).
- CTA de cierre **"Cotiza tu proyecto →"** a `contacto/` (evento `cta_ir_a_contacto`, posición `faq`).
- Schema **`FAQPage`** en JSON-LD. El texto del schema repite exactamente el texto visible (incluido el enlace a la página de aire); verificado por script.

### Página de aire acondicionado (`instalacion-aire-acondicionado-cancun/index.html`)
- Sección nueva **`#faq`**, entre "Lo que obtienes" y la banda de cierre, con eyebrow "Preguntas frecuentes".
- **6 preguntas**: costo de instalación, paquete básico, garantía, marcas, cobertura y cómo cotizar. Sin precios fijos (no hay tarifa confirmada) y sin detallar paquete/garantía hasta que CREA confirme el alcance.
- CTA **"¿Otra duda? Escríbenos →"** a `../contacto/?servicio=aire-acondicionado` (evento `aire_faq`). Se evita repetir el "Cotizar instalación →" de la banda de cierre que va inmediatamente después.
- Schema **`FAQPage`** independiente; texto idéntico al visible (verificado).

### Estilos (`css/styles.css`)
- Bloque **17d** reutilizable por ambas páginas: fondo `--soft`, rejilla de dos columnas (título/lead a la izquierda, acordeón a la derecha), tarjetas blancas con borde `--line` y radio `--rs`, borde azul al abrir, ícono +/− con transición, `focus-visible` claro y respuestas a 66ch.
- Responsive: una columna a ≤1080px; en móvil el cuerpo de la respuesta pierde la sangría y el CTA ocupa el ancho completo.

## Por qué así (SEO y GEO)
- **Pregunta = lenguaje de búsqueda real**, no lenguaje de folleto: las preguntas se redactaron como se escriben en Google o en un chat.
- **Respuestas autónomas**: ninguna depende de "como se dijo arriba"; los motores generativos extraen pares pregunta-respuesta sueltos.
- **Longitud 40–110 palabras**: suficiente contexto para ser citables, sin diluir la señal de extracción.
- **Contenido en HTML puro** (`details/summary`): rastreable sin ejecutar JS y accesible por teclado. El acordeón solo oculta visualmente; el texto siempre está en el documento.
- **`FAQPage` + texto visible idéntico**: Google dejó de mostrar rich results de FAQ en 2026, pero el marcado sigue siendo una señal limpia para parsers de IA; lo que penaliza es el FAQ falso, no el schema en contenido real.
- **Una sección por página, no una página de FAQs**: mantiene el foco temático de cada URL (obra general vs. aire acondicionado), que es lo que premia el fan-out de consultas.

## Checklist de pendientes para CREA
- **Rangos del FAQ:** confirmar o corregir $12,000–$24,000 MXN/m² y 8–14 meses + 2–4. Si hay cifras propias, sustituirlas en el texto **y** en el schema (deben coincidir).
- **Permisos:** confirmar si CREA tramita licencias, DRO, CFE y conexiones para agregar esa pregunta al FAQ del inicio.
- **Paquete de aire y garantía:** confirmar alcance, duración y cobertura para cerrar las respuestas 02 y 03 del FAQ de aire.
- **Cobertura:** "todo Quintana Roo" se publica como en el resto del sitio; confirmar.
- Todo lo anterior ya está anotado en `AGENTS.md` → "Pendiente de confirmar con CREA".

## Verificación
- Script propio vía CDP: `FAQPage` del inicio (12 pares) y de aire (6 pares) **coinciden palabra por palabra** con el texto visible; 0 discrepancias.
- Render a 1440px y 390px en ambas páginas: `scrollWidth === viewport`, sin desbordes (los únicos "offenders" son los carruseles, que desbordan a propósito).
- Acordeón probado: abre/cierra con clic y teclado, borde azul en abierto, ícono +/− correcto.
- Contraste: respuestas `#4a4a4a` sobre blanco (≈8.7:1) y lead `#5f5f5f` sobre `--soft` (≈5.9:1), AA.
- Enlaces internos nuevos (aire → `../contacto/?servicio=aire-acondicionado`, inicio → `contacto/` y página de aire) verificados.

## Rollback
- `git revert <commit>` de este cambio, o `git checkout capa-3-accesibilidad -- index.html css/styles.css instalacion-aire-acondicionado-cancun/index.html` para volver al estado previo al FAQ (conserva los cambios posteriores de portafolio en `js/main.js`, que este cambio no toca).
