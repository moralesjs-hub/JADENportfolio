# Portfolio build and Codex workflow

## Context

Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion; Computer Science and Applied AI focus; starting from scratch without Figma. The portfolio now uses an obsidian telemetry visual system, server-rendered GitHub metadata, and responsive interactive project architecture previews.

## Phase 1: Codex tools and skills

1. **GitHub MCP Server — MCP Server (official GitHub)**  
   Inspect repositories, language breakdown, stars, and activity for `moralesjs-hub`; verify public project URLs and descriptions. The official server uses GitHub's published container and supports OAuth.  
   Add to Codex with Docker installed:
   ```bash
   codex mcp add github -- docker run -i --rm -p 127.0.0.1:8085:8085 -e GITHUB_OAUTH_CALLBACK_PORT=8085 ghcr.io/github/github-mcp-server
   ```
   Prompt: “Review the public repositories for moralesjs-hub. Confirm which portfolio projects are public and report their descriptions, languages, stars, and most recent push dates.”

2. **Playwright MCP — MCP Server (Microsoft Playwright)**  
   Browse the running site, inspect responsive layouts, operate filters and drawers, and check browser state at several viewport sizes.  
   Add to Codex:
   ```bash
   codex mcp add playwright -- npx @playwright/mcp@latest
   ```
   Prompt: “Open localhost:3000 at 375px, 768px, and 1440px. Review responsive overflow, filters, project drawers, keyboard use, and console errors; report visual issues with screenshots.”

3. **Frontend Design — Open-Source Skill (Anthropic)**  
   Gives the implementation a deliberate aesthetic plan and critique pass tailored to the real project domain, reducing default portfolio layouts.  
   Install globally with the Skills CLI:
   ```bash
   npx skills add anthropics/skills --skill frontend-design -g
   ```
   Prompt: “Use frontend-design to review this cyber-telemetry portfolio. Keep the supplied facts and obsidian palette; identify the strongest project-specific visual motif and refine hierarchy and motion for mobile.”

4. **Context7 — MCP Server (Upstash)**  
   Retrieve current Next.js, Tailwind, and Framer Motion documentation while changing cache APIs, animation behavior, or CSS integration.  
   Add to Codex:
   ```bash
   codex mcp add context7 -- npx -y @upstash/context7-mcp
   ```
   Prompt: “Use current Next.js App Router and Tailwind v4 docs to review the GitHub server fetch cache and styling integration.”

5. **shadcn/ui — Component registry and CLI**  
   Adapt accessible dialog, tabs, and button primitives for a keyboard-friendly project drawer and filter controls while retaining the custom palette.  
   Add the primitives:
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add dialog tabs button
   ```
   Prompt: “Use the shadcn dialog and tabs primitives as accessibility references, then adapt their behavior to the portfolio's custom visual system.”

6. **Lucide React — Icon library**  
   Consistent, lightweight icons for project architecture, technology areas, and social links; already included in this project.  
   Install:
   ```bash
   npm install lucide-react
   ```
   Prompt: “Use lucide-react consistently for telemetry and skill categories, keeping meaningful links labeled for assistive technology.”

7. **Lighthouse — Browser audit CLI**  
   Run accessibility and performance audits on the production build after the responsive browser review.  
   Run:
   ```bash
   npx lighthouse http://localhost:3000 --view
   ```
   Prompt: “Audit the production portfolio with Lighthouse and fix actionable accessibility and performance findings without changing its visual direction.”

## Phase 2: implementation

The application is in this folder. `src/lib/github.ts` fetches the public profile and repositories from the GitHub REST API with one-hour Next.js caching and a fallback profile for rate limits or network errors. Public repository metrics populate the GitHub strip. Libro has no repository URL and is labeled private academic work. FridgeApp is intentionally left without a repository link until a matching public repository can be verified.

The provided resume is served from `public/resume.pdf`.

### Run and build

```bash
npm install
npm run dev
npm run build
```

### Browser QA checklist

After starting the server, inspect at 375px, 768px, and 1440px. Check all four telemetry tabs, project filters, drawer close button/Escape/backdrop behavior, keyboard focus, color contrast, reduced motion, resume and social links, email-copy confirmation, GitHub fallback behavior, console/network errors, and horizontal overflow. Recheck the rendered copy for replacement glyphs.
