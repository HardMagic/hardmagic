import { z } from "zod";
import { briefs, intakeCategories } from "./catalog.js";

const cleanText = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");
const consent = z.literal("yes");

export const briefRequestSchema = z.object({
  report: z.enum(Object.keys(briefs) as [keyof typeof briefs, ...(keyof typeof briefs)[]]),
  name: cleanText(160),
  email: z.string().trim().toLowerCase().email().max(320),
  organization: cleanText(200),
  role: cleanText(120),
  industry: cleanText(120),
  organization_size: cleanText(80),
  decision_stage: cleanText(120),
  decision_horizon: cleanText(120),
  primary_challenge: cleanText(500),
  preferred_next_step: cleanText(160),
  intake_category: z.enum(intakeCategories),
  context: optionalText(2000),
  source_url: optionalText(500),
  source_campaign: optionalText(160),
  consent,
  marketing_consent: z.enum(["yes", "no"]).default("no"),
  _honey: z.string().max(0).optional().default(""),
  "cf-turnstile-response": optionalText(4096),
}).strict();

export const contactRequestSchema = z.object({
  name: cleanText(160),
  email: z.string().trim().toLowerCase().email().max(320),
  organization: cleanText(200),
  role: cleanText(120),
  intake_category: z.enum(intakeCategories),
  mandate: cleanText(4000),
  decision_horizon: cleanText(120),
  preferred_next_step: cleanText(160),
  source_url: optionalText(500),
  source_campaign: optionalText(160),
  consent,
  marketing_consent: z.enum(["yes", "no"]).default("no"),
  _honey: z.string().max(0).optional().default(""),
  "cf-turnstile-response": optionalText(4096),
}).strict();

export type BriefRequestInput = z.infer<typeof briefRequestSchema>;
export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
