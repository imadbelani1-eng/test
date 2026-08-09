/* ============ DATA ============ */
/* item.img (optional): path to a real photo (e.g. "images/tacos-xl.jpg").
   When absent, a designed gradient + emoji placeholder is used instead,
   so real photos can be dropped in later without touching the markup. */

const GRADIENTS = {
  assiettes: ['#c9955c', '#5a3a1e'],
  wraps: ['#4fd4de', '#0c6a72'],
  pitas: ['#e8b64a', '#8a5a35'],
  sandwichs: ['#ff9466', '#b8431f'],
  burgers: ['#ffd166', '#a8611a'],
  tacos: ['#ff6a3d', '#7a1f0f'],
  box: ['#7fd8c0', '#0f5c52'],
  accompagnements: ['#f4c95d', '#8a5a1e'],
  desserts: ['#e6a4c4', '#7a2f4e'],
};

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

const MENU = [
  {
    id: 'assiettes', label: 'Assiettes & Salades', icon: '🍽️',
    note: 'Servies avec frites, salade et sauce au choix.',
    items: [
      { name: 'Assiette 1 Viande', emoji: '🍽️', img: 'images/assiette-1-viande.jpg', desc: '1 viande au choix, frites, salade, sauce au choix.', prices: [{ key: 'seul', label: 'Seul', value: 8.5 }] },
      { name: 'Assiette 2 Viandes', emoji: '🍽️', img: 'images/assiette-2-viandes.jpg', desc: '2 viandes au choix, frites, salade, sauce au choix.', prices: [{ key: 'seul', label: 'Seul', value: 9.5 }] },
      { name: 'Assiette 3 Viandes', emoji: '🍽️', img: 'images/assiette-3-viandes.jpg', desc: '3 viandes au choix, frites, salade, sauce au choix.', prices: [{ key: 'seul', label: 'Seul', value: 10.5 }] },
      { name: 'Salade Country', emoji: '🥗', img: 'images/salade-country.jpg', desc: 'Salade, tomate, poulet, mozzarella, maïs, concombres, croûtons.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }] },
      { name: 'Salade Pêcheur', emoji: '🥗', img: 'images/salade-pecheur.jpg', desc: 'Salade, tomate, thon, oeuf, maïs, carottes râpées, croûtons.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }] },
    ],
  },
  {
    id: 'wraps', label: 'Wraps', icon: '🌯',
    items: [
      { name: 'Wrap Tenders', emoji: '🌯', img: 'images/wrap-tenders.jpg', desc: 'Poulet crispy, cheddar, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Wrap Fermier', emoji: '🌯', img: 'images/wrap-fermier.jpg', desc: 'Poulet crispy, galette de pomme de terre, cheddar, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Wrap Country', emoji: '🌯', desc: 'Poulet crispy, steak haché, galette de pomme de terre, cheddar, crudités.', prices: [{ key: 'menu', label: 'Menu', value: 8.5 }] },
    ],
  },
  {
    id: 'pitas', label: 'Pitas & Paninis', icon: '🥙',
    items: [
      { name: 'Pita Kebab', emoji: '🥙', img: 'images/pita-kebab.jpg', desc: 'Viande kebab, crudités.', badge: 'Étudiant 6,00 €', prices: [{ key: 'seul', label: 'Seul', value: 5.5 }, { key: 'menu', label: 'Menu', value: 7.0 }] },
      { name: 'Pita Chicken', emoji: '🥙', img: 'images/pita-chicken.jpg', desc: 'Poulet épicé, cheddar, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Pita Falafel', emoji: '🥙', img: 'images/pita-falafel.jpg', desc: 'Falafel, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Pita 1 Viande', emoji: '🥙', img: 'images/pita-1-viande.jpg', desc: '1 viande au choix, cheddar, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Pita 2 Viandes', emoji: '🥙', img: 'images/pita-2-viandes.jpg', desc: '2 viandes au choix, cheddar, crudités.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
      { name: 'Panini Fromage', emoji: '🥪', img: 'images/panini.jpg', desc: 'Chèvre, cheddar, mozzarella.', prices: [{ key: 'seul', label: 'Seul', value: 4.5 }, { key: 'menu', label: 'Menu', value: 6.0 }] },
      { name: 'Panini 1 Viande', emoji: '🥪', img: 'images/panini.jpg', desc: '1 viande au choix.', prices: [{ key: 'seul', label: 'Seul', value: 5.5 }, { key: 'menu', label: 'Menu', value: 7.0 }] },
      { name: 'Panini Chèvre Miel', emoji: '🥪', img: 'images/panini.jpg', desc: 'Chèvre et miel.', prices: [{ key: 'seul', label: 'Seul', value: 5.5 }, { key: 'menu', label: 'Menu', value: 7.0 }] },
      { name: 'Tacos Buffalo', emoji: '🌮', img: 'images/tacos-buffalo.jpg', desc: 'Steak haché, fromage, tranche de boeuf fumé.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
    ],
  },
  {
    id: 'sandwichs', label: "Best'Of Sandwichs", icon: '🥖',
    note: "100% Halal · 2 sauces au choix incluses (+0,25 € par sauce supplémentaire) · Supplément salade crudités +2,50 €",
    items: [
      { name: 'Cordon Bleu', emoji: '🥖', img: 'images/cordon-bleu.jpg', desc: 'Cordon bleu pané.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Chicken Chika', emoji: '🥖', img: 'images/chicken-chika.jpg', desc: 'Poulet épicé façon chika.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Kefta', emoji: '🥖', img: 'images/kefta.jpg', desc: 'Kefta grillée maison.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
      { name: 'Merguez', emoji: '🥖', img: 'images/merguez.jpg', desc: 'Merguez grillée.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Kebab', emoji: '🥖', img: 'images/kebab.jpg', desc: 'Viande kebab à la broche.', badge: 'Étudiant 6,00 €', prices: [{ key: 'seul', label: 'Seul', value: 5.0 }, { key: 'menu', label: 'Menu', value: 7.0 }] },
      { name: 'Américain', emoji: '🥖', img: 'images/americain.jpg', desc: '2 steaks, cheddar.', prices: [{ key: 'seul', label: 'Seul', value: 5.5 }, { key: 'menu', label: 'Menu', value: 7.0 }] },
      { name: 'Poulet Forestier', emoji: '🥖', img: 'images/poulet-forestier.jpg', desc: 'Poulet et champignons.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
      { name: 'Arabica', emoji: '🥖', img: 'images/arabica.jpg', desc: 'Steak, kefta, cheddar, oeuf.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Buffalo', emoji: '🥖', img: 'images/buffalo.jpg', desc: 'Steak, oeuf, cheddar, boeuf fumé.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Duo Mixte', emoji: '🥖', img: 'images/duo-mixte.jpg', desc: '2 viandes au choix, cheddar.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
    ],
  },
  {
    id: 'burgers', label: "Best'Of Burgers", icon: '🍔',
    note: 'Suppléments disponibles en caisse : oignons frits +0,50 €, pickles +0,50 €.',
    items: [
      { name: 'Cheese Burger', emoji: '🍔', img: 'images/cheese-burger.jpg', desc: '1 steak 45g, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 4.0 }, { key: 'menu', label: 'Menu', value: 5.5 }] },
      { name: 'Chicken Burger', emoji: '🍔', img: 'images/chicken-burger.jpg', desc: 'Poulet pané, fromage.', badge: 'Étudiant 6,00 €', prices: [{ key: 'seul', label: 'Seul', value: 5.0 }, { key: 'menu', label: 'Menu', value: 6.5 }] },
      { name: 'Fish Burger', emoji: '🍔', img: 'images/fish-burger.jpg', desc: 'Poisson pané, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 5.0 }, { key: 'menu', label: 'Menu', value: 6.5 }] },
      { name: 'Royal Chicken', emoji: '🍔', img: 'images/royal-chicken.jpg', desc: 'Poulet pané, fromage, galette de pomme de terre.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: "Méga Best'Of", emoji: '🍔', img: 'images/mega-bestof.jpg', desc: '3 steaks 80g, fromage, pickles.', prices: [{ key: 'seul', label: 'Seul', value: 7.5 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: "Royal Best'Of", emoji: '🍔', img: 'images/royal-bestof.jpg', desc: '2 steaks 90g, fromage, bacon de dinde.', prices: [{ key: 'seul', label: 'Seul', value: 7.5 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: 'Végétarien', emoji: '🍔', img: 'images/vegetarien.jpg', desc: 'Steak pané de blé.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Buffalo Burger', emoji: '🍔', img: 'images/buffalo-burger.jpg', desc: '2 steaks 80g, fromage, boeuf fumé.', prices: [{ key: 'seul', label: 'Seul', value: 7.5 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: 'Provençal', emoji: '🍔', img: 'images/provencal.jpg', desc: '1 steak 150g façon bouchère, légumes grillés, oignons frits, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: 'Méditerranéen', emoji: '🍔', img: 'images/mediterraneen.jpg', desc: 'Steak revisité, poêlée de légumes, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 7.5 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: 'Auvergnat', emoji: '🍔', img: 'images/auvergnat.jpg', desc: '1 steak 150g, raclette, galette de pomme de terre.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: '180 Burger', emoji: '🍔', img: 'images/burger-180.jpg', desc: '1 steak 180g, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 7.5 }, { key: 'menu', label: 'Menu', value: 9.0 }] },
      { name: '360 Burger', emoji: '🍔', img: 'images/burger-360.jpg', desc: '2 steaks 180g, fromage.', prices: [{ key: 'seul', label: 'Seul', value: 10.0 }, { key: 'menu', label: 'Menu', value: 12.0 }] },
    ],
  },
  {
    id: 'tacos', label: 'Tacos à composer', icon: '🌮',
    note: 'Choisissez la taille, on compose le reste ensemble : garniture, viande(s), sauces et suppléments.',
    items: [
      { name: 'Tacos M', emoji: '🌮', img: 'images/tacos-hero.jpg', desc: '1 viande au choix.', badge: 'Étudiant 6,50 €', configurable: 'tacos', taille: 'M', viandeCount: 1, prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Tacos L', emoji: '🌮', img: 'images/tacos-hero.jpg', desc: '2 viandes au choix.', configurable: 'tacos', taille: 'L', viandeCount: 2, prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
      { name: 'Tacos XL', emoji: '🌮', img: 'images/tacos-hero.jpg', desc: '3 viandes au choix.', configurable: 'tacos', taille: 'XL', viandeCount: 3, prices: [{ key: 'seul', label: 'Seul', value: 8.5 }, { key: 'menu', label: 'Menu', value: 10.0 }] },
    ],
  },
  {
    id: 'box', label: 'Box', icon: '🍱',
    items: [
      { name: 'Box 1', emoji: '🍱', img: 'images/box-1.jpg', desc: 'Frites, poêlée de légumes, oignons frits, sauce au choix.', configurable: 'box', box: '1', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
      { name: 'Box 2', emoji: '🍱', img: 'images/box-2.jpg', desc: 'Riz jaune crudités, salade tomate concombre maïs, poêlée de légumes.', configurable: 'box', box: '2', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
    ],
  },
  {
    id: 'accompagnements', label: 'Accompagnements', icon: '🍟',
    items: [
      { name: 'Tenders x5', emoji: '🍗', img: 'images/tenders.jpg', desc: '5 tenders de poulet croustillants.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
      { name: 'Onion Rings x5', emoji: '🧅', img: 'images/onion-rings.jpg', desc: '5 rondelles d’oignons panées.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
      { name: 'Nuggets x10', emoji: '🍗', img: 'images/nuggets.jpg', desc: '10 nuggets de poulet.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Chicken Wings x8', emoji: '🍗', img: 'images/chicken-wings.jpg', desc: '8 ailes de poulet.', prices: [{ key: 'seul', label: 'Seul', value: 6.5 }, { key: 'menu', label: 'Menu', value: 8.0 }] },
      { name: 'Mozza Sticks x6', emoji: '🧀', img: 'images/mozza-sticks.jpg', desc: '6 bâtonnets de mozzarella panée.', prices: [{ key: 'seul', label: 'Seul', value: 5.0 }, { key: 'menu', label: 'Menu', value: 6.5 }] },
      { name: 'Jalapenos x8', emoji: '🌶️', img: 'images/jalapenos.jpg', desc: '8 jalapenos panés.', prices: [{ key: 'seul', label: 'Seul', value: 5.0 }, { key: 'menu', label: 'Menu', value: 6.5 }] },
      { name: 'Barquette de Potatoes', emoji: '🥔', img: 'images/potatoes.jpg', desc: 'Potatoes maison.', prices: [{ key: 'seul', label: 'Seul', value: 4.5 }] },
      { name: 'Barquette de Frites', emoji: '🍟', img: 'images/frites.jpg', desc: 'Frites fraîches.', prices: [{ key: 'seul', label: 'Seul', value: 3.5 }] },
    ],
  },
  {
    id: 'desserts', label: 'Kids & Desserts', icon: '🍰',
    items: [
      { name: 'Menu Kids', emoji: '🧒', desc: 'Cheeseburger ou Nuggets x5 + Frites. Pour les -12 ans.', prices: [{ key: 'seul', label: 'Menu', value: 5.5 }] },
      { name: 'Tarte Daim', emoji: '🍰', desc: 'Part de tarte au Daim.', prices: [{ key: 'seul', label: 'Seul', value: 2.5 }] },
      { name: 'Tiramisu', emoji: '🍮', desc: 'Tiramisu maison.', prices: [{ key: 'seul', label: 'Seul', value: 3.0 }] },
    ],
  },
];

/* ============ STATE ============ */
const RESTAURANT_TEL = '+33478000000';
let configState = null;

const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ============ RENDER MENU ============ */
function cardMedia(item, catId) {
  const [a, b] = GRADIENTS[catId] || ['#8a5a35', '#1d1712'];
  if (item.img) {
    return `<div class="card-media" style="padding:0">
      <img src="${item.img}" alt="${item.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
      <div class="media-glow"></div>
      <div class="steam"><span></span><span></span><span></span></div>
      ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
    </div>`;
  }
  return `<div class="card-media" style="--card-a:${a};--card-b:${b}">
    <div class="media-glow"></div>
    <span class="card-emoji">${item.emoji || '🍴'}</span>
    <div class="steam"><span></span><span></span><span></span></div>
    ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
  </div>`;
}

function cardFooter(item, catId, itemIdx) {
  if (item.configurable) {
    return `<div class="card-footer">
      <button class="btn-add" data-open-configurator data-cat="${catId}" data-item="${itemIdx}">Composer et voir le prix →</button>
    </div>`;
  }
  return `<div class="price-toggle">
    ${item.prices.map((p) => `<span class="price-chip">${p.label} <span>${fmt(p.value)}</span></span>`).join('')}
  </div>`;
}

function renderMenu() {
  const nav = $('#cat-nav');
  const footerLinks = $('#footer-cat-links');
  const wrap = $('#menu-container');
  nav.innerHTML = MENU.map((c) => `<a href="#${c.id}">${c.icon} ${c.label}</a>`).join('');
  footerLinks.innerHTML = MENU.map((c) => `<li><a href="#${c.id}">${c.label}</a></li>`).join('');

  wrap.innerHTML = MENU.map((cat, catIdx) => `
    <section class="menu-category${catIdx % 2 ? ' alt' : ''}" id="${cat.id}">
      <div class="container">
        <div class="cat-heading reveal"><span class="icon">${cat.icon}</span><h2>${cat.label}</h2></div>
        ${cat.note ? `<p class="cat-note reveal">${cat.note}</p>` : '<div style="margin-bottom:20px"></div>'}
        <div class="menu-grid">
          ${cat.items.map((item, itemIdx) => `
            <article class="item-card reveal" data-cat="${cat.id}" data-item="${itemIdx}">
              ${cardMedia(item, cat.id)}
              <div class="card-body">
                <h3>${item.name}</h3>
                <p class="desc">${item.desc}</p>
                ${cardFooter(item, cat.id, itemIdx)}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `).join('');
}

function getItem(catId, itemIdx) {
  const cat = MENU.find((c) => c.id === catId);
  return { cat, item: cat.items[itemIdx] };
}

/* ============ CARD CLICKS ============ */
document.addEventListener('click', (e) => {
  const openConfig = e.target.closest('[data-open-configurator]');
  if (openConfig) {
    const { item } = getItem(openConfig.dataset.cat, parseInt(openConfig.dataset.item, 10));
    openConfigurator(item);
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

/* ============ NAV / BURGER / SEARCH ============ */
const header = $('#header');
$('#burger').addEventListener('click', () => header.classList.toggle('open'));

$('#search-input').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  $$('.item-card').forEach((card) => {
    const name = $('h3', card).textContent.toLowerCase();
    const desc = $('.desc', card).textContent.toLowerCase();
    card.style.display = !q || name.includes(q) || desc.includes(q) ? '' : 'none';
  });
});

function setupScrollSpy() {
  const sections = MENU.map((c) => document.getElementById(c.id)).filter(Boolean);
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
