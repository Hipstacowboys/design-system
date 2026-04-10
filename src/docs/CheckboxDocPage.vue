<template>
  <header class="header">
    <a href="/" class="header__logo">
      <span class="header__logo-mark">M</span>
      Design System
    </a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Foundations</a>
      <a href="/documentation/checkbox.html" class="header__nav-link is-active">Components</a>
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
            <li class="nav__item"><a href="/documentation/checkbox.html" class="nav__link is-active">Checkbox</a></li>
            <li class="nav__item"><a href="/documentation/input.html" class="nav__link">Input</a></li>
            <li class="nav__item"><a href="/documentation/select.html" class="nav__link">Select</a></li>
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
        <h1>Checkbox</h1>
        <p class="content__lead">
          A binary selection control for form submission flows. Use <code>Checkbox</code> for standalone controls and
          <code>CheckboxWithLabel</code> when title/description context is required.
        </p>

        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>
        <h3>When to use</h3>
        <ul>
          <li><strong>Checkbox</strong> for explicit yes/no selections that are submitted with a form.</li>
          <li><strong>CheckboxWithLabel</strong> when the option requires readable title/paragraph context.</li>
          <li><strong>Indeterminate</strong> for partial parent selection states in grouped lists.</li>
        </ul>
        <h3>When NOT to use</h3>
        <ul>
          <li>Immediate setting toggles — use <code>Toggle</code> instead.</li>
          <li>Single choice among many — use <code>Radio</code> or <code>Select</code>.</li>
        </ul>

        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Checkbox has one fixed size (24px). Label variant adds text spacing and optional paragraph.</p>

        <h3>Structural slots</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Standalone checkbox states</span>
            <div class="comp-demo__row">
              <Checkbox :model-value="false" />
              <Checkbox :model-value="true" />
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">With label</span>
            <div style="display:flex;flex-direction:column;gap:16px;max-width:420px;">
              <CheckboxWithLabel :model-value="false" title="Marketing consent" />
              <CheckboxWithLabel :model-value="true" title="Terms accepted" paragraph="I agree to the terms and privacy policy." />
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimensions</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Checkbox control</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>control width</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>control height</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>border width</td><td><code>—</code></td><td>2px</td></tr>
              <tr><td>radius</td><td><code>—</code></td><td>6px</td></tr>
              <tr><td>icon size (check)</td><td><code>—</code></td><td>16px</td></tr>
              <tr><td>icon size (minus)</td><td><code>—</code></td><td>12px</td></tr>
            </tbody>
          </table>
        </div>
        <div class="anatomy-block">
          <span class="anatomy-block__label">CheckboxWithLabel spacing</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>checkbox ↔ text gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>title ↔ paragraph gap</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <div class="variant-section">
          <p class="variant-section__label">Checkbox</p>
          <table class="variant-table">
            <thead>
              <tr><th></th><th>Default</th><th>Checked</th><th>Indeterminate</th></tr>
            </thead>
            <tbody>
              <tr><td><span class="state-chip state-chip--default">Default</span></td><td><Checkbox :model-value="false" /></td><td><Checkbox :model-value="true" /></td><td><Checkbox :model-value="false" :indeterminate="true" /></td></tr>
              <tr><td><span class="state-chip state-chip--hover">Hover</span></td><td><div class="force-hover"><Checkbox :model-value="false" /></div></td><td><div class="force-hover"><Checkbox :model-value="true" /></div></td><td><div class="force-hover"><Checkbox :model-value="false" :indeterminate="true" /></div></td></tr>
              <tr><td><span class="state-chip state-chip--disabled">Disabled</span></td><td><Checkbox :model-value="false" :disabled="true" /></td><td><Checkbox :model-value="true" :disabled="true" /></td><td><Checkbox :model-value="false" :indeterminate="true" :disabled="true" /></td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>
        <ul>
          <li>Emits <code>update:modelValue</code> on change when not disabled.</li>
          <li>Indeterminate click is intercepted and coerced to checked (<code>true</code>).</li>
          <li>Native checkbox input is used; indeterminate state is synchronized via JS.</li>
          <li>Disabled applies <code>cursor: not-allowed</code> and <code>opacity: 0.5</code>.</li>
        </ul>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Live behavior</span>
            <CheckboxWithLabel v-model="demoValue" :indeterminate="demoIndeterminate" title="Select all" />
            <div class="comp-demo__row">
              <button class="code-toolbar__copy" @click="demoIndeterminate = !demoIndeterminate">Toggle indeterminate</button>
            </div>
            <p class="comp-demo__hint">modelValue: <code>{{ demoValue }}</code>, indeterminate: <code>{{ demoIndeterminate }}</code></p>
          </div>
        </div>

        <h2 id="content" class="comp-section-h2">Content rules</h2>
        <ul>
          <li>Label titles should be specific and action-focused ("Enable email receipts").</li>
          <li>Use sentence case; avoid all caps.</li>
          <li>Keep title short; use paragraph only for important consequences.</li>
          <li>Avoid vague labels like "Option" or "Setting".</li>
        </ul>

        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>
        <ul>
          <li>Uses native <code>input[type=checkbox]</code> for built-in keyboard and screen-reader support.</li>
          <li><code>:focus-visible</code> ring: <code>2px solid var(--marks-color-primary-solid)</code>.</li>
          <li>Control size is 24x24, meeting minimum target guidance.</li>
          <li>For standalone checkboxes, ensure text association via external label or context.</li>
        </ul>

        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Do</span>
            <div style="display:flex;flex-direction:column;gap:14px;max-width:460px;">
              <CheckboxWithLabel :model-value="true" title="I agree to terms" />
              <CheckboxWithLabel :model-value="false" title="Receive marketing updates" paragraph="We will occasionally send product news." />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't</span>
            <div style="display:flex;flex-direction:column;gap:14px;max-width:460px;">
              <CheckboxWithLabel :model-value="false" title="Option" />
              <ToggleWithLabel :model-value="true" title="Accept terms" />
            </div>
          </div>
        </div>

        <h2 id="api" class="comp-section-h2">API / Props</h2>
        <h3>Checkbox</h3>
        <table class="props-table">
          <thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>modelValue</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Checked state.</td></tr>
            <tr class="props-row__meta"><td><code>indeterminate</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Partial state (minus icon) when unchecked.</td></tr>
            <tr class="props-row__meta"><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Disables interaction.</td></tr>
          </tbody>
        </table>
        <h3>CheckboxWithLabel</h3>
        <table class="props-table">
          <thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>modelValue</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Checked state.</td></tr>
            <tr class="props-row__meta"><td><code>indeterminate</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Passed through to Checkbox.</td></tr>
            <tr class="props-row__meta"><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Disables interaction.</td></tr>
            <tr class="props-row__meta"><td><code>title</code></td><td><code>String</code></td><td><code>required</code></td><td>Main label text.</td></tr>
            <tr class="props-row__meta"><td><code>paragraph</code></td><td><code>String</code></td><td><code>null</code></td><td>Optional helper text.</td></tr>
          </tbody>
        </table>
        <h3>Events</h3>
        <table class="props-table">
          <thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>update:modelValue</code></td><td><code>Boolean</code></td><td>Emitted when value changes.</td></tr>
          </tbody>
        </table>
        <h3>Slots</h3>
        <table class="props-table">
          <thead><tr><th>Component</th><th>Slot</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>Checkbox</code></td><td><code>—</code></td><td>No slots.</td></tr>
            <tr class="props-row__meta"><td><code>CheckboxWithLabel</code></td><td><code>—</code></td><td>No slots.</td></tr>
          </tbody>
        </table>

        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group"><Checkbox :model-value="false" /></div>
          <div class="comp-demo__group"><Checkbox :model-value="true" /></div>
          <div class="comp-demo__group" style="width:100%;"><CheckboxWithLabel :model-value="true" title="Enable feature" paragraph="Dark mode compatible" /></div>
        </div>
        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group"><Checkbox :model-value="false" /></div>
          <div class="comp-demo__group"><Checkbox :model-value="true" /></div>
          <div class="comp-demo__group" style="width:100%;"><CheckboxWithLabel :model-value="true" title="Enable feature" paragraph="Dark mode compatible" /></div>
        </div>
      </article>
    </main>

    <aside class="layout__aside">
      <div class="aside">
        <div class="aside__block aside__block--code">
          <div class="code-tabs">
            <button v-for="tab in codeTabs" :key="tab.id" class="code-tabs__tab" :class="{ 'is-active': activeTab === tab.id }" @click="activeTab = tab.id">{{ tab.label }}</button>
          </div>
          <div class="code-pane" :class="{ 'is-active': activeTab === 'vue' }">
<pre><span class="token-keyword">import</span> Checkbox <span class="token-keyword">from</span> <span class="token-string">'../../components/Checkbox.vue'</span>
<span class="token-keyword">import</span> CheckboxWithLabel <span class="token-keyword">from</span> <span class="token-string">'../../components/CheckboxWithLabel.vue'</span>

<span class="token-tag">&lt;Checkbox</span> <span class="token-attr">v-model</span>=<span class="token-string">"checked"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Checkbox</span> <span class="token-attr">:indeterminate</span>=<span class="token-string">"true"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;CheckboxWithLabel</span> <span class="token-attr">v-model</span>=<span class="token-string">"agreed"</span> <span class="token-attr">title</span>=<span class="token-string">"I agree"</span> <span class="token-tag">/&gt;</span></pre>
          </div>
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-tag">&lt;input</span> <span class="token-attr">type</span>=<span class="token-string">"checkbox"</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;input</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox marks-checkbox--indeterminate"</span> <span class="token-tag">/&gt;</span>
<span class="token-comment">&lt;!-- BEM: .marks-checkbox, --indeterminate, --disabled, __icon --&gt;</span></pre>
          </div>
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;

<span class="token-attr">width</span>: <span class="token-number">24px</span>;
<span class="token-attr">height</span>: <span class="token-number">24px</span>;
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);

<span class="token-comment">// checked and indeterminate</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);

<span class="token-comment">// disabled</span>
<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;</pre>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'CheckboxDocPage',
  data() {
    return {
      demoValue: false,
      demoIndeterminate: true,
      activeTab: 'vue',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';

.force-hover .marks-checkbox:not(.marks-checkbox--disabled):not(:checked):not(.marks-checkbox--indeterminate) {
  border-color: var(--marks-color-gray-300) !important;
  background-color: var(--marks-color-white) !important;
}
</style>

<style scoped>
.dark-preview {
  background: #000000;
  border-color: #6F6F6F;
  --marks-color-primary-solid: #0E5842;
  --marks-color-primary-light: #032F22;
  --marks-color-red-100: #FFE4E9;
  --marks-color-red-200: #FD3860;
  --marks-color-red-300: #97001E;
  --marks-color-blue-100: #D7E7FF;
  --marks-color-blue-200: #2576F7;
  --marks-color-blue-300: #050D3A;
  --marks-color-green-100: #C0F3E4;
  --marks-color-green-200: #0FAF80;
  --marks-color-green-300: #0E5842;
  --marks-color-orange-100: #FFEBD2;
  --marks-color-orange-200: #FF8C00;
  --marks-color-orange-300: #854900;
  --marks-color-gray-100: #2A2A2A;
  --marks-color-gray-150: #505050;
  --marks-color-gray-200: #6F6F6F;
  --marks-color-gray-300: #8D8D8D;
  --marks-color-gray-350: #D1D1D1;
  --marks-color-gray-400: #ECECEC;
  --marks-color-gray-500: #FAFAFA;
  --marks-color-white: #000000;
  --marks-color-black: #FFFFFF;
}

.anatomy-block { margin-bottom: 28px; }
.anatomy-block__label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--marks-color-gray-300);
  margin-bottom: 12px;
}

.anatomy-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.anatomy-table th {
  text-align: left;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--marks-color-gray-300);
  padding: 6px 12px 6px 0;
  border-bottom: 2px solid var(--marks-color-gray-400);
}
.anatomy-table td {
  padding: 6px 12px 6px 0;
  border-bottom: 1px solid var(--marks-color-gray-400);
}
</style>
