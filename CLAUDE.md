# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Build & Dev Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (flat config, eslint-config-next)
```

No test framework is configured.

## Project Overview

Marketing landing page for **EVOLV INC.**, a fictional premium electric personal watercraft brand. Purely visual showcase — no backend logic. Designed in Figma, implemented pixel-perfect with rich animations.

**Figma source:** `https://www.figma.com/design/lq6hh9IUW5Qv8XfnZKBJ9T/EVOLV-INC?node-id=1-1540`

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (`@theme inline` tokens in `globals.css`)
- **Animations:** Framer Motion (scroll-triggered, hover, entrance, parallax)
- **Fonts:** Plus Jakarta Sans + Outfit (via `next/font/google`), JetBrains Mono for code-style UI
- **Deploy target:** Vercel Deployment

## Architecture

Single-page app: `src/app/page.tsx` composes 10 section components from `src/components/`. Layout (`src/app/layout.tsx`) configures fonts as CSS variables and metadata. All components are `"use client"` because Framer Motion requires client components.

### Page Section Order

Navbar → Hero → LogoMarquee → SmartEngineering → ComfortSpeed → WatercraftParadigm → EngineeringSpecs → BuiltForBeyond → Newsletter → Footer

### Key Design Tokens (globals.css)

- `--color-lime: #d0fc06` — primary accent
- `--color-dark: #2d2f2f` — primary dark
- `--color-dark-deep: #1c1917` — navbar/footer dark
- Fonts: `--font-outfit`, `--font-jakarta`, `--font-mono`

### Asset Locations

- `public/images/` — hero-video.mp4, section background images, product photos
- `public/icons/` — ~30+ SVG icons
- `public/logos/` — logo1-5.svg (partner logos for marquee)

## Animation Patterns

- `motion.div` with `initial`/`animate`/`whileInView` for entrance animations
- `useScroll` + `useTransform` for parallax effects
- `useInView` + custom `useCountUp` hook for animated number counters
- `AnimatePresence` for mount/unmount transitions (mobile menu, form states)
- CSS `@keyframes marquee` in globals.css for infinite logo scroll
- Staggered delays for sequential entrance effects

## Important Implementation Notes

- Hero uses HTML5 `<video>` with autoPlay/loop/muted/playsInline (not Next.js Image)
- Hero floating cards are absolutely positioned inside the right column (relative to the video area)
- DB gauge in SmartEngineering uses inline SVG with stroke-dasharray (not external SVG files)
- Logo marquee: two duplicate `<LogoStrip />` components with CSS translateX(-50%) for seamless loop
- Images from Figma MCP may be SVG files saved with .png extension — always verify with `file` command
- `globals.css` contains custom utility classes: `.animate-marquee`, `.noise-overlay`
