# Design System Document: Tropical Cyber-Artisanal



## 1. Overview & Creative North Star

The Creative North Star for this system is **"The Neon Orchard."** This design system seeks to reconcile the raw, sun-drenched heritage of Brazilian artisanal caipirinhas with a high-octane, retro-futurist digital layer. We are moving away from the "farmers market" aesthetic and into a rhythmic, editorial space where tradition meets the 1980s digital frontier.



The system breaks the standard "template" look through **Intentional Asymmetry**. We utilize a Bento Grid layout not as a rigid cage, but as a playground where high-contrast typography and overlapping "glass" containers create a sense of kinetic energy. By pairing grainy, tactile textures with sleek neon gradients, we evoke a high-end, "Tropical Cyber" atmosphere that feels both premium and electric.



---



## 2. Colors

Our palette is a high-contrast dialogue between the organic forest and the synthetic neon.



### The Palette (Material Design Convention)

* **Primary (Neon Lime):** `#ddffb0` — Our electric energy source. Use for CTAs and focus points.

* **Secondary (Burnt Orange):** `#ff7518` — The "sun" of the system. Used for highlights and rhythmic accents.

* **Surface (Deep Forest):** `#0e0f03` — The grounding darkness.

* **On-Surface (Cream):** `#fbfbe2` — Our primary ink, providing a soft, high-end alternative to pure white.



### Flavor accents (packaging & product UI)

Use these for **flavor-specific** moments (e.g. home bento product hovers, future flavor pages) so each SKU reads as its own “liquid” without replacing global Primary/Secondary tokens.

* **Zitrone (Lemon):** `#E9C16F` — Muted warm golden-yellow: bright citrus acidity balanced with a deeper, cloudy orange-yellow (dense blended fruit), not neon lemon.

* **Passionsfrucht (Passion fruit):** `#C87522` — Deep burnt amber-orange: richer, more opaque pulp-forward juice, aligned with hero/product photography.



### The "No-Line" Rule

To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` (`#131406`) section should sit directly against a `surface` (`#0e0f03`) background. The transition should be felt, not seen as a stroke.



### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers. Each level of "nesting" should step up the container tier:

1. **Base Layer:** `surface`

2. **Section Layer:** `surface_container_low`

3. **Component Layer (Cards/Bento Boxes):** `surface_container_high`



### The "Glass & Gradient" Rule

Floating elements (such as navigation bars or active selection chips) must utilize **Glassmorphism**. Combine semi-transparent `surface_variant` (`#252713` at 60% opacity) with a `20px` backdrop-blur.



To provide "visual soul," use grainy gradients transitioning from `primary` (`#ddffb0`) to `primary_container` (`#a1fe00`) for hero backgrounds and primary buttons. This mimics the organic, uneven color of fresh fruit under a neon light.



---



## 3. Typography

The typography is a collision of "The Bold" and "The Precise."



* **Display & Headlines (Space Grotesk):** We use wide, aggressive sans-serifs for headlines. The `display-lg` (3.5rem) and `headline-lg` (2rem) levels should feel rhythmic and loud, echoing the energy of Brazilian nightlife.

* **Body & Labels (Inter):** For legibility and a "cyber" feel, we use a clean geometric sans-serif. This provides a functional contrast to the expressive headlines.



The hierarchy conveys the brand identity by using massive type scales for product names (the "Cyber" element) while maintaining tight, organized body copy (the "Artisanal" element).



---



## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.



* **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_highest` (`#252713`) card on a `surface_container_low` (`#131406`) background to create a soft, natural lift.

* **Ambient Shadows:** If a floating effect is required (e.g., a "Buy Now" FAB), use a diffused shadow: `blur: 40px`, `y: 10px`, `opacity: 8%`. The shadow color must be a tinted version of the background (`#000000`), never a neutral grey.

* **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (`#484937`) at **15% opacity**. It should feel like a suggestion of an edge, not a hard line.

* **Texture Overlays:** Apply a subtle 3% grain/noise texture overlay across the entire UI to bridge the gap between digital "cyber" and artisanal "craft."



---



## 5. Components



### Buttons

* **Primary:** `primary` background with `on_primary` text. No border. Subtle grain texture overlay.

* **Secondary:** Glassmorphism style. `surface_variant` (40% opacity) with `on_surface` text and a backdrop-blur.

* **Shape:** Use `md` (0.375rem) roundedness for a modern, sharp feel.



### Bento Cards

* **Style:** `surface_container_highest` background. No borders.

* **Content:** Use `16` (4rem) padding to give elements room to breathe.

* **Interaction:** On hover, the background should shift to `secondary_container` (`#9e4300`) with **`duration-bento` (~500ms)** and **`ease-orchard`** (see § Motion & Transitions). Pair with a **subtle lift** (`translateY`) so depth reads as tonal + motion, not color alone. On the **home bento product tiles**, use an **`inset` glow** in the matching **flavor accent** (§ Flavor accents) so the halo stays **inside the card** and does not paint over adjacent grid cells; avoid dimming the product photo on hover unless a specific pattern calls for it.



### Input Fields

* **Style:** `surface_container_lowest` background.

* **State:** The "Ghost Border" becomes 100% opaque `primary` only when focused.

* **Typography:** Use `label-md` for labels, positioned strictly above the field.



### Lists & Navigation

* **The Divider Ban:** Never use line dividers. Separate list items using `spacing-4` (1rem) of vertical white space or alternating backgrounds between `surface_container` and `surface_container_low`.



### Custom Component: The "Artisanal Badge"

A floating, glassmorphic chip used to highlight "Crafted in Brazil" or "Natural Ingredients." It uses `tertiary_container` with a `full` (9999px) roundedness and a `label-sm` font.



---



## 6. Motion & Transitions

Motion should feel **editorial and warm**, not gimmicky: one clear **orchard entrance** on load, then **confident hovers** that reinforce depth and neon energy. Prefer **CSS-only** transitions and keyframes; reserve JS-driven motion for patterns not expressible in CSS.



### Principles

* **Ease (Orchard curve):** Default easing is **`cubic-bezier(0.22, 1, 0.36, 1)`** — quick start, long soft landing. It reads as “premium kinetic” without a mechanical linear feel. Exposed in code as `--ease-orchard` / Tailwind `ease-orchard`.

* **Duration scale:** Use tokens, not one-off ms values everywhere.

  * **Instant** (`~120ms`): color swaps on small controls, icon nudges.

  * **Snappy** (`~220ms`): secondary buttons, chips.

  * **Standard** (`~320ms`): primary CTAs, nav affordances.

  * **Bento** (`~500ms`): card background/image opacity shifts and subtle lift — matches component hover spec.

  * **Hero / entrance** (`~680ms`): staggered page reveals.

  * **Ambient** (`~900ms`): large imagery scale (hero photo breathing on hover).

* **Staggered load:** The home bento should **fade up** (`opacity` + small `translateY`) with **~70ms** delay between siblings so the grid “blooms” in one choreographed wave. Inside the hero tile only, run a **second stagger** for badge → headline → CTA so the main story lands after the frame appears.

* **Hover vocabulary:** Bento tiles use a **very small negative translateY** (`~2px`) plus existing tonal/color shifts — lift is felt, not cartoonish. CTAs may use **slight scale** (`1.02`) with a **brighter shadow** in primary-tinted green, plus **`active` scale down** (`0.98`) for tactile feedback.

* **Reduced motion:** All entrance animations must **respect `prefers-reduced-motion: reduce`** (animations off; content stays fully visible).



### Do / Don’t (motion)

* **Do** keep **parallel properties** in one transition (e.g. `transform` + `background-color`) so cards don’t “phase” at different speeds.

* **Do** use **warm accent motion** (`secondary` / primary glow) for emphasis — aligned with micro-interaction color rules elsewhere.

* **Don’t** chain long delays on inner navigation; entrance stagger is for **home / hero** only unless a future page explicitly matches that rhythm.

* **Don’t** default to `ease-linear` or harsh `ease-in-out` on large surfaces; it clashes with the Neon Orchard tone.



---



## 7. Do's and Don'ts



### Do

* **Do** lean into the Bento grid. Overlap images of fruit or bottles across grid lines to break the "box" feel.

* **Do** use `secondary` (Burnt Orange) for micro-interactions like toggles or progress bars to provide warmth.

* **Do** ensure high contrast for typography (Inter on Forest Surface) to maintain accessibility.



### Don't

* **Don't** use standard drop shadows (e.g., `offset-y: 2, blur: 4`). They look "cheap" in this high-end context.

* **Don't** use pure white (`#FFFFFF`). It breaks the "Tropical Cyber" mood. Always use the `on_surface` (Cream) token.

* **Don't** use sharp corners. Always use at least the `DEFAULT` (0.25rem) roundedness scale to keep the system feeling "artisanal" and approachable.

* **Don't** use more than one typeface for body copy. Stick to the Inter/Space Grotesk pairing to keep the rhythm consistent.