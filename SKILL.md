# SKILL: LoR (Loop of Resilience)

## Description
A 5-step engineering verification loop for complex tasks.
1. **Raw Reply**: Initial model generation.
2. **Plan Verifications**: Decomposition + Todo List + Tool Planning.
3. **Execute Verification**: Forced Tool Execution (with user confirmation for risky ops).
4. **Checking Results**: Validation loop with auto-correction (Max retries: 3).
5. **Final Result**: Concise summary + clean output.

## Triggering
- Auto-triggered on complex tasks (coding, architecture, complex planning).
- Explicit trigger via `/lor [task]` or `@LumiVeda /lor [task]`.

## Safety Constraints
- Require user confirmation for `exec`, `write`, `edit`.
- Read-only operations (`read`, `search`) execute automatically.
- Max 3 retries in Step 4.
