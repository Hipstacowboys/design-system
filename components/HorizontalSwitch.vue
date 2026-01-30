<!--
  Figma Node ID: 73-19596
  Component: Horizontal Switch
  Features: button group with primary (active) and ghost (inactive) buttons
-->
<template>
  <div class="marks-horizontal-switch">
    <template v-for="(option, index) in options" :key="index">
      <ButtonPrimary
        v-if="modelValue === option.value"
        size="small"
        :text="option.label"
        @click="selectOption(option)"
      />
      <ButtonGhost
        v-else
        size="small"
        :text="option.label"
        @click="selectOption(option)"
      />
    </template>
  </div>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';
import ButtonGhost from './ButtonGhost.vue';

export default {
  name: 'marksHorizontalSwitch',
  components: {
    ButtonPrimary,
    ButtonGhost
  },
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    selectOption(option) {
      this.$emit('update:modelValue', option.value);
      this.$emit('change', option.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-horizontal-switch {
  border-radius: var(--marks-radius-12);
  background-color: var(--marks-color-gray-150);
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-8);
  gap: var(--marks-spacing-gutter-4);
}

// Override button styles to match design and prevent layout jumps
:deep(.marks-button--primary.marks-button--small),
:deep(.marks-button--ghost.marks-button--small) {
  // Reserve space for shadow to prevent layout jumps
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0);
  // Reserve space for border to prevent layout jumps (same as BigSwitch)
  border: 1px solid transparent;
  transition: box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

:deep(.marks-button--primary.marks-button--small) {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid transparent;
}

:deep(.marks-button--ghost.marks-button--small) {
  background: transparent;
  border: 1px solid transparent;

  &:hover:not(.marks-button--disabled) {
    border: 1px solid var(--marks-color-gray-200);
  }
}
</style>
