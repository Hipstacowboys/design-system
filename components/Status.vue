<!--
  Figma Node ID: 15-10242
  Component: Status
  Variants: default, prominent
  Types: success, warning, info, error
-->
<template>
  <div
    :class="[
      'desys-status',
      `desys-status--${variant}`,
      `desys-status--${type}`
    ]"
  >
    <span class="desys-status__dot"></span>
    <span class="desys-status__text">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DesysStatus',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'prominent'].includes(value)
    },
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'warning', 'info', 'error'].includes(value)
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

.desys-status {
  display: inline-flex;
  align-items: center;
  gap: var(--desys-spacing-gutter-8);
  @include desys-typography-paragraph-sm-multiline;
  font-weight: $desys-font-weight-medium;
  color: var(--desys-color-black);

  // Default variant - just dot and text
  &--default {
    // No additional styling needed
  }

  // Prominent variant - with background
  &--prominent {
    background-color: var(--desys-color-gray-100);
    border-radius: 100px;
    padding: 8px 12px;
  }

  // Status types - dot colors
  &--success {
    .desys-status__dot {
      background-color: var(--desys-color-green-200);
    }
  }

  &--warning {
    .desys-status__dot {
      background-color: var(--desys-color-orange-200);
    }
  }

  &--info {
    .desys-status__dot {
      background-color: var(--desys-color-blue-200);
    }
  }

  &--error {
    .desys-status__dot {
      background-color: var(--desys-color-red-200);
    }
  }
}

.desys-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}

.desys-status__text {
  white-space: nowrap;
}
</style>
