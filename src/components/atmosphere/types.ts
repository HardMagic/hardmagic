import type { ImageMetadata } from 'astro';

export type AtmosphericHeadingLevel = 'h2' | 'h3';

export type AtmosphericTone = 'nocturne' | 'ember' | 'spectral';

export type AtmosphericImage =
  | {
      src: ImageMetadata;
      alt: string;
      decorative?: false;
    }
  | {
      src: ImageMetadata;
      alt?: '';
      decorative: true;
    };

export type EvidenceKind = 'fact' | 'interpretation' | 'projection' | 'open-question';

export interface EvidenceItem {
  id: string;
  label: string;
  summary: string;
  kind: EvidenceKind;
  publisher?: string;
  publishedAt?: string;
  href?: string;
  relationship?: string;
}

export type EvidenceSet = readonly [EvidenceItem, ...EvidenceItem[]];

export type ProjectionStatus = 'observed' | 'emerging' | 'projected' | 'wildcard';

export interface ProjectionMoment {
  id: string;
  horizon: string;
  title: string;
  summary: string;
  status: ProjectionStatus;
  implication?: string;
  evidenceIds?: readonly string[];
}

export type ProjectionTimeline = readonly [ProjectionMoment, ...ProjectionMoment[]];
