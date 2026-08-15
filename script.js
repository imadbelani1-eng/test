/* ============ DATA ============ */

import {
  TACOS_GARNITURE, TACOS_VIANDES, TACOS_SAUCES, TACOS_EXTRAS,
  BOX_VIANDES, BOX_EXTRAS, TACOS_SIZES, BOX_TYPES, DESSERTS,
  fmt, configBasePrice, configViandeCount, configTotal,
} from './pricing.js';

const BOARD_SECTIONS = [
  { id: 'assiettes', icon: '🍽️', label: 'Assiettes, Wraps & Pitas', img: 'images/carte-assiettes-wraps-pitas.jpg' },
  { id: 'sandwichs', icon: '🥖', label: "Best'Of Sandwichs", img: 'images/carte-sandwichs.jpg' },
  { id: 'box', icon: '🍱', label: 'Box & Accompagnements', img: 'images/carte-box-accompagnements.jpg', configType: 'box' },
  { id: 'burgers', icon: '🍔', label: "Best'Of Burgers", img: 'images/carte-burgers.jpg' },
  { id: 'tacos', icon: '🌮', label: 'Tacos à composer', img: 'images/carte-tacos.jpg', configType: 'tacos' },
  { id: 'desserts', icon: '🍰', label: 'Kids & Desserts' },
];

/* ============ STATE ============ */
const RESTAURANT_TEL = '+33961643625';
let configState = null;

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ============ RENDER MENU ============ */
function renderMenu() {
  const nav = $('#cat-nav');
  const footerLinks = $('#footer-cat-links');
  const wrap = $('#menu-container');
  nav.innerHTML = BOARD_SECTIONS.map((c) => `<a href="#${c.id}">${c.icon} ${c.label}</a>`).join('');
  footerLinks.innerHTML = BOARD_SECTIONS.map((c) => `<li><a href="#${c.id}">${c.label}</a></li>`).join('');

  wrap.innerHTML = BOARD_SECTIONS.map((section, i) => {
    if (section.id === 'desserts') {
      return `
        <section class="board-section${i % 2 ? ' alt' : ''}" id="desserts">
          <div class="container">
            <div class="cat-heading reveal"><span class="icon">${section.icon}</span><h2>${section.label}</h2></div>
            <ul class="dessert-list reveal">
              ${DESSERTS.map((d) => `
                <li>
                  <div><h3>${d.name}</h3><p>${d.desc}</p></div>
                  <span class="dessert-price">${fmt(d.price)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </section>`;
    }

    let pills = '';
    if (section.configType === 'tacos') {
      pills = `<div class="board-pills reveal">
        ${TACOS_SIZES.map((t, idx) => `<button class="pill-btn" data-config-type="tacos" data-config-idx="${idx}">🌮 Composer un ${t.name} — dès ${fmt(t.prices[0].value)}</button>`).join('')}
      </div>`;
    } else if (section.configType === 'box') {
      pills = `<div class="board-pills reveal">
        ${BOX_TYPES.map((b, idx) => `<button class="pill-btn" data-config-type="box" data-config-idx="${idx}">🍱 Composer la ${b.name} — dès ${fmt(b.prices[0].value)}</button>`).join('')}
      </div>`;
    }

    return `
      <section class="board-section${i % 2 ? ' alt' : ''}" id="${section.id}">
        <div class="container">
          <div class="cat-heading reveal"><span class="icon">${section.icon}</span><h2>${section.label}</h2></div>
          <div class="board-frame reveal">
            <div class="board-photo-wrap">
              <img class="board-photo" src="${section.img}" alt="Carte ${section.label}" loading="lazy">
              <div class="media-glow"></div>
              <div class="steam-source" aria-hidden="true">
                <span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="steam" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          ${pills}
        </div>
      </section>`;
  }).join('');
}

document.addEventListener('click', (e) => {
  const pill = e.target.closest('[data-config-type]');
  if (pill) {
    const type = pill.dataset.configType;
    const idx = parseInt(pill.dataset.configIdx, 10);
    openConfigurator(type === 'tacos' ? TACOS_SIZES[idx] : BOX_TYPES[idx]);
  }
});

/* ============ CONFIGURATOR ============ */
function openConfigurator(item) {
  if (item.configurable === 'tacos') {
    configState = {
      type: 'tacos', item,
      priceKey: item.prices[0].key,
      garniture: null,
      viandes: new Set(),
      sauces: new Set(),
      extras: new Set(),
    };
  } else {
    configState = {
      type: 'box', item,
      priceKey: item.prices[0].key,
      viandes: new Set(),
      extras: new Set(),
    };
  }
  renderConfigurator();
  toggleModal('#configurator-overlay', true);
}

function optionHTML(name, selected, disabled, extraLabel) {
  return `<div class="option${selected ? ' selected' : ''}${disabled ? ' disabled' : ''}" data-option="${name}">
    <span>${name}</span>${extraLabel ? `<span class="extra">${extraLabel}</span>` : ''}
  </div>`;
}

function renderConfigurator() {
  const { item, type } = configState;
  const viandeCount = configViandeCount(configState);
  let html = `<div class="config-header">
    <h2>${item.name} — ${type === 'tacos' ? item.taille : `Box ${item.box}`}</h2>
    <p>${item.desc}</p>
  </div>`;

  html += `<div class="config-step"><h4>Formule</h4>
    <div class="option-grid">
      ${item.prices.map((p) => optionHTML(p.label, p.key === configState.priceKey, false, fmt(p.value))
        .replace('data-option=', 'data-price-select=')).join('')}
    </div></div>`;

  if (type === 'tacos') {
    html += `<div class="config-step"><h4>Garniture <span class="hint">(1 au choix)</span></h4>
      <div class="option-grid">
        ${TACOS_GARNITURE.map((g) => optionHTML(g, configState.garniture === g, false).replace('data-option=', 'data-garniture=')).join('')}
      </div></div>`;

    const viandeFull = configState.viandes.size >= viandeCount;
    html += `<div class="config-step"><h4>Viande${viandeCount > 1 ? 's' : ''} <span class="hint">(${configState.viandes.size}/${viandeCount})</span></h4>
      <div class="option-grid">
        ${TACOS_VIANDES.map((v) => optionHTML(v.name, configState.viandes.has(v.name), viandeFull && !configState.viandes.has(v.name), v.extra ? `+${fmt(v.extra)}` : '').replace('data-option=', 'data-viande=')).join('')}
      </div></div>`;

    html += `<div class="config-step"><h4>Sauces <span class="hint">(2 offertes, +0,25 € au-delà)</span></h4>
      <div class="option-grid">
        ${TACOS_SAUCES.map((s) => optionHTML(s, configState.sauces.has(s)).replace('data-option=', 'data-sauce=')).join('')}
      </div></div>`;

    html += `<div class="config-step"><h4>Suppléments <span class="hint">(optionnel)</span></h4>
      <div class="option-grid">
        ${TACOS_EXTRAS.map((x) => optionHTML(x.name, configState.extras.has(x.name), false, `+${fmt(x.price)}`).replace('data-option=', 'data-extra=')).join('')}
      </div></div>`;
  } else {
    const viandeFull = configState.viandes.size >= viandeCount;
    html += `<div class="config-step"><h4>Viande${viandeCount > 1 ? 's' : ''} au choix <span class="hint">(${configState.viandes.size}/${viandeCount})</span></h4>
      <div class="option-grid">
        ${BOX_VIANDES.map((v) => optionHTML(v.name, configState.viandes.has(v.name), viandeFull && !configState.viandes.has(v.name), v.extra ? `+${fmt(v.extra)}` : '').replace('data-option=', 'data-viande=')).join('')}
      </div></div>`;

    html += `<div class="config-step"><h4>Suppléments <span class="hint">(optionnel)</span></h4>
      <div class="option-grid">
        ${BOX_EXTRAS.map((x) => optionHTML(x.name, configState.extras.has(x.name), false, `+${fmt(x.price)}`).replace('data-option=', 'data-extra=')).join('')}
      </div></div>`;
  }

  const ready = type === 'tacos'
    ? (configState.garniture && configState.viandes.size === viandeCount)
    : (configState.viandes.size === viandeCount);

  html += `<div class="config-footer">
    <div class="config-total"><span>Total estimé</span>${fmt(configTotal(configState))}</div>
    <button class="btn btn-primary" id="config-call" ${ready ? '' : 'disabled'}>📞 Appeler pour commander</button>
  </div>`;

  $('#configurator-content').innerHTML = html;
}

document.addEventListener('click', (e) => {
  if (!configState) return;

  const priceSel = e.target.closest('[data-price-select]');
  if (priceSel) {
    const def = configState.item.prices.find((p) => p.label === priceSel.dataset.priceSelect);
    configState.priceKey = def.key;
    return renderConfigurator();
  }
  const garniture = e.target.closest('[data-garniture]');
  if (garniture) {
    configState.garniture = garniture.dataset.garniture;
    return renderConfigurator();
  }
  const viande = e.target.closest('[data-viande]');
  if (viande && !viande.classList.contains('disabled')) {
    const name = viande.dataset.viande;
    configState.viandes.has(name) ? configState.viandes.delete(name) : configState.viandes.add(name);
    return renderConfigurator();
  }
  const sauce = e.target.closest('[data-sauce]');
  if (sauce) {
    const name = sauce.dataset.sauce;
    configState.sauces.has(name) ? configState.sauces.delete(name) : configState.sauces.add(name);
    return renderConfigurator();
  }
  const extra = e.target.closest('[data-extra]');
  if (extra) {
    const name = extra.dataset.extra;
    configState.extras.has(name) ? configState.extras.delete(name) : configState.extras.add(name);
    return renderConfigurator();
  }
  if (e.target.id === 'config-call') {
    toggleModal('#configurator-overlay', false);
    configState = null;
    window.location.href = `tel:${RESTAURANT_TEL}`;
  }
});

/* ============ MODALS ============ */
function toggleModal(sel, open) {
  $(sel).classList.toggle('visible', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

$('#close-configurator').addEventListener('click', () => { toggleModal('#configurator-overlay', false); configState = null; });
$('#configurator-overlay').addEventListener('click', (e) => { if (e.target.id === 'configurator-overlay') { toggleModal('#configurator-overlay', false); configState = null; } });

/* ============ LOCATION (WAZE / GOOGLE MAPS) ============ */
document.addEventListener('click', (e) => {
  if (e.target.closest('.open-location')) toggleModal('#location-overlay', true);
});
$('#close-location').addEventListener('click', () => toggleModal('#location-overlay', false));
$('#location-overlay').addEventListener('click', (e) => { if (e.target.id === 'location-overlay') toggleModal('#location-overlay', false); });

/* ============ CARTE GALLERY LIGHTBOX ============ */
$('#carte-scroll').addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  $('#lightbox-img').src = img.src;
  $('#lightbox-img').alt = img.alt;
  $('#lightbox').classList.add('visible');
});
$('#lightbox-close').addEventListener('click', () => $('#lightbox').classList.remove('visible'));
$('#lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') $('#lightbox').classList.remove('visible'); });

/* ============ NAV / BURGER ============ */
const header = $('#header');
$('#burger').addEventListener('click', () => header.classList.toggle('open'));

function setupScrollSpy() {
  const sections = BOARD_SECTIONS.map((c) => document.getElementById(c.id)).filter(Boolean);
  const links = $$('#cat-nav a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => observer.observe(s));
}

function setupReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  $$('.reveal').forEach((el) => observer.observe(el));
}

/* ============ INIT ============ */
$('#year').textContent = new Date().getFullYear();
renderMenu();
setupScrollSpy();
setupReveal();
