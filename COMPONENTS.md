# Design System Components

Complete list of all components in the design system.

## Form Components

### Toggle
- **File**: `Toggle.vue`
- **Figma Node ID**: 15-10129
- **Description**: Toggle switch component
- **States**: default on/off, hover on/off, disabled on/off
- **Props**: `modelValue` (Boolean), `disabled` (Boolean)

### Toggle with Label
- **File**: `ToggleWithLabel.vue`
- **Figma Node ID**: 15-10138
- **Description**: Toggle with title text and optional paragraph
- **Props**: `modelValue` (Boolean), `disabled` (Boolean), `title` (String), `paragraph` (String)

### Checkbox
- **File**: `Checkbox.vue`
- **Figma Node ID**: 15-10095
- **Description**: Checkbox component
- **States**: unchecked, checked, indeterminate, disabled
- **Props**: `modelValue` (Boolean), `indeterminate` (Boolean), `disabled` (Boolean)

### Checkbox with Label
- **File**: `CheckboxWithLabel.vue`
- **Figma Node ID**: 15-10095
- **Description**: Checkbox with title text and optional paragraph
- **Props**: `modelValue` (Boolean), `indeterminate` (Boolean), `disabled` (Boolean), `title` (String), `paragraph` (String)

### Radio
- **File**: `Radio.vue`
- **Figma Node ID**: 15-10163
- **Description**: Radio button component
- **States**: unchecked, checked, hover (unchecked/checked), disabled
- **Props**: `modelValue`, `value`, `name` (String), `disabled` (Boolean)

### Radio with Label
- **File**: `RadioWithLabel.vue`
- **Figma Node ID**: 15-10163
- **Description**: Radio with title text and optional paragraph
- **Props**: `modelValue`, `value`, `name` (String), `disabled` (Boolean), `title` (String), `paragraph` (String)

## Button Components

### Button Primary
- **File**: `ButtonPrimary.vue`
- **Figma Node ID**: 13-9075
- **Description**: Primary button with black background
- **Sizes**: small, medium, large
- **States**: default, hover, clicked, disabled
- **Variations**: with text, icon-only, with left/right icons
- **Props**: `size` (String), `text` (String), `disabled` (Boolean), `iconOnly` (Boolean), `leftIcon`, `rightIcon`

### Button Secondary
- **File**: `ButtonSecondary.vue`
- **Figma Node ID**: 13-9075
- **Description**: Secondary button with gray background
- **Sizes**: small, medium, large
- **States**: default, hover, clicked, disabled
- **Variations**: with text, icon-only, with left/right icons
- **Props**: `size` (String), `text` (String), `disabled` (Boolean), `iconOnly` (Boolean), `leftIcon`, `rightIcon`

### Button Line
- **File**: `ButtonLine.vue`
- **Figma Node ID**: 13-9075
- **Description**: Line button with border
- **Sizes**: small, medium, large
- **States**: default, hover, clicked, disabled
- **Variations**: with text, icon-only, with left/right icons
- **Props**: `size` (String), `text` (String), `disabled` (Boolean), `iconOnly` (Boolean), `leftIcon`, `rightIcon`

### Button Ghost
- **File**: `ButtonGhost.vue`
- **Figma Node ID**: 13-9075
- **Description**: Ghost button with transparent background
- **Sizes**: small, medium, large
- **States**: default, hover, clicked, disabled
- **Variations**: with text, icon-only, with left/right icons
- **Props**: `size` (String), `text` (String), `disabled` (Boolean), `iconOnly` (Boolean), `leftIcon`, `rightIcon`

## Input Components

### Input
- **File**: `Input.vue`
- **Figma Node ID**: 13-9678
- **Description**: Complete input component with labels and message
- **Sizes**: small, medium
- **Props**: `modelValue`, `size` (String), `type` (String), `placeholder` (String), `label` (String), `labelRight` (String), `leadingAddon` (String), `leadingAddonSelect` (Boolean), `trailingAddon` (String), `trailingAddonSelect` (Boolean), `leftIcon`, `rightIcon`, `disabled` (Boolean), `error` (Boolean), `message` (String), `messageType` (String)

### Input Field
- **File**: `InputField.vue`
- **Figma Node ID**: 13-9414
- **Description**: Input field with optional addons and icons
- **Sizes**: small, medium
- **States**: default, hover, filled, focused, disabled, error
- **Variations**: optional leading addon (select/text), left icon, right icon, trailing addon (select/text)
- **Props**: `modelValue`, `size` (String), `type` (String), `placeholder` (String), `leadingAddon` (String), `leadingAddonSelect` (Boolean), `trailingAddon` (String), `trailingAddonSelect` (Boolean), `leftIcon`, `rightIcon`, `disabled` (Boolean), `error` (Boolean)

### Input Message
- **File**: `InputMessage.vue`
- **Figma Node ID**: 13-9646
- **Description**: Error and info message component
- **Types**: error, info
- **Props**: `type` (String), `message` (String)

### Textarea
- **File**: `Textarea.vue`
- **Figma Node ID**: 13-9779
- **Description**: Complete textarea component with labels and character count
- **Props**: `modelValue`, `placeholder` (String), `rows` (Number), `label` (String), `labelRight` (String), `disabled` (Boolean), `error` (Boolean), `maxLength` (Number)

### Textarea Field
- **File**: `TextareaField.vue`
- **Figma Node ID**: 13-9683
- **Description**: Textarea field component
- **States**: default, hover, filled, focused, disabled, error
- **Props**: `modelValue`, `placeholder` (String), `rows` (Number), `disabled` (Boolean), `error` (Boolean)

## Select Components

### Select
- **File**: `Select.vue`
- **Figma Node ID**: 13-9164
- **Description**: Select dropdown component
- **Sizes**: small, medium
- **States**: default, hover, selected, focused, disabled
- **Variations**: with/without left icon, with/without optional flag (e.g. libs/country-flags)
- **Props**: `modelValue`, `options` (Array), `size` (String), `placeholder` (String), `leftIcon`, `flag` (String, optional – URL/path to flag image), `flagAlt` (String, optional – alt text for flag), `disabled` (Boolean)

## Navigation Components

### Tab Simple
- **File**: `TabSimple.vue`
- **Figma Node ID**: 16-10569
- **Description**: Simple tab component with underline indicator
- **States**: active, activeHover, default, defaultHover, disabled
- **Props**: `active` (Boolean), `disabled` (Boolean), `label` (String)

### Tabs Simple
- **File**: `TabsSimple.vue`
- **Figma Node ID**: 16-10618
- **Description**: Container for simple tabs
- **Props**: `modelValue`, `tabs` (Array)

### Tab
- **File**: `Tab.vue`
- **Figma Node ID**: 16-10646
- **Description**: Tab component with card-like appearance
- **States**: active, default, disabled
- **Props**: `active` (Boolean), `disabled` (Boolean), `label` (String)

### Tabs
- **File**: `Tabs.vue`
- **Figma Node ID**: 16-10663
- **Description**: Container for tabs with card-like appearance
- **Props**: `modelValue`, `tabs` (Array)

### Breadcrumb
- **File**: `Breadcrumb.vue`
- **Figma Node ID**: 16-10583
- **Description**: Individual breadcrumb item
- **States**: default, active
- **Props**: `active` (Boolean), `label` (String)

### Breadcrumbs
- **File**: `Breadcrumbs.vue`
- **Figma Node ID**: 16-10602
- **Description**: Breadcrumb navigation component
- **Props**: `items` (Array)

### Navbar Item
- **File**: `NavbarItem.vue`
- **Figma Node ID**: 72-19031
- **Description**: Individual navigation item for sidebar navigation
- **States**: default, hover, active
- **Features**: Icon, label, active state styling with background and font weight changes
- **Props**: 
  - `icon` (Component) - Icon component to display
  - `label` (String, required) - Navigation item label
  - `active` (Boolean) - Whether the item is currently active
- **Events**: `click` - Emitted when the item is clicked
- **Note**: When passing an icon as a prop, ensure the icon component is in the parent's `data()` section

### Navbar Side
- **File**: `NavbarSide.vue`
- **Figma Node ID**: 72-19506
- **Description**: Sidebar navigation container component
- **Features**: Logo slot, grouped sections with labels, bottom items, active item highlighting
- **Props**: 
  - `logo` (Slot) - Logo element to display at the top
  - `sections` (Array) - Array of section objects, each with `label` (String) and `items` (Array of objects with `icon`, `label`, `value`)
  - `bottomItems` (Array) - Array of navigation items for the bottom section (objects with `icon`, `label`, `value`)
  - `modelValue` (String|Number) - v-model binding for the active item value
- **Events**: 
  - `update:modelValue` - Emitted when active item changes
  - `item-click` - Emitted when a navigation item is clicked
- **Slots**: `logo` - Logo element slot
- **Spacing**: Items have 4px gap between them
- **Usage**: 
  ```vue
  <NavbarSide
    v-model="activeItem"
    :sections="[
      {
        label: 'Main',
        items: [
          { icon: PhHouse, label: 'Dashboard', value: 'dashboard' },
          { icon: PhBookOpen, label: 'Bookings', value: 'bookings' }
        ]
      }
    ]"
    :bottom-items="[
      { icon: PhChatCircle, label: 'Feedback', value: 'feedback' }
    ]"
  >
    <template #logo>
      <img src="/logo.svg" alt="Logo" />
    </template>
  </NavbarSide>
  ```

## Feedback Components

### Alert
- **File**: `Alert.vue`
- **Figma Node ID**: 16-10369
- **Description**: Alert component for displaying important messages
- **Types**: success, warning, error, info
- **Features**: title, description, optional action buttons, optional close button
- **Props**: `type` (String), `title` (String), `description` (String), `closable` (Boolean)
- **Slots**: `title`, `description`, `actions`

### Status
- **File**: `Status.vue`
- **Figma Node ID**: 15-10242
- **Description**: Status indicator with colored dot
- **Variants**: default, prominent
- **Types**: success, warning, info, error
- **Props**: `variant` (String), `type` (String), `label` (String)

### Notification Badge
- **File**: `NotificationBadge.vue`
- **Figma Node ID**: 16-10265
- **Description**: Badge component for displaying notification counts
- **Types**: simple (dot), singleNumber (1 digit), number (multiple digits)
- **Props**: `type` (String), `value` (String|Number)

### Empty State
- **File**: `EmptyState.vue`
- **Figma Node ID**: 16-10695
- **Description**: Empty state component for displaying empty states
- **Features**: icon, title, description, optional primary button
- **Props**: `icon` (Component|String), `title` (String), `description` (String), `buttonText` (String)
- **Slots**: `title`, `description`, `action`
- **Events**: `action` - Emitted when action button is clicked

### Notification Message
- **File**: `NotificationMessage.vue`
- **Figma Node ID**: 16-10728
- **Description**: Notification message component
- **Types**: single (standalone with shadow), inList (in dialog with borders)
- **Features**: icon, title, timestamp, main text, description, optional actions, optional new indicator
- **Props**: `type` (String), `icon` (Component|String), `title` (String), `timestamp` (String), `mainText` (String), `description` (String), `new` (Boolean)
- **Slots**: `title`, `timestamp`, `mainText`, `description`, `actions`

### Notification Dialog
- **File**: `NotificationDialog.vue`
- **Figma Node ID**: 16-11051
- **Description**: Dialog container for notification messages
- **Features**: header with title and filter switch (All/Unread), list of notification messages
- **Props**: `title` (String), `filter` (String), `messages` (Array)
- **Slots**: `title`, default slot for custom notification messages
- **Events**: `update:filter`, `action` - Emitted when action button is clicked

## Data Display Components

### Table
- **File**: `Table.vue`
- **Description**: Card-style data table with optional header (title, supporting text, actions), sortable column headers, and rows. Composes Checkbox, ButtonGhost, ButtonSecondary, ButtonPrimary, and Status.
- **Features**: optional card header with title and supporting text, slot for header action buttons, column-major layout, optional selectable rows (checkbox column), row action column (ellipsis button), status column type, text truncation support, and customizable actions column
- **Props**: 
  - `headerTitle` (String) – Header title text
  - `headerSupportingText` (String) – Header supporting text
  - `columns` (Array) – `{ id, label, type?: 'text'|'bold'|'status'|'checkbox'|'actions', sortable?: boolean, width?: string, truncate?: boolean }`
  - `rows` (Array) – Row data objects
  - `selectable` (Boolean) – Adds a checkbox selection column when true
  - `modelValue` (Array) – Selected row indices when `selectable` is true
- **Slots**: 
  - `header-actions` – Header button group
  - `cell-{columnId}` – Custom cell content (receives `row`, `rowIndex`, `column`)
  - `cell-actions` – Custom content specifically for the actions column (receives `row`, `rowIndex`, `column`)
- **Events**: `update:modelValue` (selected row indices), `row-action` (payload: `{ row, rowIndex }` when row actions button is clicked)

## Usage Examples

### Basic Usage
```vue
<template>
  <ButtonPrimary size="medium" text="Click me" />
  <Input v-model="email" label="Email" placeholder="Enter email" />
  <Select v-model="selected" :options="options" />
</template>
```

### With v-model
```vue
<template>
  <Input v-model="inputValue" />
  <Select v-model="selectedValue" :options="options" />
  <Tabs v-model="activeTab" :tabs="tabs" />
</template>
```

### With Slots
```vue
<template>
  <Alert type="success" title="Success!" closable>
    <template #description>
      Your changes have been saved.
    </template>
    <template #actions>
      <ButtonPrimary size="small" text="OK" />
    </template>
  </Alert>
</template>
```

## Selection Components

### Big Switch
- **File**: `BigSwitch.vue`
- **Figma Node ID**: 4-877
- **Description**: Large radio button-like component with icon placeholder, title, description, and checkmark
- **States**: default, hover, selected, disabled
- **Props**: `modelValue`, `value` (required), `title` (String), `description` (String), `icon` (Component), `disabled` (Boolean)
- **Events**: `update:modelValue`, `change`

### Small Switch Option
- **File**: `SmallSwitchOption.vue`
- **Figma Node ID**: 20-12652
- **Description**: Individual option for Small Switch component
- **States**: default, hover, selected, disabled
- **Props**: `modelValue`, `value` (required), `title` (String), `description` (String), `disabled` (Boolean)
- **Events**: `update:modelValue`, `change`

### Small Switch
- **File**: `SmallSwitch.vue`
- **Figma Node ID**: 20-12761
- **Description**: Container for Small Switch Options with dividers
- **Props**: `modelValue`, `options` (Array, required), `disabled` (Boolean)
- **Events**: `update:modelValue`, `change`

### Card with Counter
- **File**: `CardWithCounter.vue`
- **Figma Node ID**: 5-4894
- **Description**: Counter component with increment/decrement buttons using line buttons. Selected state when count > 0
- **States**: default, hover, selected (count > 0), disabled
- **Props**: `modelValue` (Number, default: 0), `title` (String), `description` (String), `icon` (Component), `disabled` (Boolean)
- **Events**: `update:modelValue`, `change`
- **Note**: When passing an icon as a prop, ensure the icon component is in the parent's `data()` section (see Icons section in components/README.md)

### Place
- **File**: `Place.vue`
- **Figma Node ID**: 18-11814
- **Description**: Place component with responsive desktop and mobile layouts. Automatically switches layout based on container width (not viewport width)
- **Variants**: desktop (≥830px container width), mobile (<830px container width)
- **States**: default, hover
- **Features**: optional photo, status component, action buttons with dropdown menu
- **Props**: 
  - `image` (String) - Optional image URL
  - `customerName` (String, required) - Customer/place name (truncated to 18 chars with ellipsis)
  - `peopleCount` (String) - Number of people
  - `placeType` (String) - Type of place (truncated to 18 chars with ellipsis)
  - `pricePerNight` (String) - Price per night
  - `season` (String) - Season name (truncated to 18 chars with ellipsis)
  - `pricingBasis` (String) - Pricing basis description
  - `statusType` (String) - Status type: 'success', 'warning', 'info', 'error'
  - `statusLabel` (String) - Status label text
  - `actionIcon` (Component) - Icon for the action button (default: PhArrowRight)
- **Slots**: `image`, `dropdown-actions` - Actions menu items
- **Events**: `action-click` - Emitted when action button is clicked
- **Responsive Behavior**: 
  - Uses ResizeObserver to detect container width (not viewport width)
  - Desktop layout: shown when container width ≥ 830px
  - Mobile layout: shown when container width < 830px
  - Text truncation: Titles (customerName, placeType, season) are automatically truncated to 18 characters with ellipsis when longer

### Dropdown
- **File**: `Dropdown.vue`
- **Description**: Dropdown menu component for action menus. Styling matches the Select component's dropdown for consistency.
- **Features**: Trigger slot, default slot for menu items, click-outside to close, smooth transitions
- **Slots**: 
  - `trigger` - Button/trigger element that opens the dropdown
  - default slot - Menu items (button elements with class `marks-dropdown__item`)
- **Styling**: 
  - Dropdown container matches `.marks-select-dropdown` styling (border-radius-24, shadow, padding)
  - Menu items match `.marks-select-dropdown__option` styling (border-radius-12, padding, typography)
  - Uses `:deep()` selector to style slotted content
- **Usage**: 
  ```vue
  <Dropdown>
    <template #trigger>
      <ButtonSecondary :icon-only="true" :left-icon="PhDotsThree" />
    </template>
    <button class="marks-dropdown__item">Sync availability</button>
    <button class="marks-dropdown__item">Remove place</button>
  </Dropdown>
  ```
- **Note**: Menu items must use the `marks-dropdown__item` class to receive proper styling

### Widget
- **File**: `Widget.vue`
- **Figma Node ID**: 18-12114
- **Description**: Widget component with responsive desktop and mobile layouts. Automatically switches layout based on container width (not viewport width)
- **Variants**: desktop (≥830px container width), mobile (<830px container width)
- **States**: default, hover
- **Features**: widget information sections, action buttons with dropdown menu
- **Props**: 
  - `widgetName` (String, required) - Widget name/title
  - `subtitle` (String, required) - Widget subtitle
  - `duration` (String, required) - Duration value (e.g., "3 months")
  - `durationSubtitle` (String) - Duration subtitle (e.g., "Prices in tooltips")
  - `language` (String, required) - Language name (e.g., "Danish")
  - `languageCode` (String) - Language code (e.g., "DNK")
  - `theme` (String, required) - Theme name (e.g., "Light mode")
  - `themeSubtitle` (String) - Theme subtitle (e.g., "Transparent")
  - `actionIcon` (Component) - Icon for the action button (default: PhArrowRight)
- **Slots**: `dropdown-actions` - Actions menu items (default: "Copy code", "Delete widget")
- **Events**: `action-click` - Emitted when action button is clicked
- **Responsive Behavior**: 
  - Uses ResizeObserver to detect container width (not viewport width)
  - Desktop layout: shown when container width ≥ 830px
  - Mobile layout: shown when container width < 830px

### Booking
- **File**: `Booking.vue`
- **Figma Node ID**: 17-11441
- **Description**: Booking component with responsive desktop, mobile, and minimal layouts. Automatically switches layout based on container width (not viewport width) or uses minimal layout when prop is set
- **Variants**: desktop (≥830px container width), mobile (<830px container width), minimal (prop-controlled)
- **States**: default, hover (not in minimal mode)
- **Features**: booking information, status badges, action buttons with dropdown menu
- **Props**: 
  - `customerName` (String, required) - Customer name
  - `peopleCount` (String, required) - Number of people (e.g., "8 people" or "8 pax" for minimal)
  - `startDateShort` (String, required) - Short start date format (e.g., "Čer 28")
  - `endDateShort` (String, required) - Short end date format (e.g., "Čer 28")
  - `startDateLong` (String, required) - Long start date format (e.g., "Červen 28, 2026")
  - `endDateLong` (String, required) - Long end date format (e.g., "Červen 28, 2026")
  - `nights` (String, required) - Number of nights (e.g., "4")
  - `price` (String, required) - Price (e.g., "5 000 CZK")
  - `deposit` (String, required) - Deposit amount (e.g., "0 CZK")
  - `badgeLabel` (String, required) - Badge label (e.g., "AIRBNB")
  - `badgeColor` (String) - Badge background color (default: "#fd3860")
  - `avatarColor` (String) - Avatar background color for minimal layout (default: "#d1d1d1")
  - `statusType` (String, required) - Status type: 'success', 'warning', 'info', 'error'
  - `statusLabel` (String, required) - Status label text (initial status)
  - `modelValue` (String) - v-model binding for status selection (optional)
  - `actionIcon` (Component) - Icon for the action button (default: PhArrowRight)
  - `minimal` (Boolean) - Enable minimal layout (default: false)
- **Slots**: `dropdown-actions` - Actions menu items (default: "Add payment", "Remove booking")
- **Events**: 
  - `action-click` - Emitted when action button is clicked
  - `update:modelValue` - Emitted when status is changed via dropdown
  - `status-change` - Emitted when status is changed via dropdown
- **Status Dropdown**: The status badge is clickable and opens a dropdown with options: "Pending", "Confirmed", "Payment details sent", "Paid". Use `v-model` to bind the selected status.
- **Responsive Behavior**: 
  - Uses ResizeObserver to detect container width (not viewport width) when `minimal` is false
  - Desktop layout: shown when container width ≥ 830px and `minimal` is false
  - Mobile layout: shown when container width < 830px and `minimal` is false
  - Minimal layout: shown when `minimal` prop is true (overrides responsive behavior)
  - Minimal layout includes avatar initial, compact date range, and inline price

### Week Pricing Day
- **File**: `WeekPricingDay.vue`
- **Figma Node ID**: 20-12795
- **Description**: Component for setting daily pricing in a week view. Supports vertical and horizontal layouts with default and filled states
- **Types**: vertical, horizontal
- **States**: default (shows button), filled (shows input with value)
- **Features**: day label, button to set pricing, input field with checkmark icon, automatic state switching
- **Props**: 
  - `modelValue` (String|Number) - v-model binding for the input value
  - `dayLabel` (String, required) - Day label (e.g., "Tue", "Tuesday", "Wed", "Wednesday")
  - `type` (String) - Layout type: 'vertical' or 'horizontal' (default: 'vertical')
- **Events**: 
  - `update:modelValue` - Emitted when input value changes
  - `change` - Emitted when input value changes
- **Behavior**: 
  - Clicking the "Set" button shows the input field (focused)
  - Typing any value switches to filled state (green background, checkmark icon)
  - If value is empty or "0" on blur, switches back to default state with button
  - While input is focused, state doesn't change (allows typing "0.99" without switching)
  - Uses InputField component for consistent styling
  - Button padding is customized to 16px 16px (instead of default 16px 24px) for this component

### Tooltip
- **File**: `Tooltip.vue`
- **Figma Node ID**: 74-19878
- **Description**: Hover-triggered tooltip component with dynamic triangle positioning. Appears above the trigger element by default
- **Features**: 
  - Two-row content structure with dot separators
  - Upper row: white text (primary information)
  - Bottom row: grey text (secondary information)
  - Dynamic arrow positioning (left/right/center) based on viewport space
  - Slide-in animation from above
- **Props**: 
  - `upperLeft` (String) - Text for upper left section
  - `upperRight` (String) - Text for upper right section
  - `bottomLeft` (String) - Text for bottom left section
  - `bottomRight` (String) - Text for bottom right section
- **Slots**: `trigger` - Element that triggers the tooltip on hover
- **Positioning**: 
  - Tooltip appears above the trigger element by default (10px gap)
  - Falls back to below if there's not enough space above
  - Arrow position adjusts automatically: center (default), left, or right based on available viewport space
- **Animation**: Smooth slide-in from above with fade effect (0.2s ease-out on enter, 0.15s ease-in on leave)
- **Usage**: 
  ```vue
  <Tooltip
    upper-left="Marta Kaufmann"
    upper-right="347 USD"
    bottom-left="10 people"
    bottom-right="Airbnb"
  >
    <template #trigger>
      <ButtonPrimary size="medium" text="Hover me" />
    </template>
  </Tooltip>
  ```

### Horizontal Switch
- **File**: `HorizontalSwitch.vue`
- **Figma Node ID**: 73-19596
- **Description**: Button group component with primary (active) and ghost (inactive) buttons for switching between options. Built using ButtonPrimary (small) and ButtonGhost (small) components
- **States**: default, hover, active
- **Features**: Grey container background, active button with shadow, layout jump prevention
- **Props**: 
  - `modelValue` (String|Number, required) - v-model binding for the selected option value
  - `options` (Array, required) - Array of option objects with `label` (String) and `value` (String|Number)
- **Events**: 
  - `update:modelValue` - Emitted when option is selected
  - `change` - Emitted when option is selected
- **Layout Jump Prevention**: 
  - Uses transparent border and shadow reservation technique (same as BigSwitch) to prevent layout jumps when switching between active/inactive states
  - Both buttons reserve space for border and shadow to ensure consistent dimensions
- **Usage**: 
  ```vue
  <HorizontalSwitch
    v-model="selectedView"
    :options="[
      { label: 'Month view', value: 'month' },
      { label: 'Year view', value: 'year' },
      { label: 'All time', value: 'all' }
    ]"
  />
  ```

### Calendar Day
- **File**: `CalendarDay.vue`
- **Figma Node ID**: 82-19906
- **Description**: Calendar day component with month and year variants, multiple states for different day conditions
- **Variants**: month, year
- **States**: default, hover, active, notActive, notAvailable, booked
- **Props**:
  - `dayNumber` (String|Number, required) - The day number to display (can be "Today" for current day)
  - `price` (String, optional) - Price to display below day number
  - `currency` (String, optional) - Currency code to display (only shown in month variant)
  - `variant` (String, default: 'month') - Display variant: 'month' or 'year'
  - `active` (Boolean, default: false) - Whether the day is currently selected/active
  - `notActive` (Boolean, default: false) - Whether the day is not active (grayed out)
  - `notAvailable` (Boolean, default: false) - Whether the day is not available (strikethrough, grayed out)
  - `booked` (Boolean, default: false) - Whether the day is booked (hides price)
  - `noBorder` (Boolean, default: false) - Removes border from component (used in datepicker)
- **Events**:
  - `click` - Emitted when day is clicked (not emitted if notAvailable is true)
- **Usage**:
  ```vue
  <CalendarDay
    variant="month"
    :day-number="1"
    price="99.00"
    currency="CZK"
    :active="true"
  />
  ```

### Calendar
- **File**: `Calendar.vue`
- **Figma Node ID**: 82-20079
- **Description**: Month view calendar component built from CalendarDay components. Displays a full month calendar grid.
- **Variants**: month, year
- **Props**:
  - `variant` (String, default: 'month') - Calendar variant: 'month' or 'year'
  - `days` (Array, required) - Array of day objects, each with:
    - `dayNumber` (String|Number, required) - Day number
    - `price` (String, optional) - Price to display
    - `currency` (String, optional) - Currency code
    - `active` (Boolean, optional) - Whether day is active
    - `notActive` (Boolean, optional) - Whether day is not active
    - `notAvailable` (Boolean, optional) - Whether day is not available
    - `booked` (Boolean, optional) - Whether day is booked
    - `isPreviousMonth` (Boolean, optional) - Whether day belongs to previous month
    - `isNextMonth` (Boolean, optional) - Whether day belongs to next month
- **Events**:
  - `day-click` - Emitted when a day is clicked, passes the day object
- **Usage**:
  ```vue
  <Calendar
    variant="month"
    :days="calendarDays"
    @day-click="handleDayClick"
  />
  ```

### Calendar Datepicker
- **File**: `CalendarDatepicker.vue`
- **Figma Node ID**: 82-20485
- **Description**: Compact calendar component with month navigation and date selection functionality. Uses CalendarDay components with year variant.
- **Features**: Month navigation (previous/next), date selection with v-model, automatic calendar generation
- **Props**:
  - `modelValue` (Date, optional) - v-model binding for selected date
- **Events**:
  - `update:modelValue` - Emitted when date is selected (for v-model)
  - `change` - Emitted when date is selected, passes the selected Date object
- **Usage**:
  ```vue
  <CalendarDatepicker
    v-model="selectedDate"
    @change="handleDateChange"
  />
  ```

### Booking in Calendar
- **File**: `BookingInCalendar.vue`
- **Figma Node ID**: 82-20305
- **Description**: Booking component for displaying within calendar cells. Supports full width, start (left), and end (right) types for both month and year views.
- **Types**: default (full width), start (left only), end (right only)
- **Variants**: month, year
- **Props**:
  - `type` (String, default: 'default') - Booking type: 'default', 'start', or 'end'
  - `variant` (String, default: 'month') - Display variant: 'month' or 'year'
  - `customerName` (String, default: '') - Customer name to display
  - `pax` (String, default: '') - Number of people (e.g., "8 pax")
  - `source` (String, default: '') - Booking source (e.g., "AIRBNB")
  - `price` (String, default: '') - Price to display
  - `statusBadgeText` (String, default: 'J') - Text for status badge
  - `statusBadgeColor` (String, default: '#fd3860') - Background color for status badge
  - `sourceBadgeColor` (String, default: '#fd3860') - Background color for source badge
  - `backgroundColor` (String, optional) - Custom background color for booking container (defaults to #ffe4e9 for month, #fd3860 for year)
- **Usage**:
  ```vue
  <BookingInCalendar
    variant="month"
    type="default"
    customer-name="Jeremy Clarcson"
    pax="8 pax"
    source="AIRBNB"
    price="5 000 CZK"
    status-badge-text="J"
    status-badge-color="#fd3860"
    source-badge-color="#fd3860"
    background-color="#ffe4e9"
  />
  ```
