<!--
  Figma Node ID: 16-10369
  Component: Alert
  Types: success, warning, error, info
  Features: title, description, optional action buttons, optional close button
-->
<template>
  <div
    :class="[
      'desys-alert',
      `desys-alert--${type}`
    ]"
  >
    <!-- Icon -->
    <component
      :is="iconComponent"
      :class="'desys-alert__icon'"
      :size="32"
      :weight="'regular'"
      color="currentColor"
    />

    <!-- Middle Content -->
    <div class="desys-alert__content">
      <!-- Text Content -->
      <div class="desys-alert__text-content">
        <div v-if="title || $slots.title" class="desys-alert__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="description || $slots.description" class="desys-alert__description">
          <slot name="description">{{ description }}</slot>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="$slots.actions" class="desys-alert__actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="closable"
      @click="handleClose"
      class="desys-alert__close"
      type="button"
      aria-label="Close"
    >
      <PhX
        :size="20"
        :weight="'bold'"
        color="currentColor"
      />
    </button>
  </div>
</template>

<script>
import { PhCheckCircle, PhWarning, PhXCircle, PhInfo, PhX } from '@phosphor-icons/vue';

export default {
  name: 'DesysAlert',
  components: {
    PhCheckCircle,
    PhWarning,
    PhXCircle,
    PhInfo,
    PhX
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['success', 'warning', 'error', 'info'].includes(value)
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  computed: {
    iconComponent() {
      const icons = {
        success: 'PhCheckCircle',
        warning: 'PhWarning',
        error: 'PhXCircle',
        info: 'PhInfo'
      };
      return icons[this.type] || 'PhInfo';
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.desys-alert {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--desys-spacing-gutter-12);
  border-radius: var(--desys-radius-16);
  border: 1px solid var(--desys-color-gray-150);
  padding: var(--desys-spacing-gutter-16);
  background: var(--desys-color-white);
  box-sizing: border-box;

  // Type-specific background gradients
  &--success {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(192, 243, 228, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(#fff, #fff);
    color: var(--desys-color-green-200);
  }

  &--warning {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(255, 235, 210, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(#fff, #fff);
    color: var(--desys-color-orange-200);
  }

  &--error {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(255, 228, 233, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(#fff, #fff);
    color: var(--desys-color-red-200);
  }

  &--info {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(236, 236, 236, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(#fff, #fff);
    color: var(--desys-color-gray-400);
  }
}

.desys-alert__icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.desys-alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--desys-spacing-gutter-20);
  padding-top: 4px;
  min-width: 0;
}

.desys-alert__text-content {
  display: flex;
  flex-direction: column;
  gap: var(--desys-spacing-gutter-12);
  align-self: stretch;
}

.desys-alert__title {
  @include desys-typography-paragraph-md-multiline;
  font-weight: $desys-font-weight-medium;
  color: var(--desys-color-black);
}

.desys-alert__description {
  @include desys-typography-paragraph-sm-multiline;
  color: var(--desys-color-gray-300);
  line-height: 150%;
}

.desys-alert__actions {
  display: flex;
  align-items: flex-start;
  gap: var(--desys-spacing-gutter-12);
}

.desys-alert__close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: var(--desys-color-gray-300);
  transition: color 0.2s ease;

  &:hover {
    color: var(--desys-color-black);
  }

  &:focus {
    outline: 2px solid var(--desys-color-black);
    outline-offset: 2px;
  }
}
</style>
