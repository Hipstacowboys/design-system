<!--
  Figma Node ID: 13-9164
  Component: Select
  Sizes: small, medium
  States: default, hover, selected, focused, disabled
  Variations: with/without left icon, with/without optional flag (e.g. libs/country-flags)
  Dropdown: Figma Node ID: 13-9393
-->
<template>
  <div class="marks-select-wrapper" ref="selectWrapper">
    <button
      :id="selectId"
      :class="[
        'marks-select',
        `marks-select--${size}`,
        {
          'marks-select--has-left-icon': leftIcon,
          'marks-select--has-flag': flag,
          'marks-select--disabled': disabled,
          'marks-select--has-value': modelValue !== null && modelValue !== '',
          'marks-select--open': isOpen
        }
      ]"
      :disabled="disabled"
      @click="toggleDropdown"
      @blur="handleBlur"
      type="button"
    >
      <component
        v-if="leftIcon"
        :is="leftIcon"
        :class="['marks-select__icon', 'marks-select__icon--left']"
        :size="iconSize"
        :weight="iconWeight"
      />
      <img
        v-if="flag"
        :src="flag"
        :alt="flagAlt"
        class="marks-select__flag"
      />
      <span class="marks-select__text">
        {{ displayText }}
      </span>
      <PhCaretDown
        :class="['marks-select__icon', 'marks-select__icon--right', { 'marks-select__icon--rotated': isOpen }]"
        :size="iconSize"
        :weight="iconWeight"
        color="currentColor"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition name="marks-select-dropdown">
      <div
        v-if="isOpen && !disabled"
        class="marks-select-dropdown"
        @mousedown.prevent
      >
        <button
          v-for="option in options"
          :key="option.value"
          :class="[
            'marks-select-dropdown__option',
            {
              'marks-select-dropdown__option--selected': modelValue === option.value,
              'marks-select-dropdown__option--disabled': option.disabled
            }
          ]"
          @click="selectOption(option)"
          :disabled="option.disabled"
          type="button"
        >
          <span class="marks-select-dropdown__option-text-left">{{ option.label }}</span>
          <span v-if="option.rightText" class="marks-select-dropdown__option-text-right">{{ option.rightText }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script>
import { PhCaretDown } from '@phosphor-icons/vue';

export default {
  name: 'marksSelect',
  components: {
    PhCaretDown
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium'].includes(value)
    },
    placeholder: {
      type: String,
      default: 'Select option...'
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    leftIcon: {
      type: [Object, String],
      default: null
    },
    /** Optional flag image source (e.g. URL to libs/country-flags/xx.svg). Same pattern as optional left icon. */
    flag: {
      type: String,
      default: null
    },
    /** Alt text for the flag image (used when flag is set). */
    flagAlt: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    selectId() {
      return `select-${this._uid}`;
    },
    iconSize() {
      return this.size === 'small' ? 16 : 16;
    },
    iconWeight() {
      return this.iconSize <= 19 ? 'bold' : 'regular';
    },
    displayText() {
      if (this.modelValue === null || this.modelValue === '') {
        return this.placeholder;
      }
      const selectedOption = this.options.find(opt => opt.value === this.modelValue);
      return selectedOption ? selectedOption.label : this.placeholder;
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          this.$emit('focus');
        }
      }
    },
    selectOption(option) {
      if (!option.disabled) {
        this.$emit('update:modelValue', option.value);
        this.$emit('change', option.value);
        this.isOpen = false;
      }
    },
    handleBlur(event) {
      // Delay to allow option click to register
      setTimeout(() => {
        if (!this.$refs.selectWrapper?.contains(document.activeElement)) {
          this.isOpen = false;
          this.$emit('blur', event);
        }
      }, 200);
    },
    handleClickOutside(event) {
      if (this.isOpen && this.$refs.selectWrapper && !this.$refs.selectWrapper.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-select-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.marks-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  border: 2px solid transparent;
  background: var(--marks-color-white);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: $marks-font-family;
  font-weight: $marks-font-weight-medium;
  box-sizing: border-box;
  outline: none;
  color: var(--marks-color-gray-300);
  box-shadow: 0 0 0 1px var(--marks-color-gray-200);
  text-align: left;
  display: flex;
  align-items: center;

  &:focus,
  &.marks-select--open {
    border-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--marks-color-black);
  }

  &:hover:not(.marks-select--disabled):not(:focus):not(.marks-select--open) {
    box-shadow: 0 0 0 1px var(--marks-color-gray-300);
  }

  // Has value (selected option)
  &--has-value {
    color: var(--marks-color-black);
  }

  // Sizes
  &--small {
    padding: 8px 16px;
    padding-right: 40px;
    border-radius: var(--marks-radius-8);
    @include marks-typography-button-sm;

    &.marks-select--has-left-icon {
      padding-left: 32px;
    }

    &.marks-select--has-flag {
      padding-left: 40px;
    }

    &.marks-select--has-left-icon.marks-select--has-flag {
      padding-left: 56px;
    }
  }

  &--medium {
    padding: 16px 20px;
    padding-right: 40px;
    border-radius: var(--marks-radius-12);
    @include marks-typography-button-md;

    &.marks-select--has-left-icon {
      padding-left: 36px;
    }

    &.marks-select--has-flag {
      padding-left: 48px;
    }

    &.marks-select--has-left-icon.marks-select--has-flag {
      padding-left: 64px;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background: var(--marks-color-gray-100) !important;
    color: var(--marks-color-gray-200) !important;
    box-shadow: 0 0 0 1px var(--marks-color-gray-200) !important;
    border-color: transparent !important;
    opacity: 0.5;
  }

  // Remove default arrow
  &::-ms-expand {
    display: none;
  }

  // Style option elements
  option {
    color: var(--marks-color-black);
    background: var(--marks-color-white);
  }

  option:disabled {
    color: var(--marks-color-gray-300);
  }
}

.marks-select__text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.marks-select__icon {
  position: absolute;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
  transition: transform 0.2s ease;

  &--left {
    left: var(--marks-spacing-12);
    color: var(--marks-color-gray-300);
  }

  &--right {
    right: var(--marks-spacing-12);
    color: var(--marks-color-gray-300);

    &--rotated {
      transform: rotate(180deg);
    }
  }
}

.marks-select__flag {
  position: absolute;
  left: var(--marks-spacing-12);
  width: 20px;
  height: 14px;
  object-fit: cover;
  flex-shrink: 0;
  pointer-events: none;
  border-radius: 2px;
  z-index: 1;

  .marks-select--has-left-icon & {
    left: 36px;
  }

  .marks-select--small.marks-select--has-left-icon & {
    left: 32px;
  }

  .marks-select--disabled & {
    opacity: 0.5;
  }
}

// Adjust right icon position based on size
.marks-select-wrapper:has(.marks-select--small) .marks-select__icon--right {
  right: var(--marks-spacing-16);
}

.marks-select-wrapper:has(.marks-select--medium) .marks-select__icon--right {
  right: var(--marks-spacing-20);
}

// Dropdown Menu
.marks-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 6px;
  background: var(--marks-color-white);
  border-radius: var(--marks-radius-24);
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);
  padding: var(--marks-spacing-8);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-height: 300px;
  overflow-y: auto;
  box-sizing: border-box;
}

.marks-select-dropdown__option {
  width: 100%;
  border: none;
  background: var(--marks-color-white);
  border-radius: var(--marks-radius-12);
  padding: var(--marks-spacing-16);
  gap: var(--marks-spacing-12);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-black);
  text-align: left;
  box-sizing: border-box;

  &:hover:not(.marks-select-dropdown__option--disabled) {
    background: var(--marks-color-gray-100);
  }

  &--selected {
    // Selected state styling if needed
  }

  &--disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-200);
  }
}

.marks-select-dropdown__option-text-left {
  flex: 1;
}

.marks-select-dropdown__option-text-right {
  color: var(--marks-color-gray-300);
}

// Dropdown transition
.marks-select-dropdown-enter-active,
.marks-select-dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.marks-select-dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.marks-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

// Padding when left icon and/or flag are present (handled in size modifiers above)
</style>
