# Design System Documentation

## Project Overview
Vue + SCSS design system built from Figma design system file. Source of truth is Figma, variables come from JSON token files.

## Key Information

### Technology Stack
- Vue.js
- SCSS
- JSON token files for variables
- Phosphor Icons (@phosphor-icons/vue) for iconography

### Icon Weight Rules
- **19px and smaller**: Use `weight="bold"`
- **20px and above**: Use `weight="regular"`

### Naming Convention
- Style prefix: `marks-`
- Components: Separate .vue files
- Styles: `design-system.scss`

### Component Structure
- Each variation (Size, Type) = separate component
- States: default, hover, clicked, disabled
- Display: Grid of all variations + compound component for state interactions

### Variable System

#### Colors
- Light/Dark mode tokens from JSON files
- CSS custom properties: `var(--marks-color-primary-solid)`, `var(--marks-color-gray-500)`, etc.
- Available in both light and dark themes

#### Spacing
- Gutters (0-80px) and radiuses (0-24px, full) from JSON files
- CSS custom properties: `var(--marks-spacing-gutter-16)`, `var(--marks-radius-8)`, etc.

#### Typography
**Structure:**
- `_typography-tokens.scss` - Base token variables (font sizes, weights, line heights)
- `_typography-mixins.scss` - Typography mixins for use in components
- `_typography.scss` - Utility classes (for preview/documentation only)

**Available Styles:**
- Headers: H1-H5 (regular 400 & bold 700)
- Paragraphs: Large (18px), Medium (15px - multiline, one-line, bold), Small (13px - multiline, one-line, bold), Extra Small (10px bold)
- Buttons: Large (16px), Medium (15px), Small (13px) - all with medium weight (500)

**Usage in Components:**
```scss
// Recommended: Use mixins (easier to read)
@include marks-typography-paragraph-sm;

// Or use individual token variables for customization
font-size: $marks-font-size-sm;
font-weight: $marks-font-weight-bold;
line-height: $marks-line-height-sm;
```

**Important:**
- Colors are defined in components, not in base typography styles
- Utility classes (`.marks-h1-regular`, etc.) are for preview/documentation only
- Components should use mixins or token variables, not utility classes
- No hardcoded values - always use variables

### Preview Environment
- **Vue Preview**: `preview-vue.html` - Interactive preview using Vite dev server
- **Entry Point**: `src/preview.js` mounts `PreviewApp.vue`
- **Styles**: Uses compiled `design-system.css` and `preview.css` (from Codekit)
- **Sections**: Colors, Spacing, Typography tokens + Components showcase
- **Theme Toggle**: Switch between light/dark modes

### Figma Integration
- Track Figma node IDs in component files
- Reference node IDs when updating components
