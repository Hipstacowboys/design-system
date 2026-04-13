<template>
  <DocHeader active-page="radio" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="radio" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Radio</h1>
        <p class="content__lead">
          A mutually exclusive selection control for choosing exactly one option from a group.
          Two components: <code>Radio</code> (the standalone input) and
          <code>RadioWithLabel</code> (radio paired with a title and optional description).
          Both support <code>v-model</code> binding, disabled state, and full keyboard
          accessibility via native <code>&lt;input type="radio"&gt;</code> semantics.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Radio</strong> — Mutually exclusive selection where the user picks exactly one option from a visible set. Best for 2–5 choices that benefit from being always visible.</li>
          <li><strong>RadioWithLabel</strong> — Same radio control with a visible text label. Use whenever each option needs context. Supports an optional paragraph for longer descriptions (e.g. plan features, payment method details).</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the user can select multiple options — use a <code>Checkbox</code> instead.</li>
          <li>If there are only two options and one is clearly on/off — use a <code>Toggle</code>.</li>
          <li>If there are more than 5 options or space is tight — use a <code>Select</code> dropdown.</li>
          <li>For navigation or triggering actions — use a <code>Button</code> or <code>Tabs</code>.</li>
        </ul>

        <h3>Radio vs RadioWithLabel</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Radio (standalone)</span>
            <div style="display:flex;gap:16px;">
              <Radio v-model="demoStandalone" name="demo-standalone" value="a" />
              <Radio v-model="demoStandalone" name="demo-standalone" value="b" />
              <Radio v-model="demoStandalone" name="demo-standalone" value="c" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">RadioWithLabel (title only)</span>
            <RadioWithLabel v-model="demoLabel" name="demo-label" value="monthly" title="Monthly billing" />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">RadioWithLabel (title + paragraph)</span>
            <RadioWithLabel v-model="demoParagraph" name="demo-para" value="annual" title="Annual billing" paragraph="Save 20% compared to monthly. Billed once per year." />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Radio is a fixed-size control — no size prop. RadioWithLabel adds a text block alongside.</p>

        <h3>Radio — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Circle + Dot</span>
            <div style="display:flex;align-items:center;gap:24px;">
              <Radio :model-value="null" name="anatomy-vis" value="off" />
              <Radio :model-value="'on'" name="anatomy-vis" value="on" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-radio-wrapper</code> (container) · <code>.marks-radio</code> (input circle) · <code>.marks-radio__dot</code> (checked indicator)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Fixed dimensions — no size variants. Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Radio</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Radio :model-value="'checked'" name="anatomy-radio" value="checked" style="pointer-events:none;" />
              <!-- Circle width badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">24</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '24px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '24px', width: '1px', height: '9px' }"></div>
              <!-- Circle height badge (right) -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-28px', transform: 'translateY(-50%)' }">24</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: '24px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '24px', right: '-14px', height: '1px', width: '9px' }"></div>
              <!-- Dot diameter badge (bottom) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '6px' }">12</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '6px', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '6px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '18px', width: '1px', height: '9px' }"></div>
              <!-- Border overlay (2px all around) -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '24px', height: '2px', borderRadius: '12px 12px 0 0' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '24px', height: '2px', borderRadius: '0 0 12px 12px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px auto 2px 0', width: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px 0 2px auto', width: '2px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>circle width</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>circle height</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>dot diameter</td><td><code>—</code></td><td>12px</td></tr>
              <tr><td>border width</td><td><code>—</code></td><td>2px</td></tr>
              <tr><td>circle radius</td><td><code>—</code></td><td>50%</td></tr>
              <tr><td>dot radius</td><td><code>—</code></td><td>50%</td></tr>
              <tr><td>border color (unchecked)</td><td><code>--marks-color-gray-200</code></td><td>#D1D1D1</td></tr>
              <tr><td>border color (checked)</td><td><code>--marks-color-black</code></td><td>#1A1A1A</td></tr>
              <tr><td>dot background</td><td><code>--marks-color-black</code></td><td>#1A1A1A</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">RadioWithLabel</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <RadioWithLabel :model-value="'yes'" value="yes" name="anatomy-rwl" title="Enable feature" paragraph="Optional description text." style="pointer-events:none;" />
              <!-- Gap badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '28px' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '24px', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '24px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '36px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>gap (radio → label)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
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
          <p class="variant-section__label">Radio</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Radio :model-value="null" name="var-radio-def" value="a" /></td>
                  <td><Radio :model-value="'b'" name="var-radio-def-on" value="b" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Radio :model-value="null" name="var-radio-hov" value="a" /></div></td>
                  <td><div class="force-hover"><Radio :model-value="'b'" name="var-radio-hov-on" value="b" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Radio :model-value="null" name="var-radio-dis" value="a" :disabled="true" /></td>
                  <td><Radio :model-value="'b'" name="var-radio-dis-on" value="b" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">RadioWithLabel — title only</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><RadioWithLabel :model-value="null" name="var-rwl-def" value="a" title="Monthly" /></td>
                  <td><RadioWithLabel :model-value="'b'" name="var-rwl-def-on" value="b" title="Monthly" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><RadioWithLabel :model-value="null" name="var-rwl-hov" value="a" title="Monthly" /></div></td>
                  <td><div class="force-hover"><RadioWithLabel :model-value="'b'" name="var-rwl-hov-on" value="b" title="Monthly" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><RadioWithLabel :model-value="null" name="var-rwl-dis" value="a" :disabled="true" title="Monthly" /></td>
                  <td><RadioWithLabel :model-value="'b'" name="var-rwl-dis-on" value="b" :disabled="true" title="Monthly" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">RadioWithLabel — title + paragraph</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><RadioWithLabel :model-value="null" name="var-rwlp-def" value="a" title="Annual billing" paragraph="Save 20% compared to monthly." /></td>
                  <td><RadioWithLabel :model-value="'b'" name="var-rwlp-def-on" value="b" title="Annual billing" paragraph="Save 20% compared to monthly." /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><RadioWithLabel :model-value="null" name="var-rwlp-hov" value="a" title="Annual billing" paragraph="Save 20% compared to monthly." /></div></td>
                  <td><div class="force-hover"><RadioWithLabel :model-value="'b'" name="var-rwlp-hov-on" value="b" title="Annual billing" paragraph="Save 20% compared to monthly." /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><RadioWithLabel :model-value="null" name="var-rwlp-dis" value="a" :disabled="true" title="Annual billing" paragraph="Save 20% compared to monthly." /></td>
                  <td><RadioWithLabel :model-value="'b'" name="var-rwlp-dis-on" value="b" :disabled="true" title="Annual billing" paragraph="Save 20% compared to monthly." /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>Clicking a radio (or its label in <code>RadioWithLabel</code>) selects that option and emits <code>update:modelValue</code> with the option's <code>value</code> — standard <code>v-model</code> binding.</li>
          <li>Selecting one radio in a group automatically deselects the previously selected option — mutually exclusive by design.</li>
          <li>When <code>disabled</code>, clicks are suppressed and no event is emitted.</li>
        </ul>

        <h3>Grouping</h3>
        <ul>
          <li>Radios are grouped by sharing the same <code>name</code> prop. All radios in a group must share the same <code>v-model</code> reference.</li>
          <li>Each radio must have a unique <code>value</code> within its group.</li>
          <li>The native <code>&lt;input type="radio"&gt;</code> enforces mutual exclusivity at the browser level.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>The control drops to <code>opacity: 0.5</code>.</li>
          <li>Cursor changes to <code>not-allowed</code>.</li>
          <li>Background changes to <code>--marks-color-gray-150</code>, maintaining visual distinction.</li>
          <li>Individual options can be disabled independently — the rest of the group remains interactive.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click to select</span>
            <div style="display:flex;gap:16px;">
              <Radio v-model="demoLive" name="demo-live" value="alpha" />
              <Radio v-model="demoLive" name="demo-live" value="beta" />
              <Radio v-model="demoLive" name="demo-live" value="gamma" />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLive }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">With labels</span>
            <div style="display:flex;flex-direction:column;gap:12px;max-width:400px;">
              <RadioWithLabel v-model="demoLiveLabel" name="demo-live-label" value="free" title="Free plan" paragraph="Basic features, limited to 3 projects." />
              <RadioWithLabel v-model="demoLiveLabel" name="demo-live-label" value="pro" title="Pro plan" paragraph="Unlimited projects, priority support." />
              <RadioWithLabel v-model="demoLiveLabel" name="demo-live-label" value="enterprise" title="Enterprise" paragraph="Custom contracts, dedicated account manager." />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLiveLabel }}</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Label text</h3>
        <ul>
          <li>Use sentence case: "Credit card", not "Credit Card".</li>
          <li>Keep labels short and parallel — all options in a group should follow the same grammatical structure.</li>
          <li>Frame positively: "Show prices" rather than "Don't hide prices".</li>
          <li>Each option should be clearly distinct from the others — avoid overlapping meanings.</li>
        </ul>

        <h3>Paragraph text</h3>
        <ul>
          <li>Optional — only add when the title alone doesn't provide enough context.</li>
          <li>One sentence max. Explain the consequence of choosing this option.</li>
          <li>Example: "Save 20% compared to monthly billing."</li>
        </ul>

        <h3>Standalone Radio</h3>
        <ul>
          <li>When using <code>Radio</code> without <code>RadioWithLabel</code>, always provide an <code>aria-label</code> on the radio or a visible label via <code>&lt;label&gt;</code>.</li>
          <li>Never display a single radio — always provide at least two options. A lone radio has no meaningful interaction.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as a native <code>&lt;input type="radio"&gt;</code> — correct semantics without extra ARIA roles.</li>
          <li>The <code>:checked</code> pseudo-class reflects the current selection state natively.</li>
          <li>The <code>disabled</code> attribute is set directly on the input when the prop is true.</li>
          <li><code>RadioWithLabel</code> wraps everything in a <code>&lt;label&gt;</code>, so clicking the text selects the radio.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus into/out of the radio group (focuses the selected radio, or the first if none selected).</li>
          <li><kbd>Arrow Up</kbd> / <kbd>Arrow Left</kbd> — selects the previous radio in the group.</li>
          <li><kbd>Arrow Down</kbd> / <kbd>Arrow Right</kbd> — selects the next radio in the group.</li>
          <li><kbd>Space</kbd> — selects the focused radio (native behavior).</li>
          <li>Focus indicator: <code>2px solid var(--marks-color-primary-solid)</code> with <code>2px</code> offset.</li>
        </ul>

        <h3>Label association</h3>
        <ul>
          <li><code>RadioWithLabel</code> uses a <code>&lt;label&gt;</code> element wrapping the radio — clicking anywhere on the row selects the option.</li>
          <li>For standalone <code>Radio</code>, provide your own label association via <code>aria-label</code> or a wrapping <code>&lt;label&gt;</code> element.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never display a single radio with no alternatives. Screen readers announce it as a radio button, but the user has no other option to select — use a <code>Checkbox</code> or <code>Toggle</code> instead.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Settings — notification preference</span>
            <div style="display:flex;flex-direction:column;gap:12px;max-width:400px;">
              <RadioWithLabel v-model="exNotif" name="ex-notif" value="all" title="All notifications" paragraph="Receive emails for every booking update." />
              <RadioWithLabel v-model="exNotif" name="ex-notif" value="important" title="Important only" paragraph="Only booking confirmations and cancellations." />
              <RadioWithLabel v-model="exNotif" name="ex-notif" value="none" title="None" paragraph="No email notifications. Check dashboard manually." />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Plan selection</span>
            <div style="display:flex;flex-direction:column;gap:12px;max-width:400px;">
              <RadioWithLabel v-model="exPlan" name="ex-plan" value="starter" title="Starter" />
              <RadioWithLabel v-model="exPlan" name="ex-plan" value="growth" title="Growth" />
              <RadioWithLabel v-model="exPlan" name="ex-plan" value="scale" title="Scale" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — ambiguous labels</span>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <RadioWithLabel :model-value="'a'" name="anti-ambig" value="a" title="Option 1" />
              <RadioWithLabel :model-value="'a'" name="anti-ambig" value="b" title="Option 2" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Labels must describe the choice clearly</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — single radio</span>
            <RadioWithLabel :model-value="'agree'" name="anti-single" value="agree" title="I agree" />
            <span style="font-size:0.75rem;color:#FD3860;">Use a Checkbox for single opt-in</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for multi-select</span>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <RadioWithLabel :model-value="null" name="anti-multi-a" value="a" title="Feature A" />
              <RadioWithLabel :model-value="null" name="anti-multi-b" value="b" title="Feature B" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Use Checkboxes when multiple selections are allowed</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Radio</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value in the group. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>The value this radio represents. Emitted when selected.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">name</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Native radio group name. All radios sharing this value form a group.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
          </tbody>
        </table>

        <h3>RadioWithLabel</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value in the group. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>The value this radio represents. Emitted when selected.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">name</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Native radio group name. All radios sharing this value form a group.</td>
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
              <td>Primary label text displayed next to the radio.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">paragraph</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional description below the title. When present, radio aligns to top.</td>
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
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td>Emitted when a radio is selected. Payload is the radio's <code>value</code> prop. Enables <code>v-model</code> binding.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Radio colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Radio</span>
            <div style="display:flex;gap:16px;">
              <Radio :model-value="null" name="theme-light" value="a" />
              <Radio :model-value="'b'" name="theme-light-on" value="b" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">RadioWithLabel</span>
            <RadioWithLabel :model-value="'active'" name="theme-light-rwl" value="active" title="Feature enabled" paragraph="This setting is active." />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Radio</span>
            <div style="display:flex;gap:16px;">
              <Radio :model-value="null" name="theme-dark" value="a" />
              <Radio :model-value="'b'" name="theme-dark-on" value="b" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">RadioWithLabel</span>
            <RadioWithLabel :model-value="'active'" name="theme-dark-rwl" value="active" title="Feature enabled" paragraph="This setting is active." />
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
<pre><span class="token-comment">// Basic radio group with v-model</span>
<span class="token-tag">&lt;Radio</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"free"</span>
<span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;Radio</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"pro"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With label (title only)</span>
<span class="token-tag">&lt;RadioWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"free"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Free plan"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With label + paragraph</span>
<span class="token-tag">&lt;RadioWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"pro"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Pro plan"</span>
  <span class="token-attr">paragraph</span>=<span class="token-string">"Unlimited projects,
    priority support."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled option</span>
<span class="token-tag">&lt;RadioWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"enterprise"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Enterprise"</span>
  <span class="token-attr">paragraph</span>=<span class="token-string">"Contact sales."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Standalone — always add aria-label</span>
<span class="token-tag">&lt;Radio</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"color"</span>
  <span class="token-attr">name</span>=<span class="token-string">"color"</span>
  <span class="token-attr">value</span>=<span class="token-string">"red"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Red"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Radio — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;input</span>
    <span class="token-attr">type</span>=<span class="token-string">"radio"</span>
    <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
    <span class="token-attr">value</span>=<span class="token-string">"free"</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-radio"</span>
  <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Radio — checked --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;input</span>
    <span class="token-attr">type</span>=<span class="token-string">"radio"</span>
    <span class="token-attr">name</span>=<span class="token-string">"plan"</span>
    <span class="token-attr">value</span>=<span class="token-string">"pro"</span>
    <span class="token-attr">checked</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-radio"</span>
  <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio__dot"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- RadioWithLabel --&gt;</span>
<span class="token-tag">&lt;label</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio-with-label
     marks-radio-with-label--has-paragraph"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio-wrapper"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;input</span> <span class="token-attr">type</span>=<span class="token-string">"radio"</span> … <span class="token-tag">/&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio__dot"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-radio-with-label__text"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/span&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__paragraph"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/label&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Radio:
    .marks-radio-wrapper
    .marks-radio
    .marks-radio--disabled
    .marks-radio__dot

  RadioWithLabel:
    .marks-radio-with-label
    .marks-radio-with-label--has-paragraph
    .marks-radio-with-label__text
    .marks-radio-with-label__title
    .marks-radio-with-label__paragraph
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Radio circle ───</span>

<span class="token-attr">width</span>:  <span class="token-number">24px</span>;
<span class="token-attr">height</span>: <span class="token-number">24px</span>;
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Checked state ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Dot (checked indicator) ───</span>

<span class="token-attr">width</span>:  <span class="token-number">12px</span>;
<span class="token-attr">height</span>: <span class="token-number">12px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Hover states ───</span>

<span class="token-comment">// Hover unchecked</span>
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);

<span class="token-comment">// Hover checked</span>
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);

<span class="token-comment">// Hover checked dot</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);


<span class="token-comment">// ─── Disabled ───</span>

<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);


<span class="token-comment">// ─── RadioWithLabel spacing ───</span>

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
<span class="token-attr">outline-offset</span>: <span class="token-number">2px</span>;</pre>
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
  name: 'RadioDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoStandalone: 'a',
      demoLabel: 'monthly',
      demoParagraph: 'annual',
      demoLive: 'alpha',
      demoLiveLabel: 'pro',
      exNotif: 'important',
      exPlan: 'growth',
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

/* Force hover state for Radio */
.force-hover .marks-radio:not(.marks-radio--disabled):not(:checked) { border-color: var(--marks-color-gray-300) !important; }
.force-hover .marks-radio:not(.marks-radio--disabled):checked { border-color: var(--marks-color-gray-500) !important; }
.force-hover .marks-radio:checked:not(.marks-radio--disabled) ~ .marks-radio__dot { background: var(--marks-color-gray-500) !important; }
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
