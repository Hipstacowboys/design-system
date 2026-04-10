<template>
  <header class="header">
    <a href="/" class="header__logo">
      <span class="header__logo-mark">M</span>
      Design System
    </a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Foundations</a>
      <a href="/documentation/toggle.html" class="header__nav-link is-active">Components</a>
    </nav>
  </header>

  <div class="layout">

    <!-- ─── Left nav — component switcher ─── -->
    <nav class="layout__nav">
      <div class="nav">
        <section class="nav__section">
          <span class="nav__section-title">Components</span>
          <ul class="nav__list">
            <li class="nav__item"><a href="/documentation/button.html" class="nav__link">Button</a></li>
            <li class="nav__item"><a href="/documentation/toggle.html" class="nav__link is-active">Toggle</a></li>
            <li class="nav__item"><a href="/documentation/checkbox.html" class="nav__link">Checkbox</a></li>
            <li class="nav__item"><a href="/documentation/input.html" class="nav__link">Input</a></li>
            <li class="nav__item"><a href="/documentation/select.html" class="nav__link">Select</a></li>
            <li class="nav__item"><a href="/documentation/radio.html" class="nav__link">Radio</a></li>
            <li class="nav__item"><a href="/documentation/textarea.html" class="nav__link">Textarea</a></li>
            <li class="nav__item"><a href="/documentation/tabs.html" class="nav__link">Tabs</a></li>
          </ul>
        </section>
      </div>
    </nav>

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Toggle</h1>
        <p class="content__lead">
          A binary on/off switch for settings and preferences. Two components:
          <code>Toggle</code> (the standalone switch) and <code>ToggleWithLabel</code>
          (switch paired with a title and optional description). Both support
          <code>v-model</code> binding, disabled state, and full keyboard accessibility.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Toggle</strong> — Binary on/off control where the change takes effect immediately (no form submit). Settings panels, feature flags, visibility controls.</li>
          <li><strong>ToggleWithLabel</strong> — Same switch with a visible text label. Use whenever the toggle needs context. Supports an optional paragraph for longer descriptions.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the user must submit a form for the change to apply — use a <code>Checkbox</code> instead.</li>
          <li>If there are more than two options — use a <code>Select</code>, <code>HorizontalSwitch</code>, or <code>RadioWithLabel</code>.</li>
          <li>For navigation or triggering actions — use a <code>Button</code>.</li>
        </ul>

        <h3>Toggle vs ToggleWithLabel</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Toggle (standalone)</span>
            <Toggle v-model="demoOn1" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">ToggleWithLabel (title only)</span>
            <ToggleWithLabel v-model="demoOn2" title="Enable notifications" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">ToggleWithLabel (title + paragraph)</span>
            <ToggleWithLabel v-model="demoOn3" title="Auto-confirm bookings" paragraph="Automatically confirm new bookings without manual review." />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Toggle is a fixed-size control — no size prop. ToggleWithLabel adds a text block alongside.</p>

        <h3>Toggle — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Track + Thumb</span>
            <div style="display:flex;align-items:center;gap:24px;">
              <Toggle :model-value="false" />
              <Toggle :model-value="true" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-toggle__track</code> (container) · <code>.marks-toggle__thumb</code> (sliding circle)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Fixed dimensions — no size variants. Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Toggle</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Toggle :model-value="false" style="pointer-events:none;" />
              <!-- Track width badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">44</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '44px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '44px', width: '1px', height: '9px' }"></div>
              <!-- Track height badge (right) -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-28px', transform: 'translateY(-50%)' }">24</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: '24px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '24px', right: '-14px', height: '1px', width: '9px' }"></div>
              <!-- Thumb diameter badge (bottom) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '2px' }">20</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '2px', width: '20px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '2px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '22px', width: '1px', height: '9px' }"></div>
              <!-- Inset padding overlay (2px all around) -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '44px', height: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '44px', height: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px auto 2px 0', width: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px 0 2px auto', width: '2px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>track width</td><td><code>—</code></td><td>44px</td></tr>
              <tr><td>track height</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>thumb diameter</td><td><code>—</code></td><td>20px</td></tr>
              <tr><td>thumb inset</td><td><code>—</code></td><td>2px</td></tr>
              <tr><td>thumb travel</td><td><code>—</code></td><td>20px (translateX)</td></tr>
              <tr><td>track radius</td><td><code>--marks-radius-full</code></td><td>100px</td></tr>
              <tr><td>thumb radius</td><td><code>--marks-radius-full</code></td><td>100px</td></tr>
              <tr><td>thumb shadow</td><td><code>—</code></td><td>0 2px 4px rgba(0,0,0,0.1)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">ToggleWithLabel</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <ToggleWithLabel :model-value="true" title="Enable feature" paragraph="Optional description text." style="pointer-events:none;" />
              <!-- Gap badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '48px' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '44px', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '44px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '56px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>gap (toggle → label)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>title ↔ paragraph gap</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
              <tr><td>align (title only)</td><td><code>—</code></td><td>center</td></tr>
              <tr><td>align (with paragraph)</td><td><code>—</code></td><td>flex-start</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Both components shown across all interactive states.</p>

        <div class="variant-section">
          <p class="variant-section__label">Toggle</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Toggle :model-value="false" /></td>
                  <td><Toggle :model-value="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Toggle :model-value="false" /></div></td>
                  <td><div class="force-hover"><Toggle :model-value="true" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Toggle :model-value="false" :disabled="true" /></td>
                  <td><Toggle :model-value="true" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">ToggleWithLabel — title only</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><ToggleWithLabel :model-value="false" title="Notifications" /></td>
                  <td><ToggleWithLabel :model-value="true" title="Notifications" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><ToggleWithLabel :model-value="false" title="Notifications" /></div></td>
                  <td><div class="force-hover"><ToggleWithLabel :model-value="true" title="Notifications" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><ToggleWithLabel :model-value="false" :disabled="true" title="Notifications" /></td>
                  <td><ToggleWithLabel :model-value="true" :disabled="true" title="Notifications" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">ToggleWithLabel — title + paragraph</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><ToggleWithLabel :model-value="false" title="Auto-confirm" paragraph="Confirm bookings automatically." /></td>
                  <td><ToggleWithLabel :model-value="true" title="Auto-confirm" paragraph="Confirm bookings automatically." /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><ToggleWithLabel :model-value="false" title="Auto-confirm" paragraph="Confirm bookings automatically." /></div></td>
                  <td><div class="force-hover"><ToggleWithLabel :model-value="true" title="Auto-confirm" paragraph="Confirm bookings automatically." /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><ToggleWithLabel :model-value="false" :disabled="true" title="Auto-confirm" paragraph="Confirm bookings automatically." /></td>
                  <td><ToggleWithLabel :model-value="true" :disabled="true" title="Auto-confirm" paragraph="Confirm bookings automatically." /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>Clicking the toggle (or its label in <code>ToggleWithLabel</code>) flips the value and emits <code>update:modelValue</code> — standard <code>v-model</code> binding.</li>
          <li>The change takes effect immediately — no form submission required.</li>
          <li>When <code>disabled</code>, clicks are suppressed on both the switch and the label.</li>
        </ul>

        <h3>Transition</h3>
        <ul>
          <li>The thumb slides 20 px via <code>transform: translateX(20px)</code> with a 200 ms ease.</li>
          <li>Track background color crossfades over the same 200 ms.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>The entire component drops to <code>opacity: 0.5</code>.</li>
          <li>Cursor changes to <code>not-allowed</code>.</li>
          <li>On state uses <code>--marks-color-gray-300</code> track instead of primary solid, preserving the "on" look at reduced contrast.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click to toggle</span>
            <Toggle v-model="demoLive" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLive }}</code></span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">With label</span>
            <ToggleWithLabel v-model="demoLiveLabel" title="Dark mode" paragraph="Enable dark theme across the dashboard." />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLiveLabel }}</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title text</h3>
        <ul>
          <li>Use sentence case: "Enable notifications", not "Enable Notifications".</li>
          <li>Keep it short — ideally 2–4 words. The toggle itself communicates on/off; the label explains <em>what</em>.</li>
          <li>Frame positively: "Show prices" rather than "Hide prices", so <strong>on = enabled</strong>.</li>
        </ul>

        <h3>Paragraph text</h3>
        <ul>
          <li>Optional — only add when the title alone doesn't provide enough context.</li>
          <li>One sentence max. Explain the consequence of enabling, not how to enable.</li>
          <li>Example: "Automatically confirm new bookings without manual review."</li>
        </ul>

        <h3>Standalone Toggle</h3>
        <ul>
          <li>When using <code>Toggle</code> without <code>ToggleWithLabel</code>, always provide an <code>aria-label</code> on the parent or a visible label via <code>&lt;label&gt;</code>.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as <code>&lt;button type="button" role="switch"&gt;</code> — correct ARIA role for toggles.</li>
          <li><code>aria-checked</code> reflects the current boolean state.</li>
          <li><code>aria-disabled</code> is set when disabled, in addition to the native <code>disabled</code> attribute.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus to/from the toggle.</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — flips the value (native button behavior).</li>
          <li>Focus indicator: <code>2px solid var(--marks-color-primary-solid)</code> with <code>2px</code> offset, rounded to <code>--marks-radius-8</code>.</li>
        </ul>

        <h3>Label association</h3>
        <ul>
          <li><code>ToggleWithLabel</code> uses a <code>&lt;label&gt;</code> element with a click handler — clicking the text toggles the switch.</li>
          <li>For standalone <code>Toggle</code>, provide your own label association via <code>aria-label</code> or <code>aria-labelledby</code>.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never use a standalone <code>Toggle</code> without a visible or ARIA label. Screen readers announce it as "switch" with no context.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Settings panel</span>
            <div style="display:flex;flex-direction:column;gap:16px;max-width:400px;">
              <ToggleWithLabel v-model="exNotif" title="Email notifications" paragraph="Receive booking confirmations via email." />
              <ToggleWithLabel v-model="exAuto" title="Auto-confirm bookings" paragraph="Automatically confirm new bookings without manual review." />
              <ToggleWithLabel v-model="exDark" title="Dark mode" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — negative framing</span>
            <ToggleWithLabel :model-value="false" title="Disable notifications" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — standalone without label</span>
            <Toggle :model-value="true" />
            <span style="font-size:0.75rem;color:#FD3860;">No aria-label or visible text</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for actions</span>
            <ToggleWithLabel :model-value="false" title="Submit form" />
            <span style="font-size:0.75rem;color:#FD3860;">Use a Button instead</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Toggle</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Current on/off state. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
          </tbody>
        </table>

        <h3>ToggleWithLabel</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Current on/off state. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Primary label text displayed next to the toggle.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">paragraph</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional description below the title. When present, toggle aligns to top.</td>
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
              <td><code class="prop-name">update:modelValue</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td>Emitted on toggle. Enables <code>v-model</code> binding.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Toggle colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Toggle</span>
            <div style="display:flex;gap:16px;">
              <Toggle :model-value="false" />
              <Toggle :model-value="true" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">ToggleWithLabel</span>
            <ToggleWithLabel :model-value="true" title="Feature enabled" paragraph="This setting is active." />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Toggle</span>
            <div style="display:flex;gap:16px;">
              <Toggle :model-value="false" />
              <Toggle :model-value="true" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">ToggleWithLabel</span>
            <ToggleWithLabel :model-value="true" title="Feature enabled" paragraph="This setting is active." />
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
<pre><span class="token-comment">// Basic toggle with v-model</span>
<span class="token-tag">&lt;Toggle</span> <span class="token-attr">v-model</span>=<span class="token-string">"isEnabled"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">// With label (title only)</span>
<span class="token-tag">&lt;ToggleWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"isEnabled"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Enable notifications"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With label + paragraph</span>
<span class="token-tag">&lt;ToggleWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"autoConfirm"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Auto-confirm bookings"</span>
  <span class="token-attr">paragraph</span>=<span class="token-string">"Automatically confirm new
    bookings without manual review."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;Toggle</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>

<span class="token-tag">&lt;ToggleWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Locked setting"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Standalone — always add aria-label</span>
<span class="token-tag">&lt;Toggle</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"darkMode"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Toggle dark mode"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Toggle — rendered output --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">role</span>=<span class="token-string">"switch"</span>
  <span class="token-attr">aria-checked</span>=<span class="token-string">"false"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-toggle"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle__track"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle__thumb"</span><span class="token-tag">&gt;&lt;/span&gt;</span>
  <span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- Toggle ON --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">role</span>=<span class="token-string">"switch"</span>
  <span class="token-attr">aria-checked</span>=<span class="token-string">"true"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-toggle marks-toggle--on"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle__track"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle__thumb"</span><span class="token-tag">&gt;&lt;/span&gt;</span>
  <span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- ToggleWithLabel --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle-with-label
     marks-toggle-with-label--has-paragraph"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">role</span>=<span class="token-string">"switch"</span> …<span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;label</span> <span class="token-attr">class</span>=<span class="token-string">"marks-toggle-with-label__text"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/span&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__paragraph"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/label&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Toggle:
    .marks-toggle
    .marks-toggle--on
    .marks-toggle--disabled
    .marks-toggle__track
    .marks-toggle__thumb

  ToggleWithLabel:
    .marks-toggle-with-label
    .marks-toggle-with-label--has-paragraph
    .marks-toggle-with-label__text
    .marks-toggle-with-label__title
    .marks-toggle-with-label__paragraph
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Toggle track colors ───</span>

<span class="token-comment">// Off (default)</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// On</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);

<span class="token-comment">// Hover off</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);

<span class="token-comment">// Hover on</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);

<span class="token-comment">// Disabled off</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">opacity</span>:    <span class="token-number">0.5</span>;

<span class="token-comment">// Disabled on</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">opacity</span>:    <span class="token-number">0.5</span>;


<span class="token-comment">// ─── Thumb ───</span>

<span class="token-attr">background</span>:  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-full</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">2px</span> <span class="token-number">4px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.1</span>);


<span class="token-comment">// ─── Track dimensions ───</span>

<span class="token-attr">width</span>:  <span class="token-number">44px</span>;
<span class="token-attr">height</span>: <span class="token-number">24px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-full</span>);


<span class="token-comment">// ─── ToggleWithLabel spacing ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-comment">// title ↔ paragraph</span>
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-4</span>);


<span class="token-comment">// ─── Typography ───</span>

<span class="token-comment">// Title</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-one-line;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);

<span class="token-comment">// Paragraph</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Focus ───</span>

<span class="token-attr">outline</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);
<span class="token-attr">outline-offset</span>: <span class="token-number">2px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'ToggleDocPage',
  data() {
    return {
      demoOn1: false,
      demoOn2: true,
      demoOn3: false,
      demoLive: false,
      demoLiveLabel: true,
      exNotif: true,
      exAuto: false,
      exDark: false,
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

/* Force hover state for Toggle */
.force-hover .marks-toggle:not(.marks-toggle--disabled) .marks-toggle__track { background: var(--marks-color-gray-300) !important; }
.force-hover .marks-toggle--on:not(.marks-toggle--disabled) .marks-toggle__track { background: var(--marks-color-green-300) !important; }
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
