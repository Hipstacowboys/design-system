<!--
  Figma Node ID: 4-877
  Component: Big Switch
  States: default, hover, selected, disabled
  Functionality: Radio button behavior (single selection)
-->
<template>
  <button
    :class="[
      'marks-big-switch',
      {
        'marks-big-switch--selected': isSelected,
        'marks-big-switch--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
    type="button"
    role="radio"
    :aria-checked="isSelected"
    :aria-disabled="disabled"
  >
    <!-- Icon Placeholder -->
    <div class="marks-big-switch__icon-placeholder">
      <div :class="['marks-big-switch__icon', { 'marks-big-switch__icon--selected': isSelected }]">
        <slot name="icon">
          <component
            v-if="icon"
            :is="icon"
            :size="32"
            :weight="'regular'"
            color="currentColor"
          />
        </slot>
      </div>
    </div>

    <!-- Text Container -->
    <div class="marks-big-switch__text-container">
      <div v-if="title || $slots.title" class="marks-big-switch__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.description" class="marks-big-switch__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <!-- Checkmark (when selected) -->
    <div v-if="isSelected" class="marks-big-switch__checkmark">
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
  name: 'marksBigSwitch',
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
    icon: {
      type: [Object, String],
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
@import '../tokens/variables';

.marks-big-switch {
  position: relative;
  display: flex;
  align-items: center;
  gap: 21px;
  border-radius: var(--marks-radius-16);
  background-color: var(--marks-color-white);
  // Use outline for default state (doesn't affect layout)
  border: 2px solid transparent;
  outline: 1px solid var(--marks-color-gray-200);
  outline-offset: -1px;
  padding: 28px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, outline-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, color 0.2s ease;
  box-sizing: border-box;
  text-align: left;
  width: 100%;

  &:hover:not(.marks-big-switch--disabled):not(.marks-big-switch--selected) {
    background-color: var(--marks-color-gray-100);
    outline-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3);
  }

  // Selected state
  &--selected {
    background-color: rgba(14, 88, 66, 0.05);
    border: 2px solid var(--marks-color-green-300);
    outline: none;
    transition: background-color 0.2s ease, border-color 0.2s ease, outline 0s;
    isolation: isolate;
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background-color: var(--marks-color-white);
    outline-color: var(--marks-color-gray-150);
    opacity: 0.5;
    color: var(--marks-color-gray-200);
  }
}

.marks-big-switch__icon-placeholder {
  width: 79px;
  height: 79px;
  position: relative;
  flex-shrink: 0;
  z-index: 0;
}

.marks-big-switch__icon {
  width: 79px;
  height: 79px;
  border-radius: var(--marks-radius-12);
  background-color: var(--marks-color-gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &--selected {
    background-color: var(--marks-color-green-300);
  }

  .marks-big-switch--disabled & {
    background-color: var(--marks-color-gray-200);
  }
}

.marks-big-switch__text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-12);
  flex: 1;
  z-index: 1;
  min-width: 0;
}

.marks-big-switch__title {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  width: 100%;

  .marks-big-switch--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-big-switch__description {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  line-height: 150%;
  width: 100%;

  .marks-big-switch--selected & {
    color: var(--marks-color-black);
  }

  .marks-big-switch--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-big-switch__checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
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
