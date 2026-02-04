<!--
  Figma Node ID: 13-9646
  Component: Input Message
  Types: error, info
-->
<template>
  <div
    v-if="hasMessage"
    :class="[
      'marks-input-message',
      `marks-input-message--${type}`
    ]"
  >
    <component
      :is="iconComponent"
      :class="'marks-input-message__icon'"
      :size="16"
      :weight="'bold'"
      color="currentColor"
    />
    <span class="marks-input-message__text">
      <slot>{{ message }}</slot>
    </span>
  </div>
</template>

<script>
import { PhWarningCircle, PhInfo } from '@phosphor-icons/vue';

export default {
  name: 'marksInputMessage',
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
@use '../tokens/variables' as *;

.marks-input-message {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-8);
  @include marks-typography-paragraph-sm-multiline;

  &--error {
    color: var(--marks-color-red-200);
  }

  &--info {
    color: var(--marks-color-gray-300);
  }

  &__icon {
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
  }
}
</style>
