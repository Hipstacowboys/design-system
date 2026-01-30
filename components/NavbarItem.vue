<!--
  Figma Node ID: 72-19031
  Component: Navbar Item
  States: default, hover, active
  Features: icon, label, clickable navigation item
-->
<template>
  <div
    :class="[
      'marks-navbar-item',
      {
        'marks-navbar-item--active': active,
        'marks-navbar-item--hover': hover
      }
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="handleClick"
  >
    <div :class="['marks-navbar-item__icon-wrapper', { 'marks-navbar-item__icon-wrapper--active': active }]">
      <div class="marks-navbar-item__icon">
        <component
          :is="icon"
          :size="24"
          :weight="'regular'"
          color="currentColor"
        />
      </div>
    </div>
    <component :is="active ? 'b' : 'div'" class="marks-navbar-item__label">
      <slot>{{ label }}</slot>
    </component>
  </div>
</template>

<script>
export default {
  name: 'marksNavbarItem',
  props: {
    icon: {
      type: [Object, String],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  data() {
    return {
      hover: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-navbar-item {
  align-self: stretch;
  border-radius: var(--marks-radius-16);
  background-color: var(--marks-color-black);
  display: flex;
  align-items: center;
  padding: 4px;
  gap: var(--marks-spacing-gutter-16);
  cursor: pointer;
  transition: background-color 0.2s ease;
  @include marks-typography-paragraph-md-multiline;
  color: #ececec;

  &--hover:not(&--active) {
    background-color: #2a2a2a;
  }

  &--active {
    background-color: #2a2a2a;
    color: var(--marks-color-white);
  }
}

.marks-navbar-item__icon-wrapper {
  height: 44px;
  width: 44px;
  border-radius: var(--marks-radius-12);
  background-color: var(--marks-color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--marks-spacing-gutter-12);
  box-sizing: border-box;
  flex-shrink: 0;

  &--active {
    background-color: var(--marks-color-green-300);
    border: 1px solid #2a2a2a;
  }
}

.marks-navbar-item__icon {
  height: 24px;
  width: 24px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.marks-navbar-item__label {
  position: relative;
  flex: 1;
}
</style>
