<!--
  Figma Node ID: 15-10095
  Component: Checkbox
  States: unchecked, checked, indeterminate, disabled (unchecked/checked/indeterminate)
-->
<template>
  <div class="marks-checkbox-wrapper">
    <input
      :id="checkboxId"
      ref="input"
      type="checkbox"
      :class="[
        'marks-checkbox',
        {
          'marks-checkbox--indeterminate': indeterminate && !modelValue,
          'marks-checkbox--disabled': disabled
        }
      ]"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
      @click="handleClick"
    />
    <PhCheck
      v-if="modelValue"
      :class="['marks-checkbox__icon', 'marks-checkbox__icon--check']"
      :size="16"
      color="white"
      weight="bold"
    />
    <PhMinus
      v-else-if="indeterminate && !modelValue"
      :class="['marks-checkbox__icon', 'marks-checkbox__icon--minus']"
      :size="12"
      color="white"
      weight="bold"
    />
  </div>
</template>

<script>
import { PhCheck, PhMinus } from '@phosphor-icons/vue';

export default {
  name: 'marksCheckbox',
  components: {
    PhCheck,
    PhMinus
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  computed: {
    checkboxId() {
      return `checkbox-${this._uid}`;
    }
  },
  mounted() {
    // Set indeterminate state on native checkbox
    if (this.$el) {
      this.$el.indeterminate = this.indeterminate && !this.modelValue;
    }
  },
  watch: {
    indeterminate(newVal) {
      if (this.$el) {
        this.$el.indeterminate = newVal && !this.modelValue;
      }
    },
    modelValue(newVal) {
      if (this.$el && newVal) {
        this.$el.indeterminate = false;
      }
    }
  },
  methods: {
    handleChange(event) {
      if (!this.disabled) {
        this.$emit('update:modelValue', event.target.checked);
      }
    },
    handleClick(event) {
      // Prevent default if indeterminate to handle it manually
      if (this.indeterminate && !this.modelValue) {
        event.preventDefault();
        this.$emit('update:modelValue', true);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-checkbox-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.marks-checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid var(--marks-color-gray-200);
  border-radius: 6px;
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
    background: var(--marks-color-primary-solid);
    border: 2px solid var(--marks-color-primary-solid);
  }

  // Indeterminate state
  &--indeterminate {
    background: var(--marks-color-primary-solid);
    border-color: var(--marks-color-primary-solid);
  }

  // Hover states
  &:hover:not(.marks-checkbox--disabled):not(:checked):not(&--indeterminate) {
    border-color: var(--marks-color-gray-300);
    background-color: var(--marks-color-white);
  }

  // Disabled states
  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.marks-checkbox__icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
