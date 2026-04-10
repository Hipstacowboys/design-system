<template>
  <header class="header">
    <a href="/" class="header__logo">
      <span class="header__logo-mark">M</span>
      Design System
    </a>
    <nav class="header__nav">
      <a href="/" class="header__nav-link">Foundations</a>
      <a href="/documentation/button.html" class="header__nav-link is-active">Components</a>
    </nav>
  </header>

  <div class="layout">

    <!-- ─── Left nav — component switcher ─── -->
    <nav class="layout__nav">
      <div class="nav">
        <section class="nav__section">
          <span class="nav__section-title">Components</span>
          <ul class="nav__list">
            <li class="nav__item"><a href="/documentation/button.html" class="nav__link is-active">Button</a></li>
            <li class="nav__item"><a href="/documentation/toggle.html" class="nav__link">Toggle</a></li>
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
        <h1>Button</h1>
        <p class="content__lead">
          Buttons trigger actions. The system provides four variants — <strong>Primary</strong>,
          <strong>Secondary</strong>, <strong>Line</strong>, and <strong>Ghost</strong> — each in
          three sizes with loading, disabled, and icon-only modes. Built as Vue components:
          <code>ButtonPrimary</code>, <code>ButtonSecondary</code>, <code>ButtonLine</code>,
          <code>ButtonGhost</code>.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use each variant</h3>
        <ul>
          <li><strong>Primary</strong> — The single most important action on a page or section. Solid dark fill draws maximum attention. Limit to one per visible area.</li>
          <li><strong>Secondary</strong> — Supporting actions that sit alongside a primary. Gray fill, lower visual weight.</li>
          <li><strong>Line</strong> — Outlined alternative for secondary or tertiary actions. Transparent background with a visible border.</li>
          <li><strong>Ghost</strong> — Minimal footprint for inline or toolbar actions. No background, no border until hovered.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>Navigation between pages — use a link or <code>&lt;a&gt;</code> tag instead.</li>
          <li>Toggling a binary state — use <code>Toggle</code> or <code>Checkbox</code>.</li>
          <li>Opening a dropdown menu — use <code>Select</code> or <code>Dropdown</code>.</li>
          <li>Icon-only actions at very small sizes — use <code>IconButton</code> for circular hit targets.</li>
        </ul>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Every button is composed of the same structural slots regardless of variant. The slot layout stays consistent — only colors and borders change between variants.</p>

        <h3>Structural slots</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%">
            <span class="comp-demo__group-label">Slot layout (Primary shown)</span>
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
              <ButtonPrimary size="large" text="Confirm booking" :left-icon="PhArrowLeft" :right-icon="PhArrowRight" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>leadingText</code> (Primary only) · <code>leftIcon</code> · <code>text</code> (or slot) · <code>rightIcon</code>
            </div>
          </div>
        </div>

        <h3>Spacing &amp; padding visualization</h3>
        <p class="comp-section-desc">Each size is shown with padding (pink), content box (dashed blue), and measurement badges. The real component is rendered inside the anatomy frame.</p>

        <div v-for="sz in sizeSpecs" :key="sz.name" class="anatomy-block">
          <span class="anatomy-block__label">{{ sz.name.toUpperCase() }}</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <ButtonPrimary :size="sz.name" text="Action" :left-icon="PhArrowLeft" :right-icon="PhArrowRight" style="pointer-events:none; min-width: 240px; justify-content: space-between;" />
              <!-- Content box outline -->
              <div class="btn-anatomy__outline" :style="{ inset: sz.padV + 'px' }"></div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ inset: '0 auto 0 0', width: sz.padH + 'px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '0 0 0 auto', width: sz.padH + 'px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '0 ' + sz.padH + 'px auto ' + sz.padH + 'px', height: sz.padV + 'px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto ' + sz.padH + 'px 0 ' + sz.padH + 'px', height: sz.padV + 'px' }"></div>
              <!-- Left padding badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">{{ sz.padH }}</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: sz.padH + 'px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: sz.padH + 'px', width: '1px', height: '9px' }"></div>
              <!-- Right padding badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', right: '0' }">{{ sz.padH }}</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', right: '0', width: sz.padH + 'px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', right: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', right: sz.padH + 'px', width: '1px', height: '9px' }"></div>
              <!-- Vertical padding badge -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-24px', transform: 'translateY(-50%)' }">{{ sz.padV }}</div>
              <div class="btn-anatomy__line" :style="{ top: '0', right: '-10px', width: '1px', height: sz.padV + 'px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: sz.padV + 'px', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__line" :style="{ bottom: '0', right: '-10px', width: '1px', height: sz.padV + 'px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '0', right: '-14px', height: '1px', width: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: sz.padV + 'px', right: '-14px', height: '1px', width: '9px' }"></div>
              <!-- Gap badge -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: (sz.padH + sz.icon + 2) + 'px' }">{{ sz.gap }}</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: (sz.padH + sz.icon + 2) + 'px', width: sz.gap + 'px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: (sz.padH + sz.icon + 2) + 'px', width: '1px', height: '9px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead>
              <tr><th>Property</th><th>Token</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>padding-block</td><td><code>{{ sz.padVToken }}</code></td><td>{{ sz.padV }}px</td></tr>
              <tr><td>padding-inline</td><td><code>{{ sz.padHToken }}</code></td><td>{{ sz.padH }}px</td></tr>
              <tr><td>gap</td><td><code>{{ sz.gapToken }}</code></td><td>{{ sz.gap }}px</td></tr>
              <tr><td>radius</td><td><code>{{ sz.radiusToken }}</code></td><td>{{ sz.radiusVal }}</td></tr>
              <tr><td>font</td><td>—</td><td>{{ sz.font }}</td></tr>
              <tr><td>icon</td><td>—</td><td>{{ sz.icon }}px · {{ sz.iconWeight }}</td></tr>
              <tr><td>icon-only min</td><td>—</td><td>{{ sz.iconOnlyMin }}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout--info">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </span>
          <span>Phosphor icon weight rule: <strong>bold</strong> at ≤ 19 px (small), <strong>regular</strong> at ≥ 20 px (medium &amp; large). The component handles this automatically via <code>iconWeight</code> computed prop.</span>
        </div>

        <h3>Live sizes — all four variants</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" v-for="variant in variants" :key="variant.name">
            <span class="comp-demo__group-label">{{ variant.name }}</span>
            <div class="comp-demo__row">
              <div class="comp-demo__col" v-for="sz in sizes" :key="sz">
                <component :is="variant.component" :size="sz" text="Action" />
                <span class="comp-demo__size-label">{{ sz.toUpperCase() }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Every button type shown with all variant configurations across all interactive states. Medium size used throughout.</p>

        <div v-for="bt in variants" :key="'states-'+bt.name" class="variant-section">
          <p class="variant-section__label">{{ bt.name }}</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th v-for="vc in variantCols" :key="vc.label">{{ vc.label }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="st in stateRows" :key="st.name">
                  <td><span class="state-chip" :class="'state-chip--' + st.chip">{{ st.name }}</span></td>
                  <td v-for="vc in variantCols" :key="vc.label">
                    <div :class="st.forceClass || ''">
                      <component
                        :is="bt.component"
                        size="medium"
                        v-bind="vc.props"
                        :disabled="st.disabled || false"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Click handling</h3>
        <ul>
          <li>All buttons emit a <code>click</code> event. The handler is suppressed when <code>disabled</code> or <code>loading</code> is <code>true</code>.</li>
          <li>The native <code>disabled</code> attribute is set when either prop is active, preventing focus and form submission.</li>
          <li>All buttons render as <code>&lt;button type="button"&gt;</code> to avoid accidental form submission.</li>
        </ul>

        <h3>Loading state</h3>
        <ul>
          <li>Set <code>:loading="true"</code> to replace content with a spinner animation.</li>
          <li><code>loadingIconPosition</code> controls where the spinner appears: <code>"only"</code> (replaces all content, default), <code>"left"</code>, or <code>"right"</code> (keeps text visible).</li>
          <li>Loading buttons get <code>pointer-events: none</code> and <code>cursor: not-allowed</code> — they cannot be clicked or focused.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>Background becomes <code>--marks-color-gray-100</code>, text becomes <code>--marks-color-gray-200</code>.</li>
          <li>Box shadows and borders are removed.</li>
          <li>Cursor changes to <code>not-allowed</code>.</li>
        </ul>

        <h3>Focus</h3>
        <ul>
          <li>All variants show a <code>2px solid var(--marks-color-primary-solid)</code> outline on <code>:focus-visible</code> with <code>2px</code> offset.</li>
          <li>Focus is only visible via keyboard navigation, not mouse clicks.</li>
        </ul>

        <h3>Live demo — loading toggle</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click to toggle loading</span>
            <div class="comp-demo__row">
              <ButtonPrimary size="medium" text="Submit" :loading="demoLoading" loading-icon-position="left" @click="toggleLoading" />
              <ButtonSecondary size="medium" text="Cancel" :disabled="demoLoading" />
            </div>
            <p class="comp-demo__hint">The primary button toggles its loading state. The secondary is disabled while loading.</p>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Labels</h3>
        <ul>
          <li>Use sentence case: "Book now", not "Book Now" or "BOOK NOW".</li>
          <li>Start with a verb: "Confirm", "Add item", "Continue".</li>
          <li>Keep labels to 1–3 words. If you need more, reconsider the flow.</li>
          <li>Avoid generic labels like "Submit", "OK", or "Click here". Be specific: "Save changes", "Add to cart".</li>
        </ul>

        <h3>Icons</h3>
        <ul>
          <li>Icons are optional. Use them to reinforce meaning, not decorate.</li>
          <li>Left icon: indicates the object of the action (e.g., <code>PhPlus</code> for "Add item").</li>
          <li>Right icon: indicates direction or continuation (e.g., <code>PhArrowRight</code> for "Continue").</li>
          <li>Icon-only buttons <strong>must</strong> have an <code>aria-label</code> attribute.</li>
          <li>Icons are Phosphor Vue components — pass them as a component reference, not a string. They must be added to the component's <code>data()</code> for reactivity.</li>
        </ul>

        <h3>leadingText (Primary only)</h3>
        <ul>
          <li>Used for price or secondary context on the left side (e.g., "59.00 USD").</li>
          <li>Only available on <code>ButtonPrimary</code>.</li>
          <li>The leading text is pushed to the left via <code>margin-right: auto</code>.</li>
        </ul>

        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">leadingText example</span>
            <ButtonPrimary size="large" leading-text="59.00 USD" text="Continue" :right-icon="PhArrowRight" />
          </div>
        </div>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <div class="a11y-callout">
          <p class="a11y-callout__title">Built-in accessibility</p>
          <p>All button variants render as native <code>&lt;button&gt;</code> elements with <code>type="button"</code>.
          This gives you keyboard activation (Enter &amp; Space), screen-reader semantics, and proper disabled state
          handling — no extra ARIA needed for standard usage.</p>
        </div>

        <h3>Keyboard</h3>
        <ul>
          <li><strong>Tab</strong> — moves focus to the button.</li>
          <li><strong>Enter / Space</strong> — activates the button.</li>
          <li>Disabled and loading buttons are removed from tab order via <code>disabled</code> attribute.</li>
        </ul>

        <h3>ARIA</h3>
        <ul>
          <li>Icon-only buttons: add <code>aria-label</code> describing the action.</li>
          <li>Toggle buttons: add <code>aria-pressed="true|false"</code> on the parent.</li>
          <li>Loading buttons: consider adding <code>aria-busy="true"</code> and a live region to announce the loading state.</li>
        </ul>

        <h3>Contrast &amp; target size</h3>
        <ul>
          <li>Primary (light mode): white text <code>#FFFFFF</code> on black background <code>#000000</code> — contrast ratio ∞:1. Passes WCAG AAA.</li>
          <li>Disabled: <code>#D1D1D1</code> text on <code>#FAFAFA</code> — intentionally low contrast to communicate unavailability. This is acceptable per WCAG (disabled controls are exempt).</li>
          <li>Minimum touch target: <strong>32 × 32</strong> (small icon-only), <strong>50 × 50</strong> (medium/large icon-only). All exceed WCAG 2.2 minimum of 24 × 24.</li>
        </ul>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Do</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Primary + Secondary pair</span>
            <div class="comp-demo__row">
              <ButtonSecondary size="medium" text="Cancel" />
              <ButtonPrimary size="medium" text="Confirm booking" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Icon + text for clarity</span>
            <div class="comp-demo__row">
              <ButtonPrimary size="medium" text="Add item" :left-icon="PhPlus" />
              <ButtonLine size="medium" text="Continue" :right-icon="PhArrowRight" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Ghost for toolbar</span>
            <div class="comp-demo__row" style="gap:4px">
              <ButtonGhost size="small" :icon-only="true" :left-icon="PhPencilSimple" aria-label="Edit" />
              <ButtonGhost size="small" :icon-only="true" :left-icon="PhTrash" aria-label="Delete" />
              <ButtonGhost size="small" :icon-only="true" :left-icon="PhCopy" aria-label="Duplicate" />
            </div>
          </div>
        </div>

        <h3>Don't</h3>
        <div class="comp-demo" style="border-color: var(--color-error, #dc2626);">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Multiple primaries — dilutes hierarchy</span>
            <div class="comp-demo__row">
              <ButtonPrimary size="medium" text="Save" />
              <ButtonPrimary size="medium" text="Publish" />
              <ButtonPrimary size="medium" text="Export" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Vague labels</span>
            <div class="comp-demo__row">
              <ButtonPrimary size="medium" text="OK" />
              <ButtonSecondary size="medium" text="Click here" />
            </div>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Icon-only without aria-label</span>
            <div class="comp-demo__row">
              <ButtonGhost size="small" :icon-only="true" :left-icon="PhPlus" />
              <span style="font-size:0.75rem;color:var(--color-error, #dc2626)">← Missing aria-label. Screen readers will announce nothing.</span>
            </div>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Shared props (all four variants)</h3>
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">size</code></td>
              <td><code class="prop-type">'small' | 'medium' | 'large'</code></td>
              <td><code class="prop-default">'medium'</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Button dimensions. See size/token table above.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">text</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Label text. Can also use the default slot for richer content.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">leftIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Phosphor icon component rendered before the text. Pass as a component reference.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">rightIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Phosphor icon component rendered after the text.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">iconOnly</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Hides the text, renders only the icon with square padding. Always pair with <code>aria-label</code>.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Prevents interaction. Sets native <code>disabled</code> attribute.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">loading</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Shows spinner animation. Also disables the button.</td></tr>

            <tr class="props-row__meta">
              <td><code class="prop-name">loadingIconPosition</code></td>
              <td><code class="prop-type">'left' | 'right' | 'only'</code></td>
              <td><code class="prop-default">'only'</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Where the loading spinner appears. <code>'only'</code> replaces all content, <code>'left'</code>/<code>'right'</code> keeps the text visible.</td></tr>
          </tbody>
        </table>

        <h3>Primary-only prop</h3>
        <table class="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">leadingText</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="3">Left-aligned secondary text (e.g., a price). Pushes main text/icon to the right. Only available on <code>ButtonPrimary</code>.</td></tr>
          </tbody>
        </table>

        <h3>Events</h3>
        <table class="props-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">click</code></td>
              <td><code class="prop-type">MouseEvent</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="2">Emitted on click. Suppressed when <code>disabled</code> or <code>loading</code>.</td></tr>
          </tbody>
        </table>

        <h3>Computed properties (internal)</h3>
        <table class="props-table">
          <thead>
            <tr>
              <th>Computed</th>
              <th>Logic</th>
            </tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">iconSize</code></td>
              <td><code class="prop-type">small → 16, medium → 20, large → 20</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="2">Pixel size passed to the Phosphor icon component.</td></tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">iconWeight</code></td>
              <td><code class="prop-type">iconSize ≤ 19 → 'bold', else 'regular'</code></td>
            </tr>
            <tr class="props-row__desc"><td colspan="2">Weight passed to the Phosphor icon. Ensures legibility at small sizes.</td></tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">
          All button styles reference <code>--marks-color-*</code> CSS custom properties. In dark mode
          (<code>[data-theme="dark"]</code>), the token values are remapped — notably <code>--marks-color-black</code>
          becomes <code>#FFFFFF</code> and <code>--marks-color-white</code> becomes <code>#000000</code>. No extra
          component code is needed; the buttons adapt automatically.
        </p>

        <h3>Token mapping (key values)</h3>
        <table class="props-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Light</th>
              <th>Dark</th>
            </tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">--marks-color-black</code></td>
              <td><code class="prop-type">#000000</code></td>
              <td><code class="prop-type">#FFFFFF</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">--marks-color-white</code></td>
              <td><code class="prop-type">#FFFFFF</code></td>
              <td><code class="prop-type">#000000</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">--marks-color-gray-100</code></td>
              <td><code class="prop-type">#FAFAFA</code></td>
              <td><code class="prop-type">#2A2A2A</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">--marks-color-gray-200</code></td>
              <td><code class="prop-type">#D1D1D1</code></td>
              <td><code class="prop-type">#6F6F6F</code></td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">--marks-color-gray-500</code></td>
              <td><code class="prop-type">#2A2A2A</code></td>
              <td><code class="prop-type">#FAFAFA</code></td>
            </tr>
          </tbody>
        </table>

        <h3>Live dark mode preview</h3>
        <p class="comp-section-desc">
          All <code>--marks-color-*</code> tokens are overridden on the container, matching the approach
          used in the comparison page. Primary's <code>background: var(--marks-color-black)</code> resolves
          to <code>#FFFFFF</code> on the dark surface.
        </p>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" v-for="variant in variants" :key="'dark-'+variant.name">
            <span class="comp-demo__group-label" style="color: var(--marks-color-gray-300);">{{ variant.name }}</span>
            <div class="comp-demo__row">
              <component :is="variant.component" size="large" text="Action" />
              <component :is="variant.component" size="medium" text="Action" />
              <component :is="variant.component" size="small" text="Action" />
              <component :is="variant.component" size="small" :disabled="true" text="Disabled" />
              <component :is="variant.component" size="small" :loading="true" />
            </div>
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

        <h3>Usage</h3>
        <p>Wrap any ancestor element with <code>data-theme="dark"</code>. No additional props or CSS overrides are needed on the button itself.</p>

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
<pre><span class="token-comment">// 1. Import icons you need</span>
<span class="token-keyword">import</span> { <span class="token-tag">PhArrowRight</span>, <span class="token-tag">PhPlus</span> } <span class="token-keyword">from</span> <span class="token-string">'@phosphor-icons/vue'</span>

<span class="token-comment">// 2. Register in data() for reactivity</span>
<span class="token-keyword">export default</span> {
  <span class="token-attr">data</span>() {
    <span class="token-keyword">return</span> { PhArrowRight, PhPlus }
  }
}


<span class="token-comment">&lt;!-- Basic usage --&gt;</span>
<span class="token-tag">&lt;ButtonPrimary</span>
  <span class="token-attr">size</span>=<span class="token-string">"medium"</span>
  <span class="token-attr">text</span>=<span class="token-string">"Continue"</span>
  <span class="token-attr">:right-icon</span>=<span class="token-string">"PhArrowRight"</span>
  <span class="token-attr">@click</span>=<span class="token-string">"handleSubmit"</span>
<span class="token-tag">/&gt;</span>

<span class="token-comment">&lt;!-- All four variants --&gt;</span>
<span class="token-tag">&lt;ButtonSecondary</span> <span class="token-attr">text</span>=<span class="token-string">"Cancel"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;ButtonLine</span> <span class="token-attr">text</span>=<span class="token-string">"Details"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;ButtonGhost</span> <span class="token-attr">text</span>=<span class="token-string">"More"</span> <span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Loading with visible text --&gt;</span>
<span class="token-tag">&lt;ButtonPrimary</span>
  <span class="token-attr">text</span>=<span class="token-string">"Saving…"</span>
  <span class="token-attr">:loading</span>=<span class="token-string">"isSaving"</span>
  <span class="token-attr">loading-icon-position</span>=<span class="token-string">"left"</span>
<span class="token-tag">/&gt;</span>

<span class="token-comment">&lt;!-- Loading replaces all content --&gt;</span>
<span class="token-tag">&lt;ButtonPrimary</span>
  <span class="token-attr">text</span>=<span class="token-string">"Submit"</span>
  <span class="token-attr">:loading</span>=<span class="token-string">"isSubmitting"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">&lt;!-- Icon-only — aria-label required --&gt;</span>
<span class="token-tag">&lt;ButtonGhost</span>
  <span class="token-attr">size</span>=<span class="token-string">"small"</span>
  <span class="token-attr">:icon-only</span>=<span class="token-string">"true"</span>
  <span class="token-attr">:left-icon</span>=<span class="token-string">"PhPencilSimple"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Edit booking"</span>
<span class="token-tag">/&gt;</span>

<span class="token-comment">&lt;!-- Leading text (Primary only) --&gt;</span>
<span class="token-tag">&lt;ButtonPrimary</span>
  <span class="token-attr">size</span>=<span class="token-string">"large"</span>
  <span class="token-attr">leading-text</span>=<span class="token-string">"59.00 USD"</span>
  <span class="token-attr">text</span>=<span class="token-string">"Continue"</span>
  <span class="token-attr">:right-icon</span>=<span class="token-string">"PhArrowRight"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Rendered HTML output --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-button
        marks-button--primary
        marks-button--medium"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__text"</span><span class="token-tag">&gt;</span>Continue<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__icon
       marks-button__icon--right"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- Icon-only --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-button
        marks-button--ghost
        marks-button--small
        marks-button--icon-only"</span>
  <span class="token-attr">aria-label</span>=<span class="token-string">"Edit booking"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__icon
       marks-button__icon--left"</span> …<span class="token-tag">&gt;&lt;/svg&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- Disabled --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-button
        marks-button--primary
        marks-button--medium
        marks-button--disabled"</span>
  <span class="token-attr">disabled</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__text"</span><span class="token-tag">&gt;</span>Submit<span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- Loading --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-button
        marks-button--primary
        marks-button--medium
        marks-button--loading
        marks-button--icon-only"</span>
  <span class="token-attr">disabled</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__icon
        marks-button__icon--medium"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button__loader
         marks-button__loader--medium"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/span&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Block:     .marks-button
  Variants:  --primary | --secondary | --line | --ghost
  Sizes:     --small | --medium | --large
  States:    --disabled | --loading | --icon-only
  Elements:  __text | __icon | __icon--left |
             __icon--right | __leading | __loader
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-comment">// Import design system tokens</span>
<span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;

<span class="token-comment">// ─── Color tokens per variant ───</span>

<span class="token-comment">// Primary</span>
<span class="token-attr">background</span>:  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">color</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);

<span class="token-comment">// Secondary</span>
<span class="token-attr">background</span>:  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">color</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);

<span class="token-comment">// Line — transparent bg, 1px border</span>
<span class="token-attr">border</span>:      <span class="token-number">1px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">color</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);

<span class="token-comment">// Ghost — no bg, no border</span>
<span class="token-attr">color</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);


<span class="token-comment">// ─── Spacing tokens per size ───</span>

<span class="token-comment">// Small</span>
<span class="token-attr">padding</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>) <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-attr">gap</span>:           <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-keyword">@include</span> marks-typography-button-sm;

<span class="token-comment">// Medium</span>
<span class="token-attr">padding</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>) <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">gap</span>:           <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-keyword">@include</span> marks-typography-button-md;

<span class="token-comment">// Large</span>
<span class="token-attr">padding</span>:       <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-20</span>) <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-28</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">gap</span>:           <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-keyword">@include</span> marks-typography-button-lg;


<span class="token-comment">// ─── State overrides ───</span>

<span class="token-comment">// Disabled (all variants)</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">color</span>:      <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">cursor</span>:     not-allowed;

<span class="token-comment">// Focus-visible (all variants)</span>
<span class="token-attr">outline</span>:        <span class="token-number">2px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-solid</span>);
<span class="token-attr">outline-offset</span>: <span class="token-number">2px</span>;


<span class="token-comment">// ─── Icon sizing ───</span>

<span class="token-comment">// Small  → 16px, weight: bold</span>
<span class="token-comment">// Medium → 20px, weight: regular</span>
<span class="token-comment">// Large  → 20px, weight: regular</span></pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { PhPlus, PhArrowRight, PhArrowLeft, PhPencilSimple, PhTrash, PhCopy } from '@phosphor-icons/vue'

export default {
  name: 'ButtonDocPage',
  data() {
    return {
      PhPlus,
      PhArrowRight,
      PhArrowLeft,
      PhPencilSimple,
      PhTrash,
      PhCopy,
      sizes: ['small', 'medium', 'large'],
      sizeSpecs: [
        { name: 'small',  padV: 8,  padH: 16, gap: 8,  padVToken: '--marks-spacing-8',  padHToken: '--marks-spacing-16', gapToken: '--marks-spacing-8',  radiusToken: '--marks-radius-8',  radiusVal: '8px',  font: '13px / 500', icon: 16, iconWeight: 'bold',    iconOnlyMin: '32 × 32' },
        { name: 'medium', padV: 16, padH: 24, gap: 12, padVToken: '--marks-spacing-16', padHToken: '--marks-spacing-24', gapToken: '--marks-spacing-12', radiusToken: '--marks-radius-12', radiusVal: '12px', font: '15px / 500', icon: 20, iconWeight: 'regular',  iconOnlyMin: '50 × 50' },
        { name: 'large',  padV: 20, padH: 28, gap: 12, padVToken: '--marks-spacing-20', padHToken: '--marks-spacing-28', gapToken: '--marks-spacing-12', radiusToken: '--marks-radius-16', radiusVal: '16px', font: '16px / 500', icon: 20, iconWeight: 'regular',  iconOnlyMin: '50 × 50' }
      ],
      variants: [
        { name: 'Primary', component: 'ButtonPrimary' },
        { name: 'Secondary', component: 'ButtonSecondary' },
        { name: 'Line', component: 'ButtonLine' },
        { name: 'Ghost', component: 'ButtonGhost' }
      ],
      stateRows: [
        { name: 'Default',  chip: 'default',  forceClass: null,          disabled: false },
        { name: 'Hover',    chip: 'hover',    forceClass: 'force-hover', disabled: false },
        { name: 'Clicked',  chip: 'pressed',  forceClass: 'force-active', disabled: false },
        { name: 'Disabled', chip: 'disabled', forceClass: null,          disabled: true }
      ],
      demoLoading: false,
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
    variantCols() {
      return [
        { label: 'Default',       props: { text: 'Action' } },
        { label: 'Icon left',     props: { text: 'Action', leftIcon: this.PhArrowLeft } },
        { label: 'Icon right',    props: { text: 'Action', rightIcon: this.PhArrowRight } },
        { label: 'Loading only',  props: { text: 'Action', loading: true, loadingIconPosition: 'only' } },
        { label: 'Loading left',  props: { text: 'Saving…', loading: true, loadingIconPosition: 'left' } },
        { label: 'Loading right', props: { text: 'Saving…', loading: true, loadingIconPosition: 'right' } },
        { label: 'Icon only',     props: { iconOnly: true, leftIcon: this.PhPlus } }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    toggleLoading() {
      this.demoLoading = true
      setTimeout(() => { this.demoLoading = false }, 2000)
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

/* Force hover state */
.force-hover .marks-button--primary { background: var(--marks-color-gray-500) !important; }
.force-hover .marks-button--secondary { background: var(--marks-color-gray-150) !important; }
.force-hover .marks-button--line { background: var(--marks-color-gray-100) !important; }
.force-hover .marks-button--ghost { border: 1px solid var(--marks-color-gray-200) !important; }

/* Force active/clicked state */
.force-active .marks-button--primary { background: var(--marks-color-gray-400) !important; box-shadow: 0px 2px 4px rgba(0,0,0,0.05) inset !important; }
.force-active .marks-button--secondary { background: var(--marks-color-gray-200) !important; box-shadow: 0px 2px 4px rgba(0,0,0,0.05) inset !important; }
.force-active .marks-button--line { background: var(--marks-color-gray-150) !important; box-shadow: 0px 2px 4px rgba(0,0,0,0.05) inset !important; }
.force-active .marks-button--ghost { background: var(--marks-color-gray-100) !important; border: 1px solid var(--marks-color-gray-200) !important; box-shadow: 0px 2px 4px rgba(0,0,0,0.05) inset !important; }
</style>

<style scoped>
.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table {
  min-width: 900px;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 10px;
}

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
</style>
