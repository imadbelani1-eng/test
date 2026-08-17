/* ============ DATA ============ */

const TACOS_GARNITURE = ['Crudités Emmental', 'Frites Sauce Fromagère', 'Crudités Mozzarella'];
const TACOS_VIANDES = [
  { name: 'Viande Kebab' }, { name: 'Chicken Curry' }, { name: 'Steak Haché' },
  { name: 'Cordon Bleu' }, { name: 'Tenders' }, { name: 'Nuggets' },
  { name: 'Kefta' }, { name: 'Merguez' }, { name: 'Poulet du Chef', extra: 1.5 },
  { name: 'Poulet Champignons' },
];
const TACOS_SAUCES = ['Mayonnaise', 'Ketchup', 'Blanche', 'Tartare', 'Burger', 'Samouraï', 'Algérienne', 'Andalouse', 'Curry', 'Cheesy', 'Barbecue', 'Chili', 'Thai', 'Harissa', 'Moutarde', 'Poivre'];
const TACOS_EXTRAS = [
  { name: 'Fromage Raclette', price: 1.0 }, { name: 'Fromage de Chèvre', price: 1.0 },
  { name: 'Fromage Cheddar', price: 0.8 }, { name: 'Vache qui rit', price: 1.0 },
  { name: 'Boursin', price: 1.0 }, { name: 'Mozzarella', price: 1.0 },
  { name: 'Emmental', price: 1.0 }, { name: 'Oeuf', price: 1.0 },
  { name: 'Galette de Pomme de Terre', price: 1.3 }, { name: 'Boeuf Fumé', price: 1.4 },
  { name: 'Bacon de Dinde', price: 1.4 }, { name: 'Sauce Cheddar', price: 1.5 },
];
const BOX_VIANDES = [
  { name: 'Viande Kebab' }, { name: 'Chicken Curry' }, { name: 'Steak Haché' },
  { name: 'Cordon Bleu' }, { name: 'Merguez' }, { name: 'Kefta' },
  { name: 'Tenders', extra: 0.5 }, { name: 'Nuggets', extra: 0.5 },
];
const BOX_EXTRAS = [
  { name: 'Bacon de Dinde', price: 1.4 }, { name: 'Boeuf Fumé', price: 1.4 },
  { name: 'Oeuf', price: 1.0 }, { name: 'Sauce Fromagère', price: 1.5 }, { name: 'Sauce Cheddar', price: 1.5 },
];

const TACOS_SIZES = [
  { name: 'Tacos M', taille: 'M', viandeCount: 1, configurable: 'tacos', desc: '1 viande au choix.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
  { name: 'Tacos L', taille: 'L', viandeCount: 2, configurable: 'tacos', desc: '2 viandes au choix.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
  { name: 'Tacos XL', taille: 'XL', viandeCount: 3, configurable: 'tacos', desc: '3 viandes au choix.', prices: [{ key: 'seul', label: 'Seul', value: 8.5 }, { key: 'menu', label: 'Menu', value: 10.0 }] },
];
const BOX_TYPES = [
  { name: 'Box 1', box: '1', configurable: 'box', desc: 'Frites, poêlée de légumes, oignons frits, sauce au choix.', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
  { name: 'Box 2', box: '2', configurable: 'box', desc: 'Riz jaune crudités, salade tomate concombre maïs, poêlée de légumes.', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
];

const BOARD_SECTIONS = [
  { id: 'assiettes', icon: '🍽️', label: 'Assiettes, Wraps & Pitas', img: 'images/carte-assiettes-wraps-pitas.webp' },
  { id: 'sandwichs', icon: '🥖', label: "Best'Of Sandwichs", img: 'images/carte-sandwichs.webp' },
  { id: 'box', icon: '🍱', label: 'Box & Accompagnements', img: 'images/carte-box-accompagnements.webp', configType: 'box' },
  { id: 'burgers', icon: '🍔', label: "Best'Of Burgers", img: 'images/carte-burgers.webp' },
  { id: 'tacos', icon: '🌮', label: 'Tacos à composer', img: 'images/carte-tacos.webp', configType: 'tacos' },
  { id: 'desserts', icon: '🍰', label: 'Desserts & Boissons', configType: 'goodies' },
];

const DESSERTS = [
  { name: 'Menu Kids', desc: 'Cheeseburger ou Nuggets x5 + Frites. Pour les -12 ans.', price: 5.5 },
  { name: 'Tarte Daim', desc: 'Part de tarte au Daim.', price: 2.5 },
  { name: 'Tiramisu', desc: 'Tiramisu maison.', price: 3.0 },
];

const DRINKS = [
  { name: 'Coca-Cola', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Coca-Cola Zero', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Fanta Orange', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Fanta Citron', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Sprite', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Ice Tea Citron', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Ice Tea Pêche', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Oasis Tropical', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Orangina', desc: 'Canette 33cl.', price: 2.0 },
  { name: "Schweppes Agrum'", desc: 'Canette 33cl.', price: 2.0 },
  { name: '7Up', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Perrier', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Minute Maid Orange', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Tropico', desc: 'Canette 33cl.', price: 2.0 },
  { name: 'Eau minérale', desc: 'Bouteille 50cl.', price: 2.0 },
];

const GOODIES = [...DESSERTS, ...DRINKS];

/* ============ STATE ============ */
const RESTAURANT_TEL = '+33961643625';
let configState = null;

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ============ RENDER MENU ============ */
function renderMenu() {
  const nav = $('#cat-nav');
  const footerLinks = $('#footer-cat-links');
  const wrap = $('#menu-container');
  nav.innerHTML = '<a href="#carte" class="cat-nav-carte">🗂️ Carte</a>'
    + BOARD_SECTIONS.map((c) => `<a href="#${c.id}">${c.icon} ${c.label}</a>`).join('');
  footerLinks.innerHTML = BOARD_SECTIONS.map((c) => `<li><a href="#${c.id}">${c.label}</a></li>`).join('');

  wrap.innerHTML = BOARD_SECTIONS.map((section, i) => {
    if (section.id === 'desserts') {
      return `
        <section class="board-section${i % 2 ? ' alt' : ''}" id="desserts">
          <div class="container">
            <div class="cat-heading reveal"><span class="icon">${section.icon}</span><h2>${section.label}</h2></div>
            <p class="dessert-subhead reveal">Desserts</p>
            <ul class="dessert-list reveal">
              ${DESSERTS.map((d) => `
                <li>
                  <div><h3>${d.name}</h3><p>${d.desc}</p></div>
                  <span class="dessert-price">${fmt(d.price)}</span>
                </li>
              `).join('')}
            </ul>
            <p class="dessert-subhead reveal">Boissons <span class="hint">(2,00 € la canette)</span></p>
            <ul class="dessert-list dessert-list-drinks reveal">
              ${DRINKS.map((d) => `
                <li>
                  <div><h3>${d.name}</h3><p>${d.desc}</p></div>
                  <span class="dessert-price">${fmt(d.price)}</span>
                </li>
              `).join('')}
            </ul>
            <div class="board-pills reveal">
              <button class="pill-btn" data-config-type="goodies">🍰🥤 Composer desserts & boissons</button>
            </div>
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
    if (type === 'goodies') return openGoodiesConfigurator();
    const idx = parseInt(pill.dataset.configIdx, 10);
    openConfigurator(type === 'tacos' ? TACOS_SIZES[idx] : BOX_TYPES[idx]);
  }
});

/* ============ CONFIGURATOR ============ */
function openGoodiesConfigurator() {
  configState = { type: 'goodies', selections: new Set() };
  renderConfigurator();
  toggleModal('#configurator-overlay', true);
}

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

function configBasePrice() {
  const def = configState.item.prices.find((p) => p.key === configState.priceKey);
  return def.value;
}
function configViandeCount() {
  if (configState.type === 'tacos') return configState.item.viandeCount;
  const def = configState.item.prices.find((p) => p.key === configState.priceKey);
  return def.viandeCount;
}
function configTotal() {
  if (configState.type === 'goodies') {
    let goodiesTotal = 0;
    configState.selections.forEach((name) => {
      const g = GOODIES.find((x) => x.name === name);
      if (g) goodiesTotal += g.price;
    });
    return goodiesTotal;
  }
  let total = configBasePrice();
  if (configState.type === 'tacos') {
    configState.viandes.forEach((name) => {
      const v = TACOS_VIANDES.find((x) => x.name === name);
      if (v && v.extra) total += v.extra;
    });
    const extraSauces = Math.max(0, configState.sauces.size - 2);
    total += extraSauces * 0.25;
    configState.extras.forEach((name) => {
      const x = TACOS_EXTRAS.find((e) => e.name === name);
      if (x) total += x.price;
    });
  } else {
    configState.viandes.forEach((name) => {
      const v = BOX_VIANDES.find((x) => x.name === name);
      if (v && v.extra) total += v.extra;
    });
    configState.extras.forEach((name) => {
      const x = BOX_EXTRAS.find((e) => e.name === name);
      if (x) total += x.price;
    });
  }
  return total;
}

function optionHTML(name, selected, disabled, extraLabel) {
  return `<div class="option${selected ? ' selected' : ''}${disabled ? ' disabled' : ''}" data-option="${name}">
    <span>${name}</span>${extraLabel ? `<span class="extra">${extraLabel}</span>` : ''}
  </div>`;
}

function renderConfigurator() {
  if (configState.type === 'goodies') {
    const ready = configState.selections.size > 0;
    const html = `<div class="config-header">
      <h2>Desserts & boissons</h2>
      <p>Sélectionnez tout ce que vous voulez ajouter à votre commande.</p>
    </div>
    <div class="config-step"><h4>Desserts</h4>
      <div class="option-grid">
        ${DESSERTS.map((d) => optionHTML(d.name, configState.selections.has(d.name), false, fmt(d.price)).replace('data-option=', 'data-goodie=')).join('')}
      </div>
    </div>
    <div class="config-step"><h4>Boissons <span class="hint">(2,00 € la canette)</span></h4>
      <div class="option-grid">
        ${DRINKS.map((d) => optionHTML(d.name, configState.selections.has(d.name), false, fmt(d.price)).replace('data-option=', 'data-goodie=')).join('')}
      </div>
    </div>
    <div class="config-footer">
      <div class="config-total"><span>Total estimé</span>${fmt(configTotal())}</div>
      <button class="btn btn-primary" id="config-call" ${ready ? '' : 'disabled'}>📞 Appeler pour commander</button>
    </div>`;
    $('#configurator-content').innerHTML = html;
    return;
  }

  const { item, type } = configState;
  const viandeCount = configViandeCount();
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
    <div class="config-total"><span>Total estimé</span>${fmt(configTotal())}</div>
    <button class="btn btn-primary" id="config-call" ${ready ? '' : 'disabled'}>📞 Appeler pour commander</button>
  </div>`;

  $('#configurator-content').innerHTML = html;
}

document.addEventListener('click', (e) => {
  if (!configState) return;

  const goodie = e.target.closest('[data-goodie]');
  if (goodie) {
    const name = goodie.dataset.goodie;
    configState.selections.has(name) ? configState.selections.delete(name) : configState.selections.add(name);
    return renderConfigurator();
  }
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
    showCallToast();
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

/* ============ CALL NUMBER TOAST ============ */
const RESTAURANT_TEL_DISPLAY = '09 61 64 36 25';
let callToastTimer = null;
function showCallToast() {
  const toast = $('#call-toast');
  if (!toast) return;
  toast.textContent = `📞 ${RESTAURANT_TEL_DISPLAY}`;
  toast.classList.add('visible');
  clearTimeout(callToastTimer);
  callToastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.addEventListener('click', (e) => {
  if (e.target.closest('a[href^="tel:"]')) showCallToast();
});

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
