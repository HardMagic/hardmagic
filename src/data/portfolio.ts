import type { ImageMetadata } from 'astro';

import airikaiPortrait from '../assets/portfolio/airikai-portrait.avif';
import airikaiMotion from '../assets/portfolio/airikai-motion.avif';
import airikaiEditorial from '../assets/portfolio/airikai-editorial.avif';
import fashionEditorial from '../assets/portfolio/fashionx-editorial.avif';
import fashionSwim from '../assets/portfolio/fashionx-swim.avif';
import fashionProcess from '../assets/portfolio/fashionx-process.avif';
import focusProduct from '../assets/portfolio/focuspass-product.avif';
import focusScreen from '../assets/portfolio/focuspass-screen.avif';
import focusWorkflow from '../assets/portfolio/focuspass-workflow.avif';
import pedadidaPlatform from '../assets/portfolio/pedadida-platform.avif';
import pedadidaSystem from '../assets/portfolio/pedadida-system.avif';
import pranaBrand from '../assets/portfolio/pranashama-brand.avif';
import pranaEvents from '../assets/portfolio/pranashama-events.avif';
import pranaSystem from '../assets/portfolio/pranashama-system.avif';
import parksSunset from '../assets/portfolio/state-parks-sunset.avif';
import parksWildlife from '../assets/portfolio/state-parks-wildlife.avif';
import parksLandscape from '../assets/portfolio/state-parks-landscape.avif';
import cottageAutumn from '../assets/portfolio/tao-cottage-autumn.avif';
import cottageNight from '../assets/portfolio/tao-cottage-night.avif';
import cottageRoom from '../assets/portfolio/tao-cottage-room.avif';
import taoloBuilding from '../assets/portfolio/taolo-building.avif';
import taoloObject from '../assets/portfolio/taolo-object.avif';
import taoloKombucha from '../assets/portfolio/taolo-kombucha.avif';

export type CaseMedia = { src: ImageMetadata; alt: string; caption: string };
export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  era: string;
  disciplines: string[];
  opening: string;
  context: string[];
  response: string[];
  survives: string[];
  now: string;
  caveat: string;
  media: readonly [CaseMedia, CaseMedia, CaseMedia?];
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'airikai', title: 'Airikai', subtitle: 'A symbolic identity built to move', era: '2004–2018',
    disciplines: ['Identity', 'Movement media', 'Learning systems'], accent: '#c45a76',
    opening: 'A long-running exploration of wellness education, sacred geometry, movement photography, and curriculum as one coherent world.',
    context: ['Airikai asked how a teaching practice could feel rigorous without becoming clinical—and mystical without becoming vague.', 'The surviving archive documents an identity language, movement-led imagery, educational packaging, and a system meant to support progression over time.'],
    response: ['HardMagic connected symbol, body, image, and learning architecture. The visual system used dark fields and luminous forms so still photography could carry both instruction and atmosphere.', 'Rather than reduce the work to a logo, the practice was framed as a sequence: encounter, orientation, movement, reflection, and continued study.'],
    survives: ['A recognizable symbolic grammar', 'Movement photography with editorial tension', 'A curriculum-minded approach to brand experience'],
    now: 'Today we would preserve that authored progression while adding accessible media, portable provenance, consent-aware community systems, and an inspectable content model.',
    caveat: 'This retrospective is based on HardMagic’s surviving project archive. Promotional scale and outcome claims from the former site are intentionally omitted pending documentary verification.',
    media: [
      { src: airikaiPortrait, alt: 'Archival Airikai portrait photography against a dark field.', caption: 'Portrait study · recovered HardMagic archive' },
      { src: airikaiMotion, alt: 'A dancer extends through a high kick in an archival movement photograph.', caption: 'Movement as identity material' },
      { src: airikaiEditorial, alt: 'An archival editorial cover from the Airikai visual system.', caption: 'Editorial system artifact' },
    ],
  },
  {
    slug: 'fashionx', title: 'FashionX', subtitle: 'Location, talent, image', era: 'Archival study',
    disciplines: ['Art direction', 'Photography', 'Production'], accent: '#ff6b8d',
    opening: 'A visual-production archive where landscape, styling, movement, and the mechanics behind the frame carry the story.',
    context: ['The old site preserved compelling fashion and swim imagery but not a complete project record.', 'This edition therefore treats FashionX as an archival visual study—not a claim about a client engagement, campaign result, or named commission.'],
    response: ['The work pairs location texture with directed portraiture and includes the less-polished production view alongside finished frames.', 'That combination matters: media capability is visible not only in the selected image, but in the conditions created around it.'],
    survives: ['Confident environmental portraiture', 'A willingness to show production context', 'Editorial framing across changing locations'],
    now: 'A contemporary production would add a shot ledger, rights and release status, color lineage, crop intent, motion companions, and delivery variants for every channel.',
    caveat: 'The former FashionX page contained text shared with another portfolio page. Only interpretations supported by surviving visual artifacts are published here.',
    media: [
      { src: fashionEditorial, alt: 'A fashion portrait staged in dramatic natural light.', caption: 'Editorial portrait · recovered archive' },
      { src: fashionSwim, alt: 'Swim editorial photography composed against water and landscape.', caption: 'Location study' },
      { src: fashionProcess, alt: 'Behind-the-scenes view of a location fashion production.', caption: 'The image-making environment' },
    ],
  },
  {
    slug: 'focuspass', title: 'FocusPass', subtitle: 'An early interface for directed progress', era: '2018',
    disciplines: ['Product strategy', 'UX systems', 'Development'], accent: '#38d6c2',
    opening: 'Before agentic workspaces became ordinary, FocusPass explored how goals, learning, finance, and coaching might inhabit one legible product system.',
    context: ['The interface archive shows an ambitious attempt to turn long-horizon personal development into visible, navigable states.', 'Its relevance now is historical as much as functional: the project anticipates HardMagic’s current interest in context, evidence, and directed progress.'],
    response: ['HardMagic worked across product thesis, information architecture, brand, data display, and responsive interface language.', 'Screens were organized to make progress inspectable rather than hiding the experience inside a sequence of disconnected tools.'],
    survives: ['A visual model for goals and progress', 'Cross-domain information architecture', 'The conviction that tools should preserve human intent'],
    now: 'We would rebuild the idea around consented data, explainable recommendations, agent handoffs, provenance, and a radically smaller collection surface.',
    caveat: 'Archived references to integrations, enterprise readiness, historical data, and availability are not presented as shipped or current without product records.',
    media: [
      { src: focusProduct, alt: 'FocusPass product overview showing linked interface panels.', caption: 'Product-system overview' },
      { src: focusScreen, alt: 'An archival FocusPass application interface.', caption: 'Interface artifact' },
      { src: focusWorkflow, alt: 'A wide FocusPass workflow screen.', caption: 'Progress made spatial' },
    ],
  },
  {
    slug: 'pedadida', title: 'Pedadida', subtitle: 'Learning infrastructure as a living system', era: 'Multi-year archive',
    disciplines: ['Education technology', 'Platform design', 'Open systems'], accent: '#f1bd58',
    opening: 'A retrospective on the difficult, durable work of making an education platform coherent across identity, experience, APIs, security, and distributed development.',
    context: ['Pedadida was described as an open learning framework built over many years. The surviving artifacts reveal a broad systems ambition, but the repository record needs deeper reconciliation.', 'We publish the inspectable design history and withhold unsupported adoption and performance claims.'],
    response: ['HardMagic approached the platform as more than course pages: learning structure, brand, technical boundaries, and the work of ongoing evolution belonged to one design problem.', 'The work became an early lesson in why modularity needs governance and why open systems still require an authored experience.'],
    survives: ['Platform-scale thinking', 'A unified product and identity lens', 'Respect for evolvable learning architecture'],
    now: 'A modern edition would use typed content, verifiable release history, least-privilege integrations, accessible learning paths, and evidence-rich agent assistance.',
    caveat: 'User, school, developer, license, performance, and automation claims from the former page remain unverified and are excluded.',
    media: [
      { src: pedadidaPlatform, alt: 'An archival Pedadida learning-platform presentation.', caption: 'Platform presentation artifact' },
      { src: pedadidaSystem, alt: 'A layered education product package from the HardMagic archive.', caption: 'Learning system as a product family' },
    ],
  },
  {
    slug: 'pranashama', title: 'Pranashama', subtitle: 'One academy, many media surfaces', era: '2013–2017 archive',
    disciplines: ['Brand systems', 'Digital experience', 'Editorial commerce'], accent: '#62cce7',
    opening: 'A multimedia consolidation story spanning identity, responsive web direction, educational products, events, retreats, and community touchpoints.',
    context: ['The project archive captures a moment when a distributed yoga practice needed to become legible as one academy.', 'The design challenge was coherence: many offers and stories, but one recognizable rhythm and visual field.'],
    response: ['HardMagic built an editorial hierarchy that could hold practice, teaching, products, and place without erasing their differences.', 'Identity artifacts and interface compositions were designed as related chapters rather than isolated campaign pieces.'],
    survives: ['A flexible editorial brand system', 'Connection between digital and physical experience', 'Product packaging treated as part of the learning narrative'],
    now: 'We would pair the expressive identity with structured knowledge, accessible video, community consent, lifecycle analytics, and clear source and rights metadata.',
    caveat: 'Scale, participation, investment, partnership, and commercial outcome claims from the former site are omitted until corroborating records are available.',
    media: [
      { src: pranaBrand, alt: 'A blue-toned Pranashama brand presentation with multiple media surfaces.', caption: 'Brand consolidation study' },
      { src: pranaEvents, alt: 'A Pranashama events interface composition.', caption: 'Events as an editorial channel' },
      { src: pranaSystem, alt: 'A visual style system from the Pranashama archive.', caption: 'A system designed to travel' },
    ],
  },
  {
    slug: 'state-parks', title: 'State Parks', subtitle: 'A field journal in light and terrain', era: 'Documentary archive',
    disciplines: ['Documentary', 'Photography', 'Place'], accent: '#9cc779',
    opening: 'Landscape and wildlife work made through seasonal observation, difficult terrain, patient framing, and the refusal to treat place as generic scenery.',
    context: ['State Parks is best understood as a HardMagic documentary-practice theme rather than a named institutional client.', 'The archive moves across Costa Rica, Appalachia, and California, using weather, wildlife, scale, and duration as narrative material.'],
    response: ['The camera is both witness and structuring tool. Wide landscapes establish systems; close observation restores singular lives and textures.', 'The work argues that environmental media becomes persuasive through specificity, not through inflated claims of access or impact.'],
    survives: ['Patience with natural light', 'A field-production eye for scale', 'Landscape treated as a character'],
    now: 'A current field journal would add spatial audio, ecological source notes, capture metadata, local context, accessible maps, and a documented post-production chain.',
    caveat: 'This page does not imply a government, park-service, or tourism commission. Equipment, location, property, and partnership claims require separate verification.',
    media: [
      { src: parksSunset, alt: 'A wide sunset landscape from the HardMagic documentary archive.', caption: 'Field light study' },
      { src: parksWildlife, alt: 'Autumn woodland reflected in still water.', caption: 'Seasonal observation' },
      { src: parksLandscape, alt: 'A broad mountain landscape under changing weather.', caption: 'Terrain as narrative structure' },
    ],
  },
  {
    slug: 'tao-cottage', title: 'Tao Cottage', subtitle: 'Brand memory made physical', era: '2006–2018 archive',
    disciplines: ['Place brand', 'Experience design', 'Hospitality'], accent: '#d8a15e',
    opening: 'An experiential place-branding study where architecture, interiors, seasonal atmosphere, hospitality detail, and learning spaces become one remembered world.',
    context: ['Tao Cottage explored the relationship between an intentional place and the systems needed to communicate, host, teach, and grow around it.', 'Surviving artifacts range from rooms and hand-drawn plans to winter exteriors and learning environments.'],
    response: ['HardMagic treated the property as a narrative interface: arrival, shelter, table, landscape, and gathering each carried part of the identity.', 'The brand lived in behavior and spatial sequence before it lived in promotion.'],
    survives: ['Atmosphere rooted in a real place', 'Hospitality details as identity', 'A systems view of community experience'],
    now: 'We would document the service choreography, accessibility, environmental context, guest consent, operational model, and every claim connecting the place to a larger network.',
    caveat: 'Expansion, franchise, finance, partnership, property, and continuing-responsibility claims from the former site are not repeated without records.',
    media: [
      { src: cottageAutumn, alt: 'Tao Cottage surrounded by autumn foliage.', caption: 'Seasonal identity' },
      { src: cottageNight, alt: 'Tao Cottage at night beneath snow.', caption: 'The place after dark' },
      { src: cottageRoom, alt: 'A warmly detailed interior room at Tao Cottage.', caption: 'Hospitality at human scale' },
    ],
  },
  {
    slug: 'taolo', title: 'Taolo', subtitle: 'Tactile identity for a bistro and day spa', era: '2016 archive',
    disciplines: ['Hospitality identity', 'Packaging', 'Environment'], accent: '#e7c0d4',
    opening: 'A sensory identity study carried by signage, ingredients, glass, color, product styling, environmental detail, and a deliberately intimate idea of luxury.',
    context: ['The visual archive supports a bistro and day-spa world more clearly than the old page’s duplicated body copy.', 'This edition lets those tactile artifacts define the project and retains only the historical metadata the archive can support.'],
    response: ['HardMagic used material cues—botanical color, vessels, ingredients, window graphics, and physical space—to keep the identity connected to experience.', 'The system feels assembled through touch and ritual rather than imposed as a graphic layer.'],
    survives: ['A material-first identity language', 'Packaging and environment in one system', 'A restrained, sensory version of luxury'],
    now: 'A modern Taolo system would extend into motion menus, sonic atmosphere, traceable ingredients, accessible booking, and modular retail storytelling.',
    caveat: 'The prior page’s unrelated academy language is excluded. No business outcome or scale claim is made from the surviving artifacts alone.',
    media: [
      { src: taoloBuilding, alt: 'The exterior of the Taolo bistro and day spa.', caption: 'Identity in place' },
      { src: taoloObject, alt: 'A botanical preparation in a glass beaker.', caption: 'Material language' },
      { src: taoloKombucha, alt: 'Cherry kombucha styled as a Taolo product detail.', caption: 'Product ritual' },
    ],
  },
];

export const youtubeArchive = [
  { id: 'eTvOF9BH0qA', title: 'OpenBuk', note: 'Archival HardMagic production' },
  { id: 'SP98IC6vHWM', title: 'Advanced KettleBells', note: 'Movement instruction archive' },
  { id: 'n6oohS3MoQY', title: 'Fit in 15 — Abs, Glutes & Arms', note: 'Fitness media archive' },
  { id: 'bF9iUzzoBEU', title: 'Intermediate KettleBells', note: 'Movement instruction archive' },
  { id: 'J2Tr3fXQChY', title: 'Beginner Kettlebells', note: 'Movement instruction archive' },
  { id: 'n9cxDp-bnr4', title: 'KettleBells Safety', note: 'Safety instruction archive' },
] as const;

export function getCaseStudy(slug: string) { return caseStudies.find((item) => item.slug === slug); }
