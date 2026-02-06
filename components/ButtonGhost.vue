<!--
  Figma Node ID: 13-9075
  Component: Button Ghost
  Sizes: small, medium, large
  States: default, hover, clicked, disabled, loading
  Variations: with text, icon-only, with left/right icons
-->
<template>
  <button
    :class="[
      'marks-button',
      'marks-button--ghost',
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
        <span :class="['marks-button__icon', 'marks-button__icon--left', 'marks-button__icon--spin']" :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none" :width="iconSize" :height="iconSize" aria-hidden="true">
            <path d="M11.6992 8.75987C12.1243 8.94447 12.3237 9.44233 12.086 9.84011C11.5923 10.6661 10.9195 11.3754 10.1132 11.9134C9.07336 12.6072 7.85557 12.9867 6.60564 13.0063C5.35571 13.0259 4.12661 12.6849 3.06548 12.024C2.00436 11.3632 1.15618 10.4105 0.622483 9.28009C0.0887886 8.14965 -0.107802 6.88936 0.0562472 5.65008C0.220296 4.41081 0.738033 3.24508 1.54747 2.29244C2.35691 1.3398 3.42376 0.640638 4.62028 0.278644C5.54802 -0.0020326 6.52324 -0.0707829 7.47476 0.0729221C7.93298 0.142126 8.19065 0.61249 8.06306 1.058V1.058C7.93548 1.5035 7.47026 1.75334 7.0094 1.70476C6.37212 1.63759 5.72495 1.69773 5.10624 1.88492C4.21847 2.1535 3.42691 2.67226 2.82634 3.37907C2.22577 4.08589 1.84163 4.95082 1.71991 5.87031C1.59819 6.7898 1.74405 7.72489 2.14003 8.56363C2.53601 9.40237 3.16533 10.1092 3.95264 10.5995C4.73995 11.0899 5.6519 11.3429 6.5793 11.3283C7.50669 11.3138 8.41025 11.0322 9.18178 10.5174C9.71948 10.1587 10.1772 9.69719 10.5303 9.16244C10.7856 8.77573 11.2742 8.57528 11.6992 8.75987V8.75987Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="marks-button__text"><slot>{{ text }}</slot></span>
      </template>
      <template v-else-if="loadingIconPosition === 'right'">
        <span class="marks-button__text"><slot>{{ text }}</slot></span>
        <span :class="['marks-button__icon', 'marks-button__icon--right', 'marks-button__icon--spin']" :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none" :width="iconSize" :height="iconSize" aria-hidden="true">
            <path d="M11.6992 8.75987C12.1243 8.94447 12.3237 9.44233 12.086 9.84011C11.5923 10.6661 10.9195 11.3754 10.1132 11.9134C9.07336 12.6072 7.85557 12.9867 6.60564 13.0063C5.35571 13.0259 4.12661 12.6849 3.06548 12.024C2.00436 11.3632 1.15618 10.4105 0.622483 9.28009C0.0887886 8.14965 -0.107802 6.88936 0.0562472 5.65008C0.220296 4.41081 0.738033 3.24508 1.54747 2.29244C2.35691 1.3398 3.42376 0.640638 4.62028 0.278644C5.54802 -0.0020326 6.52324 -0.0707829 7.47476 0.0729221C7.93298 0.142126 8.19065 0.61249 8.06306 1.058V1.058C7.93548 1.5035 7.47026 1.75334 7.0094 1.70476C6.37212 1.63759 5.72495 1.69773 5.10624 1.88492C4.21847 2.1535 3.42691 2.67226 2.82634 3.37907C2.22577 4.08589 1.84163 4.95082 1.71991 5.87031C1.59819 6.7898 1.74405 7.72489 2.14003 8.56363C2.53601 9.40237 3.16533 10.1092 3.95264 10.5995C4.73995 11.0899 5.6519 11.3429 6.5793 11.3283C7.50669 11.3138 8.41025 11.0322 9.18178 10.5174C9.71948 10.1587 10.1772 9.69719 10.5303 9.16244C10.7856 8.77573 11.2742 8.57528 11.6992 8.75987V8.75987Z" fill="currentColor"/>
          </svg>
        </span>
      </template>
      <template v-else>
        <span :class="['marks-button__icon', 'marks-button__icon--spin']" :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none" :width="iconSize" :height="iconSize" aria-hidden="true">
            <path d="M11.6992 8.75987C12.1243 8.94447 12.3237 9.44233 12.086 9.84011C11.5923 10.6661 10.9195 11.3754 10.1132 11.9134C9.07336 12.6072 7.85557 12.9867 6.60564 13.0063C5.35571 13.0259 4.12661 12.6849 3.06548 12.024C2.00436 11.3632 1.15618 10.4105 0.622483 9.28009C0.0887886 8.14965 -0.107802 6.88936 0.0562472 5.65008C0.220296 4.41081 0.738033 3.24508 1.54747 2.29244C2.35691 1.3398 3.42376 0.640638 4.62028 0.278644C5.54802 -0.0020326 6.52324 -0.0707829 7.47476 0.0729221C7.93298 0.142126 8.19065 0.61249 8.06306 1.058V1.058C7.93548 1.5035 7.47026 1.75334 7.0094 1.70476C6.37212 1.63759 5.72495 1.69773 5.10624 1.88492C4.21847 2.1535 3.42691 2.67226 2.82634 3.37907C2.22577 4.08589 1.84163 4.95082 1.71991 5.87031C1.59819 6.7898 1.74405 7.72489 2.14003 8.56363C2.53601 9.40237 3.16533 10.1092 3.95264 10.5995C4.73995 11.0899 5.6519 11.3429 6.5793 11.3283C7.50669 11.3138 8.41025 11.0322 9.18178 10.5174C9.71948 10.1587 10.1772 9.69719 10.5303 9.16244C10.7856 8.77573 11.2742 8.57528 11.6992 8.75987V8.75987Z" fill="currentColor"/>
          </svg>
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

    &.marks-button--loading {
      background: var(--marks-color-gray-100);
      border: 1px solid var(--marks-color-gray-200);
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

    &--spin {
      animation: marks-button-spin 0.8s linear infinite;
    }
  }
}

@keyframes marks-button-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
