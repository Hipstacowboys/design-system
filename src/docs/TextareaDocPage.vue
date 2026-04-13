<template>
  <DocHeader active-page="textarea" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="textarea" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Textarea</h1>
        <p class="content__lead">
          A multi-line text input for longer-form content. Two components:
          <code>Textarea</code> (wrapper with labels, character count, and error state)
          and <code>TextareaField</code> (the styled field itself). Both support
          <code>v-model</code> binding, disabled and error states, and native keyboard
          accessibility.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Textarea</strong> — Multi-line text entry for paragraphs, notes, descriptions, and comments. Includes labels, optional right-label, and an automatic character counter when <code>maxLength</code> is set.</li>
          <li><strong>TextareaField</strong> — The raw styled field without labels or character count. Use when building a custom layout around the textarea or composing it into a larger form component.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For short, single-line input — use <code>Input</code> instead.</li>
          <li>For selecting from predefined options — use <code>Select</code> or <code>Radio</code>.</li>
          <li>For rich text editing (bold, links, lists) — use a dedicated rich-text editor.</li>
        </ul>

        <h3>Textarea vs TextareaField</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Textarea (full wrapper)</span>
            <Textarea v-model="demoFull" label="Notes" label-right="Optional" placeholder="Add your notes here…" :max-length="250" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">TextareaField (standalone field)</span>
            <TextareaField v-model="demoField" placeholder="Just the field, no labels" />
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Textarea uses a fixed min-height field with configurable rows. No size-variant prop — spacing is controlled by design tokens.</p>

        <h3>TextareaField — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Field wrapper + native textarea</span>
            <TextareaField model-value="Sample content" :rows="3" style="pointer-events:none;" />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-textarea-field</code> (outer wrapper) · <code>.marks-textarea-field__textarea</code> (native element)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Pink overlay shows internal padding, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">TextareaField</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame" style="width:320px;">
              <TextareaField model-value="Sample text content" :rows="3" style="pointer-events:none;width:100%;" />
              <!-- Min-height badge (right) -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-38px', transform: 'translateY(-50%)' }">160</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-14px', width: '1px', height: '100%' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-18px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '0', right: '-18px', height: '1px', width: '9px' }"></div>
              <!-- Radius badge (top-right corner) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', right: '0' }">12</div>
              <!-- Top padding -->
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', right: '0', height: '16px' }"></div>
              <div class="btn-anatomy__badge" :style="{ top: '2px', left: '50%', transform: 'translateX(-50%)' }">16</div>
              <!-- Bottom padding -->
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', right: '0', height: '16px' }"></div>
              <!-- Left padding -->
              <div class="btn-anatomy__pad" :style="{ top: '16px', left: '0', bottom: '16px', width: '20px' }"></div>
              <div class="btn-anatomy__badge" :style="{ top: '50%', left: '2px', transform: 'translateY(-50%)' }">20</div>
              <!-- Right padding -->
              <div class="btn-anatomy__pad" :style="{ top: '16px', right: '0', bottom: '16px', width: '20px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>min-height</td><td><code>—</code></td><td>160px (166px on focus/error)</td></tr>
              <tr><td>border</td><td><code>—</code></td><td>2px solid transparent</td></tr>
              <tr><td>box-shadow (default)</td><td><code>--marks-color-gray-200</code></td><td>0 0 0 1px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>padding</td><td><code>—</code></td><td>16px 20px</td></tr>
              <tr><td>background</td><td><code>--marks-color-white</code></td><td>white</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Textarea (full wrapper)</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame" style="width:320px;">
              <Textarea model-value="Sample text" label="Label" label-right="0 / 250" :rows="3" style="pointer-events:none;width:100%;" />
              <!-- Labels gap badge -->
              <div class="btn-anatomy__badge" :style="{ top: '22px', right: '-38px' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '14px', right: '-14px', width: '1px', height: '12px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '14px', right: '-18px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '26px', right: '-18px', height: '1px', width: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>labels gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>labels margin-bottom</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>character-count margin-top</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>label typography</td><td><code>marks-typography-paragraph-md-multiline</code></td><td>—</td></tr>
              <tr><td>label color</td><td><code>--marks-color-black</code></td><td>#1a1a1a</td></tr>
              <tr><td>right label color</td><td><code>--marks-color-gray-300</code></td><td>#8D8D8D</td></tr>
              <tr><td>character-count typography</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td>—</td></tr>
              <tr><td>character-count color</td><td><code>--marks-color-gray-300</code></td><td>#8D8D8D</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & all states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Textarea shown across all interactive states in both default and error configurations.</p>

        <div class="variant-section">
          <p class="variant-section__label">Textarea</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><div class="variant-cell"><Textarea model-value="" label="Notes" placeholder="Add notes…" /></div></td>
                  <td><div class="variant-cell"><Textarea model-value="" label="Notes" placeholder="Add notes…" :error="true" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="variant-cell force-hover"><Textarea model-value="" label="Notes" placeholder="Add notes…" /></div></td>
                  <td><div class="variant-cell force-hover"><Textarea model-value="" label="Notes" placeholder="Add notes…" :error="true" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--pressed">Clicked</span></td>
                  <td><div class="variant-cell force-active"><Textarea model-value="" label="Notes" placeholder="Add notes…" /></div></td>
                  <td><div class="variant-cell force-active"><Textarea model-value="" label="Notes" placeholder="Add notes…" :error="true" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><div class="variant-cell"><Textarea model-value="Read-only content" label="Notes" :disabled="true" /></div></td>
                  <td><div class="variant-cell"><Textarea model-value="Read-only content" label="Notes" :disabled="true" /></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>Clicking anywhere inside the <code>TextareaField</code> wrapper (padding, empty space) focuses the native <code>&lt;textarea&gt;</code>. This makes the entire bordered area a click target.</li>
          <li>When <code>disabled</code>, clicks are suppressed and the cursor shows <code>not-allowed</code>.</li>
        </ul>

        <h3>Events</h3>
        <ul>
          <li><code>update:modelValue</code> — emitted on every keystroke for <code>v-model</code> binding.</li>
          <li><code>input</code> — raw input event forwarded from the native textarea.</li>
          <li><code>focus</code> / <code>blur</code> — forwarded from the native textarea. The field ring appears on focus and disappears on blur.</li>
        </ul>

        <h3>Character count</h3>
        <ul>
          <li>When <code>maxLength</code> is set, a live counter appears below the field showing <code>count / max characters</code>.</li>
          <li>The counter is purely visual — it does not enforce a hard limit. Pair with form validation if you need enforcement.</li>
        </ul>

        <h3>Focus ring</h3>
        <ul>
          <li>Default: <code>border-color: black</code> + <code>box-shadow: 0 0 0 4px rgba(0,0,0,0.3), 0 0 0 1px black</code>. Min-height grows from 160px to 166px.</li>
          <li>Error: <code>border-color: red-200</code> + <code>box-shadow: 0 0 0 4px rgba(253,56,96,0.3), 0 0 0 1px red-200</code>.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Type to see character count update</span>
            <Textarea v-model="demoLive" label="Special requests" label-right="Optional" placeholder="Allergies, accessibility needs, preferences…" :max-length="200" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model length: <code>{{ demoLive.length }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Error state</span>
            <Textarea v-model="demoError" label="Description" placeholder="Describe the issue…" :error="true" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>"{{ demoError }}"</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Label text</h3>
        <ul>
          <li>Use sentence case: "Special requests", not "Special Requests".</li>
          <li>Keep labels short — 1–3 words. The label names the content; the placeholder provides an example.</li>
          <li>Use <code>labelRight</code> for supplementary info like "Optional" or "Max 500 chars".</li>
        </ul>

        <h3>Placeholder text</h3>
        <ul>
          <li>Write example input, not instructions: "Allergies, accessibility needs…" rather than "Enter your requests here".</li>
          <li>Never use placeholder as a substitute for a label — it disappears on focus.</li>
          <li>Keep placeholder text to one line when possible.</li>
        </ul>

        <h3>Character limits</h3>
        <ul>
          <li>Set <code>maxLength</code> when the backend enforces a limit. The visible counter sets user expectations before they exceed the limit.</li>
          <li>Common limits: notes/comments (500), descriptions (1000), short feedback (250).</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders a native <code>&lt;textarea&gt;</code> element — inherits all built-in accessibility behaviors.</li>
          <li>The <code>disabled</code> attribute is set directly on the native element, so screen readers announce it correctly.</li>
        </ul>

        <h3>Label association</h3>
        <ul>
          <li>The <code>Textarea</code> wrapper generates a unique <code>id</code> and wires it via <code>&lt;label for="…"&gt;</code> — clicking the label focuses the field.</li>
          <li>When using <code>TextareaField</code> standalone, pass your own <code>textarea-id</code> and pair it with an external <code>&lt;label&gt;</code> or <code>aria-label</code>.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus to/from the textarea.</li>
          <li>Standard text-editing keys work natively: arrow keys, Home/End, Select All, Undo/Redo.</li>
          <li><kbd>Enter</kbd> inserts a newline (not form submission) — consistent with native textarea behavior.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Never use a standalone <code>TextareaField</code> without a visible label or <code>aria-label</code>. Screen readers will announce it as an unlabelled text area.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Notes field</span>
            <Textarea v-model="exNotes" label="Internal notes" placeholder="Notes visible only to your team…" :max-length="500" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Special requests</span>
            <Textarea v-model="exRequests" label="Special requests" label-right="Optional" placeholder="Allergies, accessibility needs, seating preferences…" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Description with error</span>
            <Textarea v-model="exDesc" label="Description" :error="true" :max-length="1000" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — no label</span>
            <Textarea model-value="" placeholder="Type something…" />
            <span style="font-size:0.75rem;color:#FD3860;">Always provide a label for context</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — placeholder as label</span>
            <Textarea model-value="" placeholder="Notes" />
            <span style="font-size:0.75rem;color:#FD3860;">Placeholder disappears on focus — use a real label</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for single-line input</span>
            <Textarea model-value="" label="Email" placeholder="you@example.com" :rows="1" />
            <span style="font-size:0.75rem;color:#FD3860;">Use Input for short, single-line fields</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Textarea</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Textarea content. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">placeholder</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Hint text shown when the field is empty.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">rows</code></td>
              <td><code class="prop-type">Number</code></td>
              <td><code class="prop-default">6</code></td>
              <td>Visible row count for the native textarea.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Left label text. Renders a <code>&lt;label&gt;</code> linked to the textarea via <code>for</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">labelRight</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Right-aligned secondary label (e.g. "Optional").</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction, reduces opacity, shows <code>not-allowed</code> cursor.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">error</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Applies red border/shadow styling for validation errors.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">maxLength</code></td>
              <td><code class="prop-type">Number</code></td>
              <td><code class="prop-default">null</code></td>
              <td>When set, shows a live character counter below the field.</td>
            </tr>
          </tbody>
        </table>

        <h3>TextareaField</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">textareaId</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>ID applied to the native textarea for label association.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Textarea content. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">placeholder</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Hint text shown when the field is empty.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">rows</code></td>
              <td><code class="prop-type">Number</code></td>
              <td><code class="prop-default">6</code></td>
              <td>Visible row count.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">error</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Applies error styling.</td>
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
              <td><code class="prop-type">String</code></td>
              <td>Emitted on every keystroke. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">input</code></td>
              <td><code class="prop-type">InputEvent</code></td>
              <td>Raw native input event forwarded from the textarea.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">focus</code></td>
              <td><code class="prop-type">FocusEvent</code></td>
              <td>Emitted when the textarea receives focus.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">blur</code></td>
              <td><code class="prop-type">FocusEvent</code></td>
              <td>Emitted when the textarea loses focus.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Textarea colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Default</span>
            <Textarea v-model="themeLight" label="Notes" placeholder="Light theme preview" :max-length="250" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label">Error</span>
            <Textarea model-value="Invalid content" label="Description" :error="true" />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Default</span>
            <Textarea v-model="themeDark" label="Notes" placeholder="Dark theme preview" :max-length="250" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:560px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Error</span>
            <Textarea model-value="Invalid content" label="Description" :error="true" />
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
<pre><span class="token-comment">// Basic textarea with label</span>
<span class="token-tag">&lt;Textarea</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"notes"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Notes"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Add your notes…"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With character count</span>
<span class="token-tag">&lt;Textarea</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"description"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Description"</span>
  <span class="token-attr">:max-length</span>=<span class="token-string">"500"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With left + right labels</span>
<span class="token-tag">&lt;Textarea</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"requests"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Special requests"</span>
  <span class="token-attr">label-right</span>=<span class="token-string">"Optional"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Allergies, preferences…"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Error state</span>
<span class="token-tag">&lt;Textarea</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"desc"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Description"</span>
  <span class="token-attr">:error</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;Textarea</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Locked notes"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Standalone field (no wrapper)</span>
<span class="token-tag">&lt;TextareaField</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"content"</span>
  <span class="token-attr">textarea-id</span>=<span class="token-string">"my-field"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Custom layout…"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Textarea — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea"</span><span class="token-tag">&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea__labels"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;label</span>
      <span class="token-attr">for</span>=<span class="token-string">"textarea-1"</span>
      <span class="token-attr">class</span>=<span class="token-string">"marks-textarea__label
        marks-textarea__label--left"</span>
    <span class="token-tag">&gt;</span>Notes<span class="token-tag">&lt;/label&gt;</span>
    <span class="token-tag">&lt;span</span>
      <span class="token-attr">class</span>=<span class="token-string">"marks-textarea__label
        marks-textarea__label--right"</span>
    <span class="token-tag">&gt;</span>Optional<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea__field-wrapper"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea-field"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;textarea</span>
        <span class="token-attr">id</span>=<span class="token-string">"textarea-1"</span>
        <span class="token-attr">rows</span>=<span class="token-string">"6"</span>
        <span class="token-attr">class</span>=<span class="token-string">"marks-textarea-field__textarea"</span>
        <span class="token-attr">placeholder</span>=<span class="token-string">"Add notes…"</span>
      <span class="token-tag">&gt;&lt;/textarea&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea__character-count"</span><span class="token-tag">&gt;</span>
    0 / 250 characters
  <span class="token-tag">&lt;/div&gt;</span>

<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Error state --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea-field
     marks-textarea-field--error"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;textarea</span> …<span class="token-tag">&gt;&lt;/textarea&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Disabled state --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-textarea-field
     marks-textarea-field--disabled"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;textarea</span> <span class="token-attr">disabled</span> …<span class="token-tag">&gt;&lt;/textarea&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Textarea (wrapper):
    .marks-textarea
    .marks-textarea__labels
    .marks-textarea__label
    .marks-textarea__label--left
    .marks-textarea__label--right
    .marks-textarea__field-wrapper
    .marks-textarea__character-count

  TextareaField:
    .marks-textarea-field
    .marks-textarea-field--error
    .marks-textarea-field--disabled
    .marks-textarea-field__textarea
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── TextareaField — field wrapper ───</span>

<span class="token-attr">min-height</span>: <span class="token-number">160px</span>;
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid transparent;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">transition</span>: all <span class="token-number">0.2s</span> ease;


<span class="token-comment">// ─── Focus state ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">4px</span>
  rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>),
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">min-height</span>: <span class="token-number">166px</span>;


<span class="token-comment">// ─── Hover state ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Error state ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);
<span class="token-attr">min-height</span>: <span class="token-number">166px</span>;

<span class="token-comment">// Error + focus</span>
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">4px</span>
  rgba(<span class="token-number">253</span>,<span class="token-number">56</span>,<span class="token-number">96</span>,<span class="token-number">0.3</span>),
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);


<span class="token-comment">// ─── Disabled state ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;


<span class="token-comment">// ─── Textarea element ───</span>

<span class="token-attr">padding</span>: <span class="token-number">16px</span> <span class="token-number">20px</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">resize</span>: none;
<span class="token-keyword">@include</span> marks-typography-paragraph-md-one-line;
<span class="token-attr">line-height</span>: <span class="token-number">1.5</span>;

<span class="token-comment">// Placeholder</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Labels ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">margin-bottom</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Right label</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Character count ───</span>

<span class="token-attr">margin-top</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);</pre>
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
  name: 'TextareaDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoFull: '',
      demoField: '',
      demoLive: '',
      demoError: '',
      exNotes: '',
      exRequests: '',
      exDesc: 'This description is too short.',
      themeLight: '',
      themeDark: '',
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

/* Force hover state for TextareaField */
.force-hover .marks-textarea-field:not(.marks-textarea-field--disabled):not(:focus-within) {
  box-shadow: 0 0 0 1px var(--marks-color-gray-300) !important;
}

/* Force active/focus state for TextareaField */
.force-active .marks-textarea-field:not(.marks-textarea-field--disabled) {
  border-color: var(--marks-color-black) !important;
  box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.3), 0 0 0 1px var(--marks-color-black) !important;
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
  margin: 32px 48px 32px 12px;
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

/* ─── Variant table ─── */
.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 16px;
  vertical-align: top;
}

.variant-cell {
  min-width: 260px;
  max-width: 320px;
}
</style>
