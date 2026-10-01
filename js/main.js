/* ==========================================================================
   CREA — main.js
   1. Medición (WhatsApp / correo / formulario) con UTM y fbclid
   2. Menú móvil colapsable
   2b. Banda de logos: carrusel infinito con arrastre y pausa
   3. Portafolio: "Ver más proyectos" + visor a pantalla completa
   4. Formulario -> Web3Forms (destino configurado en Web3Forms: info@creaqr.mx)
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONFIGURACIÜN — único lugar que hay que editar al publicar
     ------------------------------------------------------------------ */

  var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
  // Access key de https://web3forms.com (el envío llega a info@creaqr.mx).
  // Mientras siga en "POR_CONFIGURAR" el formulario NO simula el envío:
  // muestra un error y ofrece WhatsApp.
  var WEB3FORMS_ACCESS_KEY = 'POR_CONFIGURAR';

  var WHATSAPP_LABEL = '+52 998 200 2552';
  var ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

  /* ------------------------------------------------------------------
     PORTAFOLIO — lista única de proyectos (fuente de verdad)

     Para cambiar o reordenar fotos, edita solo este arreglo.
       base    nombre del archivo sin el sufijo de tamaño
       full    variante grande que abre el visor
       anchos  variantes responsive que existen en assets/img/obra/
       w / h   dimensiones reales, para reservar el espacio
       perfil  'grande' (mitad de la rejilla), 'par' o 'ancho' (fila completa)
       alt     descripción de la imagen
     `destacada: true` la manda a la rejilla superior; el resto alimenta
     la galería del botón "Ver más proyectos".
     ------------------------------------------------------------------ */

  var PROYECTOS = [
    { base: 'crea-project-08', full: 'crea-project-08-1200.webp', anchos: [480, 768, 1200], w: 1599, h: 926, destacada: true, perfil: 'grande' },
    { base: 'crea-project-12', full: 'crea-project-12-1600.webp', anchos: [480, 768, 1600], w: 1600, h: 947, destacada: true, perfil: 'par' },
    { base: 'img_2810', full: 'img_2810-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 900, destacada: true, perfil: 'par' },
    { base: 'crea-project-13', full: 'crea-project-13-1200.webp', anchos: [480, 768, 1200], w: 1599, h: 1186, destacada: true, perfil: 'ancho' },

    { base: 'crea-project-01', full: 'crea-project-01-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 1600 },
    { base: 'crea-project-02', full: 'crea-project-02-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 1600 },
    { base: 'crea-project-03', full: 'crea-project-03-1200.webp', anchos: [480, 768, 1200], w: 1300, h: 1600 },
    { base: 'crea-project-04', full: 'crea-project-04-768.webp', anchos: [480, 768], w: 900, h: 1600 },
    { base: 'crea-project-05', full: 'crea-project-05-1600.webp', anchos: [480, 768, 1200, 1600], w: 1600, h: 1200 },
    { base: 'crea-project-06', full: 'crea-project-06-1600.webp', anchos: [480, 768, 1200, 1600], w: 1600, h: 942 },
    { base: 'crea-project-07', full: 'crea-project-07-768.webp', anchos: [480, 768], w: 900, h: 1600 },
    { base: 'crea-project-09', full: 'crea-project-09-768.webp', anchos: [480, 768], w: 900, h: 1600 },
    { base: 'crea-project-10', full: 'crea-project-10-768.webp', anchos: [480, 768], w: 900, h: 1600 },
    { base: 'crea-project-11', full: 'crea-project-11-768.webp', anchos: [480, 768], w: 900, h: 1600 },
    { base: 'img_2823', full: 'img_2823-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 900 },
    { base: 'img_e2805', full: 'img_e2805-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 900 },
    { base: 'anahuac', full: 'anahuac-1200.webp', anchos: [480, 768, 1200], w: 1200, h: 900 }
  ];

  var PROYECTO_ALT = 'Obra terminada ejecutada por CREA en Cancún, Quintana Roo';
  var PROYECTO_PIE = '[POR CONFIRMAR]';
  var OBRA_DIR = 'assets/img/obra/';

  function proyectoHtml(p) {
    var sizes = p.perfil === 'grande' ? '(max-width:800px) 100vw, 52vw'
      : p.perfil === 'ancho' ? '(max-width:800px) 100vw, 63vw'
      : '(max-width:800px) 50vw, 31vw';
    var fallback = p.anchos.indexOf(768) > -1 ? 768 : p.anchos[0];
    var srcset = p.anchos.map(function (a) {
      return OBRA_DIR + p.base + '-' + a + '.webp ' + a + 'w';
    }).join(', ');

    return '<figure class="project' + (p.destacada ? ' project-featured' : '') + '">' +
      '<button type="button" class="project-btn" data-full="' + OBRA_DIR + p.full + '"' +
      ' data-alt="' + PROYECTO_ALT + '" data-caption="' + PROYECTO_PIE + '">' +
      '<img src="' + OBRA_DIR + p.base + '-' + fallback + '.webp" srcset="' + srcset + '"' +
      ' sizes="' + sizes + '" width="' + p.w + '" height="' + p.h + '" loading="lazy" decoding="async"' +
      ' alt="' + PROYECTO_ALT + '">' +
      '</button>' +
      (p.destacada ? '<figcaption class="project-name">' + PROYECTO_PIE + '</figcaption>' : '') +
      '</figure>';
  }

  function renderProyectos() {
    var destacadas = document.getElementById('proyectos-destacados');
    var galeria = document.getElementById('proyectos-galeria');
    if (!destacadas || !galeria) return;

    var html = { destacadas: '', galeria: '' };
    PROYECTOS.forEach(function (p) {
      html[p.destacada ? 'destacadas' : 'galeria'] += proyectoHtml(p);
    });
    destacadas.innerHTML = html.destacadas;
    galeria.innerHTML = html.galeria;
  }

  renderProyectos();

  /* ------------------------------------------------------------------
     1. Medición
     ------------------------------------------------------------------ */

  function readAttribution() {
    var params = new URLSearchParams(window.location.search);
    var attr = {};
    ATTR_KEYS.forEach(function (k) {
      var v = params.get(k);
      if (v) attr[k] = v;
    });
    try {
      var saved = JSON.parse(sessionStorage.getItem('crea:attr') || '{}');
      ATTR_KEYS.forEach(function (k) { if (!attr[k] && saved[k]) attr[k] = saved[k]; });
      if (Object.keys(attr).length) sessionStorage.setItem('crea:attr', JSON.stringify(attr));
    } catch (e) { /* storage bloqueado */ }
    return attr;
  }

  var ATTR = readAttribution();

  function track(name, params) {
    var payload = Object.assign({ event: name }, ATTR, params || {});

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
    else if (typeof window.ga === 'function') window.ga('send', 'event', name, payload);

    try {
      var log = JSON.parse(sessionStorage.getItem('crea:events') || '[]');
      log.push(payload);
      sessionStorage.setItem('crea:events', JSON.stringify(log.slice(-50)));
    } catch (e) { /* storage bloqueado */ }

    window.dispatchEvent(new CustomEvent('crea:track', { detail: payload }));
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-track]');
    if (!el) return;
    track(el.getAttribute('data-track'), {
      posicion: el.getAttribute('data-track-pos') || null,
      destino: el.getAttribute('href') || null
    });
  });

  // Rellena los campos ocultos de atribución del formulario.
  document.querySelectorAll('[data-utm]').forEach(function (input) {
    input.value = ATTR[input.getAttribute('data-utm')] || '';
  });

  /* ------------------------------------------------------------------
     2. Menú móvil colapsable
     ------------------------------------------------------------------ */

  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('navlinks');

  function setMenu(open) {
    if (!navToggle || !navLinks) return;
    navLinks.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        navToggle.focus();
      }
    });

    // Al pasar a escritorio el panel se oculta solo por CSS; se limpia el estado.
    window.matchMedia('(min-width: 801px)').addEventListener('change', function (ev) {
      if (ev.matches) setMenu(false);
    });
  }

  /* ------------------------------------------------------------------
/* ------------------------------------------------------------------
     2b. Banda de logos — carrusel infinito horizontal
     ------------------------------------------------------------------ */

  (function initMarquee() {
    var root = document.querySelector('[data-marquee]');
    var trackEl = root && root.querySelector('[data-marquee-track]');
    var group = root && root.querySelector('[data-marquee-group]');
    var viewport = root && root.querySelector('.marquee-viewport');
    var btnToggle = root && root.querySelector('[data-marquee-toggle]');
    var btnPrev = root && root.querySelector('[data-marquee-prev]');
    var btnNext = root && root.querySelector('[data-marquee-next]');
    if (!trackEl || !group || !viewport) return;

    // El grupo clonado solo rellena el bucle: no debe leerse dos veces.
    var clone = group.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    Array.prototype.forEach.call(clone.querySelectorAll('img'), function (im) { im.alt = ''; });
    trackEl.appendChild(clone);
    var groups = [group, clone];

    var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var LOOP_MS = 80000;   // vuelta completa de la banda
    var GAP = 8;
    var half = 0;          // ancho de un grupo, ya con su gap
    var cellWidth = 0;
    var offset = 0;        // normalizado a [-half, 0]
    var last = 0;
    var running = false;
    var motion = !reduceQuery.matches;  // intención explícita del usuario
    var hovering = false;
    var dragging = false;
    var onScreen = true;
    var hidden = document.hidden;
    var pointerId = null;
    var startX = 0;
    var startOffset = 0;

    function norm(v) {
      if (half <= 0) return v;
      var n = ((v % half) + half) % half;
      return n === 0 ? 0 : n - half;
    }

    function measure() {
      half = groups[1].offsetLeft - groups[0].offsetLeft;
      var first = group.firstElementChild;
      if (first) {
        var cs = getComputedStyle(trackEl);
        GAP = parseFloat(cs.columnGap || cs.gap) || GAP;
        cellWidth = first.offsetWidth + GAP;
      }
      offset = norm(offset);
    }

    function apply() {
      trackEl.style.transform = 'translate3d(' + offset.toFixed(2) + 'px,0,0)';
    }

    function frame(ts) {
      if (!last) last = ts;
      var dt = ts - last;
      last = ts;
      if (dt > 250) dt = 0;   // pestaña suspendida: no da un salto brusco

      if (!motion || hovering || dragging || hidden || !onScreen) return;

      offset = norm(offset - (half / LOOP_MS) * dt);
      apply();
    }

    function loop() {
      if (running) return;
      running = true;
      window.requestAnimationFrame(function tick(ts) {
        frame(ts);
        window.requestAnimationFrame(tick);
      });
    }

    function setMotion(want) {
      motion = want;
      last = 0;
      if (btnToggle) {
        btnToggle.setAttribute('aria-pressed', want ? 'false' : 'true');
        btnToggle.querySelector('.sr-only').textContent = want ? 'Pausar logos' : 'Reproducir logos';
      }
    }

    function nudge(dir) {
      offset = norm(offset + dir * cellWidth);
      apply();
    }

    /* --- controles --- */

    if (btnToggle) {
      btnToggle.addEventListener('click', function () {
        setMotion(!motion);
        track('logos_' + (motion ? 'pausar' : 'reproducir'), { total: group.children.length });
      });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { nudge(1); });
    if (btnNext) btnNext.addEventListener('click', function () { nudge(-1); });

    /* --- pausa por hover, foco, pestaña y fuera de pantalla --- */

    viewport.addEventListener('mouseenter', function () { hovering = true; });
    viewport.addEventListener('mouseleave', function () { hovering = false; });
    viewport.addEventListener('focus', function () { hovering = true; });
    viewport.addEventListener('blur', function () { hovering = false; });

    document.addEventListener('visibilitychange', function () { hidden = document.hidden; last = 0; });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        last = 0;
      }, { threshold: 0.05 }).observe(root);
    }

    if (reduceQuery.addEventListener) {
      reduceQuery.addEventListener('change', function (ev) { setMotion(!ev.matches); });
    }

    /* --- arrastre con pointer events --- */

    viewport.addEventListener('pointerdown', function (ev) {
      if (ev.button != null && ev.button !== 0) return;
      dragging = true;
      pointerId = ev.pointerId;
      startX = ev.clientX;
      startOffset = offset;
      root.classList.add('is-dragging');
      try {
        if (viewport.setPointerCapture) viewport.setPointerCapture(ev.pointerId);
      } catch (e) { /* el navegador no deja capturar */ }
    });

    viewport.addEventListener('pointermove', function (ev) {
      if (!dragging || ev.pointerId !== pointerId) return;
      offset = norm(startOffset + (ev.clientX - startX));
      apply();
    });

    function endDrag(ev) {
      if (!dragging || (ev && ev.pointerId !== pointerId)) return;
      dragging = false;
      pointerId = null;
      root.classList.remove('is-dragging');
      offset = norm(offset);
      apply();
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('lostpointercapture', endDrag);

    viewport.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowRight') { nudge(-1); ev.preventDefault(); }
      if (ev.key === 'ArrowLeft') { nudge(1); ev.preventDefault(); }
    });

    /* --- arranque y medidas --- */

    window.addEventListener('resize', function () { measure(); apply(); });

    function boot() {
      measure();
      apply();
      loop();
      setMotion(!reduceQuery.matches);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(boot);
    } else {
      window.addEventListener('load', boot);
    }

    // Los logos llegan con loading="lazy": el ancho cambia al cargar.
    Array.prototype.forEach.call(group.querySelectorAll('img'), function (im) {
      if (!im.complete) im.addEventListener('load', function () { measure(); apply(); });
    });
  })();
  (function initHeroVideo() {
    var root = document.querySelector('.hero-media');
    var video = root && root.querySelector('.hero-video');
    var btn = root && root.querySelector('[data-hero-toggle]');
    if (!video || !btn) return;

    var reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var motion = !reduceQuery.matches;
    var onScreen = true;
    var hidden = document.hidden;
    var userPaused = false;

    function syncBtn(paused) {
      btn.setAttribute('aria-pressed', paused ? 'false' : 'true');
      var sr = btn.querySelector('.sr-only');
      if (sr) sr.textContent = paused ? 'Reproducir video del hero' : 'Pausar video del hero';
      if (root) root.classList.toggle('is-paused', paused);
    }

    function applyState() {
      if (!video) return;
      if (reduceQuery.matches) {
        video.removeAttribute('autoplay');
        video.loop = false;
        video.pause();
        userPaused = true;
        syncBtn(true);
        return;
      }
      if (!userPaused && motion && onScreen && !hidden) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
      syncBtn(video.paused);
    }

    function setPaused(paused) {
      userPaused = paused;
      if (paused) {
        video.pause();
      } else if (!reduceQuery.matches) {
        video.play().catch(function () {});
      }
      syncBtn(paused);
      if (typeof track === 'function') {
        track(paused ? 'hero_video_pause' : 'hero_video_play');
      }
    }

    btn.addEventListener('click', function () {
      setPaused(!userPaused);
    });

    video.addEventListener('play', function () { syncBtn(false); });
    video.addEventListener('pause', function () { syncBtn(true); });
    video.addEventListener('ended', function () {
      if (!reduceQuery.matches) {
        video.currentTime = 0;
        video.play().catch(function () {});
      }
    });

    document.addEventListener('visibilitychange', function () {
      hidden = document.hidden;
      applyState();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        applyState();
      }, { threshold: 0.15 }).observe(root);
    }

    if (reduceQuery.addEventListener) {
      reduceQuery.addEventListener('change', function (ev) {
        motion = !ev.matches;
        userPaused = ev.matches;
        applyState();
      });
    }

    // Estado inicial
    if (reduceQuery.matches) {
      userPaused = true;
      syncBtn(true);
      video.removeAttribute('autoplay');
      video.loop = false;
    } else {
      video.setAttribute('autoplay', '');
      video.loop = true;
      userPaused = false;
      syncBtn(false);
      video.play().catch(function () {});
    }
  })();



    /* ------------------------------------------------------------------
     3a. Portafolio — desplegar / recoger la galería
     ------------------------------------------------------------------ */

  var toggle = document.getElementById('toggle-galeria');
  var gallery = document.getElementById('proyectos-galeria');

  if (toggle && gallery) {
    toggle.addEventListener('click', function () {
      var open = gallery.hasAttribute('hidden');
      if (open) {
        gallery.removeAttribute('hidden');
        toggle.textContent = 'Ver menos';
        toggle.setAttribute('aria-expanded', 'true');
        track('portfolio_expand', { total: gallery.querySelectorAll('.project').length });
      } else {
        gallery.setAttribute('hidden', '');
        toggle.textContent = 'Ver más proyectos';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------------
     3b. Visor a pantalla completa
     ------------------------------------------------------------------ */

  var lightbox = document.getElementById('lightbox');

  // En privacidad.html no hay portafolio: se omite todo el visor.
  if (!lightbox) {
    initForm();
    return;
  }

  var lbImg = document.getElementById('lightbox-img');
  var lbCaption = document.getElementById('lightbox-caption');
  var lbTriggers = Array.prototype.slice.call(document.querySelectorAll('.project-btn'));
  var lbIndex = 0;
  var lbLastFocus = null;

  function lbItems() {
    return lbTriggers.map(function (btn) {
      return {
        full: btn.getAttribute('data-full'),
        alt: btn.getAttribute('data-alt') || '',
        caption: btn.getAttribute('data-caption') || ''
      };
    });
  }

  function lbRender() {
    var items = lbItems();
    var item = items[lbIndex];
    if (!item) return;
    lbImg.src = item.full;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.caption;
  }

  function lbOpen(index, trigger) {
    lbIndex = index;
    lbLastFocus = trigger || document.activeElement;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Visor de fotos de proyectos');
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lbRender();
    lightbox.querySelector('.lightbox-close').focus();
    track('portfolio_visor_abre', { indice: index + 1 });
  }

  function lbClose() {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lbLastFocus && typeof lbLastFocus.focus === 'function') lbLastFocus.focus();
    lbLastFocus = null;
  }

  function lbStep(delta) {
    var total = lbTriggers.length;
    if (!total) return;
    lbIndex = (lbIndex + delta + total) % total;
    lbRender();
  }

  lbTriggers.forEach(function (btn, i) {
    btn.addEventListener('click', function () { lbOpen(i, btn); });
  });

  lightbox.addEventListener('click', function (ev) {
    if (ev.target.hasAttribute('data-lb-close')) lbClose();
    else if (ev.target.hasAttribute('data-lb-prev')) lbStep(-1);
    else if (ev.target.hasAttribute('data-lb-next')) lbStep(1);
  });

  document.addEventListener('keydown', function (ev) {
    if (lightbox.hasAttribute('hidden')) return;

    if (ev.key === 'Escape') { lbClose(); return; }
    if (ev.key === 'ArrowLeft') { lbStep(-1); return; }
    if (ev.key === 'ArrowRight') { lbStep(1); return; }

    if (ev.key === 'Tab') {
      var focusables = lightbox.querySelectorAll('button:not([disabled])');
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  });

  /* ------------------------------------------------------------------
     4. Formulario -> Web3Forms
     ------------------------------------------------------------------ */

  function initForm() {
    var form = document.getElementById('form-contacto');
    if (!form) return;

    var status = document.getElementById('form-status');
    var sendBtn = form.querySelector('.form-send');
    var sendLabel = sendBtn.textContent;
    var keyInput = form.querySelector('input[name="access_key"]');
    var honeypot = form.querySelector('input[name="botcheck"]');
    var statusTimer = null;

    function setStatus(text, kind) {
      if (statusTimer) { clearTimeout(statusTimer); statusTimer = null; }
      status.textContent = text || '';
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }

    function clearErrors() {
      form.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
    }

    function markInvalid(field, message) {
      field.setAttribute('aria-invalid', 'true');
      setStatus(message, 'error');
      field.focus();
    }

    form.addEventListener('input', function (ev) {
      var f = ev.target;
      if (f.hasAttribute && f.hasAttribute('aria-invalid') && f.checkValidity()) {
        f.removeAttribute('aria-invalid');
        if (!status.classList.contains('error')) setStatus('', null);
      }
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      clearErrors();

      // Antispam: si el honeypot se llenó, se descarta en silencio.
      if (honeypot && honeypot.value) return;

      var nombre = form.nombre;
      var correo = form.correo;
      var privacidad = form.privacidad;

      if (!nombre.value.trim()) return markInvalid(nombre, 'Escribe tu nombre para poder responderte.');
      if (!correo.validity.valid) return markInvalid(correo, 'Revisa el correo electrónico: lo escribimos ahí nuestra respuesta.');

      var key = (WEB3FORMS_ACCESS_KEY !== 'POR_CONFIGURAR' ? WEB3FORMS_ACCESS_KEY : keyInput.value || '').trim();
      if (!key || key === 'POR_CONFIGURAR') {
        track('form_error_config', { destino: 'info@creaqr.mx' });
        setStatus('El formulario todavía no está disponible. Escríbenos por WhatsApp al ' + WHATSAPP_LABEL + ' o a info@creaqr.mx y te respondemos el mismo día.', 'error');
        return;
      }

      if (!privacidad.checked) {
        setStatus('Necesitamos tu aceptación del aviso de privacidad para poder usar tus datos.', 'error');
        privacidad.focus();
        return;
      }

      var data = new FormData(form);
      data.set('access_key', key);
      data.set('replyto', correo.value.trim());

      sendBtn.disabled = true;
      sendBtn.textContent = 'Enviando…';
      setStatus('Enviando tu mensaje…', 'info');

      fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries()))
      })
        .then(function (res) {
          return res.json().then(function (json) { return { ok: res.ok, json: json }; });
        })
        .then(function (r) {
          if (r.ok && r.json && r.json.success) {
            track('form_submit', { tipo: form.tipo_proyecto.value });
            setStatus('Gracias, ' + nombre.value.trim() + '. Tu mensaje llegó a nuestro correo: te respondemos a ' + correo.value.trim() + '.', 'ok');
            form.reset();
            form.querySelectorAll('[data-utm]').forEach(function (i) { i.value = ATTR[i.getAttribute('data-utm')] || ''; });
          } else {
            throw new Error((r.json && r.json.message) || 'Respuesta no válida del servicio de envío');
          }
        })
        .catch(function (err) {
          track('form_error', { motivo: String(err && err.message || err).slice(0, 120) });
          setStatus('No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp al ' + WHATSAPP_LABEL + '.', 'error');
        })
        .then(function () {
          sendBtn.disabled = false;
          sendBtn.textContent = sendLabel;
        });
    });
  }

  initForm();
})();



