# Jaden Morales — Portfolio
Responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion, and lucide-react.

## Run locally
```bash
npm install
npm run dev
```
Resume is served from `public/resume.pdf`. GitHub data is fetched server-side and cached hourly. Set `GITHUB_TOKEN` in `.env.local` to raise the API limit; never expose it as a `NEXT_PUBLIC_` variable. Static identity/language data is used as fallback.

## Build
```bash
npm run build
npm start
```

## Visual and accessibility QA
After starting the app, use Playwright or Playwright MCP at 375px, 768px, and 1440px. Check project filters and all drawers, Escape/backdrop dismissal, keyboard and screen-reader dialog behavior, navigation/resume links, reduced motion, email-copy feedback, GitHub fallback, browser console, network errors, overflow, and layout shifts. Compare desktop and mobile screenshots.

## Optional Codex MCP setup
```bash
codex mcp add github -- npx -y @modelcontextprotocol/server-github
codex mcp add playwright -- npx -y @playwright/mcp@latest
codex mcp add context7 -- npx -y @upstash/context7-mcp
```
For visual craft, install a `frontend-design` skill and prompt: “Review this portfolio for visual specificity and strengthen editorial hierarchy, project storytelling, and responsive polish without changing the supplied facts.”
