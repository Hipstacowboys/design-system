<!--
  Figma Node ID: 15-10163
  Component: Radio with Label
  Variants: With title only, or with title and paragraph (optional)
-->
<template>
  <label class="desys-radio-with-label" :class="{ 'desys-radio-with-label--has-paragraph': paragraph }">
    <Radio
      :model-value="modelValue"
      :value="value"
      :name="name"
      :disabled="disabled"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <span class="desys-radio-with-label__text">
      <span class="desys-radio-with-label__title">{{ title }}</span>
      <span v-if="paragraph" class="desys-radio-with-label__paragraph">{{ paragraph }}</span>
    </span>
  </label>
</template>

<script>
import Radio from './Radio.vue';

export default {
  name: 'DesysRadioWithLabel',
  components: {
    Radio
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
    name: {
      type: String,
      required: true
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
@import '../tokens/variables';

.desys-radio-with-label {
  display: flex;
  align-items: center;
  gap: var(--desys-spacing-gutter-12);
  cursor: pointer;

  // When paragraph exists, align radio to top (with title)
  &--has-paragraph {
    align-items: flex-start;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: var(--desys-spacing-gutter-4);
    cursor: pointer;
    flex: 1;
  }

  &__title {
    @include desys-typography-paragraph-md-one-line;
    color: var(--desys-color-gray-500);
    user-select: none;
  }

  &__paragraph {
    @include desys-typography-paragraph-sm-multiline;
    color: var(--desys-color-gray-300);
    user-select: none;
  }
}
</style>
