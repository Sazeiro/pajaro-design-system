/* @ds-bundle: {"format":4,"namespace":"Pajaro","components":[{"name":"Mark"},{"name":"Button"},{"name":"Badge"},{"name":"FlightCard"},{"name":"PriceAlert"},{"name":"AIChat"}]} */
(function () {
  var R = window.React, h = R.createElement, F = R.Fragment;
  var BIRD = 'M50 17 C55.5 17 57.5 21.5 57 27 L56.5 32 A46 46 0 0 1 92 68 A54 54 0 0 0 55.5 49 L55.5 58 L68 92 L50 73 L32 92 L44.5 58 L44.5 49 A54 54 0 0 0 8 68 A46 46 0 0 1 43.5 32 L43 27 C42.5 21.5 44.5 17 50 17 Z';
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  /* ---------- icons: 20px grid, 1.5 stroke, round joins ---------- */
  var ICONS = {
    arrowRight: 'M4 10h12M11 5l5 5-5 5',
    arrowDown: 'M10 4v12M5 11l5 5 5-5',
    arrowUp: 'M10 16V4M5 9l5-5 5 5',
    check: 'M4.5 10.5l3.5 3.5 7.5-8',
    bell: 'M6 8a4 4 0 0 1 8 0v3.5l1.5 2.5h-11L6 11.5zM8.5 16.5a1.6 1.6 0 0 0 3 0',
    send: 'M4 10l12-6-4.5 12-2-4.5z',
    clock: 'M10 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM10 6.5V10l2.5 1.5',
    wait: 'M7 4.5h6M7 15.5h6M7.5 4.5c0 3 5 3.5 5 5.5s-5 2.5-5 5.5M12.5 4.5c0 2-1 2.6-2.5 3.4',
    luggage: 'M6 7h8v9H6zM8 7V4.5h4V7M8 16v1M12 16v1',
    alert: 'M10 4l7 12H3zM10 9v3M10 14.2v.1'
  };
  function Icon(p) {
    return h('svg', { className: cx('pj-icon', p.className), width: p.size || 20, height: p.size || 20, viewBox: '0 0 20 20', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: ICONS[p.name] }));
  }

  /* ---------- Mark: the bird ---------- */
  function Mark(p) {
    var size = p.size || 24;
    var bird = h('g', { transform: 'translate(0 -3) rotate(45 50 54)' }, h('path', { d: BIRD, fill: p.tile ? 'var(--brand-sol)' : 'currentColor' }));
    if (p.tile) {
      return h('svg', { className: cx('pj-mark', p.className), width: size, height: size, viewBox: '0 0 100 100', role: 'img', 'aria-label': p.label || 'Pájaro' },
        h('rect', { width: 100, height: 100, rx: 22.5, fill: 'var(--brand-cielo)' }),
        h('g', { transform: 'translate(50 50) scale(0.78) translate(-50 -50)' }, bird));
    }
    return h('svg', { className: cx('pj-mark', p.className), width: size, height: size, viewBox: '0 0 100 100', role: 'img', 'aria-label': p.label || 'Pájaro', style: p.color ? { color: p.color } : undefined }, bird);
  }

  /* ---------- Button ---------- */
  function Button(p) {
    var variant = p.variant || 'secondary', size = p.size || 'md';
    var rest = {};
    for (var k in p) if (['variant', 'size', 'icon', 'iconEnd', 'children', 'className'].indexOf(k) < 0) rest[k] = p[k];
    rest.className = cx('pj-btn', 'pj-btn-' + variant, 'pj-btn-' + size, p.className);
    rest.type = p.type || 'button';
    return h('button', rest, p.icon ? h(Icon, { name: p.icon, size: 18 }) : null, h('span', null, p.children), p.iconEnd ? h(Icon, { name: p.iconEnd, size: 18 }) : null);
  }

  /* ---------- Badge ---------- */
  function Badge(p) {
    return h('span', { className: cx('pj-badge', 'pj-badge-' + (p.tone || 'neutral'), p.className) }, p.icon ? h(Icon, { name: p.icon, size: 14 }) : null, p.children);
  }

  /* ---------- FlightCard ---------- */
  function Leg(p) {
    return h('div', { className: cx('pj-leg', p.end && 'pj-leg-end') },
      h('div', { className: 'pj-time' }, p.time, p.dayShift ? h('sup', { className: 'pj-dayshift' }, p.dayShift) : null),
      h('div', { className: 'pj-code' }, p.code));
  }
  function FlightCard(p) {
    var reasons = p.reasons || [];
    return h('article', { className: cx('pj-card', 'pj-flight', p.recommended && 'pj-flight-rec', p.className) },
      h('header', { className: 'pj-flight-head' },
        h('div', { className: 'pj-airline' },
          h('span', { className: 'pj-airline-dot', 'aria-hidden': true }, (p.airline || '?').slice(0, 1)),
          h('span', { className: 'pj-airline-name' }, p.airline),
          p.flightNumber ? h('span', { className: 'pj-code pj-muted' }, p.flightNumber) : null),
        p.label ? h(Badge, { tone: p.recommended ? 'sol' : 'neutral' }, p.label) : null),
      h('div', { className: 'pj-flight-main' },
        h('div', { className: 'pj-route' },
          h(Leg, { time: p.depart, code: p.from }),
          h('div', { className: 'pj-path' },
            h('div', { className: 'pj-path-meta' }, p.duration),
            h('div', { className: 'pj-path-line' }, (p.stopsAt || []).map(function (s, i) { return h('span', { key: i, className: 'pj-stop', title: s }); })),
            h('div', { className: cx('pj-path-meta', p.stops === 0 && 'pj-direct') }, p.stops === 0 ? 'Directo' : p.stops + (p.stops === 1 ? ' escala' : ' escalas') + (p.stopsAt && p.stopsAt.length ? ' · ' + p.stopsAt.join(', ') : ''))),
          h(Leg, { time: p.arrive, code: p.to, dayShift: p.dayShift, end: true })),
        h('div', { className: 'pj-price-block' },
          h('div', { className: 'pj-price' }, p.price),
          h('div', { className: 'pj-price-note' }, p.priceNote || 'Final por persona'))),
      reasons.length ? h('section', { className: 'pj-why', 'aria-label': 'Por qué te lo recomiendo' },
        h('div', { className: 'pj-why-title' }, h(Mark, { size: 16 }), h('span', null, p.whyTitle || 'Por qué te lo recomiendo')),
        h('ul', { className: 'pj-why-list' }, reasons.map(function (r, i) {
          return h('li', { key: i }, h(Icon, { name: 'check', size: 16 }), h('span', null, h('strong', null, r.title), r.detail ? ' ' + r.detail : ''));
        })),
        p.basis ? h('p', { className: 'pj-why-basis' }, p.basis) : null) : null,
      p.actions === false ? null : h('footer', { className: 'pj-flight-foot' },
        h('span', { className: 'pj-bags' }, h(Icon, { name: 'luggage', size: 16 }), p.baggage || 'Equipaje de mano incluido'),
        h('div', { className: 'pj-actions' },
          h(Button, { variant: 'ghost', size: 'sm' }, 'Ver detalle'),
          h(Button, { variant: p.recommended ? 'primary' : 'secondary', size: 'sm', iconEnd: 'arrowRight' }, p.cta || 'Elegir vuelo'))));
  }

  /* ---------- PriceAlert ---------- */
  function Spark(p) {
    var d = p.data || [], W = 372, H = 72, pad = 6;
    if (d.length < 2) return null;
    var min = Math.min.apply(null, d), max = Math.max.apply(null, d);
    var x = function (i) { return pad + i * (W - 2 * pad) / (d.length - 1); };
    var y = function (v) { return pad + (H - 2 * pad) * (1 - (v - min) / ((max - min) || 1)); };
    var line = d.map(function (v, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); }).join(' ');
    var last = d.length - 1;
    var typical = p.typical != null ? y(p.typical) : null;
    return h('svg', { className: 'pj-spark', viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': p.label || 'Evolución del precio' },
      typical != null ? h('line', { x1: 0, x2: W, y1: typical, y2: typical, className: 'pj-spark-typ' }) : null,
      h('path', { d: line, className: 'pj-spark-line' }),
      h('circle', { cx: x(last), cy: y(d[last]), r: 4.5, className: 'pj-spark-now' }));
  }
  function PriceAlert(p) {
    var down = p.direction !== 'up';
    var verdict = p.verdict || 'buy';
    return h('article', { className: cx('pj-card', 'pj-alert', p.className) },
      h('header', { className: 'pj-alert-head' },
        h('div', null,
          h('div', { className: 'pj-alert-route' }, h('span', { className: 'pj-code-lg' }, p.from + ' → ' + p.to), p.trip ? h('span', { className: 'pj-muted pj-small' }, '· ' + p.trip) : null),
          h('div', { className: 'pj-muted pj-small' }, p.dates)),
        h('span', { className: 'pj-alert-bell', title: 'Alerta activa' }, h(Icon, { name: 'bell', size: 18 }))),
      h('div', { className: 'pj-alert-body' },
        h('div', null,
          h('div', { className: 'pj-price-xl' }, p.price),
          h('div', { className: 'pj-alert-delta' },
            h(Badge, { tone: down ? 'success' : 'danger', icon: down ? 'arrowDown' : 'arrowUp' }, p.change),
            h('span', { className: 'pj-muted pj-small' }, p.since || 'desde que creaste la alerta'))),
        h('div', { className: 'pj-alert-chart' },
          h(Spark, { data: p.history, typical: p.typical }),
          h('div', { className: 'pj-spark-legend' },
            h('span', null, h('i', { className: 'pj-key-now' }), 'Hoy'),
            p.typical != null ? h('span', null, h('i', { className: 'pj-key-typ' }), 'Precio típico ' + (p.typicalLabel || '')) : null))),
      h('section', { className: cx('pj-verdict', 'pj-verdict-' + verdict) },
        h('div', { className: 'pj-verdict-icon' }, h(Icon, { name: verdict === 'buy' ? 'check' : 'clock', size: 18 })),
        h('div', null,
          h('div', { className: 'pj-verdict-title' }, verdict === 'buy' ? (p.verdictTitle || 'Comprá ahora') : (p.verdictTitle || 'Esperá')),
          h('p', { className: 'pj-verdict-text' }, p.verdictText),
          p.confidence ? h('div', { className: 'pj-confidence' },
            h('div', { className: 'pj-confidence-bar' }, h('span', { style: { width: p.confidence + '%' } })),
            h('span', { className: 'pj-small pj-muted' }, 'Confianza ' + p.confidence + '%')) : null)),
      p.actions === false ? null : h('footer', { className: 'pj-alert-foot' },
        h('span', { className: 'pj-caption pj-muted' }, p.updated || 'Actualizado hace 4 min'),
        h('div', { className: 'pj-actions' },
          h(Button, { variant: 'ghost', size: 'sm' }, 'Pausar'),
          h(Button, { variant: verdict === 'buy' ? 'primary' : 'secondary', size: 'sm', iconEnd: 'arrowRight' }, 'Ver vuelos'))));
  }

  /* ---------- AIChat ---------- */
  function Avatar() { return h('span', { className: 'pj-ai-avatar', 'aria-hidden': true }, h(Mark, { size: 18 })); }
  function AIChat(p) {
    var msgs = p.messages || [];
    return h('section', { className: cx('pj-chat', p.className), 'aria-label': 'Chat con Pájaro' },
      p.title !== false ? h('header', { className: 'pj-chat-head' },
        h(Mark, { size: 28, tile: true }),
        h('div', null, h('div', { className: 'pj-chat-title' }, p.title || 'Pájaro'), h('div', { className: 'pj-caption pj-muted' }, p.subtitle || 'Copiloto de viaje'))) : null,
      h('div', { className: 'pj-chat-thread' }, msgs.map(function (m, i) {
        if (m.role === 'user') return h('div', { key: i, className: 'pj-msg pj-msg-user' }, h('div', { className: 'pj-bubble' }, m.text));
        return h('div', { key: i, className: 'pj-msg pj-msg-ai' }, h(Avatar),
          h('div', { className: 'pj-msg-body' },
            m.text ? h('p', { className: 'pj-msg-text' }, m.text) : null,
            m.options ? h('div', { className: 'pj-msg-options' }, m.options.map(function (o, j) {
              return h('div', { key: j, className: cx('pj-option', o.recommended && 'pj-option-rec') },
                h('div', { className: 'pj-option-main' },
                  h('div', { className: 'pj-option-title' }, o.title, o.recommended ? h(Badge, { tone: 'cielo' }, 'Sugerido') : null),
                  h('div', { className: 'pj-small pj-muted' }, o.detail)),
                h('div', { className: 'pj-option-value' }, o.value));
            })) : null,
            m.note ? h('p', { className: 'pj-small pj-muted pj-msg-note' }, m.note) : null));
      }), p.thinking ? h('div', { className: 'pj-msg pj-msg-ai' }, h(Avatar), h('div', { className: 'pj-thinking' }, h('span'), h('span'), h('span'))) : null),
      p.suggestions && p.suggestions.length ? h('div', { className: 'pj-chips' }, p.suggestions.map(function (s, i) { return h('button', { key: i, type: 'button', className: 'pj-chip' }, s); })) : null,
      h('form', { className: 'pj-composer', onSubmit: function (e) { e.preventDefault(); } },
        h('input', { className: 'pj-composer-input', placeholder: p.placeholder || 'Preguntale a Pájaro…', 'aria-label': 'Mensaje' }),
        h('button', { type: 'submit', className: 'pj-send', 'aria-label': 'Enviar' }, h(Icon, { name: 'send', size: 18 }))));
  }

  var api = { Mark: Mark, Button: Button, Badge: Badge, FlightCard: FlightCard, PriceAlert: PriceAlert, AIChat: AIChat, Icon: Icon };
  window.Pajaro = Object.assign(window.Pajaro || {}, api);
})();
