<template>
  <header class="header">
    <a href="/" class="header__logo"><span class="header__logo-mark">M</span>Design System</a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Foundations</a>
      <a href="/documentation/select.html" class="header__nav-link is-active">Components</a>
    </nav>
  </header>

  <div class="layout">
    <nav class="layout__nav">
      <div class="nav">
        <section class="nav__section">
          <span class="nav__section-title">Components</span>
          <ul class="nav__list">
            <li class="nav__item"><a href="/documentation/button.html" class="nav__link">Button</a></li>
            <li class="nav__item"><a href="/documentation/toggle.html" class="nav__link">Toggle</a></li>
            <li class="nav__item"><a href="/documentation/checkbox.html" class="nav__link">Checkbox</a></li>
            <li class="nav__item"><a href="/documentation/input.html" class="nav__link">Input</a></li>
            <li class="nav__item"><a href="/documentation/select.html" class="nav__link is-active">Select</a></li>
            <li class="nav__item"><a href="/documentation/radio.html" class="nav__link">Radio</a></li>
            <li class="nav__item"><a href="/documentation/textarea.html" class="nav__link">Textarea</a></li>
            <li class="nav__item"><a href="/documentation/tabs.html" class="nav__link">Tabs</a></li>
          </ul>
        </section>
      </div>
    </nav>

    <main class="layout__content">
      <article class="content">
        <span class="content__eyebrow">Components</span>
        <h1>Select</h1>
        <p class="content__lead">Select allows choosing one option from a list with consistent trigger/dropdown behavior, optional icon/flag, and disabled option states.</p>

        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>
        <ul>
          <li>Use when the user must choose one value from known options.</li>
          <li>Use with optional <code>leftIcon</code> or <code>flag</code> for visual context.</li>
          <li>Don't use for free text input — use <code>Input</code>.</li>
        </ul>

        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:430px;"><span class="comp-demo__group-label">Small</span><Select v-model="smallValue" size="small" :options="options" placeholder="Choose plan" /></div>
          <div class="comp-demo__group" style="width:100%;max-width:430px;"><span class="comp-demo__group-label">Medium</span><Select v-model="mediumValue" size="medium" :options="options" placeholder="Choose plan" /></div>
        </div>
        <table class="props-table">
          <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td>Small radius</td><td><code>--marks-radius-8</code></td><td>8px</td></tr>
            <tr class="props-row__meta"><td>Medium radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
            <tr class="props-row__meta"><td>Dropdown radius</td><td><code>--marks-radius-24</code></td><td>24px</td></tr>
          </tbody>
        </table>

        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <table class="variant-table">
          <thead><tr><th></th><th>Default</th><th>With icon</th><th>With selected value</th><th>Disabled</th></tr></thead>
          <tbody>
            <tr><td><span class="state-chip state-chip--default">Default</span></td><td><Select v-model="vDefault" :options="options" /></td><td><Select v-model="vIcon" :options="options" :left-icon="PhGlobeHemisphereWest" /></td><td><Select v-model="vSelected" :options="options" /></td><td><Select v-model="vDisabled" :options="options" :disabled="true" /></td></tr>
            <tr><td><span class="state-chip state-chip--hover">Hover</span></td><td><div class="force-hover"><Select v-model="vDefault" :options="options" /></div></td><td><div class="force-hover"><Select v-model="vIcon" :options="options" :left-icon="PhGlobeHemisphereWest" /></div></td><td><div class="force-hover"><Select v-model="vSelected" :options="options" /></div></td><td><Select v-model="vDisabled" :options="options" :disabled="true" /></td></tr>
            <tr><td><span class="state-chip state-chip--pressed">Clicked</span></td><td><div class="force-active"><Select v-model="vDefault" :options="options" /></div></td><td><div class="force-active"><Select v-model="vIcon" :options="options" :left-icon="PhGlobeHemisphereWest" /></div></td><td><div class="force-active"><Select v-model="vSelected" :options="options" /></div></td><td><Select v-model="vDisabled" :options="options" :disabled="true" /></td></tr>
          </tbody>
        </table>

        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>
        <ul>
          <li>Click toggles dropdown; outside click closes it.</li>
          <li>Emits <code>update:modelValue</code> and <code>change</code> when selecting enabled option.</li>
          <li>Disabled options in dropdown are not selectable.</li>
        </ul>

        <h2 id="content" class="comp-section-h2">Content rules</h2>
        <ul>
          <li>Use clear option labels with consistent grammar.</li>
          <li>Use meaningful placeholders like "Select country".</li>
        </ul>

        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>
        <ul>
          <li>Trigger is a native button with disabled semantics.</li>
          <li>Visual focus/open state uses strong border and ring.</li>
        </ul>

        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:430px;"><span class="comp-demo__group-label">Do</span><Select v-model="exValue" :options="options" placeholder="Select plan" /></div>
          <div class="comp-demo__group" style="width:100%;max-width:430px;"><span class="comp-demo__group-label" style="color:#FD3860;">Don't</span><Select v-model="exBad" :options="[{label:'Option',value:'x'}]" placeholder="Pick" /></div>
        </div>

        <h2 id="api" class="comp-section-h2">API / Props</h2>
        <table class="props-table">
          <thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>modelValue</code></td><td><code>String | Number</code></td><td><code>null</code></td><td>Selected value.</td></tr>
            <tr class="props-row__meta"><td><code>size</code></td><td><code>'small' | 'medium'</code></td><td><code>'medium'</code></td><td>Trigger size.</td></tr>
            <tr class="props-row__meta"><td><code>options</code></td><td><code>Array</code></td><td><code>[]</code></td><td>Options list.</td></tr>
            <tr class="props-row__meta"><td><code>leftIcon</code></td><td><code>Object | String</code></td><td><code>null</code></td><td>Optional icon before text.</td></tr>
            <tr class="props-row__meta"><td><code>flag</code></td><td><code>String</code></td><td><code>null</code></td><td>Optional flag image URL.</td></tr>
            <tr class="props-row__meta"><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Disables control.</td></tr>
          </tbody>
        </table>

        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <div class="comp-demo dark-preview"><div class="comp-demo__group" style="width:100%;max-width:430px;"><Select v-model="themeValue" :options="options" /></div></div>
      </article>
    </main>

    <aside class="layout__aside"><div class="aside"><div class="aside__block aside__block--code"><div class="code-pane is-active"><pre><span class="token-keyword">import</span> Select <span class="token-keyword">from</span> <span class="token-string">'../../components/Select.vue'</span>
<span class="token-tag">&lt;Select</span> <span class="token-attr">v-model</span>=<span class="token-string">"plan"</span> <span class="token-attr">:options</span>=<span class="token-string">"options"</span> <span class="token-tag">/&gt;</span></pre></div></div></div></aside>
  </div>
</template>

<script>
import { PhGlobeHemisphereWest } from '@phosphor-icons/vue'

export default {
  name: 'SelectDocPage',
  data() {
    return {
      PhGlobeHemisphereWest,
      smallValue: null,
      mediumValue: null,
      vDefault: null,
      vIcon: null,
      vSelected: 'premium',
      vDisabled: null,
      exValue: null,
      exBad: null,
      themeValue: null,
      options: [
        { label: 'Standard', value: 'standard' },
        { label: 'Premium', value: 'premium' },
        { label: 'Enterprise', value: 'enterprise', disabled: true }
      ]
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';
.force-hover .marks-select:not(.marks-select--disabled):not(:focus):not(.marks-select--open) { box-shadow: 0 0 0 1px var(--marks-color-gray-300) !important; }
.force-active .marks-select:not(.marks-select--disabled) { border-color: var(--marks-color-black) !important; box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.3),0 0 0 1px var(--marks-color-black) !important; }
</style>

<style scoped>
.dark-preview { background:#000;border-color:#6F6F6F; --marks-color-primary-solid:#0E5842;--marks-color-primary-light:#032F22;--marks-color-red-100:#FFE4E9;--marks-color-red-200:#FD3860;--marks-color-red-300:#97001E;--marks-color-blue-100:#D7E7FF;--marks-color-blue-200:#2576F7;--marks-color-blue-300:#050D3A;--marks-color-green-100:#C0F3E4;--marks-color-green-200:#0FAF80;--marks-color-green-300:#0E5842;--marks-color-orange-100:#FFEBD2;--marks-color-orange-200:#FF8C00;--marks-color-orange-300:#854900;--marks-color-gray-100:#2A2A2A;--marks-color-gray-150:#505050;--marks-color-gray-200:#6F6F6F;--marks-color-gray-300:#8D8D8D;--marks-color-gray-350:#D1D1D1;--marks-color-gray-400:#ECECEC;--marks-color-gray-500:#FAFAFA;--marks-color-white:#000;--marks-color-black:#FFF; }
</style>
