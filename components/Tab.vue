<!--
  Figma Node ID: 16-10646
  Component: Tab
  States: active, default
-->
<template>
  <button
    :class="[
      'marks-tab',
      {
        'marks-tab--active': active,
        'marks-tab--disabled': disabled
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
  name: 'marksTab',
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

.marks-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 24px;
  border: 1px solid var(--marks-color-gray-200);
  background: transparent;
  border-radius: var(--marks-radius-8) var(--marks-radius-8) 0 0;
  cursor: pointer;
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-gray-300);
  transition: all 0.2s ease;
  box-sizing: border-box;
  margin-left: -1px;
  position: relative;

  &:first-child {
    margin-left: 0;
    border-top-left-radius: var(--marks-radius-8);
  }

  &:not(:first-child) {
    border-top-left-radius: 0;
  }

  &:not(:last-child) {
    border-top-right-radius: 0;
  }

  &:last-child {
    border-top-right-radius: var(--marks-radius-8);
  }

  &:hover:not(.marks-tab--disabled):not(.marks-tab--active) {
    color: var(--marks-color-gray-400);
  }

  // Active state
  &--active {
    background-color: var(--marks-color-white);
    border-top: 1px solid var(--marks-color-gray-200);
    border-right: 1px solid var(--marks-color-gray-200);
    border-left: 1px solid var(--marks-color-gray-200);
    border-bottom: 1px solid var(--marks-color-white);
    color: var(--marks-color-black);
    z-index: 1;
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
