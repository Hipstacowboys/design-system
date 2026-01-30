<!--
  Component: Dropdown
  Functionality: Dropdown menu for actions
-->
<template>
  <div class="marks-dropdown-wrapper" ref="dropdownWrapper">
    <div @click="toggleDropdown">
      <slot name="trigger"></slot>
    </div>
    <Transition name="marks-dropdown">
      <div
        v-if="isOpen"
        class="marks-dropdown"
        @mousedown.prevent
        @click.stop
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'marksDropdown',
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (this.isOpen && this.$refs.dropdownWrapper && !this.$refs.dropdownWrapper.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.marks-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  min-width: 200px;
  background: var(--marks-color-white);
  border-radius: var(--marks-radius-24);
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);
  padding: var(--marks-spacing-gutter-8);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-height: 300px;
  overflow-y: auto;
  box-sizing: border-box;
}

:deep(.marks-dropdown__item) {
  width: 100%;
  border: none;
  background: var(--marks-color-white);
  border-radius: var(--marks-radius-12);
  padding: var(--marks-spacing-gutter-16);
  gap: var(--marks-spacing-gutter-12);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-black);
  text-align: left;
  box-sizing: border-box;

  &:hover:not(.marks-dropdown__item--disabled) {
    background: var(--marks-color-gray-100);
  }

  &.marks-dropdown__item--disabled {
    cursor: not-allowed;
    color: var(--marks-color-gray-200);
  }
}

:deep(.marks-dropdown__item--selected) {
  background: var(--marks-color-gray-100);
  font-weight: $marks-font-weight-medium;
}

// Dropdown transition
.marks-dropdown-enter-active,
.marks-dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.marks-dropdown-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.marks-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
