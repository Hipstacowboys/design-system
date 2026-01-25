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
- All components use `desys-` prefix for styles
- Components are data-driven (props-based)
- Support for Phosphor Icons with size/weight rules
- Theme support (light/dark mode)
- Responsive design patterns
- Accessibility features (semantic HTML, ARIA attributes)

[Unreleased]: https://github.com/Hipstacowboys/design-system/compare/v1.1.2...HEAD
[1.1.2]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.2
[1.1.1]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.1
[1.1.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.1.0
[1.0.0]: https://github.com/Hipstacowboys/design-system/releases/tag/v1.0.0
