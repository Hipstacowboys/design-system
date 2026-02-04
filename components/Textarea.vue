<!--
  Figma Node ID: 13-9779
  Component: Textarea
  Includes: Textarea Field, Input Label, Character Count
-->
<template>
  <div class="marks-textarea">
    <!-- Labels (above textarea) -->
    <div v-if="label || labelRight" class="marks-textarea__labels">
      <label v-if="label" :for="textareaId" class="marks-textarea__label marks-textarea__label--left">
        {{ label }}
      </label>
      <span v-if="labelRight" class="marks-textarea__label marks-textarea__label--right">
        {{ labelRight }}
      </span>
    </div>

    <!-- Textarea Field -->
    <div class="marks-textarea__field-wrapper">
      <TextareaField
        :textarea-id="textareaId"
        :model-value="modelValue"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        :error="error"
        @update:modelValue="$emit('update:modelValue', $event)"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </div>

    <!-- Character Count (below textarea) -->
    <div v-if="maxLength" class="marks-textarea__character-count">
      {{ characterCount }} / {{ maxLength }} characters
    </div>
  </div>
</template>

<script>
import TextareaField from './TextareaField.vue';

let textareaIdCounter = 0;

export default {
  name: 'marksTextarea',
  components: {
    TextareaField
  },
  props: {
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
    label: {
      type: String,
      default: null
    },
    labelRight: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue', 'input', 'focus', 'blur'],
  data() {
    return {
      generatedTextareaId: ++textareaIdCounter
    }
  },
  computed: {
    textareaId() {
      return `textarea-${this.generatedTextareaId}`;
    },
    characterCount() {
      return String(this.modelValue || '').length;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.marks-textarea__labels {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-12);
  margin-bottom: var(--marks-spacing-12);
}

.marks-textarea__label {
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-black);

  &--left {
    flex: 1;
  }

  &--right {
    color: var(--marks-color-gray-300);
    text-align: right;
  }
}

.marks-textarea__field-wrapper {
  // Spacing handled by labels margin-bottom and character-count margin-top
}

.marks-textarea__character-count {
  margin-top: var(--marks-spacing-8);
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
}
</style>
