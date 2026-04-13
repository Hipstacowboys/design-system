<template>
  <DocHeader active-page="navbar-side" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="navbar-side" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Navbar Side</h1>
        <p class="content__lead">
          A vertical sidebar navigation composed of two parts:
          <code>NavbarSide</code> (the container with logo, sections, and bottom items) and
          <code>NavbarItem</code> (individual navigation entries with an icon and label).
          Supports light/dark theming, grouped sections with labels, and
          <code>v-model</code> binding for active-item tracking.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>NavbarSide</strong> — Primary sidebar navigation for dashboards and admin panels. Provides a fixed-width column with grouped nav items, a logo slot, and optional bottom-pinned items (e.g. support, log out).</li>
          <li><strong>NavbarItem</strong> — A single entry inside the sidebar. Pairs a Phosphor icon with a text label. Active state is driven by <code>v-model</code> on the parent or the <code>active</code> prop directly.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For top-level horizontal navigation — use a top bar or <code>Tabs</code> component.</li>
          <li>For deeply nested tree menus — consider a dedicated tree/accordion component.</li>
          <li>For mobile-only navigation — use a bottom tab bar or hamburger drawer instead.</li>
        </ul>

        <h3>NavbarSide vs NavbarItem</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">NavbarSide (full sidebar)</span>
            <div class="navbar-demo-container">
              <NavbarSide
                :sections="demoSections"
                :bottom-items="demoBottomItems"
                v-model="purposeSelected"
                theme="light"
              />
            </div>
          </div>
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">NavbarItem (standalone)</span>
            <div style="display:flex;flex-direction:column;gap:4px;max-width:260px;">
              <NavbarItem :icon="icons.house" label="Dashboard" :active="false" theme="light" />
              <NavbarItem :icon="icons.calendar" label="Calendar" :active="true" theme="light" />
              <NavbarItem :icon="icons.gear" label="Settings" :active="false" theme="light" />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy & sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">NavbarSide is a fixed-width column. NavbarItem fills the available width within its section.</p>

        <h3>NavbarSide — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Logo + Sections + Bottom items</span>
            <div class="navbar-demo-container">
              <NavbarSide
                :sections="anatomySections"
                :bottom-items="anatomyBottomItems"
                model-value="dashboard"
                theme="light"
              />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-navbar-side</code> (root) &middot;
              <code>__logo</code> &middot;
              <code>__sections</code> &middot;
              <code>__section</code> &middot;
              <code>__section-label</code> &middot;
              <code>__items</code> &middot;
              <code>__bottom-items</code>
            </div>
          </div>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">NavbarSide dimensions</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>width</td><td><code>—</code></td><td>284px</td></tr>
              <tr><td>padding</td><td><code>--marks-spacing-32</code>, <code>--marks-spacing-24</code></td><td>32px top/bottom, 24px left/right</td></tr>
              <tr><td>logo &rarr; sections gap</td><td><code>—</code></td><td>47px</td></tr>
              <tr><td>sections top padding</td><td><code>—</code></td><td>30px</td></tr>
              <tr><td>section &harr; section gap</td><td><code>--marks-spacing-32</code></td><td>32px</td></tr>
              <tr><td>section label &harr; items gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>item &harr; item gap</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
              <tr><td>logo width</td><td><code>—</code></td><td>138px</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">NavbarItem dimensions</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>—</code></td><td>4px</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-16</code></td><td>16px</td></tr>
              <tr><td>icon &rarr; label gap</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>icon wrapper size</td><td><code>—</code></td><td>44 &times; 44px</td></tr>
              <tr><td>icon wrapper radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>icon size</td><td><code>—</code></td><td>24 &times; 24px</td></tr>
              <tr><td>icon wrapper padding</td><td><code>--marks-spacing-12</code></td><td>12px</td></tr>
              <tr><td>active icon bg</td><td><code>--marks-color-green-300</code></td><td>#0E5842</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants — light / dark ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; themes</h2>
        <p class="comp-section-desc">NavbarSide ships with two themes controlled by the <code>theme</code> prop. Each theme cascades to all child NavbarItems.</p>

        <div class="variant-section">
          <p class="variant-section__label">Light theme (default)</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">NavbarItem</span></td>
                  <td><NavbarItem :icon="icons.house" label="Dashboard" :active="false" theme="light" /></td>
                  <td><div class="force-hover"><NavbarItem :icon="icons.calendar" label="Calendar" :active="false" theme="light" /></div></td>
                  <td><NavbarItem :icon="icons.bed" label="Rooms" :active="true" theme="light" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Dark theme</p>
          <div class="variant-grid">
            <table class="variant-table variant-table--dark">
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">NavbarItem</span></td>
                  <td><NavbarItem :icon="icons.house" label="Dashboard" :active="false" theme="dark" /></td>
                  <td><div class="force-hover"><NavbarItem :icon="icons.calendar" label="Calendar" :active="false" theme="dark" /></div></td>
                  <td><NavbarItem :icon="icons.bed" label="Rooms" :active="true" theme="dark" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>v-model selection</h3>
        <ul>
          <li>Bind <code>v-model</code> to <code>NavbarSide</code> to track the active item. Each item in the <code>sections</code> array should carry a <code>value</code> key.</li>
          <li>When a user clicks an item, <code>update:modelValue</code> is emitted with that item's <code>value</code>. The matching item receives the active style automatically.</li>
          <li>If <code>modelValue</code> is <code>null</code>, no item is highlighted unless <code>item.active</code> is set explicitly.</li>
        </ul>

        <h3>Sections with labels</h3>
        <ul>
          <li>The <code>sections</code> prop accepts an array of objects. Each object may include a <code>label</code> string and an <code>items</code> array.</li>
          <li>When <code>label</code> is present, a small uppercase heading is rendered above the group.</li>
          <li>Sections are separated by <code>--marks-spacing-32</code> (32px).</li>
        </ul>

        <h3>Bottom items</h3>
        <ul>
          <li>The <code>bottomItems</code> prop renders items at the end of the sidebar without a section label — ideal for utility links like support or log out.</li>
          <li>Bottom items participate in <code>v-model</code> selection the same way section items do.</li>
        </ul>

        <h3>item-click event</h3>
        <ul>
          <li>In addition to <code>update:modelValue</code>, <code>NavbarSide</code> emits <code>item-click</code> with the full item object. Use this for navigation side-effects (e.g. router push).</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Click items to change selection</span>
            <div class="navbar-demo-container">
              <NavbarSide
                :sections="demoSections"
                :bottom-items="demoBottomItems"
                v-model="liveSelected"
                theme="light"
              />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;">v-model: <code>{{ liveSelected }}</code></span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Item labels</h3>
        <ul>
          <li>Use sentence case: "App settings", not "App Settings".</li>
          <li>Keep labels short — one or two words is ideal. The icon provides additional context.</li>
          <li>Use nouns or noun phrases: "Bookings", "Calendar", "Dashboard". Avoid verbs ("Go to bookings").</li>
        </ul>

        <h3>Section labels</h3>
        <ul>
          <li>Optional. Only add when grouping improves scannability (e.g. "Main" vs "Settings").</li>
          <li>Section labels render in small, muted text — they are organizational, not actionable.</li>
        </ul>

        <h3>Icons</h3>
        <ul>
          <li>Every <code>NavbarItem</code> requires an icon. Use a consistent icon set (Phosphor recommended) at 24px regular weight.</li>
          <li>Choose icons that clearly represent the destination. Avoid decorative or ambiguous icons.</li>
        </ul>

        <h3>Logo</h3>
        <ul>
          <li>Pass a URL via the <code>logo</code> prop, or use the <code>logo</code> slot for custom markup.</li>
          <li>Logo container is fixed at 138px wide — use a horizontal or square logo that works at this width.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li><code>NavbarSide</code> renders as a <code>&lt;div&gt;</code>. Wrap it in a <code>&lt;nav aria-label="Main navigation"&gt;</code> in your layout for landmark semantics.</li>
          <li><code>NavbarItem</code> renders as a <code>&lt;div&gt;</code> with a click handler. For full accessibility, consider wrapping items in <code>&lt;a&gt;</code> or <code>&lt;router-link&gt;</code> elements using the default slot.</li>
        </ul>

        <h3>Active state</h3>
        <ul>
          <li>The active item receives <code>.marks-navbar-item--active</code>, bold label text, and a green icon wrapper — providing both color and weight cues.</li>
          <li>Add <code>aria-current="page"</code> to the active item's link for screen readers.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li>Items are clickable <code>&lt;div&gt;</code> elements. To enable keyboard navigation, add <code>tabindex="0"</code> and <code>@keydown.enter</code>/<code>@keydown.space</code> handlers, or use native <code>&lt;a&gt;</code>/<code>&lt;button&gt;</code> elements inside the slot.</li>
          <li>Focus indicators rely on the browser default — consider adding a custom focus ring matching the design system's focus style.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Always wrap <code>NavbarSide</code> in a <code>&lt;nav&gt;</code> landmark. Without it, screen readers cannot identify the sidebar as navigation.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Dashboard sidebar</span>
            <div class="navbar-demo-container">
              <NavbarSide
                :sections="exampleSections"
                :bottom-items="exampleBottomItems"
                v-model="exampleSelected"
                theme="light"
              />
            </div>
          </div>
        </div>

        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Dark sidebar</span>
            <div class="navbar-demo-container navbar-demo-container--dark">
              <NavbarSide
                :sections="exampleSections"
                :bottom-items="exampleBottomItems"
                v-model="exampleDarkSelected"
                theme="dark"
              />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many sections</span>
            <span style="font-size:0.75rem;color:#FD3860;">Avoid more than 3–4 sections. Excessive grouping adds visual noise.</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — items without icons</span>
            <span style="font-size:0.75rem;color:#FD3860;">NavbarItem requires an icon. Text-only items break visual rhythm and scannability.</span>
          </div>
          <div class="comp-demo__group">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — mix themes per item</span>
            <span style="font-size:0.75rem;color:#FD3860;">Theme is set on NavbarSide and cascades. Don't override individual item themes.</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>NavbarSide</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">logo</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>URL to a logo image displayed at the top of the sidebar.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">logoAlt</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Alt text for the logo image. Falls back to "Logo" when omitted.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">sections</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code> <em>required</em></td>
              <td>Array of section objects. Each section has an optional <code>label</code> (String) and <code>items</code> (Array of item objects with <code>icon</code>, <code>label</code>, <code>value</code>).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">bottomItems</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code></td>
              <td>Items rendered at the bottom of the sidebar without a section label. Same shape as section items.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Currently active item value. Use with <code>v-model</code>. Matched against each item's <code>value</code> key.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">theme</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'light'</code></td>
              <td>Visual theme. Accepts <code>'light'</code> or <code>'dark'</code>. Cascades to all child NavbarItems.</td>
            </tr>
          </tbody>
        </table>

        <h3>NavbarItem</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Icon component (e.g. Phosphor icon) or component name. Rendered at 24px regular weight.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Text label displayed next to the icon.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">active</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Highlights the item with active background, bold label, and green icon wrapper.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">theme</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'light'</code></td>
              <td>Visual theme. Normally inherited from the parent NavbarSide; accepts <code>'light'</code> or <code>'dark'</code>.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events — NavbarSide</h3>
        <table class="props-table">
          <thead>
            <tr><th>Event</th><th>Payload</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">update:modelValue</code></td>
              <td><code class="prop-type">String | Number</code></td>
              <td>Emitted when an item with a <code>value</code> is clicked. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">item-click</code></td>
              <td><code class="prop-type">Object</code></td>
              <td>Emitted on every item click with the full item object. Use for navigation side-effects.</td>
            </tr>
          </tbody>
        </table>

        <h3>Events — NavbarItem</h3>
        <table class="props-table">
          <thead>
            <tr><th>Event</th><th>Payload</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">click</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Emitted when the item is clicked.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming & dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Set <code>theme="dark"</code> on <code>NavbarSide</code> to switch the entire sidebar and its items. Colors adapt via <code>--marks-color-*</code> token overrides on the container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">NavbarSide — light</span>
            <div class="navbar-demo-container">
              <NavbarSide
                :sections="themingSections"
                :bottom-items="themingBottomItems"
                model-value="dashboard"
                theme="light"
              />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">NavbarSide — dark</span>
            <div class="navbar-demo-container navbar-demo-container--dark">
              <NavbarSide
                :sections="themingSections"
                :bottom-items="themingBottomItems"
                model-value="dashboard"
                theme="dark"
              />
            </div>
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

        <h3>Token mapping</h3>
        <table class="anatomy-table">
          <thead><tr><th>Element</th><th>Light</th><th>Dark</th></tr></thead>
          <tbody>
            <tr><td>sidebar bg</td><td><code>--marks-color-white</code> (#fff)</td><td><code>--marks-color-white</code> (#000)</td></tr>
            <tr><td>section label</td><td><code>--marks-color-gray-350</code></td><td>#8d8d8d</td></tr>
            <tr><td>item text</td><td><code>--marks-color-gray-500</code></td><td><code>--marks-color-gray-400</code></td></tr>
            <tr><td>item hover bg</td><td><code>--marks-color-gray-100</code></td><td><code>--marks-color-gray-100</code></td></tr>
            <tr><td>active text</td><td><code>--marks-color-black</code></td><td><code>--marks-color-black</code></td></tr>
            <tr><td>active icon bg</td><td><code>--marks-color-green-300</code></td><td><code>--marks-color-green-300</code></td></tr>
            <tr><td>active icon color</td><td><code>--marks-color-white</code></td><td><code>--marks-color-white</code></td></tr>
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
<pre><span class="token-comment">// Basic sidebar with v-model</span>
<span class="token-tag">&lt;NavbarSide</span>
  <span class="token-attr">:sections</span>=<span class="token-string">"sections"</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"activePage"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"light"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With logo, bottom items, and event</span>
<span class="token-tag">&lt;NavbarSide</span>
  <span class="token-attr">logo</span>=<span class="token-string">"/img/logo.svg"</span>
  <span class="token-attr">logo-alt</span>=<span class="token-string">"Acme Inc"</span>
  <span class="token-attr">:sections</span>=<span class="token-string">"sections"</span>
  <span class="token-attr">:bottom-items</span>=<span class="token-string">"bottomItems"</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"activePage"</span>
  <span class="token-attr">@item-click</span>=<span class="token-string">"onNavClick"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Dark theme</span>
<span class="token-tag">&lt;NavbarSide</span>
  <span class="token-attr">:sections</span>=<span class="token-string">"sections"</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"activePage"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"dark"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Sections data shape</span>
<span class="token-keyword">const</span> sections = [
  { <span class="token-attr">label</span>: <span class="token-string">'Main'</span>,
    <span class="token-attr">items</span>: [
      { <span class="token-attr">icon</span>: PhHouse, <span class="token-attr">label</span>: <span class="token-string">'Dashboard'</span>,
        <span class="token-attr">value</span>: <span class="token-string">'dashboard'</span> },
    ] }
]
<span class="token-keyword">const</span> bottomItems = [
  { <span class="token-attr">icon</span>: PhSignOut, <span class="token-attr">label</span>: <span class="token-string">'Log out'</span>,
    <span class="token-attr">value</span>: <span class="token-string">'logout'</span> }
]


<span class="token-comment">// Standalone NavbarItem</span>
<span class="token-tag">&lt;NavbarItem</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhHouse"</span>
  <span class="token-attr">label</span>=<span class="token-string">"Dashboard"</span>
  <span class="token-attr">:active</span>=<span class="token-string">"true"</span>
  <span class="token-attr">@click</span>=<span class="token-string">"goHome"</span>
<span class="token-tag">/&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- NavbarSide — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-navbar-side marks-navbar-side--light"</span>
  <span class="token-attr">data-theme</span>=<span class="token-string">"light"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-navbar-side__logo"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;img</span> <span class="token-attr">src</span>=<span class="token-string">"…"</span> <span class="token-attr">alt</span>=<span class="token-string">"Logo"</span> <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__sections"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__section"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__section-label"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__section-label-text"</span><span class="token-tag">&gt;</span>Main<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__items"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__bottom-items"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- NavbarItem — active --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-navbar-item
  marks-navbar-item--light marks-navbar-item--active"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__icon-wrapper
    …__icon-wrapper--active"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__icon"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;b</span> <span class="token-attr">class</span>=<span class="token-string">"…__label"</span><span class="token-tag">&gt;</span>Dashboard<span class="token-tag">&lt;/b&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  NavbarSide:
    .marks-navbar-side  --light  --dark
    __logo  __sections  __section
    __section-label  __section-label-text
    __items  __bottom-items

  NavbarItem:
    .marks-navbar-item  --light  --dark
    --active  --hover
    __icon-wrapper  __icon  __label
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── NavbarSide container ───</span>

<span class="token-attr">width</span>:      <span class="token-number">284px</span>;
<span class="token-attr">padding</span>:    <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-32</span>) <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">gap</span>:        <span class="token-number">47px</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);


<span class="token-comment">// ─── Spacing ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-32</span>); <span class="token-comment">// sections</span>
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);  <span class="token-comment">// label → items</span>
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-4</span>);  <span class="token-comment">// between items</span>


<span class="token-comment">// ─── Section label ───</span>

<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-350</span>); <span class="token-comment">// light</span>
<span class="token-attr">color</span>: <span class="token-number">#8d8d8d</span>;                     <span class="token-comment">// dark</span>


<span class="token-comment">// ─── NavbarItem ───</span>

<span class="token-attr">padding</span>:       <span class="token-number">4px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">gap</span>:           <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">transition</span>:    background-color <span class="token-number">0.2s</span> ease;

<span class="token-comment">// Colors: light / dark</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);    <span class="token-comment">// light</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);    <span class="token-comment">// dark</span>

<span class="token-comment">// Active / hover (both themes)</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">color</span>:      <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Icon wrapper ───</span>

<span class="token-attr">width</span>:  <span class="token-number">44px</span>;  <span class="token-attr">height</span>: <span class="token-number">44px</span>;
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);

<span class="token-comment">// Active</span>
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-300</span>);
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);</pre>
          </div>

        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import { markRaw } from 'vue'
import { PhHouse, PhCalendar, PhBed, PhBookOpen, PhAppWindow, PhGear, PhChatCircle, PhSignOut } from '@phosphor-icons/vue'

const icons = {
  house: markRaw(PhHouse),
  calendar: markRaw(PhCalendar),
  bed: markRaw(PhBed),
  book: markRaw(PhBookOpen),
  app: markRaw(PhAppWindow),
  gear: markRaw(PhGear),
  chat: markRaw(PhChatCircle),
  signOut: markRaw(PhSignOut),
}

function makeSections() {
  return [
    {
      label: 'Main',
      items: [
        { icon: icons.house, label: 'Dashboard', value: 'dashboard' },
        { icon: icons.calendar, label: 'Calendar', value: 'calendar' },
        { icon: icons.bed, label: 'Rooms', value: 'rooms' },
        { icon: icons.book, label: 'Bookings', value: 'bookings' },
      ]
    },
    {
      label: 'Settings',
      items: [
        { icon: icons.app, label: 'App settings', value: 'app' },
        { icon: icons.gear, label: 'Preferences', value: 'prefs' },
      ]
    }
  ]
}

function makeBottomItems() {
  return [
    { icon: icons.chat, label: 'Support', value: 'support' },
    { icon: icons.signOut, label: 'Log out', value: 'logout' },
  ]
}

import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'NavbarSideDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      icons,
      purposeSelected: 'dashboard',
      liveSelected: 'dashboard',
      exampleSelected: 'bookings',
      exampleDarkSelected: 'bookings',
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ],
      demoSections: makeSections(),
      demoBottomItems: makeBottomItems(),
      anatomySections: makeSections(),
      anatomyBottomItems: makeBottomItems(),
      exampleSections: makeSections(),
      exampleBottomItems: makeBottomItems(),
      themingSections: makeSections(),
      themingBottomItems: makeBottomItems(),
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

/* Force hover state for NavbarItem */
.force-hover .marks-navbar-item:not(.marks-navbar-item--active) {
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

.navbar-demo-container {
  border: 1px solid var(--marks-color-gray-400, #ECECEC);
  border-radius: 12px;
  overflow: hidden;
  display: inline-block;
}

.navbar-demo-container--dark,
.variant-table--dark {
  border-color: #6F6F6F;
  background: #000000;

  --marks-color-primary-solid: #0E5842;
  --marks-color-primary-light: #032F22;
  --marks-color-green-100: #C0F3E4;
  --marks-color-green-200: #0FAF80;
  --marks-color-green-300: #0E5842;
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

.variant-table--dark th,
.variant-table--dark td {
  color: #FAFAFA;
  border-bottom-color: #2A2A2A;
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

.variant-grid {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.variant-grid .variant-table td:not(:first-child) {
  padding: 12px 16px;
}
</style>
