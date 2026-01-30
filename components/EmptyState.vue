<!--
  Figma Node ID: 16-10695
  Component: Empty State
  Features: icon, title, description, optional primary button
-->
<template>
  <div class="marks-empty-state">
    <!-- Icon Container -->
    <div class="marks-empty-state__icon-container">
      <component
        :is="icon"
        :class="'marks-empty-state__icon'"
        :size="32"
        :weight="'regular'"
        color="currentColor"
      />
    </div>

    <!-- Text Content -->
    <div class="marks-empty-state__content">
      <div v-if="title || $slots.title" class="marks-empty-state__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="description || $slots.description" class="marks-empty-state__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>

    <!-- Action Button -->
    <div v-if="$slots.action || buttonText" class="marks-empty-state__action">
      <slot name="action">
        <ButtonPrimary
          v-if="buttonText"
          size="medium"
          :text="buttonText"
          @click="$emit('action')"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import { PhWarningCircle } from '@phosphor-icons/vue';
import ButtonPrimary from './ButtonPrimary.vue';

export default {
  name: 'marksEmptyState',
  components: {
    PhWarningCircle,
    ButtonPrimary
  },
  props: {
    icon: {
      type: [Object, String],
      default: 'PhWarningCircle'
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    buttonText: {
      type: String,
      default: null
    }
  },
  emits: ['action']
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--marks-spacing-gutter-28);
  text-align: center;
  width: 100%;
}

.marks-empty-state__icon-container {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--marks-color-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.marks-empty-state__icon {
  color: var(--marks-color-gray-400);
}

.marks-empty-state__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  width: 100%;
}

.marks-empty-state__title {
  @include marks-typography-h4-regular;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  width: 100%;
}

.marks-empty-state__description {
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-gray-300);
  line-height: 150%;
  width: 100%;
}

.marks-empty-state__action {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
