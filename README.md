# Design System

Vue + SCSS design system built from Figma design system file.

## Setup

### Compiling Styles

The design system uses the npm `build:css` script to compile SCSS files:

1. Install dependencies with `npm install`
2. Run:
   ```bash
   npm run build:css
   ```
3. The script compiles:
   - `design-system.scss` → output: `design-system.css`
   - `preview.scss` → output: `preview.css`

### Vue Components with Vite

For Vue components, use Vite:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Open `preview-vue.html` in browser (Vite will serve it)

### Preview

- **`preview-vue.html`** - Vue.js preview (uses Vite to compile Vue components)

## File Structure

```
design-system/
├── components/          # Vue components
│   └── Toggle.vue
├── tokens/              # Design tokens
│   ├── _colors.scss
│   ├── _spacing.scss
│   ├── _typography-tokens.scss
│   ├── _typography-mixins.scss
│   └── _typography.scss
├── design-system.scss  # Main stylesheet (compile to design-system.css)
├── preview.scss        # Preview styles (compile to preview.css)
├── preview-vue.html    # Vue preview entry point
└── src/
    ├── preview.js      # Vue app entry point
    └── PreviewApp.vue  # Main preview component
```

## Usage

### In Components

```vue
<style lang="scss" scoped>
@import '../tokens/variables';

.marks-my-component {
  @include marks-typography-paragraph-sm;
  padding: var(--marks-spacing-16);
  color: var(--marks-color-gray-500);
}
</style>
```

### No Inline Styles

All styles should use classes, not inline styles. Use design system tokens and mixins.

## Using in Other Projects

This design system is designed to be reusable across multiple projects. You can install it directly from GitHub as an npm package.

### Quick Start (GitHub Installation)

1. **Install from GitHub:**
   ```bash
   npm install git+https://github.com/Hipstacowboys/design-system.git
   ```

2. **Import components:**
   ```javascript
   import { ButtonPrimary, Input, CalendarDatepicker } from '@hipstacowboys/design-system';
   ```

3. **Import tokens in SCSS:**
   ```scss
   @import '@hipstacowboys/design-system/tokens/_variables';
   ```

4. **Update to latest version:**
   ```bash
   npm update @hipstacowboys/design-system
   ```

See [docs/reuse-guide.md](./docs/reuse-guide.md) for complete instructions.

## Documentation

- **[COMPONENTS.md](./COMPONENTS.md)** - Complete component reference with props, events, and usage examples
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and changes
- **[docs/reuse-guide.md](./docs/reuse-guide.md)** - How to use in other projects
- **[docs/release-and-deploy.md](./docs/release-and-deploy.md)** - Release and deployment workflow

## Versioning

This design system uses [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](./CHANGELOG.md) for version history.

**Check current version:**
```bash
npm list @hipstacowboys/design-system
```

**Install specific version:**
```bash
npm install git+https://github.com/Hipstacowboys/design-system.git#v1.0.0
```

## Components

See [COMPONENTS.md](./COMPONENTS.md) for complete component documentation with all available props, events, and usage examples.

### Form Components
- **Toggle** (15-10129) - Toggle switch with 6 states
- **Toggle with Label** (15-10138) - Toggle with title and optional paragraph
- **Checkbox** (15-10095) - Checkbox with 4 states
- **Checkbox with Label** (15-10095) - Checkbox with title and optional paragraph
- **Radio** (15-10163) - Radio button with multiple states
- **Radio with Label** (15-10163) - Radio with title and optional paragraph

### Button Components
- **Button Primary** (13-9075) - Primary button, 3 sizes, 4 states
- **Button Secondary** (13-9075) - Secondary button, 3 sizes, 4 states
- **Button Line** (13-9075) - Line button, 3 sizes, 4 states
- **Button Ghost** (13-9075) - Ghost button, 3 sizes, 4 states

### Input Components
- **Input** (13-9678) - Complete input with labels and message
- **Input Field** (13-9414) - Input field with optional addons and icons
- **Input Message** (13-9646) - Error and info messages
- **Textarea** (13-9779) - Complete textarea with labels and character count
- **Textarea Field** (13-9683) - Textarea field component

### Select Components
- **Select** (13-9164) - Select dropdown, 2 sizes, custom dropdown

### Navigation Components
- **Tab Simple** (16-10569) - Simple tab with underline
- **Tabs Simple** (16-10618) - Container for simple tabs
- **Tab** (16-10646) - Tab with card-like appearance
- **Tabs** (16-10663) - Container for tabs
- **Breadcrumb** (16-10583) - Individual breadcrumb item
- **Breadcrumbs** (16-10602) - Breadcrumb navigation

### Feedback Components
- **Empty State** (16-10695) - Empty state with icon, title, description, and optional action button
- **Notification Message** (16-10728) - Notification message with icon, title, timestamp, content, optional actions
- **Notification Dialog** (16-11051) - Dialog container for multiple notification messages with filter switch

### Feedback Components
- **Alert** (16-10369) - Alert with 4 types, optional actions
- **Status** (15-10242) - Status indicator with colored dot
- **Notification Badge** (16-10265) - Badge for notifications
