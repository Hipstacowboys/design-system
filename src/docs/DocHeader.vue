<template>
  <header class="header">
    <a href="/" class="header__logo">
      <span class="header__logo-mark">M</span>
      Design System
    </a>
    <nav class="header__nav">
      <a href="/documentation/introduction.html"
         :class="['header__nav-link', { 'is-active': isFoundation }]">Foundations</a>
      <a href="/documentation/button.html"
         :class="['header__nav-link', { 'is-active': !isFoundation }]">Components</a>
    </nav>
  </header>
</template>

<script>
const foundationSlugs = [
  'introduction', 'getting-started', 'design-tokens',
  'icons', 'theming'
];

export default {
  name: 'DocHeader',
  props: {
    activePage: {
      type: String,
      required: true
    }
  },
  computed: {
    isFoundation() {
      return foundationSlugs.includes(this.activePage);
    }
  }
};
</script>
