<!--
  Figma Node ID: 13-9075
  Component: Button Ghost
  Sizes: small, medium, large
  States: default, hover, clicked, disabled
  Variations: with text, icon-only, with left/right icons
-->
<template>
  <button
    :class="[
      'marks-button',
      'marks-button--ghost',
      `marks-button--${size}`,
      {
        'marks-button--icon-only': iconOnly,
        'marks-button--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
  >
    <component
      v-if="leftIcon"
      :is="leftIcon"
      :class="['marks-button__icon', 'marks-button__icon--left']"
      :size="iconSize"
      :weight="iconWeight"
    />
    <span v-if="!iconOnly" class="marks-button__text">
      <slot>{{ text }}</slot>
    </span>
    <component
      v-if="rightIcon"
      :is="rightIcon"
      :class="['marks-button__icon', 'marks-button__icon--right']"
      :size="iconSize"
      :weight="iconWeight"
    />
  </button>
</template>

<script>
export default {
  name: 'marksButtonGhost',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    text: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: [Object, String],
      default: null
    },
    rightIcon: {
      type: [Object, String],
      default: null
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    iconSize() {
      const sizeMap = {
        small: 16,
        medium: 20,
        large: 20
      };
      return sizeMap[this.size] || 20;
    },
    iconWeight() {
      return this.iconSize <= 19 ? 'bold' : 'regular';
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: $marks-font-family;
  font-weight: $marks-font-weight-medium;
  box-sizing: border-box;
  outline: none;
  color: var(--marks-color-gray-500);

  &:focus-visible {
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
  }

  // Ghost button base styles
  &--ghost {
    &:hover:not(.marks-button--disabled) {
      border: 1px solid var(--marks-color-gray-200);
    }

    &:active:not(.marks-button--disabled) {
      background: var(--marks-color-gray-100);
      border: 1px solid var(--marks-color-gray-200);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05) inset;
    }
  }

  // Sizes
  &--small {
    padding: 8px 16px;
    border-radius: var(--marks-radius-8);
    gap: var(--marks-spacing-gutter-8);
    @include marks-typography-button-sm;

    &.marks-button--icon-only {
      padding: 8px;
      min-width: 32px;
      min-height: 32px;
    }
  }

  &--medium {
    padding: 16px 24px;
    border-radius: var(--marks-radius-12);
    gap: var(--marks-spacing-gutter-12);
    @include marks-typography-button-md;

    &.marks-button--icon-only {
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
    }
  }

  &--large {
    padding: 20px 28px;
    border-radius: var(--marks-radius-16);
    gap: var(--marks-spacing-gutter-12);
    @include marks-typography-button-lg;

    &.marks-button--icon-only {
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-200) !important;
    background: transparent !important;
    border: none !important;
  }

  &__text {
    white-space: nowrap;
  }

  &__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
