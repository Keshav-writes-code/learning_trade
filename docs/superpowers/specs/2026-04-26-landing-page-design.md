# Learning Trade Landing Page Design

## Architecture & Framework
- Astro for structure (`src/pages/index.astro`).
- UnoCSS for utility-first styling (already configured with DaisyUI preset).
- Vanilla HTML/CSS structure within Astro.
- No client-side JavaScript beyond what Astro/DaisyUI handles natively.

## Visual Aesthetic (SaaS Minimalist)
- **Colors**: Deep dark mode background (slate-900/gray-950) with high-contrast text and a singular accent color (e.g., emerald or indigo) for primary actions.
- **Typography**: Clean, sans-serif fonts (Atkinson Hyperlegible / Alata from UnoCSS config) with generous line heights and tracking.
- **Layout**: Centered, balanced grids with ample whitespace (padding/margin).
- **Styling**: Soft, subtle borders (1px border-gray-800), rounded corners (rounded-xl/2xl), and muted text for secondary information.

## Component Structure

### 1. Hero Section
- Bold, clear value proposition headline ("Hyper-Local Study Resources").
- Subheadline explaining the personalization (College, Branch, Semester specific).
- Primary Call to Action (CTA) button ("Get Started" or "Find Resources").
- Secondary CTA or social proof ("Join X students").
- Background: Subtle, dark gradient or very faint grid pattern to add depth without noise.

### 2. Value Proposition / Features Grid
- A 3-column grid (responsive: 1 col on mobile, 3 on desktop).
- Each card highlights a core feature:
  - **Hyper-Personalized**: Feed tailored to your exact academic context.
  - **Resource Variety**: PYQs, Notes, Tips & Tricks.
  - **Grow Your Profile**: Share resources, earn followers, build academic clout.
- Icons: Tabler icons (`i-tabler:*`) for each feature.
- Card Style: Dark gray background (bg-gray-800/50), subtle border, soft hover effect.

### 3. "How it Works" / Feed Preview (Mockup)
- A visual representation of the personalized feed.
- A minimalist mockup of a feed item (e.g., "Data Structures PYQ 2023 - Submitted by @studentA").
- Emphasizes the clean, SaaS-like UI the user will experience inside the app.

### 4. Footer (Minimal)
- Simple copyright.
- Links to About, Privacy, Contact (placeholders if pages don't exist).
- Minimalist design, low contrast text.

## Technical Implementation Details
- Use UnoCSS classes directly in Astro template.
- Use `dark:bg-*` and `dark:text-*` classes if theme toggling is expected, or just hardcode the dark theme classes since dark mode is explicitly requested. We'll default to explicit dark shades (e.g., `bg-gray-950`, `text-white`) to guarantee the dark mode aesthetic.
- Icons: `<div class="i-tabler:book text-3xl"></div>`
