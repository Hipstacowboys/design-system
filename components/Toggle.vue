<!--
  Figma Node ID: 15-10129
  Component: Toggle
  States: 6 states (default on/off, hover on/off, disabled on/off)
-->
<template>
  <button
    :class="[
      'marks-toggle',
      {
        'marks-toggle--on': modelValue,
        'marks-toggle--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :aria-disabled="disabled"
  >
    <span class="marks-toggle__track">
      <span class="marks-toggle__thumb"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'marksToggle',
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
@use '../tokens/variables' as *;

.marks-toggle {
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
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
    border-radius: var(--marks-radius-8);
  }

  &__track {
    position: relative;
    width: 44px;
    height: 24px;
    background: var(--marks-color-gray-200);
    border-radius: var(--marks-radius-full);
    transition: background-color 0.2s ease;
  }

  &__thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: var(--marks-color-white);
    border-radius: var(--marks-radius-full);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  // On state
  &--on {
    .marks-toggle__track {
      background: var(--marks-color-primary-solid);
    }

    .marks-toggle__thumb {
      transform: translateX(20px);
    }
  }

  // Hover states
  &:hover:not(.marks-toggle--disabled) {
    .marks-toggle__track {
      background: var(--marks-color-gray-300);
    }

    &.marks-toggle--on .marks-toggle__track {
      background: var(--marks-color-green-300);
    }
  }

  // Disabled states
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;

    .marks-toggle__track {
      background: var(--marks-color-gray-200);
    }

    &.marks-toggle--on .marks-toggle__track {
      background: var(--marks-color-gray-300);
    }
  }
}
</style>
