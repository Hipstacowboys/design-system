<template>
  <DocHeader active-page="tooltip" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="tooltip" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Tooltip</h1>
        <p class="content__lead">
          A hover-triggered overlay that displays contextual information in up to
          four labeled corners. Renders via <code>Teleport</code> to avoid
          clipping, and repositions dynamically to stay within the viewport.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Contextual hints</strong> — surface supplementary details (e.g. date range, metric breakdown) on hover without cluttering the base UI.</li>
          <li><strong>Data point labels</strong> — attach to chart elements, calendar cells, or table rows to reveal extra dimensions.</li>
          <li><strong>Icon clarification</strong> — explain icon-only buttons or status indicators for sighted users.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the content must be interactive (links, buttons) — use a <code>Dropdown</code> or popover instead.</li>
          <li>If the information is critical and must be visible without hovering — place it inline.</li>
          <li>For form validation messages — use inline error text beneath the field.</li>
          <li>On touch-only surfaces where hover is unreliable — consider a tap-to-reveal pattern.</li>
        </ul>

        <h3>Quick demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Hover the button</span>
            <Tooltip upperLeft="3 bookings" upperRight="$240" bottomLeft="May 12" bottomRight="Mon">
              <template #trigger>
                <button class="demo-trigger">Hover me</button>
              </template>
            </Tooltip>
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The tooltip is a fixed-layout overlay with an arrow, two content rows, and four text slots.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Wrapper &rarr; Teleported tooltip</span>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-tooltip-wrapper</code> (inline trigger container) &middot;
              <code>.marks-tooltip</code> (teleported overlay) &middot;
              <code>.marks-tooltip__content</code> &middot;
              <code>.marks-tooltip__upper</code> / <code>.marks-tooltip__bottom</code> (rows) &middot;
              <code>.marks-tooltip__text</code> &middot;
              <code>.marks-tooltip__dot</code> (separator) &middot;
              <code>.marks-tooltip__arrow</code>
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Fixed padding and radius. Pink overlay shows internal spacing, badges show token values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Tooltip</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <div class="tooltip-anatomy-box">
                <div class="tooltip-anatomy-box__upper">
                  <span>upperLeft</span>
                  <span class="tooltip-anatomy-box__dot"></span>
                  <span>upperRight</span>
                </div>
                <div class="tooltip-anatomy-box__bottom">
                  <span>bottomLeft</span>
                  <span class="tooltip-anatomy-box__dot tooltip-anatomy-box__dot--dim"></span>
                  <span>bottomRight</span>
                </div>
                <div class="tooltip-anatomy-box__arrow"></div>
              </div>
              <!-- Vertical padding badge (left) -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', left: '-32px', transform: 'translateY(-50%)' }">8</div>
              <div class="btn-anatomy__line" :style="{ top: '0', left: '-12px', width: '1px', height: '100%' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', left: '-16px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '10px', left: '-16px', height: '1px', width: '9px' }"></div>
              <!-- Horizontal padding badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">12</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '12px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '12px', width: '1px', height: '9px' }"></div>
              <!-- Radius badge (top-right) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', right: '0' }">12</div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '100%', height: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ bottom: '10px', left: '0', width: '100%', height: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '8px', left: '0', width: '12px', height: 'calc(100% - 26px)' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '8px', right: '0', width: '12px', height: 'calc(100% - 26px)' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding vertical</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>padding horizontal</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>border radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>row gap (upper/bottom)</td><td><code>—</code></td><td>0</td></tr>
              <tr><td>item gap within row</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>dot separator size</td><td><code>—</code></td><td>4 &times; 4 px</td></tr>
              <tr><td>arrow width</td><td><code>—</code></td><td>19px (9.5px per side)</td></tr>
              <tr><td>arrow height</td><td><code>—</code></td><td>10px</td></tr>
              <tr><td>trigger gap</td><td><code>—</code></td><td>10px</td></tr>
              <tr><td>box shadow</td><td><code>—</code></td><td>0 14px 30px rgba(0,0,0,0.15)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; corner positions</h2>
        <p class="comp-section-desc">Each of the four text slots can be used independently or in combination.</p>

        <div class="variant-section">
          <p class="variant-section__label">Corner label combinations</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Combination</th>
                  <th>Preview (hover)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">All four</span></td>
                  <td>
                    <Tooltip upperLeft="3 bookings" upperRight="$240" bottomLeft="May 12" bottomRight="Mon">
                      <template #trigger><button class="demo-trigger demo-trigger--sm">All corners</button></template>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">Upper only</span></td>
                  <td>
                    <Tooltip upperLeft="Revenue" upperRight="$1,200">
                      <template #trigger><button class="demo-trigger demo-trigger--sm">Upper row</button></template>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">Bottom only</span></td>
                  <td>
                    <Tooltip bottomLeft="Updated 2 h ago" bottomRight="Draft">
                      <template #trigger><button class="demo-trigger demo-trigger--sm">Bottom row</button></template>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">Single value</span></td>
                  <td>
                    <Tooltip upperLeft="42 users online">
                      <template #trigger><button class="demo-trigger demo-trigger--sm">One slot</button></template>
                    </Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Arrow alignment</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Center</span></td>
                  <td><code>.marks-tooltip--arrow-center</code></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Left</span></td>
                  <td><code>.marks-tooltip--arrow-left</code></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Right</span></td>
                  <td><code>.marks-tooltip--arrow-right</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.8rem;color:#6F6F6F;margin-top:8px;">
            Arrow position is computed automatically based on viewport overflow. No prop needed.
          </p>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Hover trigger</h3>
        <ul>
          <li><code>@mouseenter</code> on the wrapper shows the tooltip; <code>@mouseleave</code> hides it.</li>
          <li>The tooltip is not toggled — it appears on enter and disappears on leave with no click required.</li>
          <li>Show/hide uses a Vue <code>&lt;Transition&gt;</code>: 200 ms ease-out in, 150 ms ease-in out, with a subtle upward slide.</li>
        </ul>

        <h3>Teleport positioning</h3>
        <ul>
          <li>The overlay is teleported to <code>&lt;body&gt;</code> via Vue's <code>&lt;Teleport&gt;</code>, avoiding overflow clipping from parent containers.</li>
          <li>Position is calculated on show and updated on <code>scroll</code> (capture phase) and <code>resize</code>.</li>
          <li>Default placement: <strong>above</strong> the trigger, centered horizontally, with a 10 px gap.</li>
          <li>If there's not enough room above, the tooltip flips <strong>below</strong> the trigger.</li>
        </ul>

        <h3>Arrow repositioning</h3>
        <ul>
          <li>If the tooltip would overflow left, it snaps to the trigger's left edge and the arrow shifts to <code>left: 20px</code>.</li>
          <li>If it would overflow right, it aligns to the trigger's right edge with the arrow at <code>right: 20px</code>.</li>
          <li>Otherwise the arrow stays centered: <code>left: calc(50% - 9.5px)</code>.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Hover to see tooltip</span>
            <Tooltip upperLeft="Revenue" upperRight="$1,200" bottomLeft="This month" bottomRight="Jan">
              <template #trigger>
                <button class="demo-trigger">Hover me</button>
              </template>
            </Tooltip>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Upper row only</span>
            <Tooltip upperLeft="Status" upperRight="Active">
              <template #trigger>
                <button class="demo-trigger">Status info</button>
              </template>
            </Tooltip>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Short text</h3>
        <ul>
          <li>Keep each slot to 1–3 words. The tooltip is not a paragraph container.</li>
          <li>Use the upper row for primary data (e.g. metric name + value), and the bottom row for secondary context (e.g. date, category).</li>
        </ul>

        <h3>Corner labels</h3>
        <ul>
          <li><code>upperLeft</code> — primary label or category name.</li>
          <li><code>upperRight</code> — primary value or count.</li>
          <li><code>bottomLeft</code> — secondary context (date, source).</li>
          <li><code>bottomRight</code> — secondary detail (day, status).</li>
          <li>Omitted slots render as empty strings — the dot separator still appears but with empty text. Hide entire rows by leaving both slots in a row empty.</li>
        </ul>

        <h3>Formatting</h3>
        <ul>
          <li>Use sentence case for labels: "Total revenue", not "Total Revenue".</li>
          <li>Format numbers with locale-appropriate separators: "$1,200" not "$1200".</li>
          <li>Avoid line breaks — the tooltip is designed for single-line rows.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>ARIA pattern</h3>
        <ul>
          <li>Add <code>aria-describedby</code> on the trigger element pointing to the tooltip's <code>id</code>. This associates the supplementary text with the control for screen readers.</li>
          <li>The tooltip itself should carry <code>role="tooltip"</code> so assistive tech announces it correctly.</li>
        </ul>

        <h3>Keyboard focus trigger</h3>
        <ul>
          <li>Currently the tooltip fires on <code>mouseenter</code>/<code>mouseleave</code> only. For keyboard accessibility, also show the tooltip on <code>focus</code> and hide on <code>blur</code> of the trigger element.</li>
          <li>Ensure the trigger is focusable — use a <code>&lt;button&gt;</code> or add <code>tabindex="0"</code>.</li>
        </ul>

        <h3>Motion &amp; timing</h3>
        <ul>
          <li>The 200 ms entrance and 150 ms exit are short enough to not impede navigation.</li>
          <li>Respect <code>prefers-reduced-motion</code> by disabling the translateY slide when the user prefers reduced motion.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Always pair the tooltip with <code>aria-describedby</code> on the trigger. Without it, screen readers have no way to access the tooltip content.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Calendar day cell</span>
            <Tooltip upperLeft="3 bookings" upperRight="$720" bottomLeft="May 14" bottomRight="Wed">
              <template #trigger>
                <div class="demo-cell">14</div>
              </template>
            </Tooltip>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Dashboard metric</span>
            <Tooltip upperLeft="Conversion rate" upperRight="4.2%">
              <template #trigger>
                <div class="demo-cell demo-cell--wide">4.2%</div>
              </template>
            </Tooltip>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Icon button</span>
            <Tooltip upperLeft="Edit booking">
              <template #trigger>
                <button class="demo-trigger demo-trigger--icon" aria-label="Edit booking">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
              </template>
            </Tooltip>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — long paragraph text</span>
            <Tooltip upperLeft="This is a very long tooltip text that describes the entire feature in detail and should be placed inline instead">
              <template #trigger><button class="demo-trigger demo-trigger--sm">Too long</button></template>
            </Tooltip>
            <span style="font-size:0.75rem;color:#FD3860;">Tooltips are for short hints, not paragraphs</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — critical info hidden</span>
            <Tooltip upperLeft="Required field">
              <template #trigger><button class="demo-trigger demo-trigger--sm">Error?</button></template>
            </Tooltip>
            <span style="font-size:0.75rem;color:#FD3860;">Validation errors belong inline, not in tooltips</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — no aria-describedby</span>
            <span style="font-size:0.75rem;color:#FD3860;">Trigger must reference tooltip for screen readers</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Tooltip</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">upperLeft</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text for the upper-left corner of the tooltip.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">upperRight</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text for the upper-right corner of the tooltip.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">bottomLeft</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text for the bottom-left corner (secondary row).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">bottomRight</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Text for the bottom-right corner (secondary row).</td>
            </tr>
          </tbody>
        </table>

        <h3>Slots</h3>
        <table class="props-table">
          <thead>
            <tr><th>Slot</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">#trigger</code></td>
              <td>The element that activates the tooltip on hover. Must be a single root element.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events</h3>
        <table class="props-table">
          <thead>
            <tr><th colspan="3">None</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td colspan="3" style="color:#6F6F6F;">The tooltip does not emit any events. Visibility is managed internally via hover state.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming & dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Tooltip colors invert automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Default (dark background)</span>
            <Tooltip upperLeft="Bookings" upperRight="12" bottomLeft="Today" bottomRight="Mon">
              <template #trigger>
                <button class="demo-trigger">Light context</button>
              </template>
            </Tooltip>
          </div>
        </div>
        <p style="font-size:0.8rem;color:#6F6F6F;">
          In light mode the tooltip uses <code>--marks-color-black</code> background with <code>--marks-color-white</code> text — appearing as a dark overlay.
        </p>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Inverted tokens</span>
            <Tooltip upperLeft="Bookings" upperRight="12" bottomLeft="Today" bottomRight="Mon">
              <template #trigger>
                <button class="demo-trigger demo-trigger--dark">Dark context</button>
              </template>
            </Tooltip>
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
            Note: because the tooltip is teleported to the body, dark-mode token overrides must be applied globally or on the body element to affect tooltip colors.
          </p>
        </div>

        <h3>Token mapping</h3>
        <table class="anatomy-table">
          <thead><tr><th>Element</th><th>Light token</th><th>Dark token</th></tr></thead>
          <tbody>
            <tr><td>Background</td><td><code>--marks-color-black</code> (#1a1a1a)</td><td><code>--marks-color-black</code> (#FFFFFF)</td></tr>
            <tr><td>Upper text</td><td><code>--marks-color-white</code> (#FFFFFF)</td><td><code>--marks-color-white</code> (#000000)</td></tr>
            <tr><td>Bottom text</td><td><code>--marks-color-gray-200</code> (#6F6F6F)</td><td><code>--marks-color-gray-200</code> (#6F6F6F)</td></tr>
            <tr><td>Upper dot</td><td><code>--marks-color-white</code></td><td><code>--marks-color-white</code></td></tr>
            <tr><td>Bottom dot</td><td><code>--marks-color-gray-200</code></td><td><code>--marks-color-gray-200</code></td></tr>
            <tr><td>Arrow</td><td><code>--marks-color-black</code></td><td><code>--marks-color-black</code></td></tr>
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
            v-text="tab.label"></button>
          </div>
          <div class="code-toolbar">
            <button class="code-toolbar__copy" @click="copyCode">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span v-text="copyLabel"></span>
            </button>
          </div>

          <!-- ── Vue tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'vue' }">
<pre><span class="token-comment">// Basic tooltip with all four corners</span>
<span class="token-tag">&lt;Tooltip</span>
  <span class="token-attr">upperLeft</span>=<span class="token-string">"3 bookings"</span>
  <span class="token-attr">upperRight</span>=<span class="token-string">"$240"</span>
  <span class="token-attr">bottomLeft</span>=<span class="token-string">"May 12"</span>
  <span class="token-attr">bottomRight</span>=<span class="token-string">"Mon"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button&gt;</span>Hover me<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Tooltip&gt;</span>


<span class="token-comment">// Upper row only</span>
<span class="token-tag">&lt;Tooltip</span>
  <span class="token-attr">upperLeft</span>=<span class="token-string">"Revenue"</span>
  <span class="token-attr">upperRight</span>=<span class="token-string">"$1,200"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span&gt;</span>Hover target<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Tooltip&gt;</span>


<span class="token-comment">// Single label (icon clarification)</span>
<span class="token-tag">&lt;Tooltip</span>
  <span class="token-attr">upperLeft</span>=<span class="token-string">"Edit booking"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">aria-label</span>=<span class="token-string">"Edit"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;EditIcon /&gt;</span>
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Tooltip&gt;</span>


<span class="token-comment">// With aria-describedby for accessibility</span>
<span class="token-tag">&lt;Tooltip</span>
  <span class="token-attr">upperLeft</span>=<span class="token-string">"Total revenue this month"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span>
      <span class="token-attr">tabindex</span>=<span class="token-string">"0"</span>
      <span class="token-attr">aria-describedby</span>=<span class="token-string">"tooltip-rev"</span>
    <span class="token-tag">&gt;</span>$12,400<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Tooltip&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Trigger wrapper (in-place) --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button&gt;</span>Hover me<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>

<span class="token-comment">&lt;!-- Teleported to body --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip marks-tooltip--arrow-center"</span>
  <span class="token-attr">style</span>=<span class="token-string">"position:fixed; left:…; top:…; z-index:9999"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__content"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__upper"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__text"</span><span class="token-tag">&gt;</span>3 bookings<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__dot"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__text"</span><span class="token-tag">&gt;</span>$240<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__bottom"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__text marks-tooltip__text--secondary"</span><span class="token-tag">&gt;</span>May 12<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__dot marks-tooltip__dot--secondary"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__text marks-tooltip__text--secondary"</span><span class="token-tag">&gt;</span>Mon<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-tooltip__arrow"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>

<span class="token-comment">&lt;!-- BEM classes:
  .marks-tooltip-wrapper  .marks-tooltip
  .marks-tooltip--arrow-left / --arrow-right / --arrow-center
  .marks-tooltip__content  .marks-tooltip__upper  .marks-tooltip__bottom
  .marks-tooltip__text  .marks-tooltip__text--secondary
  .marks-tooltip__dot   .marks-tooltip__dot--secondary
  .marks-tooltip__arrow
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Tooltip container ───</span>

<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">padding</span>:
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">box-shadow</span>:
  <span class="token-number">0</span> <span class="token-number">14px</span> <span class="token-number">30px</span>
  rgba(<span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0.15</span>);


<span class="token-comment">// ─── Upper row ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Bottom row ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Dot separator ───</span>

<span class="token-attr">width</span>:  <span class="token-number">4px</span>;
<span class="token-attr">height</span>: <span class="token-number">4px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);

<span class="token-comment">// Secondary dot</span>
<span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Arrow ───</span>

<span class="token-attr">border-left</span>:   <span class="token-number">9.5px</span> solid transparent;
<span class="token-attr">border-right</span>:  <span class="token-number">9.5px</span> solid transparent;
<span class="token-attr">border-top</span>:    <span class="token-number">10px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Center (default)</span>
<span class="token-attr">left</span>: calc(<span class="token-number">50%</span> - <span class="token-number">9.5px</span>);

<span class="token-comment">// Left-aligned</span>
<span class="token-attr">left</span>: <span class="token-number">20px</span>;

<span class="token-comment">// Right-aligned</span>
<span class="token-attr">right</span>: <span class="token-number">20px</span>;


<span class="token-comment">// ─── Transition ───</span>

<span class="token-comment">// Enter</span>
<span class="token-attr">transition</span>: all <span class="token-number">0.2s</span> ease-out;

<span class="token-comment">// Leave</span>
<span class="token-attr">transition</span>: all <span class="token-number">0.15s</span> ease-in;

<span class="token-comment">// Initial / exit state</span>
<span class="token-attr">opacity</span>: <span class="token-number">0</span>;
<span class="token-attr">transform</span>: translateY(<span class="token-number">-8px</span>);</pre>
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
  name: 'TooltipDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
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

/* ─── Demo triggers ─── */
.demo-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--marks-color-gray-500, #1a1a1a);
  background: var(--marks-color-gray-400, #ECECEC);
  border: 1px solid var(--marks-color-gray-350, #D1D1D1);
  border-radius: var(--marks-radius-8, 8px);
  cursor: pointer;
}

.demo-trigger:hover { background: var(--marks-color-gray-350, #D1D1D1); }
.demo-trigger--sm { padding: 4px 10px; font-size: 12px; }
.demo-trigger--icon { padding: 6px; line-height: 0; }

.demo-trigger--dark {
  background: var(--marks-color-gray-100, #2A2A2A);
  color: var(--marks-color-gray-500, #FAFAFA);
  border-color: var(--marks-color-gray-200, #6F6F6F);
}

.demo-cell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  font-size: 14px; font-weight: 600;
  color: var(--marks-color-gray-500, #1a1a1a);
  background: var(--marks-color-gray-400, #ECECEC);
  border: 1px solid var(--marks-color-gray-350, #D1D1D1);
  border-radius: var(--marks-radius-8, 8px);
}

.demo-cell--wide { width: auto; padding: 0 12px; }

/* ─── Anatomy visualization ─── */
.anatomy-block { margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC); }
.anatomy-block:last-of-type { border-bottom: none; margin-bottom: 24px; padding-bottom: 0; }
.anatomy-block__label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--marks-color-gray-300); margin-bottom: 20px; }

.btn-anatomy__frame { position: relative; display: inline-flex; margin: 32px 40px; }
.btn-anatomy__pad { position: absolute; background: rgba(253, 56, 96, 0.12); pointer-events: none; }
.btn-anatomy__badge { position: absolute; background: #FD3860; color: #fff; font-size: 10px; font-family: 'SF Mono', 'Fira Code', monospace; font-weight: 600; line-height: 1; padding: 3px 5px; border-radius: 3px; white-space: nowrap; pointer-events: none; }
.btn-anatomy__line { position: absolute; background: #FD3860; pointer-events: none; }
.btn-anatomy__tick { position: absolute; background: #FD3860; pointer-events: none; }

.anatomy-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
.anatomy-table th { text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--marks-color-gray-300, #8D8D8D); padding: 6px 12px 6px 0; border-bottom: 2px solid var(--marks-color-gray-400, #ECECEC); }
.anatomy-table td { padding: 5px 12px 5px 0; border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC); vertical-align: baseline; }
.anatomy-table td:first-child { color: var(--marks-color-gray-300, #8D8D8D); white-space: nowrap; }
.anatomy-table td:last-child { font-family: 'SF Mono', 'Fira Code', monospace; font-size: 12px; color: var(--marks-color-gray-300, #8D8D8D); }
.anatomy-table code { font-family: 'SF Mono', 'Fira Code', monospace; font-size: 12px; color: var(--marks-color-black, #1a1a1a); }

/* ─── Tooltip anatomy mock ─── */
.tooltip-anatomy-box { background: #1a1a1a; border-radius: 12px; padding: 8px 12px; display: flex; flex-direction: column; position: relative; min-width: 160px; }
.tooltip-anatomy-box__upper, .tooltip-anatomy-box__bottom { display: flex; align-items: center; gap: 8px; }
.tooltip-anatomy-box__upper { font-size: 13px; font-weight: 500; color: #fff; }
.tooltip-anatomy-box__bottom { font-size: 11px; color: #6F6F6F; }
.tooltip-anatomy-box__dot { width: 4px; height: 4px; border-radius: 50%; background: #fff; flex-shrink: 0; }
.tooltip-anatomy-box__dot--dim { background: #6F6F6F; }
.tooltip-anatomy-box__arrow { width: 0; height: 0; position: absolute; bottom: -10px; left: calc(50% - 9.5px); border-left: 9.5px solid transparent; border-right: 9.5px solid transparent; border-top: 10px solid #1a1a1a; }

.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
}
</style>
