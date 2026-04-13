<template>
  <DocHeader active-page="alert" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="alert" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Alert</h1>
        <p class="content__lead">
          An inline feedback banner that communicates contextual messages to the
          user. Supports four severity types — <code>info</code>,
          <code>success</code>, <code>warning</code>, and <code>error</code> —
          with optional title, description, action slot, and a dismissible close
          button.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Form validation</strong> — Show an error alert above or below a form to summarize validation failures.</li>
          <li><strong>Success confirmation</strong> — Confirm a completed action such as saving settings or processing a payment.</li>
          <li><strong>System warnings</strong> — Warn users about approaching limits, expiring sessions, or degraded service.</li>
          <li><strong>Informational notices</strong> — Surface non-critical context like new features, tips, or update availability.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For transient feedback that auto-dismisses — use <code>NotificationMessage</code> (toast).</li>
          <li>For blocking confirmations requiring a user decision — use <code>NotificationDialog</code>.</li>
          <li>For small inline status indicators — use <code>Status</code>.</li>
          <li>For field-level validation — place helper text directly on the <code>Input</code> component.</li>
        </ul>

        <h3>Type overview</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <Alert type="info" title="Update available" description="Version 2.4 includes bug fixes and performance improvements." />
            <Alert type="success" title="Changes saved" description="Your settings have been updated successfully." />
            <Alert type="warning" title="Storage almost full" description="You have used 90% of your available storage." />
            <Alert type="error" title="Upload failed" description="The file exceeds the 10 MB size limit." />
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Alert is a fixed-layout container — no size prop. Width is determined by its parent.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <Alert type="info" title="Alert title" description="Description text providing additional context." :closable="true" />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-alert</code> (container) ·
              <code>.marks-alert__icon</code> (type icon) ·
              <code>.marks-alert__content</code> (text wrapper) ·
              <code>.marks-alert__title</code> ·
              <code>.marks-alert__description</code> ·
              <code>.marks-alert__close</code> (dismiss)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Pink overlays show internal padding. Red badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Alert</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame" style="margin:40px 48px 40px 16px;">
              <Alert type="info" title="Alert title" description="Description text." :closable="true" style="pointer-events:none;width:360px;" />
              <!-- Padding top badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-28px', left: '50%', transform: 'translateX(-50%)' }">16</div>
              <div class="btn-anatomy__line" :style="{ top: '0', left: '16px', width: 'calc(100% - 32px)', height: '1px' }"></div>
              <!-- Padding left badge -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', left: '-32px', transform: 'translateY(-50%)' }">16</div>
              <div class="btn-anatomy__line" :style="{ left: '0', top: '16px', width: '1px', height: 'calc(100% - 32px)' }"></div>
              <!-- Icon size badge (bottom) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-28px', left: '16px' }">32</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '16px', width: '32px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '16px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '48px', width: '1px', height: '9px' }"></div>
              <!-- Gap badge (icon → content) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-28px', left: '54px' }">12</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '48px', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '48px', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '60px', width: '1px', height: '9px' }"></div>
              <!-- Border-radius badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-28px', right: '-40px' }">r16</div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ top: '0', left: '0', width: '100%', height: '16px' }"></div>
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', width: '100%', height: '16px' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '16px', left: '0', width: '16px', height: 'calc(100% - 32px)' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '16px', right: '0', width: '16px', height: 'calc(100% - 32px)' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>icon size</td><td><code>—</code></td><td>32 × 32px</td></tr>
              <tr><td>icon → content gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>border radius</td><td><code>--marks-radius-16</code></td><td>16px</td></tr>
              <tr><td>border</td><td><code>--marks-color-gray-150</code></td><td>1px solid</td></tr>
              <tr><td>title → description gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>text → actions gap</td><td><code>--marks-spacing-20</code></td><td>20px</td></tr>
              <tr><td>content padding-top</td><td><code>—</code></td><td>4px</td></tr>
              <tr><td>close button</td><td><code>—</code></td><td>20 × 20px</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & all states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Four severity types, each shown with title only, title + description, and closable configurations.</p>

        <div class="variant-section">
          <p class="variant-section__label">Alert types</p>
          <div class="variant-grid">
            <table class="variant-table variant-table--alert">
              <thead>
                <tr>
                  <th></th>
                  <th>Title only</th>
                  <th>Title + description</th>
                  <th>Closable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--a-info">Info</span></td>
                  <td><Alert type="info" title="Update available" /></td>
                  <td><Alert type="info" title="Update available" description="A new version is ready to install." /></td>
                  <td><Alert type="info" title="Update available" :closable="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--a-success">Success</span></td>
                  <td><Alert type="success" title="Changes saved" /></td>
                  <td><Alert type="success" title="Changes saved" description="Your settings were updated." /></td>
                  <td><Alert type="success" title="Changes saved" :closable="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--a-warning">Warning</span></td>
                  <td><Alert type="warning" title="Storage low" /></td>
                  <td><Alert type="warning" title="Storage low" description="90% of storage used." /></td>
                  <td><Alert type="warning" title="Storage low" :closable="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--a-error">Error</span></td>
                  <td><Alert type="error" title="Upload failed" /></td>
                  <td><Alert type="error" title="Upload failed" description="File exceeds the size limit." /></td>
                  <td><Alert type="error" title="Upload failed" :closable="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Dismissal</h3>
        <ul>
          <li>When <code>closable</code> is true, a close button renders in the top-right area of the alert.</li>
          <li>Clicking the close button emits the <code>close</code> event — the parent is responsible for hiding or removing the alert.</li>
          <li>The component does not auto-dismiss. If you need auto-dismiss, implement a timer in the parent and remove the alert after N seconds.</li>
        </ul>

        <h3>Persistence</h3>
        <ul>
          <li><strong>Error</strong> and <strong>warning</strong> alerts should persist until the user resolves the issue or explicitly dismisses them.</li>
          <li><strong>Success</strong> alerts may be auto-dismissed after 5–8 seconds if the action is reversible.</li>
          <li><strong>Info</strong> alerts may persist or auto-dismiss depending on context.</li>
        </ul>

        <h3>Transition</h3>
        <ul>
          <li>The close button color transitions over 200 ms ease on hover.</li>
          <li>For mount/unmount animations, wrap the alert in a Vue <code>&lt;Transition&gt;</code> component.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <span class="comp-demo__group-label">Click the close button to dismiss</span>
            <Alert
              v-if="demoVisible"
              type="success"
              title="Payment confirmed"
              description="Your payment of $49.99 has been processed successfully."
              :closable="true"
              @close="demoVisible = false"
            />
            <button
              v-if="!demoVisible"
              class="reset-btn"
              @click="demoVisible = true"
            >Show alert again</button>
            <span style="font-size:0.8rem;color:#6F6F6F;">
              Visible: <code>{{ demoVisible }}</code>
            </span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title text</h3>
        <ul>
          <li>Use sentence case: "Changes saved", not "Changes Saved".</li>
          <li>Keep it concise — 2–5 words. The title communicates <em>what happened</em>.</li>
          <li>Use past tense for confirmations ("Changes saved") and present tense for ongoing states ("Storage almost full").</li>
        </ul>

        <h3>Description text</h3>
        <ul>
          <li>Optional — only add when the title alone is insufficient.</li>
          <li>One to two sentences max. Explain the <em>consequence</em> or <em>next step</em>, not what the user already knows.</li>
          <li>Avoid repeating the title in the description.</li>
        </ul>

        <h3>Actions</h3>
        <ul>
          <li>Use the <code>actions</code> slot for contextual action buttons (e.g. "Retry", "Undo", "View details").</li>
          <li>Limit to 1–2 actions. If more are needed, link to a separate page.</li>
          <li>Action labels should be specific: "Retry upload" instead of "Try again".</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>ARIA roles</h3>
        <ul>
          <li>For <code>error</code> and <code>warning</code> types, add <code>role="alert"</code> on the container to announce the message to screen readers immediately.</li>
          <li>For <code>info</code> and <code>success</code> types, use <code>aria-live="polite"</code> so the message is announced at the next convenient pause.</li>
        </ul>

        <h3>Close button</h3>
        <ul>
          <li>The close button includes <code>aria-label="Close"</code> by default.</li>
          <li>Focus indicator: <code>2px solid var(--marks-color-black)</code> with <code>2px</code> offset.</li>
        </ul>

        <h3>Color independence</h3>
        <ul>
          <li>Each type uses a unique icon in addition to color — information is never conveyed by color alone.</li>
          <li>Info: <code>PhInfo</code> · Success: <code>PhCheckCircle</code> · Warning: <code>PhWarning</code> · Error: <code>PhXCircle</code></li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Always add <code>role="alert"</code> to error alerts used for form validation. Without it, screen readers will not interrupt to announce the error.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:16px;">
            <span class="comp-demo__group-label">Form validation error</span>
            <Alert type="error" title="Unable to save" description="Please fix the 3 errors highlighted below before submitting." />
          </div>
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:16px;">
            <span class="comp-demo__group-label">Success confirmation</span>
            <Alert type="success" title="Booking confirmed" description="A confirmation email has been sent to your inbox." :closable="true" />
          </div>
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:16px;">
            <span class="comp-demo__group-label">Informational notice</span>
            <Alert type="info" title="Scheduled maintenance" description="The system will be briefly unavailable on Sunday 2:00–4:00 AM." :closable="true" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — wrong type for the message</span>
            <Alert type="info" title="Payment failed" description="Your card was declined." />
            <span style="font-size:0.75rem;color:#FD3860;">Use type="error" for failures</span>
          </div>
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — description repeats the title</span>
            <Alert type="success" title="Changes saved" description="Your changes have been saved." />
            <span style="font-size:0.75rem;color:#FD3860;">Description should add new information</span>
          </div>
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for navigation</span>
            <Alert type="info" title="Click here to view your dashboard" />
            <span style="font-size:0.75rem;color:#FD3860;">Use a link or Button instead</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Props</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'info'</code></td>
              <td>Severity level. One of <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary message text. Rendered in medium weight.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary text below the title. Renders in a lighter color.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">closable</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Shows a close button. Emits <code>close</code> when clicked.</td>
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
              <td><code class="prop-name">close</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Emitted when the close button is clicked. Parent should handle removal.</td>
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
              <td><code class="prop-name">title</code></td>
              <td>title prop value</td>
              <td>Custom title content. Overrides the <code>title</code> prop.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td>description prop value</td>
              <td>Custom description content. Overrides the <code>description</code> prop.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">actions</code></td>
              <td>—</td>
              <td>Action buttons rendered below the text content.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Alert colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <Alert type="info" title="Information" description="This is an informational alert." />
            <Alert type="success" title="Success" description="Operation completed." />
            <Alert type="warning" title="Warning" description="Proceed with caution." />
            <Alert type="error" title="Error" description="Something went wrong." />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;display:flex;flex-direction:column;gap:12px;">
            <Alert type="info" title="Information" description="This is an informational alert." />
            <Alert type="success" title="Success" description="Operation completed." />
            <Alert type="warning" title="Warning" description="Proceed with caution." />
            <Alert type="error" title="Error" description="Something went wrong." />
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
<pre><span class="token-comment">// Basic info alert</span>
<span class="token-tag">&lt;Alert</span>
  <span class="token-attr">type</span>=<span class="token-string">"info"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Update available"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With description</span>
<span class="token-tag">&lt;Alert</span>
  <span class="token-attr">type</span>=<span class="token-string">"success"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Changes saved"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Your settings have been
    updated successfully."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Closable</span>
<span class="token-tag">&lt;Alert</span>
  <span class="token-attr">type</span>=<span class="token-string">"warning"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Storage almost full"</span>
  <span class="token-attr">description</span>=<span class="token-string">"90% of storage used."</span>
  <span class="token-attr">:closable</span>=<span class="token-string">"true"</span>
  <span class="token-attr">@close</span>=<span class="token-string">"handleDismiss"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Error with v-if for dismissal</span>
<span class="token-tag">&lt;Alert</span>
  <span class="token-attr">v-if</span>=<span class="token-string">"showError"</span>
  <span class="token-attr">type</span>=<span class="token-string">"error"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Upload failed"</span>
  <span class="token-attr">description</span>=<span class="token-string">"File exceeds the limit."</span>
  <span class="token-attr">:closable</span>=<span class="token-string">"true"</span>
  <span class="token-attr">@close</span>=<span class="token-string">"showError = false"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With actions slot</span>
<span class="token-tag">&lt;Alert</span>
  <span class="token-attr">type</span>=<span class="token-string">"error"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Connection lost"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#actions</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;Button</span> <span class="token-attr">size</span>=<span class="token-string">"sm"</span><span class="token-tag">&gt;</span>Retry<span class="token-tag">&lt;/Button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Alert&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Alert — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-alert marks-alert--info"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__icon"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__content"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__text-content"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__title"</span><span class="token-tag">&gt;</span>
        Title text
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__description"</span><span class="token-tag">&gt;</span>
        Description text
      <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-alert__actions"</span><span class="token-tag">&gt;</span>
      …
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-alert__close"</span>
    <span class="token-attr">type</span>=<span class="token-string">"button"</span>
    <span class="token-attr">aria-label</span>=<span class="token-string">"Close"</span>
  <span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;svg</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
  <span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-alert
  .marks-alert--info
  .marks-alert--success
  .marks-alert--warning
  .marks-alert--error
  .marks-alert__icon
  .marks-alert__content
  .marks-alert__text-content
  .marks-alert__title
  .marks-alert__description
  .marks-alert__actions
  .marks-alert__close
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Container ───</span>

<span class="token-attr">display</span>: flex;
<span class="token-attr">align-items</span>: flex-start;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">border</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Type backgrounds (radial gradient) ───</span>

<span class="token-comment">// Success</span>
<span class="token-attr">background</span>: radial-gradient(…,
  rgba(<span class="token-number">192</span>,<span class="token-number">243</span>,<span class="token-number">228</span>,<span class="token-number">0.2</span>), …);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-200</span>);

<span class="token-comment">// Warning</span>
<span class="token-attr">background</span>: radial-gradient(…,
  rgba(<span class="token-number">255</span>,<span class="token-number">235</span>,<span class="token-number">210</span>,<span class="token-number">0.2</span>), …);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-orange-200</span>);

<span class="token-comment">// Error</span>
<span class="token-attr">background</span>: radial-gradient(…,
  rgba(<span class="token-number">255</span>,<span class="token-number">228</span>,<span class="token-number">233</span>,<span class="token-number">0.2</span>), …);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-red-200</span>);

<span class="token-comment">// Info</span>
<span class="token-attr">background</span>: radial-gradient(…,
  rgba(<span class="token-number">236</span>,<span class="token-number">236</span>,<span class="token-number">236</span>,<span class="token-number">0.2</span>), …);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);


<span class="token-comment">// ─── Typography ───</span>

<span class="token-comment">// Title</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: $marks-font-weight-medium;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Description</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">line-height</span>: <span class="token-number">150%</span>;


<span class="token-comment">// ─── Close button ───</span>

<span class="token-attr">width</span>:  <span class="token-number">20px</span>;
<span class="token-attr">height</span>: <span class="token-number">20px</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">transition</span>: color <span class="token-number">0.2s</span> ease;

<span class="token-comment">// Hover</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Focus</span>
<span class="token-attr">outline</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
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
  name: 'AlertDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoVisible: true,
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

/* Force hover state for Alert close button */
.force-hover .marks-alert__close { color: var(--marks-color-black) !important; }
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

/* ─── Variant grid ─── */
.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
}

.variant-table--alert td:not(:first-child) {
  min-width: 200px;
  vertical-align: top;
}

/* ─── Type-colored state chips ─── */
.state-chip--a-info {
  background: #D7E7FF;
  color: #2576F7;
}

.state-chip--a-success {
  background: #C0F3E4;
  color: #0E5842;
}

.state-chip--a-warning {
  background: #FFEBD2;
  color: #854900;
}

.state-chip--a-error {
  background: #FFE4E9;
  color: #97001E;
}

/* ─── Reset button (behavior demo) ─── */
.reset-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid var(--marks-color-gray-200, #6F6F6F);
  border-radius: 8px;
  background: var(--marks-color-white, #fff);
  color: var(--marks-color-black, #1a1a1a);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.15s ease;
  align-self: flex-start;
}

.reset-btn:hover {
  border-color: var(--marks-color-black, #1a1a1a);
}
</style>
