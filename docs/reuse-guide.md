# Using the Design System in Other Projects

This guide explains how to install and use this design system in your projects.

## Overview

This design system is built with Vue.js and SCSS, using a component-based architecture with design tokens. All components use the `marks-` prefix for styles to avoid conflicts with other CSS.

**For development guidelines**, see [docs/instructions.md](./instructions.md).

## Installation Methods

### Method 1: Install from GitHub (Recommended)

Install the design system as an npm package directly from GitHub:

```bash
npm install git+https://github.com/Hipstacowboys/design-system.git
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@hipstacowboys/design-system": "git+https://github.com/Hipstacowboys/design-system.git"
  }
}
```

**To update to the latest version:**
```bash
npm update @hipstacowboys/design-system
```

**To install a specific version:**
```bash
npm install git+https://github.com/Hipstacowboys/design-system.git#v1.0.0
```

**Check current version:**
```bash
npm list @hipstacowboys/design-system
```

See [CHANGELOG.md](../CHANGELOG.md) for version history and changes.

### Method 2: Copy Files Manually

If you prefer to copy files directly:

1. Copy the following structure to your project:

```
your-project/
├── components/
│   ├── [All .vue component files]
│   └── README.md
├── tokens/
│   ├── _variables.scss (main import file - imports all others)
│   ├── _spacing.scss
│   ├── _typography-tokens.scss
│   ├── _typography-mixins.scss
│   ├── _typography.scss (utility classes - optional)
│   ├── _colors.scss
│   ├── colors-light.scss
│   └── colors-dark.scss
```

2. Install dependencies:
```bash
npm install @phosphor-icons/vue
```

## Usage (GitHub Installation)

### 1. Install Dependencies

The design system requires `@phosphor-icons/vue`. It should be installed automatically, but if not:

```bash
npm install @phosphor-icons/vue vue
```

### 2. Import Design Tokens

In your main SCSS file or component styles, import the variables:

```scss
@import 'node_modules/@hipstacowboys/design-system/tokens/_variables';
```

Or if using a build tool with path resolution:

```scss
@import '@hipstacowboys/design-system/tokens/_variables';
```

The `_variables.scss` file imports all necessary token files (colors, spacing, typography).

### 3. Import and Register Components

**Option A: Import all components**

```javascript
import { createApp } from 'vue';
import * as marksComponents from '@hipstacowboys/design-system';

const app = createApp(App);

// Register all components globally
Object.keys(marksComponents).forEach(name => {
  app.component(name, marksComponents[name]);
});

app.mount('#app');
```

**Option B: Import specific components**

```javascript
import { createApp } from 'vue';
import { 
  ButtonPrimary, 
  ButtonSecondary,
  Input,
  CalendarDatepicker 
} from '@hipstacowboys/design-system';

const app = createApp(App);

// Register components globally
app.component('ButtonPrimary', ButtonPrimary);
app.component('ButtonSecondary', ButtonSecondary);
app.component('Input', Input);
app.component('CalendarDatepicker', CalendarDatepicker);

app.mount('#app');
```

**Option C: Use locally in components**

```vue
<script>
import { ButtonPrimary, Input } from '@hipstacowboys/design-system';

export default {
  components: {
    ButtonPrimary,
    Input
  }
}
</script>
```

## Usage (Manual Copy)

### 1. Import Design Tokens

In your main SCSS file or component styles:

```scss
@import './tokens/_variables';
```

### 2. Register Components

In your Vue app (main.js or similar):

```javascript
import { createApp } from 'vue';
import ButtonPrimary from './components/ButtonPrimary.vue';
import ButtonSecondary from './components/ButtonSecondary.vue';

const app = createApp(App);

app.component('ButtonPrimary', ButtonPrimary);
app.component('ButtonSecondary', ButtonSecondary);

app.mount('#app');
```

Or use them locally in components:

```vue
<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default {
  components: {
    ButtonPrimary
  }
}
</script>
```

## Using Components

### Basic Usage

All components are data-driven. Pass data via props:

```vue
<template>
  <ButtonPrimary 
    size="medium" 
    text="Click Me" 
    :disabled="false"
  />
</template>

<script>
import { ButtonPrimary } from '@hipstacowboys/design-system';

export default {
  components: {
    ButtonPrimary
  }
}
</script>

<style lang="scss">
@import '@hipstacowboys/design-system/tokens/_variables';
// Your styles here
</style>
```

### Icons

Icons must be imported and passed as props. For reactivity, add them to component's `data()`:

```vue
<script>
import { PhBed, PhCalendar } from '@phosphor-icons/vue';

export default {
  components: {
    PhBed,
    PhCalendar
  },
  data() {
    return {
      PhBed,  // Required for prop binding
      PhCalendar
    }
  }
}
</script>

<template>
  <ButtonPrimary 
    size="medium" 
    text="Book Now"
    :left-icon="PhBed"
  />
</template>
```

**Icon Weight Rules:**
- Icons 19px and smaller: Use `weight="bold"`
- Icons 20px and above: Use `weight="regular"`

### Design Tokens

#### Colors

Use CSS custom properties:

```scss
.my-component {
  color: var(--marks-color-gray-500);
  background: var(--marks-color-white);
  border-color: var(--marks-color-gray-200);
}
```

Colors support light/dark mode automatically when theme is set on `:root` or `html` element.

#### Spacing

Use CSS custom properties for spacing:

```scss
.my-component {
  padding: var(--marks-spacing-gutter-16);
  margin: var(--marks-spacing-gutter-24);
  gap: var(--marks-spacing-gutter-8);
}
```

#### Border Radius

Use CSS custom properties:

```scss
.my-component {
  border-radius: var(--marks-radius-8);
  border-radius: var(--marks-radius-12);
  border-radius: var(--marks-radius-16);
}
```

#### Typography

Use SCSS mixins in component styles:

```scss
@import '../tokens/variables';

.my-component {
  @include marks-typography-paragraph-md-multiline;
  // or
  @include marks-typography-h3-bold;
}
```

Or use token variables directly:

```scss
.my-component {
  font-size: $marks-font-size-md;
  font-weight: $marks-font-weight-bold;
  line-height: $marks-line-height-md;
}
```

## Component Props Documentation

See `COMPONENTS.md` for complete documentation of all components, including:
- Available props
- Events
- Slots
- Usage examples

## Styling Guidelines

1. **Always use design tokens** - Never hardcode colors, spacing, or typography values
2. **Use `marks-` prefix** - All component classes use this prefix to avoid conflicts
3. **Scoped styles** - Components use `<style lang="scss" scoped>` to prevent style leakage
4. **Colors in components** - Colors are defined within components, not in base typography styles

## Theme Support

The design system supports light and dark modes. Set the theme on the root element:

```javascript
// Light mode
document.documentElement.setAttribute('data-theme', 'light');

// Dark mode
document.documentElement.setAttribute('data-theme', 'dark');
```

Color tokens automatically switch based on the theme attribute.

## Customization

### Overriding Styles

To override component styles, use `:deep()` selector:

```scss
.my-wrapper {
  :deep(.marks-button--primary) {
    background-color: custom-color;
  }
}
```

### Extending Components

Components are designed to be data-driven. Extend functionality by:
- Passing different props
- Using slots where available
- Wrapping components in your own components

## Best Practices

1. **Import only what you need** - Don't import all components if you only use a few
2. **Use v-model** - Components that support it use standard Vue v-model pattern
3. **Check COMPONENTS.md** - Always refer to component documentation for available props
4. **Follow icon rules** - Use correct icon weights based on size
5. **Use tokens** - Always use design tokens instead of hardcoded values

## Troubleshooting

### Icons not showing
- Ensure icons are imported from `@phosphor-icons/vue`
- For prop binding, add icon to component's `data()` section
- Check icon name is correct (use Phosphor Icons website for reference)

### Styles not applying
- Ensure `tokens/_variables.scss` is imported (note the underscore)
- Check that CSS custom properties are available (inspect element)
- Verify component classes use `marks-` prefix
- Check import paths are correct:
  - For GitHub install: `@import '@hipstacowboys/design-system/tokens/_variables';`
  - For manual copy: `@import './tokens/_variables';`
- If using Vite/Webpack, you may need to configure path aliases

### Colors not switching
- Check `data-theme` attribute is set on root element
- Verify color token files are imported via `_variables.scss`
- Ensure you're using CSS custom properties, not SCSS variables directly

### Typography mixins not working
- Ensure `_typography-mixins.scss` is imported (via `_variables.scss`)
- Use full mixin names with suffixes: `-multiline`, `-one-line`, `-bold`, etc.
- Check `COMPONENTS.md` for available typography mixins
