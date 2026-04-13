<template>
  <DocHeader active-page="horizontal-switch" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="horizontal-switch" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Horizontal Switch</h1>
        <p class="content__lead">
          A segmented toggle for switching between two or more mutually exclusive
          options. Renders <code>ButtonPrimary</code> for the active choice and
          <code>ButtonGhost</code> for every inactive choice, all inside a pill-shaped
          container. Supports <code>v-model</code> binding with any string or number value.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li>Switching between two to four options where only one can be active at a time — e.g. "Day / Week / Month" view toggles, "Grid / List" layout pickers.</li>
          <li>When the change should take effect immediately (no form submission).</li>
          <li>When all options need equal visual weight and must be visible at once.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>Binary on/off state — use a <code>Toggle</code> instead.</li>
          <li>More than four options — use a <code>Select</code> or <code>Tabs</code> component.</li>
          <li>When the user can select multiple values — use <code>Checkbox</code> group.</li>
          <li>For navigation between pages — use <code>Tabs</code> or a nav bar.</li>
        </ul>

        <h3>Quick comparison</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">2 options</span>
            <HorizontalSwitch
              v-model="demoTwo"
              :options="optionsTwo"
            />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">3 options</span>
            <HorizontalSwitch
              v-model="demoThree"
              :options="optionsThree"
            />
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The component is a flex container holding small-sized buttons. No explicit size prop — dimensions come from the child buttons and the container padding.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Container + Buttons</span>
            <HorizontalSwitch
              :model-value="'day'"
              :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
            />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-horizontal-switch</code> (container) ·
              <code>ButtonPrimary</code> (active) ·
              <code>ButtonGhost</code> (inactive)
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension visualization</h3>
        <p class="comp-section-desc">Pink overlay shows container padding, badges show pixel/token values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">HorizontalSwitch</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <HorizontalSwitch
                :model-value="'day'"
                :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }]"
                style="pointer-events:none;"
              />
              <!-- Container padding (top) -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '100%', height: '8px' }"></div>
              <!-- Container padding (bottom) -->
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '100%', height: '8px' }"></div>
              <!-- Container padding (left) -->
              <div class="btn-anatomy__pad" :style="{ inset: '8px auto 8px 0', width: '8px' }"></div>
              <!-- Container padding (right) -->
              <div class="btn-anatomy__pad" :style="{ inset: '8px 0 8px auto', width: '8px' }"></div>
              <!-- Padding badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">8</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '8px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '8px', width: '1px', height: '9px' }"></div>
              <!-- Gap badge (right of first button) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '50%', transform: 'translateX(-50%)' }">4</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>container padding</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>gap between buttons</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
              <tr><td>container radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>container background</td><td><code>--marks-color-gray-150</code></td><td>#E7E7E7 (light)</td></tr>
              <tr><td>button size</td><td><code>—</code></td><td>small (8px 16px padding, radius-8)</td></tr>
              <tr><td>active button shadow</td><td><code>—</code></td><td>0 2px 6px rgba(0,0,0,0.08)</td></tr>
              <tr><td>inactive hover border</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants</h2>
        <p class="comp-section-desc">The component adapts to any number of options. Below are the most common configurations.</p>

        <div class="variant-section">
          <p class="variant-section__label">2 options — binary choice</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>First active</th>
                  <th>Second active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'grid'"
                      :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
                    />
                  </td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'list'"
                      :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">3 options — multi choice</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>First active</th>
                  <th>Second active</th>
                  <th>Third active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'day'"
                      :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
                    />
                  </td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'week'"
                      :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
                    />
                  </td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'month'"
                      :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Different label lengths</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Short labels</th>
                  <th>Medium labels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'on'"
                      :options="[{ label: 'On', value: 'on' }, { label: 'Off', value: 'off' }]"
                    />
                  </td>
                  <td>
                    <HorizontalSwitch
                      :model-value="'upcoming'"
                      :options="[{ label: 'Upcoming', value: 'upcoming' }, { label: 'Completed', value: 'completed' }, { label: 'Cancelled', value: 'cancelled' }]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Selection model</h3>
        <ul>
          <li>Exactly one option is always active. There is no "unselected" state.</li>
          <li>Clicking an inactive option emits <code>update:modelValue</code> with the selected option's <code>value</code>, enabling standard <code>v-model</code> binding.</li>
          <li>A separate <code>change</code> event also fires with the new value for convenience.</li>
          <li>Clicking the already-active option is a no-op — the component re-emits but the value doesn't change.</li>
        </ul>

        <h3>Internal button rendering</h3>
        <ul>
          <li>The active option renders as <code>ButtonPrimary size="small"</code> — solid background with a subtle shadow.</li>
          <li>All inactive options render as <code>ButtonGhost size="small"</code> — transparent background, border appears on hover.</li>
          <li>Buttons are rendered via <code>v-if</code>/<code>v-else</code>, so switching triggers a DOM swap (not a class toggle).</li>
        </ul>

        <h3>Transitions</h3>
        <ul>
          <li>Button shadow, background, and border transitions over <code>0.2s ease</code>.</li>
          <li>Ghost buttons show a <code>1px solid --marks-color-gray-200</code> border on hover.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">2-option switch</span>
            <HorizontalSwitch v-model="demoLiveTwo" :options="optionsTwo" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code v-text="demoLiveTwo"></code></span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">3-option switch</span>
            <HorizontalSwitch v-model="demoLiveThree" :options="optionsThree" />
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code v-text="demoLiveThree"></code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Label text</h3>
        <ul>
          <li>Keep labels short — one or two words per option. The buttons share horizontal space.</li>
          <li>Use sentence case or title case consistently within one switch: "Day / Week / Month" or "day / week / month", not mixed.</li>
          <li>Labels should be parallel in form: all nouns, all verbs, or all adjectives.</li>
        </ul>

        <h3>Option values</h3>
        <ul>
          <li>Use stable, semantic values — <code>'grid'</code> not <code>0</code>. String values are preferred for readability; numbers are supported for index-based logic.</li>
          <li>The <code>value</code> field is the data key; the <code>label</code> field is what the user sees.</li>
        </ul>

        <h3>Number of options</h3>
        <ul>
          <li>Ideal: 2–3 options. Maximum recommended: 4.</li>
          <li>More than 4 options should use a <code>Select</code> or <code>Tabs</code> component — the horizontal switch becomes cramped.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as a group of native <code>&lt;button&gt;</code> elements — inherently focusable and keyboard-operable.</li>
          <li>The active button uses <code>ButtonPrimary</code> styling, providing strong visual distinction from inactive <code>ButtonGhost</code> options.</li>
          <li>Consider adding <code>role="group"</code> and an <code>aria-label</code> on the container to describe the switch purpose (e.g. "View mode").</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus between buttons in the group (standard button tab order).</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — activates the focused button.</li>
          <li>Focus indicator comes from the underlying button components.</li>
        </ul>

        <h3>Color contrast</h3>
        <ul>
          <li>Active (<code>ButtonPrimary</code>) has white text on solid primary background — meets WCAG AA.</li>
          <li>Inactive (<code>ButtonGhost</code>) text inherits standard text color on the gray-150 container.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Add <code>role="group"</code> and <code>aria-label</code> to the container so screen readers announce the purpose of the switch group (e.g. "View mode selector").</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Calendar view toggle</span>
            <HorizontalSwitch
              v-model="exCalendar"
              :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
            />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Layout switcher</span>
            <HorizontalSwitch
              v-model="exLayout"
              :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
            />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Filter toggle</span>
            <HorizontalSwitch
              v-model="exFilter"
              :options="[{ label: 'All', value: 'all' }, { label: 'Active', value: 'active' }, { label: 'Archived', value: 'archived' }]"
            />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many options</span>
            <HorizontalSwitch
              :model-value="'mon'"
              :options="[{ label: 'Mon', value: 'mon' }, { label: 'Tue', value: 'tue' }, { label: 'Wed', value: 'wed' }, { label: 'Thu', value: 'thu' }, { label: 'Fri', value: 'fri' }, { label: 'Sat', value: 'sat' }]"
            />
            <span style="font-size:0.75rem;color:#FD3860;">Use Tabs or Select for 5+ options</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — for on/off states</span>
            <HorizontalSwitch
              :model-value="'on'"
              :options="[{ label: 'On', value: 'on' }, { label: 'Off', value: 'off' }]"
            />
            <span style="font-size:0.75rem;color:#FD3860;">Use a Toggle for binary on/off</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — for navigation</span>
            <HorizontalSwitch
              :model-value="'home'"
              :options="[{ label: 'Home', value: 'home' }, { label: 'Settings', value: 'settings' }, { label: 'Profile', value: 'profile' }]"
            />
            <span style="font-size:0.75rem;color:#FD3860;">Use Tabs or NavbarSide for navigation</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>HorizontalSwitch</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Currently selected option value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">options</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code> <em>required</em></td>
              <td>Array of option objects. Each must have <code>label</code> (String) and <code>value</code> (String | Number).</td>
            </tr>
          </tbody>
        </table>

        <h3>Option shape</h3>
        <table class="props-table">
          <thead>
            <tr><th>Key</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Visible text rendered inside the button.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td>Data value emitted when this option is selected. Compared with <code>modelValue</code> via <code>===</code>.</td>
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
              <td>Emitted when a different option is selected. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">change</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td>Convenience event fired alongside <code>update:modelValue</code>. Useful for side-effects without watching the model.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">The container and buttons adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent element.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">2 options</span>
            <HorizontalSwitch
              :model-value="'grid'"
              :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
            />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">3 options</span>
            <HorizontalSwitch
              :model-value="'week'"
              :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
            />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">2 options</span>
            <HorizontalSwitch
              :model-value="'grid'"
              :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
            />
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">3 options</span>
            <HorizontalSwitch
              :model-value="'week'"
              :options="[{ label: 'Day', value: 'day' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]"
            />
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
<pre><span class="token-comment">// Basic 2-option switch</span>
<span class="token-tag">&lt;HorizontalSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"viewMode"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"[
    { label: 'Grid', value: 'grid' },
    { label: 'List', value: 'list' }
  ]"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// 3-option switch</span>
<span class="token-tag">&lt;HorizontalSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"calendarView"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"[
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' }
  ]"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With change handler</span>
<span class="token-tag">&lt;HorizontalSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"filter"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"filterOptions"</span>
  <span class="token-attr">@change</span>=<span class="token-string">"onFilterChange"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Options defined in data/setup</span>
<span class="token-keyword">data</span>() {
  <span class="token-keyword">return</span> {
    <span class="token-attr">viewMode</span>: <span class="token-string">'grid'</span>,
    <span class="token-attr">options</span>: [
      { <span class="token-attr">label</span>: <span class="token-string">'Grid'</span>, <span class="token-attr">value</span>: <span class="token-string">'grid'</span> },
      { <span class="token-attr">label</span>: <span class="token-string">'List'</span>, <span class="token-attr">value</span>: <span class="token-string">'list'</span> }
    ]
  }
}</pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Rendered output (2 options, first active) --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-horizontal-switch"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-button marks-button--primary
           marks-button--small"</span>
  <span class="token-tag">&gt;</span>Grid<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-button marks-button--ghost
           marks-button--small"</span>
  <span class="token-tag">&gt;</span>List<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- 3 options, second active --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-horizontal-switch"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-button marks-button--ghost
           marks-button--small"</span>
  <span class="token-tag">&gt;</span>Day<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-button marks-button--primary
           marks-button--small"</span>
  <span class="token-tag">&gt;</span>Week<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-button marks-button--ghost
           marks-button--small"</span>
  <span class="token-tag">&gt;</span>Month<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-horizontal-switch
    Container: flex, gap, padding, radius

  Child buttons (via :deep overrides):
    .marks-button--primary.marks-button--small
    .marks-button--ghost.marks-button--small
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Container ───</span>

<span class="token-selector">.marks-horizontal-switch</span> {
  <span class="token-attr">display</span>: flex;
  <span class="token-attr">align-items</span>: center;
  <span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
  <span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-4</span>);
  <span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
  <span class="token-attr">background-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);
}


<span class="token-comment">// ─── Active button (ButtonPrimary small) ───</span>

<span class="token-selector">:deep(.marks-button--primary.marks-button--small)</span> {
  <span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">2px</span> <span class="token-number">6px</span>
    rgba(<span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0.08</span>);
  <span class="token-attr">border</span>: <span class="token-number">1px</span> solid transparent;
}


<span class="token-comment">// ─── Inactive button (ButtonGhost small) ───</span>

<span class="token-selector">:deep(.marks-button--ghost.marks-button--small)</span> {
  <span class="token-attr">background</span>: transparent;
  <span class="token-attr">border</span>: <span class="token-number">1px</span> solid transparent;

  <span class="token-selector">&amp;:hover</span> {
    <span class="token-attr">border</span>: <span class="token-number">1px</span> solid
      <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
  }
}


<span class="token-comment">// ─── Shared transitions ───</span>

<span class="token-selector">:deep(.marks-button--small)</span> {
  <span class="token-attr">transition</span>:
    box-shadow <span class="token-number">0.2s</span> ease,
    background-color <span class="token-number">0.2s</span> ease,
    border-color <span class="token-number">0.2s</span> ease;
}


<span class="token-comment">// ─── Button small dimensions ───</span>

<span class="token-attr">padding</span>: <span class="token-number">8px</span> <span class="token-number">16px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);</pre>
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
  name: 'HorizontalSwitchDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoTwo: 'grid',
      demoThree: 'day',
      demoLiveTwo: 'grid',
      demoLiveThree: 'week',
      exCalendar: 'week',
      exLayout: 'grid',
      exFilter: 'all',
      activeTab: 'vue',
      copyLabel: 'Copy',
      optionsTwo: [
        { label: 'Grid', value: 'grid' },
        { label: 'List', value: 'list' }
      ],
      optionsThree: [
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' }
      ],
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
