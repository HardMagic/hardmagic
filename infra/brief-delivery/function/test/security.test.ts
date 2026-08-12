import assert from "node:assert/strict";
import test from "node:test";
import { loadConfig, resetConfigForTests } from "../src/config.js";

const validEnvironment = {
  AZURE_CLIENT_ID: "11111111-1111-4111-8111-111111111111",
  BRIEF_STORAGE_ACCOUNT_NAME: "sthmbriefexample",
  BRIEF_CONTAINER_NAME: "briefs",
  LEDGER_CONTAINER_NAME: "ledger",
  DEADLETTER_CONTAINER_NAME: "deadletter",
  CRM_RETRY_QUEUE_NAME: "crm-retry",
  COMPANY_NAME: "HardMagic Corporation",
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
};

test("typed configuration accepts the HardMagic boundary", () => {
  const config = loadConfig(validEnvironment);
  assert.equal(config.COMPANY_DOMAIN, "hardmagic.com");
  assert.equal(config.DATAVERSE_ENTITY_LOGICAL_NAME, "hm_briefengagement");
  assert.equal(config.TURNSTILE_REQUIRED, true);
});

test("configuration rejects another public site or CRM table", () => {
  assert.throws(() => loadConfig({ ...validEnvironment, PUBLIC_SITE_URL: "https://example.com" }));
  assert.throws(() => loadConfig({ ...validEnvironment, DATAVERSE_ENTITY_LOGICAL_NAME: "ge_briefengagement" }));
});

test.afterEach(() => resetConfigForTests());
