<template>
  <nav class="layout__nav">
    <div class="nav">
      <section class="nav__section">
        <span class="nav__section-title">Foundations</span>
        <ul class="nav__list">
          <li v-for="item in foundations" :key="item.slug" class="nav__item">
            <a :href="'/documentation/' + item.slug + '.html'"
               :class="['nav__link', { 'is-active': activePage === item.slug }]"
               v-text="item.label"></a>
          </li>
        </ul>
      </section>
      <section class="nav__section">
        <span class="nav__section-title">Components</span>
        <ul class="nav__list">
          <li v-for="item in components" :key="item.slug" class="nav__item">
            <a :href="'/documentation/' + item.slug + '.html'"
               :class="['nav__link', { 'is-active': activePage === item.slug }]"
               v-text="item.label"></a>
          </li>
        </ul>
      </section>
    </div>
  </nav>
</template>

<script>
const foundations = [
  { slug: 'introduction', label: 'Introduction' },
  { slug: 'getting-started', label: 'Getting Started' },
  { slug: 'design-tokens', label: 'Design Tokens' },
  { slug: 'icons', label: 'Icons' },
  { slug: 'theming', label: 'Theming' },
];

const components = [
  { slug: 'button', label: 'Button' },
  { slug: 'toggle', label: 'Toggle' },
  { slug: 'checkbox', label: 'Checkbox' },
  { slug: 'input', label: 'Input' },
  { slug: 'select', label: 'Select' },
  { slug: 'radio', label: 'Radio' },
  { slug: 'textarea', label: 'Textarea' },
  { slug: 'tabs', label: 'Tabs' },
  { slug: 'alert', label: 'Alert' },
  { slug: 'status', label: 'Status' },
  { slug: 'notification-badge', label: 'Notification Badge' },
  { slug: 'tooltip', label: 'Tooltip' },
  { slug: 'dropdown', label: 'Dropdown' },
  { slug: 'empty-state', label: 'Empty State' },
  { slug: 'notification-message', label: 'Notification Message' },
  { slug: 'notification-dialog', label: 'Notification Dialog' },
  { slug: 'breadcrumbs', label: 'Breadcrumbs' },
  { slug: 'navbar-side', label: 'Navbar Side' },
  { slug: 'switch', label: 'Switch' },
  { slug: 'horizontal-switch', label: 'Horizontal Switch' },
  { slug: 'table', label: 'Table' },
  { slug: 'widget', label: 'Widget' },
  { slug: 'card-with-counter', label: 'Card With Counter' },
];

export default {
  name: 'DocNav',
  props: {
    activePage: {
      type: String,
      required: true
    }
  },
  data() {
    return { foundations, components };
  }
};
</script>
