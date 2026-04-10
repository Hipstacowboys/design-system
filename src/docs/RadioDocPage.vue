<template>
  <header class="header">
    <a href="/" class="header__logo"><span class="header__logo-mark">M</span>Design System</a>
    <nav class="header__nav"><a href="/" class="header__nav-link">Foundations</a><a href="/documentation/radio.html" class="header__nav-link is-active">Components</a></nav>
  </header>

  <div class="layout">
    <nav class="layout__nav"><div class="nav"><section class="nav__section"><span class="nav__section-title">Components</span><ul class="nav__list"><li class="nav__item"><a href="/documentation/button.html" class="nav__link">Button</a></li><li class="nav__item"><a href="/documentation/toggle.html" class="nav__link">Toggle</a></li><li class="nav__item"><a href="/documentation/checkbox.html" class="nav__link">Checkbox</a></li><li class="nav__item"><a href="/documentation/input.html" class="nav__link">Input</a></li><li class="nav__item"><a href="/documentation/select.html" class="nav__link">Select</a></li><li class="nav__item"><a href="/documentation/radio.html" class="nav__link is-active">Radio</a></li><li class="nav__item"><a href="/documentation/textarea.html" class="nav__link">Textarea</a></li><li class="nav__item"><a href="/documentation/tabs.html" class="nav__link">Tabs</a></li></ul></section></div></nav>

    <main class="layout__content"><article class="content"><span class="content__eyebrow">Components</span><h1>Radio</h1><p class="content__lead">Radio selects exactly one option in a named group. <code>RadioWithLabel</code> adds title and optional paragraph content.</p>
      <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2><ul><li>Use for mutually exclusive options.</li><li>Use Checkbox for multi-select.</li></ul>
      <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2><table class="props-table"><thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead><tbody><tr class="props-row__meta"><td>Control size</td><td><code>—</code></td><td>24x24</td></tr><tr class="props-row__meta"><td>Dot size</td><td><code>—</code></td><td>12x12</td></tr><tr class="props-row__meta"><td>Gap with label</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr></tbody></table>
      <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2><table class="variant-table"><thead><tr><th></th><th>Unchecked</th><th>Checked</th><th>Disabled</th></tr></thead><tbody><tr><td><span class="state-chip state-chip--default">Default</span></td><td><Radio v-model="group" name="plan" value="a" /></td><td><Radio v-model="group" name="plan" value="b" /></td><td><Radio v-model="group" name="plan" value="c" :disabled="true" /></td></tr><tr><td><span class="state-chip state-chip--hover">Hover</span></td><td><div class="force-hover"><Radio v-model="hoverGroup" name="h" value="a" /></div></td><td><div class="force-hover"><Radio v-model="hoverGroup" name="h" value="b" /></div></td><td><Radio v-model="hoverGroup" name="h" value="c" :disabled="true" /></td></tr></tbody></table>
      <h2 id="behavior" class="comp-section-h2">Behavior rules</h2><ul><li>Change emits <code>update:modelValue</code> with this option's <code>value</code>.</li><li>Disabled options suppress updates.</li><li>Grouping is controlled by shared <code>name</code>.</li></ul>
      <h2 id="content" class="comp-section-h2">Content rules</h2><ul><li>Use short labels in parallel structure.</li><li>Avoid ambiguous titles like "Option".</li></ul>
      <h2 id="accessibility" class="comp-section-h2">Accessibility</h2><ul><li>Native radio semantics and keyboard support.</li><li>Focus-visible ring uses primary token.</li></ul>
      <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2><div class="comp-demo"><div class="comp-demo__group"><span class="comp-demo__group-label">Do</span><RadioWithLabel v-model="example" name="pay" value="card" title="Credit card" /></div><div class="comp-demo__group"><span class="comp-demo__group-label" style="color:#FD3860;">Don't</span><RadioWithLabel v-model="example" name="pay" value="x" title="Option" /></div></div>
      <h2 id="api" class="comp-section-h2">API / Props</h2><table class="props-table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="props-row__meta"><td><code>modelValue</code></td><td><code>String | Number | Boolean</code></td><td><code>null</code></td><td>Selected group value.</td></tr><tr class="props-row__meta"><td><code>value</code></td><td><code>String | Number | Boolean</code></td><td><code>required</code></td><td>This option value.</td></tr><tr class="props-row__meta"><td><code>name</code></td><td><code>String</code></td><td><code>required</code></td><td>Native radio group name.</td></tr><tr class="props-row__meta"><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Disabled option state.</td></tr></tbody></table>
      <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2><div class="comp-demo dark-preview"><div class="comp-demo__group"><Radio v-model="theme" name="t" value="a" /><Radio v-model="theme" name="t" value="b" /></div></div>
    </article></main>

    <aside class="layout__aside"><div class="aside"><div class="aside__block aside__block--code"><div class="code-pane is-active"><pre><span class="token-keyword">import</span> Radio <span class="token-keyword">from</span> <span class="token-string">'../../components/Radio.vue'</span>
<span class="token-tag">&lt;Radio</span> <span class="token-attr">v-model</span>=<span class="token-string">"value"</span> <span class="token-attr">name</span>=<span class="token-string">"group"</span> <span class="token-attr">value</span>=<span class="token-string">"a"</span> <span class="token-tag">/&gt;</span></pre></div></div></div></aside>
  </div>
</template>

<script>
export default {
  name: 'RadioDocPage',
  data() {
    return {
      group: 'b',
      hoverGroup: 'b',
      example: 'card',
      theme: 'a'
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';
.force-hover .marks-radio:hover:not(.marks-radio--disabled):not(:checked) { border-color: var(--marks-color-gray-300) !important; }
.force-hover .marks-radio:hover:not(.marks-radio--disabled):checked { border-color: var(--marks-color-gray-500) !important; }
</style>

<style scoped>
.dark-preview { background:#000;border-color:#6F6F6F; --marks-color-primary-solid:#0E5842;--marks-color-primary-light:#032F22;--marks-color-red-100:#FFE4E9;--marks-color-red-200:#FD3860;--marks-color-red-300:#97001E;--marks-color-blue-100:#D7E7FF;--marks-color-blue-200:#2576F7;--marks-color-blue-300:#050D3A;--marks-color-green-100:#C0F3E4;--marks-color-green-200:#0FAF80;--marks-color-green-300:#0E5842;--marks-color-orange-100:#FFEBD2;--marks-color-orange-200:#FF8C00;--marks-color-orange-300:#854900;--marks-color-gray-100:#2A2A2A;--marks-color-gray-150:#505050;--marks-color-gray-200:#6F6F6F;--marks-color-gray-300:#8D8D8D;--marks-color-gray-350:#D1D1D1;--marks-color-gray-400:#ECECEC;--marks-color-gray-500:#FAFAFA;--marks-color-white:#000;--marks-color-black:#FFF; }
</style>
