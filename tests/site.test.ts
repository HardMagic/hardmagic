import { describe, expect, it } from 'vitest';
import { navigation, productLinks } from '../src/data/site';

describe('site information architecture', () => {
  it('keeps primary navigation concise and internal', () => {
    expect(navigation).toHaveLength(3);
    expect(navigation.every(({ href }) => href.startsWith('/'))).toBe(true);
  });
  it('features the four primary products in the footer', () => {
    expect(productLinks.map(([name]) => name)).toEqual(['WireMark', 'HardMagic Studio', 'HardMagic CLI', 'Web Magic']);
  });
});
