<template>
  <DocHeader active-page="checkbox" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="checkbox" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Checkbox</h1>
        <p class="content__lead">
          A binary selection control for form submission flows. Two components:
          <code>Checkbox</code> (the standalone control) and <code>CheckboxWithLabel</code>
          (control paired with a title and optional description). Both support
          <code>v-model</code> binding, indeterminate state, disabled state, and full
          keyboard accessibility.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Checkbox</strong> — Binary yes/no selection where the change is submitted with a form. Consent flows, terms acceptance, multi-select lists.</li>
          <li><strong>CheckboxWithLabel</strong> — Same control with a visible text label. Use whenever the checkbox needs context. Supports an optional paragraph for longer descriptions.</li>
          <li><strong>Indeterminate</strong> — Partial parent selection state in grouped lists (e.g. "Select all" when only some children are checked).</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the change takes effect immediately without form submission — use a <code>Toggle</code> instead.</li>
          <li>If only one choice is allowed from a group — use <code>Radio</code> or <code>Select</code>.</li>
          <li>For navigation or triggering actions — use a <code>Button</code>.</li>
        </ul>

        <h3>Checkbox vs CheckboxWithLabel</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Checkbox (standalone)</span>
            <div style="display:flex;gap:16px;align-items:center;">
              <Checkbox v-model="demoUnchecked" />
              <Checkbox v-model="demoChecked" />
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">CheckboxWithLabel (title only)</span>
            <CheckboxWithLabel v-model="demoLabel1" title="Enable notifications" />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">CheckboxWithLabel (title + paragraph)</span>
            <CheckboxWithLabel v-model="demoLabel2" title="Marketing consent" paragraph="Receive product updates and promotional emails from us." />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Checkbox is a fixed-size 24 × 24 px control — no size prop. CheckboxWithLabel adds a text block alongside.</p>

        <h3>Checkbox — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Box + Icon</span>
            <div style="display:flex;align-items:center;gap:24px;">
              <Checkbox :model-value="false" />
              <Checkbox :model-value="true" />
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-checkbox-wrapper</code> (container) ·
              <code>.marks-checkbox</code> (native input) ·
              <code>.marks-checkbox__icon--check</code> /
              <code>.marks-checkbox__icon--minus</code>
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Fixed dimensions — no size variants. Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Checkbox control</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Checkbox :model-value="false" style="pointer-events:none;" />
              <!-- Width badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">24</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '24px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '24px', width: '1px', height: '9px' }"></div>
              <!-- Height badge (right) -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-28px', transform: 'translateY(-50%)' }">24</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: '24px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '24px', right: '-14px', height: '1px', width: '9px' }"></div>
              <!-- Border badge (bottom) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">2px border</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '0', width: '24px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '24px', width: '1px', height: '9px' }"></div>
              <!-- Border overlay (2px all around) -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '24px', height: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '24px', height: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px auto 2px 0', width: '2px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '2px 0 2px auto', width: '2px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>control width</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>control height</td><td><code>—</code></td><td>24px</td></tr>
              <tr><td>border width</td><td><code>—</code></td><td>2px solid</td></tr>
              <tr><td>border color (unchecked)</td><td><code>--marks-color-gray-200</code></td><td>#ECECEC</td></tr>
              <tr><td>border-radius</td><td><code>—</code></td><td>6px</td></tr>
              <tr><td>background (unchecked)</td><td><code>--marks-color-white</code></td><td>#FFFFFF</td></tr>
              <tr><td>background (checked / indet.)</td><td><code>--marks-color-primary-solid</code></td><td>#0E5842</td></tr>
              <tr><td>icon size (check)</td><td><code>—</code></td><td>16px (PhCheck bold)</td></tr>
              <tr><td>icon size (minus)</td><td><code>—</code></td><td>12px (PhMinus bold)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">CheckboxWithLabel</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <CheckboxWithLabel :model-value="true" title="Enable feature" paragraph="Optional description text." style="pointer-events:none;" />
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
              <tr><td>gap (checkbox → label)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>title ↔ paragraph gap</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
              <tr><td>align (title only)</td><td><code>—</code></td><td>center</td></tr>
              <tr><td>align (with paragraph)</td><td><code>—</code></td><td>flex-start</td></tr>
              <tr><td>title typography</td><td><code>marks-typography-paragraph-md-one-line</code></td><td>—</td></tr>
              <tr><td>title color</td><td><code>--marks-color-gray-500</code></td><td>#1A1A1A</td></tr>
              <tr><td>paragraph typography</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td>—</td></tr>
              <tr><td>paragraph color</td><td><code>--marks-color-gray-300</code></td><td>#8D8D8D</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Both components shown across all interactive states.</p>

        <div class="variant-section">
          <p class="variant-section__label">Checkbox</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                  <th>Indeterminate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Checkbox :model-value="false" /></td>
                  <td><Checkbox :model-value="true" /></td>
                  <td><Checkbox :model-value="false" :indeterminate="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Checkbox :model-value="false" /></div></td>
                  <td><div class="force-hover"><Checkbox :model-value="true" /></div></td>
                  <td><div class="force-hover"><Checkbox :model-value="false" :indeterminate="true" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Checkbox :model-value="false" :disabled="true" /></td>
                  <td><Checkbox :model-value="true" :disabled="true" /></td>
                  <td><Checkbox :model-value="false" :indeterminate="true" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">CheckboxWithLabel — title only</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                  <th>Indeterminate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><CheckboxWithLabel :model-value="false" title="Notifications" /></td>
                  <td><CheckboxWithLabel :model-value="true" title="Notifications" /></td>
                  <td><CheckboxWithLabel :model-value="false" :indeterminate="true" title="Notifications" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="false" title="Notifications" /></div></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="true" title="Notifications" /></div></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="false" :indeterminate="true" title="Notifications" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><CheckboxWithLabel :model-value="false" :disabled="true" title="Notifications" /></td>
                  <td><CheckboxWithLabel :model-value="true" :disabled="true" title="Notifications" /></td>
                  <td><CheckboxWithLabel :model-value="false" :indeterminate="true" :disabled="true" title="Notifications" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">CheckboxWithLabel — title + paragraph</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unchecked</th>
                  <th>Checked</th>
                  <th>Indeterminate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><CheckboxWithLabel :model-value="false" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                  <td><CheckboxWithLabel :model-value="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                  <td><CheckboxWithLabel :model-value="false" :indeterminate="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="false" title="Terms accepted" paragraph="I agree to the terms and conditions." /></div></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></div></td>
                  <td><div class="force-hover"><CheckboxWithLabel :model-value="false" :indeterminate="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><CheckboxWithLabel :model-value="false" :disabled="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                  <td><CheckboxWithLabel :model-value="true" :disabled="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                  <td><CheckboxWithLabel :model-value="false" :indeterminate="true" :disabled="true" title="Terms accepted" paragraph="I agree to the terms and conditions." /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>Clicking the checkbox (or its label in <code>CheckboxWithLabel</code>) toggles the checked state and emits <code>update:modelValue</code> — standard <code>v-model</code> binding.</li>
          <li>The change is local until the form is submitted — unlike Toggle, it does not take immediate effect.</li>
          <li>When <code>disabled</code>, clicks are suppressed on both the checkbox and the label.</li>
        </ul>

        <h3>Indeterminate → checked</h3>
        <ul>
          <li>When the checkbox is in the indeterminate state, clicking it transitions to <strong>checked</strong> (<code>true</code>), never to unchecked.</li>
          <li>The native click is intercepted via <code>event.preventDefault()</code> so the component can emit the correct value.</li>
          <li>Indeterminate is a visual-only state — it requires <code>:indeterminate="true"</code> and <code>:model-value="false"</code> simultaneously.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>The entire component drops to <code>opacity: 0.5</code>.</li>
          <li>Cursor changes to <code>not-allowed</code>.</li>
          <li>The native <code>disabled</code> attribute is set on the <code>&lt;input&gt;</code> element, preventing all interaction.</li>
        </ul>

        <h3>Focus ring</h3>
        <ul>
          <li><code>:focus-visible</code> shows a <code>2px solid var(--marks-color-primary-solid)</code> outline with <code>2px</code> offset.</li>
          <li>Transition: all properties animate over <code>200ms ease</code>.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click to toggle</span>
            <Checkbox v-model="demoLive" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLive }}</code></span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Indeterminate → checked</span>
            <CheckboxWithLabel v-model="demoIndetValue" :indeterminate="demoIndetFlag" title="Select all items" />
            <div style="display:flex;gap:8px;align-items:center;">
              <button class="code-toolbar__copy" @click="demoIndetFlag = !demoIndetFlag">Toggle indeterminate</button>
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">
              v-model: <code>{{ demoIndetValue }}</code> · indeterminate: <code>{{ demoIndetFlag }}</code>
            </span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">With label</span>
            <CheckboxWithLabel v-model="demoLiveLabel" title="Accept terms" paragraph="I agree to the terms of service and privacy policy." />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLiveLabel }}</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title text</h3>
        <ul>
          <li>Use sentence case: "Accept terms", not "Accept Terms".</li>
          <li>Keep it short — ideally 2–5 words. The checkbox itself communicates checked/unchecked; the label explains <em>what</em>.</li>
          <li>Frame as a positive action: "Receive updates" rather than "Don't send updates".</li>
        </ul>

        <h3>Paragraph text</h3>
        <ul>
          <li>Optional — only add when the title alone doesn't provide enough context.</li>
          <li>One sentence max. Explain the consequence of checking, not how to check.</li>
          <li>Example: "We will send product updates and promotional emails."</li>
        </ul>

        <h3>Standalone Checkbox</h3>
        <ul>
          <li>When using <code>Checkbox</code> without <code>CheckboxWithLabel</code>, always provide a visible <code>&lt;label&gt;</code> or <code>aria-label</code> for screen readers.</li>
          <li>The standalone checkbox has no built-in text association — context must come from the surrounding layout.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as <code>&lt;input type="checkbox"&gt;</code> — native form element with built-in accessibility.</li>
          <li>Checked state is communicated via the native <code>:checked</code> pseudo-class.</li>
          <li>Indeterminate state is set via JavaScript on the DOM element (<code>el.indeterminate = true</code>), matching the HTML specification.</li>
          <li><code>disabled</code> attribute is set natively, automatically communicated to assistive technology.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus to/from the checkbox.</li>
          <li><kbd>Space</kbd> — toggles the checked state (native checkbox behavior).</li>
          <li>Focus indicator: <code>2px solid var(--marks-color-primary-solid)</code> with <code>2px</code> offset via <code>:focus-visible</code>.</li>
        </ul>

        <h3>Label association</h3>
        <ul>
          <li><code>CheckboxWithLabel</code> wraps everything in a <code>&lt;label&gt;</code> element — clicking anywhere on the text toggles the checkbox.</li>
          <li>For standalone <code>Checkbox</code>, provide your own label association via <code>aria-label</code>, <code>aria-labelledby</code>, or an external <code>&lt;label for="…"&gt;</code>.</li>
        </ul>

        <h3>Touch target</h3>
        <ul>
          <li>The control is 24 × 24 px, meeting WCAG 2.2 minimum target size guidance.</li>
          <li><code>CheckboxWithLabel</code> expands the hit area to include the full text region.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never use a standalone <code>Checkbox</code> without a visible or ARIA label. Screen readers announce it as "checkbox" with no context about what it controls.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Registration form</span>
            <div style="display:flex;flex-direction:column;gap:16px;max-width:420px;">
              <CheckboxWithLabel v-model="exTerms" title="I agree to the terms of service" />
              <CheckboxWithLabel v-model="exPrivacy" title="I accept the privacy policy" paragraph="We collect data as described in our privacy policy." />
              <CheckboxWithLabel v-model="exMarketing" title="Receive marketing emails" paragraph="Occasional product news and promotions." />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Select-all pattern</span>
            <div style="display:flex;flex-direction:column;gap:12px;max-width:420px;">
              <CheckboxWithLabel :model-value="false" :indeterminate="true" title="Select all items" />
              <div style="padding-left:36px;display:flex;flex-direction:column;gap:10px;">
                <CheckboxWithLabel :model-value="true" title="Item one" />
                <CheckboxWithLabel :model-value="false" title="Item two" />
                <CheckboxWithLabel :model-value="true" title="Item three" />
              </div>
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — vague label</span>
            <CheckboxWithLabel :model-value="false" title="Option" />
            <span style="font-size:0.75rem;color:#FD3860;">Labels must be specific and action-focused</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — standalone without label</span>
            <Checkbox :model-value="true" />
            <span style="font-size:0.75rem;color:#FD3860;">No aria-label or visible text</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for instant settings</span>
            <CheckboxWithLabel :model-value="false" title="Enable dark mode" />
            <span style="font-size:0.75rem;color:#FD3860;">Use a Toggle for immediate-effect settings</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Checkbox</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Current checked state. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">indeterminate</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Shows minus icon when <code>modelValue</code> is <code>false</code>. Clicking resolves to checked.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
          </tbody>
        </table>

        <h3>CheckboxWithLabel</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Current checked state. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">indeterminate</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Passed through to the inner <code>Checkbox</code> component.</td>
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
              <td>Primary label text displayed next to the checkbox.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">paragraph</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional description below the title. When present, checkbox aligns to top.</td>
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
              <td>Emitted on change. Enables <code>v-model</code> binding.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Checkbox colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Checkbox</span>
            <div style="display:flex;gap:16px;">
              <Checkbox :model-value="false" />
              <Checkbox :model-value="true" />
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">CheckboxWithLabel</span>
            <CheckboxWithLabel :model-value="true" title="Feature enabled" paragraph="This setting is active." />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Checkbox</span>
            <div style="display:flex;gap:16px;">
              <Checkbox :model-value="false" />
              <Checkbox :model-value="true" />
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">CheckboxWithLabel</span>
            <CheckboxWithLabel :model-value="true" title="Feature enabled" paragraph="This setting is active." />
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
<pre><span class="token-comment">// Basic checkbox with v-model</span>
<span class="token-tag">&lt;Checkbox</span> <span class="token-attr">v-model</span>=<span class="token-string">"isChecked"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">// Indeterminate state</span>
<span class="token-tag">&lt;Checkbox</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"parentChecked"</span>
  <span class="token-attr">:indeterminate</span>=<span class="token-string">"isPartial"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With label (title only)</span>
<span class="token-tag">&lt;CheckboxWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"agreed"</span>
  <span class="token-attr">title</span>=<span class="token-string">"I agree to terms"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With label + paragraph</span>
<span class="token-tag">&lt;CheckboxWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"marketing"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Receive marketing emails"</span>
  <span class="token-attr">paragraph</span>=<span class="token-string">"Occasional product news
    and promotional emails."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;Checkbox</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>

<span class="token-tag">&lt;CheckboxWithLabel</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Locked setting"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Standalone — always add aria-label</span>
<span class="token-tag">&lt;Checkbox</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selected"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Select row"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Checkbox — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;input</span>
    <span class="token-attr">type</span>=<span class="token-string">"checkbox"</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox"</span>
  <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Checkbox — checked --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;input</span>
    <span class="token-attr">type</span>=<span class="token-string">"checkbox"</span>
    <span class="token-attr">checked</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox"</span>
  <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox__icon
       marks-checkbox__icon--check"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Checkbox — indeterminate --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;input</span>
    <span class="token-attr">type</span>=<span class="token-string">"checkbox"</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox
           marks-checkbox--indeterminate"</span>
  <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox__icon
       marks-checkbox__icon--minus"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- CheckboxWithLabel --&gt;</span>
<span class="token-tag">&lt;label</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox-with-label
       marks-checkbox-with-label--has-paragraph"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-checkbox-wrapper"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;input</span> <span class="token-attr">type</span>=<span class="token-string">"checkbox"</span> …<span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__text"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/span&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__paragraph"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/label&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Checkbox:
    .marks-checkbox-wrapper
    .marks-checkbox
    .marks-checkbox--indeterminate
    .marks-checkbox--disabled
    .marks-checkbox__icon
    .marks-checkbox__icon--check
    .marks-checkbox__icon--minus

  CheckboxWithLabel:
    .marks-checkbox-with-label
    .marks-checkbox-with-label--has-paragraph
    .marks-checkbox-with-label__text
    .marks-checkbox-with-label__title
    .marks-checkbox-with-label__paragraph
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Checkbox control ───</span>

<span class="token-attr">width</span>:  <span class="token-number">24px</span>;
<span class="token-attr">height</span>: <span class="token-number">24px</span>;
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">border-radius</span>: <span class="token-number">6px</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Checked / Indeterminate ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);


<span class="token-comment">// ─── Hover (unchecked only) ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Disabled ───</span>

<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;


<span class="token-comment">// ─── Icons ───</span>

<span class="token-comment">// Check icon (PhCheck): 16px, bold, white</span>
<span class="token-comment">// Minus icon (PhMinus): 12px, bold, white</span>
<span class="token-attr">position</span>: absolute;
<span class="token-attr">transform</span>: translate(<span class="token-number">-50%</span>, <span class="token-number">-50%</span>);
<span class="token-attr">pointer-events</span>: none;


<span class="token-comment">// ─── CheckboxWithLabel spacing ───</span>

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


<span class="token-comment">// ─── Transition ───</span>

<span class="token-attr">transition</span>: all <span class="token-number">0.2s</span> ease;</pre>
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
  name: 'CheckboxDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoUnchecked: false,
      demoChecked: true,
      demoLabel1: true,
      demoLabel2: false,
      demoLive: false,
      demoLiveLabel: false,
      demoIndetValue: false,
      demoIndetFlag: true,
      exTerms: true,
      exPrivacy: false,
      exMarketing: false,
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

/* Force hover state for Checkbox */
.force-hover .marks-checkbox:not(.marks-checkbox--disabled):not(:checked):not(.marks-checkbox--indeterminate) {
  border-color: var(--marks-color-gray-300) !important;
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
