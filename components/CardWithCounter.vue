<!--
  Figma Node ID: 5-4894
  Component: Card with Counter
  States: default, hover, selected (count > 0), disabled
  Functionality: Counter component with increment/decrement buttons
-->
<template>
  <div
    :class="[
      'marks-count-with-counter',
      {
        'marks-count-with-counter--selected': isSelected,
        'marks-count-with-counter--disabled': disabled
      }
    ]"
  >
    <!-- Icon -->
    <div v-if="icon" class="marks-count-with-counter__icon">
      <component
        :is="icon"
        :size="32"
        :weight="'regular'"
        color="var(--marks-color-black)"
      />
    </div>

    <!-- Header Description -->
    <div class="marks-count-with-counter__header-description">
      <div v-if="title || $slots.title" class="marks-count-with-counter__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.description" class="marks-count-with-counter__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <!-- Button Container -->
    <div class="marks-count-with-counter__button-container">
      <ButtonLine
        :icon-only="true"
        size="medium"
        :left-icon="minusIcon"
        :disabled="disabled || count === 0"
        @click="handleDecrement"
      />
      <div class="marks-count-with-counter__count">{{ count }}</div>
      <ButtonLine
        :icon-only="true"
        size="medium"
        :left-icon="plusIcon"
        :disabled="disabled"
        @click="handleIncrement"
      />
    </div>

    <!-- Checkmark (when selected) -->
    <div v-if="isSelected" class="marks-count-with-counter__checkmark">
      <PhCheckCircle
        :size="24"
        :weight="'duotone'"
        color="currentColor"
      />
    </div>
  </div>
</template>

<script>
import { PhMinus, PhPlus, PhCheckCircle } from '@phosphor-icons/vue';
import ButtonLine from './ButtonLine.vue';

export default {
  name: 'marksCardWithCounter',
  components: {
    PhMinus,
    PhPlus,
    PhCheckCircle,
    ButtonLine
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
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
      default: null,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    count() {
      return this.modelValue;
    },
    isSelected() {
      return this.count > 0;
    },
    minusIcon() {
      return PhMinus;
    },
    plusIcon() {
      return PhPlus;
    }
  },
  methods: {
    handleIncrement() {
      if (!this.disabled) {
        const newValue = this.count + 1;
        this.$emit('update:modelValue', newValue);
        this.$emit('change', newValue);
      }
    },
    handleDecrement() {
      if (!this.disabled && this.count > 0) {
        const newValue = this.count - 1;
        this.$emit('update:modelValue', newValue);
        this.$emit('change', newValue);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-count-with-counter {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-16);
  border-radius: var(--marks-radius-16);
  background-color: var(--marks-color-white);
  // Use outline for default state (doesn't affect layout)
  border: 2px solid transparent;
  outline: 1px solid var(--marks-color-gray-200);
  outline-offset: -1px;
  padding: var(--marks-spacing-gutter-28);
  box-sizing: border-box;
  transition: background-color 0.2s ease, border-color 0.2s ease, outline-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;

  &:hover:not(.marks-count-with-counter--disabled):not(.marks-count-with-counter--selected) {
    background-color: var(--marks-color-gray-100);
    outline-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3);
  }

  // Selected state (when count > 0)
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

.marks-count-with-counter__icon {
  width: 32px;
  height: 32px;
  position: relative;
  flex-shrink: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--marks-color-black);

  :deep(svg) {
    width: 32px;
    height: 32px;
    display: block;
  }
}

.marks-count-with-counter__header-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-8);
  flex-shrink: 0;
  z-index: 1;
  width: 100%;
}

.marks-count-with-counter__title {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  width: 100%;

  .marks-count-with-counter--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-count-with-counter__description {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  width: 100%;

  .marks-count-with-counter--selected & {
    color: var(--marks-color-black);
  }

  .marks-count-with-counter--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-count-with-counter__button-container {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-16);
  flex-shrink: 0;
  z-index: 2;
}

.marks-count-with-counter__count {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  min-width: 20px;
  text-align: center;

  .marks-count-with-counter--disabled & {
    color: var(--marks-color-gray-200);
  }
}

.marks-count-with-counter__checkmark {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
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
