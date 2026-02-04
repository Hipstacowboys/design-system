<!--
  Figma Node ID: 16-10369
  Component: Alert
  Types: success, warning, error, info
  Features: title, description, optional action buttons, optional close button
-->
<template>
  <div
    :class="[
      'marks-alert',
      `marks-alert--${type}`
    ]"
  >
    <!-- Icon -->
    <component
      :is="iconComponent"
      :class="'marks-alert__icon'"
      :size="32"
      :weight="'regular'"
      color="currentColor"
    />

    <!-- Middle Content -->
    <div class="marks-alert__content">
      <!-- Text Content -->
      <div class="marks-alert__text-content">
        <div v-if="title || $slots.title" class="marks-alert__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="description || $slots.description" class="marks-alert__description">
          <slot name="description">{{ description }}</slot>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="$slots.actions" class="marks-alert__actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="closable"
      @click="handleClose"
      class="marks-alert__close"
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
  name: 'marksAlert',
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
@use '../tokens/variables' as *;

.marks-alert {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--marks-spacing-12);
  border-radius: var(--marks-radius-16);
  border: 1px solid var(--marks-color-gray-150);
  padding: var(--marks-spacing-16);
  background: var(--marks-color-white);
  box-sizing: border-box;

  // Type-specific background gradients
  &--success {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(192, 243, 228, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(var(--marks-color-white), var(--marks-color-white));
    color: var(--marks-color-green-200);
  }

  &--warning {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(255, 235, 210, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(var(--marks-color-white), var(--marks-color-white));
    color: var(--marks-color-orange-200);
  }

  &--error {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(255, 228, 233, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(var(--marks-color-white), var(--marks-color-white));
    color: var(--marks-color-red-200);
  }

  &--info {
    background: radial-gradient(157.43% 127.21% at 6.45% 11.61%, rgba(236, 236, 236, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(var(--marks-color-white), var(--marks-color-white));
    color: var(--marks-color-gray-400);
  }
}

:root[data-theme="dark"] .marks-alert {
  &__title {
    color: var(--marks-color-white);
  }
}

.marks-alert__icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marks-alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--marks-spacing-20);
  padding-top: 4px;
  min-width: 0;
}

.marks-alert__text-content {
  display: flex;
  flex-direction: column;
  gap: var(--marks-spacing-12);
  align-self: stretch;
}

.marks-alert__title {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
}

.marks-alert__description {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  line-height: 150%;
}

.marks-alert__actions {
  display: flex;
  align-items: flex-start;
  gap: var(--marks-spacing-12);
}

.marks-alert__close {
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
  color: var(--marks-color-gray-300);
  transition: color 0.2s ease;

  &:hover {
    color: var(--marks-color-black);
  }

  &:focus {
    outline: 2px solid var(--marks-color-black);
    outline-offset: 2px;
  }
}

:root[data-theme="dark"] .marks-alert__close {
  &:hover {
    color: var(--marks-color-white);
  }

  &:focus {
    outline-color: var(--marks-color-white);
  }
}
</style>

<style lang="scss">
@use '../tokens/variables' as *;

:root[data-theme="dark"] .marks-alert__title {
  color: var(--marks-color-white);
}
</style>
