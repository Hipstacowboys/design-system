<template>
  <DocHeader active-page="notification-badge" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="notification-badge" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Notification Badge</h1>
        <p class="content__lead">
          A small visual indicator used to signal unread items, pending counts, or
          attention-worthy state. Three variants: <code>simple</code> (red dot indicator),
          <code>singleNumber</code> (single-digit count), and <code>number</code>
          (multi-digit count). Purely presentational — no user interaction.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Unread counts</strong> — Show the number of unread messages, notifications, or tasks next to a nav item or icon.</li>
          <li><strong>Attention indicator</strong> — A simple dot to signal "something new" without a specific count (e.g. new feature flag, unseen update).</li>
          <li><strong>Numeric badge</strong> — Display a count on avatars, menu items, or cards when the exact number matters.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For workflow or record status — use the <code>Status</code> component instead.</li>
          <li>For categorization labels or tags — use plain text or a tag component.</li>
          <li>As a standalone decorative element — the badge must relate to actionable content.</li>
        </ul>

        <h3>At a glance</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">simple</span>
            <NotificationBadge type="simple" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">singleNumber</span>
            <NotificationBadge type="singleNumber" :value="5" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">number</span>
            <NotificationBadge type="number" :value="42" />
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Three fixed-size variants. No size prop — dimensions are driven by the <code>type</code> prop.</p>

        <h3>Simple — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Dot indicator</span>
            <div style="display:flex;align-items:center;gap:24px;">
              <NotificationBadge type="simple" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-notification-badge--simple</code> — solid circle with white border
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Simple</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <NotificationBadge type="simple" />
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '12px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-28px', transform: 'translateY(-50%)' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: '12px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '12px', right: '-14px', height: '1px', width: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>width / height</td><td><code>—</code></td><td>12px</td></tr>
              <tr><td>border-radius</td><td><code>—</code></td><td>50%</td></tr>
              <tr><td>border</td><td><code>--marks-color-white</code></td><td>2px solid</td></tr>
              <tr><td>background</td><td><code>--marks-color-red-200</code></td><td>#FD3860</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">singleNumber / number</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <NotificationBadge type="number" :value="42" />
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">min 18</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '18px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '18px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-28px', transform: 'translateY(-50%)' }">18</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: '18px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '18px', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '100%', height: '3px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '100%', height: '3px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '3px auto 3px 0', width: '6px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '3px 0 3px auto', width: '6px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>min-width</td><td><code>—</code></td><td>18px</td></tr>
              <tr><td>height</td><td><code>—</code></td><td>18px</td></tr>
              <tr><td>border-radius</td><td><code>—</code></td><td>9px (pill)</td></tr>
              <tr><td>padding</td><td><code>—</code></td><td>3px 6px</td></tr>
              <tr><td>background</td><td><code>--marks-color-red-200</code></td><td>#FD3860</td></tr>
              <tr><td>text color</td><td><code>--marks-color-white</code></td><td>#FFFFFF</td></tr>
              <tr><td>font weight</td><td><code>$marks-font-weight-bold</code></td><td>700</td></tr>
              <tr><td>typography</td><td><code>marks-typography-paragraph-xs</code></td><td>mixin</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & all states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">All three types shown with representative values.</p>

        <div class="variant-section">
          <p class="variant-section__label">Simple (dot indicator)</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Rendered</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">simple</span></td>
                  <td><NotificationBadge type="simple" /></td>
                  <td style="font-size:0.8rem;color:#6F6F6F;">12 &times; 12 px red dot with white border</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">singleNumber (one digit)</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Rendered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>1</code></td>
                  <td><NotificationBadge type="singleNumber" :value="1" /></td>
                </tr>
                <tr>
                  <td><code>5</code></td>
                  <td><NotificationBadge type="singleNumber" :value="5" /></td>
                </tr>
                <tr>
                  <td><code>9</code></td>
                  <td><NotificationBadge type="singleNumber" :value="9" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">number (multi-digit)</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Rendered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>12</code></td>
                  <td><NotificationBadge type="number" :value="12" /></td>
                </tr>
                <tr>
                  <td><code>99</code></td>
                  <td><NotificationBadge type="number" :value="99" /></td>
                </tr>
                <tr>
                  <td><code>"99+"</code></td>
                  <td><NotificationBadge type="number" value="99+" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Purely visual</h3>
        <ul>
          <li>The badge emits no events and accepts no user interaction — it is a presentational indicator only.</li>
          <li>Parent components are responsible for updating the <code>value</code> prop reactively.</li>
        </ul>

        <h3>Positioning</h3>
        <ul>
          <li>Position the badge relative to a parent element using <code>position: absolute</code> on the badge and <code>position: relative</code> on the parent.</li>
          <li>Typical placement is top-right, offset so the badge overlaps the parent edge by ~50%.</li>
          <li>For icon-sized parents (24–32 px), offset <code>top: -4px; right: -4px</code>.</li>
        </ul>

        <h3>Type selection</h3>
        <ul>
          <li><code>simple</code> — When you only need to flag "something new" without a count.</li>
          <li><code>singleNumber</code> — When the count is always a single digit (1–9).</li>
          <li><code>number</code> — When counts can exceed 9. Pass <code>"99+"</code> as a string for overflow.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Adjust count</span>
            <div style="display:flex;align-items:center;gap:12px;">
              <button class="demo-btn" @click="decrement">−</button>
              <NotificationBadge type="number" :value="demoDisplay" />
              <button class="demo-btn" @click="increment">+</button>
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">count: <code>{{ demoCount }}</code> &rarr; display: <code>{{ demoDisplay }}</code></span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Positioned on icon</span>
            <div class="badge-parent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <NotificationBadge type="singleNumber" :value="demoCount > 9 ? '9' : String(demoCount)" class="badge-parent__badge" />
            </div>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Keep numbers short</h3>
        <ul>
          <li>For counts over 99, display <code>"99+"</code> rather than the exact number — the badge should stay compact.</li>
          <li>For single-digit counts, use <code>singleNumber</code> for a tighter pill shape.</li>
        </ul>

        <h3>No text labels</h3>
        <ul>
          <li>The badge only accepts numeric values or empty (dot). Never put text like "New" inside it — use a different pattern for that.</li>
        </ul>

        <h3>Zero state</h3>
        <ul>
          <li>When the count reaches zero, hide the badge entirely rather than showing "0". Control visibility in the parent component.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Count badges</h3>
        <ul>
          <li>Add <code>aria-label</code> to the parent element describing the count, e.g. <code>aria-label="5 unread notifications"</code>.</li>
          <li>Use <code>role="status"</code> on the badge or its wrapper so screen readers announce count changes via live regions.</li>
        </ul>

        <h3>Dot / simple badges</h3>
        <ul>
          <li>The simple dot conveys no textual information. Add an <code>aria-label</code> to the parent: <code>aria-label="New notifications available"</code>.</li>
          <li>Consider adding a <code>.sr-only</code> span adjacent to the badge for screen-reader-only context.</li>
        </ul>

        <h3>Color independence</h3>
        <ul>
          <li>Do not rely on the red color alone to convey meaning. The badge should always be paired with contextual text (nav label, icon tooltip, etc.).</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never use a notification badge as the sole indicator. Always pair it with a text label or icon that provides context for screen readers and colorblind users.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Nav item with unread count</span>
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:var(--marks-color-gray-400,#ECECEC);border-radius:8px;">
              <span style="font-size:14px;font-weight:500;">Messages</span>
              <NotificationBadge type="singleNumber" :value="3" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Avatar with notification dot</span>
            <div class="badge-parent">
              <div style="width:40px;height:40px;border-radius:50%;background:var(--marks-color-gray-200,#D1D1D1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:var(--marks-color-gray-500,#1a1a1a);">MD</div>
              <NotificationBadge type="simple" class="badge-parent__badge" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Icon with overflow count</span>
            <div class="badge-parent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <NotificationBadge type="number" value="99+" class="badge-parent__badge" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — badge on everything</span>
            <div style="display:flex;gap:8px;">
              <div class="badge-parent"><span style="font-size:14px;">Home</span><NotificationBadge type="simple" class="badge-parent__badge" /></div>
              <div class="badge-parent"><span style="font-size:14px;">Settings</span><NotificationBadge type="simple" class="badge-parent__badge" /></div>
              <div class="badge-parent"><span style="font-size:14px;">Profile</span><NotificationBadge type="simple" class="badge-parent__badge" /></div>
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Too many badges create alert fatigue</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — meaningless dot</span>
            <div class="badge-parent">
              <span style="font-size:14px;">Logout</span>
              <NotificationBadge type="simple" class="badge-parent__badge" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">A dot on a non-content item is confusing</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — show zero</span>
            <NotificationBadge type="singleNumber" :value="0" />
            <span style="font-size:0.75rem;color:#FD3860;">Hide the badge when count is 0</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>NotificationBadge</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'simple'</code></td>
              <td>Badge variant. One of <code>'simple'</code>, <code>'singleNumber'</code>, or <code>'number'</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">null</code></td>
              <td>The count to display. Ignored when <code>type</code> is <code>'simple'</code>. Pass a string like <code>"99+"</code> for overflow.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events</h3>
        <table class="props-table">
          <thead>
            <tr><th>Event</th><th>Payload</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td colspan="3" style="color:var(--marks-color-gray-300,#8D8D8D);font-style:italic;">No events — this is a purely presentational component.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Badge colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">simple</span>
            <NotificationBadge type="simple" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">singleNumber</span>
            <NotificationBadge type="singleNumber" :value="5" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">number</span>
            <NotificationBadge type="number" :value="42" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">overflow</span>
            <NotificationBadge type="number" value="99+" />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">simple</span>
            <NotificationBadge type="simple" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">singleNumber</span>
            <NotificationBadge type="singleNumber" :value="5" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">number</span>
            <NotificationBadge type="number" :value="42" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">overflow</span>
            <NotificationBadge type="number" value="99+" />
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
<pre><span class="token-comment">// Simple dot indicator</span>
<span class="token-tag">&lt;NotificationBadge</span> <span class="token-attr">type</span>=<span class="token-string">"simple"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">// Single-digit count</span>
<span class="token-tag">&lt;NotificationBadge</span>
  <span class="token-attr">type</span>=<span class="token-string">"singleNumber"</span>
  <span class="token-attr">:value</span>=<span class="token-string">"5"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Multi-digit count</span>
<span class="token-tag">&lt;NotificationBadge</span>
  <span class="token-attr">type</span>=<span class="token-string">"number"</span>
  <span class="token-attr">:value</span>=<span class="token-string">"42"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Overflow — pass string</span>
<span class="token-tag">&lt;NotificationBadge</span>
  <span class="token-attr">type</span>=<span class="token-string">"number"</span>
  <span class="token-attr">value</span>=<span class="token-string">"99+"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Positioned on an icon</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">style</span>=<span class="token-string">"position:relative;
  display:inline-block"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;BellIcon</span> <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;NotificationBadge</span>
    <span class="token-attr">type</span>=<span class="token-string">"singleNumber"</span>
    <span class="token-attr">:value</span>=<span class="token-string">"count"</span>
    <span class="token-attr">style</span>=<span class="token-string">"position:absolute;
      top:-4px;right:-4px"</span>
  <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">// Reactive — badge updates</span>
<span class="token-comment">// automatically with the prop</span>
<span class="token-tag">&lt;NotificationBadge</span>
  <span class="token-attr">v-if</span>=<span class="token-string">"unread &gt; 0"</span>
  <span class="token-attr">type</span>=<span class="token-string">"number"</span>
  <span class="token-attr">:value</span>=<span class="token-string">"unread &gt; 99
    ? '99+' : unread"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Simple dot --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge
    marks-notification-badge--simple"</span>
<span class="token-tag">&gt;&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Single digit --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge
    marks-notification-badge--singleNumber"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge__text"</span>
  <span class="token-tag">&gt;</span>5<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Multi-digit --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge
    marks-notification-badge--number"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge__text"</span>
  <span class="token-tag">&gt;</span>42<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Overflow --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge
    marks-notification-badge--number"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-notification-badge__text"</span>
  <span class="token-tag">&gt;</span>99+<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-notification-badge
  .marks-notification-badge--simple
  .marks-notification-badge--singleNumber
  .marks-notification-badge--number
  .marks-notification-badge__text
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Shared base ───</span>

<span class="token-attr">display</span>: inline-flex;
<span class="token-attr">align-items</span>: center;
<span class="token-attr">justify-content</span>: center;
<span class="token-attr">background-color</span>:
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);
<span class="token-attr">color</span>:
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">box-sizing</span>: border-box;
<span class="token-attr">flex-shrink</span>: <span class="token-number">0</span>;


<span class="token-comment">// ─── Simple (dot) ───</span>

<span class="token-attr">width</span>:  <span class="token-number">12px</span>;
<span class="token-attr">height</span>: <span class="token-number">12px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── singleNumber / number ───</span>

<span class="token-attr">min-width</span>: <span class="token-number">18px</span>;
<span class="token-attr">height</span>:    <span class="token-number">18px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">9px</span>;
<span class="token-attr">padding</span>: <span class="token-number">3px</span> <span class="token-number">6px</span>;
<span class="token-keyword">@include</span> marks-typography-paragraph-xs;
<span class="token-attr">font-weight</span>:
  <span class="token-number">$marks-font-weight-bold</span>;
<span class="token-attr">line-height</span>: <span class="token-number">1</span>;


<span class="token-comment">// ─── Text element ───</span>

<span class="token-attr">display</span>: inline-block;
<span class="token-attr">white-space</span>: nowrap;</pre>
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
  name: 'NotificationBadgeDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoCount: 3,
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ]
    }
  },
  computed: {
    demoDisplay() {
      if (this.demoCount > 99) return '99+'
      return this.demoCount
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
    },
    increment() {
      this.demoCount = Math.min(this.demoCount + 1, 150)
    },
    decrement() {
      this.demoCount = Math.max(this.demoCount - 1, 0)
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

/* ─── Badge positioning helper ─── */
.badge-parent {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.badge-parent__badge {
  position: absolute;
  top: -4px;
  right: -6px;
}

/* ─── Demo increment/decrement buttons ─── */
.demo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid var(--marks-color-gray-200, #D1D1D1);
  border-radius: 6px;
  background: var(--marks-color-white, #fff);
  color: var(--marks-color-black, #1a1a1a);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
}

.demo-btn:hover {
  background: var(--marks-color-gray-400, #ECECEC);
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

.btn-anatomy__outline {
  position: absolute;
  border: 1.5px dashed #2576F7;
  border-radius: 2px;
  pointer-events: none;
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
