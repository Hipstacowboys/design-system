<template>
  <DocHeader active-page="input" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="input" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Input</h1>
        <p class="content__lead">
          A text-entry field composed of three layers: <code>Input</code> (wrapper with
          labels and message), <code>InputField</code> (the styled field with icons and
          addons), and <code>InputMessage</code> (error or info feedback). Supports
          <code>v-model</code> binding, two sizes, leading/trailing addons, icons,
          validation states, and full keyboard accessibility.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Input</strong> — Short text or numeric values: emails, names, prices, search queries. Use whenever you need a single-line field with labels and optional validation messages.</li>
          <li><strong>InputField</strong> — The raw field without labels or messages. Use when composing custom layouts or building higher-level form components.</li>
          <li><strong>InputMessage</strong> — Standalone error or info message. Use when validation feedback is detached from the field (rare).</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>Multi-line content — use <code>Textarea</code>.</li>
          <li>Predefined option picking — use <code>Select</code>, <code>RadioWithLabel</code>, or <code>Checkbox</code>.</li>
          <li>Toggle-style on/off — use <code>Toggle</code>.</li>
        </ul>

        <h3>Component composition</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Input (full wrapper)</span>
            <Input v-model="demoBasic" label="Email address" placeholder="name@example.com" message="We'll never share your email" message-type="info" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">With addons + both labels</span>
            <Input v-model="demoPrice" label="Price" label-right="Required" leading-addon="USD" trailing-addon="per item" placeholder="0.00" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">With left icon</span>
            <Input v-model="demoSearch" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search products…" />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Input supports <code>small</code> and <code>medium</code> sizes. Each size has distinct padding, radius, gap, and typography tokens. The wrapper adds optional labels above and a message below.</p>

        <h3>Structural slots</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-input__labels</code> (label row) →
              <code>.marks-input-field</code> (field container) →
              <code>.marks-input__message</code> (message row)<br>
              Inside the field:
              <code>__addon--leading</code> ·
              <code>__icon--left</code> ·
              <code>__input</code> ·
              <code>__icon--right</code> ·
              <code>__addon--trailing</code>
            </div>
          </div>
        </div>

        <h3>Medium size — spacing &amp; dimensions</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">InputField — medium</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Input model-value="" size="medium" placeholder="Placeholder text" style="pointer-events:none;width:280px;" />
              <!-- Padding top badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '32px' }">16</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '16px', width: '48px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '16px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '64px', width: '1px', height: '9px' }"></div>
              <!-- Padding left overlay -->
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', width: '16px', height: '100%' }"></div>
              <!-- Padding right overlay -->
              <div class="btn-anatomy__pad" :style="{ top: '0', right: '0', width: '16px', height: '100%' }"></div>
              <!-- Padding top overlay -->
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', width: '100%', height: '16px' }"></div>
              <!-- Padding bottom overlay -->
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', width: '100%', height: '16px' }"></div>
              <!-- Radius badge -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">r12</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '0', width: '24px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '24px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-16</code></td><td>16px all sides</td></tr>
              <tr><td>gap (between slots)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>border</td><td><code>—</code></td><td>2px solid transparent</td></tr>
              <tr><td>box-shadow (rest)</td><td><code>—</code></td><td>0 0 0 1px gray-200</td></tr>
              <tr><td>typography</td><td><code>marks-typography-paragraph-md-one-line</code></td><td>medium text</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Small size — spacing &amp; dimensions</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">InputField — small</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Input model-value="" size="small" placeholder="Placeholder text" style="pointer-events:none;width:240px;" />
              <!-- Padding top badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '24px' }">8</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '8px', width: '40px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '8px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '48px', width: '1px', height: '9px' }"></div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', width: '8px', height: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '0', right: '0', width: '8px', height: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', width: '100%', height: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', width: '100%', height: '8px' }"></div>
              <!-- Radius badge -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">r8</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '0', width: '16px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '16px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-8</code></td><td>8px all sides</td></tr>
              <tr><td>gap (between slots)</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-8</code></td><td>8px</td></tr>
              <tr><td>border</td><td><code>—</code></td><td>2px solid transparent</td></tr>
              <tr><td>box-shadow (rest)</td><td><code>—</code></td><td>0 0 0 1px gray-200</td></tr>
              <tr><td>typography</td><td><code>marks-typography-paragraph-sm-one-line</code></td><td>small text</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Wrapper spacing</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Input (full wrapper)</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Input model-value="" label="Label" message="Helper message" message-type="info" placeholder="Placeholder" style="pointer-events:none;width:300px;" />
              <!-- Labels ↔ field gap badge -->
              <div class="btn-anatomy__badge" :style="{ top: '14px', right: '-36px' }">12</div>
              <!-- Message margin badge -->
              <div class="btn-anatomy__badge" :style="{ bottom: '12px', right: '-28px' }">4</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>labels → field gap</td><td><code>--marks-spacing-12</code></td><td>12px (margin-bottom on labels)</td></tr>
              <tr><td>field → message gap</td><td><code>--marks-spacing-4</code></td><td>4px (margin-top on message)</td></tr>
              <tr><td>labels gap (left ↔ right)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Live sizes</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Small</span>
            <Input v-model="sizeSmall" size="small" label="Username" placeholder="jane_doe" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Medium (default)</span>
            <Input v-model="sizeMedium" size="medium" label="Username" placeholder="jane_doe" />
          </div>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">All interactive states shown across three major field configurations.</p>

        <div class="variant-section">
          <p class="variant-section__label">Medium size — all states</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Plain</th>
                  <th>With icons</th>
                  <th>With addon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Input model-value="" label="Email" placeholder="name@example.com" /></td>
                  <td><Input model-value="" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" /></td>
                  <td><Input model-value="" label="Amount" leading-addon="USD" placeholder="0.00" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Input model-value="" label="Email" placeholder="name@example.com" /></div></td>
                  <td><div class="force-hover"><Input model-value="" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" /></div></td>
                  <td><div class="force-hover"><Input model-value="" label="Amount" leading-addon="USD" placeholder="0.00" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--pressed">Focus</span></td>
                  <td><div class="force-active"><Input model-value="" label="Email" placeholder="name@example.com" /></div></td>
                  <td><div class="force-active"><Input model-value="" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" /></div></td>
                  <td><div class="force-active"><Input model-value="" label="Amount" leading-addon="USD" placeholder="0.00" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--error">Error</span></td>
                  <td><Input model-value="" label="Email" placeholder="name@example.com" :error="true" message="Please enter a valid email" message-type="error" /></td>
                  <td><Input model-value="" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" :error="true" message="No results found" message-type="error" /></td>
                  <td><Input model-value="" label="Amount" leading-addon="USD" placeholder="0.00" :error="true" message="Amount is required" message-type="error" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Input model-value="" label="Email" placeholder="name@example.com" :disabled="true" /></td>
                  <td><Input model-value="" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" :disabled="true" /></td>
                  <td><Input model-value="" label="Amount" leading-addon="USD" placeholder="0.00" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Small size — key states</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Plain</th>
                  <th>With icons</th>
                  <th>With addon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Input model-value="" size="small" label="Email" placeholder="name@example.com" /></td>
                  <td><Input model-value="" size="small" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" /></td>
                  <td><Input model-value="" size="small" label="Price" leading-addon="$" placeholder="0" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Input model-value="" size="small" label="Email" placeholder="name@example.com" /></div></td>
                  <td><div class="force-hover"><Input model-value="" size="small" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" /></div></td>
                  <td><div class="force-hover"><Input model-value="" size="small" label="Price" leading-addon="$" placeholder="0" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Input model-value="" size="small" label="Email" placeholder="name@example.com" :disabled="true" /></td>
                  <td><Input model-value="" size="small" label="Search" :left-icon="PhMagnifyingGlass" placeholder="Search…" :disabled="true" /></td>
                  <td><Input model-value="" size="small" label="Price" leading-addon="$" placeholder="0" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>Clicking anywhere inside the <code>InputField</code> wrapper focuses the native <code>&lt;input&gt;</code> — except when the click target is an interactive addon, select, or button.</li>
          <li>This means users can click the padding area, icons, or empty space and the field will receive focus.</li>
        </ul>

        <h3>Events</h3>
        <ul>
          <li><code>update:modelValue</code> fires on every keystroke for <code>v-model</code> binding.</li>
          <li><code>input</code> passes through the native <code>InputEvent</code>.</li>
          <li><code>focus</code> and <code>blur</code> pass through <code>FocusEvent</code> — useful for validation-on-blur patterns.</li>
        </ul>

        <h3>Error + message interaction</h3>
        <ul>
          <li>Setting <code>error="true"</code> directly applies the red error ring to the field.</li>
          <li>Setting <code>messageType="error"</code> on <code>Input</code> also activates the error ring — the wrapper infers <code>error</code> from <code>messageType</code>.</li>
          <li><code>InputMessage</code> renders a <code>PhWarningCircle</code> icon for errors and <code>PhInfo</code> for info messages.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>Background changes to <code>--marks-color-gray-100</code>.</li>
          <li>Entire field drops to <code>opacity: 0.5</code>.</li>
          <li>Cursor changes to <code>not-allowed</code> on both the wrapper and input.</li>
          <li>Hover and focus styles are suppressed.</li>
        </ul>

        <h3>Focus ring</h3>
        <ul>
          <li>Default focus: <code>border-color: black</code> + <code>box-shadow: 0 0 0 4px rgba(0,0,0,0.3), 0 0 0 1px black</code>.</li>
          <li>Error focus: same ring shape but uses <code>red-200</code> and <code>rgba(253,56,96,0.3)</code>.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="max-width:520px;width:100%;">
            <span class="comp-demo__group-label">Type and blur to validate</span>
            <Input
              v-model="liveEmail"
              label="Email"
              placeholder="name@example.com"
              :message="emailMessage"
              :message-type="emailMsgType"
              :error="emailMsgType === 'error'"
              @blur="validateEmail"
            />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ liveEmail || '(empty)' }}</code></span>
          </div>
          <div class="comp-demo__group" style="max-width:520px;width:100%;">
            <span class="comp-demo__group-label">Disabled field</span>
            <Input model-value="locked@example.com" label="Email" :disabled="true" />
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Labels</h3>
        <ul>
          <li>Always provide a visible <code>label</code> — it is the primary accessible name for the field.</li>
          <li>Use sentence case: "Email address", not "Email Address".</li>
          <li>Keep labels concise — 1–3 words. The label identifies the field, not the expected format.</li>
          <li><code>labelRight</code> is for secondary context like "Optional" or character counts.</li>
        </ul>

        <h3>Placeholders</h3>
        <ul>
          <li>Placeholders are hints, not labels — they disappear on focus. Never rely on placeholder as the only label.</li>
          <li>Use real examples: "jane@example.com" instead of "Enter your email".</li>
          <li>Keep placeholder shorter than the expected input to avoid truncation.</li>
        </ul>

        <h3>Message text</h3>
        <ul>
          <li>Error messages should explain <em>how to fix</em> the problem: "Enter a valid email address" instead of "Invalid".</li>
          <li>Info messages provide supplementary context: "We'll never share your email".</li>
          <li>Keep messages to one sentence.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as a native <code>&lt;input&gt;</code> element — full browser and assistive technology support out of the box.</li>
          <li>Label is associated via a generated <code>id</code> and <code>for</code> attribute — clicking the label focuses the input.</li>
          <li><code>disabled</code> uses the native HTML attribute, ensuring screen readers announce the field as disabled.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus into and out of the field.</li>
          <li>Standard text editing keys work natively (arrow keys, Backspace, Ctrl+A, etc.).</li>
          <li>Focus indicator: 2px black border + 4px spread shadow, clearly visible at all sizes.</li>
        </ul>

        <h3>Icon-only fields</h3>
        <ul>
          <li>When using <code>InputField</code> standalone without a visible label, always provide <code>aria-label</code> on the input.</li>
          <li>Icons are decorative — they don't receive focus and don't need alt text.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never use a placeholder as the only label. Screen readers may not announce placeholder text, and it disappears as soon as the user types.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Email field with validation</span>
            <Input v-model="exEmail" label="Email address" placeholder="jane@example.com" message="We'll send a confirmation link" message-type="info" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Price with addons</span>
            <Input v-model="exPrice" label="Unit price" label-right="Required" leading-addon="USD" trailing-addon=".00" placeholder="0" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Search with icon</span>
            <Input v-model="exSearch" :left-icon="PhMagnifyingGlass" label="Search" placeholder="Search products…" size="small" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — no label (placeholder only)</span>
            <Input model-value="" placeholder="Type here…" />
            <span style="font-size:0.75rem;color:#FD3860;">No accessible name — screen readers see an unlabeled input</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — placeholder as label</span>
            <Input model-value="" placeholder="Email address" />
            <span style="font-size:0.75rem;color:#FD3860;">Label disappears on focus — users lose context</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — vague error message</span>
            <Input model-value="" label="Email" :error="true" message="Invalid" message-type="error" />
            <span style="font-size:0.75rem;color:#FD3860;">Error should explain how to fix: "Enter a valid email address"</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Input</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Current value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">size</code></td>
              <td><code class="prop-type">'small' | 'medium'</code></td>
              <td><code class="prop-default">'medium'</code></td>
              <td>Field size — controls padding, radius, gap, and typography.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'text'</code></td>
              <td>Native input type: <code>text</code>, <code>email</code>, <code>number</code>, <code>password</code>, etc.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">placeholder</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Placeholder text shown when the field is empty.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary label text (left-aligned, linked to input via <code>for</code>).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">labelRight</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary label text (right-aligned). Use for "Optional", character count, etc.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">leadingAddon</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Text addon before the input (e.g. "USD", "https://").</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">trailingAddon</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Text addon after the input (e.g. "kg", ".00").</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">leftIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Icon component rendered left of the input. Pass a Phosphor icon component.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">rightIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Icon component rendered right of the input.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction, applies disabled styling.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">error</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Applies error ring. Also inferred when <code>messageType="error"</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">message</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Text shown below the field via <code>InputMessage</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">messageType</code></td>
              <td><code class="prop-type">'error' | 'info'</code></td>
              <td><code class="prop-default">'info'</code></td>
              <td>Controls message color and icon. <code>error</code> also activates the error ring.</td>
            </tr>
          </tbody>
        </table>

        <h3>InputMessage</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">'error' | 'info'</code></td>
              <td><code class="prop-default">'info'</code></td>
              <td>Message style — determines color and icon.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">message</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Message text. Can also be overridden via the default slot.</td>
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
              <td><code class="prop-type">String | Number</code></td>
              <td>Emitted on input. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">input</code></td>
              <td><code class="prop-type">InputEvent</code></td>
              <td>Native input event passthrough.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">focus</code></td>
              <td><code class="prop-type">FocusEvent</code></td>
              <td>Fires when the input receives focus.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">blur</code></td>
              <td><code class="prop-type">FocusEvent</code></td>
              <td>Fires when the input loses focus. Useful for validate-on-blur.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Input colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Medium</span>
            <Input v-model="themeLight1" label="Email" placeholder="name@example.com" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label">Small + error</span>
            <Input v-model="themeLight2" size="small" label="Email" :error="true" message="Enter a valid email" message-type="error" />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Medium</span>
            <Input v-model="themeDark1" label="Email" placeholder="name@example.com" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:520px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Small + error</span>
            <Input v-model="themeDark2" size="small" label="Email" :error="true" message="Enter a valid email" message-type="error" />
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
<pre><span class="token-comment">// Basic input with label</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"email"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Email"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"name@example.com"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With left icon</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"query"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Search"</span>
  <span class="token-attr">:left-icon</span>=<span class="token-string">"PhMagnifyingGlass"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Search products…"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Leading + trailing addons</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"price"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Unit price"</span>
  <span class="token-attr">leading-addon</span>=<span class="token-string">"USD"</span>
  <span class="token-attr">trailing-addon</span>=<span class="token-string">".00"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"0"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With validation message</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"email"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Email"</span>
  <span class="token-attr">:error</span>=<span class="token-string">"true"</span>
  <span class="token-attr">message</span>=<span class="token-string">"Enter a valid email"</span>
  <span class="token-attr">message-type</span>=<span class="token-string">"error"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Small size</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"name"</span>
  <span class="token-attr">size</span>=<span class="token-string">"small"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Name"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Jane"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Locked field"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Both labels</span>
<span class="token-tag">&lt;Input</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"bio"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Bio"</span>
  <span class="token-attr">label-right</span>=<span class="token-string">"Optional"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Short bio…"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Input — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input"</span><span class="token-tag">&gt;</span>

  <span class="token-comment">&lt;!-- Labels --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input__labels"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;label</span> <span class="token-attr">for</span>=<span class="token-string">"input-1"</span>
      <span class="token-attr">class</span>=<span class="token-string">"marks-input__label
        marks-input__label--left"</span><span class="token-tag">&gt;</span>
      Email
    <span class="token-tag">&lt;/label&gt;</span>
    <span class="token-tag">&lt;span</span>
      <span class="token-attr">class</span>=<span class="token-string">"marks-input__label
        marks-input__label--right"</span><span class="token-tag">&gt;</span>
      Optional
    <span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-comment">&lt;!-- Field --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input__field-wrapper"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-field
        marks-input-field--medium"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-field__addon
          marks-input-field__addon--leading"</span><span class="token-tag">&gt;</span>
        USD
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;input</span>
        <span class="token-attr">id</span>=<span class="token-string">"input-1"</span>
        <span class="token-attr">class</span>=<span class="token-string">"marks-input-field__input"</span>
        <span class="token-attr">type</span>=<span class="token-string">"text"</span>
        <span class="token-attr">placeholder</span>=<span class="token-string">"0.00"</span>
      <span class="token-tag">/&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-comment">&lt;!-- Message --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-message
      marks-input-message--info
      marks-input__message"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-message__icon"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-input-message__text"</span><span class="token-tag">&gt;</span>
      Helper text
    <span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Input wrapper:
    .marks-input
    .marks-input__labels
    .marks-input__label  --left  --right
    .marks-input__field-wrapper
    .marks-input__message

  InputField:
    .marks-input-field
    .marks-input-field--small  --medium
    .marks-input-field--error  --disabled
    .marks-input-field__input
    .marks-input-field__icon  --left  --right
    .marks-input-field__addon --leading --trailing

  InputMessage:
    .marks-input-message
    .marks-input-message--error  --info
    .marks-input-message__icon
    .marks-input-message__text
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Field base ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid transparent;
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Medium size ───</span>

<span class="token-attr">padding</span>: <span class="token-number">16px</span>;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-one-line;


<span class="token-comment">// ─── Small size ───</span>

<span class="token-attr">padding</span>: <span class="token-number">8px</span>;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-one-line;


<span class="token-comment">// ─── Hover ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Focus ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>:
  <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">4px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>),
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Error ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);

<span class="token-comment">// Error + focus</span>
<span class="token-attr">box-shadow</span>:
  <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">0px</span> <span class="token-number">4px</span> rgba(<span class="token-number">253</span>,<span class="token-number">56</span>,<span class="token-number">96</span>,<span class="token-number">0.3</span>),
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);


<span class="token-comment">// ─── Disabled ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;


<span class="token-comment">// ─── Labels ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">margin-bottom</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Message ───</span>

<span class="token-attr">margin-top</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-4</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;

<span class="token-comment">// Error message</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);

<span class="token-comment">// Info message</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Placeholder ───</span>

<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Icons ───</span>

<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">flex-shrink</span>: <span class="token-number">0</span>;


<span class="token-comment">// ─── Addons ───</span>

<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'InputDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      PhMagnifyingGlass,
      demoBasic: '',
      demoPrice: '',
      demoSearch: '',
      sizeSmall: '',
      sizeMedium: '',
      liveEmail: '',
      emailMessage: 'We\'ll send a confirmation link',
      emailMsgType: 'info',
      exEmail: '',
      exPrice: '',
      exSearch: '',
      themeLight1: '',
      themeLight2: '',
      themeDark1: '',
      themeDark2: '',
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
    validateEmail() {
      if (!this.liveEmail) {
        this.emailMessage = 'We\'ll send a confirmation link'
        this.emailMsgType = 'info'
        return
      }
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.liveEmail)
      this.emailMessage = valid ? 'Looks good!' : 'Enter a valid email address'
      this.emailMsgType = valid ? 'info' : 'error'
    },
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

/* Force hover state for InputField */
.force-hover .marks-input-field:not(.marks-input-field--disabled):not(.marks-input-field--error):not(:focus-within) {
  box-shadow: 0 0 0 1px var(--marks-color-gray-300) !important;
}

/* Force active/focus state for InputField */
.force-active .marks-input-field:not(.marks-input-field--disabled) {
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
  min-width: 220px;
  vertical-align: top;
}
</style>
