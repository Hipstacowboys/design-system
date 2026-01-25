# Design System Instructions

Complete guide for working with and maintaining the design system.

## Core Principles

1. **Figma is the source of truth**
   - All design specifications come from Figma design system file
   - Track Figma node IDs for each component in component files
   - Always reference Figma designs when implementing components

2. **Variables from JSON files only**
   - Use color tokens from JSON files (light/dark modes)
   - Use spacing tokens (gutters, radiuses) from JSON files
   - Typography tokens defined in `_typography-tokens.scss` (from Figma styles)
   - **Never hardcode values** - always use design tokens

3. **Typography in Components**
   - Use mixins: `@include marks-typography-paragraph-sm;`
   - Or use token variables: `font-size: $marks-font-size-sm;`
   - Do NOT use utility classes (`.marks-h1-regular`) in components
   - Utility classes are for preview/documentation only

4. **Component structure**
   - Each component variation (Size, Type) = separate component
   - States (default, hover, clicked, disabled) handled within components
   - Show all variations in grid + one compound component for state interactions
   - Store components as separate .vue files
   - Styles use `marks-` prefix

5. **Reusability**
   - Components use `marks-` prefix for styles to avoid conflicts
   - Components are data-driven (push data to them, not hardcoded)
   - Design system can be used across multiple projects

6. **Icon Weight Rules**
   - Icons 19px and smaller: Use `weight="bold"`
   - Icons 20px and above: Use `weight="regular"`
   - Icons passed as props need to be in component's `data()` for reactivity

## Documentation Structure

- **README.md** - Project overview and quick start
- **COMPONENTS.md** - Complete component reference with props, events, and usage
- **CHANGELOG.md** - Version history and changes
- **docs/instructions.md** (this file) - Development guidelines
- **docs/reuse-guide.md** - How to use the design system in other projects

## Working with Components

### Creating New Components

1. Create component file in `components/` directory
2. Add Figma Node ID in component comment
3. Use design tokens for all styling (colors, spacing, typography)
4. Document props in component file comments
5. Update `COMPONENTS.md` with component documentation
6. Add component to `index.js` for package exports
7. Add to preview app for testing

### Component Template

```vue
<!--
  Figma Node ID: XX-XXXXX
  Component: Component Name
  Variants: variant1, variant2
  States: default, hover, active, disabled
  
  Props:
  - propName (Type, default: value) - Description
  
  Events:
  - event-name - Description
-->
<template>
  <div :class="['marks-component-name', `marks-component-name--${variant}`]">
    <!-- Component markup -->
  </div>
</template>

<script>
export default {
  name: 'marksComponentName',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['variant1', 'variant2'].includes(value)
    }
  },
  emits: ['event-name']
}
</script>

<style lang="scss" scoped>
@import '../tokens/_variables';

.marks-component-name {
  @include marks-typography-paragraph-md-multiline;
  padding: var(--marks-spacing-gutter-16);
  border-radius: var(--marks-radius-12);
  color: var(--marks-color-gray-500);
  background: var(--marks-color-white);
}
</style>
```

## Versioning and Releases

### Automated Release Process

The design system uses automated versioning. You only need to:

1. **Add changes to CHANGELOG.md** in the `[Unreleased]` section as you work
2. **When ready to release**, run one command:
   ```bash
   npm run release:patch   # For bug fixes (1.0.0 → 1.0.1)
   npm run release:minor   # For new features (1.0.0 → 1.1.0)
   npm run release:major   # For breaking changes (1.0.0 → 2.0.0)
   ```

The script automatically:
- ✅ Updates `package.json` version
- ✅ Moves `[Unreleased]` items to new version section in CHANGELOG.md
- ✅ Creates git commit
- ✅ Creates git tag
- ✅ Pushes to GitHub

### Changelog Format

Always document changes in `CHANGELOG.md` under `[Unreleased]`:

```markdown
## [Unreleased]

### Added
- New CalendarDatepicker component
- Support for custom icon colors

### Changed
- Updated ButtonPrimary to support new size variant
- Improved accessibility in Input component

### Fixed
- Fixed border radius issue in Calendar component
- Resolved icon alignment in ButtonSecondary
```

Categories:
- **Added** - New components, features, or capabilities
- **Changed** - Changes to existing components or behavior
- **Deprecated** - Features that will be removed in future versions
- **Removed** - Removed components or features
- **Fixed** - Bug fixes
- **Security** - Security-related fixes

### Version Types

- **PATCH** (1.0.0 → 1.0.1): Bug fixes, documentation updates, minor improvements
- **MINOR** (1.0.0 → 1.1.0): New features or components (backward compatible)
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes that require updates in consuming projects

## Using Design Tokens

### Colors

```scss
.my-component {
  color: var(--marks-color-gray-500);
  background: var(--marks-color-white);
  border-color: var(--marks-color-gray-200);
}
```

Colors support light/dark mode automatically when theme is set on root element.

### Spacing

```scss
.my-component {
  padding: var(--marks-spacing-gutter-16);
  margin: var(--marks-spacing-gutter-24);
  gap: var(--marks-spacing-gutter-8);
}
```

Available: `gutter-0`, `gutter-4`, `gutter-8`, `gutter-12`, `gutter-16`, `gutter-20`, `gutter-24`, `gutter-28`, `gutter-32`, `gutter-36`, `gutter-40`, `gutter-56`, `gutter-72`, `gutter-80`

### Border Radius

```scss
.my-component {
  border-radius: var(--marks-radius-8);
  border-radius: var(--marks-radius-12);
  border-radius: var(--marks-radius-16);
}
```

Available: `radius-0`, `radius-8`, `radius-12`, `radius-16`, `radius-24`, `radius-full`

### Typography

Use mixins (recommended):
```scss
.my-component {
  @include marks-typography-paragraph-md-multiline;
  @include marks-typography-h3-bold;
}
```

Or use token variables:
```scss
.my-component {
  font-size: $marks-font-size-md;
  font-weight: $marks-font-weight-bold;
  line-height: $marks-line-height-md;
}
```

## Using the Design System in Other Projects

See [docs/reuse-guide.md](./reuse-guide.md) for complete instructions.

### Quick Start

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

4. **Update to latest:**
   ```bash
   npm update @hipstacowboys/design-system
   ```

## AI Assistant Instructions

When helping with this design system:

1. **Always use design tokens** - Never suggest hardcoded values
2. **Check COMPONENTS.md** - Verify component props, events, and usage
3. **Update CHANGELOG.md** - Document changes in `[Unreleased]` section
4. **Follow component template** - Use the structure shown above
5. **Icon handling** - Icons must be in `data()` for prop binding
6. **Use `marks-` prefix** - All component classes use this prefix
7. **Document props** - Always document props in component comments and COMPONENTS.md

## Best Practices

1. **Test components** - Add to preview app before committing
2. **Document changes** - Update CHANGELOG.md as you work
3. **Use semantic HTML** - For accessibility
4. **Follow naming conventions** - `marks-component-name__element--modifier`
5. **Keep components focused** - One component, one responsibility
6. **Make components reusable** - Data-driven via props, not hardcoded
