# SKILL: LoR (Loop of Resilience)

## Description
A modular 5-step engineering verification loop for complex tasks. 
It automates the process of: Raw Reply -> Verification Planning -> Forced Execution -> Result Checking -> Final Output.

## Triggering
- Auto-triggered on complex tasks (coding, architecture, complex planning).
- Explicit trigger via `/lor [task]` or `@LumiVeda /lor [task]`.

## Safety Constraints
- Require user confirmation for destructive operations (`exec`, `write`, `edit`).
- Read-only operations (`read`, `search`) execute automatically.
- Max 3 retries in Step 4.
