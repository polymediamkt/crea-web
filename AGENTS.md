# CREA — Rediseño web orientado a conversión

## Cómo usar la referencia visual (importante)
`REFERENCIAS/index.html` y `REFERENCIAS/styles.css` **no son una maqueta a replicar**. Úsalos solo como fuente de los **activos visuales**: tipografía, color y gráficos. La **estructura, el orden de secciones y los textos** salen de este archivo.
- No copies el orden de secciones ni los textos de la referencia.
- Las fotos de Unsplash de la referencia son placeholders: no se usan.

## Contexto
CREA es una firma constructora con sede en Cancún, Quintana Roo. Integra diseño arquitectónico y construcción. Sitio actual: https://creaqr.mx

Servicios:
- **Construcción:** obra civil, instalaciones, obra eléctrica, hidrosanitaria, vías terrestres, media y baja tensión eléctrica.
- **Arquitectura:** proyecto ejecutivo integral, gerencia de obra, supervisión arquitectónica.
- **Diseño:** interiorismo, mobiliario a medida, diseño arquitectónico.

## Objetivo de conversión
1. **Principal: que el visitante escriba por WhatsApp.**
2. **Secundaria: formulario que llega al correo de CREA**, para quien no use WhatsApp.

Buena parte del tráfico llega desde anuncios de Facebook/Instagram: diseño **mobile-first**. Cada sección debe empujar hacia una de esas dos acciones.

## Activos visuales que se conservan (de la referencia)
**Color:** `--blue:#0088ff` · `--black:#191919` · `--soft:#f3f4f5` · `--line:#ddd`. Radios: 20px en tarjetas grandes y 17px en tarjetas chicas.

**Tipografía:** *Anton* para títulos (mayúsculas, `line-height:.92`) y *Montserrat* 400–800 para el resto. Eyebrows en azul, 800, mayúsculas, `letter-spacing:.16em`. Tamaños fluidos con `clamp()` para títulos grandes.

**Gráficos y motivos:**
- Rejilla de líneas finas (blancas translúcidas sobre azul, oscuras translúcidas sobre gris claro), con cuadros de 30–42px.
- Bloque isométrico de edificio hecho solo con CSS (líneas azules sobre fondo negro con rejilla).
- Ícono outline azul en cuadro redondeado para servicios.
- Círculos numerados con borde azul.

**Lenguaje de componentes:** botones pill (`999px`, mayúsculas, 800), tarjetas redondeadas con borde `--line`, header como barra blanca flotante con sombra suave, alternancia de fondos (blanco, `--soft`, negro y azul).

La composición de cada sección es libre: usa estos activos para armar la estructura de abajo, no para reproducir los layouts de la referencia.

## Estructura de la página (one-page)
1. **Header fijo:** logo, menú (Servicios, Proyectos, Nosotros, Contacto) y botón **"Cotiza tu proyecto →"** que lleva a WhatsApp. Se mantiene visible al hacer scroll. En móvil: logo, botón compacto de WhatsApp y menú colapsable.
2. **Hero:** título "Diseñamos y construimos en Quintana Roo, de la idea a la entrega."; apoyo de una línea: "Arquitectura, diseño y construcción bajo un mismo equipo."; botón principal "Cotiza por WhatsApp →" y enlace secundario "Ver proyectos"; foto grande de obra terminada (foto de archivo, ver "Imágenes y logos").
3. **Barra de confianza:** los **21 logos de clientes** con un título corto como "Han confiado en CREA". Las cifras (años de experiencia, obras entregadas) solo se incluyen si CREA las confirma.
4. **Servicios:** 3 bloques (Construcción, Arquitectura, Diseño), cada uno con una línea de beneficio, su lista de servicios y un enlace "Cotizar →" a WhatsApp con mensaje prellenado según el servicio. Borradores de beneficio: *Construcción:* "Ejecutamos tu obra con control técnico de principio a fin." · *Arquitectura:* "Del proyecto ejecutivo a la supervisión en obra." · *Diseño:* "Espacios y mobiliario pensados a la medida."
5. **Proceso "Cómo trabajamos":** 4 pasos: Consulta → Proyecto → Ejecución → Entrega, con una línea por paso. Redáctalos de forma genérica y márcalos para validar con CREA.
6. **Proyectos destacados:** 4 tarjetas + botón "Ver más proyectos" (ver detalle abajo).
7. **Nosotros:** quiénes son y por qué CREA: diseño y construcción integrados bajo un mismo equipo. Sin inventar historia, años ni equipo: usa `[POR CONFIRMAR]` donde falten datos.
8. **Testimonios:** solo si CREA proporciona material real. Si no, omitir la sección.
9. **Contacto:** a la izquierda, título "Cuéntanos tu proyecto", botón grande de WhatsApp y datos directos (WhatsApp, correo, ubicación, redes reales). A la derecha, el formulario con el texto "¿Prefieres escribirnos por correo?".
10. **Footer:** dos niveles. Arriba, rejilla de 4 columnas: marca con eslogan y CTA de WhatsApp, **Servicios**, **Arquitectos** (placeholder `[POR CONFIRMAR]`) y **Contacto** con horario e íconos de WhatsApp y Facebook. Debajo, barra inferior con `© 2026 CREA — Construcción · Arquitectura · Diseño`, `Cancún, Quintana Roo`, aviso de privacidad y el crédito "Designed by Polymedia Creative Agency" (texto, sin enlace).

No digas que CREA "desarrolla proyectos inmobiliarios": es una constructora. Si hace falta hablar de clientes, puedes mencionar que trabaja para desarrolladores, inversionistas y proyectos residenciales, comerciales y de hospitalidad solo si CREA lo confirma.

### Proyectos destacados
- **4 tarjetas** en una rejilla con jerarquía (una grande y tres menores), más un botón **"Ver más proyectos"** centrado debajo.
- El botón despliega las fotos restantes (13) en el mismo estilo de tarjetas y cambia a "Ver menos".
- Cada imagen abre un **visor a pantalla completa**: botón de cerrar, flechas, teclado (Esc, ← y →), foco atrapado dentro del visor y `alt` descriptivo.
- **Las 4 destacadas las eliges tú.** Criterio: variedad de tipologías, buena calidad, luz y composición; evita capturas de WhatsApp o fotos de baja resolución; la tarjeta grande debe ser la mejor foto horizontal. Define la lista en un solo lugar (un arreglo o archivo de datos) para cambiarla fácil, y dime cuáles elegiste y por qué.
- La galería usa `loading="lazy"`.

## Reglas de conversión
- Todos los CTA principales llevan a WhatsApp: `https://wa.me/5219982002552?text=<mensaje_codificado>`. Mensaje base: "Hola, me gustaría cotizar un proyecto con CREA."
- Barra fija inferior en móvil con el botón de WhatsApp y botón flotante de WhatsApp en escritorio.
- El formulario es secundario y va en la sección de Contacto.
- No uses `tel:` ni "Llamar a un experto": la acción es escribir por WhatsApp.

### Formulario
- Campos: nombre (obligatorio), **correo (obligatorio**, es la vía alterna), teléfono (opcional), tipo de proyecto (select: Construcción, Arquitectura, Diseño, Otro), mensaje y casilla de privacidad con enlace al aviso.
- Botón: "Enviar mensaje →". Estados de envío, éxito y error, y antispam (honeypot).
- Destino: `info@creaqr.mx`. Necesita un servicio externo o función serverless (Formspree, Web3Forms, Resend u otro): **pregunta cuál usar (depende del hosting) y no simules el envío**.

### Medición
Eventos para clic en WhatsApp (con la ubicación del botón), envío de formulario y clics a correo. Conserva UTM y `fbclid`.

## Imágenes y logos
- Se reutilizan las **mismas 17 fotos de obra del sitio actual**: `crea-project-01.jpg` a `crea-project-13.jpg` y, en `proyectos/`, `IMG_2810.webp`, `IMG_2823.webp`, `IMG_E2805.webp` y `WhatsApp-Image-2026-02-27-at-7.webp`.
- Y los **mismos 21 logos PNG de clientes** (`Empresas_crea_assets-01.png` a `-21.png`).
- El usuario los colocará en `assets/img/` y `assets/img/clients/`. **No los enlaces desde creaqr.mx**: el sitio actual será reemplazado.
- Convierte las fotos a `.webp` optimizado y con tamaños responsivos.
- **Excepción acordada (2026-09-30):** el hero usa **video** en `assets/video/hero-obra.mp4` (1280×720, 8 s, sin audio, H.264, crf 28, `+faststart`) con `poster="assets/video/hero-obra-poster.webp"`. La foto de "Nosotros" usa stock de Unsplash en `assets/img/stock/nosotros-construccion-{480,768,1200}.webp` (Scott Blake). El portafolio y barra de clientes sí usan material propio.
  - Hero: reproducción automática silenciada con `playsinline`, `muted`, `loop`, `preload="metadata"`. Botón de pausa/reproducción accesible (WCAG 2.2.2). Con `prefers-reduced-motion: reduce` no se reproduce automáticamente.
- **Excepción acordada (2026-10-01):** la columna derecha de "Cómo trabajamos" usa una **foto de stock de Unsplash** en `assets/img/stock/proceso-arquitectos-{480,768,1200}.webp` (`photo-1742112125554-fdb788faedaa`), en lugar del bloque isométrico hecho con CSS. Es material de archivo, no obra de CREA, y el `alt` lo declara. Dejar en `alt-proceso-arquitectos-*.webp` una alternativa descargada (`photo-1761227447538-f4e1ec0a9df6`) por si CREA prefiere esa.
- Logos: 21 van en un **carrusel infinito horizontal**, no en una rejilla estática. Banda a sangre con el grupo de logos duplicado y desplazamiento continuo por `requestAnimationFrame`, envuelto con módulo sobre el ancho de un grupo para que no dé salto aunque los logos tengan anchos distintos. Velocidad: vuelta de ~80s.
  - El ancho de celda se controla con una variable `--cell`, para que se vean **7 celdas en escritorio y 3 en móvil**.
  - Controles: `pause/replay`, anterior y siguiente. El `pause/replay` no es opcional: WCAG 2.2.2 exige mecanismo de pausa para contenido que se mueve solo más de 5 segundos.
  - Pinta en hover (escritorio), se detiene con la pestaña oculta y cuando la banda sale de pantalla.
  - Arrastre con pointer events; se reanuda desde donde se soltó.
  - Con `prefers-reduced-motion: reduce` **no arranca solo**: arrastre y flechas siguen funcionando y el botón `play` lo activa.
  - El grupo clonado va con `aria-hidden="true"` para no duplicar la lectura en lectores de pantalla.
  - `object-fit:contain`, padding y celdas con fondo blanco, porque los PNG traen canal alfa y sobre `--soft` no se verían.
- Logo de CREA: SVG real (`Crea_logo_asset-01.svg`), no el placeholder de la referencia.

## Accesibilidad mínima
- Texto legible: eyebrows, botones, tags y footer, mínimo 12px.
- Botones y campos con altura táctil mínima de 44px.
- Contraste: blanco sobre `--blue` da ~3.5:1 y no cumple AA en texto pequeño. Usa peso 700+ y 14px+ en textos sobre azul. **No cambies `--blue` sin aprobación**; repórtalo.
- `alt` en todas las imágenes, `label` o `aria-label` en los inputs y estilos `:focus-visible` claros.
- Respeta `prefers-reduced-motion` en el scroll suave.

## Rendimiento y SEO
- Fuentes de Google con `<link>` y `preconnect` (no `@import`) y `display=swap`.
- Imágenes con `width/height` y `loading="lazy"` (salvo el hero).
- Meta description, Open Graph y datos estructurados `LocalBusiness` (Cancún, Quintana Roo).
- Title sugerido: construcción y arquitectura en Cancún, Quintana Roo | CREA.

## Stack (decidido)
**Sitio estático: HTML, CSS y JavaScript sin framework y sin paso de build.** Estructura simple (`index.html`, `css/`, `js/`, `assets/img/`). JavaScript solo para lo necesario: galería y visor, formulario, eventos de medición y menú móvil.

## Datos de contacto confirmados
- **WhatsApp:** +52 1 998 200 2552. Enlace: `https://wa.me/5219982002552`. Pruébalo desde un celular; si no abre el chat, prueba `529982002552`. Muéstralo también como texto (por ejemplo, "+52 998 200 2552") en Contacto y el footer.
- **Correo:** `info@creaqr.mx`. Destino del formulario y enlace `mailto:` en Contacto y el footer.
- **Facebook:** `https://www.facebook.com/CREAQR.MX/`. Enlace como **ícono solo** (logo de Facebook en un círculo con relleno gris tenue), no compite con los CTA de WhatsApp. Aparece en Contacto (debajo de "Horario de atención") y en el footer. `data-track="facebook"`.

## Datos que NO se deben inventar
Usa marcadores visibles `[POR CONFIRMAR]` para: teléfono de llamadas (si es distinto del WhatsApp), dirección, redes sociales distintas de Facebook, cifras, historia y equipo, nombres de clientes y proyectos, y testimonios. Nada de enlaces `#` vacíos en redes.

## Pendiente de confirmar con CREA
- Nombre, ubicación y tipo de cada proyecto, para ponerlos al pie de cada tarjeta.
- Validar el proceso de 4 pasos y los beneficios de cada servicio.
- Dónde se alojará el sitio (hosting); afecta al servicio del formulario.

## Forma de trabajo
1. Lee este archivo completo y los activos visuales de `REFERENCIAS/`.
2. Propón la estructura de archivos y confirma antes de generar código.
3. Construye sección por sección, en el orden de la estructura.
4. Tras cada sección, revísala a 1440px y a 390px, y resume qué se hizo y qué quedó por confirmar.
5. No cambies copy, colores ni decisiones de conversión de este archivo sin preguntar.
