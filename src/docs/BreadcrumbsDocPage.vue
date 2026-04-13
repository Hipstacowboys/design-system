<template>
  <DocHeader active-page="breadcrumbs" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="breadcrumbs" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Breadcrumbs</h1>
        <p class="content__lead">
          A horizontal navigation trail showing the user's current location within
          a page hierarchy. Two components: <code>Breadcrumbs</code> (the nav
          container that renders separators) and <code>Breadcrumb</code> (an
          individual crumb with optional active state).
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Breadcrumbs</strong> — Display the user's current position within a multi-level hierarchy. Ideal for dashboards, settings panels, and content-heavy apps with more than two navigation levels.</li>
          <li><strong>Breadcrumb</strong> — Represents a single level in the trail. The last item should always be marked <code>active</code> to indicate the current page.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the app has only one or two levels of navigation — breadcrumbs add noise without value.</li>
          <li>For step-by-step wizards or progress indicators — use a <code>Stepper</code> or <code>Tabs</code> component instead.</li>
          <li>As a replacement for primary navigation — breadcrumbs are secondary, supplemental wayfinding.</li>
        </ul>

        <h3>Breadcrumbs overview</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">2-level trail</span>
            <Breadcrumbs :items="demo2Items" />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">3-level trail</span>
            <Breadcrumbs :items="demo3Items" />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Many levels</span>
            <Breadcrumbs :items="demoManyItems" />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Breadcrumbs is a flex container with consistent spacing between crumbs and separator icons.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Crumb + Separator + Crumb (active)</span>
            <Breadcrumbs :items="demo3Items" />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-breadcrumbs</code> (nav container) ·
              <code>.marks-breadcrumb</code> (crumb text) ·
              <code>.marks-breadcrumbs__separator</code> (PhCaretRight icon) ·
              <code>.marks-breadcrumb--active</code> (current page)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">The breadcrumbs container uses a single gap token between all children (crumbs and separators).</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Breadcrumbs</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Breadcrumbs :items="demo3Items" style="pointer-events:none;" />
              <!-- Gap badge (between first crumb and separator) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }">8</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>item gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>layout</td><td><code>—</code></td><td>flex, center, wrap</td></tr>
              <tr><td>separator icon size</td><td><code>—</code></td><td>12px</td></tr>
              <tr><td>separator color</td><td><code>--marks-color-gray-400</code></td><td>—</td></tr>
              <tr><td>crumb typography</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td>—</td></tr>
              <tr><td>crumb color (default)</td><td><code>--marks-color-gray-400</code></td><td>—</td></tr>
              <tr><td>crumb color (active)</td><td><code>--marks-color-black</code></td><td>—</td></tr>
              <tr><td>crumb font-weight (active)</td><td><code>$marks-font-weight-medium</code></td><td>500</td></tr>
              <tr><td>crumb white-space</td><td><code>—</code></td><td>nowrap</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants</h2>
        <p class="comp-section-desc">Breadcrumbs adapts to different hierarchy depths. The last item is always the active (current) page.</p>

        <div class="variant-section">
          <p class="variant-section__label">By depth</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Variant</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">2 items</span></td>
                  <td><Breadcrumbs :items="demo2Items" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">3 items</span></td>
                  <td><Breadcrumbs :items="demo3Items" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">Many items</span></td>
                  <td><Breadcrumbs :items="demoManyItems" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Active vs inactive crumbs</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Inactive crumb</span></td>
                  <td><Breadcrumb label="Dashboard" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Active crumb</span></td>
                  <td><Breadcrumb label="Settings" :active="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Display-only</h3>
        <ul>
          <li>Breadcrumbs is a display-only component — it renders a trail of labels with separators but does not handle click navigation internally.</li>
          <li>To make crumbs clickable, wrap each <code>Breadcrumb</code> in an <code>&lt;a&gt;</code> or <code>&lt;router-link&gt;</code> in your consuming code, or extend the items array with <code>href</code>/<code>to</code> properties.</li>
        </ul>

        <h3>Last item is active</h3>
        <ul>
          <li>The <code>Breadcrumbs</code> component automatically marks the last item as <code>active</code>. You don't need to set this manually.</li>
          <li>The active crumb uses <code>--marks-color-black</code> and <code>font-weight: medium</code> to visually distinguish it from ancestor crumbs.</li>
        </ul>

        <h3>Separator rendering</h3>
        <ul>
          <li>Separators (<code>PhCaretRight</code>, 12px) appear between every pair of crumbs — never before the first or after the last.</li>
          <li>Separators inherit the container color (<code>--marks-color-gray-400</code>) and are purely decorative.</li>
        </ul>

        <h3>Wrapping</h3>
        <ul>
          <li>The container uses <code>flex-wrap: wrap</code>, so long trails gracefully break to a new line rather than overflowing.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Static trail</span>
            <Breadcrumbs :items="demo3Items" />
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Label text</h3>
        <ul>
          <li>Keep labels short — ideally 1–3 words. Breadcrumbs should scan instantly.</li>
          <li>Use sentence case: "Team settings", not "Team Settings".</li>
          <li>Match labels to the actual page or section titles so users can correlate breadcrumbs with headings.</li>
        </ul>

        <h3>Ordering</h3>
        <ul>
          <li>Order items from the root (leftmost) to the current page (rightmost).</li>
          <li>Never skip levels — the trail should reflect the actual navigation hierarchy.</li>
        </ul>

        <h3>Truncation</h3>
        <ul>
          <li>Avoid truncating breadcrumb labels. If labels are too long, shorten the underlying page titles.</li>
          <li>For very deep hierarchies (5+ levels), consider collapsing middle crumbs into an ellipsis menu.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Nav landmark</h3>
        <ul>
          <li>The <code>Breadcrumbs</code> component renders as <code>&lt;nav aria-label="Breadcrumb"&gt;</code>, providing a dedicated navigation landmark for assistive technology.</li>
          <li>Screen readers announce it as a "Breadcrumb navigation" region, making it easy to locate via landmark navigation.</li>
        </ul>

        <h3>Current page indicator</h3>
        <ul>
          <li>The active (last) crumb should receive <code>aria-current="page"</code> when used with links, so screen readers announce "current page" alongside the label.</li>
          <li>If crumbs are plain text (no links), the visual weight difference (bold + darker color) serves as the indicator.</li>
        </ul>

        <h3>Separator semantics</h3>
        <ul>
          <li>Separators are decorative icons and should not be announced. They are automatically excluded from the accessibility tree since they carry no text content.</li>
          <li>If you add custom separators, ensure they have <code>aria-hidden="true"</code>.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>When breadcrumb items are links, always add <code>aria-current="page"</code> to the last item. Without it, screen readers can't distinguish the current page from ancestor pages.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Settings page</span>
            <Breadcrumbs :items="[
              { label: 'Dashboard' },
              { label: 'Settings' },
              { label: 'Notifications' }
            ]" />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Content management</span>
            <Breadcrumbs :items="[
              { label: 'Home' },
              { label: 'Blog' },
              { label: 'Categories' },
              { label: 'Technology' }
            ]" />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">User profile</span>
            <Breadcrumbs :items="[
              { label: 'Admin' },
              { label: 'Users' },
              { label: 'Jane Doe' }
            ]" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — single item breadcrumb</span>
            <Breadcrumbs :items="[{ label: 'Home' }]" />
            <span style="font-size:0.75rem;color:#FD3860;">A single crumb provides no wayfinding value</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — overly long labels</span>
            <Breadcrumbs :items="[
              { label: 'Application dashboard overview' },
              { label: 'User management settings and preferences' },
              { label: 'Notification configuration panel' }
            ]" />
            <span style="font-size:0.75rem;color:#FD3860;">Keep labels short — 1 to 3 words</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Breadcrumbs</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">items</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Array of objects with a <code>label</code> string. The last item is automatically marked active. Must contain at least one item.</td>
            </tr>
          </tbody>
        </table>

        <h3>Breadcrumb</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">active</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Marks the crumb as the current page. Applies bold weight and <code>--marks-color-black</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text content of the breadcrumb. Can also be provided via the default slot.</td>
            </tr>
          </tbody>
        </table>

        <h3>Items array shape</h3>
        <table class="props-table">
          <thead>
            <tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Yes</td>
              <td>Display text for the breadcrumb item.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Breadcrumbs colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default trail</span>
            <Breadcrumbs :items="demo3Items" />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Default trail</span>
            <Breadcrumbs :items="demo3Items" />
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

        <h3>Token mapping</h3>
        <table class="anatomy-table">
          <thead><tr><th>Element</th><th>Light token</th><th>Dark override</th></tr></thead>
          <tbody>
            <tr><td>Inactive crumb</td><td><code>--marks-color-gray-400</code></td><td><code>#ECECEC</code></td></tr>
            <tr><td>Active crumb</td><td><code>--marks-color-black</code></td><td><code>#FFFFFF</code></td></tr>
            <tr><td>Separator icon</td><td><code>--marks-color-gray-400</code></td><td><code>#ECECEC</code></td></tr>
          </tbody>
        </table>

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

          <!-- ── Vue tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'vue' }">
<pre><span class="token-comment">// Basic breadcrumbs</span>
<span class="token-tag">&lt;Breadcrumbs</span>
  <span class="token-attr">:items</span>=<span class="token-string">"[
    { label: 'Home' },
    { label: 'Settings' },
    { label: 'Profile' }
  ]"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With dynamic data</span>
<span class="token-tag">&lt;Breadcrumbs</span> <span class="token-attr">:items</span>=<span class="token-string">"breadcrumbTrail"</span> <span class="token-tag">/&gt;</span>

<span class="token-comment">// Script setup</span>
<span class="token-keyword">const</span> breadcrumbTrail = [
  { <span class="token-attr">label</span>: <span class="token-string">'Dashboard'</span> },
  { <span class="token-attr">label</span>: <span class="token-string">'Users'</span> },
  { <span class="token-attr">label</span>: <span class="token-string">'Jane Doe'</span> }
]


<span class="token-comment">// Standalone Breadcrumb</span>
<span class="token-tag">&lt;Breadcrumb</span>
  <span class="token-attr">label</span>=<span class="token-string">"Settings"</span>
<span class="token-tag">/&gt;</span>

<span class="token-tag">&lt;Breadcrumb</span>
  <span class="token-attr">label</span>=<span class="token-string">"Current page"</span>
  <span class="token-attr">:active</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With slot content</span>
<span class="token-tag">&lt;Breadcrumb</span> <span class="token-attr">:active</span>=<span class="token-string">"true"</span><span class="token-tag">&gt;</span>
  Custom label
<span class="token-tag">&lt;/Breadcrumb&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Breadcrumbs — rendered output --&gt;</span>
<span class="token-tag">&lt;nav</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumbs"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Breadcrumb"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumb"</span>
  <span class="token-tag">&gt;</span>Home<span class="token-tag">&lt;/span&gt;</span>

  <span class="token-tag">&lt;svg</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumbs__separator"</span>
    …
  <span class="token-tag">&gt;&lt;/svg&gt;</span>

  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumb"</span>
  <span class="token-tag">&gt;</span>Settings<span class="token-tag">&lt;/span&gt;</span>

  <span class="token-tag">&lt;svg</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumbs__separator"</span>
    …
  <span class="token-tag">&gt;&lt;/svg&gt;</span>

  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-breadcrumb
      marks-breadcrumb--active"</span>
  <span class="token-tag">&gt;</span>Profile<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/nav&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Breadcrumbs:
    .marks-breadcrumbs
    .marks-breadcrumbs__separator

  Breadcrumb:
    .marks-breadcrumb
    .marks-breadcrumb--active
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Container ───</span>

.<span class="token-attr">marks-breadcrumbs</span> {
  <span class="token-attr">display</span>: <span class="token-string">flex</span>;
  <span class="token-attr">align-items</span>: <span class="token-string">center</span>;
  <span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
  <span class="token-attr">flex-wrap</span>: <span class="token-string">wrap</span>;
}


<span class="token-comment">// ─── Separator icon ───</span>

.<span class="token-attr">marks-breadcrumbs__separator</span> {
  <span class="token-attr">flex-shrink</span>: <span class="token-number">0</span>;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);
}


<span class="token-comment">// ─── Breadcrumb item ───</span>

.<span class="token-attr">marks-breadcrumb</span> {
  <span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);
  <span class="token-attr">white-space</span>: <span class="token-string">nowrap</span>;
}


<span class="token-comment">// ─── Active state ───</span>

.<span class="token-attr">marks-breadcrumb--active</span> {
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
  <span class="token-attr">font-weight</span>: <span class="token-keyword">$marks-font-weight-medium</span>;
}</pre>
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
  name: 'BreadcrumbsDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demo2Items: [
        { label: 'Dashboard' },
        { label: 'Settings' }
      ],
      demo3Items: [
        { label: 'Dashboard' },
        { label: 'Settings' },
        { label: 'Notifications' }
      ],
      demoManyItems: [
        { label: 'Home' },
        { label: 'Products' },
        { label: 'Electronics' },
        { label: 'Laptops' },
        { label: 'MacBook Pro' }
      ],
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
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

/* ─── Anatomy visualization ─── */
.anatomy-block {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC);
}

.anatomy-block:last-of-type {
  border-bottom: none;
  margin-bottom: 24px;
  padding-bottom: 0;
}

.anatomy-block__label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--marks-color-gray-300);
  margin-bottom: 20px;
}

.btn-anatomy__frame {
  position: relative;
  display: inline-flex;
  margin: 32px 40px 32px 12px;
}

.btn-anatomy__pad {
  position: absolute;
  background: rgba(253, 56, 96, 0.12);
  pointer-events: none;
}

.btn-anatomy__badge {
  position: absolute;
  background: #FD3860;
  color: #fff;
  font-size: 10px;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-weight: 600;
  line-height: 1;
  padding: 3px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
}

.btn-anatomy__line {
  position: absolute;
  background: #FD3860;
  pointer-events: none;
}

.btn-anatomy__tick {
  position: absolute;
  background: #FD3860;
  pointer-events: none;
}

.anatomy-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 13px;
}

.anatomy-table th {
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--marks-color-gray-300, #8D8D8D);
  padding: 6px 12px 6px 0;
  border-bottom: 2px solid var(--marks-color-gray-400, #ECECEC);
}

.anatomy-table td {
  padding: 5px 12px 5px 0;
  border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC);
  vertical-align: baseline;
}

.anatomy-table td:first-child {
  color: var(--marks-color-gray-300, #8D8D8D);
  white-space: nowrap;
}

.anatomy-table td:last-child {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: var(--marks-color-gray-300, #8D8D8D);
}

.anatomy-table code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: var(--marks-color-black, #1a1a1a);
}

.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
}
</style>
