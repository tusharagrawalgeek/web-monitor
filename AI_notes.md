AI Usage Summary

AI tools were used during development to accelerate scaffolding, improve structure, and refine implementation details. All generated code was reviewed, tested, and adjusted manually before final integration.

What AI Was Used For
Backend

Structuring Express routes

Designing MongoDB models

Implementing diff comparison logic

Integrating Groq LLM API

Improving timeout and error handling

Designing system status health checks

Suggesting cleanup logic for limiting history to last 5 entries

Frontend

Structuring Dashboard layout

Improving button alignment and UI structure

Designing Git-style colored diff rendering

Creating responsive navbar layout

Styling Home and Status pages

Documentation

README structure

AI_NOTES.md draft

PROMPTS_USED.md formatting

Project explanation wording

What Was Verified and Tested Manually

MongoDB Atlas connection configuration

Environment variable handling (.env)

Diff detection logic accuracy

LLM summary response parsing

API route integration (links, check, history, delete)

Status endpoint behavior

Timeout handling for slow/hanging websites

Frontend-backend communication using Axios

History limiting to 5 checks per link

UI behavior for loading and state updates

All major flows were manually tested:

Add link

Run first check (baseline)

Run second check (diff generated)

Summary generation

View history

Delete link

Validate status page

AI Dependency Scope

AI was used as a development assistant, not as an autopilot.

All:

Architecture decisions

API flow design

Database schema design

Integration logic

Error handling adjustments

were understood and validated before submission.

LLM Usage in the Application

The application uses Groq’s LLM API (llama-3.3-70b-versatile) to:

Summarize webpage diffs

Ignore formatting-only changes

Produce concise bullet-point summaries

The LLM is only called when actual changes are detected.

Final Note

AI tools accelerated development, but the final implementation was reviewed, tested, and refined to ensure correctness, stability, and alignment with project requirements.
