# Moja — Ad Spend & Sales Insights

A Manifest V3 Chrome extension built with React, TypeScript, Vite, Recharts and Chrome Storage.

## Included in this build
- Full-page dashboard and compact popup.
- Campaign, sales and additional-expense records.
- Revenue, refunds, estimated profit, ROAS, CPA, CPC, CPM, CTR, conversion rate and AOV calculations.
- Date-range filters, campaign search and platform filter.
- CSV import for campaigns and sales; CSV exports and summary export.
- Chrome local persistence (`chrome.storage.local`, with browser fallback for development).
- Light/dark theme and currency display.
- Rule-based, data-grounded insights (not represented as LLM AI).
- Local threshold notification checks.
- Honest integration status cards and secure HTTPS backend adapter scaffold.

## Requirements
- Node.js 20+
- Google Chrome

## Install dependencies and build
```bash
npm install
npm run typecheck
npm run build
```
The production extension is generated in `dist/`.

## Load in Chrome
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select the generated `dist` folder.
5. Click the Moja toolbar icon to open the popup. Open Options to configure preferences.

## Demo data
Use the dashboard's sample data only when you want to inspect the interface. It is labeled **Demo data is active**. Clearing demo data removes those local sample records. Imported or manually entered records are stored separately in the same local workspace.

## CSV formats
Sales CSV headers (case-insensitive): `order_id,product,revenue,refund,source,date`.
Campaign CSV headers: `campaign,platform,status,spend,revenue,impressions,clicks,conversions,date`.
Unknown/missing numeric values are treated as zero. Review imported records for correctness and duplicate orders before relying on financial totals. The importer does not silently merge/deduplicate order IDs.

## Integrations — important production requirements
No advertising or commerce account is connected by default. The cards intentionally show **Not connected**. Real connections require registered developer applications, platform approvals, OAuth redirect handling, user consent, and a backend token exchange. The extension must not contain OAuth client secrets or provider API keys.

`src/lib/api.ts` provides an HTTPS-only backend request adapter and a list of setup requirements. Before enabling a real connector, implement the matching OAuth flow on a backend, store/refresh tokens server-side, validate webhook signatures, scope permissions minimally, and normalize provider data into Moja's types. Platform approval and API access are outside this repository.

Set an HTTPS API base URL in Settings to prepare for a future backend. No credentials are requested or stored by this build.

## AI
The current insights are deterministic rules over imported/local metrics. This avoids pretending that an AI service is connected. To add LLM analysis, create an authenticated backend endpoint, send only the minimum necessary aggregate metrics, validate its response, and keep provider keys on the server. The UI must clearly identify generated recommendations as suggestions.

## Security and privacy
- Manifest requests only `storage`, `notifications`, and `alarms`.
- No browsing history, page content, or unrelated browsing data is collected.
- No third-party API secrets are bundled.
- Backend adapter rejects non-HTTPS URLs.
- Local data stays in Chrome storage unless a future configured backend explicitly syncs it.

## Known scope limits before public production launch
- OAuth flows and live platform API connectors are not active; each requires app registration and backend implementation.
- Shopify/WooCommerce/Stripe sync and hosted AI are not active.
- Current date filtering is based on the browser's local date. The time-zone preference is stored but does not yet transform imported timestamps.
- Daily notification check evaluates the current locally loaded campaign totals; it is not a real-time platform monitor.
- Trend comparison is not fabricated: percentage deltas are not shown until comparable prior-period data exists.
- Order duplicate prevention requires a backend or a user-confirmed import policy; current CSV import does not discard rows.
- This is a functional first implementation, not a claim of a fully audited production SaaS. Test with non-critical data before business use.

## Suggested backend environment variables
See `.env.example`. Never expose these variables to Vite client-side code. They belong only in a backend deployment environment.

## Development
```bash
npm run dev
```
Open the Vite URL for the dashboard. Chrome APIs fall back to localStorage in a normal browser tab.
