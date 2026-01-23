<!--
  Figma Node ID: 15-10163
  Component: Radio
  States: unchecked, checked, hover (unchecked/checked), disabled (unchecked/checked)
-->
<template>
  <div class="desys-radio-wrapper">
    <input
      :id="radioId"
      ref="input"
      type="radio"
      :class="[
        'desys-radio',
        {
          'desys-radio--disabled': disabled
        }
      ]"
      :name="name"
      :checked="modelValue === value"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    />
    <div
      v-if="modelValue === value"
      class="desys-radio__dot"
    />
  </div>
</template>

<script>
export default {
  name: 'DesysRadio',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  computed: {
    radioId() {
      return `radio-${this._uid}`;
    }
  },
  methods: {
    handleChange(event) {
      if (!this.disabled) {
        this.$emit('update:modelValue', this.value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-radio-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.desys-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid var(--desys-color-gray-200);
  border-radius: 50%;
  background: var(--desys-color-white);
  cursor: pointer;
  position: relative;
  margin: 0;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid var(--desys-color-primary-solid);
    outline-offset: 2px;
  }

  // Checked state
  &:checked {
    border-color: var(--desys-color-black);
  }

  // Hover states
  &:hover:not(.desys-radio--disabled):not(:checked) {
    border-color: var(--desys-color-gray-300);
  }

  &:hover:not(.desys-radio--disabled):checked {
    border-color: var(--desys-color-gray-500);
  }

  // Disabled states
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--desys-color-gray-150);
    border-color: var(--desys-color-gray-200);
  }
}

.desys-radio__dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--desys-color-black);
  pointer-events: none;
  transition: background-color 0.2s ease;
}

// Hover state for checked radio - change dot color
.desys-radio-wrapper:hover .desys-radio:checked:not(.desys-radio--disabled) ~ .desys-radio__dot {
  background: var(--desys-color-gray-500);
}

// Disabled checked state
.desys-radio--disabled:checked ~ .desys-radio__dot {
  background: var(--desys-color-gray-200);
}
</style>
