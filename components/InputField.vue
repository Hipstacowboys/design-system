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
      'marks-input-field',
      `marks-input-field--${size}`,
      {
        'marks-input-field--error': error,
        'marks-input-field--disabled': disabled,
        'marks-input-field--has-leading-addon': leadingAddon || leadingAddonSelect,
        'marks-input-field--has-trailing-addon': trailingAddon || trailingAddonSelect,
        'marks-input-field--has-left-icon': leftIcon,
        'marks-input-field--has-right-icon': rightIcon
      }
    ]"
    @click="handleWrapperClick"
  >
    <!-- Leading Addon (Select) -->
    <div v-if="leadingAddonSelect" class="marks-input-field__addon marks-input-field__addon--leading marks-input-field__addon--select">
      <Select
        :model-value="leadingAddonSelectValue"
        :options="leadingAddonSelectOptions"
        :size="size"
        @update:modelValue="$emit('update:leadingAddonSelectValue', $event)"
      />
    </div>

    <!-- Leading Addon (Text) -->
    <div v-else-if="leadingAddon" class="marks-input-field__addon marks-input-field__addon--leading marks-input-field__addon--text">
      {{ leadingAddon }}
    </div>

    <!-- Left Icon -->
    <component
      v-if="leftIcon"
      :is="leftIcon"
      :class="['marks-input-field__icon', 'marks-input-field__icon--left']"
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
      :class="['marks-input-field__input']"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- Right Icon -->
    <component
      v-if="rightIcon"
      :is="rightIcon"
      :class="['marks-input-field__icon', 'marks-input-field__icon--right']"
      :size="iconSize"
      :weight="iconWeight"
    />

    <!-- Trailing Addon (Select) -->
    <div v-if="trailingAddonSelect" class="marks-input-field__addon marks-input-field__addon--trailing marks-input-field__addon--select">
      <Select
        :model-value="trailingAddonSelectValue"
        :options="trailingAddonSelectOptions"
        :size="size"
        @update:modelValue="$emit('update:trailingAddonSelectValue', $event)"
      />
    </div>

    <!-- Trailing Addon (Text) -->
    <div v-else-if="trailingAddon" class="marks-input-field__addon marks-input-field__addon--trailing marks-input-field__addon--text">
      {{ trailingAddon }}
    </div>
  </div>
</template>

<script>
import Select from './Select.vue';

export default {
  name: 'marksInputField',
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
      const isInteractive = target.closest('.marks-input-field__addon') || 
                           target.closest('.marks-input-field__icon') ||
                           target.closest('.marks-select') ||
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
@use '../tokens/variables' as *;

.marks-input-field {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid transparent;
  background: var(--marks-color-white);
  box-sizing: border-box;
  box-shadow: 0 0 0 1px var(--marks-color-gray-200);
  transition: all 0.2s ease;
  cursor: text;

  &:focus-within {
    border-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--marks-color-black);
  }

  &:hover:not(.marks-input-field--disabled):not(:focus-within) {
    box-shadow: 0 0 0 1px var(--marks-color-gray-300);
  }

  // Make the wrapper clickable to focus input
  &:not(.marks-input-field--disabled) {
    cursor: text;
  }

  // Sizes
  &--small {
    border-radius: var(--marks-radius-8);
    padding: 8px;
    gap: var(--marks-spacing-8);
    
    // Small size select addon typography
    .marks-input-field__addon--select :deep(.marks-select__text) {
      @include marks-typography-paragraph-sm-one-line;
    }
  }

  &--medium {
    border-radius: var(--marks-radius-12);
    padding: 16px;
    gap: var(--marks-spacing-12);
  }

  // Error state
  &--error {
    border-color: var(--marks-color-red-200) !important;
    box-shadow: 0 0 0 1px var(--marks-color-red-200) !important;
    color: var(--marks-color-red-200);

    .marks-input-field__input {
      color: var(--marks-color-red-200);
    }

    &:focus-within {
      border-color: var(--marks-color-red-200) !important;
      box-shadow: 0px 0px 0px 4px rgba(253, 56, 96, 0.3), 0 0 0 1px var(--marks-color-red-200) !important;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background: var(--marks-color-gray-100) !important;
    box-shadow: 0 0 0 1px var(--marks-color-gray-200) !important;
    border-color: transparent !important;
    opacity: 0.5;
  }
}

.marks-input-field__input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--marks-color-black);
  min-width: 0;
  width: 100%;
  padding: 0;
  margin: 0;

  // Typography based on size
  .marks-input-field--small & {
    @include marks-typography-paragraph-sm-one-line;
  }

  .marks-input-field--medium & {
    @include marks-typography-paragraph-md-one-line;
  }

  &::placeholder {
    color: var(--marks-color-gray-300);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-200);
  }

  .marks-input-field--error & {
    color: var(--marks-color-red-200);
  }
}

.marks-input-field__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--marks-color-gray-300);

  &--left {
    order: 1;
  }

  &--right {
    order: 3;
  }
}

.marks-input-field__addon {
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
    @include marks-typography-paragraph-md-multiline;
    color: var(--marks-color-gray-500);
    gap: var(--marks-spacing-8);
  }

  &--select {
    // Style Select to work as addon - keep functionality but remove outer styling
    :deep(.marks-select-wrapper) {
      width: auto;
      position: relative;
      display: inline-block;
    }

    :deep(.marks-select) {
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
      &.marks-select--open {
        border: none;
        box-shadow: none;
        background: transparent;
      }
    }

    :deep(.marks-select__text) {
      padding: 0;
      @include marks-typography-paragraph-md-one-line;
      color: var(--marks-color-gray-500);
    }

    // Keep the caret icon visible and properly spaced
    :deep(.marks-select__icon--right) {
      display: flex !important;
      position: relative !important;
      right: auto !important;
      left: auto !important;
      margin-left: var(--marks-spacing-8);
      color: var(--marks-color-gray-500);
      pointer-events: auto;
    }
    
    // Ensure button is clickable
    :deep(.marks-select) {
      pointer-events: auto;
    }

    // Ensure dropdown appears correctly positioned with minimum width
    :deep(.marks-select-dropdown) {
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
.marks-input-field__input {
  order: 2;
}
</style>
