<!--
  Figma Node ID: 16-10569
  Component: Tab Simple
  States: active, activeHover, default, defaultHover, disabled
-->
<template>
  <button
    :class="[
      'desys-tab-simple',
      {
        'desys-tab-simple--active': active,
        'desys-tab-simple--disabled': disabled
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
  name: 'DesysTabSimple',
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

.desys-tab-simple {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  @include desys-typography-paragraph-md-multiline;
  font-weight: $desys-font-weight-medium;
  color: var(--desys-color-gray-400);
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover:not(.desys-tab-simple--disabled):not(.desys-tab-simple--active) {
    color: var(--desys-color-gray-300);
  }

  // Active state
  &--active {
    color: var(--desys-color-black);
    border-bottom-color: var(--desys-color-black);

    &:hover {
      border-bottom-color: var(--desys-color-gray-400);
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    color: var(--desys-color-gray-150);
  }
}
</style>
