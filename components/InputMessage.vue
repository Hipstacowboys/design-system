<!--
  Figma Node ID: 13-9646
  Component: Input Message
  Types: error, info
-->
<template>
  <div
    v-if="hasMessage"
    :class="[
      'desys-input-message',
      `desys-input-message--${type}`
    ]"
  >
    <component
      :is="iconComponent"
      :class="'desys-input-message__icon'"
      :size="16"
      :weight="'bold'"
      color="currentColor"
    />
    <span class="desys-input-message__text">
      <slot>{{ message }}</slot>
    </span>
  </div>
</template>

<script>
import { PhWarningCircle, PhInfo } from '@phosphor-icons/vue';

export default {
  name: 'DesysInputMessage',
  components: {
    PhWarningCircle,
    PhInfo
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['error', 'info'].includes(value)
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconComponent() {
      return this.type === 'error' ? 'PhWarningCircle' : 'PhInfo';
    },
    hasMessage() {
      return this.message || this.$slots.default;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-input-message {
  display: flex;
  align-items: center;
  gap: var(--desys-spacing-gutter-8);
  @include desys-typography-paragraph-sm-multiline;

  &--error {
    color: var(--desys-color-red-200);
  }

  &--info {
    color: var(--desys-color-gray-300);
  }

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
  }
}
</style>
