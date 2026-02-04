<!--
  Figma Node ID: 15-10095
  Component: Checkbox with Label
  Variants: With title only, or with title and paragraph (optional)
-->
<template>
  <label class="marks-checkbox-with-label" :class="{ 'marks-checkbox-with-label--has-paragraph': paragraph }">
    <Checkbox
      :model-value="modelValue"
      :indeterminate="indeterminate"
      :disabled="disabled"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <span class="marks-checkbox-with-label__text">
      <span class="marks-checkbox-with-label__title">{{ title }}</span>
      <span v-if="paragraph" class="marks-checkbox-with-label__paragraph">{{ paragraph }}</span>
    </span>
  </label>
</template>

<script>
import Checkbox from './Checkbox.vue';

export default {
  name: 'marksCheckboxWithLabel',
  components: {
    Checkbox
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
    },
    title: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-checkbox-with-label {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-12);
  cursor: pointer;

  // When paragraph exists, align checkbox to top (with title)
  &--has-paragraph {
    align-items: flex-start;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: var(--marks-spacing-4);
    cursor: pointer;
    flex: 1;
  }

  &__title {
    @include marks-typography-paragraph-md-one-line;
    color: var(--marks-color-gray-500);
    user-select: none;
  }

  &__paragraph {
    @include marks-typography-paragraph-sm-multiline;
    color: var(--marks-color-gray-300);
    user-select: none;
  }
}
</style>
