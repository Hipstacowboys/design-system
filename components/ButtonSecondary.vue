<!--
  Figma Node ID: 13-9075
  Component: Button Secondary
  Sizes: small, medium, large
  States: default, hover, clicked, disabled, loading
  Variations: with text, icon-only, with left/right icons
-->
<template>
  <button
    :class="[
      'marks-button',
      'marks-button--secondary',
      `marks-button--${size}`,
      {
        'marks-button--icon-only': iconOnly || (loading && loadingIconPosition === 'only'),
        'marks-button--disabled': disabled,
        'marks-button--loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    type="button"
  >
    <template v-if="loading">
      <template v-if="loadingIconPosition === 'left'">
        <span :class="['marks-button__icon', 'marks-button__icon--left', `marks-button__icon--${size}`]">
          <div :class="['marks-button__loader', `marks-button__loader--${size}`]">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
        <span class="marks-button__text"><slot>{{ text }}</slot></span>
      </template>
      <template v-else-if="loadingIconPosition === 'right'">
        <span class="marks-button__text"><slot>{{ text }}</slot></span>
        <span :class="['marks-button__icon', 'marks-button__icon--right', `marks-button__icon--${size}`]">
          <div :class="['marks-button__loader', `marks-button__loader--${size}`]">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      </template>
      <template v-else>
        <span :class="['marks-button__icon', `marks-button__icon--${size}`]">
          <div :class="['marks-button__loader', `marks-button__loader--${size}`]">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      </template>
    </template>
    <template v-else>
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
    </template>
  </button>
</template>

<script>
export default {
  name: 'marksButtonSecondary',
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIconPosition: {
      type: String,
      default: 'only',
      validator: (value) => ['left', 'right', 'only'].includes(value)
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
      if (!this.disabled && !this.loading) {
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
  border: 1px solid var(--marks-color-gray-200);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: $marks-font-family;
  font-weight: $marks-font-weight-medium;
  box-sizing: border-box;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
  }

  // Secondary button base styles
  &--secondary {
    background: var(--marks-color-gray-100);
    color: var(--marks-color-gray-500);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);

    &:hover:not(.marks-button--disabled) {
      background: var(--marks-color-gray-150);
    }

    &:active:not(.marks-button--disabled) {
      background: var(--marks-color-gray-200);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05) inset;
    }

    &.marks-button--loading {
      background: var(--marks-color-gray-200);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05) inset;
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  // Sizes
  &--small {
    padding: 8px 16px;
    border-radius: var(--marks-radius-8);
    gap: var(--marks-spacing-8);
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
    gap: var(--marks-spacing-12);
    line-height: 1.5;
    box-sizing: border-box;
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
    gap: var(--marks-spacing-12);
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
    background: var(--marks-color-gray-100) !important;
    color: var(--marks-color-gray-200) !important;
    border-color: transparent !important;
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

    // Icon wrapper sizes for loader (matches icon sizes)
    &--small {
      width: 16px;
      height: 16px;
    }

    &--medium,
    &--large {
      width: 20px;
      height: 20px;
    }
  }

  &__loader {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: currentColor;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      border-radius: 50%;
      animation: marks-button-loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }

    // Small size: 16px container, 12px ring, 2px margin, 1.5px border
    &--small {
      div {
        width: 12px;
        height: 12px;
        margin: 2px;
        border: 1.5px solid;
        border-color: currentColor transparent transparent transparent;
      }
    }

    // Medium/Large size: 20px container, 16px ring, 2px margin, 2px border
    &--medium,
    &--large {
      div {
        width: 16px;
        height: 16px;
        margin: 2px;
        border: 2px solid;
        border-color: currentColor transparent transparent transparent;
      }
    }
  }
}

@keyframes marks-button-loader-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
