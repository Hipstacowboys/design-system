<!--
  Figma Node ID: 13-9075
  Component: Button Primary
  Sizes: small, medium, large
  States: default, hover, clicked, disabled
  Variations: with text, icon-only, with left/right icons
-->
<template>
  <button
    :class="[
      'desys-button',
      'desys-button--primary',
      `desys-button--${size}`,
      {
        'desys-button--icon-only': iconOnly,
        'desys-button--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
  >
    <component
      v-if="leftIcon"
      :is="leftIcon"
      :class="['desys-button__icon', 'desys-button__icon--left']"
      :size="iconSize"
      :weight="iconWeight"
    />
    <span v-if="!iconOnly" class="desys-button__text">
      <slot>{{ text }}</slot>
    </span>
    <component
      v-if="rightIcon"
      :is="rightIcon"
      :class="['desys-button__icon', 'desys-button__icon--right']"
      :size="iconSize"
      :weight="iconWeight"
    />
  </button>
</template>

<script>
export default {
  name: 'DesysButtonPrimary',
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
@import '../tokens/variables';

.desys-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: $desys-font-family;
  font-weight: $desys-font-weight-medium;
  box-sizing: border-box;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--desys-color-primary-solid);
    outline-offset: 2px;
  }

  // Primary button base styles
  &--primary {
    background: var(--desys-color-black);
    color: var(--desys-color-white);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);

    &:hover:not(.desys-button--disabled) {
      background: var(--desys-color-gray-500);
    }

    &:active:not(.desys-button--disabled) {
      background: var(--desys-color-gray-400);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05) inset;
    }
  }

  // Sizes
  &--small {
    padding: 8px 16px;
    border-radius: var(--desys-radius-8);
    gap: var(--desys-spacing-gutter-8);
    @include desys-typography-button-sm;

    &.desys-button--icon-only {
      padding: 8px;
      min-width: 32px;
      min-height: 32px;
    }
  }

  &--medium {
    padding: 16px 24px;
    border-radius: var(--desys-radius-12);
    gap: var(--desys-spacing-gutter-12);
    @include desys-typography-button-md;

    &.desys-button--icon-only {
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
    }
  }

  &--large {
    padding: 20px 28px;
    border-radius: var(--desys-radius-16);
    gap: var(--desys-spacing-gutter-12);
    @include desys-typography-button-lg;

    &.desys-button--icon-only {
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background: var(--desys-color-gray-100) !important;
    color: var(--desys-color-gray-200) !important;
    box-shadow: none !important;
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
