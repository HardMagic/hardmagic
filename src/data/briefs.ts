export interface BriefChapter {
  readonly title: string;
  readonly pages: {
    readonly start: number;
    readonly end: number;
  };
}

export interface BriefSqueeze {
  readonly headline: string;
  readonly promise: string;
  readonly preview: string;
}

export interface BriefRoute {
  readonly destination: string;
  readonly when: readonly string[];
}

export interface BriefRouting {
  readonly primaryDestination: string;
  readonly primarySignals: readonly string[];
  readonly secondaryRoutes: readonly BriefRoute[];
}

export type BriefFollowupTiming = "delivery" | "day-3" | "day-10" | "day-21";

export interface BriefFollowup {
  readonly timing: BriefFollowupTiming;
  readonly purpose: string;
  readonly message: string;
  readonly action: string;
}

export interface TechnicalBrief {
  readonly slug: string;
  readonly title: string;
  readonly audience: readonly string[];
  readonly decision: string;
  readonly thesis: string;
  readonly pageCount: number;
  readonly chapters: readonly BriefChapter[];
  readonly diagrams: readonly string[];
  readonly worksheets: readonly string[];
  readonly evidenceNeeds: readonly string[];
  readonly limitations: readonly string[];
  readonly squeeze: BriefSqueeze;
  readonly routing: BriefRouting;
  readonly followups: readonly BriefFollowup[];
}

export const briefs = [
  {
    slug: "generative-media-operating-system",
    title: "The Generative Media Operating System",
    audience: [
      "Chief executive officers",
      "Chief marketing officers",
      "Chief digital officers",
      "Studio leaders",
      "Transformation sponsors",
    ],
    decision:
      "Whether generative AI should remain a collection of experiments or become a governed production capability spanning creative, media, technology, and operations.",
    thesis:
      "Generative media creates durable advantage only when an organization designs an operating system around it—joining creative authority, models, media assets, approvals, provenance, infrastructure, and measurement. Buying more tools without redesigning those relationships increases fragmentation.",
    pageCount: 30,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "How to use the field guide", pages: { start: 2, end: 2 } },
      { title: "Executive thesis: from experiments to an operating system", pages: { start: 3, end: 4 } },
      { title: "The generative-media value chain", pages: { start: 5, end: 6 } },
      { title: "Why disconnected pilots stall", pages: { start: 7, end: 8 } },
      { title: "Six operating capabilities: intent, generation, curation, rights, delivery, and learning", pages: { start: 9, end: 11 } },
      { title: "Decision rights across brand, creative, legal, technology, and operations", pages: { start: 12, end: 14 } },
      { title: "Reference architecture for a governed media factory", pages: { start: 15, end: 17 } },
      { title: "Human creative authority in an agentic workflow", pages: { start: 18, end: 19 } },
      { title: "Portfolio economics and scenario construction", pages: { start: 20, end: 21 } },
      { title: "Maturity diagnostic", pages: { start: 22, end: 23 } },
      { title: "A 30/60/90-day mobilization", pages: { start: 24, end: 26 } },
      { title: "Counterarguments and failure modes", pages: { start: 27, end: 27 } },
      { title: "Security, privacy, rights, and workforce implications", pages: { start: 28, end: 28 } },
      { title: "Methodology, limitations, and source notes", pages: { start: 29, end: 29 } },
      { title: "HardMagic engagement paths and contact panel", pages: { start: 30, end: 30 } },
    ],
    diagrams: [
      "Generative-media operating-system map",
      "Creative intent through generation, review, provenance, publication, and reuse",
      "Decision-rights matrix by workflow stage",
      "Control-plane versus media-plane architecture",
      "Human and agent responsibility boundary",
      "Maturity ladder using qualitative stage definitions",
    ],
    worksheets: [
      "GenAI media portfolio inventory",
      "Operating-model maturity assessment",
      "Decision-rights assignment sheet",
      "Model and vendor dependency register",
      "30/60/90-day mobilization canvas",
      "Scenario-cost worksheet using reader-supplied assumptions",
    ],
    evidenceNeeds: [
      "Current official model-provider and media-tool documentation",
      "Applicable copyright, privacy, employment, and AI-governance materials reviewed by qualified counsel",
      "Internal workflow observations supplied with organizational consent",
      "Auditable production records for any claimed time, cost, or quality result",
      "Current media-volume, approval-cycle, rework, and vendor-cost baselines supplied by the participating organization",
      "Dated primary standards and research concerning provenance and AI risk",
    ],
    limitations: [
      "The brief cannot promise return on investment or prescribe one operating model for every organization.",
      "Legal interpretation, labor arrangements, brand risk, infrastructure, and media economics vary by organization and jurisdiction.",
      "Scenario exhibits are planning instruments and must not be presented as forecasts.",
    ],
    squeeze: {
      headline: "Your GenAI experiments are not yet an operating system.",
      promise:
        "A practical architecture, governance model, diagnostic, and 90-day sequence for turning fragmented media experiments into a coherent production capability.",
      preview:
        "A legible operating-system diagram, the six-capability index, and three diagnostic questions; the complete worksheets remain in the privately delivered brief.",
    },
    routing: {
      primaryDestination: "GenAI transformation and media operations",
      primarySignals: [
        "An enterprise program spans multiple business units",
        "Governance or decision-right ambiguity is blocking progress",
        "The organization has an active transformation horizon",
        "Production tools and pilots are fragmented",
      ],
      secondaryRoutes: [
        { destination: "Creative Direction", when: ["Creative authority is unclear", "Brand coherence is the primary concern"] },
        { destination: "HardMagic Studio", when: ["Multimodal production workflow is the primary need", "Generation and review need to be operationalized"] },
        { destination: "GPU Router", when: ["Inference cost is material", "Privacy or deployment placement is the primary constraint"] },
        { destination: "Media Management", when: ["Asset discovery, approval, rights, or reuse dominates the intake"] },
        { destination: "Executive advisory", when: ["The decision remains ambiguous", "The request spans several executive functions"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Deliver the requested resource and open a useful dialogue.", message: "Which operating capability is currently least owned?", action: "Invite a direct reply without requiring another form." },
      { timing: "day-3", purpose: "Help the reader apply the brief.", message: "Use the maturity diagnostic to identify the two most ambiguous decision rights.", action: "Link back to the privately delivered worksheet." },
      { timing: "day-10", purpose: "Add report-specific operating guidance.", message: "A short operating-model note tailored to the challenge selected in the intake.", action: "Offer the most relevant HardMagic capability path." },
      { timing: "day-21", purpose: "Convert demonstrated intent into a bounded working session.", message: "Map one real campaign or media workflow with HardMagic.", action: "Invite the reader to schedule a working session." },
    ],
  },
  {
    slug: "creative-direction-after-the-prompt",
    title: "Creative Direction After the Prompt",
    audience: [
      "Chief marketing officers",
      "Brand leaders",
      "Executive creative directors",
      "Agency principals",
      "Content leaders",
    ],
    decision:
      "How creative leadership, approval authority, and brand continuity should change when generative execution becomes abundant.",
    thesis:
      "Generative AI does not eliminate creative direction; it makes direction the scarce capability. When production accelerates, organizations need stronger intent, taste, continuity, critique, and decision authority—not merely better prompts.",
    pageCount: 28,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Reader map", pages: { start: 2, end: 2 } },
      { title: "Executive thesis: abundance raises the value of direction", pages: { start: 3, end: 4 } },
      { title: "What creative directors actually control", pages: { start: 5, end: 6 } },
      { title: "Why prompt fluency is not a creative operating model", pages: { start: 7, end: 8 } },
      { title: "Translating brand strategy into generative constraints", pages: { start: 9, end: 10 } },
      { title: "The intent stack: premise, audience, world, system, and execution", pages: { start: 11, end: 13 } },
      { title: "Critique loops for human and agent teams", pages: { start: 14, end: 16 } },
      { title: "Continuity across campaigns, formats, and channels", pages: { start: 17, end: 18 } },
      { title: "Creative quality without false precision", pages: { start: 19, end: 20 } },
      { title: "Embedded, fractional, campaign, and transformation engagement models", pages: { start: 21, end: 22 } },
      { title: "Creative-direction workshop and 30-day pilot", pages: { start: 23, end: 25 } },
      { title: "Failure modes and organizational tensions", pages: { start: 26, end: 26 } },
      { title: "Methodology, limitations, and evidence requirements", pages: { start: 27, end: 27 } },
      { title: "HardMagic creative-leadership contact panel", pages: { start: 28, end: 28 } },
    ],
    diagrams: [
      "Creative-intent stack",
      "Brief-to-output translation pipeline",
      "Human critique and agent revision loop",
      "Brand-world continuity graph",
      "Creative decision-rights map",
      "Divergence and convergence workflow for concept development",
    ],
    worksheets: [
      "Creative-authority audit",
      "Brand-world definition canvas",
      "Critique-language worksheet",
      "What must remain human decision sheet",
      "Campaign continuity checklist",
      "Fractional creative-director readiness diagnostic",
    ],
    evidenceNeeds: [
      "Approved brand systems and actual briefs supplied by participating organizations",
      "Documented examples comparing initial intent with approved output",
      "Consented interviews with working creative leaders under an explicit attribution policy",
      "Current official model documentation wherever model capabilities are discussed",
      "Customer-approved case evidence before naming any brand or result",
      "Organization-specific definitions for quality, novelty, consistency, and fitness for use",
    ],
    limitations: [
      "Taste cannot be reduced to a universal score.",
      "A model cannot independently approve brand-sensitive work without accountable human authority.",
      "Examples must distinguish creative interpretation from objectively verifiable evidence.",
    ],
    squeeze: {
      headline: "When anyone can generate, who decides what deserves to exist?",
      promise:
        "A field guide for establishing creative authority, useful critique, and brand continuity across human and generative production.",
      preview: "The intent-stack graphic and a five-question creative-authority audit.",
    },
    routing: {
      primaryDestination: "Creative Director intake",
      primarySignals: [
        "Creative leadership is absent or overloaded",
        "Generated output is inconsistent with the brand",
        "The organization is preparing executive-level brand work",
        "A campaign or brand system needs reinvention",
        "An embedded or fractional creative leader is requested",
      ],
      secondaryRoutes: [
        { destination: "Marketing Consulting", when: ["Positioning is unresolved", "Portfolio strategy is the primary ambiguity"] },
        { destination: "HardMagic Studio", when: ["The operating workflow needs implementation", "Multimodal production is the principal need"] },
        { destination: "Media Management", when: ["Continuity, curation, or asset governance is the primary problem"] },
        { destination: "Executive principal dialogue", when: ["The work is confidential", "The request is an executive brand transformation"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Deliver the brief and identify the authority gap.", message: "Which creative decision currently has no clear owner?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Make the brief operational.", message: "Complete the creative-authority audit against one active initiative.", action: "Return the reader to the relevant worksheet." },
      { timing: "day-10", purpose: "Deepen the report-specific argument.", message: "A concise note on building critique systems for human and agent teams.", action: "Offer the appropriate creative leadership path." },
      { timing: "day-21", purpose: "Offer a bounded next step.", message: "Test the operating model against one current campaign or brand decision.", action: "Invite a creative operating-model working session." },
    ],
  },
  {
    slug: "provenance-ready-content-supply-chain",
    title: "The Provenance-Ready Content Supply Chain",
    audience: [
      "Media executives",
      "Publishers",
      "Brand governance leaders",
      "Legal and trust teams",
      "Newsroom and studio operators",
      "Platform architects",
    ],
    decision:
      "How to preserve and communicate the origin, transformation history, approval state, and distribution context of media.",
    thesis:
      "Provenance is not a badge added at publication. It is a supply-chain property that must survive capture, generation, editing, approval, distribution, and reuse.",
    pageCount: 32,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Scope and terminology", pages: { start: 2, end: 2 } },
      { title: "Executive thesis", pages: { start: 3, end: 4 } },
      { title: "Threat and trust landscape", pages: { start: 5, end: 6 } },
      { title: "The media lifecycle and where context is lost", pages: { start: 7, end: 9 } },
      { title: "Credentials, metadata, manifests, and evidence boundaries", pages: { start: 10, end: 12 } },
      { title: "Reference provenance architecture", pages: { start: 13, end: 15 } },
      { title: "Capture and ingestion controls", pages: { start: 16, end: 17 } },
      { title: "Generative and editing events", pages: { start: 18, end: 19 } },
      { title: "Approval, signing, and publication", pages: { start: 20, end: 21 } },
      { title: "Distribution, transformation, and platform behavior", pages: { start: 22, end: 23 } },
      { title: "Verification experiences for people and machines", pages: { start: 24, end: 25 } },
      { title: "Incident response and disputed media", pages: { start: 26, end: 27 } },
      { title: "Implementation roadmap and control assessment", pages: { start: 28, end: 29 } },
      { title: "Counterarguments and residual risks", pages: { start: 30, end: 30 } },
      { title: "Methodology, standards review, and limitations", pages: { start: 31, end: 31 } },
      { title: "HardMagic provenance workshop and contact panel", pages: { start: 32, end: 32 } },
    ],
    diagrams: [
      "End-to-end content-supply-chain sequence",
      "Trust-boundary and key-management architecture",
      "Provenance event model",
      "Transformation lineage graph",
      "Verification decision tree",
      "Incident-response sequence for disputed media",
    ],
    worksheets: [
      "Media-lifecycle inventory",
      "Context-loss risk assessment",
      "Provenance control matrix",
      "Signing-authority and key-custody worksheet",
      "Platform compatibility test plan",
      "Disputed-media response tabletop",
    ],
    evidenceNeeds: [
      "Current official provenance specifications and implementation guidance",
      "Current platform-support documentation verified through direct testing",
      "Cryptographic and key-management guidance from authoritative standards bodies",
      "Documented metadata-preservation tests across the intended editing and distribution tools",
      "Qualified legal review of claims communicated to audiences",
      "Documented threat scenarios and consented incident history where available",
    ],
    limitations: [
      "Provenance does not prove that depicted events are true.",
      "Provenance does not prevent all tampering or guarantee that every platform preserves credentials.",
      "The brief must distinguish origin evidence, identity, integrity, and truth.",
    ],
    squeeze: {
      headline: "A provenance badge cannot repair a broken media supply chain.",
      promise:
        "An implementation-oriented architecture and assessment for preserving trustworthy context from creation through distribution.",
      preview: "The media-lifecycle diagram with public labels; the complete control matrix remains in the private brief.",
    },
    routing: {
      primaryDestination: "Media governance and provenance architecture",
      primarySignals: [
        "An active trust or authenticity initiative exists",
        "Publishing teams are evaluating provenance controls",
        "Misinformation or disputed-media risk is material",
        "Media context is lost across editing or distribution systems",
      ],
      secondaryRoutes: [
        { destination: "Media Management", when: ["Metadata or catalog remediation is the primary need", "Existing media lacks reliable context"] },
        { destination: "GenAI Consulting", when: ["Generated-content policy is the primary decision", "Model workflow governance is unresolved"] },
        { destination: "Infrastructure Advisory", when: ["Signing, key custody, or private workflow boundaries dominate"] },
        { destination: "Executive risk dialogue", when: ["The environment is regulated", "The request is reputation-sensitive or confidential"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Locate the most consequential context break.", message: "At which lifecycle stage is media context most often lost?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Support a first internal assessment.", message: "Use the context-loss checklist on one representative media path.", action: "Return the reader to the checklist." },
      { timing: "day-10", purpose: "Turn the thesis into a testable plan.", message: "A concise note on designing a platform-preservation test.", action: "Offer the relevant governance or architecture path." },
      { timing: "day-21", purpose: "Offer a bounded technical exercise.", message: "Test a provenance architecture or disputed-media scenario with HardMagic.", action: "Invite an architecture workshop or incident tabletop." },
    ],
  },
  {
    slug: "hybrid-ai-media-infrastructure",
    title: "Private, Hybrid, and Governed AI Media Infrastructure",
    audience: [
      "Chief information officers",
      "Chief technology officers",
      "AI platform owners",
      "Security leaders",
      "Studio technology executives",
      "Finance owners",
    ],
    decision:
      "Which AI media workloads belong on local infrastructure, private cloud, or managed inference, and how those placement decisions should be governed.",
    thesis:
      "The correct GenAI infrastructure strategy is workload placement, not ideological commitment to cloud or local compute. Media organizations need policy-driven routing based on sensitivity, model fitness, latency, capacity, cost assumptions, and operational ownership.",
    pageCount: 31,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Decision summary", pages: { start: 2, end: 2 } },
      { title: "Executive thesis", pages: { start: 3, end: 4 } },
      { title: "Workload taxonomy for image, video, audio, 3D, and agent tasks", pages: { start: 5, end: 7 } },
      { title: "Placement criteria and policy boundaries", pages: { start: 8, end: 10 } },
      { title: "Hybrid reference architecture", pages: { start: 11, end: 13 } },
      { title: "GPU routing and capacity orchestration", pages: { start: 14, end: 16 } },
      { title: "Model and workflow lifecycle", pages: { start: 17, end: 18 } },
      { title: "Security, isolation, data movement, and logging", pages: { start: 19, end: 20 } },
      { title: "Reliability and graceful degradation", pages: { start: 21, end: 22 } },
      { title: "Cost-scenario construction without false certainty", pages: { start: 23, end: 24 } },
      { title: "Benchmarking and quality gates", pages: { start: 25, end: 26 } },
      { title: "Build, buy, or blend decision workshop", pages: { start: 27, end: 28 } },
      { title: "Failure modes and operational ownership", pages: { start: 29, end: 29 } },
      { title: "Methodology, limitations, and evidence", pages: { start: 30, end: 30 } },
      { title: "HardMagic infrastructure assessment", pages: { start: 31, end: 31 } },
    ],
    diagrams: [
      "Hybrid inference control plane",
      "Workload-placement decision tree",
      "GPU Router request and fallback sequence",
      "Data-residency and trust-boundary map",
      "Capacity queue and priority model",
      "Benchmark-to-release quality-gate loop",
    ],
    worksheets: [
      "Workload classification inventory",
      "Placement-policy matrix",
      "Data-movement register",
      "Model and provider portability assessment",
      "Capacity and scenario-cost workbook",
      "Benchmark design sheet",
      "Operational responsibility matrix",
    ],
    evidenceNeeds: [
      "Current official provider, model, accelerator, and orchestration documentation",
      "Customer-specific utilization, queue, latency, reliability, and cost records",
      "Applicable security architecture and data-classification policies",
      "Repeatable benchmark methodology with disclosed hardware and settings",
      "Current service limits and contractual terms",
      "Consented incident and failure records where available",
    ],
    limitations: [
      "Hardware, model efficiency, provider pricing, and service limits change rapidly.",
      "Illustrative architecture is not a capacity or availability guarantee.",
      "Benchmark findings are not transferable unless hardware, model, settings, workloads, and acceptance criteria are comparable.",
    ],
    squeeze: {
      headline: "Cloud versus local is the wrong infrastructure question.",
      promise:
        "A workload-placement method, hybrid reference architecture, and benchmark plan for governed media inference.",
      preview: "The workload-placement decision tree and an unfilled policy matrix.",
    },
    routing: {
      primaryDestination: "GPU Router and AI infrastructure",
      primarySignals: [
        "Privacy or data-residency restrictions affect inference",
        "Inference spend is difficult to govern",
        "GPU capacity is contested or unpredictable",
        "Multiple inference environments must be coordinated",
        "The organization is actively procuring or redesigning an AI platform",
      ],
      secondaryRoutes: [
        { destination: "HardMagic Studio", when: ["Production workflow adoption is the primary need", "Creative teams need a usable generation environment"] },
        { destination: "GenAI Advisory", when: ["Portfolio and operating-model decisions precede infrastructure selection"] },
        { destination: "Security Architecture", when: ["Sensitive-data boundaries dominate the decision", "Isolation and data movement require review"] },
        { destination: "Benchmark and inference tuning", when: ["Evaluation methodology is the primary gap", "Release quality gates need to be established"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Identify the governing placement constraint.", message: "Which constraint dominates: sensitivity, cost, capacity, latency, or model access?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Help classify the workload portfolio.", message: "Apply the workload-classification worksheet to one representative workflow.", action: "Return the reader to the worksheet." },
      { timing: "day-10", purpose: "Provide constraint-specific guidance.", message: "A placement-policy note tailored to the selected constraint.", action: "Offer the most relevant infrastructure path." },
      { timing: "day-21", purpose: "Turn interest into a testable architecture decision.", message: "Design one controlled architecture and benchmark plan with HardMagic.", action: "Invite an architecture and benchmark session." },
    ],
  },
  {
    slug: "visual-product-development-field-guide",
    title: "The Visual Product Development Field Guide",
    audience: [
      "Product leaders",
      "Design executives",
      "Engineering leaders",
      "Digital-agency principals",
      "AI development teams",
    ],
    decision:
      "How visual product review should connect to source code, agent execution, human approval, and verification evidence.",
    thesis:
      "Screenshots and tickets fragment product intent. A visual product-development environment becomes strategically useful when every observation can retain context, connect to source, become executable work, and return with verification evidence.",
    pageCount: 29,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Reader map", pages: { start: 2, end: 2 } },
      { title: "Executive thesis", pages: { start: 3, end: 4 } },
      { title: "The context-loss problem", pages: { start: 5, end: 6 } },
      { title: "Repository-to-canvas operating model", pages: { start: 7, end: 9 } },
      { title: "Annotation as structured intent", pages: { start: 10, end: 11 } },
      { title: "Connecting visual regions to source", pages: { start: 12, end: 14 } },
      { title: "Agent handoff and bounded execution", pages: { start: 15, end: 17 } },
      { title: "Evidence, review, and verification", pages: { start: 18, end: 19 } },
      { title: "Collaboration and decision history", pages: { start: 20, end: 21 } },
      { title: "Privacy and repository boundaries", pages: { start: 22, end: 23 } },
      { title: "Pilot design and workflow diagnostic", pages: { start: 24, end: 26 } },
      { title: "Failure modes and inappropriate use cases", pages: { start: 27, end: 27 } },
      { title: "Methodology, limitations, and source needs", pages: { start: 28, end: 28 } },
      { title: "WireMark evaluation path", pages: { start: 29, end: 29 } },
    ],
    diagrams: [
      "Repository-to-canvas architecture",
      "Annotation object and context model",
      "Visual-region-to-source relationship",
      "Agent task lifecycle",
      "Evidence-return loop",
      "Human approval and rollback sequence",
    ],
    worksheets: [
      "Product-feedback context-loss audit",
      "Visual-review workflow map",
      "Annotation taxonomy builder",
      "Agent authorization boundary sheet",
      "Evidence acceptance checklist",
      "WireMark pilot scorecard",
    ],
    evidenceNeeds: [
      "Observed product-review workflows supplied with organizational consent",
      "Current repository and design-tool integration documentation",
      "Task-cycle and rework records before making any efficiency claim",
      "Accessibility and usability testing with representative users",
      "Security review covering source access and agent permissions",
      "Customer-approved product examples before any public attribution",
    ],
    limitations: [
      "Visual context does not replace requirements, architecture, tests, or accountable engineering review.",
      "Source mapping may be incomplete in complex rendering systems.",
      "Agent execution requires explicit permissions, review, evidence, and rollback.",
    ],
    squeeze: {
      headline: "Your product feedback loses meaning before engineering receives it.",
      promise:
        "A field guide for connecting visual intent, source intelligence, agents, and verification in one review loop.",
      preview: "The context-loss diagram and the opening workflow diagnostic.",
    },
    routing: {
      primaryDestination: "WireMark product evaluation",
      primarySignals: [
        "A product team has recurring visual-review problems",
        "Quality assurance and engineering handoffs lose context",
        "Agent coordination is disconnected from product evidence",
        "Implementation verification is inconsistent",
      ],
      secondaryRoutes: [
        { destination: "Web Magic", when: ["The scope is primarily a website", "Automated site remediation is the immediate need"] },
        { destination: "Product and design consulting", when: ["The review workflow itself needs redesign", "Team responsibilities are unresolved"] },
        { destination: "Agent engineering", when: ["Repository-aware automation is the primary requirement", "Authorization boundaries need implementation"] },
        { destination: "Creative Direction", when: ["The underlying experience intent is unresolved", "Visual decisions lack accountable leadership"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Locate the context-loss point.", message: "Where is context lost: capture, triage, implementation, or verification?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Help the team observe its current workflow.", message: "Run the context-loss audit against one recent product change.", action: "Return the reader to the audit." },
      { timing: "day-10", purpose: "Describe an appropriate pilot shape.", message: "A pilot-pattern note based on the team and workflow identified in the intake.", action: "Offer a bounded WireMark evaluation." },
      { timing: "day-21", purpose: "Move from abstract interest to a real workflow.", message: "Map one approved route or product workflow in WireMark.", action: "Invite a product-workflow session." },
    ],
  },
  {
    slug: "autonomous-web-publishing-control-plane",
    title: "The Autonomous Web Publishing Control Plane",
    audience: [
      "Digital leaders",
      "Web-platform owners",
      "Marketing operations leaders",
      "Accessibility leaders",
      "Digital agencies",
    ],
    decision:
      "How much website auditing and remediation can safely become agent-assisted, and what evidence and approval controls must govern it.",
    thesis:
      "Autonomous web optimization is valuable only when it operates inside a control plane that makes standards, evidence, approvals, source changes, rollback, and publishing boundaries explicit.",
    pageCount: 30,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Executive decision map", pages: { start: 2, end: 2 } },
      { title: "Thesis: optimization needs a control plane", pages: { start: 3, end: 4 } },
      { title: "The modern static-site and publishing surface", pages: { start: 5, end: 7 } },
      { title: "Audit domains: accessibility, performance, SEO, security, and delivery", pages: { start: 8, end: 10 } },
      { title: "Finding-to-source architecture", pages: { start: 11, end: 13 } },
      { title: "Agent remediation and approval boundaries", pages: { start: 14, end: 16 } },
      { title: "Evidence and regression verification", pages: { start: 17, end: 18 } },
      { title: "Deployment, rollback, and branch strategy", pages: { start: 19, end: 20 } },
      { title: "Governance for multi-site portfolios", pages: { start: 21, end: 22 } },
      { title: "Measures and scenario baselines", pages: { start: 23, end: 24 } },
      { title: "30/60/90-day adoption plan", pages: { start: 25, end: 27 } },
      { title: "Failure modes and unsafe automation", pages: { start: 28, end: 28 } },
      { title: "Methodology, limitations, and source policy", pages: { start: 29, end: 29 } },
      { title: "Web Magic assessment path", pages: { start: 30, end: 30 } },
    ],
    diagrams: [
      "Audit-to-remediation control loop",
      "Finding-to-source evidence chain",
      "Branch, preview, approval, and release topology",
      "Agent authorization boundary",
      "Multi-site governance model",
      "Regression-gate sequence",
    ],
    worksheets: [
      "Website portfolio inventory",
      "Automation-boundary matrix",
      "Remediation-priority worksheet",
      "Evidence acceptance checklist",
      "Branch and release-policy template",
      "90-day site-quality program",
    ],
    evidenceNeeds: [
      "Current primary standards for accessibility, performance, security, and search",
      "Site-specific build and deployment documentation",
      "Reproducible audit output linked to exact routes and releases",
      "Source diffs and regression-test evidence for remediation claims",
      "Field performance data where available, with laboratory results clearly labeled",
      "Approved baseline measures supplied by the participating organization",
    ],
    limitations: [
      "Automated audits do not constitute full accessibility, security, search, or performance certification.",
      "Agents should not publish unrestricted changes.",
      "Search visibility and field-performance outcomes cannot be guaranteed.",
    ],
    squeeze: {
      headline: "Finding website defects is easy. Safely changing the source is the hard part.",
      promise:
        "A control architecture for turning audits into governed, evidence-backed remediation across a web portfolio.",
      preview: "The control-loop diagram and a sample automation-boundary matrix.",
    },
    routing: {
      primaryDestination: "Web Magic and web portfolio assessment",
      primarySignals: [
        "The organization manages multiple websites",
        "Audit failures repeatedly return to the backlog",
        "A static-site modernization is active",
        "Publishing is Git-based",
        "Accessibility remediation needs a governed workflow",
      ],
      secondaryRoutes: [
        { destination: "Marketing Consulting", when: ["Content and conversion are the primary problems", "The site lacks a clear market argument"] },
        { destination: "WireMark", when: ["Visual product review is the primary workflow", "Source-linked annotation is needed"] },
        { destination: "GenAI Engineering", when: ["Agent controls and authorization need implementation", "Automation architecture is the primary scope"] },
        { destination: "Media Management", when: ["Asset performance, rights, or media governance dominates"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Identify the recurring quality backlog.", message: "Which audit domain creates the greatest recurring backlog?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Define safe automation boundaries.", message: "Apply the automation-boundary worksheet to one class of site findings.", action: "Return the reader to the worksheet." },
      { timing: "day-10", purpose: "Make the control plane concrete.", message: "A report-specific control-loop example for the selected audit domain.", action: "Offer the most relevant Web Magic path." },
      { timing: "day-21", purpose: "Offer a bounded evaluation.", message: "Review one approved site or route set without granting unrestricted publishing authority.", action: "Invite a controlled site assessment." },
    ],
  },
  {
    slug: "intelligent-media-asset-estate",
    title: "Media Memory: Building an Intelligent Asset Estate",
    audience: [
      "Media operations leaders",
      "Publishers",
      "Brand studios",
      "Digital asset management owners",
      "Archivists",
      "Creative operations teams",
    ],
    decision:
      "How to make a large media library discoverable, governed, rights-aware, portable, and reusable without discarding human curation.",
    thesis:
      "A media archive becomes an asset only when organizations preserve human judgment alongside machine-generated understanding. Search alone cannot replace curation, rights context, selection history, duplicate relationships, and portable metadata.",
    pageCount: 28,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "Reader and decision map", pages: { start: 2, end: 2 } },
      { title: "Executive thesis: storage is not memory", pages: { start: 3, end: 4 } },
      { title: "The media-estate lifecycle", pages: { start: 5, end: 7 } },
      { title: "Metadata, taxonomy, and semantic enrichment", pages: { start: 8, end: 9 } },
      { title: "Human curation and review signals", pages: { start: 10, end: 12 } },
      { title: "Duplicate and near-duplicate relationships", pages: { start: 13, end: 14 } },
      { title: "Rights, restrictions, consent, and provenance", pages: { start: 15, end: 16 } },
      { title: "Connector and portability architecture", pages: { start: 17, end: 18 } },
      { title: "Search, collections, and reuse experiences", pages: { start: 19, end: 20 } },
      { title: "Governance and stewardship model", pages: { start: 21, end: 22 } },
      { title: "Estate diagnostic and remediation roadmap", pages: { start: 23, end: 25 } },
      { title: "Failure modes and migration risk", pages: { start: 26, end: 26 } },
      { title: "Methodology, limitations, and evidence", pages: { start: 27, end: 27 } },
      { title: "Photo Curator and media-management engagement", pages: { start: 28, end: 28 } },
    ],
    diagrams: [
      "Intelligent media-estate architecture",
      "Ingestion, enrichment, curation, and publication flow",
      "Metadata provenance model",
      "Near-duplicate relationship graph",
      "Rights and permitted-use decision tree",
      "Connector and portable-curation architecture",
    ],
    worksheets: [
      "Media-estate inventory",
      "Metadata completeness assessment",
      "Taxonomy decision canvas",
      "Curation-signal map",
      "Rights-risk register",
      "Migration and connector scorecard",
      "Stewardship responsibility matrix",
    ],
    evidenceNeeds: [
      "Actual asset inventories and representative metadata samples supplied with authorization",
      "Existing taxonomy, asset-management, rights, retention, and consent policies",
      "Current connector and platform documentation",
      "Human relevance evaluations before making retrieval-quality claims",
      "Measured duplicate-analysis tests on approved datasets",
      "Qualified legal and records-management review for retention and rights assertions",
    ],
    limitations: [
      "Automated enrichment can be wrong or culturally biased.",
      "Similarity is not legal equivalence and does not establish duplicate ownership.",
      "Metadata completeness does not prove usage rights.",
      "Migration plans depend on source-system access and export quality.",
    ],
    squeeze: {
      headline: "Your archive remembers files. Does it remember why they mattered?",
      promise:
        "A practical model for joining curation, metadata, rights, similarity, and portable media operations.",
      preview: "The media-estate lifecycle and a short metadata diagnostic.",
    },
    routing: {
      primaryDestination: "Media Management and Photo Curator",
      primarySignals: [
        "An archive or asset-management migration is active",
        "Metadata quality is limiting discovery or reuse",
        "Photo selection and collection-scale review are difficult",
        "Duplicate or near-duplicate assets create operational friction",
        "Media connectors or portable curation are required",
      ],
      secondaryRoutes: [
        { destination: "Provenance Advisory", when: ["Authenticity and lineage are the primary concerns", "Publishing context must survive transformation"] },
        { destination: "Creative Direction", when: ["Editorial selection systems are the primary need", "Curation lacks accountable creative judgment"] },
        { destination: "HardMagic Studio", when: ["Generated media must flow into governed libraries", "Production-to-library workflow is the primary scope"] },
        { destination: "Marketing Consulting", when: ["Content reuse and channel activation drive the decision", "The estate must support a broader content strategy"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Identify the immediate estate problem.", message: "Is the immediate problem discovery, rights, duplication, migration, or curation?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Establish the current-state inventory.", message: "Use the media-estate inventory on one representative collection.", action: "Return the reader to the worksheet." },
      { timing: "day-10", purpose: "Provide problem-specific guidance.", message: "A concise report-specific note on the challenge selected in the intake.", action: "Offer the relevant media-management path." },
      { timing: "day-21", purpose: "Offer a controlled technical evaluation.", message: "Assess an approved, non-sensitive sample of the media estate with HardMagic.", action: "Invite a sample assessment." },
    ],
  },
  {
    slug: "modern-media-agency-transformation-playbook",
    title: "The Modern Media Agency Transformation Playbook",
    audience: [
      "Chief executive officers",
      "Chief marketing officers",
      "Agency leaders",
      "Procurement executives",
      "Private-company owners",
      "Business-unit leaders",
    ],
    decision:
      "Whether to hire an agency, assemble specialists, embed creative leadership, or build an internal GenAI and media capability.",
    thesis:
      "The strongest modern media model is neither a traditional agency retainer nor an unmanaged collection of AI tools. It is a deliberately composed capability system that aligns executive intent, creative authority, specialist production, technology, media stewardship, and measurable market learning.",
    pageCount: 35,
    chapters: [
      { title: "Cover and publication record", pages: { start: 1, end: 1 } },
      { title: "How to use the playbook", pages: { start: 2, end: 2 } },
      { title: "Executive thesis and market tension", pages: { start: 3, end: 5 } },
      { title: "Why conventional agency boundaries are breaking", pages: { start: 6, end: 8 } },
      { title: "The capability-system model", pages: { start: 9, end: 11 } },
      { title: "Brand strategy and executive intent", pages: { start: 12, end: 14 } },
      { title: "Creative direction and campaign systems", pages: { start: 15, end: 17 } },
      { title: "GenAI production and studio operations", pages: { start: 18, end: 20 } },
      { title: "Media management, provenance, and reuse", pages: { start: 21, end: 22 } },
      { title: "Web, product, and distribution operations", pages: { start: 23, end: 24 } },
      { title: "Engagement-model comparison", pages: { start: 25, end: 27 } },
      { title: "Governance, procurement, and commercial alignment", pages: { start: 28, end: 29 } },
      { title: "Transformation diagnostic and 90-day sequence", pages: { start: 30, end: 32 } },
      { title: "Counterarguments and conditions for traditional models", pages: { start: 33, end: 33 } },
      { title: "Methodology, limitations, and evidence policy", pages: { start: 34, end: 34 } },
      { title: "HardMagic principal dialogue and service pathways", pages: { start: 35, end: 35 } },
    ],
    diagrams: [
      "Modern media capability system",
      "Executive-intent-to-market-learning loop",
      "Internal, embedded, managed, and project engagement models",
      "Creative and technical decision-rights map",
      "Campaign-to-evergreen media value chain",
      "HardMagic product-and-advisory ecosystem map",
    ],
    worksheets: [
      "Agency-model fit assessment",
      "Capability ownership matrix",
      "Creative-leadership gap analysis",
      "Partner and vendor portfolio map",
      "Campaign operating-model canvas",
      "GenAI and media transformation backlog",
      "90-day executive action plan",
    ],
    evidenceNeeds: [
      "Current attributable agency-market research from primary or reputable research sources",
      "Organization-specific spend, cycle-time, channel, and performance baselines",
      "Approved contracts and statements of work for operating-model analysis",
      "Customer-approved cases with auditable support for any outcome presented",
      "Consented interviews with marketing, creative, procurement, technology, and media operations",
      "An explicit methodology for comparisons among engagement models",
    ],
    limitations: [
      "The traditional agency model is not universally obsolete.",
      "Some organizations benefit from specialist agencies, global networks, internal teams, or mixed arrangements.",
      "Recommendations depend on strategy, leadership capacity, procurement, geography, regulation, and operating maturity.",
    ],
    squeeze: {
      headline: "You do not need another agency roster. You need a coherent media capability.",
      promise:
        "A decision guide for choosing among embedded creative leadership, managed media operations, GenAI production, consulting, and internal capability building.",
      preview: "The capability-system map and an abbreviated engagement-model comparison.",
    },
    routing: {
      primaryDestination: "Executive media transformation intake",
      primarySignals: [
        "The organization is reconsidering its agency or partner model",
        "Several media and marketing capabilities lack clear ownership",
        "Internal capability building is being evaluated",
        "The request spans creative, technology, media, and operating-model decisions",
      ],
      secondaryRoutes: [
        { destination: "Creative Director", when: ["Brand reinvention or campaign leadership is primary", "Creative inconsistency lacks accountable ownership"] },
        { destination: "GenAI Transformation", when: ["Tool fragmentation, workflow redesign, or governance dominates"] },
        { destination: "Media Management", when: ["Asset curation, provenance, or production operations dominate"] },
        { destination: "Marketing Consulting", when: ["Positioning, portfolio, go-to-market, or channel strategy dominates"] },
        { destination: "HardMagic Studio", when: ["Multimodal production and studio workflow are the immediate need"] },
        { destination: "WireMark", when: ["Digital-product review and agent-assisted development are primary"] },
        { destination: "Web Magic", when: ["Website portfolio quality and remediation are primary"] },
        { destination: "Principal dialogue", when: ["The request is confidential, cross-functional, or still ambiguous"] },
      ],
    },
    followups: [
      { timing: "delivery", purpose: "Identify the ownership gap.", message: "Which media capability currently lacks accountable ownership?", action: "Invite a direct reply." },
      { timing: "day-3", purpose: "Help compare engagement models.", message: "Complete the agency-model fit assessment against the current partner portfolio.", action: "Return the reader to the worksheet." },
      { timing: "day-10", purpose: "Provide intake-specific interpretation.", message: "One tailored operating-model observation based on the declared need.", action: "Offer the most relevant HardMagic service or product path." },
      { timing: "day-21", purpose: "Offer a principal-level next step.", message: "Map capability ownership and decision rights with HardMagic.", action: "Invite a principal-level capability-mapping discussion." },
    ],
  },
] as const satisfies readonly TechnicalBrief[];

export type BriefSlug = (typeof briefs)[number]["slug"];
