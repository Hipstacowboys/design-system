<template>
  <DocHeader active-page="icons" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="icons" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Foundations</span>
        <h1>Icons</h1>
        <p class="content__lead">
          The Ventrata Design System uses
          <a href="https://phosphoricons.com" target="_blank" rel="noopener">Phosphor Icons</a>
          via the <code>@phosphor-icons/vue</code> package. Phosphor provides 7,000+
          open-source icons in six weights, giving us a consistent, flexible icon
          system across every component and view.
        </p>

        <!-- ─── 1. Overview ─── -->
        <h2 id="overview" class="comp-section-h2">Overview</h2>
        <p class="comp-section-desc">
          All icons come from the Phosphor Icons library. Browse the full catalogue at
          <a href="https://phosphoricons.com" target="_blank" rel="noopener">phosphoricons.com</a>.
        </p>

        <ul>
          <li>Package: <code>@phosphor-icons/vue</code> — tree-shakeable Vue 3 components.</li>
          <li>Each icon is a standalone component: <code>&lt;PhHouse /&gt;</code>, <code>&lt;PhGear /&gt;</code>, etc.</li>
          <li>Icons inherit <code>currentColor</code> by default, so they adapt to the parent's text color.</li>
          <li>Six available weights: <strong>thin</strong>, <strong>light</strong>, <strong>regular</strong>, <strong>bold</strong>, <strong>fill</strong>, and <strong>duotone</strong>.</li>
        </ul>

        <!-- ─── 2. Weight rules ─── -->
        <h2 id="weight-rules" class="comp-section-h2">Weight rules</h2>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>
            <strong>Critical rule:</strong> Icons at <strong>19 px and smaller</strong> must use
            <code>weight="bold"</code>. Icons at <strong>20 px and above</strong> use
            <code>weight="regular"</code>. This keeps stroke legibility consistent across sizes.
          </span>
        </div>

        <h3>Visual comparison</h3>
        <p class="comp-section-desc">Same icon at different sizes — notice how bold stays legible at small sizes while regular looks too thin.</p>

        <div class="icon-comparison">
          <table class="variant-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>weight="bold"</th>
                <th>weight="regular"</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>12</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:12px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:12px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--default">Bold</span></td>
              </tr>
              <tr>
                <td><code>16</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:16px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:16px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--default">Bold</span></td>
              </tr>
              <tr>
                <td><code>19</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:19px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:19px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--default">Bold</span></td>
              </tr>
              <tr>
                <td><code>20</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:20px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:20px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--hover">Regular</span></td>
              </tr>
              <tr>
                <td><code>24</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:24px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:24px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--hover">Regular</span></td>
              </tr>
              <tr>
                <td><code>32</code></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--bold" style="font-size:32px;">Aa</span></div></td>
                <td><div class="icon-cell"><span class="icon-demo icon-demo--regular" style="font-size:32px;">Aa</span></div></td>
                <td><span class="state-chip state-chip--hover">Regular</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Rule summary</h3>
        <table class="props-table">
          <thead>
            <tr><th>Size range</th><th>Weight</th><th>Reason</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td>&le; 19 px</td>
              <td><code class="prop-name">bold</code></td>
              <td>Thicker strokes stay readable at small sizes</td>
            </tr>
            <tr class="props-row__meta">
              <td>&ge; 20 px</td>
              <td><code class="prop-name">regular</code></td>
              <td>Standard stroke width looks balanced at larger sizes</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 3. Importing icons ─── -->
        <h2 id="importing" class="comp-section-h2">Importing icons</h2>
        <p class="comp-section-desc">
          Icons are tree-shakeable — import only what you need. Unused icons are excluded from the bundle.
        </p>

        <h3>Named imports (recommended)</h3>
        <p>Import individual icons from <code>@phosphor-icons/vue</code> in your component's script section.</p>
        <div class="code-inline">
<pre><span class="token-keyword">import</span> { PhHouse, PhGear, PhUser } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span></pre>
        </div>

        <h3>Local registration</h3>
        <p>Register icons in the component that uses them. This is the preferred approach for most views.</p>
        <div class="code-inline">
<pre><span class="token-keyword">export default</span> {
  <span class="token-attr">components</span>: { PhHouse, PhGear, PhUser }
}</pre>
        </div>

        <h3>Global registration</h3>
        <p>For icons used across the entire app (e.g. nav icons), register them globally in your app entry.</p>
        <div class="code-inline">
<pre><span class="token-keyword">import</span> { PhHouse } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>

app.<span class="token-attr">component</span>(<span class="token-string">'PhHouse'</span>, PhHouse)</pre>
        </div>

        <!-- ─── 4. Using in templates ─── -->
        <h2 id="usage" class="comp-section-h2">Using in templates</h2>

        <h3>Basic usage</h3>
        <p>Drop the component into your template. It renders an inline SVG that inherits <code>currentColor</code>.</p>
        <div class="code-inline">
<pre><span class="token-tag">&lt;PhHouse /&gt;</span></pre>
        </div>

        <h3>With size prop</h3>
        <p>Pass a number to <code>:size</code> to control the icon dimensions in pixels.</p>
        <div class="code-inline">
<pre><span class="token-tag">&lt;PhHouse</span> <span class="token-attr">:size</span>=<span class="token-string">"16"</span> <span class="token-attr">weight</span>=<span class="token-string">"bold"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;PhHouse</span> <span class="token-attr">:size</span>=<span class="token-string">"24"</span> <span class="token-attr">weight</span>=<span class="token-string">"regular"</span> <span class="token-tag">/&gt;</span></pre>
        </div>

        <h3>With weight prop</h3>
        <p>Set the stroke weight explicitly. Remember the sizing rule above.</p>
        <div class="code-inline">
<pre><span class="token-comment">&lt;!-- Small: use bold --&gt;</span>
<span class="token-tag">&lt;PhCheck</span> <span class="token-attr">:size</span>=<span class="token-string">"14"</span> <span class="token-attr">weight</span>=<span class="token-string">"bold"</span> <span class="token-tag">/&gt;</span>

<span class="token-comment">&lt;!-- Large: use regular --&gt;</span>
<span class="token-tag">&lt;PhCheck</span> <span class="token-attr">:size</span>=<span class="token-string">"24"</span> <span class="token-attr">weight</span>=<span class="token-string">"regular"</span> <span class="token-tag">/&gt;</span></pre>
        </div>

        <h3>Inheriting color</h3>
        <p>Icons use <code>currentColor</code> by default. Set the parent's <code>color</code> to control them, or pass a <code>color</code> prop directly.</p>
        <div class="code-inline">
<pre><span class="token-comment">&lt;!-- Inherits from parent --&gt;</span>
<span class="token-tag">&lt;span</span> <span class="token-attr">style</span>=<span class="token-string">"color: var(--marks-color-primary-solid)"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;PhCheckCircle</span> <span class="token-attr">:size</span>=<span class="token-string">"20"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/span&gt;</span>

<span class="token-comment">&lt;!-- Direct color prop --&gt;</span>
<span class="token-tag">&lt;PhWarningCircle</span> <span class="token-attr">:size</span>=<span class="token-string">"20"</span> <span class="token-attr">color</span>=<span class="token-string">"#FD3860"</span> <span class="token-tag">/&gt;</span></pre>
        </div>

        <!-- ─── 5. Passing icons as props ─── -->
        <h2 id="icon-props" class="comp-section-h2">Passing icons as props</h2>

        <p class="comp-section-desc">
          When a component accepts an icon via a prop, you need to handle Vue's reactivity system correctly.
          Vue 3 wraps data properties in a reactive <code>Proxy</code>, which adds unnecessary overhead to
          static icon components. Use <code>markRaw()</code> to prevent this.
        </p>

        <h3>The problem</h3>
        <ul>
          <li>If you assign a Phosphor icon component directly in <code>data()</code>, Vue makes it reactive.</li>
          <li>This triggers a console warning and adds proxy overhead to a component that never changes.</li>
        </ul>

        <h3>The solution: markRaw()</h3>
        <p>Wrap the icon with <code>markRaw()</code> to tell Vue it should never be made reactive.</p>

        <div class="code-inline">
<pre><span class="token-keyword">import</span> { markRaw } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">import</span> { PhHouse, PhGear } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>

<span class="token-keyword">export default</span> {
  <span class="token-attr">data</span>() {
    <span class="token-keyword">return</span> {
      <span class="token-attr">navItems</span>: [
        { <span class="token-attr">label</span>: <span class="token-string">'Home'</span>,     <span class="token-attr">icon</span>: markRaw(PhHouse) },
        { <span class="token-attr">label</span>: <span class="token-string">'Settings'</span>, <span class="token-attr">icon</span>: markRaw(PhGear) },
      ]
    }
  }
}</pre>
        </div>

        <h3>Using in the template</h3>
        <p>Render the dynamic icon with <code>&lt;component :is="..."&gt;</code>.</p>

        <div class="code-inline">
<pre><span class="token-tag">&lt;template&gt;</span>
  <span class="token-tag">&lt;nav&gt;</span>
    <span class="token-tag">&lt;a</span>
      <span class="token-attr">v-for</span>=<span class="token-string">"item in navItems"</span>
      <span class="token-attr">:key</span>=<span class="token-string">"item.label"</span>
    <span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;component</span>
        <span class="token-attr">:is</span>=<span class="token-string">"item.icon"</span>
        <span class="token-attr">:size</span>=<span class="token-string">"16"</span>
        <span class="token-attr">weight</span>=<span class="token-string">"bold"</span>
      <span class="token-tag">/&gt;</span>
      <span class="token-tag">&lt;span</span> <span class="token-attr">v-text</span>=<span class="token-string">"item.label"</span> <span class="token-tag">/&gt;</span>
    <span class="token-tag">&lt;/a&gt;</span>
  <span class="token-tag">&lt;/nav&gt;</span>
<span class="token-tag">&lt;/template&gt;</span></pre>
        </div>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>
            Always use <code>markRaw()</code> when storing component references in reactive data.
            Without it, Vue wraps the component in a Proxy, causing warnings and performance overhead.
          </span>
        </div>

        <!-- ─── 6. Common icons used ─── -->
        <h2 id="common-icons" class="comp-section-h2">Common icons used</h2>
        <p class="comp-section-desc">
          These icons appear frequently across the design system components. Import them from
          <code>@phosphor-icons/vue</code> by their PascalCase name.
        </p>

        <div class="icon-grid">
          <div class="icon-grid__item" v-for="icon in commonIcons" :key="icon.name">
            <div class="icon-grid__preview">
              <svg class="icon-grid__svg" viewBox="0 0 256 256" v-html="icon.path"></svg>
            </div>
            <span class="icon-grid__name" v-text="icon.name"></span>
            <span class="icon-grid__usage" v-text="icon.usage"></span>
          </div>
        </div>

        <h3>Import example</h3>
        <div class="code-inline">
<pre><span class="token-keyword">import</span> {
  PhCheck,
  PhX,
  PhWarningCircle,
  PhInfo,
  PhCheckCircle,
  PhCaretRight,
  PhCaretDown,
  PhMagnifyingGlass,
  PhArrowRight,
  PhDotsThreeVertical,
  PhPlus,
  PhTrash,
  PhPencilSimple,
  PhEye,
  PhEyeSlash,
} <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span></pre>
        </div>

        <!-- ─── 7. Sizing guidelines ─── -->
        <h2 id="sizing" class="comp-section-h2">Sizing guidelines</h2>
        <p class="comp-section-desc">
          Use consistent icon sizes within component families. The table below shows standard sizing across the design system.
        </p>

        <table class="props-table">
          <thead>
            <tr><th>Context</th><th>Size</th><th>Weight</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td>Inline with small text</td>
              <td><code class="prop-default">12</code></td>
              <td><code class="prop-name">bold</code></td>
              <td>Badges, tags, compact UI</td>
            </tr>
            <tr class="props-row__meta">
              <td>Button icon (small)</td>
              <td><code class="prop-default">14</code></td>
              <td><code class="prop-name">bold</code></td>
              <td>Icon-only buttons, compact actions</td>
            </tr>
            <tr class="props-row__meta">
              <td>Button icon (default)</td>
              <td><code class="prop-default">16</code></td>
              <td><code class="prop-name">bold</code></td>
              <td>Standard button with icon + label</td>
            </tr>
            <tr class="props-row__meta">
              <td>Input adornment</td>
              <td><code class="prop-default">16</code></td>
              <td><code class="prop-name">bold</code></td>
              <td>Search icon, clear button, visibility toggle</td>
            </tr>
            <tr class="props-row__meta">
              <td>Navigation icon</td>
              <td><code class="prop-default">20</code></td>
              <td><code class="prop-name">regular</code></td>
              <td>Sidebar nav, tab bar icons</td>
            </tr>
            <tr class="props-row__meta">
              <td>Page header icon</td>
              <td><code class="prop-default">24</code></td>
              <td><code class="prop-name">regular</code></td>
              <td>Section headers, card titles</td>
            </tr>
            <tr class="props-row__meta">
              <td>Empty state illustration</td>
              <td><code class="prop-default">48</code></td>
              <td><code class="prop-name">regular</code></td>
              <td>Large decorative icon in empty views</td>
            </tr>
          </tbody>
        </table>

        <h3>Alignment with text</h3>
        <ul>
          <li>Wrap the icon and text in a flex container with <code>align-items: center</code>.</li>
          <li>Use <code>gap: 8px</code> (<code>--marks-spacing-8</code>) between icon and text at default sizes.</li>
          <li>For compact layouts (12–14 px icons), reduce gap to <code>4px</code> (<code>--marks-spacing-4</code>).</li>
        </ul>

        <h3>Consistency within families</h3>
        <ul>
          <li>All icons in a toolbar should share the same <code>:size</code> and <code>weight</code>.</li>
          <li>All nav items in a sidebar should use the same size — don't mix 16 px and 20 px.</li>
          <li>When pairing icons with different text sizes, adjust the icon size to match the text's x-height, not the line-height.</li>
        </ul>

      </article>
    </main>

    <!-- ─── Right aside — code snippets ─── -->
    <aside class="layout__aside">
      <div class="aside">
        <div class="aside__block aside__block--code">
          <div class="code-tabs">
            <button
              v-for="tab in codeTabs"
              :key="tab.id"
              class="code-tabs__tab"
              :class="{ 'is-active': activeTab === tab.id }"
              @click="activeTab = tab.id"
              v-text="tab.label"
            ></button>
          </div>
          <div class="code-toolbar">
            <button class="code-toolbar__copy" @click="copyCode">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span v-text="copyLabel"></span>
            </button>
          </div>

          <!-- ── Import tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'import' }">
<pre><span class="token-comment">// Named import (tree-shakeable)</span>
<span class="token-keyword">import</span> {
  PhHouse,
  PhGear,
  PhCheck,
  PhX,
} <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>


<span class="token-comment">// Local component registration</span>
<span class="token-keyword">export default</span> {
  <span class="token-attr">components</span>: {
    PhHouse,
    PhGear,
    PhCheck,
    PhX,
  }
}


<span class="token-comment">// Global registration (app entry)</span>
<span class="token-keyword">import</span> { PhHouse } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>
app.<span class="token-attr">component</span>(<span class="token-string">'PhHouse'</span>, PhHouse)


<span class="token-comment">// With markRaw for prop passing</span>
<span class="token-keyword">import</span> { markRaw } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>
<span class="token-keyword">import</span> { PhHouse } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>

<span class="token-keyword">export default</span> {
  <span class="token-attr">data</span>() {
    <span class="token-keyword">return</span> {
      <span class="token-attr">icon</span>: markRaw(PhHouse)
    }
  }
}</pre>
          </div>

          <!-- ── Usage tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'usage' }">
<pre><span class="token-comment">&lt;!-- Basic icon --&gt;</span>
<span class="token-tag">&lt;PhHouse /&gt;</span>


<span class="token-comment">&lt;!-- Small icon (bold weight) --&gt;</span>
<span class="token-tag">&lt;PhCheck</span>
  <span class="token-attr">:size</span>=<span class="token-string">"14"</span>
  <span class="token-attr">weight</span>=<span class="token-string">"bold"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Standard icon (regular weight) --&gt;</span>
<span class="token-tag">&lt;PhGear</span>
  <span class="token-attr">:size</span>=<span class="token-string">"24"</span>
  <span class="token-attr">weight</span>=<span class="token-string">"regular"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Custom color --&gt;</span>
<span class="token-tag">&lt;PhWarningCircle</span>
  <span class="token-attr">:size</span>=<span class="token-string">"20"</span>
  <span class="token-attr">color</span>=<span class="token-string">"#FD3860"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Inherits parent color --&gt;</span>
<span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"text-success"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;PhCheckCircle</span>
    <span class="token-attr">:size</span>=<span class="token-string">"16"</span>
    <span class="token-attr">weight</span>=<span class="token-string">"bold"</span>
  <span class="token-tag">/&gt;</span>
  Done
<span class="token-tag">&lt;/span&gt;</span>


<span class="token-comment">&lt;!-- Dynamic icon via prop --&gt;</span>
<span class="token-tag">&lt;component</span>
  <span class="token-attr">:is</span>=<span class="token-string">"item.icon"</span>
  <span class="token-attr">:size</span>=<span class="token-string">"16"</span>
  <span class="token-attr">weight</span>=<span class="token-string">"bold"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Button with icon --&gt;</span>
<span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-btn"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;PhPlus</span>
    <span class="token-attr">:size</span>=<span class="token-string">"16"</span>
    <span class="token-attr">weight</span>=<span class="token-string">"bold"</span>
  <span class="token-tag">/&gt;</span>
  Add item
<span class="token-tag">&lt;/button&gt;</span></pre>
          </div>

          <!-- ── Props tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'props' }">
<pre><span class="token-comment">// Phosphor icon component props</span>

<span class="token-attr">size</span>: Number | String
  <span class="token-comment">// Icon dimensions in px</span>
  <span class="token-comment">// Default: 32</span>

<span class="token-attr">color</span>: String
  <span class="token-comment">// Icon fill/stroke color</span>
  <span class="token-comment">// Default: 'currentColor'</span>

<span class="token-attr">weight</span>: String
  <span class="token-comment">// 'thin' | 'light' | 'regular'</span>
  <span class="token-comment">// | 'bold' | 'fill' | 'duotone'</span>
  <span class="token-comment">// Default: 'regular'</span>

<span class="token-attr">mirrored</span>: Boolean
  <span class="token-comment">// Flip icon horizontally</span>
  <span class="token-comment">// Useful for RTL layouts</span>
  <span class="token-comment">// Default: false</span>


<span class="token-comment">// ─── Weight rule reminder ───</span>
<span class="token-comment">//</span>
<span class="token-comment">// &lt;= 19px  →  weight="bold"</span>
<span class="token-comment">// &gt;= 20px  →  weight="regular"</span>


<span class="token-comment">// ─── Common sizes ───</span>

<span class="token-number">12</span>  <span class="token-comment">// Badges, tags</span>
<span class="token-number">14</span>  <span class="token-comment">// Small buttons</span>
<span class="token-number">16</span>  <span class="token-comment">// Default buttons, inputs</span>
<span class="token-number">20</span>  <span class="token-comment">// Navigation</span>
<span class="token-number">24</span>  <span class="token-comment">// Page headers</span>
<span class="token-number">48</span>  <span class="token-comment">// Empty states</span></pre>
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
  name: 'IconsDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      activeTab: 'import',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'import', label: 'Import' },
        { id: 'usage', label: 'Usage' },
        { id: 'props', label: 'Props' }
      ],
      commonIcons: [
        { name: 'PhCheck', usage: 'Confirmations, success', path: '<path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"/>' },
        { name: 'PhX', usage: 'Close, dismiss, remove', path: '<path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/>' },
        { name: 'PhWarningCircle', usage: 'Warnings, validation', path: '<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"/>' },
        { name: 'PhInfo', usage: 'Informational callouts', path: '<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V176a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM140,84a16,16,0,1,1-16-16A16,16,0,0,1,140,84Z"/>' },
        { name: 'PhCheckCircle', usage: 'Success states', path: '<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm49.52-109.49-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L113,133l47.51-47.52a12,12,0,0,1,17,17Z"/>' },
        { name: 'PhCaretRight', usage: 'Navigation, expand', path: '<path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"/>' },
        { name: 'PhCaretDown', usage: 'Dropdowns, collapse', path: '<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"/>' },
        { name: 'PhMagnifyingGlass', usage: 'Search fields', path: '<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>' },
        { name: 'PhArrowRight', usage: 'CTAs, next steps', path: '<path d="M204.49,136.49l-72,72a12,12,0,0,1-17-17L171,136H48a12,12,0,0,1,0-24H171L115.51,56.49a12,12,0,0,1,17-17l72,72A12,12,0,0,1,204.49,136.49Z"/>' },
        { name: 'PhDotsThreeVertical', usage: 'More actions menu', path: '<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z"/>' },
        { name: 'PhPlus', usage: 'Add, create new', path: '<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"/>' },
        { name: 'PhTrash', usage: 'Delete actions', path: '<path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100ZM188,204H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"/>' },
        { name: 'PhPencilSimple', usage: 'Edit actions', path: '<path d="M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L36.69,157.63A11.9,11.9,0,0,0,33.2,166L20.27,221.57a12,12,0,0,0,14.16,14.16L90,222.8a11.9,11.9,0,0,0,8.39-3.49L224.49,93.18a12,12,0,0,0,0-17ZM85,208.49,48.69,198.1,57.51,207.31,45.9,171l31-31,40,40ZM187,97,147,57l24.29-24.29,40,40Z"/>' },
        { name: 'PhEye', usage: 'Show, visibility on', path: '<path d="M251.77,124.76C246.47,117.4,207.79,68,128,68S9.53,117.4,4.23,124.76a12,12,0,0,0,0,6.5C9.53,138.62,48.21,188,128,188s118.47-49.4,123.77-56.76a12,12,0,0,0,0-6.5ZM128,164a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"/>' },
        { name: 'PhEyeSlash', usage: 'Hide, visibility off', path: '<path d="M56.88,31.93A12,12,0,1,0,39.12,48.07l16,17.65C25.59,86,10.5,111.83,4.23,124.76a12.08,12.08,0,0,0,0,6.5C9.53,138.62,48.21,188,128,188a136,136,0,0,0,51.87-10.3l19.25,21.17A12,12,0,0,0,216,204a12.06,12.06,0,0,0,8.88-3.93,12,12,0,0,0-.76-16.94ZM128,164a36,36,0,0,1-29.24-57L158,172.29A35.76,35.76,0,0,1,128,164Zm123.77-32.76C246.47,138.62,207.79,188,128,188v0c-9.79,0-18.93-.77-27.48-2.09L128,164h0a36,36,0,0,0,32.6-49.12l28.13,30.95c13.93-10.6,25.19-23,32.28-31.28Z"/>' },
      ]
    }
  },
  methods: {
    copyCode() {
      const pane = document.querySelector('.code-pane.is-active pre')
      if (pane) {
        navigator.clipboard.writeText(pane.textContent)
        this.copyLabel = 'Copied!'
        setTimeout(() => { this.copyLabel = 'Copy' }, 1500)
      }
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';
</style>

<style scoped>
/* ─── Inline code blocks ─── */
.code-inline {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 12px 0 24px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.code-inline pre {
  margin: 0;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #e0e0e0;
  white-space: pre;
}

/* ─── Icon comparison table ─── */
.icon-comparison {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 32px;
}

.icon-cell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
}

.icon-demo {
  display: inline-block;
  line-height: 1;
  color: var(--marks-color-gray-500, #1a1a1a);
}

.icon-demo--bold {
  font-weight: 700;
}

.icon-demo--regular {
  font-weight: 400;
}

/* ─── Icon grid ─── */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin: 16px 0 32px;
}

.icon-grid__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  background: var(--marks-color-gray-400, #FAFAFA);
  border: 1px solid var(--marks-color-gray-350, #ECECEC);
  border-radius: 8px;
  text-align: center;
}

.icon-grid__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.icon-grid__svg {
  width: 28px;
  height: 28px;
  fill: var(--marks-color-gray-500, #1a1a1a);
}

.icon-grid__name {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 600;
  color: var(--marks-color-gray-500, #1a1a1a);
  word-break: break-all;
}

.icon-grid__usage {
  font-size: 11px;
  color: var(--marks-color-gray-300, #8D8D8D);
  line-height: 1.3;
}

/* ─── Variant table alignment ─── */
.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
}
</style>
