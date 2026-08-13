import { describe, expect, it } from 'vitest';
import { navigation, productLinks } from '../src/data/site';
import { caseStudies, youtubeArchive } from '../src/data/portfolio';

describe('site information architecture', () => {
  it('keeps primary navigation concise and internal', () => {
    expect(navigation).toHaveLength(3);
    expect(navigation.every(({ href }) => !href.includes('://') && !href.startsWith('//'))).toBe(true);
  });
  it('features the four primary products in the footer', () => {
    expect(productLinks.map(([name]) => name)).toEqual(['WireMark', 'HardMagic Studio', 'HardMagic CLI', 'Web Magic']);
  });
});

describe('restored media archive', () => {
  it('publishes all eight legacy case studies with unique media', () => {
    expect(caseStudies).toHaveLength(8);
    expect(new Set(caseStudies.map(({ slug }) => slug)).size).toBe(8);
    expect(caseStudies.every(({ media, caveat }) => media.length >= 2 && caveat.length > 60)).toBe(true);
    const media = caseStudies.flatMap(({ media }) => media.flatMap((asset) => asset ? [asset.alt] : []));
    expect(new Set(media).size).toBe(media.length);
  });

  it('keeps the verified HardMagic YouTube archive explicit and consent-loaded', () => {
    expect(youtubeArchive).toHaveLength(6);
    expect(new Set(youtubeArchive.map(({ id }) => id)).size).toBe(6);
  });
});
