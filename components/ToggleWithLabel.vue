<!--
  Figma Node ID: 15-10138
  Component: Toggle with Label
  Variants: With title only, or with title and paragraph (optional)
-->
<template>
  <div class="desys-toggle-with-label" :class="{ 'desys-toggle-with-label--has-paragraph': paragraph }">
    <Toggle
      :model-value="modelValue"
      :disabled="disabled"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <label class="desys-toggle-with-label__text" @click="handleLabelClick">
      <span class="desys-toggle-with-label__title">{{ title }}</span>
      <span v-if="paragraph" class="desys-toggle-with-label__paragraph">{{ paragraph }}</span>
    </label>
  </div>
</template>

<script>
import Toggle from './Toggle.vue';

export default {
  name: 'DesysToggleWithLabel',
  components: {
    Toggle
  },
  props: {
    modelValue: {
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
  emits: ['update:modelValue'],
  methods: {
    handleLabelClick() {
      if (!this.disabled) {
        this.$emit('update:modelValue', !this.modelValue);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-toggle-with-label {
  display: flex;
  align-items: center;
  gap: var(--desys-spacing-gutter-12);
  cursor: pointer;

  // When paragraph exists, align toggle to top (with title)
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
