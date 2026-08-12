# HardMagic Dataverse contract

Target environment: `https://dream.crm.dynamics.com`

Required solution components:

- Business Unit: `HardMagic`;
- Account: `HardMagic Corporation`;
- owner team: dedicated HardMagic team;
- unmanaged development solution / managed production export: `hardmagic_briefs`;
- publisher prefix: `hm`;
- table logical name: `hm_briefengagement`;
- entity set: `hm_briefengagements`;
- alternate key: `hm_requestid`;
- table auditing: enabled;
- Function user-assigned managed identity registered as a Dataverse application user in the HardMagic BU.

## Contact boundary

The bridge may resolve a Contact only when both conditions are true:

```text
emailaddress1 == normalized submitted email
_parentcustomerid_value == HardMagic Corporation Account ID
```

It must never query email globally and reparent the first result. If there is no Account-bound Contact, it creates one owned by the HardMagic team and binds it to the HardMagic Account. If an Account-bound result reports another owning BU, projection fails closed and enters retry/dead-letter handling.

## Engagement columns

The Function contract currently writes:

```text
hm_requestid                 Single Line Text, alternate key
hm_name                      Primary Name
hm_reportkey                 Single Line Text
hm_emailhash                 Single Line Text (SHA-256; no raw email)
hm_organization              Single Line Text
hm_role                      Single Line Text
hm_primarychallenge          Multiple Lines Text
hm_decisionhorizon           Single Line Text
hm_preferrednextstep         Single Line Text
hm_intakecategory            Choice or validated Single Line Text
hm_sourcesummary             Single Line Text; campaign only, no query string
hm_consentstatus             Choice or validated Single Line Text
hm_deliverystatus            Choice or validated Single Line Text
hm_suppressionstatus         Choice or validated Single Line Text
hm_contact                   Lookup(Contact)
ownerid                      HardMagic team
```

Allowed intake values are `creative-direction`, `genai`, `media-management`, `marketing-consulting`, `product-strategy`, and `creative-technology`.

## Least-privilege application role

Create `HardMagic Brief Delivery` with Local depth only:

- Account: Read;
- Contact: Create, Read, Write, Append, Append To;
- `hm_briefengagement`: Create, Read, Write, Append, Append To;
- basic User/Team/Business Unit reads required for ownership binding.

Do not grant Delete, Assign beyond the HardMagic team, Organization depth, solution customization, export, bulk delete, or System Administrator. Export the solution and role into source control after provisioning.

The private Blob ledger is the delivery system of record. Dataverse is an asynchronous relationship projection. `requestId` provides idempotency and CRM-owned fields must not be reset by a replay.
