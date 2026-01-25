<!--
  Figma Node ID: 16-11051
  Component: Notification Dialog
  Uses: NotificationMessage components
  Features: header with title and switch (All/Unread), list of notification messages
-->
<template>
  <div class="marks-notification-dialog">
    <!-- Header -->
    <div class="marks-notification-dialog__header">
      <div class="marks-notification-dialog__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="marks-notification-dialog__switch">
        <button
          :class="['marks-notification-dialog__switch-option', { 'marks-notification-dialog__switch-option--active': filter === 'all' }]"
          @click="$emit('update:filter', 'all')"
          type="button"
        >
          All
        </button>
        <button
          :class="['marks-notification-dialog__switch-option', { 'marks-notification-dialog__switch-option--active': filter === 'unread' }]"
          @click="$emit('update:filter', 'unread')"
          type="button"
        >
          Unread
        </button>
      </div>
    </div>

    <!-- Notification Messages -->
    <div class="marks-notification-dialog__messages">
      <slot>
        <NotificationMessage
          v-for="(message, index) in messages"
          :key="index"
          type="inList"
          :icon="message.icon"
          :title="message.title"
          :timestamp="message.timestamp"
          :main-text="message.mainText"
          :description="message.description"
          :new="message.new"
        >
          <template v-if="message.actions" #actions>
            <ButtonPrimary
              v-if="message.actions.primary"
              size="small"
              :text="message.actions.primary.text"
              :left-icon="message.actions.primary.leftIcon"
              @click="handleAction('primary', index)"
            />
            <ButtonSecondary
              v-if="message.actions.secondary"
              size="small"
              :text="message.actions.secondary.text"
              @click="handleAction('secondary', index)"
            />
          </template>
        </NotificationMessage>
      </slot>
    </div>
  </div>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import ButtonSecondary from './ButtonSecondary.vue';

export default {
  name: 'marksNotificationDialog',
  components: {
    NotificationMessage,
    ButtonPrimary,
    ButtonSecondary
  },
  props: {
    title: {
      type: String,
      default: 'Notifications'
    },
    filter: {
      type: String,
      default: 'all',
      validator: (value) => ['all', 'unread'].includes(value)
    },
    messages: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:filter', 'action'],
  methods: {
    handleAction(type, index) {
      this.$emit('action', { type, index, message: this.messages[index] });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-notification-dialog {
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);
  border-radius: var(--marks-radius-24);
  background-color: var(--marks-color-white);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.marks-notification-dialog__header {
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-24);
  border-bottom: 1px solid var(--marks-color-gray-150);
}

.marks-notification-dialog__title {
  flex: 1;
  @include marks-typography-h4-regular;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
}

.marks-notification-dialog__switch {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-16);
}

.marks-notification-dialog__switch-option {
  border: none;
  background: transparent;
  cursor: pointer;
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-gray-300);
  padding: 0;
  transition: color 0.2s ease;

  &--active {
    color: var(--marks-color-black);
  }

  &:hover {
    color: var(--marks-color-gray-400);
  }

  &--active:hover {
    color: var(--marks-color-black);
  }
}

.marks-notification-dialog__messages {
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;
}
</style>
