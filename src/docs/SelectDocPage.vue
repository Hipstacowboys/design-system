<template>
  <DocHeader active-page="select" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="select" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Select</h1>
        <p class="content__lead">
          A custom dropdown for choosing a single option from a predefined list.
          Supports two sizes, optional left icon or flag image, disabled options
          with <code>rightText</code> metadata, and full <code>v-model</code> binding.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Single choice from a known list</strong> — plans, countries, categories, or any bounded set of options.</li>
          <li><strong>With visual context</strong> — add a <code>leftIcon</code> (Phosphor component) or a <code>flag</code> (image URL) to reinforce meaning.</li>
          <li><strong>Compact forms</strong> — the collapsed trigger takes a single line regardless of how many options exist.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the user needs to type free-form text — use an <code>Input</code>.</li>
          <li>If multiple values can be selected — use <code>Checkbox</code> groups.</li>
          <li>If the list exceeds ~15 items and the user needs search — pair with a search input or use a combobox pattern.</li>
          <li>If there are only 2–3 options always visible — consider <code>RadioWithLabel</code> or <code>HorizontalSwitch</code> for quicker scanning.</li>
        </ul>

        <h3>Quick comparison</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Select (medium)</span>
            <Select v-model="demoMedium" :options="planOptions" placeholder="Choose plan" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Select with icon</span>
            <Select v-model="demoIcon" :options="planOptions" placeholder="Choose plan" :left-icon="PhGlobeHemisphereWest" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Select (small)</span>
            <Select v-model="demoSmall" :options="planOptions" placeholder="Choose plan" size="small" />
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Two trigger sizes share the same dropdown. Pink overlays show internal padding; badges show pixel values.</p>

        <h3>Medium trigger</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Medium — default</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Select :model-value="null" :options="planOptions" placeholder="Select option..." size="medium" style="pointer-events:none;width:260px;" />
              <!-- Top: height -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '50%', transform: 'translateX(-50%)' }">h ≈ 51</div>
              <!-- Left padding -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">20</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '0', width: '20px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '20px', width: '1px', height: '9px' }"></div>
              <!-- Right padding -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', right: '0' }">40</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', right: '0', width: '40px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', right: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', right: '40px', width: '1px', height: '9px' }"></div>
              <!-- Radius badge -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-36px', transform: 'translateY(-50%)' }">r12</div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', height: '14px', width: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', height: '14px', width: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '14px', left: '0', width: '20px', bottom: '14px' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '14px', right: '0', width: '40px', bottom: '14px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding-top / bottom</td><td><code>—</code></td><td>14px</td></tr>
              <tr><td>padding-left</td><td><code>—</code></td><td>20px</td></tr>
              <tr><td>padding-right</td><td><code>—</code></td><td>40px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>border</td><td><code>—</code></td><td>2px solid transparent</td></tr>
              <tr><td>box-shadow (default)</td><td><code>—</code></td><td>0 0 0 1px gray-200</td></tr>
              <tr><td>font-size</td><td><code>marks-typography-button-md</code></td><td>15px</td></tr>
              <tr><td>line-height</td><td><code>—</code></td><td>1.5</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Small trigger</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Small — default</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" style="pointer-events:none;width:220px;" />
              <!-- Left padding -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">16</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', left: '0', width: '16px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', left: '16px', width: '1px', height: '9px' }"></div>
              <!-- Right padding -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', right: '0' }">40</div>
              <div class="btn-anatomy__line" :style="{ bottom: '-10px', right: '0', width: '40px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', right: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ bottom: '-14px', right: '40px', width: '1px', height: '9px' }"></div>
              <!-- Radius badge -->
              <div class="btn-anatomy__badge" :style="{ top: '50%', right: '-30px', transform: 'translateY(-50%)' }">r8</div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', height: '8px', width: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ bottom: '0', left: '0', height: '8px', width: '100%' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '8px', left: '0', width: '16px', bottom: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ top: '8px', right: '0', width: '40px', bottom: '8px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>—</code></td><td>8px 16px (right 40px)</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-8</code></td><td>8px</td></tr>
              <tr><td>font-size</td><td><code>marks-typography-button-sm</code></td><td>13px</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Dropdown</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Dropdown panel</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>margin-top</td><td><code>—</code></td><td>6px</td></tr>
              <tr><td>padding</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-24</code></td><td>24px</td></tr>
              <tr><td>box-shadow</td><td><code>—</code></td><td>0 14px 30px rgba(0,0,0,0.15)</td></tr>
              <tr><td>max-height</td><td><code>—</code></td><td>300px (scrollable)</td></tr>
              <tr><td>min-width</td><td><code>—</code></td><td>200px</td></tr>
              <tr><td>option padding</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>option gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>option radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>option hover bg</td><td><code>--marks-color-gray-100</code></td><td>#F5F5F5</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Trigger states across three column variants. Both sizes shown.</p>

        <div class="variant-section">
          <p class="variant-section__label">Medium size</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Plain</th>
                  <th>With icon</th>
                  <th>With value selected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." /></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." :left-icon="PhGlobeHemisphereWest" /></td>
                  <td><Select model-value="premium" :options="planOptions" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Select :model-value="null" :options="planOptions" placeholder="Select option..." /></div></td>
                  <td><div class="force-hover"><Select :model-value="null" :options="planOptions" placeholder="Select option..." :left-icon="PhGlobeHemisphereWest" /></div></td>
                  <td><div class="force-hover"><Select model-value="premium" :options="planOptions" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--pressed">Open</span></td>
                  <td colspan="3" style="padding:16px;">
                    <span style="font-size:0.8rem;color:#6F6F6F;">Open state shown in the <a href="#behavior">Behavior</a> section live demo — the dropdown requires portal rendering.</span>
                  </td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." :disabled="true" /></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." :left-icon="PhGlobeHemisphereWest" :disabled="true" /></td>
                  <td><Select model-value="premium" :options="planOptions" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Small size</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Plain</th>
                  <th>With icon</th>
                  <th>With value selected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" /></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" :left-icon="PhGlobeHemisphereWest" /></td>
                  <td><Select model-value="premium" :options="planOptions" size="small" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" /></div></td>
                  <td><div class="force-hover"><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" :left-icon="PhGlobeHemisphereWest" /></div></td>
                  <td><div class="force-hover"><Select model-value="premium" :options="planOptions" size="small" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" :disabled="true" /></td>
                  <td><Select :model-value="null" :options="planOptions" placeholder="Select option..." size="small" :left-icon="PhGlobeHemisphereWest" :disabled="true" /></td>
                  <td><Select model-value="premium" :options="planOptions" size="small" :disabled="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Opening &amp; closing</h3>
        <ul>
          <li>Clicking the trigger toggles the dropdown open/closed.</li>
          <li>Clicking outside the wrapper closes the dropdown (<code>handleClickOutside</code>).</li>
          <li>Blurring the trigger button also closes the dropdown after a 200ms delay to allow option click registration.</li>
        </ul>

        <h3>Selecting an option</h3>
        <ul>
          <li>Clicking an enabled option emits <code>update:modelValue</code> and <code>change</code>, then closes the dropdown.</li>
          <li>Clicking a disabled option does nothing — the dropdown stays open.</li>
          <li>The trigger text updates to the selected option's <code>label</code>. Placeholder text returns when <code>modelValue</code> is <code>null</code> or empty.</li>
        </ul>

        <h3>Caret rotation</h3>
        <ul>
          <li>The right caret icon rotates 180° when the dropdown is open via <code>.marks-select__icon--rotated</code>.</li>
          <li>Transition uses 200ms ease, matching all other Select transitions.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>The entire trigger drops to <code>opacity: 0.5</code> with <code>cursor: not-allowed</code>.</li>
          <li>Background changes to <code>--marks-color-gray-100</code>, border forced transparent.</li>
          <li>Clicks are suppressed — the dropdown cannot open.</li>
        </ul>

        <h3>Dropdown transition</h3>
        <ul>
          <li>Enter/leave: 200ms ease on opacity + translateY(-8px).</li>
          <li>Uses Vue's <code>&lt;Transition name="marks-select-dropdown"&gt;</code>.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Click to open — medium</span>
            <Select v-model="demoLive" :options="planOptionsWithRight" placeholder="Choose plan" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLive === null ? 'null' : demoLive }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">With icon — small</span>
            <Select v-model="demoLiveIcon" :options="planOptions" placeholder="Choose plan" size="small" :left-icon="PhMapPin" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ demoLiveIcon === null ? 'null' : demoLiveIcon }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Disabled</span>
            <Select :model-value="null" :options="planOptions" placeholder="Select option..." :disabled="true" />
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Placeholder text</h3>
        <ul>
          <li>Use a verb phrase: "Select country", "Choose plan" — not just "Select" or "Choose".</li>
          <li>Default is <code>Select option...</code> — override with something more specific whenever possible.</li>
          <li>Placeholder text renders in <code>--marks-color-gray-300</code>; selected value renders in <code>--marks-color-black</code>.</li>
        </ul>

        <h3>Option labels</h3>
        <ul>
          <li>Use sentence case and consistent grammar across all options in a single Select.</li>
          <li>Keep labels concise — one to three words is ideal. Long labels will truncate with ellipsis on the trigger.</li>
          <li>Avoid repeating the group noun: "Standard", not "Standard plan" if the Select is already labeled "Choose plan".</li>
        </ul>

        <h3><code>rightText</code> usage</h3>
        <ul>
          <li>Use for secondary metadata: pricing ("$9/mo"), counts ("12 seats"), or status ("Popular").</li>
          <li>Renders in <code>--marks-color-gray-300</code>, right-aligned within the option row.</li>
          <li>Keep to a few characters — it shares the row with the label.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>The trigger renders as <code>&lt;button type="button"&gt;</code> — focusable and keyboard-operable by default.</li>
          <li>When <code>disabled</code>, the native <code>disabled</code> attribute is set, removing the element from tab order.</li>
          <li>Dropdown options are also <code>&lt;button&gt;</code> elements with <code>disabled</code> set on disabled options.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus to/from the trigger button.</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — toggles the dropdown (native button behavior).</li>
          <li>Focus ring: <code>border-color: var(--marks-color-black)</code> with <code>box-shadow: 0 0 0 4px rgba(0,0,0,0.3), 0 0 0 1px black</code>.</li>
        </ul>

        <h3>Focus management</h3>
        <ul>
          <li>Opening the dropdown does not move focus away from the trigger — options are clicked, not focused.</li>
          <li>The dropdown uses <code>@mousedown.prevent</code> to keep focus on the trigger during option clicks.</li>
          <li>Blur handling has a 200ms delay to prevent premature close.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>For lists longer than ~15 options, consider adding a search/filter mechanism. Screen-reader users and keyboard users struggle with long unfiltered lists.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:360px;">
            <span class="comp-demo__group-label">Plan selector with pricing</span>
            <Select v-model="exPlan" :options="planOptionsWithRight" placeholder="Choose plan" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:360px;">
            <span class="comp-demo__group-label">Category with icon</span>
            <Select v-model="exCategory" :options="categoryOptions" placeholder="Select category" :left-icon="PhMapPin" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:360px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many options without search</span>
            <Select :model-value="null" :options="tooManyOptions" placeholder="Select country" />
            <span style="font-size:0.75rem;color:#FD3860;">20+ options need a searchable dropdown or combobox</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:360px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — vague placeholder</span>
            <Select :model-value="null" :options="planOptions" placeholder="Select..." />
            <span style="font-size:0.75rem;color:#FD3860;">Always specify what is being selected</span>
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:360px;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — single option</span>
            <Select :model-value="null" :options="[{ label: 'Only option', value: 'only' }]" placeholder="Choose" />
            <span style="font-size:0.75rem;color:#FD3860;">A single option defeats the purpose — use plain text or a read-only input</span>
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
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">size</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'medium'</code></td>
              <td>Trigger size. One of <code>'small'</code> or <code>'medium'</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">placeholder</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'Select option...'</code></td>
              <td>Text shown when no option is selected.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">options</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>List of option objects. See shape below.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">leftIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Phosphor icon component rendered left of the text.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">flag</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Image URL for a flag icon (e.g. country flag SVG).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">flagAlt</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Alt text for the flag image.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction, reduces opacity, changes background.</td>
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
              <td>Emitted when an option is selected. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">change</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td>Emitted alongside <code>update:modelValue</code> for explicit change handling.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">focus</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Emitted when the dropdown opens.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">blur</code></td>
              <td><code class="prop-type">Event</code></td>
              <td>Emitted when the trigger loses focus and the dropdown closes.</td>
            </tr>
          </tbody>
        </table>

        <h3>Option shape</h3>
        <table class="props-table">
          <thead>
            <tr><th>Property</th><th>Type</th><th>Required</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td>Yes</td>
              <td>Unique value emitted on selection.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Yes</td>
              <td>Display text in the dropdown and on the trigger when selected.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td>No</td>
              <td>Makes the option non-selectable. Rendered with muted color.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">rightText</code></td>
              <td><code class="prop-type">String</code></td>
              <td>No</td>
              <td>Secondary text right-aligned in the option row.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Select colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Placeholder</span>
            <Select :model-value="null" :options="planOptions" placeholder="Choose plan" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Selected</span>
            <Select model-value="premium" :options="planOptions" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label">Disabled</span>
            <Select :model-value="null" :options="planOptions" placeholder="Choose plan" :disabled="true" />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Placeholder</span>
            <Select :model-value="null" :options="planOptions" placeholder="Choose plan" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Selected</span>
            <Select model-value="premium" :options="planOptions" />
          </div>
          <div class="comp-demo__group" style="width:100%;max-width:320px;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Disabled</span>
            <Select :model-value="null" :options="planOptions" placeholder="Choose plan" :disabled="true" />
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
<pre><span class="token-comment">// Basic select with v-model</span>
<span class="token-tag">&lt;Select</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selectedPlan"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"plans"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Choose plan"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Small size with left icon</span>
<span class="token-tag">&lt;Select</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"category"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"categories"</span>
  <span class="token-attr">size</span>=<span class="token-string">"small"</span>
  <span class="token-attr">:left-icon</span>=<span class="token-string">"PhMapPin"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Select category"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With flag image</span>
<span class="token-tag">&lt;Select</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"country"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"countries"</span>
  <span class="token-attr">flag</span>=<span class="token-string">"/flags/us.svg"</span>
  <span class="token-attr">flag-alt</span>=<span class="token-string">"US flag"</span>
  <span class="token-attr">placeholder</span>=<span class="token-string">"Select country"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;Select</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"plans"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Options with rightText</span>
<span class="token-keyword">const</span> plans = [
  { <span class="token-attr">value</span>: <span class="token-string">'free'</span>,
    <span class="token-attr">label</span>: <span class="token-string">'Free'</span>,
    <span class="token-attr">rightText</span>: <span class="token-string">'$0/mo'</span> },
  { <span class="token-attr">value</span>: <span class="token-string">'pro'</span>,
    <span class="token-attr">label</span>: <span class="token-string">'Pro'</span>,
    <span class="token-attr">rightText</span>: <span class="token-string">'$9/mo'</span> },
  { <span class="token-attr">value</span>: <span class="token-string">'enterprise'</span>,
    <span class="token-attr">label</span>: <span class="token-string">'Enterprise'</span>,
    <span class="token-attr">disabled</span>: <span class="token-keyword">true</span>,
    <span class="token-attr">rightText</span>: <span class="token-string">'Contact us'</span> },
]</pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Select — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">type</span>=<span class="token-string">"button"</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-select
      marks-select--medium"</span>
  <span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__text"</span><span class="token-tag">&gt;</span>
      Select option...
    <span class="token-tag">&lt;/span&gt;</span>
    <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__icon
      marks-select__icon--right"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/svg&gt;</span>
  <span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- With value selected --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-select
    marks-select--medium
    marks-select--has-value"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__text"</span><span class="token-tag">&gt;</span>
    Premium
  <span class="token-tag">&lt;/span&gt;</span>
  …
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- With left icon --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-select
    marks-select--medium
    marks-select--has-left-icon"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__icon
    marks-select__icon--left"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/svg&gt;</span>
  <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__text"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select__icon
    marks-select__icon--right"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/svg&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- Dropdown --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select-dropdown"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-select-dropdown__option"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__option-text-left"</span><span class="token-tag">&gt;</span>
      Free<span class="token-tag">&lt;/span&gt;</span>
    <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"…__option-text-right"</span><span class="token-tag">&gt;</span>
      $0/mo<span class="token-tag">&lt;/span&gt;</span>
  <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"…__option
    …__option--selected"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"…__option
    …__option--disabled"</span>
    <span class="token-attr">disabled</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  Wrapper:
    .marks-select-wrapper

  Trigger:
    .marks-select
    .marks-select--small
    .marks-select--medium
    .marks-select--has-left-icon
    .marks-select--has-flag
    .marks-select--disabled
    .marks-select--has-value
    .marks-select--open
    .marks-select__icon
    .marks-select__icon--left
    .marks-select__icon--right
    .marks-select__icon--rotated
    .marks-select__text
    .marks-select__flag

  Dropdown:
    .marks-select-dropdown
    .marks-select-dropdown__option
    .marks-select-dropdown__option--selected
    .marks-select-dropdown__option--disabled
    .marks-select-dropdown__option-text-left
    .marks-select-dropdown__option-text-right
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Trigger base ───</span>

<span class="token-attr">border</span>: <span class="token-number">2px</span> solid transparent;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Focus / Open ───</span>

<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>:
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">4px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>),
  <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Hover ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">1px</span>
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Has value ───</span>

<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Size: medium ───</span>

<span class="token-attr">padding</span>: <span class="token-number">14px</span> <span class="token-number">40px</span> <span class="token-number">14px</span> <span class="token-number">20px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">line-height</span>: <span class="token-number">1.5</span>;
<span class="token-keyword">@include</span> marks-typography-button-md;


<span class="token-comment">// ─── Size: small ───</span>

<span class="token-attr">padding</span>: <span class="token-number">8px</span> <span class="token-number">40px</span> <span class="token-number">8px</span> <span class="token-number">16px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-keyword">@include</span> marks-typography-button-sm;


<span class="token-comment">// ─── Disabled ───</span>

<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);


<span class="token-comment">// ─── Dropdown panel ───</span>

<span class="token-attr">margin-top</span>: <span class="token-number">6px</span>;
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-24</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">14px</span> <span class="token-number">30px</span>
  rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.15</span>);
<span class="token-attr">max-height</span>: <span class="token-number">300px</span>;
<span class="token-attr">min-width</span>: <span class="token-number">200px</span>;


<span class="token-comment">// ─── Dropdown option ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;

<span class="token-comment">// Option hover</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);

<span class="token-comment">// Option disabled</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// Right text</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Icon positioning ───</span>

<span class="token-comment">// Left icon</span>
<span class="token-attr">left</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);

<span class="token-comment">// Right caret (small)</span>
<span class="token-attr">right</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);

<span class="token-comment">// Right caret (medium)</span>
<span class="token-attr">right</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-20</span>);

<span class="token-comment">// Caret rotated (open)</span>
<span class="token-attr">transform</span>: rotate(<span class="token-number">180deg</span>);


<span class="token-comment">// ─── Flag ───</span>

<span class="token-attr">width</span>: <span class="token-number">20px</span>;
<span class="token-attr">height</span>: <span class="token-number">14px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">2px</span>;</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { PhGlobeHemisphereWest, PhMapPin } from '@phosphor-icons/vue'
import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'SelectDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      PhGlobeHemisphereWest,
      PhMapPin,

      demoMedium: null,
      demoIcon: null,
      demoSmall: null,
      demoLive: null,
      demoLiveIcon: null,
      exPlan: null,
      exCategory: null,

      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ],

      planOptions: [
        { label: 'Standard', value: 'standard' },
        { label: 'Premium', value: 'premium' },
        { label: 'Enterprise', value: 'enterprise', disabled: true }
      ],
      planOptionsWithRight: [
        { label: 'Free', value: 'free', rightText: '$0/mo' },
        { label: 'Pro', value: 'pro', rightText: '$9/mo' },
        { label: 'Business', value: 'business', rightText: '$29/mo' },
        { label: 'Enterprise', value: 'enterprise', disabled: true, rightText: 'Contact us' }
      ],
      categoryOptions: [
        { label: 'Restaurant', value: 'restaurant' },
        { label: 'Hotel', value: 'hotel' },
        { label: 'Attraction', value: 'attraction' },
        { label: 'Shopping', value: 'shopping' }
      ],
      tooManyOptions: Array.from({ length: 25 }, (_, i) => ({
        label: `Country ${i + 1}`,
        value: `country-${i + 1}`
      }))
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

/* Force hover state for Select */
.force-hover .marks-select:not(.marks-select--disabled):not(:focus):not(.marks-select--open) { box-shadow: 0 0 0 1px var(--marks-color-gray-300) !important; }
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

.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
  min-width: 200px;
}
</style>
