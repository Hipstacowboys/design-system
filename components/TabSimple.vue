<!--
  Figma Node ID: 16-10569
  Component: Tab Simple
  States: active, activeHover, default, defaultHover, disabled
-->
<template>
  <button
    :class="[
      'marks-tab-simple',
      {
        'marks-tab-simple--active': active,
        'marks-tab-simple--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'marksTabSimple',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
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

.marks-tab-simple {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-24);
  border: none;
  background: transparent;
  cursor: pointer;
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-gray-400);
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover:not(.marks-tab-simple--disabled):not(.marks-tab-simple--active) {
    color: var(--marks-color-gray-300);
  }

  // Active state
  &--active {
    color: var(--marks-color-black);
    border-bottom-color: var(--marks-color-black);

    &:hover {
      border-bottom-color: var(--marks-color-gray-400);
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-150);
  }
}
</style>
