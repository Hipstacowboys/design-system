<template>
  <DocHeader active-page="card-with-counter" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="card-with-counter" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Card With Counter</h1>
        <p class="content__lead">
          A card-based quantity selector with increment/decrement stepper buttons.
          Supports an optional icon, title, description, and disabled state.
          Uses <code>v-model</code> binding for the count value and shows a
          selected visual state when the count is greater than zero.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Quantity selection</strong> — choosing how many of an item to add (rooms, guests, tickets, products).</li>
          <li><strong>Stepper input</strong> — when a numeric input needs bounded, button-driven control instead of free-text entry.</li>
          <li><strong>Multi-select with counts</strong> — a grid of cards where each card tracks its own quantity independently.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the user only needs to pick one item from a set — use a <code>Radio</code> or <code>Select</code>.</li>
          <li>If the value can be any arbitrary number — use an <code>Input</code> with <code>type="number"</code>.</li>
          <li>For on/off binary choices — use a <code>Toggle</code> or <code>Checkbox</code>.</li>
        </ul>

        <h3>Quick preview</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">With icon, title &amp; description</span>
            <div style="max-width:320px;">
              <CardWithCounter
                v-model="demoPreview1"
                title="Double Room"
                description="King-size bed, en-suite bathroom"
                :icon="bedIcon"
              />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Title only</span>
            <div style="max-width:320px;">
              <CardWithCounter
                v-model="demoPreview2"
                title="Extra towels"
              />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The card is a vertical flex container with optional icon, header group (title + description), and a stepper row. A checkmark appears top-right when selected.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">All regions</span>
            <div style="max-width:320px;">
              <CardWithCounter
                :model-value="2"
                title="Double Room"
                description="King-size bed, en-suite bathroom"
                :icon="bedIcon"
                style="pointer-events:none;"
              />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-count-with-counter__icon</code> ·
              <code>.marks-count-with-counter__header-description</code> ·
              <code>.marks-count-with-counter__title</code> ·
              <code>.marks-count-with-counter__description</code> ·
              <code>.marks-count-with-counter__button-container</code> ·
              <code>.marks-count-with-counter__count</code> ·
              <code>.marks-count-with-counter__checkmark</code>
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension tokens</h3>
        <p class="comp-section-desc">Fixed padding and gap values. The card takes 100% width of its parent container.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Card With Counter</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-28</code></td><td>28px</td></tr>
              <tr><td>gap (vertical)</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-16</code></td><td>16px</td></tr>
              <tr><td>border (default)</td><td><code>—</code></td><td>2px solid transparent + 1px outline gray-200</td></tr>
              <tr><td>border (selected)</td><td><code>--marks-color-green-300</code></td><td>2px solid</td></tr>
              <tr><td>icon size</td><td><code>—</code></td><td>32 × 32px</td></tr>
              <tr><td>title ↔ description gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>stepper button gap</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>count min-width</td><td><code>—</code></td><td>20px</td></tr>
              <tr><td>checkmark position</td><td><code>—</code></td><td>top: 10px, right: 10px</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Cards shown across composition and state permutations.</p>

        <div class="variant-section">
          <p class="variant-section__label">With icon + title + description</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Default (0)</th>
                  <th>Selected (2)</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="2" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" :disabled="true" />
                  </td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td class="variant-cell">
                    <div class="force-hover"><CardWithCounter :model-value="0" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" /></div>
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="2" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" :disabled="true" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Title only (no icon, no description)</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Default (0)</th>
                  <th>Selected (3)</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Extra towels" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="3" title="Extra towels" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Extra towels" :disabled="true" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">With icon, no description</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Default (0)</th>
                  <th>Selected (1)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="0" title="Guests" :icon="usersIcon" />
                  </td>
                  <td class="variant-cell">
                    <CardWithCounter :model-value="1" title="Guests" :icon="usersIcon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Various counts</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
                <CardWithCounter :model-value="0" title="Zero" :icon="coffeeIcon" />
                <CardWithCounter :model-value="1" title="One" :icon="coffeeIcon" />
                <CardWithCounter :model-value="5" title="Five" :icon="coffeeIcon" />
                <CardWithCounter :model-value="99" title="Ninety-nine" :icon="coffeeIcon" />
              </div>
            </div>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Increment / decrement</h3>
        <ul>
          <li>Clicking the <strong>+</strong> button increments the count by 1 and emits <code>update:modelValue</code> and <code>change</code>.</li>
          <li>Clicking the <strong>−</strong> button decrements the count by 1, with a floor of <strong>0</strong>.</li>
          <li>The minus button is automatically disabled when the count reaches 0.</li>
        </ul>

        <h3>Selected state</h3>
        <ul>
          <li>When <code>modelValue &gt; 0</code>, the card enters the <em>selected</em> visual state — green border, tinted background, and a checkmark icon appears top-right.</li>
          <li>Decrementing back to 0 reverts to the default appearance.</li>
          <li>The checkmark animates in with a <code>pop-in</code> keyframe (scale 0 → 1.2 → 1 over 300ms).</li>
        </ul>

        <h3>Disabled state</h3>
        <ul>
          <li>Both buttons become inert. The entire card drops to <code>opacity: 0.5</code> and shows <code>cursor: not-allowed</code>.</li>
          <li>Hover effects are suppressed.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Interact with the counter</span>
            <div style="max-width:320px;">
              <CardWithCounter
                v-model="demoLive"
                title="Double Room"
                description="King-size bed, en-suite bathroom"
                :icon="bedIcon"
              />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;margin-top:8px;">v-model: <code>{{ demoLive }}</code></span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Disabled card</span>
            <div style="max-width:320px;">
              <CardWithCounter
                :model-value="0"
                title="Locked option"
                description="This option is not available."
                :icon="coffeeIcon"
                :disabled="true"
              />
            </div>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title text</h3>
        <ul>
          <li>Use sentence case: "Double room", not "Double Room" (unless it's a proper noun).</li>
          <li>Keep it concise — 1–4 words that name the item being counted.</li>
          <li>Avoid repeating the word "quantity" — the stepper makes the purpose clear.</li>
        </ul>

        <h3>Description text</h3>
        <ul>
          <li>Optional — only add when the title alone isn't enough to identify the item.</li>
          <li>One sentence max. Describe what the item includes or why it matters.</li>
          <li>Example: "King-size bed, en-suite bathroom."</li>
        </ul>

        <h3>Icon</h3>
        <ul>
          <li>Use a Phosphor icon component that visually represents the item category.</li>
          <li>Rendered at 32 × 32px with <code>weight="regular"</code>.</li>
          <li>Omit the icon when the title is self-explanatory or screen space is tight.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Stepper buttons</h3>
        <ul>
          <li>The +/− buttons are rendered via <code>ButtonLine</code> with <code>icon-only</code> mode, which outputs <code>&lt;button&gt;</code> elements with accessible icon labels.</li>
          <li>The minus button receives <code>disabled</code> when <code>count === 0</code>, preventing interaction and announcing the disabled state to assistive technology.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus between the − and + buttons inside the card.</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — activates the focused button (native <code>&lt;button&gt;</code> behavior).</li>
        </ul>

        <h3>Count announcement</h3>
        <ul>
          <li>The count value is visible text inside the card. Consider adding <code>aria-live="polite"</code> on the count element for real-time screen-reader announcements when the value changes.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>When using multiple CardWithCounter components in a grid, wrap each in a labelled region or provide <code>aria-label</code> attributes so screen readers can distinguish them.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Room booking grid</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;max-width:780px;">
              <CardWithCounter v-model="exRoom1" title="Single Room" description="Twin bed, shared bathroom" :icon="bedIcon" />
              <CardWithCounter v-model="exRoom2" title="Double Room" description="King-size bed, en-suite" :icon="bedIcon" />
              <CardWithCounter v-model="exRoom3" title="Suite" description="Living area, premium amenities" :icon="coffeeIcon" />
            </div>
          </div>
        </div>

        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Guest count (icon, no description)</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;max-width:520px;">
              <CardWithCounter v-model="exAdults" title="Adults" :icon="usersIcon" />
              <CardWithCounter v-model="exChildren" title="Children" :icon="usersIcon" />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — binary yes/no choice</span>
            <div style="max-width:260px;">
              <CardWithCounter :model-value="0" title="Accept terms" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Use a Checkbox or Toggle instead</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — action trigger</span>
            <div style="max-width:260px;">
              <CardWithCounter :model-value="0" title="Submit form" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Use a Button for actions</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>CardWithCounter</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Number</code></td>
              <td><code class="prop-default">0</code></td>
              <td>Current count value. Use with <code>v-model</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary label text displayed in the card header.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary text below the title. Omit for compact cards.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Phosphor icon component rendered at 32px. Pass the imported component reference.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">disabled</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prevents interaction, reduces opacity, suppresses hover.</td>
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
              <td><code class="prop-type">Number</code></td>
              <td>Emitted on increment/decrement. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">change</code></td>
              <td><code class="prop-type">Number</code></td>
              <td>Emitted alongside <code>update:modelValue</code> with the new count value.</td>
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
              <td>Props <code>title</code></td>
              <td>Override the title text with custom markup.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td>Props <code>description</code></td>
              <td>Override the description text with custom markup.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Card colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default &amp; selected</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;max-width:520px;">
              <CardWithCounter :model-value="0" title="Standard" :icon="bedIcon" />
              <CardWithCounter :model-value="2" title="Selected" :icon="bedIcon" />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Default &amp; selected</span>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;max-width:520px;">
              <CardWithCounter :model-value="0" title="Standard" :icon="bedIcon" />
              <CardWithCounter :model-value="2" title="Selected" :icon="bedIcon" />
            </div>
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

        <h3>Key token mapping</h3>
        <table class="anatomy-table">
          <thead><tr><th>Element</th><th>Light token</th><th>Role</th></tr></thead>
          <tbody>
            <tr><td>card background</td><td><code>--marks-color-white</code></td><td>Surface</td></tr>
            <tr><td>card border (default)</td><td><code>--marks-color-gray-200</code></td><td>Subtle outline</td></tr>
            <tr><td>card border (selected)</td><td><code>--marks-color-green-300</code></td><td>Active emphasis</td></tr>
            <tr><td>hover background</td><td><code>--marks-color-gray-100</code></td><td>Interactive feedback</td></tr>
            <tr><td>hover border</td><td><code>--marks-color-black</code></td><td>Stronger outline</td></tr>
            <tr><td>title text</td><td><code>--marks-color-black</code></td><td>Primary text</td></tr>
            <tr><td>description text</td><td><code>--marks-color-gray-300</code></td><td>Secondary text</td></tr>
            <tr><td>checkmark</td><td><code>--marks-color-green-300</code></td><td>Selection indicator</td></tr>
            <tr><td>disabled text</td><td><code>--marks-color-gray-200</code></td><td>Muted text</td></tr>
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
<pre><span class="token-comment">// Basic card with v-model</span>
<span class="token-tag">&lt;CardWithCounter</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"roomCount"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Double Room"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With icon + description</span>
<span class="token-tag">&lt;CardWithCounter</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"roomCount"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Double Room"</span>
  <span class="token-attr">description</span>=<span class="token-string">"King-size bed, en-suite
    bathroom"</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhBed"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Disabled</span>
<span class="token-tag">&lt;CardWithCounter</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"locked"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Locked option"</span>
  <span class="token-attr">:disabled</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Listening for changes</span>
<span class="token-tag">&lt;CardWithCounter</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"guests"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Adults"</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhUsers"</span>
  <span class="token-attr">@change</span>=<span class="token-string">"onCountChange"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Grid layout</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">style</span>=<span class="token-string">"display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;CardWithCounter</span>
    <span class="token-attr">v-model</span>=<span class="token-string">"single"</span>
    <span class="token-attr">title</span>=<span class="token-string">"Single"</span>
    <span class="token-attr">:icon</span>=<span class="token-string">"PhBed"</span>
  <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;CardWithCounter</span>
    <span class="token-attr">v-model</span>=<span class="token-string">"double"</span>
    <span class="token-attr">title</span>=<span class="token-string">"Double"</span>
    <span class="token-attr">:icon</span>=<span class="token-string">"PhBed"</span>
  <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;CardWithCounter</span>
    <span class="token-attr">v-model</span>=<span class="token-string">"suite"</span>
    <span class="token-attr">title</span>=<span class="token-string">"Suite"</span>
    <span class="token-attr">:icon</span>=<span class="token-string">"PhBed"</span>
  <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/div&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Default state (count = 0) --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-count-with-counter"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-count-with-counter__icon"</span><span class="token-tag">&gt;</span>
    <span class="token-comment">&lt;!-- Phosphor icon SVG --&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__header-description"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__description"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__button-container"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button-line …"</span><span class="token-tag">&gt;</span>−<span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__count"</span><span class="token-tag">&gt;</span>0<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button-line …"</span><span class="token-tag">&gt;</span>+<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Selected state (count &gt; 0) --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-count-with-counter
    marks-count-with-counter--selected"</span>
<span class="token-tag">&gt;</span>
  …
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__checkmark"</span><span class="token-tag">&gt;</span>
    <span class="token-comment">&lt;!-- PhCheckCircle SVG --&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Disabled state --&gt;</span>
<span class="token-tag">&lt;div</span>
  <span class="token-attr">class</span>=<span class="token-string">"marks-count-with-counter
    marks-count-with-counter--disabled"</span>
<span class="token-tag">&gt;</span>
  …
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-count-with-counter
  .marks-count-with-counter--selected
  .marks-count-with-counter--disabled
  .marks-count-with-counter__icon
  .marks-count-with-counter__header-description
  .marks-count-with-counter__title
  .marks-count-with-counter__description
  .marks-count-with-counter__button-container
  .marks-count-with-counter__count
  .marks-count-with-counter__checkmark
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Card container ───</span>

<span class="token-attr">display</span>: flex;
<span class="token-attr">flex-direction</span>: column;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-28</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid transparent;
<span class="token-attr">outline</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Hover (default only) ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">outline-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">4px</span>
  rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>);


<span class="token-comment">// ─── Selected (count &gt; 0) ───</span>

<span class="token-attr">background</span>: rgba(<span class="token-number">14</span>,<span class="token-number">88</span>,<span class="token-number">66</span>,<span class="token-number">0.05</span>);
<span class="token-attr">border</span>: <span class="token-number">2px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);


<span class="token-comment">// ─── Disabled ───</span>

<span class="token-attr">opacity</span>: <span class="token-number">0.5</span>;
<span class="token-attr">cursor</span>: not-allowed;
<span class="token-attr">outline-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);


<span class="token-comment">// ─── Icon ───</span>

<span class="token-attr">width</span>:  <span class="token-number">32px</span>;
<span class="token-attr">height</span>: <span class="token-number">32px</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Typography ───</span>

<span class="token-comment">// Title</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Description</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);

<span class="token-comment">// Count</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;
<span class="token-attr">min-width</span>: <span class="token-number">20px</span>;
<span class="token-attr">text-align</span>: center;


<span class="token-comment">// ─── Checkmark ───</span>

<span class="token-attr">position</span>: absolute;
<span class="token-attr">top</span>: <span class="token-number">10px</span>;
<span class="token-attr">right</span>: <span class="token-number">10px</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);
<span class="token-attr">animation</span>: pop-in <span class="token-number">0.3s</span>
  cubic-bezier(<span class="token-number">0.34</span>,<span class="token-number">1.56</span>,<span class="token-number">0.64</span>,<span class="token-number">1</span>);</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { PhBed, PhUsers, PhCoffee } from '@phosphor-icons/vue';
import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'CardWithCounterDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoPreview1: 0,
      demoPreview2: 0,
      demoLive: 0,
      exRoom1: 0,
      exRoom2: 1,
      exRoom3: 0,
      exAdults: 2,
      exChildren: 0,
      bedIcon: PhBed,
      usersIcon: PhUsers,
      coffeeIcon: PhCoffee,
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

/* Force hover state for CardWithCounter */
.force-hover .marks-count-with-counter:not(.marks-count-with-counter--disabled):not(.marks-count-with-counter--selected) {
  background-color: var(--marks-color-gray-100) !important;
  outline-color: var(--marks-color-black) !important;
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3) !important;
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

.variant-cell {
  min-width: 220px;
  max-width: 280px;
  padding: 12px 16px;
}

.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
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
