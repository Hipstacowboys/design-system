<!--
  Figma Node ID: 16-10583
  Component: Breadcrumb
  States: default, active
-->
<template>
  <span
    :class="[
      'desys-breadcrumb',
      {
        'desys-breadcrumb--active': active
      }
    ]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>

<script>
export default {
  name: 'DesysBreadcrumb',
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
@import '../tokens/variables';

.desys-breadcrumb {
  @include desys-typography-paragraph-sm-multiline;
  color: var(--desys-color-gray-400);
  white-space: nowrap;

  // Active state
  &--active {
    color: var(--desys-color-black);
    font-weight: $desys-font-weight-medium;
  }
}
</style>
