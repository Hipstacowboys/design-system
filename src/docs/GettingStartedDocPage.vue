<template>
  <DocHeader active-page="getting-started" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="getting-started" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Foundations</span>
        <h1>Getting Started</h1>
        <p class="content__lead">
          Install the Marks Design System, import design tokens and Vue
          components, and render your first component in under five minutes.
        </p>

        <!-- ─── 1. Installation ─── -->
        <h2 id="installation" class="comp-section-h2">Installation</h2>
        <p class="comp-section-desc">
          The design system is distributed as an npm package installed directly
          from GitHub. No npm registry publishing required.
        </p>

        <h3>Install from GitHub</h3>
        <p>Run the install command in your project root:</p>
        <div class="code-inline">
          <pre><span class="token-keyword">npm install</span> <span class="token-string">git+https://github.com/Hipstacowboys/design-system.git</span></pre>
        </div>

        <h3>Or add to package.json</h3>
        <p>
          Add the dependency to your <code>package.json</code> manually, then
          run <code>npm install</code>:
        </p>
        <div class="code-inline">
<pre><span class="token-comment">// package.json</span>
{
  <span class="token-attr">"dependencies"</span>: {
    <span class="token-attr">"@hipstacowboys/design-system"</span>: <span class="token-string">"git+https://github.com/Hipstacowboys/design-system.git"</span>
  }
}</pre>
        </div>

        <h3>Pin a specific version</h3>
        <p>
          Append a tag or commit hash to lock the version. This prevents
          unexpected updates from breaking your app.
        </p>
        <div class="code-inline">
          <pre><span class="token-keyword">npm install</span> <span class="token-string">git+https://github.com/Hipstacowboys/design-system.git#v1.0.0</span></pre>
        </div>

        <!-- ─── 2. Dependencies ─── -->
        <h2 id="dependencies" class="comp-section-h2">Dependencies</h2>
        <p class="comp-section-desc">
          The design system requires two peer dependencies. Both should be
          installed automatically, but verify they are present.
        </p>

        <table class="props-table">
          <thead>
            <tr><th>Package</th><th>Min version</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">vue</code></td>
              <td><code class="prop-type">3.x</code></td>
              <td>Component runtime — all components are Vue 3 SFCs.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">@phosphor-icons/vue</code></td>
              <td><code class="prop-type">latest</code></td>
              <td>Icon library used across buttons, inputs, and navigation.</td>
            </tr>
          </tbody>
        </table>

        <p>If either is missing, install them explicitly:</p>
        <div class="code-inline">
          <pre><span class="token-keyword">npm install</span> <span class="token-string">vue @phosphor-icons/vue</span></pre>
        </div>

        <!-- ─── 3. Importing tokens ─── -->
        <h2 id="tokens" class="comp-section-h2">Importing Tokens</h2>
        <p class="comp-section-desc">
          Design tokens (colors, spacing, typography, radii) are defined as SCSS
          variables and CSS custom properties. Import the master file to get
          everything at once.
        </p>

        <h3>In your main SCSS file</h3>
        <div class="code-inline">
<pre><span class="token-keyword">@import</span> <span class="token-string">'node_modules/@hipstacowboys/design-system/tokens/_variables'</span>;</pre>
        </div>

        <h3>With build-tool path resolution</h3>
        <p>
          If your bundler resolves <code>node_modules</code> paths, use the
          shorter form:
        </p>
        <div class="code-inline">
<pre><span class="token-keyword">@import</span> <span class="token-string">'@hipstacowboys/design-system/tokens/_variables'</span>;</pre>
        </div>

        <div class="callout callout--info">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </span>
          <span>
            The <code>_variables.scss</code> file imports all token files
            automatically — colors, spacing, typography tokens, and typography
            mixins. You only need this single import.
          </span>
        </div>

        <h3>What you get</h3>
        <table class="props-table">
          <thead>
            <tr><th>Token file</th><th>Contents</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">_colors.scss</code></td>
              <td>CSS custom properties: <code>--marks-color-*</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">_spacing.scss</code></td>
              <td>CSS custom properties: <code>--marks-spacing-*</code>, <code>--marks-radius-*</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">_typography-tokens.scss</code></td>
              <td>SCSS variables: <code>$marks-font-size-*</code>, <code>$marks-font-weight-*</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">_typography-mixins.scss</code></td>
              <td>SCSS mixins: <code>marks-typography-*</code></td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 4. Registering components ─── -->
        <h2 id="registering" class="comp-section-h2">Registering Components</h2>
        <p class="comp-section-desc">
          Choose the registration strategy that fits your project size. All
          three options produce the same result at runtime.
        </p>

        <h3>Option A — Register all components globally</h3>
        <p>Best for projects that use many design-system components across most views.</p>
        <div class="code-inline">
<pre><span class="token-keyword">import</span> { createApp } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>;
<span class="token-keyword">import</span> * <span class="token-keyword">as</span> marksComponents <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;

<span class="token-keyword">const</span> app = createApp(App);

Object.keys(marksComponents).forEach(<span class="token-attr">name</span> =&gt; {
  app.component(name, marksComponents[name]);
});

app.mount(<span class="token-string">'#app'</span>);</pre>
        </div>

        <h3>Option B — Register specific components globally</h3>
        <p>Keeps the global registry lean — only what you actually use.</p>
        <div class="code-inline">
<pre><span class="token-keyword">import</span> { createApp } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>;
<span class="token-keyword">import</span> {
  ButtonPrimary,
  ButtonSecondary,
  Input
} <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;

<span class="token-keyword">const</span> app = createApp(App);

app.component(<span class="token-string">'ButtonPrimary'</span>, ButtonPrimary);
app.component(<span class="token-string">'ButtonSecondary'</span>, ButtonSecondary);
app.component(<span class="token-string">'Input'</span>, Input);

app.mount(<span class="token-string">'#app'</span>);</pre>
        </div>

        <h3>Option C — Import locally in a component</h3>
        <p>
          Zero global footprint. Each component explicitly declares its
          dependencies.
        </p>
        <div class="code-inline">
<pre><span class="token-tag">&lt;script&gt;</span>
<span class="token-keyword">import</span> { ButtonPrimary, Input } <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;

<span class="token-keyword">export default</span> {
  <span class="token-attr">components</span>: {
    ButtonPrimary,
    Input
  }
}
<span class="token-tag">&lt;/script&gt;</span></pre>
        </div>

        <!-- ─── 5. First component ─── -->
        <h2 id="first-component" class="comp-section-h2">First Component</h2>
        <p class="comp-section-desc">
          A minimal example showing a ButtonPrimary wired up with an icon. Copy
          this into a <code>.vue</code> file and you are up and running.
        </p>

        <div class="code-inline">
<pre><span class="token-tag">&lt;template&gt;</span>
  <span class="token-tag">&lt;ButtonPrimary</span>
    <span class="token-attr">size</span>=<span class="token-string">"medium"</span>
    <span class="token-attr">text</span>=<span class="token-string">"Book Now"</span>
    <span class="token-attr">:left-icon</span>=<span class="token-string">"PhCalendar"</span>
  <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/template&gt;</span>

<span class="token-tag">&lt;script&gt;</span>
<span class="token-keyword">import</span> { ButtonPrimary } <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;
<span class="token-keyword">import</span> { PhCalendar } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>;

<span class="token-keyword">export default</span> {
  <span class="token-attr">components</span>: { ButtonPrimary, PhCalendar },
  <span class="token-attr">data</span>() {
    <span class="token-keyword">return</span> { PhCalendar };
  }
}
<span class="token-tag">&lt;/script&gt;</span>

<span class="token-tag">&lt;style lang="scss"&gt;</span>
<span class="token-keyword">@import</span> <span class="token-string">'@hipstacowboys/design-system/tokens/_variables'</span>;
<span class="token-tag">&lt;/style&gt;</span></pre>
        </div>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>
            Icons passed as props must also be added to <code>data()</code> so
            Vue can bind them reactively. Without this step, the icon will not
            render.
          </span>
        </div>

        <h3>Icon weight rules</h3>
        <ul>
          <li>Icons <strong>19 px and smaller</strong>: use <code>weight="bold"</code></li>
          <li>Icons <strong>20 px and above</strong>: use <code>weight="regular"</code></li>
        </ul>

        <!-- ─── 6. Development setup ─── -->
        <h2 id="dev-setup" class="comp-section-h2">Development Setup</h2>
        <p class="comp-section-desc">
          How to run the design system itself locally for development and
          contribution.
        </p>

        <h3>SCSS compilation</h3>
        <p>
          Token and component SCSS is compiled with the npm script
          <code>npm run build:css</code>. It outputs
          <code>design-system.css</code> and <code>preview.css</code> from
          the source SCSS files in the project root.
        </p>

        <h3>Vite dev server</h3>
        <p>
          Vue component documentation pages use Vite for hot-module reload.
          Start the server with:
        </p>
        <div class="code-inline">
          <pre><span class="token-keyword">npm run</span> <span class="token-string">dev</span></pre>
        </div>
        <p>
          This serves the project on <code>localhost</code>. Open any
          documentation page — for example
          <code>documentation/button.html</code> — and changes to
          <code>.vue</code> files will hot-reload instantly.
        </p>

        <h3>Preview file</h3>
        <p>
          Use <code>preview-vue.html</code> in the project root to quickly test
          any component in isolation outside the documentation layout.
        </p>

        <!-- ─── 7. Versioning ─── -->
        <h2 id="versioning" class="comp-section-h2">Versioning</h2>
        <p class="comp-section-desc">
          The design system follows <strong>semantic versioning</strong>
          (major.minor.patch). Breaking changes bump the major version.
        </p>

        <h3>Check installed version</h3>
        <div class="code-inline">
          <pre><span class="token-keyword">npm list</span> <span class="token-string">@hipstacowboys/design-system</span></pre>
        </div>

        <h3>Update to latest</h3>
        <div class="code-inline">
          <pre><span class="token-keyword">npm update</span> <span class="token-string">@hipstacowboys/design-system</span></pre>
        </div>

        <h3>Install a specific version</h3>
        <div class="code-inline">
          <pre><span class="token-keyword">npm install</span> <span class="token-string">git+https://github.com/Hipstacowboys/design-system.git#v2.1.0</span></pre>
        </div>

        <h3>Version scheme</h3>
        <table class="props-table">
          <thead>
            <tr><th>Bump</th><th>When</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">major</code></td>
              <td>Breaking API or token changes</td>
              <td><code class="prop-default">2.0.0</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">minor</code></td>
              <td>New components or backward-compatible features</td>
              <td><code class="prop-default">1.3.0</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">patch</code></td>
              <td>Bug fixes, style tweaks, doc updates</td>
              <td><code class="prop-default">1.3.2</code></td>
            </tr>
          </tbody>
        </table>

        <p>
          See the <a href="/CHANGELOG.md">Changelog</a> for a full version
          history of changes.
        </p>

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
            >{{ tab.label }}</button>
          </div>
          <div class="code-toolbar">
            <button class="code-toolbar__copy" @click="copyCode">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {{ copyLabel }}
            </button>
          </div>

          <!-- ── Install tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'install' }">
<pre><span class="token-comment"># Install from GitHub</span>
<span class="token-keyword">npm install</span> <span class="token-string">git+https://github.com/Hipstacowboys/design-system.git</span>

<span class="token-comment"># Pin a specific version</span>
<span class="token-keyword">npm install</span> <span class="token-string">git+https://github.com/Hipstacowboys/design-system.git#v1.0.0</span>

<span class="token-comment"># Install peer dependencies</span>
<span class="token-keyword">npm install</span> <span class="token-string">vue @phosphor-icons/vue</span>

<span class="token-comment"># Check installed version</span>
<span class="token-keyword">npm list</span> <span class="token-string">@hipstacowboys/design-system</span>

<span class="token-comment"># Update to latest</span>
<span class="token-keyword">npm update</span> <span class="token-string">@hipstacowboys/design-system</span></pre>
          </div>

          <!-- ── Vue tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'vue' }">
<pre><span class="token-comment">// Register all components (main.js)</span>
<span class="token-keyword">import</span> { createApp } <span class="token-keyword">from</span> <span class="token-string">'vue'</span>;
<span class="token-keyword">import</span> * <span class="token-keyword">as</span> marks
  <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;

<span class="token-keyword">const</span> app = createApp(App);
Object.keys(marks).forEach(<span class="token-attr">n</span> =&gt; {
  app.component(n, marks[n]);
});
app.mount(<span class="token-string">'#app'</span>);


<span class="token-comment">// Or import specific components</span>
<span class="token-keyword">import</span> {
  ButtonPrimary,
  Input,
  Toggle
} <span class="token-keyword">from</span> <span class="token-string">'@hipstacowboys/design-system'</span>;


<span class="token-comment">// Local registration in a component</span>
<span class="token-keyword">export default</span> {
  <span class="token-attr">components</span>: {
    ButtonPrimary,
    Input
  }
}


<span class="token-comment">// Quick example with icon</span>
<span class="token-tag">&lt;ButtonPrimary</span>
  <span class="token-attr">size</span>=<span class="token-string">"medium"</span>
  <span class="token-attr">text</span>=<span class="token-string">"Book Now"</span>
  <span class="token-attr">:left-icon</span>=<span class="token-string">"PhCalendar"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-comment">// Import all tokens at once</span>
<span class="token-keyword">@import</span> <span class="token-string">'@hipstacowboys/design-system/tokens/_variables'</span>;


<span class="token-comment">// ─── Color tokens (CSS custom properties) ───</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Spacing tokens ───</span>
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">margin</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);


<span class="token-comment">// ─── Border radius tokens ───</span>
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);


<span class="token-comment">// ─── Typography mixins ───</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-keyword">@include</span> marks-typography-h3-bold;


<span class="token-comment">// ─── Typography variables ───</span>
<span class="token-attr">font-size</span>: <span class="token-string">$marks-font-size-md</span>;
<span class="token-attr">font-weight</span>: <span class="token-string">$marks-font-weight-bold</span>;


<span class="token-comment">// ─── Theme switching ───</span>
<span class="token-comment">// Colors adapt automatically via:</span>
<span class="token-attr">data-theme</span>=<span class="token-string">"light"</span>  <span class="token-comment">// or "dark"</span>
<span class="token-comment">// Set on :root or html element</span></pre>
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
  name: 'GettingStartedDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      activeTab: 'install',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'install', label: 'Install' },
        { id: 'vue', label: 'Vue' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  },
  methods: {
    copyCode() {
      const pane = document.querySelector(`.code-pane.is-active pre`)
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
.code-inline {
  margin: 12px 0 20px;
  background: #1a1a1a;
  border-radius: 8px;
  overflow-x: auto;
}

.code-inline pre {
  margin: 0;
  padding: 14px 18px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #d4d4d4;
  white-space: pre;
  -webkit-overflow-scrolling: touch;
}

.callout--info {
  border-left-color: #2576F7;
}

.callout--info .callout__icon {
  color: #2576F7;
}
</style>
