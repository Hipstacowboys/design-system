<!--
  Figma Node ID: 16-10728
  Component: Notification Message
  Types: single, inList
  Features: icon, title, timestamp, content, optional actions, optional new indicator
-->
<template>
  <div
    :class="[
      'marks-notification-message',
      `marks-notification-message--${type}`
    ]"
  >
    <!-- Icon -->
    <div class="marks-notification-message__icon">
      <component
        :is="icon"
        :class="'marks-notification-message__icon-inner'"
        :size="32"
        :weight="'regular'"
        color="currentColor"
      />
    </div>

    <!-- Middle Content -->
    <div class="marks-notification-message__content">
      <!-- Header and Content -->
      <div class="marks-notification-message__text-content">
        <div class="marks-notification-message__header">
          <div v-if="title || $slots.title" class="marks-notification-message__title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div v-if="timestamp || $slots.timestamp" class="marks-notification-message__timestamp">
            <slot name="timestamp">{{ timestamp }}</slot>
          </div>
        </div>
        <div v-if="mainText || description || $slots.mainText || $slots.description" class="marks-notification-message__body">
          <div v-if="mainText || $slots.mainText" class="marks-notification-message__main-text">
            <slot name="mainText">{{ mainText }}</slot>
          </div>
          <div v-if="description || $slots.description" class="marks-notification-message__description">
            <slot name="description">{{ description }}</slot>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="$slots.actions" class="marks-notification-message__actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <!-- New Indicator -->
    <div v-if="new" class="marks-notification-message__new-indicator"></div>
  </div>
</template>

<script>
import { PhWarningCircle } from '@phosphor-icons/vue';

export default {
  name: 'marksNotificationMessage',
  components: {
    PhWarningCircle
  },
  props: {
    type: {
      type: String,
      default: 'single',
      validator: (value) => ['single', 'inList'].includes(value)
    },
    icon: {
      type: [Object, String],
      default: 'PhWarningCircle'
    },
    title: {
      type: String,
      default: null
    },
    timestamp: {
      type: String,
      default: null
    },
    mainText: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    new: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-notification-message {
  display: flex;
  align-items: flex-start;
  gap: var(--marks-spacing-12);
  box-sizing: border-box;

  // Single type - standalone with shadow
  &--single {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);
    border-radius: var(--marks-radius-16);
    background-color: var(--marks-color-white);
    border: 1px solid var(--marks-color-gray-150);
    padding: var(--marks-spacing-16);
  }

  // InList type - in dialog with borders
  &--inList {
    border-top: 1px solid var(--marks-color-gray-150);
    border-bottom: 1px solid var(--marks-color-gray-150);
    padding: 24px var(--marks-spacing-16);
    margin-top: -1px;
    position: relative;
  }
}

.marks-notification-message__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--marks-color-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.marks-notification-message__icon-inner {
  color: var(--marks-color-gray-400);
}

.marks-notification-message__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--marks-spacing-20);
  min-width: 0;
}

.marks-notification-message__text-content {
  display: flex;
  flex-direction: column;
  gap: var(--marks-spacing-8);
  align-self: stretch;
}

.marks-notification-message__header {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-8);
}

.marks-notification-message__title {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  flex: 1;
}

.marks-notification-message__timestamp {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  white-space: nowrap;
}

.marks-notification-message__body {
  display: flex;
  flex-direction: column;
  gap: var(--marks-spacing-8);
  width: 100%;
}

.marks-notification-message__main-text {
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-black);
}

.marks-notification-message__description {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
  line-height: 150%;
}

.marks-notification-message__actions {
  display: flex;
  align-items: flex-start;
  gap: var(--marks-spacing-12);
}

.marks-notification-message__new-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--marks-color-green-200);
  flex-shrink: 0;
  align-self: flex-start;
}
</style>
