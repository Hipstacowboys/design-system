# Components

Each component in this directory follows this structure:

## Component File Structure
- `ComponentName.vue` - Main component file
- Each variation (Size, Type) = separate component file
- Example: `ButtonSmall.vue`, `ButtonMedium.vue`, `ButtonLarge.vue`

## Component Template
```vue
<template>
  <!-- Component markup -->
</template>

<script>
export default {
  name: 'ComponentName',
  // Component logic
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-component-name {
  // Typography: Use mixins (recommended - easier to read)
  @include marks-typography-paragraph-sm;
  
  // Or use individual token variables for customization
  // font-size: $marks-font-size-sm;
  // font-weight: $marks-font-weight-regular;
  // line-height: $marks-line-height-sm;
  
  // Spacing: Use CSS custom properties
  padding: var(--marks-spacing-16);
  border-radius: var(--marks-radius-8);
  
  // Colors: Use CSS custom properties (components define colors)
  color: var(--marks-color-gray-500);
  background: var(--marks-color-white);
}
</style>
```

## Typography Usage

**Available Mixins:**
- Headers: `@include marks-typography-h1-regular;`, `@include marks-typography-h1-bold;`, etc. (H1-H5)
- Paragraphs: `@include marks-typography-paragraph-lg;`, `@include marks-typography-paragraph-md-multiline;`, `@include marks-typography-paragraph-sm-bold;`, etc.
- Buttons: `@include marks-typography-button-lg;`, `@include marks-typography-button-md;`, `@include marks-typography-button-sm;`

**Available Token Variables:**
- Font sizes: `$marks-font-size-xs`, `$marks-font-size-sm`, `$marks-font-size-md`, `$marks-font-size-lg`, `$marks-font-size-h1` through `$marks-font-size-h5`
- Font weights: `$marks-font-weight-regular` (400), `$marks-font-weight-medium` (500), `$marks-font-weight-bold` (700)
- Line heights: `$marks-line-height-sm`, `$marks-line-height-md`, `$marks-line-height-lg`, `$marks-line-height-h1` through `$marks-line-height-h5`
- Font family: `$marks-font-family`

**Important:** Do NOT use utility classes (`.marks-h1-regular`, etc.) in components. They are for preview/documentation only.

## Icons
We use **Phosphor Icons** for all iconography in the design system.

**Installation:** Already installed as `@phosphor-icons/vue`

**Icon Weight Rules:**
- **19px and smaller**: Use `weight="bold"`
- **20px and above**: Use `weight="regular"`

**Usage in Components:**
```vue
<script>
import { PhCheck, PhMinus, PhHeart } from '@phosphor-icons/vue';

export default {
  components: {
    PhCheck,
    PhMinus,
    PhHeart
  }
}
</script>

<template>
  <!-- Small icon (16px) - use bold -->
  <PhCheck :size="16" color="white" weight="bold" />
  
  <!-- Large icon (24px) - use regular -->
  <PhHeart :size="24" color="red" weight="regular" />
</template>
```

**Passing Icons as Props:**
When passing icon components as props to other components (e.g., `:icon="PhBed"`), the icon must be available in the template scope. In parent components, add the icon to the `data()` section, not just the `components` section:

```vue
<script>
import { PhBed } from '@phosphor-icons/vue';

export default {
  components: {
    PhBed  // Register for direct use in template
  },
  data() {
    return {
      PhBed  // Add to data for prop binding
    }
  }
}
</script>

<template>
  <MyComponent :icon="PhBed" />
</template>
```

**Available Props:**
- `size`: number | string - Icon size (default: "1em")
- `color`: string - Icon color (default: "currentColor")
- `weight`: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" - Icon weight
- `mirrored`: boolean - Flip horizontally (for RTL)

**Explore Icons:** https://phosphoricons.com

## Figma Tracking
Each component should include a comment with the Figma node ID:
```vue
<!--
  Figma Node ID: [node-id-here]
  Component variations: [list variations]
-->
```
