# KineticZoneYard (kineticzoneyard.com)
> Part of the micro-ventures studio portfolio under **thatshouldbeanapp.com**.

An elite, hybrid fitness planner that cross-references biometrics, spatial environments, and equipment stacks to synthesize customized training routines.

---

## 📋 Architectural Directory Map

- **docs/prd.md**: Application logic and the 5 Onboarding Journey steps
- **n8n/workout_generator_payload.json**: Webhook mock payload array for automation testing
- **supabase/migrations/01_initial_matching_schema.sql**: Database core setup with strict relational constraints
- **vault/DEVELOPER_GUIDELINES.md**: Code aesthetics, language rules, and stack definitions
- **web/onboarding_flow_config.json**: Frontend layout definitions for the Lovable build

---

## ⚡ The Core Value Stream (The Engine)

1. **The Edge Interaction:** User completes a minimalist frontend sequence answering 5 critical metric blocks.
2. **The Relational Guard:** Data maps instantly to a Supabase PostgreSQL backend structured around UUID schemas.
3. **The Orchestration Loop:** A JSON array webhook fires into **n8n**, initializing background matching loops.

---

## 🛠️ Local System Initialization Quickstart

```bash
hermes config set model.context_length 65536
hermes --tui
```
