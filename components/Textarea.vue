<!--
  Figma Node ID: 13-9779
  Component: Textarea
  Includes: Textarea Field, Input Label, Character Count
-->
<template>
  <div class="desys-textarea">
    <!-- Labels (above textarea) -->
    <div v-if="label || labelRight" class="desys-textarea__labels">
      <label v-if="label" :for="textareaId" class="desys-textarea__label desys-textarea__label--left">
        {{ label }}
      </label>
      <span v-if="labelRight" class="desys-textarea__label desys-textarea__label--right">
        {{ labelRight }}
      </span>
    </div>

    <!-- Textarea Field -->
    <div class="desys-textarea__field-wrapper">
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
    <div v-if="maxLength" class="desys-textarea__character-count">
      {{ characterCount }} / {{ maxLength }} characters
    </div>
  </div>
</template>

<script>
import TextareaField from './TextareaField.vue';

export default {
  name: 'DesysTextarea',
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
  computed: {
    textareaId() {
      return `textarea-${this._uid}`;
    },
    characterCount() {
      return String(this.modelValue || '').length;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.desys-textarea__labels {
  display: flex;
  align-items: center;
  gap: var(--desys-spacing-gutter-12);
  margin-bottom: var(--desys-spacing-gutter-12);
}

.desys-textarea__label {
  @include desys-typography-paragraph-md-multiline;
  color: var(--desys-color-black);

  &--left {
    flex: 1;
  }

  &--right {
    color: var(--desys-color-gray-300);
    text-align: right;
  }
}

.desys-textarea__field-wrapper {
  // Spacing handled by labels margin-bottom and character-count margin-top
}

.desys-textarea__character-count {
  margin-top: var(--desys-spacing-gutter-8);
  @include desys-typography-paragraph-sm-multiline;
  color: var(--desys-color-gray-300);
}
</style>
