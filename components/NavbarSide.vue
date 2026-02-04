<!--
  Figma Node ID: 72-19506
  Component: Navbar Side
  Features: logo, sections with labels, navbar items
-->
<template>
  <div
    class="marks-navbar-side"
    :class="`marks-navbar-side--${theme}`"
    :data-theme="theme"
  >
    <!-- Logo -->
    <div v-if="logo || $slots.logo" class="marks-navbar-side__logo">
      <slot name="logo">
        <img v-if="logo" :src="logo" :alt="logoAlt || 'Logo'" />
      </slot>
    </div>

    <!-- Sections -->
    <div class="marks-navbar-side__sections">
      <div
        v-for="(section, sectionIndex) in sections"
        :key="sectionIndex"
        class="marks-navbar-side__section"
      >
        <div v-if="section.label" class="marks-navbar-side__section-label">
          <div class="marks-navbar-side__section-label-text">{{ section.label }}</div>
        </div>
        <div class="marks-navbar-side__items">
          <NavbarItem
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
            :icon="item.icon"
            :label="item.label"
            :active="item.active || (modelValue !== null && modelValue === item.value)"
            :theme="theme"
            @click="handleItemClick(item)"
          />
        </div>
      </div>

      <!-- Bottom items (without section label) -->
      <div v-if="bottomItems && bottomItems.length > 0" class="marks-navbar-side__bottom-items">
        <NavbarItem
          v-for="(item, itemIndex) in bottomItems"
          :key="itemIndex"
          :icon="item.icon"
          :label="item.label"
          :active="item.active || (modelValue !== null && modelValue === item.value)"
          :theme="theme"
          @click="handleItemClick(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'marksNavbarSide',
  components: {
    NavbarItem
  },
  props: {
    logo: {
      type: String,
      default: null
    },
    logoAlt: {
      type: String,
      default: null
    },
    sections: {
      type: Array,
      required: true,
      default: () => []
    },
    bottomItems: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    theme: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark'].includes(value)
    }
  },
  emits: ['update:modelValue', 'item-click'],
  methods: {
    handleItemClick(item) {
      if (item.value !== undefined) {
        this.$emit('update:modelValue', item.value);
      }
      this.$emit('item-click', item);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-navbar-side {
  width: 284px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--marks-spacing-32) var(--marks-spacing-24);
  box-sizing: border-box;
  gap: 47px;

  // Light theme (default) - uses white background
  &--light {
    background-color: var(--marks-color-white);
  }

  // Dark theme - uses white variable (which is black in dark column due to variable swap)
  &--dark {
    background-color: var(--marks-color-white);
  }
}

.marks-navbar-side__logo {
  width: 138px;
  position: relative;
  max-height: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

.marks-navbar-side__sections {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 0 0;
  gap: var(--marks-spacing-32);
}

.marks-navbar-side__section {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-8);
}

.marks-navbar-side__section-label {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--marks-spacing-12);
}

.marks-navbar-side__section-label-text {
  flex: 1;
  position: relative;
  @include marks-typography-paragraph-sm-multiline;
  font-weight: $marks-font-weight-medium;

  .marks-navbar-side--dark & {
    color: #8d8d8d;
  }

  .marks-navbar-side--light & {
    color: var(--marks-color-gray-350);
  }
}

.marks-navbar-side__items {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-4);
}

.marks-navbar-side__bottom-items {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-4);
}
</style>
