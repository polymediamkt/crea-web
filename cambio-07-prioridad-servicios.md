# Cambio 07 — Prioridad de Mantenimiento y Aire acondicionado en Servicios

Lee primero `AGENTS.md` y los `cambio-0X-*.md` anteriores. Cambio acotado a la sección de Servicios del inicio.

## Objetivo
Mantenimiento y aire acondicionado son los servicios prioritarios del negocio. Sus tarjetas deben leerse antes que construcción, arquitectura y diseño.

## Qué cambió
- **Orden del HTML (y por tanto del DOM):** Mantenimiento → Aire acondicionado → Construcción → Arquitectura → Diseño. El orden del DOM manda también para lectores de pantalla y para el orden en móvil (1 columna).
- **Rejilla de escritorio:** con el nuevo orden, la fila superior son 2 tarjetas anchas (cada una ocupa la mitad) y la inferior son 3 tarjetas. Se usó la misma retícula de 6 columnas: las tarjetas 1 y 2 abarcan 3 columnas; las 3 restantes, 2 cada una.
- **Tablet (681–1100px):** 2 columnas, todas al mismo ancho (prioridad en la primera fila). La quinta tarjeta (Diseño) queda sola en la última fila y se **centra** a media anchura para no dejar un hueco. **Móvil:** 1 columna, prioridad arriba.
- La tarjeta azul destacada sigue siendo Mantenimiento (`card--featured`); Aire acondicionado conserva su CTA "Ver servicio →" hacia su página.

## Copy
No se tocó el texto de la sección (título, lead ni beneficios). Nota: el lead dice "Construcción, arquitectura y diseño. Elige el punto de partida…", que ya no menciona los dos servicios que ahora encabezan la sección. Si CREA quiere alinearlo, es un cambio de una línea.

## Verificación
- Render a 1440px: fila 1 con Mantenimiento (azul) y Aire acondicionado a mitad de ancho; fila 2 con Construcción, Arquitectura y Diseño.
- Render a 1024px (tablet): 2 columnas con la prioridad en la primera fila y la quinta tarjeta centrada.
- Render a 801px: igual que tablet, sin desbordes.
- Render a 390px: columna única, Mantenimiento primero.
- Sin desbordes horizontales (`scrollWidth === viewport`) ni errores de consola.

## Rollback
- `git revert <commit>` de este cambio.
