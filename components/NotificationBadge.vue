<!--
  Figma Node ID: 16-10265
  Component: Notification Badge
  Types: simple (dot), singleNumber (1 digit), number (multiple digits)
-->
<template>
  <div
    :class="[
      'desys-notification-badge',
      `desys-notification-badge--${type}`
    ]"
  >
    <span v-if="type !== 'simple'" class="desys-notification-badge__text">
      {{ displayValue }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'DesysNotificationBadge',
  props: {
    type: {
      type: String,
      default: 'simple',
      validator: (value) => ['simple', 'singleNumber', 'number'].includes(value)
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    displayValue() {
      if (this.value !== null && this.value !== undefined) {
        return String(this.value);
      }
      // Auto-detect type if value is provided
      if (this.type === 'singleNumber' || this.type === 'number') {
        return this.value || '';
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-notification-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--desys-color-red-200);
  color: var(--desys-color-white);
  box-sizing: border-box;
  flex-shrink: 0;

  // Simple type (dot)
  &--simple {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--desys-color-white);
    padding: 0;
  }

  // Single number type (1 digit)
  &--singleNumber {
    min-width: 18px;
    height: 18px;
    border-radius: 9px;
    padding: 3px 6px;
    @include desys-typography-paragraph-xs;
    font-weight: $desys-font-weight-bold;
    line-height: 1;
  }

  // Number type (multiple digits)
  &--number {
    min-width: 18px;
    height: 18px;
    border-radius: 9px;
    padding: 3px 6px;
    @include desys-typography-paragraph-xs;
    font-weight: $desys-font-weight-bold;
    line-height: 1;
  }

  &__text {
    display: inline-block;
    white-space: nowrap;
  }
}
</style>
