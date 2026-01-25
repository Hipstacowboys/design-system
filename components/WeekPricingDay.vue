<!--
  Figma Node ID: 20-12795
  Component: Week Pricing Day
  Types: vertical, horizontal
  States: default, filled
  Features: day label, button to set pricing, input field, checkmark icon
-->
<template>
  <div
    :class="[
      'marks-week-pricing-day',
      `marks-week-pricing-day--${type}`,
      {
        'marks-week-pricing-day--filled': isFilled
      }
    ]"
  >
    <!-- Vertical Layout -->
    <template v-if="type === 'vertical'">
      <!-- Day Label -->
      <div class="marks-week-pricing-day__day-label">
        <b class="marks-week-pricing-day__day-text">{{ dayLabel }}</b>
      </div>

      <!-- Default State: Button -->
      <div v-if="!showInput" class="marks-week-pricing-day__button-container">
        <ButtonSecondary
          size="medium"
          :left-icon="PhPlus"
          text="Set"
          @click="focusInput"
        />
      </div>

      <!-- Filled State: Input with Checkmark -->
      <div v-else class="marks-week-pricing-day__input-container">
        <InputField
          ref="inputRef"
          v-model="inputValue"
          size="medium"
          @blur="handleBlur"
          @focus="handleFocus"
        />
      </div>
      <!-- Checkmark in top right corner (only when filled) -->
      <div v-if="isFilled" class="marks-week-pricing-day__checkmark">
        <PhCheckCircle :size="24" :weight="'duotone'" color="#0e5842" />
      </div>
    </template>

    <!-- Horizontal Layout -->
    <template v-else>
      <!-- Day Label with Checkmark (if filled) -->
      <div class="marks-week-pricing-day__day-label-horizontal">
        <b class="marks-week-pricing-day__day-text">{{ dayLabel }}</b>
        <div v-if="isFilled" class="marks-week-pricing-day__checkmark-horizontal">
          <PhCheckCircle :size="24" :weight="'duotone'" color="#0e5842" />
        </div>
      </div>

      <!-- Default State: Button -->
      <div v-if="!showInput" class="marks-week-pricing-day__button-container-horizontal">
        <ButtonSecondary
          size="medium"
          :left-icon="PhPlus"
          text="Set"
          @click="focusInput"
        />
      </div>

      <!-- Filled State: Input -->
      <div v-else class="marks-week-pricing-day__input-container-horizontal">
        <InputField
          ref="inputRef"
          v-model="inputValue"
          size="medium"
          @blur="handleBlur"
          @focus="handleFocus"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { PhPlus, PhCheckCircle } from '@phosphor-icons/vue';
import ButtonSecondary from './ButtonSecondary.vue';
import InputField from './InputField.vue';

export default {
  name: 'marksWeekPricingDay',
  components: {
    PhPlus,
    PhCheckCircle,
    ButtonSecondary,
    InputField
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    dayLabel: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      PhPlus,
      PhCheckCircle,
      inputValue: this.modelValue !== null ? String(this.modelValue) : '',
      showInput: this.modelValue !== null && this.modelValue !== '' && this.modelValue !== '0' && Number(this.modelValue) !== 0,
      isFocused: false
    }
  },
  computed: {
    isFilled() {
      // Check if value is empty or "0" (only when not focused, to allow typing "0.99")
      if (this.isFocused) {
        // While focused, consider it filled if there's any input (even "0")
        return this.inputValue !== '' && this.inputValue !== null;
      }
      // When not focused, check if value is empty or "0"
      const trimmed = this.inputValue !== null ? String(this.inputValue).trim() : '';
      return trimmed !== '' && trimmed !== '0';
    }
  },
  watch: {
    modelValue(newVal) {
      this.inputValue = newVal !== null && newVal !== '' ? String(newVal) : '';
      // Only update showInput if not currently focused (to allow typing "0" to start "0.99")
      if (!this.isFocused) {
        const trimmed = newVal !== null ? String(newVal).trim() : '';
        this.showInput = trimmed !== '' && trimmed !== '0';
      }
    },
    inputValue(newVal) {
      // Emit the raw string value - validation will be handled later
      this.$emit('update:modelValue', newVal === '' || newVal === null ? null : newVal);
      this.$emit('change', newVal === '' || newVal === null ? null : newVal);
      // Don't change showInput here - it's controlled by focus/blur and button click
    }
  },
  methods: {
    focusInput() {
      this.showInput = true;
      this.$nextTick(() => {
        if (this.$refs.inputRef) {
          // InputField component exposes the input ref
          const inputElement = this.$refs.inputRef.$refs?.inputRef || this.$refs.inputRef.$el?.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        }
      });
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
      // If value is empty or "0", hide input and show button
      const trimmed = this.inputValue !== null ? String(this.inputValue).trim() : '';
      if (trimmed === '' || trimmed === '0') {
        this.inputValue = '';
        this.showInput = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-week-pricing-day {
  position: relative;
  border-radius: var(--marks-radius-12);
  // Use outline for default state (doesn't affect layout)
  border: 2px solid transparent;
  outline: 1px solid var(--marks-color-gray-200);
  outline-offset: -1px;
  transition: background-color 0.2s ease, border-color 0.2s ease, outline 0s;
  box-sizing: border-box;

  &--filled {
    background-color: rgba(14, 88, 66, 0.05);
    border: 2px solid var(--marks-color-green-300);
    outline: none;
    transition: background-color 0.2s ease, border-color 0.2s ease, outline 0s;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--marks-spacing-gutter-16) var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-8);
    gap: var(--marks-spacing-gutter-16);
    width: 112px;
  }

  &--horizontal {
    display: flex;
    align-items: center;
    padding: var(--marks-spacing-gutter-8);
    gap: var(--marks-spacing-gutter-16);
    width: 100%;
    min-width: 289px;
  }
}

.marks-week-pricing-day__day-label {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--marks-spacing-gutter-8);
  flex-shrink: 0;
  z-index: 0;
}

.marks-week-pricing-day__day-label-horizontal {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 var(--marks-spacing-gutter-16);
  gap: 10px;
}

.marks-week-pricing-day__day-text {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  position: relative;
  flex: 1;
}

.marks-week-pricing-day__button-container {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marks-week-pricing-day__button-container-horizontal {
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// Override ButtonSecondary padding for this component
:deep(.marks-button--secondary.marks-button--medium) {
  padding: var(--marks-spacing-gutter-16) var(--marks-spacing-gutter-16) !important;
}

.marks-week-pricing-day__input-container {
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  flex-shrink: 0;
}

.marks-week-pricing-day__input-container-horizontal {
  width: 110px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

// InputField component handles its own styling
.marks-week-pricing-day__input-container :deep(.marks-input-field),
.marks-week-pricing-day__input-container-horizontal :deep(.marks-input-field) {
  width: 100%;
}

.marks-week-pricing-day__checkmark {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 11.25px;
  right: 11.14px;
  z-index: 2;
  flex-shrink: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marks-week-pricing-day__checkmark-horizontal {
  width: 24px;
  height: 24px;
  position: relative;
  flex-shrink: 0;
  pointer-events: none;
}
</style>
