import assert from "node:assert/strict";
import test from "node:test";
import { resetConfigForTests } from "../src/config.js";

Object.assign(process.env, {
  AZURE_CLIENT_ID: "11111111-1111-4111-8111-111111111111",
  BRIEF_STORAGE_ACCOUNT_NAME: "sthmbriefexample",
  COMPANY_DOMAIN: "hardmagic.com",
  BRIEF_HOST: "briefs.hardmagic.com",
  PUBLIC_SITE_URL: "https://hardmagic.com",
  CONTACT_URL: "https://hardmagic.com/contact/",
  CONTACT_EMAIL: "hello@hardmagic.com",
  REPLY_TO: "hello@hardmagic.com",
  ALLOWED_ORIGINS: "https://hardmagic.com,https://www.hardmagic.com",
  EXPECTED_FRONT_DOOR_ID: "22222222-2222-4222-8222-222222222222",
  KEY_VAULT_URI: "https://kv-hm-brief-example.vault.azure.net",
  ACS_ENDPOINT: "https://acs-hm-example.communication.azure.com",
  ACS_SENDER_ADDRESS_SECRET_NAME: "acs-sender-address",
  TURNSTILE_SECRET_NAME: "turnstile-secret",
  UNSUBSCRIBE_TOKEN_SECRET_NAME: "unsubscribe-token-key",
  DATAVERSE_ACCOUNT_ID_SECRET_NAME: "dataverse-account-id",
  DATAVERSE_BUSINESS_UNIT_ID_SECRET_NAME: "dataverse-business-unit-id",
  DATAVERSE_OWNER_TEAM_ID_SECRET_NAME: "dataverse-owner-team-id",
  DATAVERSE_URL: "https://dream.crm.dynamics.com",
  DATAVERSE_ENTITY_SET: "hm_briefengagements",
  DATAVERSE_ENTITY_LOGICAL_NAME: "hm_briefengagement",
  DATAVERSE_REQUEST_ID_COLUMN: "hm_requestid",
  TURNSTILE_REQUIRED: "true",
  SAS_HOURS: "48",
  RATE_LIMIT_PER_HOUR: "5",
});

const { validateEdgeRequest } = await import("../src/index.js");
const { buildAccountScopedContactQuery, renderBriefEmail } = await import("../src/platform.js");
const { briefs } = await import("../src/catalog.js");

function request(headers: Record<string, string>, url = "https://briefs.hardmagic.com/api/health") {
  return { headers: new Headers(headers), url };
}

test("edge identity and exact HardMagic host are both required", () => {
  resetConfigForTests();
  assert.equal(validateEdgeRequest(request({ "x-azure-fdid": "22222222-2222-4222-8222-222222222222", "x-forwarded-host": "briefs.hardmagic.com" })), null);
  assert.equal(validateEdgeRequest(request({ "x-forwarded-host": "briefs.hardmagic.com" }))?.status, 404);
  assert.equal(validateEdgeRequest(request({ "x-azure-fdid": "22222222-2222-4222-8222-222222222222", "x-forwarded-host": "evil.example" }))?.status, 404);
});

test("foreign browser origins fail before body processing", () => {
  resetConfigForTests();
  const result = validateEdgeRequest(request({
    "x-azure-fdid": "22222222-2222-4222-8222-222222222222",
    "x-forwarded-host": "briefs.hardmagic.com",
    origin: "https://evil.example",
  }));
  assert.equal(result?.status, 403);
});

test("field-guide email is branded, escaped, responsive, and has both private actions", () => {
  resetConfigForTests();
  const rendered = renderBriefEmail("A <reader>", briefs["generative-media-operating-system"], "https://private.example/file.pdf?sig=a&se=b", "https://briefs.hardmagic.com/api/unsubscribe?token=a&b=c");
  assert.match(rendered.html, /HardMagic Corporation/);
  assert.match(rendered.html, /A &lt;reader&gt;/);
  assert.match(rendered.html, /prefers-color-scheme:dark/);
  assert.match(rendered.html, /Open the PDF field guide/);
  assert.match(rendered.html, /sig=a&amp;se=b/);
  assert.match(rendered.html, /Stop report-specific follow-ups/);
  assert.match(rendered.plain, /https:\/\/private\.example\/file\.pdf/);
});

test("Dataverse contact lookup is constrained to the HardMagic Account", () => {
  const query = buildAccountScopedContactQuery("ADA+MEDIA@EXAMPLE.COM", "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa");
  const url = new URL(`https://dream.crm.dynamics.com${query}`);
  assert.equal(url.searchParams.get("$filter"), "emailaddress1 eq 'ada+media@example.com' and _parentcustomerid_value eq aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa");
  assert.match(url.searchParams.get("$select") ?? "", /_owningbusinessunit_value/);
});
