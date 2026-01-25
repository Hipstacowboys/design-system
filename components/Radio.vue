<!--
  Figma Node ID: 15-10163
  Component: Radio
  States: unchecked, checked, hover (unchecked/checked), disabled (unchecked/checked)
-->
<template>
  <div class="marks-radio-wrapper">
    <input
      :id="radioId"
      ref="input"
      type="radio"
      :class="[
        'marks-radio',
        {
          'marks-radio--disabled': disabled
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
      class="marks-radio__dot"
    />
  </div>
</template>

<script>
export default {
  name: 'marksRadio',
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

.marks-radio-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.marks-radio {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid var(--marks-color-gray-200);
  border-radius: 50%;
  background: var(--marks-color-white);
  cursor: pointer;
  position: relative;
  margin: 0;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
  }

  // Checked state
  &:checked {
    border-color: var(--marks-color-black);
  }

  // Hover states
  &:hover:not(.marks-radio--disabled):not(:checked) {
    border-color: var(--marks-color-gray-300);
  }

  &:hover:not(.marks-radio--disabled):checked {
    border-color: var(--marks-color-gray-500);
  }

  // Disabled states
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: var(--marks-color-gray-150);
    border-color: var(--marks-color-gray-200);
  }
}

.marks-radio__dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--marks-color-black);
  pointer-events: none;
  transition: background-color 0.2s ease;
}

// Hover state for checked radio - change dot color
.marks-radio-wrapper:hover .marks-radio:checked:not(.marks-radio--disabled) ~ .marks-radio__dot {
  background: var(--marks-color-gray-500);
}

// Disabled checked state
.marks-radio--disabled:checked ~ .marks-radio__dot {
  background: var(--marks-color-gray-200);
}
</style>
