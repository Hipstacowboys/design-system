<!--
  Figma Node ID: 20-12652
  Component: Small Switch Option
  States: default, hover, selected, disabled
  Functionality: Individual option for Small Switch (radio button behavior)
-->
<template>
  <button
    :class="[
      'marks-small-switch-option',
      {
        'marks-small-switch-option--selected': isSelected,
        'marks-small-switch-option--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
    role="radio"
    :aria-checked="isSelected"
    :aria-disabled="disabled"
  >
    <!-- Text Container -->
    <div class="marks-small-switch-option__text-container">
      <div v-if="title || $slots.title" class="marks-small-switch-option__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.description" class="marks-small-switch-option__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <!-- Checkmark (when selected) -->
    <div v-if="isSelected" class="marks-small-switch-option__checkmark">
      <PhCheckCircle
        :size="24"
        :weight="'duotone'"
        color="currentColor"
      />
    </div>
  </button>
</template>

<script>
import { PhCheckCircle } from '@phosphor-icons/vue';

export default {
  name: 'marksSmallSwitchOption',
  components: {
    PhCheckCircle
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    isSelected() {
      return this.modelValue === this.value;
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('update:modelValue', this.value);
        this.$emit('change', this.value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-small-switch-option {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--marks-color-white);
  padding: var(--marks-spacing-gutter-20);
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  border: none;
  outline: none;

  &:hover:not(.marks-small-switch-option--disabled):not(.marks-small-switch-option--selected) {
    background-color: var(--marks-color-gray-100);
  }

  // Selected state
  &--selected {
    background-color: var(--marks-color-primary-light);
    isolation: isolate;
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background-color: var(--marks-color-white);
    opacity: 0.5;
    color: var(--marks-color-gray-200);
  }
}

.marks-small-switch-option__text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-8);
  flex: 1;
  z-index: 0;
  min-width: 0;
}

.marks-small-switch-option__title {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  width: 100%;

  .marks-small-switch-option--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-small-switch-option__description {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  width: 100%;

  .marks-small-switch-option--selected & {
    color: var(--marks-color-black);
  }

  .marks-small-switch-option--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-small-switch-option__checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-shrink: 0;
  color: var(--marks-color-green-300);
  animation: pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
