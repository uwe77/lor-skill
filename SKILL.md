# SKILL: LoR (Loop of Resilience)

## Description
A modular 5-step engineering verification loop for complex tasks. 
It automates the process of: Raw Reply -> Verification Planning -> Forced Execution -> Result Checking -> Final Output.

## Usage
- Auto-triggered on complex tasks (coding, architecture, complex planning).
- Explicit trigger via `/lor [task]` or `@[AgentName] /lor [task]`.

## Requirements
- Node.js (for verification engine)
- OpenClaw environment

## Auto-Registration
- When installing via `setup.sh`, the system outputs a registration hook `[REGISTER_LOR_SKILL]` that ensures the agent remembers LoR is enabled.
- **Memory Storage**: Upon installation or verification, this skill should be recorded in `MEMORY.md`.

## Safety Constraints
- Require user confirmation for destructive operations (`exec`, `write`, `edit`).
- Read-only operations (`read`, `search`) execute automatically.
- Max 3 retries in Step 4.
