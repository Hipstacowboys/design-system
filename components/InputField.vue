<!--
  Figma Node ID: 13-9414
  Component: Input Field
  Sizes: small, medium
  States: default, hover, filled, focused, disabled, error
  Variations: optional leading addon (select/text), left icon, right icon, trailing addon (select/text)
-->
<template>
  <div
    :class="[
      'desys-input-field',
      `desys-input-field--${size}`,
      {
        'desys-input-field--error': error,
        'desys-input-field--disabled': disabled,
        'desys-input-field--has-leading-addon': leadingAddon || leadingAddonSelect,
        'desys-input-field--has-trailing-addon': trailingAddon || trailingAddonSelect,
        'desys-input-field--has-left-icon': leftIcon,
        'desys-input-field--has-right-icon': rightIcon
      }
    ]"
    @click="handleWrapperClick"
  >
    <!-- Leading Addon (Select) -->
    <div v-if="leadingAddonSelect" class="desys-input-field__addon desys-input-field__addon--leading desys-input-field__addon--select">
      <Select
        :model-value="leadingAddonSelectValue"
        :options="leadingAddonSelectOptions"
        :size="size"
        @update:modelValue="$emit('update:leadingAddonSelectValue', $event)"
      />
    </div>

    <!-- Leading Addon (Text) -->
    <div v-else-if="leadingAddon" class="desys-input-field__addon desys-input-field__addon--leading desys-input-field__addon--text">
      {{ leadingAddon }}
    </div>

    <!-- Left Icon -->
    <component
      v-if="leftIcon"
      :is="leftIcon"
      :class="['desys-input-field__icon', 'desys-input-field__icon--left']"
      :size="iconSize"
      :weight="iconWeight"
    />

    <!-- Input -->
    <input
      ref="inputRef"
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['desys-input-field__input']"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- Right Icon -->
    <component
      v-if="rightIcon"
      :is="rightIcon"
      :class="['desys-input-field__icon', 'desys-input-field__icon--right']"
      :size="iconSize"
      :weight="iconWeight"
    />

    <!-- Trailing Addon (Select) -->
    <div v-if="trailingAddonSelect" class="desys-input-field__addon desys-input-field__addon--trailing desys-input-field__addon--select">
      <Select
        :model-value="trailingAddonSelectValue"
        :options="trailingAddonSelectOptions"
        :size="size"
        @update:modelValue="$emit('update:trailingAddonSelectValue', $event)"
      />
    </div>

    <!-- Trailing Addon (Text) -->
    <div v-else-if="trailingAddon" class="desys-input-field__addon desys-input-field__addon--trailing desys-input-field__addon--text">
      {{ trailingAddon }}
    </div>
  </div>
</template>

<script>
import Select from './Select.vue';

export default {
  name: 'DesysInputField',
  components: {
    Select
  },
  emits: ['update:modelValue', 'update:leadingAddonSelectValue', 'update:trailingAddonSelectValue', 'input', 'focus', 'blur'],
  props: {
    inputId: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium'].includes(value)
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    leadingAddon: {
      type: String,
      default: null
    },
    leadingAddonSelect: {
      type: Boolean,
      default: false
    },
    leadingAddonSelectValue: {
      type: [String, Number],
      default: null
    },
    leadingAddonSelectOptions: {
      type: Array,
      default: () => []
    },
    trailingAddon: {
      type: String,
      default: null
    },
    trailingAddonSelect: {
      type: Boolean,
      default: false
    },
    trailingAddonSelectValue: {
      type: [String, Number],
      default: null
    },
    trailingAddonSelectOptions: {
      type: Array,
      default: () => []
    },
    leftIcon: {
      type: [Object, String],
      default: null
    },
    rightIcon: {
      type: [Object, String],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconSize() {
      return this.size === 'small' ? 16 : 16;
    },
    iconWeight() {
      return this.iconSize <= 19 ? 'bold' : 'regular';
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleWrapperClick(event) {
      // Focus input when clicking on the wrapper or empty areas
      // Don't focus if clicking on interactive elements (addons, icons, select buttons)
      const target = event.target;
      const isInteractive = target.closest('.desys-input-field__addon') || 
                           target.closest('.desys-input-field__icon') ||
                           target.closest('.desys-select') ||
                           target.closest('button') ||
                           target.tagName === 'INPUT' ||
                           target.tagName === 'BUTTON';
      
      if (!isInteractive && this.$refs.inputRef && !this.disabled) {
        this.$refs.inputRef.focus();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-input-field {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid transparent;
  background: var(--desys-color-white);
  box-sizing: border-box;
  box-shadow: 0 0 0 1px var(--desys-color-gray-200);
  transition: all 0.2s ease;
  cursor: text;

  &:focus-within {
    border-color: var(--desys-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--desys-color-black);
  }

  &:hover:not(.desys-input-field--disabled):not(:focus-within) {
    box-shadow: 0 0 0 1px var(--desys-color-gray-300);
  }

  // Make the wrapper clickable to focus input
  &:not(.desys-input-field--disabled) {
    cursor: text;
  }

  // Sizes
  &--small {
    border-radius: var(--desys-radius-8);
    padding: 8px;
    gap: var(--desys-spacing-gutter-8);
    
    // Small size select addon typography
    .desys-input-field__addon--select :deep(.desys-select__text) {
      @include desys-typography-paragraph-sm-one-line;
    }
  }

  &--medium {
    border-radius: var(--desys-radius-12);
    padding: 16px;
    gap: var(--desys-spacing-gutter-12);
  }

  // Error state
  &--error {
    border-color: var(--desys-color-red-200) !important;
    box-shadow: 0 0 0 1px var(--desys-color-red-200) !important;
    color: var(--desys-color-red-200);

    .desys-input-field__input {
      color: var(--desys-color-red-200);
    }

    &:focus-within {
      border-color: var(--desys-color-red-200) !important;
      box-shadow: 0px 0px 0px 4px rgba(253, 56, 96, 0.3), 0 0 0 1px var(--desys-color-red-200) !important;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background: var(--desys-color-gray-100) !important;
    box-shadow: 0 0 0 1px var(--desys-color-gray-200) !important;
    border-color: transparent !important;
    opacity: 0.5;
  }
}

.desys-input-field__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--desys-color-black);
  min-width: 0;
  width: 100%;
  padding: 0;
  margin: 0;

  // Typography based on size
  .desys-input-field--small & {
    @include desys-typography-paragraph-sm-one-line;
  }

  .desys-input-field--medium & {
    @include desys-typography-paragraph-md-one-line;
  }

  &::placeholder {
    color: var(--desys-color-gray-300);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--desys-color-gray-200);
  }

  .desys-input-field--error & {
    color: var(--desys-color-red-200);
  }
}

.desys-input-field__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--desys-color-gray-300);

  &--left {
    order: 1;
  }

  &--right {
    order: 3;
  }
}

.desys-input-field__addon {
  flex-shrink: 0;
  display: flex;
  align-items: center;

  &--leading {
    order: 0;
  }

  &--trailing {
    order: 4;
  }

  &--text {
    @include desys-typography-paragraph-md-multiline;
    color: var(--desys-color-gray-500);
    gap: var(--desys-spacing-gutter-8);
  }

  &--select {
    // Style Select to work as addon - keep functionality but remove outer styling
    :deep(.desys-select-wrapper) {
      width: auto;
      position: relative;
      display: inline-block;
    }

    :deep(.desys-select) {
      border: none;
      box-shadow: none;
      background: transparent;
      padding: 0;
      width: auto;
      min-width: fit-content;
      height: auto;
      border-radius: 0;
      cursor: pointer;
      
      // Remove all hover effects
      &:hover {
        background: transparent;
        border: none;
        box-shadow: none;
      }
      
      // Keep focus state but adjust
      &:focus,
      &.desys-select--open {
        border: none;
        box-shadow: none;
        background: transparent;
      }
    }

    :deep(.desys-select__text) {
      padding: 0;
      @include desys-typography-paragraph-md-one-line;
      color: var(--desys-color-gray-500);
    }

    // Keep the caret icon visible and properly spaced
    :deep(.desys-select__icon--right) {
      display: flex !important;
      position: relative !important;
      right: auto !important;
      left: auto !important;
      margin-left: var(--desys-spacing-gutter-8);
      color: var(--desys-color-gray-500);
      pointer-events: auto;
    }
    
    // Ensure button is clickable
    :deep(.desys-select) {
      pointer-events: auto;
    }

    // Ensure dropdown appears correctly positioned with minimum width
    :deep(.desys-select-dropdown) {
      position: absolute;
      z-index: 1000;
      top: 100%;
      left: 0;
      margin-top: 4px;
      min-width: 200px;
    }
  }
}

// Adjust input order
.desys-input-field__input {
  order: 2;
}
</style>
