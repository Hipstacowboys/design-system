<template>
  <DocHeader active-page="dropdown" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="dropdown" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Dropdown</h1>
        <p class="content__lead">
          A floating panel triggered by a click. The <code>Dropdown</code> component
          uses a slot-based API — pass any trigger element via the
          <code>trigger</code> slot and panel content via the default slot.
          The panel closes on click-outside and opens/closes with a smooth
          fade + slide transition.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Action menus</strong> — contextual actions like edit, delete, duplicate that appear on demand.</li>
          <li><strong>Option panels</strong> — lists of selectable items, filter menus, or sort controls.</li>
          <li><strong>Overflow menus</strong> — actions that don't fit in a toolbar or row.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For form value selection — use a <code>Select</code> component instead.</li>
          <li>For navigation menus — use <code>NavbarSide</code> or a dedicated nav component.</li>
          <li>For tooltips or hover-triggered info — use <code>Tooltip</code>.</li>
          <li>For confirmation dialogs — use <code>NotificationDialog</code>.</li>
        </ul>

        <h3>Basic demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click the button to open</span>
            <Dropdown ref="demoBasic">
              <template #trigger>
                <button class="demo-trigger" type="button">Actions</button>
              </template>
              <button class="marks-dropdown__item" type="button">Edit</button>
              <button class="marks-dropdown__item" type="button">Duplicate</button>
              <button class="marks-dropdown__item" type="button">Delete</button>
            </Dropdown>
          </div>
        </div>

        <!-- ─── 2. Anatomy ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Dropdown has two structural parts: the wrapper (positioning context) and the floating panel.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Wrapper + Panel</span>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-dropdown-wrapper</code> (position:relative container) ·
              <code>.marks-dropdown</code> (floating panel)
            </div>
          </div>
        </div>

        <h3>Panel dimensions &amp; spacing</h3>
        <p class="comp-section-desc">The panel auto-sizes based on content with minimum and maximum constraints.</p>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Dropdown panel</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame" style="width:200px;height:auto;min-height:80px;">
              <div class="anatomy-panel-mock">
                <div class="anatomy-panel-mock__item">Item 1</div>
                <div class="anatomy-panel-mock__item">Item 2</div>
                <div class="anatomy-panel-mock__item">Item 3</div>
              </div>
              <!-- min-width badge (top) -->
              <div class="btn-anatomy__badge" :style="{ top: '-24px', left: '0' }">200</div>
              <div class="btn-anatomy__line" :style="{ top: '-10px', left: '0', width: '200px', height: '1px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '0', width: '1px', height: '9px' }"></div>
              <div class="btn-anatomy__tick" :style="{ top: '-14px', left: '200px', width: '1px', height: '9px' }"></div>
              <!-- margin-top badge (right) -->
              <div class="btn-anatomy__badge" :style="{ top: '-20px', right: '-28px' }">6</div>
              <!-- padding badge (bottom) -->
              <div class="btn-anatomy__badge" :style="{ bottom: '-24px', left: '0' }">8</div>
              <div class="btn-anatomy__pad" :style="{ inset: '0', width: '100%', height: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: 'auto 0 0 0', width: '100%', height: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '8px auto 8px 0', width: '8px' }"></div>
              <div class="btn-anatomy__pad" :style="{ inset: '8px 0 8px auto', width: '8px' }"></div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>min-width</td><td><code>—</code></td><td>200px</td></tr>
              <tr><td>max-height</td><td><code>—</code></td><td>300px</td></tr>
              <tr><td>margin-top</td><td><code>—</code></td><td>6px</td></tr>
              <tr><td>padding</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-24</code></td><td>24px</td></tr>
              <tr><td>box-shadow</td><td><code>—</code></td><td>0 14px 30px rgba(0,0,0,0.15)</td></tr>
              <tr><td>background</td><td><code>--marks-color-white</code></td><td>#FFFFFF</td></tr>
              <tr><td>z-index</td><td><code>—</code></td><td>1000</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Dropdown item</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>gap (icon to text)</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>font</td><td><code>marks-typography-paragraph-md-multiline</code></td><td>paragraph-md</td></tr>
              <tr><td>color</td><td><code>--marks-color-black</code></td><td>#1a1a1a</td></tr>
              <tr><td>hover background</td><td><code>--marks-color-gray-100</code></td><td>#F5F5F5</td></tr>
              <tr><td>disabled color</td><td><code>--marks-color-gray-200</code></td><td>#D1D1D1</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; states</h2>
        <p class="comp-section-desc">The dropdown itself has two states — open and closed. Items inside have default, hover, selected, and disabled states.</p>

        <div class="variant-section">
          <p class="variant-section__label">Panel states</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Closed</th>
                  <th>Open</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td>
                    <Dropdown>
                      <template #trigger><button class="demo-trigger demo-trigger--sm" type="button">Menu</button></template>
                      <button class="marks-dropdown__item" type="button">Item</button>
                    </Dropdown>
                  </td>
                  <td>
                    <div class="force-open-panel">
                      <div class="marks-dropdown-wrapper">
                        <button class="demo-trigger demo-trigger--sm" type="button">Menu</button>
                        <div class="marks-dropdown" style="position:relative;top:auto;margin-top:6px;">
                          <button class="marks-dropdown__item" type="button">Edit</button>
                          <button class="marks-dropdown__item" type="button">Duplicate</button>
                          <button class="marks-dropdown__item" type="button">Delete</button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Item states</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Appearance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">Default</span></td>
                  <td><div class="inline-item-demo"><button class="marks-dropdown__item" type="button">Edit item</button></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--hover">Hover</span></td>
                  <td><div class="inline-item-demo"><button class="marks-dropdown__item force-item-hover" type="button">Edit item</button></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--active">Selected</span></td>
                  <td><div class="inline-item-demo"><button class="marks-dropdown__item marks-dropdown__item--selected" type="button">Edit item</button></div></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--disabled">Disabled</span></td>
                  <td><div class="inline-item-demo"><button class="marks-dropdown__item marks-dropdown__item--disabled" type="button">Edit item</button></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Toggle on click</h3>
        <ul>
          <li>Clicking the trigger slot toggles the panel open/closed.</li>
          <li>Internal state <code>isOpen</code> drives visibility via <code>v-if</code>.</li>
          <li>The panel uses Vue's <code>&lt;Transition&gt;</code> with a fade + slide animation (200 ms ease).</li>
        </ul>

        <h3>Click-outside closes</h3>
        <ul>
          <li>A document-level click listener checks whether the event target is inside <code>.marks-dropdown-wrapper</code>.</li>
          <li>If outside, the panel closes immediately.</li>
          <li>The listener is added on <code>mounted</code> and removed on <code>beforeUnmount</code> for proper cleanup.</li>
        </ul>

        <h3>Slot content</h3>
        <ul>
          <li>The <code>trigger</code> named slot wraps whatever element triggers the dropdown (typically a button).</li>
          <li>The default slot renders inside the floating panel — use <code>.marks-dropdown__item</code> buttons for menu items.</li>
          <li><code>@mousedown.prevent</code> on the panel prevents focus stealing from the trigger.</li>
          <li><code>@click.stop</code> on the panel prevents click-outside from firing when interacting with items.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Click to toggle</span>
            <Dropdown>
              <template #trigger>
                <button class="demo-trigger" type="button">Options</button>
              </template>
              <button class="marks-dropdown__item" type="button" @click="handleItemClick('Profile')">Profile</button>
              <button class="marks-dropdown__item" type="button" @click="handleItemClick('Settings')">Settings</button>
              <button class="marks-dropdown__item" type="button" @click="handleItemClick('Sign out')">Sign out</button>
            </Dropdown>
            <span style="font-size:0.8rem;color:#6F6F6F;">Last action: <code v-text="lastAction"></code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Menu items</h3>
        <ul>
          <li>Use sentence case: "Edit item", not "Edit Item".</li>
          <li>Keep labels to 1–3 words. The action should be instantly recognizable.</li>
          <li>Use verbs: "Edit", "Delete", "Duplicate" — not nouns like "Editor" or "Deletion".</li>
          <li>Order by frequency of use, then group by category with visual dividers.</li>
        </ul>

        <h3>Dividers</h3>
        <ul>
          <li>Use a styled <code>&lt;hr&gt;</code> or a spacer element between logical groups (e.g. primary actions vs destructive actions).</li>
          <li>Keep groups to 2–5 items; more than 7 total items signals a design review is needed.</li>
        </ul>

        <h3>Icons</h3>
        <ul>
          <li>Optional — add an icon before the label via the item's inner HTML.</li>
          <li>Keep icons consistent in size (16–20 px) and style across all items.</li>
          <li>If one item has an icon, all items in the group should have one.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Enter</kbd> / <kbd>Space</kbd> on the trigger — toggles the panel.</li>
          <li><kbd>Escape</kbd> — closes the panel and returns focus to the trigger.</li>
          <li><kbd>Tab</kbd> — moves focus through items inside the panel.</li>
          <li><kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> — recommended for item navigation (requires custom implementation).</li>
        </ul>

        <h3>Focus management</h3>
        <ul>
          <li>When the panel opens, focus should move to the first item (implement with a <code>nextTick</code> focus call).</li>
          <li>When the panel closes, focus should return to the trigger element.</li>
          <li>Use <code>role="menu"</code> on the panel and <code>role="menuitem"</code> on items for ARIA semantics.</li>
        </ul>

        <h3>ARIA attributes</h3>
        <ul>
          <li>Trigger: <code>aria-haspopup="true"</code> and <code>aria-expanded</code> reflecting open state.</li>
          <li>Panel: <code>role="menu"</code>.</li>
          <li>Items: <code>role="menuitem"</code>.</li>
          <li>Disabled items: <code>aria-disabled="true"</code>.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Add <code>aria-haspopup</code> and <code>aria-expanded</code> to your trigger element. The component does not add these automatically since the trigger is slot-provided.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Action menu</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Row actions</span>
            <Dropdown>
              <template #trigger>
                <button class="demo-trigger demo-trigger--icon" type="button" aria-haspopup="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="4" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="16" r="2"/></svg>
                </button>
              </template>
              <button class="marks-dropdown__item" type="button">Edit</button>
              <button class="marks-dropdown__item" type="button">Duplicate</button>
              <button class="marks-dropdown__item marks-dropdown__item--disabled" type="button">Archive</button>
              <hr class="dropdown-divider" />
              <button class="marks-dropdown__item dropdown-item--danger" type="button">Delete</button>
            </Dropdown>
          </div>
        </div>

        <h3>Selection menu</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Sort by</span>
            <Dropdown>
              <template #trigger>
                <button class="demo-trigger" type="button">Sort: Newest first</button>
              </template>
              <button class="marks-dropdown__item marks-dropdown__item--selected" type="button">Newest first</button>
              <button class="marks-dropdown__item" type="button">Oldest first</button>
              <button class="marks-dropdown__item" type="button">Name A–Z</button>
              <button class="marks-dropdown__item" type="button">Name Z–A</button>
            </Dropdown>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many items</span>
            <span style="font-size:0.75rem;color:#FD3860;">Limit to ~7 items. Beyond that, use a separate panel or dialog.</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — for form selection</span>
            <span style="font-size:0.75rem;color:#FD3860;">Use the Select component for form inputs with validation.</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — hover trigger</span>
            <span style="font-size:0.75rem;color:#FD3860;">Always use click, not hover. Hover menus are inaccessible on touch.</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>
        <p class="comp-section-desc">Dropdown is entirely slot-based with no props or emitted events.</p>

        <h3>Slots</h3>
        <table class="props-table">
          <thead>
            <tr><th>Slot</th><th>Purpose</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">trigger</code></td>
              <td>The clickable element that toggles the panel.</td>
              <td>Typically a <code>&lt;button&gt;</code>. Click handler is added by the wrapper.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">default</code></td>
              <td>Content rendered inside the floating panel.</td>
              <td>Use <code>.marks-dropdown__item</code> buttons for standard menu items.</td>
            </tr>
          </tbody>
        </table>

        <h3>Exposed methods</h3>
        <table class="props-table">
          <thead>
            <tr><th>Method</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">toggleDropdown()</code></td>
              <td>Programmatically toggle the panel open/closed.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">closeDropdown()</code></td>
              <td>Programmatically close the panel.</td>
            </tr>
          </tbody>
        </table>

        <h3>BEM classes</h3>
        <table class="props-table">
          <thead>
            <tr><th>Class</th><th>Element</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">.marks-dropdown-wrapper</code></td>
              <td>Root</td>
              <td>Inline-block positioning context for the panel.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">.marks-dropdown</code></td>
              <td>Panel</td>
              <td>The floating container. Rendered via <code>v-if</code> + Transition.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">.marks-dropdown__item</code></td>
              <td>Item</td>
              <td>Standard menu item button with hover/active styles.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">.marks-dropdown__item--selected</code></td>
              <td>Modifier</td>
              <td>Highlights the currently active/selected item.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">.marks-dropdown__item--disabled</code></td>
              <td>Modifier</td>
              <td>Prevents interaction, changes cursor and text color.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Dropdown colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label">Open panel</span>
            <div class="force-open-panel">
              <div class="marks-dropdown-wrapper">
                <button class="demo-trigger demo-trigger--sm" type="button">Actions</button>
                <div class="marks-dropdown" style="position:relative;top:auto;margin-top:6px;">
                  <button class="marks-dropdown__item" type="button">Edit</button>
                  <button class="marks-dropdown__item marks-dropdown__item--selected" type="button">Duplicate</button>
                  <button class="marks-dropdown__item marks-dropdown__item--disabled" type="button">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Open panel</span>
            <div class="force-open-panel">
              <div class="marks-dropdown-wrapper">
                <button class="demo-trigger demo-trigger--sm" type="button">Actions</button>
                <div class="marks-dropdown" style="position:relative;top:auto;margin-top:6px;">
                  <button class="marks-dropdown__item" type="button">Edit</button>
                  <button class="marks-dropdown__item marks-dropdown__item--selected" type="button">Duplicate</button>
                  <button class="marks-dropdown__item marks-dropdown__item--disabled" type="button">Delete</button>
                </div>
              </div>
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
<pre><span class="token-comment">// Basic dropdown with action items</span>
<span class="token-tag">&lt;Dropdown&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">type</span>=<span class="token-string">"button"</span><span class="token-tag">&gt;</span>Actions<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>Edit<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>Delete<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/Dropdown&gt;</span>


<span class="token-comment">// With selected + disabled items</span>
<span class="token-tag">&lt;Dropdown&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button&gt;</span>Sort<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item
    marks-dropdown__item--selected"</span><span class="token-tag">&gt;</span>
    Newest
  <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item
    marks-dropdown__item--disabled"</span><span class="token-tag">&gt;</span>
    Archived
  <span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/Dropdown&gt;</span>


<span class="token-comment">// Programmatic close via ref</span>
<span class="token-tag">&lt;Dropdown</span> <span class="token-attr">ref</span>=<span class="token-string">"myDropdown"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#trigger</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button&gt;</span>Menu<span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
  <span class="token-tag">&lt;button</span>
    <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span>
    <span class="token-attr">@click</span>=<span class="token-string">"doAction();
      $refs.myDropdown.closeDropdown()"</span>
  <span class="token-tag">&gt;</span>Confirm<span class="token-tag">&lt;/button&gt;</span>
<span class="token-tag">&lt;/Dropdown&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Rendered output — closed --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">type</span>=<span class="token-string">"button"</span><span class="token-tag">&gt;</span>
      Actions
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-comment">&lt;!-- panel hidden via v-if --&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Rendered output — open --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown-wrapper"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">type</span>=<span class="token-string">"button"</span><span class="token-tag">&gt;</span>
      Actions
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>
      Edit
    <span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>
      Duplicate
    <span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item
      marks-dropdown__item--disabled"</span><span class="token-tag">&gt;</span>
      Archive
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-dropdown-wrapper
  .marks-dropdown
  .marks-dropdown__item
  .marks-dropdown__item--selected
  .marks-dropdown__item--disabled
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Panel ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-24</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">14px</span> <span class="token-number">30px</span>
  rgba(<span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0</span>, <span class="token-number">0.15</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-attr">min-width</span>: <span class="token-number">200px</span>;
<span class="token-attr">max-height</span>: <span class="token-number">300px</span>;
<span class="token-attr">overflow-y</span>: auto;
<span class="token-attr">z-index</span>: <span class="token-number">1000</span>;


<span class="token-comment">// ─── Item ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Item states ───</span>

<span class="token-comment">// Hover</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);

<span class="token-comment">// Selected</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;

<span class="token-comment">// Disabled</span>
<span class="token-attr">cursor</span>: not-allowed;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Transition ───</span>

<span class="token-attr">transition</span>: opacity <span class="token-number">0.2s</span> ease,
  transform <span class="token-number">0.2s</span> ease;

<span class="token-comment">// Enter-from / leave-to</span>
<span class="token-attr">opacity</span>: <span class="token-number">0</span>;
<span class="token-attr">transform</span>: translateY(<span class="token-number">-4px</span>);


<span class="token-comment">// ─── Wrapper ───</span>

<span class="token-attr">position</span>: relative;
<span class="token-attr">display</span>: inline-block;</pre>
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
  name: 'DropdownDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      lastAction: 'none',
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
    handleItemClick(action) {
      this.lastAction = action
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

/* Static demos — shared item base */
.inline-item-demo { display: flex; min-width: 180px; }

.inline-item-demo .marks-dropdown__item,
.force-open-panel .marks-dropdown__item {
  width: 100%; border: none; background: var(--marks-color-white);
  border-radius: var(--marks-radius-12); padding: var(--marks-spacing-16);
  gap: var(--marks-spacing-12); display: flex; align-items: center;
  cursor: pointer; transition: background-color 0.2s ease;
  color: var(--marks-color-black); text-align: left;
  box-sizing: border-box; font-size: 14px;
}
.inline-item-demo .force-item-hover,
.inline-item-demo .marks-dropdown__item--selected,
.force-open-panel .marks-dropdown__item:hover:not(.marks-dropdown__item--disabled),
.force-open-panel .marks-dropdown__item--selected { background: var(--marks-color-gray-100); }
.inline-item-demo .marks-dropdown__item--selected,
.force-open-panel .marks-dropdown__item--selected { font-weight: 500; }
.inline-item-demo .marks-dropdown__item--disabled,
.force-open-panel .marks-dropdown__item--disabled { cursor: not-allowed; color: var(--marks-color-gray-200); }

.force-open-panel .marks-dropdown {
  box-shadow: 0px 14px 30px rgba(0,0,0,0.15); border-radius: var(--marks-radius-24);
  padding: var(--marks-spacing-8); background: var(--marks-color-white);
  display: flex; flex-direction: column; min-width: 200px;
}

/* Demo trigger button styling */
.demo-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--marks-color-gray-400, #ECECEC);
  border-radius: var(--marks-radius-12, 12px);
  background: var(--marks-color-white, #fff);
  color: var(--marks-color-black, #1a1a1a);
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.15s ease;
}

.demo-trigger:hover {
  border-color: var(--marks-color-gray-300, #8D8D8D);
}

.demo-trigger--sm {
  padding: 6px 12px;
  font-size: 13px;
}

.demo-trigger--icon {
  padding: 6px;
  border-radius: var(--marks-radius-8, 8px);
  line-height: 0;
}

/* Dropdown divider */
.dropdown-divider {
  border: none;
  border-top: 1px solid var(--marks-color-gray-400, #ECECEC);
  margin: 4px 8px;
}

/* Danger item modifier */
.dropdown-item--danger {
  color: var(--marks-color-red-200, #FD3860) !important;
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
.anatomy-block { margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC); }
.anatomy-block:last-of-type { border-bottom: none; margin-bottom: 24px; padding-bottom: 0; }
.anatomy-block__label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--marks-color-gray-300); margin-bottom: 20px; }

.btn-anatomy__frame { position: relative; display: inline-flex; margin: 32px 40px 32px 12px; }
.btn-anatomy__pad { position: absolute; background: rgba(253,56,96,0.12); pointer-events: none; }
.btn-anatomy__badge { position: absolute; background: #FD3860; color: #fff; font-size: 10px; font-family: 'SF Mono','Fira Code',monospace; font-weight: 600; line-height: 1; padding: 3px 5px; border-radius: 3px; white-space: nowrap; pointer-events: none; }
.btn-anatomy__line, .btn-anatomy__tick { position: absolute; background: #FD3860; pointer-events: none; }

.anatomy-panel-mock { width: 200px; background: var(--marks-color-white,#fff); border-radius: 24px; box-shadow: 0px 14px 30px rgba(0,0,0,0.08); padding: 8px; display: flex; flex-direction: column; }
.anatomy-panel-mock__item { padding: 16px; border-radius: 12px; font-size: 13px; color: var(--marks-color-gray-300,#8D8D8D); }

.anatomy-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
.anatomy-table th { text-align: left; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--marks-color-gray-300,#8D8D8D); padding: 6px 12px 6px 0; border-bottom: 2px solid var(--marks-color-gray-400,#ECECEC); }
.anatomy-table td { padding: 5px 12px 5px 0; border-bottom: 1px solid var(--marks-color-gray-400,#ECECEC); vertical-align: baseline; }
.anatomy-table td:first-child { color: var(--marks-color-gray-300,#8D8D8D); white-space: nowrap; }
.anatomy-table td:last-child { font-family: 'SF Mono','Fira Code',monospace; font-size: 12px; color: var(--marks-color-gray-300,#8D8D8D); }
.anatomy-table code { font-family: 'SF Mono','Fira Code',monospace; font-size: 12px; color: var(--marks-color-black,#1a1a1a); }

.variant-grid { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.variant-grid .variant-table td:not(:first-child) { padding: 12px 16px; }
</style>
