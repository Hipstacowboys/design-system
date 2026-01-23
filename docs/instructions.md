# Design System Instructions

## Core Principles

1. **Update vital and key information from chat and update docs/documentation.md**
   - Be minimalistic - only add truly important information
   - Update when there are key decisions, patterns, or conventions established

2. **Figma is the source of truth**
   - All design specifications come from Figma design system file
   - Track Figma node IDs for each component in component files

3. **Variables from JSON files only**
   - Use color tokens from JSON files (light/dark modes)
   - Use spacing tokens (gutters, radiuses) from JSON files
   - Typography tokens defined in `_typography-tokens.scss` (from Figma styles)
   - Do not hardcode values - always use variables

4. **Typography in Components**
   - Use mixins: `@include desys-typography-paragraph-sm;`
   - Or use token variables: `font-size: $desys-font-size-sm;`
   - Do NOT use utility classes (`.desys-h1-regular`) in components
   - Utility classes are for preview/documentation only

5. **Component structure**
   - Each component variation (Size, Type) = separate component
   - States (default, hover, clicked, disabled) handled within components
   - Show all variations in grid + one compound component for state interactions
   - Store components as separate .vue files
   - Styles in design-system.scss with desys- prefix

6. **Reusability**
   - Components use desys- prefix for styles
   - Components are data-driven (push data to them, not hardcoded)
   - Design system can be used across multiple projects

7. **Icon Weight Rules**
   - Icons 19px and smaller: Use `weight="bold"`
   - Icons 20px and above: Use `weight="regular"`
