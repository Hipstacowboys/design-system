<!--
  Figma Node ID: 16-10583
  Component: Breadcrumb
  States: default, active
-->
<template>
  <span
    :class="[
      'marks-breadcrumb',
      {
        'marks-breadcrumb--active': active
      }
    ]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>

<script>
export default {
  name: 'marksBreadcrumb',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-breadcrumb {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-400);
  white-space: nowrap;

  // Active state
  &--active {
    color: var(--marks-color-black);
    font-weight: $marks-font-weight-medium;
  }
}
</style>
