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
- **Variations**: with/without left icon
- **Props**: `modelValue`, `options` (Array), `size` (String), `placeholder` (String), `leftIcon`, `disabled` (Boolean)

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
