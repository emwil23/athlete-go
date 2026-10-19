# AthleteGO: build brief (approved by the owner 2026-10-19)

Read `D:\Code\AIPro\AIPro\ew-apps\CLAUDE.md` first: it holds the owner's rules, stack and plan, and they all apply. **Start only after TaskPilot's shared pieces have landed** (Vite starter setup, AI-connect layer, Meet-the-developer page, and the ew-apps-api AI route with quotas). Copy those pieces from `../taskpilot` and `../ew-apps-api` rather than rebuilding them. Work on a new branch `revamp` from master, commit in small steps, push, and open a PR to master. Replace the CRA app entirely; keep git history.

## 1. What's there now
- React 17 CRA, one class component (`LoginPage.js`): a 5-slide landing carousel (cover, Why us, How we work, Who we are, Testimonies) and a login form with no logic.
- No planner, no data, no API.
- Problems:
  - **Fake testimonials** with made-up names, dates and ratings. One rating of 9.3 sits next to "worst site I have ever used". Delete them; ship no invented reviews.
  - Copy claims "our expert dietitians", which isn't true and must go.
  - Typos throughout; the password field reuses `id='email'`; `htmlfor` instead of `htmlFor`; `console.log` left in.

## 2. What we're making
**AthleteGO: your AI sports-nutrition coach.** You set your goal, sport, body stats, diet, allergies, budget and cuisine. AthleteGO generates a weekly meal plan with macros, a grocery list and recipes, and adapts each week to your progress.

Pages:
- `/`: landing with a 3D hero (the owner's character as an athlete, with a plate of food assembling itself in 3D: macro rings orbiting, ingredients snapping into place), scroll storytelling of the three steps (profile → plan → progress), sports showcase, pricing teaser, footer "Made with ♥ by EWSTUDIOS".
- `/onboarding`: a 6-step profile wizard (goal, sport and training days, body stats with metric/imperial, diet type, allergies and dislikes, budget and cooking time). It shows the calculated targets live (Mifflin-St Jeor BMR × activity factor, with macros split by goal).
- `/app/plan`: week view of breakfast, lunch, dinner and snacks, each with macros. Swap a meal, lock a meal, regenerate a day.
- `/app/recipe/:id`: ingredients scaled to servings, steps, a cook mode (big text, screen stays awake via the Wake Lock API, step timers).
- `/app/grocery`: the week's list merged and grouped by aisle; tick items off; share as text.
- `/app/log`: food log (search USDA FoodData Central, scan a barcode with the camera via Open Food Facts, or quick-add) and water.
- `/app/progress`: weight trend line (smoothed), adherence, macro charts, and the weekly check-in where AI adjusts targets.
- `/app/pantry`: what you have at home. "Cook with what I have" uses it.
- `/developer`: Meet the developer.
- `/pro`, `/settings` (units, targets override, AI provider, export/import JSON), `/privacy`, `/terms`, a designed 404.

## 3. Taken from competitors
| From | Feature | In AthleteGO |
|---|---|---|
| Eat This Much | Full plan from goals, budget and schedule | Weekly plan generator with budget and cooking-time limits |
| MacroFactor | Targets adjust weekly from your real trend | Weekly check-in: smoothed weight trend, then AI suggests the new calorie target with a reason |
| Cronometer | Verified nutrient data | Nutrition numbers come from USDA FoodData Central (CC0), not from the AI. The AI picks foods; the numbers are looked up. |
| Lifesum | Polished guided plans, meal quality score | A "plate score" per meal (protein, fibre, variety), calm visual design |
| Mealime | Fast recipes, merged grocery list | Cook mode and an aisle-grouped grocery list |
| MyFitnessPal | Barcode scan | Camera barcode scan → Open Food Facts |
| Samsung Food / Whisk | Pantry-aware cooking | Pantry page and "Cook with what I have" |
| Athlete-specific (none of the above do this well) | Training-day vs rest-day fuelling | Higher carbs on training days, pre- and post-workout snacks, a match-day plan for your sport |

**AI actions** (all through the shared AI-connect layer, route `/api/ai/athletego/:action`): generate week, swap meal, cook with what I have, explain my targets, weekly check-in summary, rewrite a recipe (vegan, cheaper, faster).

## 4. Health and privacy rules (required)
- Show "Not medical advice; talk to a doctor or dietitian for medical conditions" on onboarding, the plan page and the terms. No claims about treating conditions. Don't make plans for eating disorders, pregnancy or diabetes; for those, the app points to a professional.
- The Gemini free tier lets Google read prompts. Send the AI **only** the numbers and preferences it needs: targets, diet type, allergies, cuisine. Never send a name, email, photos or the weight history itself. All personal data stays in IndexedDB on the device (Free) or in Supabase with row-level security (Pro sync).
- 18+ for the Gemini route; hide it for EU/UK/CH users (per CLAUDE.md). Fallback providers still work there.
- Allergies are a safety filter: check every AI meal against the allergy list in code before showing it, not just in the prompt.

## 5. Tech (all in)
- Same base as TaskPilot: React 19, strict TS, Vite, TanStack Router, Dexie, Zustand, Tailwind v4, shadcn/Radix, Lucide, Motion, GSAP ScrollTrigger + Lenis, React Three Fiber + drei, PWA, dark/light themes, reduce-motion.
- Charts: visx or Recharts, accessible with table fallbacks.
- Barcode: the browser's BarcodeDetector API, with `@zxing/browser` as fallback.
- Data:
  - USDA FoodData Central (free data.gov key, 1,000 requests/hour per IP; call it through ew-apps-api so the key stays private, and cache results)
  - Open Food Facts (ODbL: credit it, and keep any copied database data under the same licence)
- Units: metric/imperial throughout. Typed number inputs with validation (zod).
- Tests: Vitest for BMR/macro maths and the allergy filter (both must have unit tests); Playwright for onboarding → plan → grocery list. CI as in TaskPilot (lint, typecheck, test, build, Lighthouse ≥ 95, axe).

## 6. Pro (once the backend's Pro gating exists)
Sync across devices, unlimited saved plans and history, PDF export of the week and grocery list, the weekly AI check-in with full history, a household plan (2–4 people with different targets), and a higher AI quota. Free keeps the full planner, AI included.

## 7. Design and assets
- Use the `awwwards` MCP for 3–5 references (food, sports, health, 3D product) and write docs/design-brief.md. Direction to explore: athletic energy (bold condensed type, motion) with fresh-food warmth. Not a gym-bro dark-neon look.
- Google Flow (project "Revamp", master character), one session at a time in the owner's Chrome:
  - hero clip (the character in athletic wear with the plate assembling) and still
  - 6 sport scenes (running, football, cricket, gym, swimming, cycling)
  - about 12 hero recipe photos, studio-lit and in a consistent style (other recipes use generated thumbnails in the same style)
  - 4 onboarding and 4 empty-state illustrations
  - developer portrait and loop
  - OG image
- List every asset in docs/assets.md (path, size or aspect, still or 6s/8s clip, prompt).
- Draw the logo and icons as SVG.

## Done means
- All pages work and tests pass in CI.
- docs/design-brief.md and docs/assets.md exist.
- A showcase README (see CLAUDE.md) uses Playwright screenshots.
- A PR is open.

Don't deploy, rename the repo or spend anything. List needed owner actions in the PR (USDA key, new AI routes in ew-apps-api).
