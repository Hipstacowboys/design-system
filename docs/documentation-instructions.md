# Documentation Page Creation Instructions

Instructions for creating component documentation pages for the Ventrata Design System. Follow this exactly when building new pages.

---

## Folder structure

Documentation pages live in `/documentation/` (not `/docs/` — that folder is for project documents).

```
documentation/
  button.html              ← HTML entry point (Vite serves this)
src/docs/
  button-doc.js            ← Vue entry point (imports + registers components)
  ButtonDocPage.vue         ← The actual documentation page (Vue SFC)
```

Each component page requires **three files**:

### 1. HTML entry — `documentation/{component}.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Component} — Ventrata Design System</title>
  <link rel="stylesheet" href="../design-system.css">
  <script type="module" src="../src/docs/{component}-doc.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

### 2. JS entry — `src/docs/{component}-doc.js`

```javascript
import { createApp } from 'vue';
import {ComponentName}DocPage from './{ComponentName}DocPage.vue';

// Import every Vue component that appears in the documentation
import ButtonPrimary from '../../components/ButtonPrimary.vue';
// ... all needed components

const app = createApp({ComponentName}DocPage);

// Register them globally so the template can use them
app.component('ButtonPrimary', ButtonPrimary);
// ... all needed components

app.mount('#app');
```

### 3. Vue SFC — `src/docs/{ComponentName}DocPage.vue`

This is where all documentation content lives. See the full structure below.

### 4. Register in Vite — `vite.config.js`

Add the new HTML entry to `build.rollupOptions.input`:

```javascript
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'preview-vue.html'),
      buttonDoc: resolve(__dirname, 'documentation/button.html'),
      newComponentDoc: resolve(__dirname, 'documentation/{component}.html')
    }
  }
}
```

---

## Page layout (three-column)

Every doc page uses the same three-column layout from `docs/reference-main.css`:

```
┌──────────────────────────────────────────────────────┐
│  header (.header)                                    │
├────────────┬───────────────────────┬─────────────────┤
│  left nav  │  main content        │  right aside    │
│            │  (.layout__content)  │  (.layout__aside)│
│  Component │                      │  Code snippets  │
│  switcher  │  9 sections          │  3 tabs:        │
│  (links to │  (see below)         │  Vue / HTML /   │
│  all comp  │                      │  SCSS           │
│  pages)    │                      │                 │
└────────────┴───────────────────────┴─────────────────┘
```

### Left nav — component switcher

The left nav is for **switching between component pages**, NOT for on-page section anchors. Each link navigates to a different documentation page. The currently viewed component gets `is-active`.

```html
<nav class="layout__nav">
  <div class="nav">
    <section class="nav__section">
      <span class="nav__section-title">Components</span>
      <ul class="nav__list">
        <li class="nav__item"><a href="/documentation/button.html" class="nav__link is-active">Button</a></li>
        <li class="nav__item"><a href="/documentation/input.html" class="nav__link">Input</a></li>
        <li class="nav__item"><a href="/documentation/select.html" class="nav__link">Select</a></li>
        <li class="nav__item"><a href="/documentation/checkbox.html" class="nav__link">Checkbox</a></li>
        <!-- ... all documented components -->
      </ul>
    </section>
  </div>
</nav>
```

When adding a new component page, add its link to the left nav of **every** existing documentation page so all pages share the same navigation.

---

## The 9 required sections

Every component documentation page MUST have these 9 sections in this order. Content must be sourced from the actual Vue component files, not invented.

### 1. Purpose & when to use (`#purpose`)
- When to use each variant
- When NOT to use
- Sourced from the component's actual use cases

### 2. Anatomy & sizing (`#anatomy`)
- **Structural slots** — render the real component showing slot layout (icon positions, text, leading text, etc.)
- **Spacing & padding visualization** — for each size (small/medium/large):
  - Render the actual component inside a `.btn-anatomy__frame`
  - Overlay pink padding areas (`.btn-anatomy__pad`)
  - Overlay dashed blue content box outline (`.btn-anatomy__outline`)
  - Red measurement badges (`.btn-anatomy__badge`) showing **pixel numbers only**
  - Below each visualization: a table with columns `Property / Token / Value`
  - Token column uses semantic token names like `--marks-spacing-16`
  - Value column shows resolved pixel values
- **Live sizes** — all variants × all sizes rendered side by side

### 3. Variants & all states (`#variants`)
- One table per component type (e.g., Primary, Secondary, Line, Ghost)
- **Columns** = variant configurations: Default (no icons), Icon left, Icon right, Loading only, Loading left, Loading right, Icon only
- **Rows** = states: Default, Hover, Clicked, Disabled
- Hover and Clicked states are forced via CSS wrapper classes (`force-hover`, `force-active`) in a non-scoped `<style>` block
- Force-state CSS must match the actual `:hover` and `:active` styles from each component's scoped SCSS

### 4. Behavior rules (`#behavior`)
- Click handling
- Loading state behavior
- Disabled state behavior
- Focus behavior
- Live demo (e.g., loading toggle)

### 5. Content rules (`#content`)
- Label text guidelines
- Casing rules
- Character length limits
- Icon usage rules

### 6. Accessibility (`#accessibility`)
- Keyboard navigation
- ARIA attributes
- Contrast requirements
- Touch target sizes

### 7. Examples & anti-patterns (`#examples`)
- Real-world usage examples with live components
- Anti-patterns with visual "Don't" indicators

### 8. API / Props (`#api`)
- Full props table: `Name / Type / Default / Description`
- Use `.props-table` CSS class
- Events table
- Slots table

### 9. Theming & dark mode (`#theming`)
- Light mode preview with live components
- Dark mode preview with live components
- Dark mode uses the `.dark-preview` class pattern (see below)

---

## Dark mode preview

Dark mode is NOT done with `data-theme="dark"`. It is done by **manually overriding all `--marks-color-*` CSS custom properties** on the container element. This matches the pattern used in `comparison.html` / `ComparisonApp.vue`.

Use a scoped style class:

```css
.dark-preview {
  background: #000000;
  border-color: #6F6F6F;

  --marks-color-primary-solid: #0E5842;
  --marks-color-primary-light: #032F22;
  --marks-color-red-100: #FFE4E9;
  --marks-color-red-200: #FD3860;
  --marks-color-red-300: #97001E;
  --marks-color-blue-100: #D7E7FF;
  --marks-color-blue-200: #2576F7;
  --marks-color-blue-300: #050D3A;
  --marks-color-green-100: #C0F3E4;
  --marks-color-green-200: #0FAF80;
  --marks-color-green-300: #0E5842;
  --marks-color-orange-100: #FFEBD2;
  --marks-color-orange-200: #FF8C00;
  --marks-color-orange-300: #854900;
  --marks-color-gray-100: #2A2A2A;
  --marks-color-gray-150: #505050;
  --marks-color-gray-200: #6F6F6F;
  --marks-color-gray-300: #8D8D8D;
  --marks-color-gray-350: #D1D1D1;
  --marks-color-gray-400: #ECECEC;
  --marks-color-gray-500: #FAFAFA;
  --marks-color-white: #000000;
  --marks-color-black: #FFFFFF;
}
```

The dark preview background MUST be `#000000` (pure black).

---

## Force-state CSS for hover/clicked previews

Since Vue components use scoped `:hover` and `:active` pseudo-classes, we can't trigger them from the parent. Instead, wrap components in a div with a force class and add non-scoped styles that override the component's internal styles.

Add these in a **non-scoped** `<style>` block (not `<style scoped>`):

```css
/* Force hover state */
.force-hover .marks-{component}--{variant} {
  /* copy exact :hover styles from the component's SCSS */
}

/* Force active/clicked state */
.force-active .marks-{component}--{variant} {
  /* copy exact :active styles from the component's SCSS */
}
```

Use `!important` to override scoped styles.

---

## Right aside — code snippets

Three tabs: **Vue**, **HTML**, **SCSS**

### Syntax highlighting

Use the token classes defined in `reference-main.css`:

| Class | Color | Use for |
|---|---|---|
| `.token-comment` | Gray italic | `// comments`, `<!-- comments -->` |
| `.token-keyword` | Teal | `import`, `export`, `from`, `@use`, `@include`, `var` |
| `.token-string` | Pink | `"string values"`, `'paths'` |
| `.token-number` | Orange | `1px`, `2px`, pixel values |
| `.token-tag` | Light blue | `<ComponentName>`, `<div>`, `<button>`, component names |
| `.token-attr` | Gold | `size=`, `text=`, `class=`, CSS property names |

Wrap each token in a `<span>` inside `<pre>`:

```html
<pre><span class="token-keyword">import</span> { <span class="token-tag">PhArrowRight</span> } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span></pre>
```

### Vue tab content

- How to import icons
- How to register icons in `data()` for reactivity
- Basic usage of all variants
- Loading state examples
- Icon-only with `aria-label`
- Any component-specific features (e.g., `leading-text` for Primary)

### HTML tab content

- Rendered DOM output showing BEM class structure
- Examples for: default, icon-only, disabled, loading
- BEM class reference comment listing all blocks, variants, sizes, states, elements

### SCSS tab content

- Token import statement
- Color tokens per variant
- Spacing tokens per size (padding, radius, gap, typography mixin)
- State overrides (disabled, focus-visible)
- Component-specific token mappings

---

## Design tokens reference

### Spacing — `tokens/_spacing.scss`

```
--marks-spacing-0 through --marks-spacing-80
```

### Radius — `tokens/_spacing.scss`

```
--marks-radius-0, --marks-radius-8, --marks-radius-12, --marks-radius-16, --marks-radius-24, --marks-radius-full
```

### Colors — `tokens/colors-light.scss`, `tokens/colors-dark.scss`

```
--marks-color-primary-solid, --marks-color-primary-light
--marks-color-black, --marks-color-white
--marks-color-gray-100 through --marks-color-gray-500
--marks-color-red-100/200/300
--marks-color-blue-100/200/300
--marks-color-green-100/200/300
--marks-color-orange-100/200/300
```

### Typography — `tokens/_typography-mixins.scss`

Button-specific mixins: `marks-typography-button-sm`, `marks-typography-button-md`, `marks-typography-button-lg`

---

## Phosphor icons

- Package: `@phosphor-icons/vue`
- Weight rule: **bold** at ≤ 19px (small size), **regular** at ≥ 20px (medium & large)
- Icons must be imported and added to `data()` for Vue reactivity when passed as props
- Components handle weight automatically via `iconWeight` computed prop

---

## CSS classes used in documentation

All layout and documentation-specific styles come from `docs/reference-main.css`. Import it in a non-scoped `<style>` block:

```css
<style>
@import '../../docs/reference-main.css';
</style>
```

Key classes:

| Class | Purpose |
|---|---|
| `.header`, `.header__logo`, `.header__nav` | Top bar |
| `.layout`, `.layout__nav`, `.layout__content`, `.layout__aside` | Three-column grid |
| `.nav`, `.nav__section`, `.nav__link` | Left nav (component switcher, not contextual) |
| `.content`, `.content__eyebrow`, `.content__lead` | Main content area |
| `.comp-section-h2`, `.comp-section-desc` | Section headings |
| `.comp-demo`, `.comp-demo__group`, `.comp-demo__row` | Demo containers |
| `.variant-table`, `.variant-section` | State/variant tables |
| `.state-chip`, `.state-chip--{state}` | State label badges |
| `.props-table`, `.props-row__meta` | API props tables |
| `.callout`, `.callout--info`, `.callout--warning` | Info/warning boxes |
| `.aside__block--code`, `.code-tabs`, `.code-pane` | Code aside |

---

## Step-by-step checklist for a new component page

1. **Read the component** — Open every Vue SFC for the component. Extract: props, computed properties, events, slots, SCSS styles, hover/active/disabled/loading styles, BEM class names, token usage.

2. **Create three files** — `documentation/{component}.html`, `src/docs/{component}-doc.js`, `src/docs/{ComponentName}DocPage.vue`

3. **Register in Vite** — Add the HTML entry to `vite.config.js` `build.rollupOptions.input`

4. **Update left nav on ALL pages** — Add the new component link to the left nav of every existing documentation page, and include all existing component links in the new page

5. **Build all 9 sections** — Follow the order and content guidelines above. Every piece of content must reflect the real component, not generic filler.

6. **Build anatomy visualization** — Use `sizeSpecs` data with pixel values AND semantic token names. Badges show numbers, tables show tokens.

7. **Build variant × state grid** — Read the component's `:hover` and `:active` SCSS, create matching force-state CSS in non-scoped style block.

8. **Build code aside** — Three tabs (Vue/HTML/SCSS) with proper syntax highlighting using token span classes.

9. **Add dark mode preview** — Use the `.dark-preview` class pattern with full token overrides, `#000000` background.

10. **Test** — Run `npx vite` and verify the page loads at `http://localhost:3000/documentation/{component}.html`

---

## Reference files

- **Layout & style reference**: `docs/reference-button.html` (layout only, not content)
- **Documentation CSS**: `docs/reference-main.css`
- **Dark mode pattern**: `comparison.html` + `src/ComparisonApp.vue`
- **Button page (template)**: `src/docs/ButtonDocPage.vue`
- **Token files**: `tokens/_spacing.scss`, `tokens/_variables.scss`, `tokens/colors-light.scss`, `tokens/colors-dark.scss`, `tokens/_typography-tokens.scss`, `tokens/_typography-mixins.scss`
