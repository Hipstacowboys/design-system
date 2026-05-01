<template>
  <header class="header">
    <a href="/documentation/introduction.html" class="header__logo">
      <span class="header__logo-mark">M</span>
      Design System
    </a>
    <nav class="header__nav" aria-label="Site sections">
      <a href="/documentation/introduction.html"
         :class="['header__nav-link', { 'is-active': activeSection === 'documentation' }]">Documentation</a>
      <a href="/comparison.html"
         :class="['header__nav-link', { 'is-active': activeSection === 'comparison' }]">Comparison</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DocHeader',
  props: {
    activePage: {
      type: String,
      required: true
    }
  },
  computed: {
    activeSection() {
      return this.activePage === 'comparison' ? 'comparison' : 'documentation';
    }
  }
};
</script>
