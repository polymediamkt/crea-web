# Cambio 09 — Aviso de privacidad definitivo

Lee primero `AGENTS.md` y los `cambio-0X-*.md` anteriores. Este cambio **sustituye el texto de trabajo** de `privacidad.html` por el aviso que entregó CREA.

## Origen
Documento `assets/AVISO DE PRIVACIDAD CREA, ARQUITECTURA Y DISEÑO.docx` (Word, 2026-10-29). Se extrajo el texto y se maquetó con los estilos legales del sitio.

## Qué cambió
- **Contenido completo:** introducción + 9 secciones (datos que se recaban, finalidades primarias y secundarias, transferencias, cookies, medidas de seguridad, derechos ARCO, revocación del consentimiento, cambios y contacto).
- **Estructura:** 9 `h2` numerados, 4 `h3` para los subgrupos de datos y listas con viñetas (47 puntos).
- **Enlaces:** las referencias a `https://creaqr.mx` se volvieron enlaces (`contacto/` o `index.html`); el "correo de privacidad" y el contacto ARCO apuntan a `info@creaqr.mx`.
- **Estilos:** se añadieron reglas para `h3`, `ul`/`li` y enlaces en línea dentro del texto legal (antes forzaban 44px y rompían el interlineado). El botón "Volver al contacto" conserva su estilo oscuro con texto blanco.
- **Pie de la página:** estructura simplificada a dos columnas (`.foot--legal`), con los datos de contacto apilados; en móvil pasa a una columna.
- **Título fijo:** en escritorio el bloque del título acompaña el scroll (`position: sticky`); en móvil vuelve a estático.

## Ajustes de redacción sobre el documento
Se respetó el contenido; solo se corrigieron cuestiones de forma:
- Nombre de la marca unificado a **CREA, Arquitectura y Diseño** (el documento alternaba "CREA, Diseño y Construcción").
- Nombre oficial de la ley: **Ley Federal de Protección de Datos Personales en Posesión de los Particulares**.
- Correcciones ortográficas (Pérdida, prácticas, píxeles, "qué datos").
- Los enlaces señalados arriba.

## Pendiente de CREA
- **Fecha de vigencia / última actualización:** el documento no la incluye; no se inventó.
- Confirmar que esta versión es la aprobada y si existe un **correo dedicado de privacidad** (hoy se usa `info@creaqr.mx`).
- Revisar la mención de cookies y analíticas contra las herramientas que realmente se instalen al publicar (píxeles de Meta, etc.).

## Verificación
- Render a 1440 y 390: sin desbordes; 9 secciones y 47 puntos visibles.
- Botón "Volver al contacto" con texto blanco y sin subrayado; pie legible en ambos tamaños.
- Enlaces internos, `mailto:` y consola: OK.

## Rollback
- `git revert <commit>`; el texto anterior de trabajo está en el historial.
