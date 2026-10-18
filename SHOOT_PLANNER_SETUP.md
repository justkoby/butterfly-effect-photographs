# Shoot planner

The `/plan-your-shoot` page combines a guided brief, approved individual studio packages, optional Gemini advice and a WhatsApp enquiry. Home, navigation, footer and package cards link to it. No database or new production dependencies are required.

## Enable AI on Vercel

1. Import this Vite repository into Vercel (build `npm run build`, output `dist`). `api/shoot-planner.js` is a Node function; `vercel.json` preserves API routes while supporting SPA deep links.
2. Add **server-only** `GEMINI_API_KEY` and `GEMINI_MODEL` environment variables in Vercel. Choose an enabled text-generation model ID from your Google AI Studio account. No model is hardcoded. Never use `VITE_` for these variables or commit the key.
3. Redeploy, open `/plan-your-shoot`, submit an idea and check for the “AI advice” status. Check a direct page refresh too.
4. Confirm the approved contact in `src/data/studio.js` before launch. It uses the existing website/footer number, +233 55 839 9101. Confirm packages and the Setmore destination too.

Plain `npm run dev` serves the frontend only: requests will fall back to the clearly labelled guided planner. Use Vercel's development runtime to exercise both frontend and function locally. A static/cPanel deployment needs a separately hosted same-origin `/api/shoot-planner` endpoint or reverse proxy; uploading only `dist` does not enable AI.

## Behaviour

- Prices and quantities in cards and WhatsApp briefs come from `src/data/studio.js`, shared with the server. The outfit selector determines individual packages. Wedding/rental/other scopes request a quote. Group/commercial requests require studio confirmation.
- AI provides advice only. There is no calendar integration, payment collection, reservation or availability confirmation. Setmore opens separately; copy the brief into its notes.
- A successful AI call sends the last few conversation turns and the current form details to Google. The page discloses this before submission. There is no application database or local/session storage; refresh clears the conversation. Provider/platform processing and logs follow their own settings.
- Missing credentials, blocked responses, network errors and timeouts switch to an explicitly labelled guided response. The enquiry remains usable.
- Requests accept only bounded JSON, approved roles and form values. The endpoint uses a fixed provider host, an 18-second upstream timeout, bounded output, no-store responses and a best-effort per-instance limit of 10 requests/minute/IP. Provider errors and credentials are not returned to the client.
- Before public AI traffic, configure Vercel Firewall rate limits and provider usage limits. In-memory limits do not provide a distributed/global spending cap across function instances. Do not log request bodies.

## Verification

`npm ci`, `npm run build`, `npm run lint`, `node --test tests/shoot-planner.test.js`.

Manually check desktop/mobile layouts, keyboard navigation, package preselection, custom quotes, copy and WhatsApp contents, unavailable-AI status, and live AI with deployment credentials. The implementation can be tested without a live key by mocking provider fetch in the endpoint tests.

Gemini REST reference: https://ai.google.dev/api/generate-content
