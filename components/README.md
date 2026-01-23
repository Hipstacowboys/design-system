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

.desys-component-name {
  // Typography: Use mixins (recommended - easier to read)
  @include desys-typography-paragraph-sm;
  
  // Or use individual token variables for customization
  // font-size: $desys-font-size-sm;
  // font-weight: $desys-font-weight-regular;
  // line-height: $desys-line-height-sm;
  
  // Spacing: Use CSS custom properties
  padding: var(--desys-spacing-gutter-16);
  border-radius: var(--desys-radius-8);
  
  // Colors: Use CSS custom properties (components define colors)
  color: var(--desys-color-gray-500);
  background: var(--desys-color-white);
}
</style>
```

## Typography Usage

**Available Mixins:**
- Headers: `@include desys-typography-h1-regular;`, `@include desys-typography-h1-bold;`, etc. (H1-H5)
- Paragraphs: `@include desys-typography-paragraph-lg;`, `@include desys-typography-paragraph-md-multiline;`, `@include desys-typography-paragraph-sm-bold;`, etc.
- Buttons: `@include desys-typography-button-lg;`, `@include desys-typography-button-md;`, `@include desys-typography-button-sm;`

**Available Token Variables:**
- Font sizes: `$desys-font-size-xs`, `$desys-font-size-sm`, `$desys-font-size-md`, `$desys-font-size-lg`, `$desys-font-size-h1` through `$desys-font-size-h5`
- Font weights: `$desys-font-weight-regular` (400), `$desys-font-weight-medium` (500), `$desys-font-weight-bold` (700)
- Line heights: `$desys-line-height-sm`, `$desys-line-height-md`, `$desys-line-height-lg`, `$desys-line-height-h1` through `$desys-line-height-h5`
- Font family: `$desys-font-family`

**Important:** Do NOT use utility classes (`.desys-h1-regular`, etc.) in components. They are for preview/documentation only.

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
