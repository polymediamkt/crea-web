# Cambio 02 — Contacto como página aparte, con 4 canales

Lee primero `AGENTS.md` y el código actual del sitio. Esta tarea **modifica la página ya construida**; no la rehagas. No toques nada que no esté listado aquí. **Si algo de `AGENTS.md` contradice el código actual, manda el código actual.** Este cambio reemplaza lo que `AGENTS.md` dice sobre la sección de Contacto dentro del inicio y sobre "todos los CTA llevan directo a WhatsApp".

## Objetivo
Hoy Contacto es una sección al final del inicio. Debe pasar a ser una **página aparte** para mejorar la UI. Cada botón de cotizar de los servicios lleva a esa página, y ahí el cliente elige cómo contactar a CREA:
1. Llamar al celular
2. Escribir por WhatsApp
3. Enviar un correo
4. Llenar el formulario (el que ya existe)

WhatsApp sigue siendo el canal principal, así que debe ser el más visible de los cuatro.

## Referencia de patrón
https://brisaclimacancun.com/contacto/ — toma **solo el patrón de la página**: título corto, tarjetas de canales de contacto, bloque de datos útiles y formulario debajo, con estado de éxito que vuelve a ofrecer WhatsApp y llamada.
**No copies de esa página ningún texto, promesa ni dato**: nada de "24/7", tiempos de respuesta, descuentos, "técnicos certificados", años de experiencia ni garantías. Nada de eso es de CREA. Respeta la identidad visual de CREA (colores, Anton y Montserrat, botones pill, tarjetas redondeadas, motivos de rejilla).

## Datos de contacto (una sola fuente)
Define estos datos en **un solo lugar** (un objeto de configuración en JS) y úsalos en todo el sitio:
- WhatsApp: `5219982002552` (+52 1 998 200 2552)
- Teléfono para llamadas: `+529982002552` (mismo número que el WhatsApp). `[POR CONFIRMAR]` si CREA da otro celular; basta con cambiarlo en la configuración.
- Correo: `info@creaqr.mx`

## Cambios en el inicio
1. **Quita la sección de Contacto** (con su formulario) del inicio.
2. Sustitúyela por una **banda de cierre breve** antes del footer: título corto, una línea de apoyo y un botón "Contáctanos →" que lleva a la página de contacto.
3. Todos los botones de cotizar llevan a la página de contacto, **no directo a WhatsApp**: botón del header, hero, tarjetas de Servicios y Mantenimiento, banda de cierre y cualquier otro "Cotizar".
4. Cada CTA de servicio pasa el servicio por la URL (ver parámetros abajo). Los botones de preventivo y correctivo de Mantenimiento también pasan el tipo.
5. El **botón flotante de WhatsApp (escritorio) y la barra fija inferior (móvil) se quedan como están**: siguen llevando directo a WhatsApp, como atajo.
6. Menú del header y footer: el enlace "Contacto" apunta a la nueva página, no a `#contacto`. Busca y actualiza **todas** las referencias a `#contacto` (HTML, JS y enlaces del footer).

## Página de contacto
Crea `contacto/index.html`, para que la URL sea limpia (`/contacto/`). Debe funcionar en GitHub Pages bajo `/crea-web/` y también en la raíz de un dominio: **usa rutas relativas** y revisa que CSS, JS, imágenes y enlaces carguen desde la subcarpeta. Mismo header y footer que el inicio, con "Contacto" marcado como página actual (`aria-current="page"`). En esta página **se oculta** el botón de cotizar del header y también el botón flotante y la barra fija de WhatsApp, porque ya estás en el lugar donde se elige.

Estructura:
1. **Hero compacto:** eyebrow "Contacto", título "¿Cómo prefieres contactarnos?", apoyo "Elige el canal que te quede mejor." Si la URL trae un servicio válido, muestra una etiqueta "Servicio: Mantenimiento" (por ejemplo).
2. **Cuatro tarjetas de canal**, cada una con ícono outline (SVG inline, `aria-hidden`), título, dato y botón:
   - **WhatsApp** (tarjeta destacada, la primera y visualmente mayor, con etiqueta "Recomendado"): "Escríbenos y cuéntanos tu proyecto." Botón "Abrir WhatsApp →".
   - **Llamar:** muestra el número. "Habla directo con CREA." Botón "Llamar ahora" con `tel:`.
   - **Correo:** muestra `info@creaqr.mx`. "Ideal si quieres enviar detalles." Botón "Enviar correo" con `mailto:` y un botón secundario "Copiar correo" (mucho público de escritorio no tiene cliente de correo configurado). Confirma la copia con un aviso accesible.
   - **Formulario:** "Déjanos tus datos y nos ponemos en contacto." Botón "Llenar formulario ↓" que baja al formulario y le pone el foco al primer campo.
   Rejilla: 4 columnas en escritorio, 2×2 en tablet, 1 columna en móvil (WhatsApp primero).
3. **Datos útiles:** ubicación "Cancún, Quintana Roo", cobertura "Cancún y Quintana Roo" y horario de atención con marcador visible `[POR CONFIRMAR]`.
4. **Formulario (`id="formulario"`, con `scroll-margin-top` para el header):** reutiliza **el formulario actual tal cual** (campos, validación, honeypot, servicio de envío, estados de envío y error). Solo cambia de página y gana la preselección del servicio. Estado de éxito: mensaje de confirmación más botones de WhatsApp y de llamada.
5. No agregues sección de testimonios, promociones ni cifras.

## Parámetros de URL
La página lee `contacto/?servicio=<valor>&tipo=<valor>`:

| Parámetro | Valores válidos |
|---|---|
| `servicio` | `construccion`, `mantenimiento`, `arquitectura`, `diseno` |
| `tipo` (solo con `mantenimiento`) | `preventivo`, `correctivo` |

Un valor desconocido o ausente se ignora y se usa el mensaje genérico. Con el servicio válido:
- Se preselecciona el select del formulario (y `tipo` se envía en un campo oculto).
- Se personalizan el mensaje de WhatsApp y el asunto/cuerpo del correo.

Mensajes de WhatsApp (codifícalos con `encodeURIComponent`):
- Genérico: "Hola, me gustaría cotizar un proyecto con CREA."
- `construccion`: "Hola, me interesa el servicio de construcción con CREA."
- `arquitectura`: "Hola, me interesa el servicio de arquitectura con CREA."
- `diseno`: "Hola, me interesa el servicio de diseño con CREA."
- `mantenimiento`: "Hola, me interesa el servicio de mantenimiento con CREA."
- `mantenimiento` + `preventivo`: "Hola, me interesa el mantenimiento preventivo con CREA."
- `mantenimiento` + `correctivo`: "Hola, necesito mantenimiento correctivo con CREA."

Correo: asunto "Cotización de [servicio] — CREA" (o "Cotización — CREA" si no hay servicio) y cuerpo con una línea de saludo y espacios para nombre, teléfono y descripción del proyecto.

## Atribución de campañas (importante)
Mucho tráfico llega desde anuncios con `utm_*` y `fbclid` **al inicio**. Al navegar a `/contacto/` esos parámetros se pierden. Guárdalos en `sessionStorage` al cargar cualquier página (con `try/catch`), agrégalos como campos ocultos del formulario y como datos de los eventos de medición.

## Medición
- En el inicio: evento `cta_ir_a_contacto` con la ubicación del botón y el servicio. Reemplaza los eventos anteriores de clic a WhatsApp de esos botones (por ejemplo `mantenimiento_card`), conservando su nombre de ubicación.
- En contacto: `contacto_whatsapp`, `contacto_llamar`, `contacto_correo`, `contacto_correo_copiar`, `contacto_formulario_ir` y `contacto_formulario_enviado`.
- Los eventos del botón flotante y la barra móvil (WhatsApp directo) se quedan igual.

## SEO
- Title y meta description propios de la página de contacto, canonical, Open Graph y `ContactPoint` en los datos estructurados si ya existe `LocalBusiness`.
- Agrégala al sitemap si existe y enlázala desde el footer.

## Accesibilidad
- Las tarjetas son enlaces o botones reales con nombre claro. Foco visible, altura táctil mínima de 44px y texto de 12px mínimo.
- Texto sobre `--blue`: peso 700+ y 14px+ (contraste de ~3.5:1). No cambies `--blue`.
- Respeta `prefers-reduced-motion` en el desplazamiento hacia el formulario.

## Reglas
- Mantén el lenguaje visual actual y no cambies el resto del contenido ni las demás secciones.
- No inventes datos: usa `[POR CONFIRMAR]` donde falte información.
- Como el sitio es estático, el header y el footer se repiten en cada página. Cuando termines, dime qué archivos hay que editar a la vez para mantenerlos sincronizados.

## Forma de trabajo
1. Resume qué archivos vas a crear y modificar. Espera mi confirmación solo si algo no está claro.
2. Aplica los cambios.
3. Prueba a 1440px y a 390px: navegación desde cada CTA, parámetros de URL válidos e inválidos, enlaces `tel:`, `mailto:` y `wa.me`, copiar correo, envío del formulario y rutas relativas bajo `/crea-web/`.
4. Entrégame un resumen con: qué cambió, qué quedó marcado como `[POR CONFIRMAR]` y qué probaste.
