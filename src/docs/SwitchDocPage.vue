<template>
  <DocHeader active-page="switch" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="switch" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Switch</h1>
        <p class="content__lead">
          Radio-like selection cards for choosing one option from a set.
          <code>BigSwitch</code> is a large card with an optional icon, title,
          description, and check indicator. <code>SmallSwitch</code> wraps
          multiple <code>SmallSwitchOption</code> rows in a bordered list.
          Both support <code>v-model</code> binding, disabled state, and
          keyboard accessibility.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>BigSwitch</strong> — Prominent, card-style single selection. Best for 2–4 high-impact choices where each option benefits from an icon and description (plan selection, payment method, billing cycle).</li>
          <li><strong>SmallSwitch</strong> — Compact, vertically stacked options inside a bordered container. Best for 2–6 options in settings panels, preference lists, or inline configuration.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For binary on/off states — use <code>Toggle</code> or <code>ToggleWithLabel</code>.</li>
          <li>For inline, horizontal tab-style switching — use <code>HorizontalSwitch</code>.</li>
          <li>For long lists (7+ options) — use a <code>Select</code> dropdown instead.</li>
          <li>For form fields that require submit — use <code>RadioWithLabel</code>.</li>
        </ul>

        <h3>BigSwitch vs SmallSwitch</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">BigSwitch (card selection)</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <BigSwitch v-model="demoBig" value="monthly" title="Monthly" description="Pay each month, cancel anytime." :icon="iconCalendar" style="flex:1;min-width:200px;" />
              <BigSwitch v-model="demoBig" value="yearly" title="Yearly" description="Save 20% with annual billing." :icon="iconCreditCard" style="flex:1;min-width:200px;" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">SmallSwitch (compact list)</span>
            <div style="max-width:400px;">
              <SmallSwitch v-model="demoSmall" :options="notifOptions" />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">BigSwitch is a large card; SmallSwitch stacks compact rows. Both use fixed internal spacing from design tokens.</p>

        <h3>BigSwitch — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Icon + Text + Checkmark</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <BigSwitch :model-value="'a'" value="b" title="Unselected card" description="Shows the default state." :icon="iconCalendar" style="flex:1;min-width:220px;" />
              <BigSwitch :model-value="'a'" value="a" title="Selected card" description="Checkmark appears top-right." :icon="iconCreditCard" style="flex:1;min-width:220px;" />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-big-switch__icon</code> ·
              <code>.marks-big-switch__title</code> ·
              <code>.marks-big-switch__description</code> ·
              <code>.marks-big-switch__checkmark</code>
            </div>
          </div>
        </div>

        <h3>BigSwitch spacing &amp; dimensions</h3>
        <p class="comp-section-desc">Pink overlay shows internal spacing, badges show pixel values.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">BigSwitch</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <BigSwitch :model-value="'x'" value="x" title="Plan title" description="Short description." :icon="iconCalendar" style="pointer-events:none;width:360px;" />
              <!-- Padding badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">28</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '28px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '28px', width: '1px', height: '9px' }"></div>
              <!-- Icon size badge (left) -->
              <div class="btn-anatomy__badge" :style="{ top: '34px', left: '-30px' }">79</div>
              <!-- Gap badge (between icon and text) -->
              <div class="btn-anatomy__badge" :style="{ top: '34px', left: '112px' }">21</div>
              <!-- Radius badge (top-right) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', right: '0' }">r16</div>
              <!-- Padding overlays -->
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '100%', height: '28px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '100%', height: '28px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '28px auto 28px 0', width: '28px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '28px 0 28px auto', width: '28px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>—</code></td><td>28px</td></tr>
              <tr><td>icon box</td><td><code>—</code></td><td>79 &times; 79 px</td></tr>
              <tr><td>icon radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>gap (icon &rarr; text)</td><td><code>—</code></td><td>21px</td></tr>
              <tr><td>title &harr; description gap</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>card radius</td><td><code>--marks-radius-16</code></td><td>16px</td></tr>
              <tr><td>border (default)</td><td><code>—</code></td><td>outline 1px solid gray-200</td></tr>
              <tr><td>border (selected)</td><td><code>--marks-color-green-300</code></td><td>2px solid</td></tr>
              <tr><td>checkmark position</td><td><code>—</code></td><td>top: 10px, right: 10px</td></tr>
              <tr><td>checkmark size</td><td><code>—</code></td><td>24 &times; 24 px</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">SmallSwitch &amp; SmallSwitchOption</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame">
              <SmallSwitch :model-value="'a'" :options="[{value:'a',title:'Selected option',description:'First description.'},{value:'b',title:'Default option',description:'Second description.'}]" style="pointer-events:none;width:360px;" />
              <!-- Padding badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">20</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '20px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '20px', width: '1px', height: '9px' }"></div>
              <!-- Radius badge -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', right: '0' }">r16</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>option padding</td><td><code>--marks-spacing-20</code></td><td>20px</td></tr>
              <tr><td>title &harr; description gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>container radius</td><td><code>--marks-radius-16</code></td><td>16px</td></tr>
              <tr><td>container border</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
              <tr><td>divider</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
              <tr><td>checkmark position</td><td><code>—</code></td><td>top: 10px, right: 10px</td></tr>
              <tr><td>checkmark size</td><td><code>—</code></td><td>24 &times; 24 px</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Both components shown across all interactive states.</p>

        <div class="variant-section">
          <p class="variant-section__label">BigSwitch — with icon</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unselected</th>
                  <th>Selected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><BigSwitch :model-value="'b'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" style="max-width:280px;" /></td>
                  <td><BigSwitch :model-value="'a'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" style="max-width:280px;" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><BigSwitch :model-value="'b'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" style="max-width:280px;" /></div></td>
                  <td><BigSwitch :model-value="'a'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" style="max-width:280px;" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><BigSwitch :model-value="'b'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" :disabled="true" style="max-width:280px;" /></td>
                  <td><BigSwitch :model-value="'a'" value="a" title="Monthly" description="Pay each month." :icon="iconCalendar" :disabled="true" style="max-width:280px;" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">BigSwitch — without icon</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Unselected</th>
                  <th>Selected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><BigSwitch :model-value="'b'" value="a" title="Standard" description="Basic access." style="max-width:280px;" /></td>
                  <td><BigSwitch :model-value="'a'" value="a" title="Standard" description="Basic access." style="max-width:280px;" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><BigSwitch :model-value="'b'" value="a" title="Standard" description="Basic access." :disabled="true" style="max-width:280px;" /></td>
                  <td><BigSwitch :model-value="'a'" value="a" title="Standard" description="Basic access." :disabled="true" style="max-width:280px;" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">SmallSwitch — with descriptions</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><SmallSwitch :model-value="'email'" :options="notifOptions" style="max-width:360px;" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="force-hover"><SmallSwitch :model-value="'none'" :options="notifOptions" style="max-width:360px;" /></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><SmallSwitch :model-value="'email'" :options="notifOptions" :disabled="true" style="max-width:360px;" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">SmallSwitch — title only</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><SmallSwitch :model-value="'weekly'" :options="frequencyOptions" style="max-width:300px;" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><SmallSwitch :model-value="'weekly'" :options="frequencyOptions" :disabled="true" style="max-width:300px;" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Selection model</h3>
        <ul>
          <li>Switch components behave like radio buttons: only one option is selected at a time within a group.</li>
          <li>Clicking an option emits <code>update:modelValue</code> with the option's <code>value</code> prop — standard <code>v-model</code> binding.</li>
          <li>A <code>change</code> event is also emitted with the selected value for non-v-model listeners.</li>
          <li>Re-clicking the already-selected option does nothing (value doesn't change).</li>
        </ul>

        <h3>Check icon</h3>
        <ul>
          <li>When an option becomes selected, a <code>PhCheckCircle</code> (duotone, 24px) appears at the top-right corner.</li>
          <li>The icon animates in with a 300ms elastic scale (<code>pop-in</code> keyframe).</li>
          <li>Color: <code>--marks-color-green-300</code>.</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>The component drops to <code>opacity: 0.5</code> and cursor becomes <code>not-allowed</code>.</li>
          <li>Clicks are suppressed — no events are emitted.</li>
          <li><code>SmallSwitch</code> accepts a global <code>disabled</code> prop and per-option <code>disabled</code> in the options array.</li>
        </ul>

        <h3>Hover state</h3>
        <ul>
          <li><strong>BigSwitch:</strong> unselected cards gain <code>--marks-color-gray-100</code> background, black outline, and a 4px box-shadow ring.</li>
          <li><strong>SmallSwitchOption:</strong> unselected rows gain <code>--marks-color-gray-100</code> background.</li>
          <li>Selected and disabled options ignore hover.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">BigSwitch — click to select</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <BigSwitch v-model="liveBig" value="monthly" title="Monthly" description="Pay each month, cancel anytime." :icon="iconCalendar" style="flex:1;min-width:200px;" />
              <BigSwitch v-model="liveBig" value="yearly" title="Yearly" description="Save 20% with annual billing." :icon="iconCreditCard" style="flex:1;min-width:200px;" />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ liveBig }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">SmallSwitch — click to select</span>
            <div style="max-width:400px;">
              <SmallSwitch v-model="liveSmall" :options="notifOptions" />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ liveSmall }}</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title text</h3>
        <ul>
          <li>Use sentence case: "Monthly billing", not "Monthly Billing".</li>
          <li>Keep titles short — 1–3 words for BigSwitch, up to 4 words for SmallSwitchOption.</li>
          <li>Each option's title must be distinct and immediately convey the choice.</li>
        </ul>

        <h3>Description text</h3>
        <ul>
          <li>Optional but recommended when titles alone are ambiguous.</li>
          <li>One sentence max. Explain what the user gets, not how to select.</li>
          <li>Example: "Automatically confirm new bookings without manual review."</li>
        </ul>

        <h3>Icon usage (BigSwitch)</h3>
        <ul>
          <li>Icons are optional. When used, they should reinforce the option's meaning at a glance.</li>
          <li>Use consistent icon weight and style across all options in a group.</li>
          <li>The icon slot renders inside a 79 &times; 79 px container with <code>--marks-radius-12</code>.</li>
        </ul>

        <h3>Option count</h3>
        <ul>
          <li><strong>BigSwitch:</strong> 2–4 options. More than 4 cards overwhelm the layout.</li>
          <li><strong>SmallSwitch:</strong> 2–6 options. Beyond 6, consider a <code>Select</code> dropdown.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Both <code>BigSwitch</code> and <code>SmallSwitchOption</code> render as <code>&lt;button type="button" role="radio"&gt;</code>.</li>
          <li><code>aria-checked</code> reflects whether the option matches the current <code>modelValue</code>.</li>
          <li><code>aria-disabled</code> is set when disabled, alongside the native <code>disabled</code> attribute.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus between switch options.</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — selects the focused option (native button behavior).</li>
          <li>Focus indicator follows the browser default or can be customized with <code>outline</code> styles.</li>
        </ul>

        <h3>Grouping</h3>
        <ul>
          <li>Wrap a set of <code>BigSwitch</code> cards in a container with <code>role="radiogroup"</code> and an <code>aria-label</code> describing the group.</li>
          <li><code>SmallSwitch</code> already acts as a visual group; add <code>role="radiogroup"</code> and <code>aria-label</code> on the wrapper for screen readers.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Always wrap <code>BigSwitch</code> groups with <code>role="radiogroup"</code> and <code>aria-label</code>. Without it, screen readers announce each card as an isolated radio button with no group context.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Plan selection (BigSwitch)</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;" role="radiogroup" aria-label="Select a plan">
              <BigSwitch v-model="exPlan" value="starter" title="Starter" description="For individuals getting started." :icon="iconCalendar" style="flex:1;min-width:180px;" />
              <BigSwitch v-model="exPlan" value="pro" title="Pro" description="For growing teams and businesses." :icon="iconCreditCard" style="flex:1;min-width:180px;" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Notification preference (SmallSwitch)</span>
            <div style="max-width:400px;">
              <SmallSwitch v-model="exNotif" :options="notifOptions" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Frequency setting (SmallSwitch, title only)</span>
            <div style="max-width:300px;">
              <SmallSwitch v-model="exFreq" :options="frequencyOptions" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — single option (no selection needed)</span>
            <div style="max-width:280px;">
              <BigSwitch :model-value="'only'" value="only" title="Only option" description="Nothing else to pick." />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">A switch with one option serves no purpose.</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many BigSwitch cards</span>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <BigSwitch :model-value="'a'" value="a" title="A" style="flex:1;min-width:100px;" />
              <BigSwitch :model-value="'a'" value="b" title="B" style="flex:1;min-width:100px;" />
              <BigSwitch :model-value="'a'" value="c" title="C" style="flex:1;min-width:100px;" />
              <BigSwitch :model-value="'a'" value="d" title="D" style="flex:1;min-width:100px;" />
              <BigSwitch :model-value="'a'" value="e" title="E" style="flex:1;min-width:100px;" />
              <BigSwitch :model-value="'a'" value="f" title="F" style="flex:1;min-width:100px;" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Use SmallSwitch or Select for 5+ options.</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for on/off toggles</span>
            <div style="max-width:300px;">
              <SmallSwitch :model-value="'on'" :options="[{value:'on',title:'On'},{value:'off',title:'Off'}]" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Use a Toggle for binary on/off states.</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>BigSwitch</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>The value this option represents. Selected when <code>modelValue === value</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary label text. Also available via the <code>title</code> slot.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary text below the title. Also available via the <code>description</code> slot.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Phosphor icon component (or any component). Rendered at 32px inside a 79px box. Also available via the <code>icon</code> slot.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
          </tbody>
        </table>

        <h3>SmallSwitch</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">options</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Array of option objects: <code>{ value, title, description?, disabled? }</code>. Each must have <code>value</code> and <code>title</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Disables all options. Individual options can also be disabled via <code>option.disabled</code>.</td>
            </tr>
          </tbody>
        </table>

        <h3>SmallSwitchOption</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently selected value (passed down from SmallSwitch).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">value</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>The value this option represents.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary label text. Also available via the <code>title</code> slot.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary text below the title. Also available via the <code>description</code> slot.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction and reduces opacity.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events (all three components)</h3>
        <table class="props-table">
          <thead>
            <tr><th>Event</th><th>Payload</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">update:modelValue</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td>Emitted on selection. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">change</code></td>
              <td><code class="prop-type">String | Number | Boolean</code></td>
              <td>Emitted alongside <code>update:modelValue</code> for non-v-model listeners.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Switch colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">BigSwitch</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <BigSwitch :model-value="'sel'" value="unsel" title="Unselected" description="Default card style." :icon="iconCalendar" style="flex:1;min-width:180px;" />
              <BigSwitch :model-value="'sel'" value="sel" title="Selected" description="Active card style." :icon="iconCreditCard" style="flex:1;min-width:180px;" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">SmallSwitch</span>
            <div style="max-width:360px;">
              <SmallSwitch :model-value="'email'" :options="notifOptions" />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">BigSwitch</span>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <BigSwitch :model-value="'sel'" value="unsel" title="Unselected" description="Default card style." :icon="iconCalendar" style="flex:1;min-width:180px;" />
              <BigSwitch :model-value="'sel'" value="sel" title="Selected" description="Active card style." :icon="iconCreditCard" style="flex:1;min-width:180px;" />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">SmallSwitch</span>
            <div style="max-width:360px;">
              <SmallSwitch :model-value="'email'" :options="notifOptions" />
            </div>
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
<pre><span class="token-comment">// BigSwitch — radio-like card selection</span>
<span class="token-tag">&lt;BigSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selectedPlan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"monthly"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Monthly"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Pay each month."</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhCalendarBlank"</span>
<span class="token-tag">/&gt;</span>

<span class="token-tag">&lt;BigSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selectedPlan"</span>
  <span class="token-attr">value</span>=<span class="token-string">"yearly"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Yearly"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Save 20%."</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhCreditCard"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// BigSwitch — without icon</span>
<span class="token-tag">&lt;BigSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"tier"</span>
  <span class="token-attr">value</span>=<span class="token-string">"standard"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Standard"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Basic access."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// BigSwitch — disabled</span>
<span class="token-tag">&lt;BigSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"tier"</span>
  <span class="token-attr">value</span>=<span class="token-string">"enterprise"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Enterprise"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// SmallSwitch — with descriptions</span>
<span class="token-tag">&lt;SmallSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"notifPref"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"[
    { value: 'email', title: 'Email',
      description: 'Via email.' },
    { value: 'sms', title: 'SMS',
      description: 'Text messages.' },
    { value: 'push', title: 'Push',
      description: 'In-app alerts.' }
  ]"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// SmallSwitch — title only</span>
<span class="token-tag">&lt;SmallSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"freq"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"[
    { value: 'daily', title: 'Daily' },
    { value: 'weekly', title: 'Weekly' },
    { value: 'monthly', title: 'Monthly' }
  ]"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// SmallSwitch — disabled</span>
<span class="token-tag">&lt;SmallSwitch</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"freq"</span>
  <span class="token-attr">:options</span>=<span class="token-string">"options"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- BigSwitch — rendered output --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">type</span>=<span class="token-string">"button"</span>
  <span class="token-attr">role</span>=<span class="token-string">"radio"</span>
  <span class="token-attr">aria-checked</span>=<span class="token-string">"false"</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch__icon-placeholder"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch__icon"</span><span class="token-tag">&gt;</span>
      …icon…
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch__text-container"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__description"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- BigSwitch — selected --&gt;</span>
<span class="token-tag">&lt;button</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch
     marks-big-switch--selected"</span>
  <span class="token-attr">aria-checked</span>=<span class="token-string">"true"</span>
<span class="token-tag">&gt;</span>
  …
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-big-switch__checkmark"</span><span class="token-tag">&gt;</span>
    …check icon…
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/button&gt;</span>


<span class="token-comment">&lt;!-- SmallSwitch — container --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-small-switch"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-small-switch-option
       marks-small-switch-option--selected"</span>
    <span class="token-attr">role</span>=<span class="token-string">"radio"</span>
    <span class="token-attr">aria-checked</span>=<span class="token-string">"true"</span>
  <span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__text-container"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__description"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__checkmark"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-small-switch__divider"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-small-switch-option"</span> …<span class="token-tag">&gt;</span>
    …
  <span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  BigSwitch:
    .marks-big-switch
    .marks-big-switch--selected
    .marks-big-switch--disabled
    .marks-big-switch__icon-placeholder
    .marks-big-switch__icon
    .marks-big-switch__icon--selected
    .marks-big-switch__text-container
    .marks-big-switch__title
    .marks-big-switch__description
    .marks-big-switch__checkmark

  SmallSwitch:
    .marks-small-switch
    .marks-small-switch__divider

  SmallSwitchOption:
    .marks-small-switch-option
    .marks-small-switch-option--selected
    .marks-small-switch-option--disabled
    .marks-small-switch-option__text-container
    .marks-small-switch-option__title
    .marks-small-switch-option__description
    .marks-small-switch-option__checkmark
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── BigSwitch ───</span>

<span class="token-comment">// Card</span>
<span class="token-attr">padding</span>:       <span class="token-number">28px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">background</span>:    <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>:        <span class="token-number">2px</span> solid transparent;
<span class="token-attr">outline</span>:       <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// Selected</span>
<span class="token-attr">background</span>: rgba(<span class="token-number">14</span>, <span class="token-number">88</span>, <span class="token-number">66</span>, <span class="token-number">0.05</span>);
<span class="token-attr">border</span>:     <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);

<span class="token-comment">// Hover (unselected)</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">outline-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">4px</span>
  rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>);

<span class="token-comment">// Disabled</span>
<span class="token-attr">opacity</span>:    <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>:     not-allowed;


<span class="token-comment">// ─── Icon box ───</span>

<span class="token-attr">width</span>:  <span class="token-number">79px</span>;
<span class="token-attr">height</span>: <span class="token-number">79px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// Icon — selected</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);


<span class="token-comment">// ─── SmallSwitchOption ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-20</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);

<span class="token-comment">// Selected</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-primary-light</span>);

<span class="token-comment">// Hover (unselected)</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);


<span class="token-comment">// ─── SmallSwitch container ───</span>

<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">border</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Typography ───</span>

<span class="token-comment">// Title (both)</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: $marks-font-weight-medium;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Description (both)</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Spacing ───</span>

<span class="token-comment">// BigSwitch: icon → text</span>
<span class="token-attr">gap</span>: <span class="token-number">21px</span>;
<span class="token-comment">// BigSwitch: title → description</span>
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-comment">// SmallSwitchOption: title → description</span>
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);


<span class="token-comment">// ─── Checkmark ───</span>

<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);
<span class="token-attr">position</span>: absolute;
<span class="token-attr">top</span>: <span class="token-number">10px</span>;
<span class="token-attr">right</span>: <span class="token-number">10px</span>;</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { PhCalendarBlank, PhCreditCard } from '@phosphor-icons/vue';

import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'SwitchDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      iconCalendar: PhCalendarBlank,
      iconCreditCard: PhCreditCard,
      demoBig: 'monthly',
      demoSmall: 'email',
      liveBig: 'monthly',
      liveSmall: 'email',
      exPlan: 'starter',
      exNotif: 'email',
      exFreq: 'weekly',
      notifOptions: [
        { value: 'email', title: 'Email', description: 'Receive updates via email.' },
        { value: 'sms', title: 'SMS', description: 'Get text message alerts.' },
        { value: 'push', title: 'Push', description: 'In-app push notifications.' }
      ],
      frequencyOptions: [
        { value: 'daily', title: 'Daily' },
        { value: 'weekly', title: 'Weekly' },
        { value: 'monthly', title: 'Monthly' }
      ],
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

/* Force hover state for BigSwitch */
.force-hover .marks-big-switch:not(.marks-big-switch--disabled):not(.marks-big-switch--selected) {
  background-color: var(--marks-color-gray-100) !important;
  outline-color: var(--marks-color-black) !important;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3) !important;
}

/* Force hover state for SmallSwitchOption */
.force-hover .marks-small-switch-option:not(.marks-small-switch-option--disabled):not(.marks-small-switch-option--selected) {
  background-color: var(--marks-color-gray-100) !important;
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
