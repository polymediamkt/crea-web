# Cambio 05 — Mejora de UI orientada a conversión

Lee primero `AGENTS.md`, los archivos `cambio-0X-*.md` anteriores y el código actual del sitio. Este cambio **refina el sitio existente** (no lo rediseña): conserva color, tipografía, estructura, copy aprobado y lista de proyectos, y ataca la fricción del embudo de conversión. **Si algo de los archivos de instrucciones contradice el código actual, manda el código actual.**

## Contexto
Una revisión de diseño (Impeccable critique) puntuó el sitio con 26/36 (banda "Good") y detectó que la fricción no era cosmética sino de recorrido: el CTA principal daba dos saltos mientras un atajo idéntico (barra fija) resolvía en uno; la maquinaria de personalización por servicio ya existía pero estaba rota en los puntos de menor atención; y la prueba más fuerte (obra terminada) aparecía sellada con notas internas.

Decisiones tomadas con CREA:
1. Mantener la página de contacto como destino de los CTA de cotizar (regla del brief), pero compactarla y personalizar los atajos.
2. Las tarjetas de sector de Mantenimiento se enlazan con `?sector=`.
3. Los marcadores `[POR CONFIRMAR]` dejan de ser UI visible: pasan a comentarios HTML y a la checklist de este archivo.
4. El teléfono de llamadas es el mismo del WhatsApp (+52 998 200 2552).
5. Los ajustes de color para AA se proponen como tokens nuevos, pendientes de aprobación de CREA.

## Qué cambió

### Fricción del embudo (inicio + contacto)
- **Contacto:** hero compacto (H1 `clamp(40px, 6vw, 76px)`, menos padding) y h2 redundante "Formas de escribirnos" solo para lectores de pantalla. La tarjeta de WhatsApp queda visible sin scroll a 390×844.
- **Contacto:** se añade la barra fija móvil de WhatsApp con el mensaje contextual (`data-wa`). El botón flotante de escritorio **no** se añade en esta página: tapaba el botón "Enviar mensaje" del formulario.
- **Contacto:** los enlaces de WhatsApp del footer (CTA azul, número e ícono) heredan el mensaje del servicio.
- **Formulario:** opción "Aire acondicionado (instalación)" y preselect tolerante (`SERVICIOS['aire-acondicionado']` encuentra la opción aunque el texto sea más largo).
- **Inicio:** las 4 tarjetas de sector son enlaces a `contacto/?servicio=mantenimiento&sector=…` con "Cotizar →" visible. La banda de pólizas queda separada 64px del CTA principal.
- **Medición:** `cta_ir_a_contacto` incluye `servicio` (parseado del `href`) y `data-track` admite varios eventos por clic. El CTA de Mantenimiento emite `cta_ir_a_contacto` + `mantenimiento_seccion_principal`; la banda de pólizas, `cta_ir_a_contacto` + `mantenimiento_banner`. El formulario emite `contacto_formulario_enviado` (antes `form_submit`).

### Confianza
- **Footer (3 páginas):** columna "Arquitectos" con **Eivar Alonso Trejo García — Arquitecto principal** y **Roberto Arroyo — Supervisión arquitectónica**. Sin placeholders.
- **Portafolio:** sin pill negro sobre las fotos ni caption en el visor. `alt` descriptivo por foto (17), distinguiendo renders de fotos de obra.
- **Notas internas** de Proyectos, Mantenimiento, Nosotros, paquete de aire y aviso de privacidad: movidas a comentarios HTML.
- **Contacto:** se retira la nota del teléfono de llamadas y el marcador del horario.

### Accesibilidad y técnica
- **Tokens nuevos:** `--blue-cta: #0070d0` (blanco encima = **4.97:1**, AA) para botones pill y `--blue-ink: #0066c4` (sobre blanco ≈ **5.5:1**, AA) para texto azul en fondos claros. `--blue` queda intacto para secciones y acentos.
- **Peso 700** en textos sobre `--blue` (hero, cierre, tarjeta destacada, canal destacado, paquete) y `.paquete-note` a 14px blanco sólido.
- **Grises a AA:** placeholders `#767676`, notas y etiquetas `#6f6f6f`, textos del footer `#9a9a9a`, crédito a 13px.
- **Touch:** botón "copiar correo" de 28×28 a 44×44.
- **Técnica:** menú móvil con foco al abrir y cierre al tocar fuera; `scroll-padding-top` móvil a 96px; video del hero reproduce a petición del usuario y la etiqueta refleja el estado real; CSS muerto (`.contact*`, `.aire-desc-grid`) y comentario duplicado eliminados.

## Dependencia pendiente: aprobación de CREA
Los tokens `--blue-cta` y `--blue-ink` cambian el tono de los botones y del texto azul. AGENTS.md congela `--blue`; estos tokens son una propuesta medida para cumplir AA. Si CREA los rechaza, revertir es una línea por token en `css/styles.css` (volver a `var(--blue)`).

## Checklist de pendientes para CREA
- **P0 legal:** el aviso de privacidad sigue siendo un texto de trabajo; debe redactarlo y aprobarlo CREA o su asesoría legal (ver comentario en `privacidad.html`).
- **P0 confianza:** de las 4 fotos destacadas, dos son **renders** (fachada e interior del restaurante) y una es obra en proceso. La sección dice "Obra terminada, no promesas." Decidir: reemplazar por fotos de obra terminada, rotular los renders o ajustar el copy.
- **P1 horario:** "Lunes a viernes, 9 a.m. a 6 p.m." se publica como dato confirmado en el footer y en contacto. Confirmarlo o cambiarlo.
- **P1 pólizas:** qué incluyen, tiempos de respuesta y cobertura.
- **P1 proyectos:** nombre, ubicación y tipo de cada obra (hoy sin caption, listo para reactivarse con `PROYECTO_PIE` en `js/main.js`).
- **P1 nosotros:** año de fundación, trayectoria, composición del equipo y cobertura exacta.
- **P1 paquete de aire:** alcance del paquete, duración/cobertura de la garantía y qué cubre la póliza.
- **P2 imágenes:** `crea-project-01/02/03` son fotos de celular con marca de agua (Redmi Note 13, fecha); considerar reemplazo.
- **P2 coverage:** "Cancún y Quintana Roo" se publica como cobertura; confirmar.

## Verificación
- Revisado a 1440px y 390px (y 320px) con Chrome headless + emulación CDP: sin desbordes horizontales (`scrollWidth === viewport`).
- Detector Impeccable: `low-contrast` bajó de 70 a 22 en total (index 29→9, contacto 21→2, aire 20→11). Lo restante es blanco sobre `--blue` en superficies de marca, con la mitigación de peso/tamaño del brief. Los CTA pills (token `--blue-cta`) ya no aparecen.
- Los falsos positivos del detector (`icon-tile-stack`, `numbered-section-labels`, `codex-grid-background`, `dark-glow`, `overused-font`) son el lenguaje visual especificado en AGENTS.md.

## Rollback
- `git checkout pre-mejora-ui` — diseño anterior a este cambio.
- `git checkout capa-1-friccion`, `capa-2-confianza`, `capa-3-accesibilidad` — puntos intermedios.
