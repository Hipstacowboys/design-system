<!--
  Figma Node ID: 13-9683
  Component: Textarea Field
  States: default, hover, filled, focused, disabled, error
-->
<template>
  <div
    :class="[
      'marks-textarea-field',
      {
        'marks-textarea-field--error': error,
        'marks-textarea-field--disabled': disabled
      }
    ]"
    @click="handleWrapperClick"
  >
    <!-- Textarea -->
    <textarea
      ref="textareaRef"
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="['marks-textarea-field__textarea']"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'marksTextareaField',
  props: {
    textareaId: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 6
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'input', 'focus', 'blur'],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleWrapperClick(event) {
      // Focus textarea when clicking on the wrapper or empty areas
      const target = event.target;
      const isInteractive = target.tagName === 'TEXTAREA';
      
      if (!isInteractive && this.$refs.textareaRef && !this.disabled) {
        this.$refs.textareaRef.focus();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-textarea-field {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  min-height: 160px;
  border: 2px solid transparent;
  background: var(--marks-color-white);
  box-sizing: border-box;
  box-shadow: 0 0 0 1px var(--marks-color-gray-200);
  border-radius: var(--marks-radius-12);
  transition: all 0.2s ease;
  cursor: text;

  &:focus-within {
    border-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--marks-color-black);
    min-height: 166px;
  }

  &:hover:not(.marks-textarea-field--disabled):not(:focus-within) {
    box-shadow: 0 0 0 1px var(--marks-color-gray-300);
  }

  // Error state
  &--error {
    border-color: var(--marks-color-red-200) !important;
    box-shadow: 0 0 0 1px var(--marks-color-red-200) !important;
    color: var(--marks-color-red-200);
    min-height: 166px;

    .marks-textarea-field__textarea {
      color: var(--marks-color-red-200);
    }

    &:focus-within {
      border-color: var(--marks-color-red-200) !important;
      box-shadow: 0px 0px 0px 4px rgba(253, 56, 96, 0.3), 0 0 0 1px var(--marks-color-red-200) !important;
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;
    background: var(--marks-color-gray-100) !important;
    box-shadow: 0 0 0 1px var(--marks-color-gray-200) !important;
    border-color: transparent !important;
    opacity: 0.5;
  }
}

.marks-textarea-field__textarea {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--marks-color-black);
  min-width: 0;
  width: 100%;
  padding: 16px 20px;
  margin: 0;
  resize: none;
  font-family: $marks-font-family;
  @include marks-typography-paragraph-md-one-line;
  line-height: 1.5;

  &::placeholder {
    color: var(--marks-color-gray-300);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-200);
  }

  .marks-textarea-field--error & {
    color: var(--marks-color-red-200);
  }
}
</style>
