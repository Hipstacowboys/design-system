<template>
  <header class="header">
    <a href="/" class="header__logo"><span class="header__logo-mark">M</span>Design System</a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Foundations</a>
      <a href="/documentation/input.html" class="header__nav-link is-active">Components</a>
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
            <li class="nav__item"><a href="/documentation/input.html" class="nav__link is-active">Input</a></li>
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
        <h1>Input</h1>
        <p class="content__lead">
          Text-entry field wrapper composed of <code>InputField</code> and optional <code>InputMessage</code> with
          labels, icon/addon variations, error handling, and small/medium sizing.
        </p>

        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>
        <h3>When to use</h3>
        <ul>
          <li>Collecting short text or numeric values in forms.</li>
          <li>When label, helper/error message, or addons need to be bundled with the field.</li>
          <li>When select-style prefix/suffix controls are needed in the same row.</li>
        </ul>
        <h3>When NOT to use</h3>
        <ul>
          <li>Long-form multi-line content — use <code>Textarea</code>.</li>
          <li>Strict option picking — use <code>Select</code>.</li>
        </ul>

        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Input supports <code>small</code> and <code>medium</code> sizes, with optional labels/messages and leading/trailing slots.</p>

        <h3>Structural slots</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Core field</span>
            <Input v-model="demoValue" label="Email" placeholder="name@example.com" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Addons + message</span>
            <Input
              v-model="priceValue"
              label="Price"
              leading-addon="USD"
              trailing-addon="per item"
              message="Value will be shown to users"
              message-type="info"
            />
          </div>
        </div>

        <h3>Spacing &amp; padding visualization</h3>
        <table class="anatomy-table">
          <thead><tr><th>Size</th><th>Property</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td rowspan="4">small</td><td>padding</td><td><code>--marks-spacing-8</code></td><td>8px all sides</td></tr>
            <tr><td>gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
            <tr><td>radius</td><td><code>--marks-radius-8</code></td><td>8px</td></tr>
            <tr><td>typography</td><td><code>marks-typography-paragraph-sm-one-line</code></td><td>small field text</td></tr>
            <tr><td rowspan="4">medium</td><td>padding</td><td><code>--marks-spacing-16</code></td><td>16px all sides</td></tr>
            <tr><td>gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
            <tr><td>radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
            <tr><td>typography</td><td><code>marks-typography-paragraph-md-one-line</code></td><td>medium field text</td></tr>
          </tbody>
        </table>

        <h3>Live sizes</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;"><span class="comp-demo__group-label">Small</span><Input v-model="smallInput" size="small" label="Username" placeholder="jane" /></div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;"><span class="comp-demo__group-label">Medium</span><Input v-model="mediumInput" size="medium" label="Username" placeholder="jane" /></div>
        </div>

        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <table class="variant-table">
          <thead><tr><th></th><th>Default</th><th>With icon</th><th>Leading addon</th><th>Trailing addon</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="state-chip state-chip--default">Default</span></td>
              <td><Input v-model="vDefault" label="Email" placeholder="name@example.com" /></td>
              <td><Input v-model="vIcon" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search" /></td>
              <td><Input v-model="vLead" label="Amount" leading-addon="USD" placeholder="0.00" /></td>
              <td><Input v-model="vTrail" label="Weight" trailing-addon="kg" placeholder="0" /></td>
            </tr>
            <tr>
              <td><span class="state-chip state-chip--hover">Hover</span></td>
              <td><div class="force-hover"><Input v-model="vDefault" label="Email" placeholder="name@example.com" /></div></td>
              <td><div class="force-hover"><Input v-model="vIcon" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search" /></div></td>
              <td><div class="force-hover"><Input v-model="vLead" label="Amount" leading-addon="USD" placeholder="0.00" /></div></td>
              <td><div class="force-hover"><Input v-model="vTrail" label="Weight" trailing-addon="kg" placeholder="0" /></div></td>
            </tr>
            <tr>
              <td><span class="state-chip state-chip--pressed">Clicked</span></td>
              <td><div class="force-active"><Input v-model="vDefault" label="Email" placeholder="name@example.com" /></div></td>
              <td><div class="force-active"><Input v-model="vIcon" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search" /></div></td>
              <td><div class="force-active"><Input v-model="vLead" label="Amount" leading-addon="USD" placeholder="0.00" /></div></td>
              <td><div class="force-active"><Input v-model="vTrail" label="Weight" trailing-addon="kg" placeholder="0" /></div></td>
            </tr>
            <tr>
              <td><span class="state-chip state-chip--disabled">Disabled</span></td>
              <td><Input v-model="vDefault" label="Email" placeholder="name@example.com" :disabled="true" /></td>
              <td><Input v-model="vIcon" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search" :disabled="true" /></td>
              <td><Input v-model="vLead" label="Amount" leading-addon="USD" placeholder="0.00" :disabled="true" /></td>
              <td><Input v-model="vTrail" label="Weight" trailing-addon="kg" placeholder="0" :disabled="true" /></td>
            </tr>
          </tbody>
        </table>

        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>
        <ul>
          <li>Wrapper click focuses input unless the click target is an interactive addon/select/button.</li>
          <li>Emits <code>update:modelValue</code>, <code>input</code>, <code>focus</code>, <code>blur</code>.</li>
          <li>Error state can be set directly via <code>error</code> or indirectly via <code>messageType='error'</code>.</li>
          <li>Focus uses <code>border-color: var(--marks-color-black)</code> and layered shadow.</li>
        </ul>
        <div class="comp-demo">
          <div class="comp-demo__group" style="max-width:520px;width:100%;">
            <span class="comp-demo__group-label">Live validation demo</span>
            <Input v-model="liveEmail" label="Email" placeholder="name@example.com" :message="emailMessage" :message-type="emailMessageType" :error="emailMessageType === 'error'" @blur="validateEmail" />
          </div>
        </div>

        <h2 id="content" class="comp-section-h2">Content rules</h2>
        <ul>
          <li>Use clear, user-facing labels; do not rely on placeholder as primary label.</li>
          <li>Placeholders should be examples, not instructions.</li>
          <li>Error message text should explain what to fix, not just indicate failure.</li>
          <li>Keep helper text concise and specific.</li>
        </ul>

        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>
        <ul>
          <li>Label is associated via generated <code>inputId</code> and <code>for</code> attribute.</li>
          <li>Uses native <code>&lt;input&gt;</code> semantics for keyboard and assistive tech support.</li>
          <li>Focus-visible and focus-within states provide strong visual feedback.</li>
          <li>Disabled state uses native <code>disabled</code> attribute and non-interactive cursor.</li>
        </ul>

        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>
        <div class="comp-demo">
          <div class="comp-demo__group" style="max-width:520px;width:100%;">
            <span class="comp-demo__group-label">Do</span>
            <div style="display:flex;flex-direction:column;gap:14px;">
              <Input v-model="exName" label="Full name" placeholder="Jane Doe" />
              <Input v-model="exAmount" label="Amount" leading-addon="USD" message="Include tax in this amount" message-type="info" />
            </div>
          </div>
          <div class="comp-demo__group" style="max-width:520px;width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't</span>
            <div style="display:flex;flex-direction:column;gap:14px;">
              <Input v-model="bad1" placeholder="Type here" />
              <Input v-model="bad2" label="Email" message="Invalid" message-type="error" />
            </div>
          </div>
        </div>

        <h2 id="api" class="comp-section-h2">API / Props</h2>
        <table class="props-table">
          <thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>modelValue</code></td><td><code>String | Number</code></td><td><code>''</code></td><td>Input value.</td></tr>
            <tr class="props-row__meta"><td><code>size</code></td><td><code>'small' | 'medium'</code></td><td><code>'medium'</code></td><td>Field size.</td></tr>
            <tr class="props-row__meta"><td><code>type</code></td><td><code>String</code></td><td><code>'text'</code></td><td>Native input type.</td></tr>
            <tr class="props-row__meta"><td><code>placeholder</code></td><td><code>String</code></td><td><code>''</code></td><td>Placeholder text.</td></tr>
            <tr class="props-row__meta"><td><code>label</code></td><td><code>String</code></td><td><code>null</code></td><td>Primary label (left).</td></tr>
            <tr class="props-row__meta"><td><code>labelRight</code></td><td><code>String</code></td><td><code>null</code></td><td>Secondary label (right).</td></tr>
            <tr class="props-row__meta"><td><code>leadingAddon</code></td><td><code>String</code></td><td><code>null</code></td><td>Leading text addon.</td></tr>
            <tr class="props-row__meta"><td><code>leadingAddonSelect</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Enable leading select addon.</td></tr>
            <tr class="props-row__meta"><td><code>leadingAddonSelectValue</code></td><td><code>String | Number</code></td><td><code>null</code></td><td>Selected leading addon value.</td></tr>
            <tr class="props-row__meta"><td><code>leadingAddonSelectOptions</code></td><td><code>Array</code></td><td><code>[]</code></td><td>Leading addon select options.</td></tr>
            <tr class="props-row__meta"><td><code>trailingAddon</code></td><td><code>String</code></td><td><code>null</code></td><td>Trailing text addon.</td></tr>
            <tr class="props-row__meta"><td><code>trailingAddonSelect</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Enable trailing select addon.</td></tr>
            <tr class="props-row__meta"><td><code>trailingAddonSelectValue</code></td><td><code>String | Number</code></td><td><code>null</code></td><td>Selected trailing addon value.</td></tr>
            <tr class="props-row__meta"><td><code>trailingAddonSelectOptions</code></td><td><code>Array</code></td><td><code>[]</code></td><td>Trailing addon select options.</td></tr>
            <tr class="props-row__meta"><td><code>leftIcon</code></td><td><code>Object | String</code></td><td><code>null</code></td><td>Left icon component.</td></tr>
            <tr class="props-row__meta"><td><code>rightIcon</code></td><td><code>Object | String</code></td><td><code>null</code></td><td>Right icon component.</td></tr>
            <tr class="props-row__meta"><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Disabled state.</td></tr>
            <tr class="props-row__meta"><td><code>error</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Error style state.</td></tr>
            <tr class="props-row__meta"><td><code>message</code></td><td><code>String</code></td><td><code>null</code></td><td>Input message text.</td></tr>
            <tr class="props-row__meta"><td><code>messageType</code></td><td><code>'error' | 'info'</code></td><td><code>'info'</code></td><td>Message visual type.</td></tr>
          </tbody>
        </table>
        <h3>Events</h3>
        <table class="props-table">
          <thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>update:modelValue</code></td><td><code>String | Number</code></td><td>Value updates.</td></tr>
            <tr class="props-row__meta"><td><code>update:leadingAddonSelectValue</code></td><td><code>String | Number</code></td><td>Leading select updates.</td></tr>
            <tr class="props-row__meta"><td><code>update:trailingAddonSelectValue</code></td><td><code>String | Number</code></td><td>Trailing select updates.</td></tr>
            <tr class="props-row__meta"><td><code>input</code></td><td><code>InputEvent</code></td><td>Native input event passthrough.</td></tr>
            <tr class="props-row__meta"><td><code>focus</code></td><td><code>FocusEvent</code></td><td>Focus event passthrough.</td></tr>
            <tr class="props-row__meta"><td><code>blur</code></td><td><code>FocusEvent</code></td><td>Blur event passthrough.</td></tr>
          </tbody>
        </table>
        <h3>Slots</h3>
        <table class="props-table">
          <thead><tr><th>Component</th><th>Slot</th><th>Description</th></tr></thead>
          <tbody>
            <tr class="props-row__meta"><td><code>Input</code></td><td><code>—</code></td><td>No public slots.</td></tr>
            <tr class="props-row__meta"><td><code>InputMessage</code></td><td><code>default</code></td><td>Override message content.</td></tr>
          </tbody>
        </table>

        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="max-width:520px;width:100%;"><Input v-model="themeInput" label="Email" placeholder="name@example.com" /></div>
          <div class="comp-demo__group" style="max-width:520px;width:100%;"><Input v-model="themeError" label="Email" :error="true" message="Please enter a valid email" message-type="error" /></div>
        </div>
        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="max-width:520px;width:100%;"><Input v-model="themeInput" label="Email" placeholder="name@example.com" /></div>
          <div class="comp-demo__group" style="max-width:520px;width:100%;"><Input v-model="themeError" label="Email" :error="true" message="Please enter a valid email" message-type="error" /></div>
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
<pre><span class="token-keyword">import</span> Input <span class="token-keyword">from</span> <span class="token-string">'../../components/Input.vue'</span>
<span class="token-keyword">import</span> { <span class="token-tag">PhMagnifyingGlass</span> } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>

<span class="token-tag">&lt;Input</span> <span class="token-attr">v-model</span>=<span class="token-string">"email"</span> <span class="token-attr">label</span>=<span class="token-string">"Email"</span> <span class="token-attr">placeholder</span>=<span class="token-string">"name@example.com"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Input</span> <span class="token-attr">v-model</span>=<span class="token-string">"query"</span> <span class="token-attr">:left-icon</span>=<span class="token-string">"PhMagnifyingGlass"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Input</span> <span class="token-attr">v-model</span>=<span class="token-string">"amount"</span> <span class="token-attr">leading-addon</span>=<span class="token-string">"USD"</span> <span class="token-tag">/&gt;</span></pre>
          </div>
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input__labels"</span><span class="token-tag">&gt;</span>...<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-field marks-input-field--medium"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;input</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-field__input"</span> <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-message marks-input-message--info"</span><span class="token-tag">&gt;</span>...<span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>
<span class="token-comment">&lt;!-- BEM: .marks-input, .marks-input-field, .marks-input-message + modifiers --&gt;</span></pre>
          </div>
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// medium size</span>
<span class="token-attr">padding</span>: <span class="token-number">16px</span>;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);

<span class="token-comment">// focus-within</span>
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">4px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>), <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// error</span>
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>) !important;
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>) !important;</pre>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { PhMagnifyingGlass } from '@phosphor-icons/vue'

export default {
  name: 'InputDocPage',
  data() {
    return {
      PhMagnifyingGlass,
      demoValue: '',
      priceValue: '',
      smallInput: '',
      mediumInput: '',
      vDefault: '',
      vIcon: '',
      vLead: '',
      vTrail: '',
      liveEmail: '',
      emailMessage: 'Enter a valid email address',
      emailMessageType: 'info',
      exName: '',
      exAmount: '',
      bad1: '',
      bad2: '',
      themeInput: '',
      themeError: '',
      activeTab: 'vue',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  },
  methods: {
    validateEmail() {
      if (!this.liveEmail) {
        this.emailMessage = 'Enter a valid email address'
        this.emailMessageType = 'info'
        return
      }

      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.liveEmail)
      this.emailMessage = ok ? 'Looks good' : 'Please enter a valid email'
      this.emailMessageType = ok ? 'info' : 'error'
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';

.force-hover .marks-input-field:not(.marks-input-field--disabled):not(.marks-input-field--error):not(:focus-within) {
  box-shadow: 0 0 0 1px var(--marks-color-gray-300) !important;
}

.force-active .marks-input-field:not(.marks-input-field--disabled):not(.marks-input-field--error) {
  border-color: var(--marks-color-black) !important;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--marks-color-black) !important;
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

.anatomy-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
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

.variant-table td {
  vertical-align: top;
  min-width: 220px;
}
</style>
