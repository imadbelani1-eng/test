import { describe, it, expect } from 'vitest';
import {
  fmt,
  configBasePrice,
  configViandeCount,
  configTotal,
  TACOS_SIZES,
  BOX_TYPES,
} from '../pricing.js';

describe('fmt', () => {
  it('formats amounts with a comma decimal and euro sign', () => {
    expect(fmt(6)).toBe('6,00 €');
    expect(fmt(7.5)).toBe('7,50 €');
    expect(fmt(0.25)).toBe('0,25 €');
  });
});

describe('configBasePrice', () => {
  it('returns the price matching the selected formule for tacos', () => {
    const tacosM = TACOS_SIZES[0];
    expect(configBasePrice({ item: tacosM, priceKey: 'seul' })).toBe(6.0);
    expect(configBasePrice({ item: tacosM, priceKey: 'menu' })).toBe(7.5);
  });

  it('returns the price matching the selected formule for a box', () => {
    const box1 = BOX_TYPES[0];
    expect(configBasePrice({ item: box1, priceKey: '1v' })).toBe(7.0);
    expect(configBasePrice({ item: box1, priceKey: '2v' })).toBe(9.0);
  });
});

describe('configViandeCount', () => {
  it('reads the meat count directly from the tacos size, regardless of formule', () => {
    const tacosXL = TACOS_SIZES[2];
    expect(configViandeCount({ type: 'tacos', item: tacosXL, priceKey: 'seul' })).toBe(3);
    expect(configViandeCount({ type: 'tacos', item: tacosXL, priceKey: 'menu' })).toBe(3);
  });

  it('reads the meat count from the selected box formule', () => {
    const box2 = BOX_TYPES[1];
    expect(configViandeCount({ type: 'box', item: box2, priceKey: '1v' })).toBe(1);
    expect(configViandeCount({ type: 'box', item: box2, priceKey: '2v' })).toBe(2);
  });
});

describe('configTotal - tacos', () => {
  const tacosL = TACOS_SIZES[1]; // 7,00 € seul / 8,50 € menu

  it('equals the base price when nothing extra is selected', () => {
    const state = { type: 'tacos', item: tacosL, priceKey: 'seul', viandes: new Set(), sauces: new Set(), extras: new Set() };
    expect(configTotal(state)).toBe(7.0);
  });

  it('adds a meat surcharge only for meats that have one', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'seul',
      viandes: new Set(['Poulet du Chef', 'Kefta']),
      sauces: new Set(), extras: new Set(),
    };
    expect(configTotal(state)).toBeCloseTo(7.0 + 1.5, 5);
  });

  it('gives the first two sauces for free', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'seul',
      viandes: new Set(), sauces: new Set(['Mayonnaise', 'Ketchup']), extras: new Set(),
    };
    expect(configTotal(state)).toBe(7.0);
  });

  it('charges 0,25€ per sauce beyond the first two', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'seul',
      viandes: new Set(), sauces: new Set(['Mayonnaise', 'Ketchup', 'Blanche', 'Tartare']), extras: new Set(),
    };
    expect(configTotal(state)).toBeCloseTo(7.0 + 2 * 0.25, 5);
  });

  it('sums selected extras', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'seul',
      viandes: new Set(), sauces: new Set(),
      extras: new Set(['Fromage Cheddar', 'Bacon de Dinde']),
    };
    expect(configTotal(state)).toBeCloseTo(7.0 + 0.8 + 1.4, 5);
  });

  it('combines meat surcharge, sauce overage and extras together', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'menu',
      viandes: new Set(['Poulet du Chef']),
      sauces: new Set(['Mayonnaise', 'Ketchup', 'Blanche']),
      extras: new Set(['Mozzarella']),
    };
    expect(configTotal(state)).toBeCloseTo(8.5 + 1.5 + 0.25 + 1.0, 5);
  });

  it('ignores unknown meat/extra names instead of throwing', () => {
    const state = {
      type: 'tacos', item: tacosL, priceKey: 'seul',
      viandes: new Set(['Not A Real Meat']),
      sauces: new Set(), extras: new Set(['Not A Real Extra']),
    };
    expect(configTotal(state)).toBe(7.0);
  });
});

describe('configTotal - box', () => {
  const box1 = BOX_TYPES[0]; // 7,00 € (1v) / 9,00 € (2v)

  it('equals the base price when nothing extra is selected', () => {
    const state = { type: 'box', item: box1, priceKey: '1v', viandes: new Set(), extras: new Set() };
    expect(configTotal(state)).toBe(7.0);
  });

  it('adds the meat surcharge for Tenders/Nuggets', () => {
    const state = { type: 'box', item: box1, priceKey: '2v', viandes: new Set(['Tenders', 'Nuggets']), extras: new Set() };
    expect(configTotal(state)).toBeCloseTo(9.0 + 0.5 + 0.5, 5);
  });

  it('does not apply the tacos free-sauce discount to box orders', () => {
    const state = { type: 'box', item: box1, priceKey: '1v', viandes: new Set(), extras: new Set(['Sauce Cheddar']) };
    expect(configTotal(state)).toBeCloseTo(7.0 + 1.5, 5);
  });
});
