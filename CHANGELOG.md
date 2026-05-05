# Changelog

All notable changes to this design system will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 

### Changed
- 

### Fixed
- 

## [1.5.5] - 2026-05-01

### Added
- Documentation header now switches between the documentation site and the comparison page.
- Comparison page title links now point to the related component documentation pages.
- The comparison page is included in the Vite multi-page production build.
- Root `.gitignore` for local dependencies, generated output, OS files, environment files, and local build artifacts.

### Changed
- Reworked introduction content to describe the Marks Design System as public-facing documentation, removing internal build pipeline and technology stack details.
- Updated the comparison page content examples to use realistic copy instead of placeholder text.
- Moved SCSS compilation to `npm run build:css` and removed the CodeKit-based public workflow.
- Published package contents now include `design-system.css` for documented CSS imports.

### Fixed
- Design system logo in the top navigation now links to `/documentation/introduction.html`.
- Comparison page header spacing now clears the fixed top navigation.
- Dark comparison titles now use a higher-contrast color.
- Design token documentation now references the correct `@hipstacowboys/design-system` package name.

### Removed
- Removed the inaccessible "Common icons used" section from the Icons documentation.
- Removed tracked `node_modules`, generated `dist` output, `.DS_Store` files, duplicate generated HTML docs, `stdout` artifacts, CodeKit config, minified Vite config, and the unused `interface-design` submodule entry from version control.

### Security
- Updated npm dependency lockfile with `npm audit fix`; `npm audit --audit-level=moderate` reports zero vulnerabilities.


## [1.5.4] - 2026-04-13

### Added
- Foundation documentation pages under `/documentation/`: Introduction, Getting Started, Design Tokens, Icons, and Theming (mirroring README-style setup and token reference)
- Shared `DocHeader.vue` and `DocNav.vue` in `src/docs/` so every documentation page uses one consistent header and left navigation (Foundations + Components) driven by an `activePage` slug

### Changed
- Documentation site navigation is maintained in `DocNav.vue` / `DocHeader.vue` instead of duplicated markup in each `*DocPage.vue`

### Removed
- Contributing documentation page (`documentation/contributing.html`, `src/docs/contributing-doc.js`, `ContributingDocPage.vue`) and its Vite build entry

### Fixed
-


## [1.5.3] - 2026-04-10

### Added
- 

### Changed
- 

### Fixed
-


## [1.5.2] - 2026-04-10

### Added
- Component documentation site in `/documentation/` folder with three-column layout (component nav, content, code aside)
- Button deep-dive documentation page (`documentation/button.html`) with all 9 standard sections: Purpose, Anatomy & sizing (with spacing/padding visualization using semantic tokens), Variants & all states (4 states × 7 variant configs per button type), Behavior rules, Content rules, Accessibility, Examples & anti-patterns, API/Props, Theming & dark mode
- Toggle + ToggleWithLabel documentation page (`documentation/toggle.html`) following the same 9-section structure with live interactive demos, anatomy diagrams, state tables, and dark mode preview
- Code snippet aside with three tabs (Vue, HTML, SCSS) and syntax highlighting on all documentation pages
- Dark mode live preview on documentation pages using manual `--marks-color-*` token overrides with `#000000` background
- Forced hover/clicked state visualization in variant tables via non-scoped CSS overrides
- Documentation creation instructions (`docs/documentation-instructions.md`) for building new component pages
- Left nav component switcher shared across all documentation pages

### Changed
- Moved button documentation from `docs/button.html` to `documentation/button.html`
- Vite config updated with multi-page entries for both documentation pages

### Fixed
-


## [1.5.1] - 2026-03-13

### Added
- 

### Changed
- 

### Fixed
-


## [1.5.0] - 2026-03-05

### Added
- 

### Changed
- 

### Fixed
-


## [1.4.0] - 2026-03-05

### Added
- 

### Changed
- 

### Fixed
-


## [1.3.4] - 2026-02-07

### Added
- 

### Changed
- 

### Fixed
-


## [1.3.3] - 2026-02-07

### Added
- 

### Changed
- 

### Fixed
-


## [1.3.2] - 2026-02-07

### Added
- 

### Changed
- InputField (medium): Added `line-height: 18px` and `appearance: none` to inner input (`.marks-input-field__input`) to prevent height inconsistencies and ensure consistent 18px line-height
- Select (medium): Added `line-height: 1.5`, `box-sizing: border-box`, and changed padding to `padding-top/bottom: 14px` (from 16px) to align with medium Button height and account for 2px border. Select addon padding remains `0` when used in InputField
- Select dropdown: Added `min-width: 200px` to dropdown panel for better usability
- Button (medium): Added `line-height: 1.5` and `box-sizing: border-box` to `.marks-button--medium` across all button types (Primary, Secondary, Line, Ghost) to ensure consistent heights with Select and InputField

### Fixed
-


## [1.3.1] - 2026-02-06

### Added
- 

### Changed
- Button loading spinner refactored from SVG-based to CSS-based ring loader across all button types (Primary, Secondary, Line, Ghost). The new implementation uses pure CSS with 4 animated divs creating a spinning ring effect that rotates around its center without oscillation. Loader dimensions scale automatically based on button size (small: 12px ring, medium/large: 16px ring) and uses `currentColor` for theme consistency

### Fixed
- Fixed button loading spinner to spin around its center without oscillation by replacing SVG-based approach with CSS ring loader


## [1.3.0] - 2026-02-06

### Added
- Button loading state for Primary, Secondary, Line, and Ghost: new `loading` prop shows a spinning loader, uses clicked-state styling, and makes the button non-clickable (all sizes: small, medium, large). New `loadingIconPosition` prop (`'left' | 'right' | 'only'`) for: text + left spinner, text + right spinner, or spinner only. Loader uses `currentColor` so it matches the button's text/icon color

### Changed
- 

### Fixed
-


## [1.2.5] - 2026-02-04

### Added
- 

### Changed
- 

### Fixed
-


## [1.2.4] - 2026-02-04

### Added
- 

### Changed
- Table card container (`.marks-table`) now uses `overflow: visible` so dropdowns and other content in table cells can extend beyond the card boundary without being clipped
- Table header now has top-left and top-right border-radius of 8px to visually match the table card radius when content overflows

### Fixed
-


## [1.2.3] - 2026-02-04

### Added
- Safer internal ID handling for `Checkbox`, `Radio`, `Input`, and `Textarea` components (per-instance generated IDs instead of relying on Vue’s private `_uid`)

### Changed
- Preview page now treats all Phosphor icon components used as props or slot data as non-reactive (`markRaw`) to avoid unnecessary reactivity overhead in examples

### Fixed
- Resolved Vue warnings about “Property `_uid` was accessed during render but is not defined on instance” by removing `_uid` from public API usage in form components
- Resolved remaining “Component that was made a reactive object” warnings for icons used in `Booking`, `Place`, `Widget`, `CalendarDatepicker`, and preview-only examples


## [1.2.2] - 2026-02-04

### Added
- Global helper classes for table cells combining long, truncated text with a fixed-position action button (`.marks-table__cell-with-action*`)
- Updated table preview example showing URL + “Copy” button using the new helper layout

### Changed
- Table actions column now supports scoped slots (`cell-{id}` or `cell-actions`) to fully customize per-row actions content, with a fallback to the built-in three-dots button

### Fixed
- Resolved Vue warnings about “Component that was made a reactive object” by wrapping internal Phosphor icon components in `markRaw` within `WeekPricingDay` and `Table`


## [1.2.1] - 2026-02-04

### Added
-

### Changed
- NavbarSide `theme` prop now sets a local `data-theme` attribute so each navbar instance can render independently in light or dark mode
- Color token selectors now target `[data-theme="light"]` / `[data-theme="dark"]` in addition to the root, enabling scoped theming per component

### Fixed
 - Fixed NavbarSide dark mode not applying correctly when used in apps that do not set `data-theme="dark"` on `:root`


## [1.2.0] - 2026-02-03

### Added
- New standalone comparison page (`comparison.html`) with two-column light/dark mode comparison view
- Table component text truncation support with `truncate` prop for columns (displays ellipsis for long text)
- Table component custom cell slot support for advanced cell content (e.g., truncated URLs with action buttons)
- NavbarSide component `theme` prop support (light/dark)
- NavbarItem component `theme` prop support (light/dark)
- BookingInCalendar component `theme` prop support (light/dark)

### Changed
- **BREAKING**: Table component refactored from div-based layout to semantic HTML (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) for better accessibility and native table behavior
- Table component cell styling: min-height 44px, paragraph-sm typography, gray-300 text color
- Table component status cells now use `variant="default"` (slimmer style without background)
- Table component action cell padding changed to 8px vertical and horizontal
- Table component cell alignment: cells use `vertical-align: top` for multi-line content, inner wrapper uses flex center for single-line content
- Table component checkbox and action columns now have fixed widths (66px and 72px respectively)
- Table component header cells: removed sort SVG icon
- Table component last row: removed bottom border
- Removed Light/Dark Comparison section from preview-vue page (moved to standalone comparison.html)
- NavbarItem dark mode colors now use CSS variables instead of hardcoded values for better theme consistency
- CalendarDay component: removed min-width constraints for month and year variants
- BookingInCalendar component: status badge now circular (44px × 44px) with white text in both themes
- BookingInCalendar component: pax text color now theme-aware (black in light mode, white in dark mode)
- BookingInCalendar component: dark mode now uses correct CSS variables (e.g., red-300 for month variant background)
 - **BREAKING**: Renamed spacing CSS custom properties from `--marks-spacing-gutter-x` to `--marks-spacing-x` across tokens, styles, and documentation

### Fixed
- Fixed Table component row height to dynamically adjust based on cell content (multi-line text support)
- Fixed Table component cell content vertical alignment (centered for single-line, top-aligned for multi-line)
- Fixed Table component column width calculation (removed flex display from header cells to allow native table layout)
- Fixed Table component to remove third column (URL column) from default configuration
- Fixed Radio and RadioWithLabel components to display 3 options each in comparison view
- Fixed NavbarSide dark mode colors to match original design using CSS variables
- Fixed NavbarItem active icon color in light mode (now white as per design)
- Fixed BookingInCalendar dark mode background colors to use appropriate CSS variables
- Fixed component alignment in comparison view (right-aligned in light column, left-aligned in dark column)
- Fixed component widths in comparison view (Small Switch 420px, Tabs 500px, Tabs Simple 450px, Navbar 300px, Calendar maxWidth 870px, Place and Widget 400px)


## [1.1.5] - 2026-01-30

### Added
- 

### Changed
- Migrated Sass from `@import` to `@use`/`@forward` across tokens, design-system.scss, preview.scss, and all Vue components to eliminate Sass deprecation warnings

### Fixed
- Fixed "Undefined mixin" errors when using design system with Vite by adding `@forward` for typography-tokens and typography-mixins in `tokens/_variables.scss` so components that `@use` the variables file receive mixins and variables


## [1.1.4] - 2026-01-25

### Added
- 

### Changed
- 

### Fixed
-


## [1.1.3] - 2026-01-25

### Added
- 

### Changed
- **BREAKING**: Renamed design system prefix from `desys-` to `marks-` across all components, tokens, and styles
  - All CSS custom properties now use `--marks-` prefix (e.g., `--marks-color-primary-solid`)
  - All component class names now use `marks-` prefix (e.g., `.marks-button`)
  - All SCSS variables and mixins now use `marks-` prefix (e.g., `$marks-font-weight-bold`)

### Fixed
-


## [1.1.2] - 2026-01-25

### Added
- 

### Changed
- CalendarDatepicker now uses ButtonLine component for navigation buttons instead of custom implementation

### Fixed
- Fixed CalendarDatepicker month title color in dark mode (now displays white)
- Fixed CalendarDatepicker navigation button icons visibility (now properly passed via data() for prop binding)
- Fixed CalendarDatepicker navigation buttons to use consistent hover styles matching other line buttons


## [1.1.1] - 2026-01-25

### Added
- 

### Changed
- 

### Fixed
-


## [1.1.0] - 2026-01-25

### Added
- Automated release script for versioning
- Comprehensive documentation consolidation
- Package installation from GitHub support

### Changed
- Consolidated documentation (removed duplicate HTML files)
- Updated instructions.md with complete development guidelines
- Streamlined versioning process (automated changelog updates)

### Fixed


## [1.0.0] - 2026-01-23

### Added
- **Form Components**
  - Toggle component with 6 states
  - Toggle with Label component
  - Checkbox component with 4 states
  - Checkbox with Label component
  - Radio component with multiple states
  - Radio with Label component

- **Button Components**
  - ButtonPrimary component (3 sizes, 4 states)
  - ButtonSecondary component (3 sizes, 4 states)
  - ButtonLine component (3 sizes, 4 states)
  - ButtonGhost component (3 sizes, 4 states)

- **Input Components**
  - Input component with labels and messages
  - InputField component with addons and icons
  - InputMessage component for errors and info
  - Textarea component with labels and character count
  - TextareaField component

- **Select Components**
  - Select component with custom dropdown (2 sizes)

- **Navigation Components**
  - TabSimple component
  - TabsSimple container component
  - Tab component with card-like appearance
  - Tabs container component
  - Breadcrumb component
  - Breadcrumbs navigation component

- **Feedback Components**
  - EmptyState component
  - NotificationMessage component
  - NotificationDialog component
  - Alert component (4 types)
  - Status component
  - NotificationBadge component

- **Calendar Components**
  - CalendarDay component (month/year variants, multiple states)
  - Calendar component (month view grid)
  - CalendarDatepicker component (compact datepicker with navigation)
  - BookingInCalendar component (booking display for calendar cells)

- **Other Components**
  - HorizontalSwitch component
  - Tooltip component
  - NavbarItem component
  - NavbarSide component
  - WeekPricingDay component
  - Dropdown component
  - Booking component
  - Widget component
  - Place component
  - CardWithCounter component
  - SmallSwitch component
  - SmallSwitchOption component
  - BigSwitch component

- **Design Tokens**
  - Color tokens (light/dark mode support)
  - Spacing tokens (gutters 0-80px)
  - Border radius tokens (0, 8px, 12px, 16px, 24px, full)
  - Typography tokens and mixins

- **Documentation**
  - COMPONENTS.md with complete component reference
  - Reuse guide for integration
  - Package installation guide
  - Component props documentation

### Features
- All components use `marks-` prefix for styles
- Components are data-driven (props-based)
- Support for Phosphor Icons with size/weight rules
- Theme support (light/dark mode)
- Responsive design patterns
- Accessibility features (semantic HTML, ARIA attributes)

[Unreleased]: https://github.com/Hipstacowboys/design-system/compare/v1.5.5...HEAD
[1.5.5]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.5
[1.5.4]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.4
[1.5.3]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.3
[1.5.2]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.2
[1.5.1]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.1
[1.5.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.5.0
[1.4.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.4.0
[1.3.4]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.3.4
[1.3.3]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.3.3
[1.3.2]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.3.2
[1.3.1]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.3.1
[1.3.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.3.0
[1.2.5]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.5
[1.2.4]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.4
[1.2.3]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.3
[1.2.2]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.2
[1.2.1]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.1
[1.2.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.2.0
[1.1.5]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.5
[1.1.4]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.4
[1.1.3]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.3
[1.1.2]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.2
[1.1.1]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.1
[1.1.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.0
[1.0.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.0.0
