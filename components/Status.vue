<!--
  Figma Node ID: 15-10242
  Component: Status
  Variants: default, prominent
  Types: success, warning, info, error
-->
<template>
  <div
    :class="[
      'marks-status',
      `marks-status--${variant}`,
      `marks-status--${type}`
    ]"
  >
    <span class="marks-status__dot"></span>
    <span class="marks-status__text">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'marksStatus',
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
@use '../tokens/variables' as *;

.marks-status {
  display: inline-flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  @include marks-typography-paragraph-sm-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);

  // Default variant - just dot and text
  &--default {
    // No additional styling needed
  }

  // Prominent variant - with background
  &--prominent {
    background-color: var(--marks-color-gray-100);
    border-radius: 100px;
    padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
  }

  // Status types - dot colors
  &--success {
    .marks-status__dot {
      background-color: var(--marks-color-green-200);
    }
  }

  &--warning {
    .marks-status__dot {
      background-color: var(--marks-color-orange-200);
    }
  }

  &--info {
    .marks-status__dot {
      background-color: var(--marks-color-blue-200);
    }
  }

  &--error {
    .marks-status__dot {
      background-color: var(--marks-color-red-200);
    }
  }
}

.marks-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}

.marks-status__text {
  white-space: nowrap;
}
</style>
