export const intakeCategories = [
  "creative-direction",
  "genai",
  "media-management",
  "marketing-consulting",
  "product-strategy",
  "creative-technology",
] as const;

export type IntakeCategory = (typeof intakeCategories)[number];

export interface BriefDefinition {
  slug: string;
  title: string;
  blobName: string;
  thankYouPath: string;
  followUps: readonly [string, string, string];
}

export const briefs = {
  "generative-media-operating-system": {
    slug: "generative-media-operating-system",
    title: "The Generative Media Operating System",
    blobName: "generative-media-operating-system.pdf",
    thankYouPath: "/briefs/generative-media-operating-system/thanks/",
    followUps: ["Map the control plane", "Choose the first governed workflow", "Set a 90-day operating cadence"],
  },
  "creative-direction-after-the-prompt": {
    slug: "creative-direction-after-the-prompt",
    title: "Creative Direction After the Prompt",
    blobName: "creative-direction-after-the-prompt.pdf",
    thankYouPath: "/briefs/creative-direction-after-the-prompt/thanks/",
    followUps: ["Name the creative decision", "Separate taste from throughput", "Design the review loop"],
  },
  "provenance-ready-content-supply-chain": {
    slug: "provenance-ready-content-supply-chain",
    title: "The Provenance-Ready Content Supply Chain",
    blobName: "provenance-ready-content-supply-chain.pdf",
    thankYouPath: "/briefs/provenance-ready-content-supply-chain/thanks/",
    followUps: ["Trace the asset lineage", "Define release evidence", "Test the exception path"],
  },
  "hybrid-ai-media-infrastructure": {
    slug: "hybrid-ai-media-infrastructure",
    title: "Hybrid AI Media Infrastructure",
    blobName: "hybrid-ai-media-infrastructure.pdf",
    thankYouPath: "/briefs/hybrid-ai-media-infrastructure/thanks/",
    followUps: ["Classify the workload", "Draw the trust boundaries", "Cost the first production lane"],
  },
  "visual-product-development-field-guide": {
    slug: "visual-product-development-field-guide",
    title: "Visual Product Development Field Guide",
    blobName: "visual-product-development-field-guide.pdf",
    thankYouPath: "/briefs/visual-product-development-field-guide/thanks/",
    followUps: ["Choose the visual hypothesis", "Build a proof loop", "Set the acceptance bar"],
  },
  "autonomous-web-publishing-control-plane": {
    slug: "autonomous-web-publishing-control-plane",
    title: "The Autonomous Web Publishing Control Plane",
    blobName: "autonomous-web-publishing-control-plane.pdf",
    thankYouPath: "/briefs/autonomous-web-publishing-control-plane/thanks/",
    followUps: ["Inventory publishing authority", "Make rollback explicit", "Instrument the release path"],
  },
  "intelligent-media-asset-estate": {
    slug: "intelligent-media-asset-estate",
    title: "The Intelligent Media Asset Estate",
    blobName: "intelligent-media-asset-estate.pdf",
    thankYouPath: "/briefs/intelligent-media-asset-estate/thanks/",
    followUps: ["Measure findability", "Expose rights and provenance", "Prioritize the first collection"],
  },
  "modern-media-agency-transformation-playbook": {
    slug: "modern-media-agency-transformation-playbook",
    title: "Modern Media Agency Transformation Playbook",
    blobName: "modern-media-agency-transformation-playbook.pdf",
    thankYouPath: "/briefs/modern-media-agency-transformation-playbook/thanks/",
    followUps: ["Locate the operating bottleneck", "Redesign the team boundary", "Sequence the first quarter"],
  },
} as const satisfies Record<string, BriefDefinition>;

export type BriefSlug = keyof typeof briefs;
