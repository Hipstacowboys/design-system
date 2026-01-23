<!--
  Figma Node ID: 15-10129
  Component: Toggle
  States: 6 states (default on/off, hover on/off, disabled on/off)
-->
<template>
  <button
    :class="[
      'desys-toggle',
      {
        'desys-toggle--on': modelValue,
        'desys-toggle--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :aria-disabled="disabled"
  >
    <span class="desys-toggle__track">
      <span class="desys-toggle__thumb"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DesysToggle',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('update:modelValue', !this.modelValue);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--desys-color-primary-solid);
    outline-offset: 2px;
    border-radius: var(--desys-radius-8);
  }

  &__track {
    position: relative;
    width: 44px;
    height: 24px;
    background: var(--desys-color-gray-200);
    border-radius: var(--desys-radius-full);
    transition: background-color 0.2s ease;
  }

  &__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: var(--desys-color-white);
    border-radius: var(--desys-radius-full);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  // On state
  &--on {
    .desys-toggle__track {
      background: var(--desys-color-primary-solid);
    }

    .desys-toggle__thumb {
      transform: translateX(20px);
    }
  }

  // Hover states
  &:hover:not(.desys-toggle--disabled) {
    .desys-toggle__track {
      background: var(--desys-color-gray-300);
    }

    &.desys-toggle--on .desys-toggle__track {
      background: var(--desys-color-green-300);
    }
  }

  // Disabled states
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;

    .desys-toggle__track {
      background: var(--desys-color-gray-200);
    }

    &.desys-toggle--on .desys-toggle__track {
      background: var(--desys-color-gray-300);
    }
  }
}
</style>
