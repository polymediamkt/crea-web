# Cambio 04 — Página de servicio: Instalación de aire acondicionado

Lee primero `AGENTS.md`, los archivos `cambio-0X-*.md` anteriores y el código actual del sitio. Esta tarea **agrega una página nueva y la conecta con el sitio**; no rehagas lo existente. **Si algo de los archivos de instrucciones contradice el código actual, manda el código actual.**

## Objetivo
Crear una página propia dentro del sitio de CREA para la **instalación de aire acondicionado**. Se maneja **como servicio, no como tienda**: sin inventario, sin catálogo de equipos, sin precios, sin carrito. La página debe posicionar bien en búsquedas locales ("instalación de aire acondicionado en Cancún") y llevar al visitante a cotizar.

## Qué es el servicio (datos confirmados por CREA)
- Paquete básico de instalación de aire acondicionado.
- Póliza de mantenimiento a 12 meses.
- Garantía.
- Instaladores calificados.
- Marcas: LG, Mirage, York, Whirlpool y Mabe.

**No inventes nada más.** Nada de precios, descuentos, metros de tubería, materiales incluidos, duración o cobertura de la garantía, número de visitas de la póliza, certificaciones, tiempos de instalación ni años de experiencia. Esos datos van como `[POR CONFIRMAR]`. CREA también vende los equipos (por reventa, sin stock), pero **no se menciona en esta página**: no escribas "venta", "compra", "tenemos en existencia" ni nada sobre inventario o disponibilidad de equipos, y tampoco que no los vende. La página trata solo de la instalación. Tampoco afirmes que CREA es distribuidor autorizado de ninguna marca.

## Nueva página
- Ruta: `instalacion-aire-acondicionado-cancun/index.html` (URL limpia). **Rutas relativas**, para que funcione bajo `/crea-web/` y en la raíz de un dominio.
- Mismo header y footer que el resto del sitio, con "Aire acondicionado" marcado como página actual cuando aplique.
- Mismo lenguaje visual de CREA (colores, Anton y Montserrat, botones pill, tarjetas redondeadas, motivos de rejilla, íconos outline azules).
- El botón flotante de WhatsApp (escritorio) y la barra fija (móvil) funcionan como en el resto del sitio, pero **con el mensaje específico de esta página**: "Hola, me interesa la instalación de aire acondicionado con CREA."

### Estructura (en este orden)
1. **Hero** (azul con rejilla): eyebrow "Aire acondicionado", `<h1>` único "Instalación de aire acondicionado en Cancún", línea de apoyo "Instaladores calificados, garantía y póliza de mantenimiento a 12 meses." y botón principal "Cotizar instalación →". Incluye una imagen de stock (ver abajo).
2. **Descripción breve (SEO):** un párrafo de 60 a 100 palabras, natural y sin relleno. Borrador: "En CREA instalamos aire acondicionado en Cancún y Quintana Roo con instaladores calificados. Cada instalación incluye garantía y una póliza de mantenimiento de 12 meses para que tu equipo funcione bien desde el primer día. Instalamos equipos de las marcas LG, Mirage, York, Whirlpool y Mabe."
3. **Paquete básico de instalación:** tarjeta destacada (fondo `--blue` con texto blanco de peso 700+ y 14px+, o `--black`, según el contraste).
   - Título: "Paquete básico de instalación".
   - Texto: "La instalación de tu aire acondicionado, con respaldo de principio a fin."
   - Lista de lo que incluye: "Instalación del equipo por instaladores calificados" · "Póliza de mantenimiento a 12 meses" · "Garantía".
   - Marcador visible: `[POR CONFIRMAR] — Alcance exacto del paquete básico (materiales, tubería y qué no incluye), duración y cobertura de la garantía, y qué cubre la póliza.`
   - Botón "Cotizar paquete básico →".
4. **Tres pilares**, en tarjetas con ícono outline azul (SVG inline, `aria-hidden`), título y una línea:
   - *Póliza de mantenimiento a 12 meses:* "Cuidamos tu equipo después de instalarlo."
   - *Garantía:* "Respaldo en tu instalación."
   - *Instaladores calificados:* "Personal calificado a cargo de tu instalación."
5. **Marcas (carrusel en movimiento):** título "Instalamos equipos de estas marcas" y los cinco logos, en este orden: LG, Mirage, York, Whirlpool, Mabe. Ver "Carrusel de marcas". Debajo, en texto pequeño: "Las marcas y logotipos pertenecen a sus respectivos propietarios."
6. **Banda de cierre:** título "Cotiza la instalación de tu aire acondicionado", una línea de apoyo y botón "Cotizar instalación →".

## Carrusel de marcas
- **Reutiliza el componente del carrusel de logos de clientes del inicio** (mismo markup, estilos, velocidad y lógica). No crees uno distinto. Si hace falta, generaliza el componente para que lo usen ambos.
- Movimiento continuo e infinito. Pausa al pasar el cursor y al enfocar con teclado. Con `prefers-reduced-motion`, no se mueve y se muestra como rejilla o fila con salto de línea. Los elementos duplicados para el bucle llevan `aria-hidden="true"`.
- Logos en `assets/img/brands/` (por ejemplo `lg.svg`, `mirage.svg`, `york.svg`, `whirlpool.svg`, `mabe.svg`), con `alt` igual al nombre de la marca. **El usuario colocará los archivos oficiales**: no los descargues de internet. Mientras no estén, muestra el nombre de cada marca como texto con el estilo del carrusel y deja un `<!-- TODO: reemplazar por logo oficial -->`. Dime qué archivos faltan.
- Escribe **"Whirlpool"** (con "l").

## Imagen de stock (temporal)
Para el hero: una foto de stock de instalación de aire acondicionado (técnico instalando una unidad en un muro, por ejemplo). Misma convención de las demás imágenes de stock del sitio: `assets/img/stock/`, `.webp`, versiones responsivas, `loading` normal en el hero, `width/height`, `alt` que termina con "Imagen de archivo con fines ilustrativos, no corresponde a una obra de CREA." y un `<!-- TODO: reemplazar por foto real de CREA -->`. Licencia libre para uso comercial (Unsplash o Pexels); verifícala. Si no puedes descargar, deja un placeholder del mismo tamaño y dime qué conseguir.

## Conexión con el resto del sitio
1. **Servicios del inicio:** agrega una tarjeta **"Aire acondicionado"**. Beneficio: "Instalación con póliza de mantenimiento a 12 meses y garantía." Lista: Paquete básico de instalación · Póliza de mantenimiento a 12 meses · Garantía · Instaladores calificados. Enlace "Ver servicio →" a la página nueva (no a contacto). Ajusta la rejilla para 5 tarjetas sin que se vea desbalanceada (por ejemplo 3 + 2 centradas en escritorio, 2 columnas en tablet y 1 en móvil).
2. **Menú del header** (escritorio y móvil) y **footer:** agrega "Aire acondicionado" apuntando a la página nueva. Verifica que el menú siga cabiendo entre 1024 y 1440px; si no cabe, reduce la separación sin bajar de 12px de texto y avísame.
3. **Página de contacto** (si el cambio 02 ya existe): agrega `servicio=aire-acondicionado` como valor válido y la opción "Aire acondicionado (instalación)" al select del formulario. Parámetro opcional `paquete=basico`.
   - Etiqueta del hero: "Servicio: Aire acondicionado".
   - WhatsApp: "Hola, me interesa cotizar la instalación de aire acondicionado con CREA." Con `paquete=basico`: "Hola, me interesa el paquete básico de instalación de aire acondicionado con CREA."
   - Correo: asunto "Instalación de aire acondicionado — CREA".
   - Los botones de la página nueva llevan a `contacto/?servicio=aire-acondicionado` (y el del paquete, con `&paquete=basico`).
   - Si el cambio 02 aún no existe, los botones abren WhatsApp directo con esos mismos mensajes. Dime que no estaba aplicado.

## SEO
- `<title>`: "Instalación de aire acondicionado en Cancún | CREA".
- Meta description (máx. 155 caracteres; verifica el conteo): "Instalación de aire acondicionado en Cancún y Quintana Roo con instaladores calificados, garantía y póliza de mantenimiento a 12 meses. Cotiza con CREA."
- Un solo `<h1>`, jerarquía de encabezados correcta, canonical, Open Graph y Twitter card.
- Datos estructurados JSON-LD: `Service` con `serviceType` "Instalación de aire acondicionado", `provider` ligado al `LocalBusiness` existente y `areaServed` Cancún y Quintana Roo. Sin precios ni `Offer`.
- Agrégala al sitemap si existe, enlázala desde el inicio (tarjeta de Servicios), el menú y el footer.

## Medición
`aire_hero`, `aire_paquete`, `aire_pilares` (si hay botón), `aire_cierre`, `aire_card_servicios` (en el inicio) y los eventos del botón flotante y la barra móvil con la ubicación `aire_pagina`. Conserva UTM y `fbclid` como en el resto del sitio.

## Accesibilidad y reglas
- Foco visible, altura táctil mínima de 44px, texto de 12px mínimo, `alt` en imágenes y `prefers-reduced-motion` respetado.
- Texto sobre `--blue`: peso 700+ y 14px+. No cambies `--blue`.
- No cambies el resto del contenido, los datos de contacto ni otras secciones, salvo lo listado.
- Como el sitio es estático, el header y el footer se repiten en cada página: actualízalos en todas.

## Forma de trabajo
1. Resume qué archivos vas a crear y modificar. Espera mi confirmación solo si algo no está claro.
2. Aplica los cambios.
3. Revisa a 1440px y a 390px: el carrusel, la rejilla de 5 tarjetas, el menú, los enlaces y las rutas relativas bajo `/crea-web/`.
4. Entrégame un resumen con: qué cambió, qué logos e imágenes faltan, las rutas de stock usadas y qué quedó como `[POR CONFIRMAR]`.
