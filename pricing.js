/* ============ MENU DATA & PRICING LOGIC ============ */
/* Pure data + calculation functions, kept dependency-free from the DOM so
   they can be imported directly by script.js and by the test suite. */

export const TACOS_GARNITURE = ['Crudités Emmental', 'Frites Sauce Fromagère', 'Crudités Mozzarella'];
export const TACOS_VIANDES = [
  { name: 'Viande Kebab' }, { name: 'Chicken Curry' }, { name: 'Steak Haché' },
  { name: 'Cordon Bleu' }, { name: 'Tenders' }, { name: 'Nuggets' },
  { name: 'Kefta' }, { name: 'Merguez' }, { name: 'Poulet du Chef', extra: 1.5 },
  { name: 'Poulet Champignons' },
];
export const TACOS_SAUCES = ['Mayonnaise', 'Ketchup', 'Blanche', 'Tartare', 'Burger', 'Samouraï', 'Algérienne', 'Andalouse', 'Curry', 'Cheesy', 'Barbecue', 'Chili', 'Thai', 'Harissa', 'Moutarde', 'Poivre'];
export const TACOS_EXTRAS = [
  { name: 'Fromage Raclette', price: 1.0 }, { name: 'Fromage de Chèvre', price: 1.0 },
  { name: 'Fromage Cheddar', price: 0.8 }, { name: 'Vache qui rit', price: 1.0 },
  { name: 'Boursin', price: 1.0 }, { name: 'Mozzarella', price: 1.0 },
  { name: 'Emmental', price: 1.0 }, { name: 'Oeuf', price: 1.0 },
  { name: 'Galette de Pomme de Terre', price: 1.3 }, { name: 'Boeuf Fumé', price: 1.4 },
  { name: 'Bacon de Dinde', price: 1.4 }, { name: 'Sauce Cheddar', price: 1.5 },
];
export const BOX_VIANDES = [
  { name: 'Viande Kebab' }, { name: 'Chicken Curry' }, { name: 'Steak Haché' },
  { name: 'Cordon Bleu' }, { name: 'Merguez' }, { name: 'Kefta' },
  { name: 'Tenders', extra: 0.5 }, { name: 'Nuggets', extra: 0.5 },
];
export const BOX_EXTRAS = [
  { name: 'Bacon de Dinde', price: 1.4 }, { name: 'Boeuf Fumé', price: 1.4 },
  { name: 'Oeuf', price: 1.0 }, { name: 'Sauce Fromagère', price: 1.5 }, { name: 'Sauce Cheddar', price: 1.5 },
];

export const TACOS_SIZES = [
  { name: 'Tacos M', taille: 'M', viandeCount: 1, configurable: 'tacos', desc: '1 viande au choix.', prices: [{ key: 'seul', label: 'Seul', value: 6.0 }, { key: 'menu', label: 'Menu', value: 7.5 }] },
  { name: 'Tacos L', taille: 'L', viandeCount: 2, configurable: 'tacos', desc: '2 viandes au choix.', prices: [{ key: 'seul', label: 'Seul', value: 7.0 }, { key: 'menu', label: 'Menu', value: 8.5 }] },
  { name: 'Tacos XL', taille: 'XL', viandeCount: 3, configurable: 'tacos', desc: '3 viandes au choix.', prices: [{ key: 'seul', label: 'Seul', value: 8.5 }, { key: 'menu', label: 'Menu', value: 10.0 }] },
];
export const BOX_TYPES = [
  { name: 'Box 1', box: '1', configurable: 'box', desc: 'Frites, poêlée de légumes, oignons frits, sauce au choix.', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
  { name: 'Box 2', box: '2', configurable: 'box', desc: 'Riz jaune crudités, salade tomate concombre maïs, poêlée de légumes.', prices: [{ key: '1v', label: '1 viande', value: 7.0, viandeCount: 1 }, { key: '2v', label: '2 viandes', value: 9.0, viandeCount: 2 }] },
];

export const DESSERTS = [
  { name: 'Menu Kids', desc: 'Cheeseburger ou Nuggets x5 + Frites. Pour les -12 ans.', price: 5.5 },
  { name: 'Tarte Daim', desc: 'Part de tarte au Daim.', price: 2.5 },
  { name: 'Tiramisu', desc: 'Tiramisu maison.', price: 3.0 },
];

export const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

/**
 * @param {{ item: object, priceKey: string }} state
 */
export function configBasePrice(state) {
  const def = state.item.prices.find((p) => p.key === state.priceKey);
  return def.value;
}

/**
 * @param {{ type: 'tacos'|'box', item: object, priceKey: string }} state
 */
export function configViandeCount(state) {
  if (state.type === 'tacos') return state.item.viandeCount;
  const def = state.item.prices.find((p) => p.key === state.priceKey);
  return def.viandeCount;
}

/**
 * @param {{ type: 'tacos'|'box', item: object, priceKey: string, viandes: Set<string>, sauces?: Set<string>, extras: Set<string> }} state
 */
export function configTotal(state) {
  let total = configBasePrice(state);
  if (state.type === 'tacos') {
    state.viandes.forEach((name) => {
      const v = TACOS_VIANDES.find((x) => x.name === name);
      if (v && v.extra) total += v.extra;
    });
    const extraSauces = Math.max(0, state.sauces.size - 2);
    total += extraSauces * 0.25;
    state.extras.forEach((name) => {
      const x = TACOS_EXTRAS.find((e) => e.name === name);
      if (x) total += x.price;
    });
  } else {
    state.viandes.forEach((name) => {
      const v = BOX_VIANDES.find((x) => x.name === name);
      if (v && v.extra) total += v.extra;
    });
    state.extras.forEach((name) => {
      const x = BOX_EXTRAS.find((e) => e.name === name);
      if (x) total += x.price;
    });
  }
  return total;
}
