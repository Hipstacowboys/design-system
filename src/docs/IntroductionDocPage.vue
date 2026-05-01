<template>
  <DocHeader active-page="introduction" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="introduction" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Foundations</span>
        <h1>Introduction</h1>
        <p class="content__lead">
          The Marks Design System is a public component library for building consistent,
          accessible product interfaces. It provides documented design tokens, reusable
          components, and clear usage guidance without exposing private implementation
          details.
        </p>

        <!-- ─── 1. What is Marks Design System ─── -->
        <h2 id="what-is" class="comp-section-h2">What is the Marks Design System?</h2>
        <p class="comp-section-desc">
          A shared UI foundation for products, integrations, and customer-facing booking
          experiences that need to look and behave consistently.
        </p>

        <p>
          Use these docs to understand when to use each component, which props are available,
          how states and accessibility are handled, and how to keep interfaces aligned with
          the design language.
        </p>

        <div class="intro-card-row">
          <div class="intro-card">
            <div class="intro-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM48,136a8,8,0,0,1,8-8H200a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm0-32a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,104Z"/></svg>
            </div>
            <strong>Reusable components</strong>
            <span>Ready-made UI blocks with documented props, states, and behavior rules.</span>
          </div>
          <div class="intro-card">
            <div class="intro-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM72,96V80a8,8,0,0,1,16,0V96a8,8,0,0,1-16,0Zm48,0V80a8,8,0,0,1,16,0V96a8,8,0,0,1-16,0Zm48,0V80a8,8,0,0,1,16,0V96a8,8,0,0,1-16,0ZM72,144V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm48,0V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm48,0V128a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z"/></svg>
            </div>
            <strong>Design tokens</strong>
            <span>Shared colors, spacing, typography, and radius values for consistent interfaces.</span>
          </div>
          <div class="intro-card">
            <div class="intro-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M232,116a12,12,0,0,1-12,12H196v24a12,12,0,0,1-24,0V128H148v24a12,12,0,0,1-24,0V128H100v24a12,12,0,0,1-24,0V128H36a12,12,0,0,1,0-24H76V80H36a12,12,0,0,1,0-24H76V32a12,12,0,0,1,24,0V56h24V32a12,12,0,0,1,24,0V56h24V32a12,12,0,0,1,24,0V56h24a12,12,0,0,1,0,24H196v24h24A12,12,0,0,1,232,116ZM220,176H36a12,12,0,0,0,0,24H220a12,12,0,0,0,0-24ZM172,80H100v24h72Z"/></svg>
            </div>
            <strong>Public guidance</strong>
            <span>Usage rules, accessibility notes, and examples written for people using the system.</span>
          </div>
        </div>

        <!-- ─── 2. Core Principles ─── -->
        <h2 id="principles" class="comp-section-h2">Core Principles</h2>
        <p class="comp-section-desc">
          Six rules that guide every decision in the design system.
        </p>

        <ol class="principle-list">
          <li>
            <strong>Figma is the source of truth</strong>
            <span>All visual decisions &mdash; colors, spacing, typography, component specs &mdash; originate in Figma.
            Engineers never invent values; they consume what designers define.</span>
          </li>
          <li>
            <strong>Use tokens, not one-off values</strong>
            <span>Apply documented color, spacing, typography, and radius tokens instead of inventing local
            values for each screen.</span>
          </li>
          <li>
            <strong>Typography via mixins</strong>
            <span>All type styles are applied through SCSS mixins (e.g.
            <code>@include marks-typography-paragraph-md-one-line</code>). Raw font-size / line-height
            declarations in component SCSS are not allowed.</span>
          </li>
          <li>
            <strong>Follow the shipped component API</strong>
            <span>Use the documented variant components and props. For example, icon-only buttons use
            the button component's <code>icon-only</code> API with an accessible label.</span>
          </li>
          <li>
            <strong>Reusable with the <code>marks-</code> prefix</strong>
            <span>Every component class uses the <code>marks-</code> namespace
            (e.g. <code>.marks-toggle</code>, <code>.marks-button</code>) to avoid collisions when
            embedded in third-party pages like booking checkouts.</span>
          </li>
          <li>
            <strong>Icon weight rules</strong>
            <span>Icons at 19 px or smaller use the <strong>bold</strong> weight.
            Icons at 20 px or larger use the <strong>regular</strong> weight. This ensures
            consistent optical density across sizes.</span>
          </li>
        </ol>

        <!-- ─── 3. Public Usage ─── -->
        <h2 id="public-use" class="comp-section-h2">Made for public use</h2>
        <p class="comp-section-desc">
          These docs are written for teams and partners using the design system, not for
          repository or build maintenance.
        </p>

        <ul>
          <li>Documentation focuses on component purpose, anatomy, behavior, accessibility, examples, and API.</li>
          <li>Tooling, build steps, and repository maintenance details are intentionally left out.</li>
          <li>Guidance should be safe to share publicly and useful without private project context.</li>
        </ul>

        <!-- ─── 4. Component Anatomy ─── -->
        <h2 id="anatomy" class="comp-section-h2">Component Anatomy</h2>
        <p class="comp-section-desc">
          How every component in the system is structured.
        </p>

        <h3>Naming convention</h3>
        <p>
          All component CSS classes use the <code>marks-</code> prefix with BEM syntax:
        </p>
        <div class="file-tree">
          <pre>.marks-[component]                    <span class="file-tree__comment"># Block</span>
.marks-[component]--[modifier]        <span class="file-tree__comment"># Modifier</span>
.marks-[component]__[element]         <span class="file-tree__comment"># Element</span></pre>
        </div>
        <p>
          For example, the Toggle component uses <code>.marks-toggle</code>,
          <code>.marks-toggle--on</code>, and <code>.marks-toggle__thumb</code>.
        </p>

        <h3>Vue component structure</h3>
        <p>Each component follows the same SFC pattern:</p>
        <ul>
          <li><strong>Template</strong> &mdash; semantic HTML with BEM classes. State is driven by props, not internal DOM queries.</li>
          <li><strong>Script</strong> &mdash; Options API. Props define the public interface; emits signal state changes back to the parent.</li>
          <li><strong>Style</strong> &mdash; scoped SCSS that imports shared tokens via <code>@use 'tokens/variables' as *</code>.</li>
        </ul>

        <h3>Props &amp; emits</h3>
        <p>
          Components are data-driven. Visual state is controlled exclusively through props
          (e.g. <code>modelValue</code>, <code>disabled</code>, <code>size</code>).
          User interactions emit events
          (typically <code>update:modelValue</code> for <code>v-model</code> binding).
          Components never mutate props directly.
        </p>

        <div class="callout callout--info">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </span>
          <span>
            Each visual variation is a separate component file. If a component has a &ldquo;with label&rdquo;
            version, it lives in its own <code>ComponentWithLabel.vue</code> file rather than being a
            prop-driven mode of the base component.
          </span>
        </div>

        <!-- ─── 6. Quick Links ─── -->
        <h2 id="quick-links" class="comp-section-h2">Quick Links</h2>
        <p class="comp-section-desc">
          Jump to the section you need.
        </p>

        <div class="link-grid">
          <a href="/documentation/getting-started.html" class="link-card">
            <div class="link-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H72A16,16,0,0,0,56,40V56H40A16,16,0,0,0,24,72V216a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM184,216H40V72H184V216ZM216,184H200V72a16,16,0,0,0-16-16H72V40H200Z"/></svg>
            </div>
            <strong>Getting Started</strong>
            <span>Installation, setup, and your first component.</span>
          </a>
          <a href="/documentation/design-tokens.html" class="link-card">
            <div class="link-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM80,96A16,16,0,1,1,96,80,16,16,0,0,1,80,96Zm96,64a16,16,0,1,1-16-16A16,16,0,0,1,176,160Zm5.66-82.34a8,8,0,0,1-11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32Z"/></svg>
            </div>
            <strong>Design Tokens</strong>
            <span>Colors, spacing, typography, and radius values.</span>
          </a>
          <a href="/documentation/icons.html" class="link-card">
            <div class="link-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11.03,10.77-20,24-20s24,8.97,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-1.22c18.29-3.81,32-19.09,32-34.78C168,88.15,150.06,72,128,72ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>
            </div>
            <strong>Icons</strong>
            <span>Phosphor icon library, weight rules, and usage.</span>
          </a>
          <a href="/documentation/theming.html" class="link-card">
            <div class="link-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43.47,16.85,68.42,34.24,82.68C74.26,224.14,92.67,232,128,232c18.57,0,36.68-5.38,52.34-15.55C219.14,192.42,232,158.85,232,128A103.43,103.43,0,0,0,200.77,53.89ZM128,216c-31.07,0-44.62-6.23-57.35-16.62C56.22,187.28,40,166.64,40,128a88,88,0,0,1,87-87.96h.91A87.55,87.55,0,0,1,189.4,63.85,87.37,87.37,0,0,1,216,128C216,189.09,166,216,128,216ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76Zm-44,24a12,12,0,1,1-12-12A12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Zm-16,56a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"/></svg>
            </div>
            <strong>Theming</strong>
            <span>Light/dark mode, token overrides, and brand customization.</span>
          </a>
          <a href="/documentation/button.html" class="link-card">
            <div class="link-card__icon">
              <svg viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L154.34,128,130.34,101.66a8,8,0,0,1,11.32-11.32ZM96,128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/></svg>
            </div>
            <strong>Button Component</strong>
            <span>Start exploring components with the primary action element.</span>
          </a>
        </div>

      </article>
    </main>

    <!-- ─── Right aside — quick reference ─── -->
    <aside class="layout__aside">
      <div class="aside">
        <div class="aside__block aside__block--ref">

          <div class="ref-panel">
            <h4 class="ref-panel__title">Quick Reference</h4>

            <div class="ref-panel__section">
              <span class="ref-panel__label">Prefix</span>
              <code class="ref-panel__value">marks-</code>
            </div>

            <div class="ref-panel__section">
              <span class="ref-panel__label">Framework</span>
              <span class="ref-panel__value">Vue 3 (Options API)</span>
            </div>

            <div class="ref-panel__section">
              <span class="ref-panel__label">Styling</span>
              <span class="ref-panel__value">SCSS + BEM</span>
            </div>

            <div class="ref-panel__section">
              <span class="ref-panel__label">Tokens</span>
              <span class="ref-panel__value">Colors, spacing, type, radius</span>
            </div>

            <div class="ref-panel__section">
              <span class="ref-panel__label">Icons</span>
              <span class="ref-panel__value">Phosphor &mdash; Bold &le;19px, Regular &ge;20px</span>
            </div>

            <div class="ref-panel__divider"></div>

            <h4 class="ref-panel__title">On This Page</h4>
            <ul class="ref-panel__toc">
              <li><a href="#what-is" class="ref-panel__toc-link" @click.prevent="scrollTo('what-is')">What is the design system?</a></li>
              <li><a href="#principles" class="ref-panel__toc-link" @click.prevent="scrollTo('principles')">Core Principles</a></li>
              <li><a href="#public-use" class="ref-panel__toc-link" @click.prevent="scrollTo('public-use')">Made for public use</a></li>
              <li><a href="#anatomy" class="ref-panel__toc-link" @click.prevent="scrollTo('anatomy')">Component Anatomy</a></li>
              <li><a href="#quick-links" class="ref-panel__toc-link" @click.prevent="scrollTo('quick-links')">Quick Links</a></li>
            </ul>

            <div class="ref-panel__divider"></div>

            <h4 class="ref-panel__title">Resources</h4>
            <ul class="ref-panel__links">
              <li><a href="https://github.com/hipstacowboys/design-system" class="ref-panel__ext-link" target="_blank" rel="noopener">GitHub Repository</a></li>
            </ul>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'IntroductionDocPage',
  components: { DocHeader, DocNav },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';
</style>

<style scoped>
/* ─── Intro card row ─── */
.intro-card-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.intro-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.intro-card__icon {
  width: 28px;
  height: 28px;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.intro-card strong {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.intro-card span {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-normal);
}

/* ─── Principles list ─── */
.principle-list {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-8);
  counter-reset: principle;
}

.principle-list li {
  counter-increment: principle;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
}

.principle-list li:last-child {
  border-bottom: none;
}

.principle-list li strong {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.principle-list li strong::before {
  content: counter(principle) ". ";
  color: var(--color-text-muted);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  margin-right: var(--space-1);
}

.principle-list li span {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
}

/* ─── File tree ─── */
.file-tree {
  background: var(--color-code-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  margin-bottom: var(--space-6);
  overflow-x: auto;
}

.file-tree pre {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-code-text);
  line-height: var(--line-height-loose);
  white-space: pre;
  margin: 0;
}

.file-tree__comment {
  color: var(--color-code-comment);
  font-style: italic;
}

/* ─── Link grid ─── */
.link-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.link-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  text-decoration: none;
}

.link-card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-sm);
}

.link-card__icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-muted);
  margin-bottom: var(--space-1);
}

.link-card strong {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}

.link-card span {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-normal);
}

/* ─── Right aside — reference panel ─── */
.aside__block--ref {
  position: sticky;
  top: calc(var(--header-height) + var(--space-4));
}

.ref-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
}

.ref-panel__title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
}

.ref-panel__section {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}

.ref-panel__section:last-of-type {
  border-bottom: none;
}

.ref-panel__label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.ref-panel__value {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-align: right;
}

code.ref-panel__value {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 1px 6px;
}

.ref-panel__divider {
  height: 1px;
  background: var(--color-border);
  margin: var(--space-4) 0;
}

.ref-panel__toc {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ref-panel__toc li {
  margin-bottom: var(--space-1);
}

.ref-panel__toc-link {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-1) 0;
  display: block;
  transition: color var(--transition-fast);
}

.ref-panel__toc-link:hover {
  color: var(--color-text-primary);
}

.ref-panel__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ref-panel__links li {
  margin-bottom: var(--space-1);
}

.ref-panel__ext-link {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-1) 0;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  transition: color var(--transition-fast);
}

.ref-panel__ext-link:hover {
  color: var(--color-text-primary);
}

.ref-panel__ext-link::after {
  content: "\2197";
  font-size: 0.7em;
  opacity: 0.5;
}

/* ─── Responsive ─── */
@media (max-width: 1280px) {
  .intro-card-row {
    grid-template-columns: 1fr;
  }
  .link-grid {
    grid-template-columns: 1fr;
  }
}
</style>
