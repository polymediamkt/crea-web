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
**Color:** `--blue:#0088ff` · `--black:#191919` · `--soft:#f3f4f5` · `--line:#ddd`. Radios: 20px en tarjetas grandes y 17px en tarjetas chicas. Desde el cambio 05 existen dos derivados de marca para cumplir AA, **pendientes de aprobación de CREA**: `--blue-cta:#0070d0` (botones pill con texto blanco, 4.97:1) y `--blue-ink:#0066c4` (texto azul sobre fondos claros, ≈5.5:1). `--blue` no cambia.

**Tipografía:** *Anton* para títulos (mayúsculas, `line-height:.92`) y *Montserrat* 400–800 para el resto. Eyebrows en azul, 800, mayúsculas, `letter-spacing:.16em`. Tamaños fluidos con `clamp()` para títulos grandes.

**Gráficos y motivos:**
- Rejilla de líneas finas (blancas translúcidas sobre azul, oscuras translúcidas sobre gris claro), con cuadros de 30–42px.
- Bloque isométrico de edificio hecho solo con CSS (líneas azules sobre fondo negro con rejilla).
- Ícono outline azul en cuadro redondeado para servicios.
- Círculos numerados con borde azul.

**Lenguaje de componentes:** botones pill (`999px`, mayúsculas, 800), tarjetas redondeadas con borde `--line`, header como barra blanca flotante con sombra suave, alternancia de fondos (blanco, `--soft`, negro y azul).

La composición de cada sección es libre: usa estos activos para armar la estructura de abajo, no para reproducir los layouts de la referencia.

## Estructura del sitio (inicio + página de contacto)
> **Actualizado (cambio 02):** Contacto ya no es una sección del inicio, sino una **página aparte** en `contacto/index.html`. Los CTA "Cotizar" del inicio llevan a esa página (no directo a WhatsApp); solo el botón flotante de escritorio y la barra fija móvil siguen yendo directo a WhatsApp como atajo. Ver "Página de contacto" abajo.

1. **Header fijo:** logo, menú (Servicios, Mantenimiento, Proyectos, Nosotros, Contacto) y botón **"Cotiza tu proyecto →"** que lleva a la página de contacto. Se mantiene visible al hacer scroll. En móvil: logo, botón compacto de WhatsApp y menú colapsable.
2. **Hero:** título "Diseñamos y construimos en Quintana Roo, de la idea a la entrega."; apoyo "Arquitectura, diseño, construcción y mantenimiento bajo un mismo equipo."; botón principal "Cotiza tu proyecto →" (a la página de contacto) y enlace secundario "Ver proyectos"; video de obra (ver "Imágenes y logos").
3. **Barra de confianza:** los **21 logos de clientes** con un título corto como "Han confiado en CREA". Las cifras (años de experiencia, obras entregadas) solo se incluyen si CREA las confirma.
4. **Servicios:** 5 bloques (Construcción, Arquitectura, Diseño, Mantenimiento destacado y **Aire acondicionado**), cada uno con una línea de beneficio, su lista de servicios y un enlace. Las tarjetas de Construcción/Arquitectura/Diseño/Mantenimiento usan "Cotizar →" a la página de contacto con el servicio en la URL (`?servicio=`); la de **Aire acondicionado** usa "Ver servicio →" a `instalacion-aire-acondicionado-cancun/` (evento `ver_aire_acondicionado`) porque ese servicio tiene página propia. Borradores de beneficio: *Construcción:* "Ejecutamos tu obra con control técnico de principio a fin." · *Arquitectura:* "Del proyecto ejecutivo a la supervisión en obra." · *Diseño:* "Espacios y mobiliario pensados a la medida." · *Aire acondicionado:* "Instalación con garantía y póliza de mantenimiento." La tarjeta de Mantenimiento incluye en su lista "Pólizas de mantenimiento". Rejilla: 3 arriba + 2 centradas abajo en escritorio, 2 en tablet y 1 en móvil.
4b. **Mantenimiento (id="mantenimiento", justo después de Servicios):** eyebrow "02 — Mantenimiento"; título "Mantenimiento correctivo y preventivo en obra."; texto breve que explica preventivo y correctivo y pide elegir el tipo de obra. **Cuatro tarjetas de sector** —Residencial, Comercial, Industrial y Hotelero— centradas (ícono outline en cuadro redondeado azul, línea corta azul, nombre en mayúsculas, una línea descriptiva y "Cotizar →"). Cada tarjeta es un enlace a `contacto/?servicio=mantenimiento&sector=residencial|comercial|industrial|hotelero` (evento `cta_ir_a_contacto` con posición `sector-…`), para que la elección llegue a la cotización. Debajo, un **único botón "Cotizar mantenimiento →"** centrado que lleva a `contacto/?servicio=mantenimiento` (eventos `cta_ir_a_contacto` y `mantenimiento_seccion_principal`). Luego, la fila de chips "Áreas que cubrimos" (Obra civil, Instalaciones, Obra eléctrica, Hidrosanitaria, Vías terrestres, Media y baja tensión eléctrica y "y todas las áreas de tu proyecto"). Cierra con una **banda azul oscura (fondo `--black` con rejilla azul)** con el texto "¡Ofrecemos **pólizas** de mantenimiento! Preventivo y correctivo para tu obra." (la palabra "pólizas" resaltada en azul) y el botón "Cotizar mi póliza →" a `contacto/?servicio=mantenimiento&tipo=poliza` (eventos `cta_ir_a_contacto` y `mantenimiento_banner`). La banda va separada 64px del CTA principal para no competir con él. Pendiente de CREA: qué incluyen las pólizas, tiempos de respuesta y cobertura (ver `cambio-05-mejora-conversion.md`). La sección ya no usa imagen de stock.
5. **Proceso "Cómo trabajamos":** 4 pasos: Consulta → Proyecto → Ejecución → Entrega, con una línea por paso. Redáctalos de forma genérica y márcalos para validar con CREA.
6. **Proyectos destacados:** 4 tarjetas + botón "Ver más proyectos" (ver detalle abajo).
7. **Nosotros:** quiénes son y por qué CREA: diseño y construcción integrados bajo un mismo equipo. Sin inventar historia, años ni equipo: usa `[POR CONFIRMAR]` donde falten datos.
8. **Testimonios:** solo si CREA proporciona material real. Si no, omitir la sección.
9. **Banda de cierre:** reemplaza a la antigua sección de Contacto del inicio. Título corto, una línea de apoyo y botón **"Contáctanos →"** que lleva a la página de contacto.
10. **Footer:** dos niveles. Arriba, rejilla de 4 columnas: marca con eslogan y CTA de WhatsApp, **Servicios**, **Arquitectos** (Eivar Alonso Trejo García, Arquitecto principal; Roberto Arroyo, Supervisión arquitectónica) y **Contacto** con horario e íconos de WhatsApp y Facebook. Debajo, barra inferior con `© 2026 CREA — Construcción · Arquitectura · Diseño`, `Cancún, Quintana Roo`, aviso de privacidad y el crédito "Designed by Polymedia Creative Agency" (texto, sin enlace).

No digas que CREA "desarrolla proyectos inmobiliarios": es una constructora. Si hace falta hablar de clientes, puedes mencionar que trabaja para desarrolladores, inversionistas y proyectos residenciales, comerciales y de hospitalidad solo si CREA lo confirma.

### Proyectos destacados
- **4 tarjetas** en una rejilla con jerarquía (una grande y tres menores), más un botón **"Ver más proyectos"** centrado debajo.
- Los captions de nombre/ubicación/tipo se muestran solo cuando estén confirmados (`PROYECTO_PIE` vacío en `js/main.js`). Mientras tanto no se pinta ningún marcador sobre la foto.
- El botón despliega las fotos restantes (11) en el mismo estilo de tarjetas y cambia a "Ver menos".
- Cada imagen abre un **visor a pantalla completa**: botón de cerrar, flechas, teclado (Esc, ← y →), foco atrapado dentro del visor y `alt` descriptivo.
- **Las 4 destacadas las eliges tú.** Criterio: variedad de tipologías, buena calidad, luz y composición; evita capturas de WhatsApp o fotos de baja resolución; la tarjeta grande debe ser la mejor foto horizontal. Define la lista en un solo lugar (un arreglo o archivo de datos) para cambiarla fácil, y dime cuáles elegiste y por qué.
- La galería usa `loading="lazy"`.

## Reglas de conversión
- Los CTA de cotizar del inicio llevan a la **página de contacto** (`contacto/`), no directo a WhatsApp. Solo el botón flotante de escritorio y la barra fija móvil siguen directo a WhatsApp: `https://wa.me/5219982002552?text=<mensaje_codificado>`. Mensaje base: "Hola, me gustaría cotizar un proyecto con CREA."
- En la página de contacto, el canal principal es WhatsApp (`contacto/?servicio=&tipo=`), y también se ofrecen llamada (`tel:`), correo (`mailto:`) y formulario.
- El formulario es secundario y va en la página de contacto.

### Página de contacto (`contacto/index.html`)
- URL limpia `/contacto/`, con **rutas relativas** para funcionar tanto en la raíz del dominio como bajo GitHub Pages (`/crea-web/`).
- Mismo header y footer que el inicio, con "Contacto" marcado con `aria-current="page"`. En esta página se oculta el botón de cotizar del header.
- Hero compacto: eyebrow "Contacto", título "¿Cómo prefieres contactarnos?", apoyo "Elige el canal que te quede mejor." Etiqueta "Servicio: X" si la URL trae `?servicio=`.
- Tres tarjetas de canal: WhatsApp (destacada, con "Recomendado"), Llamar (`tel:`) y Correo (`mailto:` + botón "Copiar correo" con aviso accesible). Rejilla 3/2/1. El teléfono de llamadas es el mismo del WhatsApp; el botón "Llamar ahora" queda activo.
- Barra fija móvil de WhatsApp con el mensaje contextual del servicio (también en esta página). En escritorio **no** hay botón flotante aquí: tapaba el botón "Enviar mensaje" del formulario.
- Formulario debajo, con `id="formulario"`; debajo del formulario, el bloque de datos útiles (ubicación, cobertura y horario confirmado).
- Parámetros: `?servicio=construccion|mantenimiento|arquitectura|diseno|aire-acondicionado`, `?tipo=preventivo|correctivo|poliza`, `?sector=residencial|comercial|industrial|hotelero` y `?paquete=basico` (los tres últimos solo con mantenimiento o aire acondicionado, según corresponda). Prioridad: póliza > sector > paquete de aire > tipo > servicio. Valor inválido o ausente se ignora y usa el mensaje genérico. Preselecciona el select del formulario, llena los campos ocultos `tipo`, `sector` y `paquete`, y personaliza la etiqueta del hero, el mensaje de WhatsApp y el asunto/cuerpo del correo. Con `sector`: etiqueta "Servicio: Mantenimiento · Residencial", WA "Hola, me interesa el mantenimiento preventivo y correctivo para obra residencial con CREA." y asunto "Mantenimiento Residencial — CREA". Con `tipo=poliza`: etiqueta "Servicio: Mantenimiento · Póliza", WA "Hola, me interesa una póliza de mantenimiento con CREA." y asunto "Póliza de mantenimiento — CREA". Con `servicio=aire-acondicionado`: etiqueta "Servicio: Aire acondicionado"; con `paquete=basico`, WA "Hola, me interesa el paquete básico de instalación de aire acondicionado con CREA."

### Página de aire acondicionado (`instalacion-aire-acondicionado-cancun/index.html`)
- URL limpia `/instalacion-aire-acondicionado-cancun/`, con **rutas relativas** (`../`) para funcionar en la raíz del dominio y bajo GitHub Pages.
- Se trata **como servicio, no como tienda**: sin inventario, catálogo, precios, carrito ni lenguaje de venta/compra/existencia, y sin afirmar que CREA "no los vende" ni "distribuidor autorizado".
- Mismo header y footer que el inicio, con "Aire acondicionado" en el menú marcado con `aria-current="page"`. El CTA de cotizar del header apunta a `contacto/?servicio=aire-acondicionado`.
- **Hero** azul (rejilla como el inicio) con la foto `assets/img/stock/aire-acondicionado-{480,768,1200}.webp` (proporcionada por CREA, 4:3 horizontal), título "Instalación de aire acondicionado en Cancún", apoyo "Instaladores calificados, garantía y póliza de mantenimiento a 12 meses." y CTA "Cotizar instalación →".
- **Carrusel de marcas** justo debajo del hero: LG, Mirage, York, Whirlpool y Mabe (orden fijo; "Whirlpool" se escribe con "l" aunque el archivo local sea `Whirpool.svg`). Reutiliza el componente `[data-marquee]` (mismo que la barra de clientes del inicio), con `aria-hidden` en el grupo clonado y controles pause/prev/next. Nota visible "Las marcas y logotipos pertenecen a sus respectivos propietarios."
- **Paquete básico de instalación:** tarjeta azul con lista (instalación por instaladores calificados, póliza de mantenimiento a 12 meses, garantía) y botón "Cotizar paquete básico →" a `contacto/?servicio=aire-acondicionado&paquete=basico` (evento `aire_paquete`). Marcador `[POR CONFIRMAR]` — alcance del paquete (materiales, tubería, qué no incluye), duración/cobertura de la garantía y qué cubre la póliza.
- **Tres pilares** ("Lo que obtienes"): póliza de mantenimiento a 12 meses, garantía e instaladores calificados, con ícono outline azul.
- **Banda de cierre** azul con botón "Cotizar instalación →".
- JSON-LD `Service` (serviceType "Instalación de aire acondicionado") con `provider` `LocalBusiness`/`GeneralContractor` (Cancún, Quintana Roo).
- Eventos: `aire_hero`, `aire_paquete`, `aire_cierre` y `ver_aire_acondicionado` (tarjeta de Servicios del inicio).

### Formulario
- Campos: nombre (obligatorio), **correo (obligatorio**, es la vía alterna), teléfono (opcional), tipo de proyecto (select: Construcción, Mantenimiento, Aire acondicionado (instalación), Arquitectura, Diseño, Otro), mensaje y casilla de privacidad con enlace al aviso.
- Botón: "Enviar mensaje →". Estados de envío, éxito y error, y antispam (honeypot).
- Destino: `info@creaqr.mx`. Necesita un servicio externo o función serverless (Formspree, Web3Forms, Resend u otro): **pregunta cuál usar (depende del hosting) y no simules el envío**.

### Medición
- Inicio: evento `cta_ir_a_contacto` con `posicion`, `destino` y `servicio` (parseado del `href`) en cada CTA de cotizar. El CTA de la sección Mantenimiento emite además `mantenimiento_seccion_principal` y el de la banda de pólizas `mantenimiento_banner` (se admiten varios eventos por clic en `data-track`). Las tarjetas de sector emiten `cta_ir_a_contacto` con posición `sector-residencial|comercial|industrial|hotelero`.
- Contacto: `contacto_whatsapp`, `contacto_llamar`, `contacto_correo`, `contacto_correo_copiar` y `contacto_formulario_enviado`.
- El botón flotante y la barra móvil mantienen sus eventos de WhatsApp directo.
- Conserva UTM y `fbclid` en `sessionStorage` para no perderlos al navegar a `contacto/`; van como campos ocultos del formulario y en los eventos.

## Imágenes y logos
- Se reutilizan las **mismas 17 fotos de obra del sitio actual**: `crea-project-01.jpg` a `crea-project-13.jpg` y, en `proyectos/`, `IMG_2810.webp`, `IMG_2823.webp`, `IMG_E2805.webp` y `WhatsApp-Image-2026-02-27-at-7.webp`.
- Y los **mismos 21 logos PNG de clientes** (`Empresas_crea_assets-01.png` a `-21.png`).
- El usuario los colocará en `assets/img/` y `assets/img/clients/`. **No los enlaces desde creaqr.mx**: el sitio actual será reemplazado.
- Convierte las fotos a `.webp` optimizado y con tamaños responsivos.
- **Excepción acordada (2026-09-30):** el hero usa **video** en `assets/video/hero-obra.mp4` (1280×720, 8 s, sin audio, H.264, crf 28, `+faststart`) con `poster="assets/video/hero-obra-poster.webp"`. La foto de "Nosotros" usa stock de Unsplash en `assets/img/stock/nosotros-construccion-{480,768,1200}.webp` (Scott Blake). El portafolio y barra de clientes sí usan material propio.
  - Hero: reproducción automática silenciada con `playsinline`, `muted`, `loop`, `preload="metadata"`. Botón de pausa/reproducción accesible (WCAG 2.2.2). Con `prefers-reduced-motion: reduce` no se reproduce automáticamente.
- **Excepción acordada (2026-10-01):** la columna derecha de "Cómo trabajamos" usa una **foto de stock de Unsplash** en `assets/img/stock/proceso-arquitectos-{480,768,1200}.webp` (`photo-1742112125554-fdb788faedaa`), en lugar del bloque isométrico hecho con CSS. Es material de archivo, no obra de CREA, y el `alt` lo declara. Dejar en `alt-proceso-arquitectos-*.webp` una alternativa descargada (`photo-1761227447538-f4e1ec0a9df6`) por si CREA prefiere esa.
- **Página de aire acondicionado (2026):** el hero usa la foto proporcionada por CREA (`assets/img/instalar-ac.jpg`, 2495×1643) convertida a `assets/img/stock/aire-acondicionado-{480,768,1200}.webp`. El carrusel de marcas usa los logos en `assets/img/Logo_aires/` (`LG.webp`, `Mirage.png`, `York.png`, `Whirpool.svg`, `Mabe.webp`); reemplazar por logos oficiales si CREA los actualiza.
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
- Contraste: blanco sobre `--blue` da ~3.5:1 y no cumple AA en texto pequeño. Usa peso 700+ y 14px+ en textos sobre azul. **No cambies `--blue` sin aprobación**; repórtalo. Desde el cambio 05, los botones pill usan `--blue-cta` (4.97:1) y el texto azul sobre fondos claros `--blue-ink` (≈5.5:1); ambos quedan **pendientes de aprobación de CREA**.
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
- **WhatsApp:** +52 1 998 200 2552. Enlace: `https://wa.me/5219982002552`. Pruébalo desde un celular; si no abre el chat, prueba `529982002552`. Muéstralo también como texto (por ejemplo, "+52 998 200 2552") en la página de contacto y el footer.
- **Llamadas:** el mismo número del WhatsApp (`tel:+529982002552`, visible como "+52 998 200 2552"). Confirmado en el cambio 05.
- **Correo:** `info@creaqr.mx`. Destino del formulario y enlace `mailto:` en la página de contacto y el footer.
- **Facebook:** `https://www.facebook.com/CREAQR.MX/`. Enlace como **ícono solo** (logo de Facebook en un círculo con relleno gris tenue), no compite con los CTA de WhatsApp. Aparece en la página de contacto (entre los datos útiles) y en el footer. `data-track="facebook"`.
- **Fuente única de contacto:** los datos viven en el objeto `CONTACTO` de `js/main.js`. Para cambiar un número o correo, edita solo ahí.

## Datos que NO se deben inventar
Cuando falte un dato (teléfono de llamadas distinto del WhatsApp, dirección, redes sociales distintas de Facebook, cifras, historia y equipo, nombres de clientes y proyectos, testimonios), **no lo inventes**. Desde el cambio 05 no se publican marcadores visibles: el pendiente va como comentario HTML junto al bloque afectado y se anota en la checklist de `cambio-05-mejora-conversion.md`. Nada de enlaces `#` vacíos en redes.

## Pendiente de confirmar con CREA
- Nombre, ubicación y tipo de cada proyecto, para ponerlos al pie de cada tarjeta.
- Validar el proceso de 4 pasos y los beneficios de cada servicio.
- Dónde se alojará el sitio (hosting); afecta al servicio del formulario.
- Horario de atención publicado: "Lunes a viernes, 9 a.m. a 6 p.m."
- Confirmar nombres y ubicación de las obras destacadas (alberca en azotea, gradas de estadio, terraza con escultura y cancha). La cancha está en proceso de obra y la sección dice "Obra terminada, no promesas.": decidir si se mantiene, se rotula o se ajusta el copy.
- Qué incluyen las pólizas de mantenimiento, tiempos de respuesta y cobertura.
- Redacción y aprobación legal del aviso de privacidad (hoy es un texto de trabajo).
- Aprobar los tokens `--blue-cta` y `--blue-ink` (ver `cambio-05-mejora-conversion.md`).

## Forma de trabajo
1. Lee este archivo completo y los activos visuales de `REFERENCIAS/`.
2. Propón la estructura de archivos y confirma antes de generar código.
3. Construye sección por sección, en el orden de la estructura.
4. Tras cada sección, revísala a 1440px y a 390px, y resume qué se hizo y qué quedó por confirmar.
5. No cambies copy, colores ni decisiones de conversión de este archivo sin preguntar.
