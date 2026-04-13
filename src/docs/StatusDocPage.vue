<template>
  <DocHeader active-page="status" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="status" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Status</h1>
        <p class="content__lead">
          A compact status indicator pill combining a colored dot with a short text
          label. Two variants: <code>default</code> (dot + text only) and
          <code>prominent</code> (pill with background). Four semantic types:
          <code>success</code>, <code>warning</code>, <code>info</code>, and
          <code>error</code>.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Status indicator</strong> — Show the current state of an entity: booking confirmed, payment pending, user online, system healthy.</li>
          <li><strong>Table rows &amp; cards</strong> — Compact enough to sit inline in data tables, list items, or card headers.</li>
          <li><strong>Dashboard widgets</strong> — Quick-glance health or availability signals.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the user needs to take action on the status — use an <code>Alert</code> with a call-to-action instead.</li>
          <li>For progress or multi-step flows — use a stepper or progress bar.</li>
          <li>For counts or quantities — use a <code>NotificationBadge</code>.</li>
        </ul>

        <h3>Default vs Prominent</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Default (dot + text)</span>
            <Status type="success" label="Active" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Prominent (pill background)</span>
            <Status variant="prominent" type="success" label="Active" />
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Status is a fixed-height inline element. The prominent variant adds padding and a background pill.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Dot + Label</span>
            <div style="display:flex;align-items:center;gap:24px;">
              <Status type="success" label="Active" />
              <Status variant="prominent" type="warning" label="Pending" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-status__dot</code> (colored circle) · <code>.marks-status__text</code> (label text)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Default variant</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Status type="success" label="Active" style="pointer-events:none;" />
              <!-- Dot size badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">8</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '8px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '8px', width: '1px', height: '9px' }"></div>
              <!-- Gap badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '12px' }">8</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '8px', width: '8px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '16px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>dot diameter</td><td><code>—</code></td><td>8px</td></tr>
              <tr><td>dot border-radius</td><td><code>—</code></td><td>50%</td></tr>
              <tr><td>gap (dot → label)</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>font</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td>—</td></tr>
              <tr><td>font-weight</td><td><code>$marks-font-weight-medium</code></td><td>500</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Prominent variant</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Status variant="prominent" type="success" label="Active" style="pointer-events:none;" />
              <!-- Padding badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }">8 / 12</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding (block)</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>padding (inline)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>border-radius</td><td><code>—</code></td><td>100px (pill)</td></tr>
              <tr><td>background</td><td><code>--marks-color-gray-100</code></td><td>#F5F5F5</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & all states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all types</h2>
        <p class="comp-section-desc">Both variants shown across all semantic types.</p>

        <div class="variant-section">
          <p class="variant-section__label">Default variant</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Success</th>
                  <th>Warning</th>
                  <th>Info</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Status type="success" label="Active" /></td>
                  <td><Status type="warning" label="Pending" /></td>
                  <td><Status type="info" label="Scheduled" /></td>
                  <td><Status type="error" label="Failed" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Prominent variant</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Success</th>
                  <th>Warning</th>
                  <th>Info</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Status variant="prominent" type="success" label="Active" /></td>
                  <td><Status variant="prominent" type="warning" label="Pending" /></td>
                  <td><Status variant="prominent" type="info" label="Scheduled" /></td>
                  <td><Status variant="prominent" type="error" label="Failed" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Purely visual</h3>
        <ul>
          <li>Status is a display-only component — it emits no events and accepts no user interaction.</li>
          <li>It does not respond to hover, focus, or click. Do not wrap it in a button unless the surrounding context provides the action.</li>
        </ul>

        <h3>Slot support</h3>
        <ul>
          <li>The default slot overrides the <code>label</code> prop, allowing rich content inside the text area.</li>
          <li>For simple text labels, prefer the <code>label</code> prop.</li>
        </ul>

        <h3>Live demo — all combinations</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default variant</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status type="success" label="Active" />
              <Status type="warning" label="Pending" />
              <Status type="info" label="Scheduled" />
              <Status type="error" label="Failed" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Prominent variant</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status variant="prominent" type="success" label="Active" />
              <Status variant="prominent" type="warning" label="Pending" />
              <Status variant="prominent" type="info" label="Scheduled" />
              <Status variant="prominent" type="error" label="Failed" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Dynamic type</span>
            <div style="display:flex;align-items:center;gap:16px;">
              <select v-model="demoType" style="padding:4px 8px;border:1px solid #ccc;border-radius:4px;font-size:13px;">
                <option value="success">success</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
                <option value="error">error</option>
              </select>
              <select v-model="demoVariant" style="padding:4px 8px;border:1px solid #ccc;border-radius:4px;font-size:13px;">
                <option value="default">default</option>
                <option value="prominent">prominent</option>
              </select>
              <Status :variant="demoVariant" :type="demoType" :label="demoLabel" />
            </div>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Label text</h3>
        <ul>
          <li>Keep labels to 1–2 words: "Active", "Pending", "Failed".</li>
          <li>Use sentence case: "In progress", not "In Progress".</li>
          <li>The label describes the state, not the action: "Confirmed" not "Confirm".</li>
        </ul>

        <h3>Type semantics</h3>
        <ul>
          <li><strong>success</strong> — positive / completed / active (green dot).</li>
          <li><strong>warning</strong> — needs attention / pending (orange dot).</li>
          <li><strong>info</strong> — neutral information / scheduled (blue dot).</li>
          <li><strong>error</strong> — failure / cancelled / blocked (red dot).</li>
        </ul>

        <h3>Variant choice</h3>
        <ul>
          <li>Use <strong>default</strong> in dense layouts (tables, lists) where space is tight.</li>
          <li>Use <strong>prominent</strong> when the status needs more visual weight — card headers, detail views.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Color is not the sole indicator</h3>
        <ul>
          <li>The text label always accompanies the dot — color alone never carries meaning.</li>
          <li>If used without a visible label (icon-only context), provide <code>aria-label</code> on the container.</li>
        </ul>

        <h3>Screen reader context</h3>
        <ul>
          <li>When the status meaning isn't clear from surrounding content, add <code>role="status"</code> and <code>aria-label</code> to provide full context.</li>
          <li>Example: <code>aria-label="Booking status: confirmed"</code>.</li>
        </ul>

        <h3>Contrast</h3>
        <ul>
          <li>All dot colors meet a minimum 3:1 contrast ratio against white backgrounds.</li>
          <li>Text uses <code>--marks-color-black</code> — high-contrast by default.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never rely on the dot color alone to convey status. Always include a text label or <code>aria-label</code> for screen readers.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Booking statuses</span>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              <Status variant="prominent" type="success" label="Confirmed" />
              <Status variant="prominent" type="warning" label="Pending" />
              <Status variant="prominent" type="info" label="Scheduled" />
              <Status variant="prominent" type="error" label="Cancelled" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Order statuses (default variant in a table context)</span>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <Status type="success" label="Delivered" />
              <Status type="warning" label="In transit" />
              <Status type="info" label="Processing" />
              <Status type="error" label="Returned" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — long labels</span>
            <Status type="success" label="This booking has been confirmed and approved by the admin" />
            <span style="font-size:0.75rem;color:#FD3860;">Keep to 1–2 words</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — action verbs</span>
            <Status type="warning" label="Confirm now" />
            <span style="font-size:0.75rem;color:#FD3860;">Status describes state, not action</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — mismatched semantics</span>
            <Status type="success" label="Overdue" />
            <span style="font-size:0.75rem;color:#FD3860;">Use error or warning type for negative states</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Status</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">variant</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'default'</code></td>
              <td>Visual style. <code>'default'</code> shows dot + text; <code>'prominent'</code> adds a pill background.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'success'</code></td>
              <td>Semantic color. One of <code>'success'</code>, <code>'warning'</code>, <code>'info'</code>, <code>'error'</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text displayed next to the dot. Overridden by the default slot.</td>
            </tr>
          </tbody>
        </table>

        <h3>Slots</h3>
        <table class="props-table">
          <thead>
            <tr><th>Slot</th><th>Fallback</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">default</code></td>
              <td><code class="prop-default">label prop</code></td>
              <td>Custom content for the text area. Falls back to the <code>label</code> prop value.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events</h3>
        <table class="props-table">
          <thead>
            <tr><th colspan="3">None — Status is a display-only component.</th></tr>
          </thead>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Status colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status type="success" label="Active" />
              <Status type="warning" label="Pending" />
              <Status type="info" label="Scheduled" />
              <Status type="error" label="Failed" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Prominent</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status variant="prominent" type="success" label="Active" />
              <Status variant="prominent" type="warning" label="Pending" />
              <Status variant="prominent" type="info" label="Scheduled" />
              <Status variant="prominent" type="error" label="Failed" />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Default</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status type="success" label="Active" />
              <Status type="warning" label="Pending" />
              <Status type="info" label="Scheduled" />
              <Status type="error" label="Failed" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Prominent</span>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <Status variant="prominent" type="success" label="Active" />
              <Status variant="prominent" type="warning" label="Pending" />
              <Status variant="prominent" type="info" label="Scheduled" />
              <Status variant="prominent" type="error" label="Failed" />
            </div>
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

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
<pre><span class="token-comment">// Default variant — success</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"success"</span> <span class="token-attr">label</span>=<span class="token-string">"Active"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">// Default variant — all types</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"success"</span> <span class="token-attr">label</span>=<span class="token-string">"Active"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"warning"</span> <span class="token-attr">label</span>=<span class="token-string">"Pending"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"info"</span> <span class="token-attr">label</span>=<span class="token-string">"Scheduled"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"error"</span> <span class="token-attr">label</span>=<span class="token-string">"Failed"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">// Prominent variant</span>
<span class="token-tag">&lt;Status</span>
  <span class="token-attr">variant</span>=<span class="token-string">"prominent"</span>
  <span class="token-attr">type</span>=<span class="token-string">"success"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Confirmed"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With slot content</span>
<span class="token-tag">&lt;Status</span> <span class="token-attr">type</span>=<span class="token-string">"warning"</span><span class="token-tag">&gt;</span>
  Awaiting review
<span class="token-tag">&lt;/Status&gt;</span>


<span class="token-comment">// Dynamic binding</span>
<span class="token-tag">&lt;Status</span>
  <span class="token-attr">:type</span>=<span class="token-string">"booking.statusType"</span>
  <span class="token-attr">:label</span>=<span class="token-string">"booking.statusLabel"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Default variant — success --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-status
    marks-status--default
    marks-status--success"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-status__dot"</span><span class="token-tag">&gt;&lt;/span&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-status__text"</span><span class="token-tag">&gt;</span>Active<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Prominent variant — warning --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-status
    marks-status--prominent
    marks-status--warning"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-status__dot"</span><span class="token-tag">&gt;&lt;/span&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-status__text"</span><span class="token-tag">&gt;</span>Pending<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-status
  .marks-status--default
  .marks-status--prominent
  .marks-status--success
  .marks-status--warning
  .marks-status--info
  .marks-status--error
  .marks-status__dot
  .marks-status__text
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Base layout ───</span>

<span class="token-attr">display</span>: <span class="token-string">inline-flex</span>;
<span class="token-attr">align-items</span>: <span class="token-string">center</span>;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Prominent variant ───</span>

<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">border-radius</span>: <span class="token-number">100px</span>;
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);


<span class="token-comment">// ─── Dot colors by type ───</span>

<span class="token-comment">// Success</span>
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-200</span>);

<span class="token-comment">// Warning</span>
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-orange-200</span>);

<span class="token-comment">// Info</span>
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-blue-200</span>);

<span class="token-comment">// Error</span>
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);


<span class="token-comment">// ─── Dot dimensions ───</span>

<span class="token-attr">width</span>:  <span class="token-number">8px</span>;
<span class="token-attr">height</span>: <span class="token-number">8px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">flex-shrink</span>: <span class="token-number">0</span>;


<span class="token-comment">// ─── Text ───</span>

<span class="token-attr">white-space</span>: <span class="token-string">nowrap</span>;</pre>
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
  name: 'StatusDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoType: 'success',
      demoVariant: 'default',
      demoLabel: 'Active',
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  },
  watch: {
    demoType(val) {
      const labels = { success: 'Active', warning: 'Pending', info: 'Scheduled', error: 'Failed' }
      this.demoLabel = labels[val] || 'Active'
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

.variant-grid .variant-table td {
  padding: 12px 16px;
}
</style>
