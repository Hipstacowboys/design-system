<template>
  <DocHeader active-page="widget" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="widget" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Widget</h1>
        <p class="content__lead">
          A card-like row component for displaying structured entity data — name, duration,
          language, and theme — with an action area containing a <code>Dropdown</code> menu
          and an icon button. Responsive: switches from a horizontal row to a stacked layout
          when container width drops below 830 px.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Widget</strong> — Display a single entity (e.g. a booking widget, service card) with key metadata columns and quick actions.</li>
          <li>Lists or dashboards that show many entities in a scannable row format with inline actions.</li>
          <li>When the entity has a natural "name + details + action" shape.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For simple key/value display — use a table or description list.</li>
          <li>For navigation cards that link to a page — use a standard card component.</li>
          <li>For aggregated statistics — use <code>CardWithCounter</code>.</li>
        </ul>

        <h3>Quick preview</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default Widget</span>
            <Widget
              widget-name="Intro Meeting"
              subtitle="Team onboarding"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
            />
          </div>
        </div>

        <!-- ─── 2. Anatomy ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; layout</h2>
        <p class="comp-section-desc">The Widget is a horizontal card with four data columns and a trailing action area. On narrow containers it collapses to a stacked mobile layout.</p>

        <h3>Desktop layout — structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Header (name + subtitle) · Details grid (duration, language, theme) · Action area</span>
            <Widget
              widget-name="Intro Meeting"
              subtitle="Team onboarding"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
              style="pointer-events:none;"
            />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-widget__info</code> · <code>.marks-widget__duration</code> · <code>.marks-widget__language</code> · <code>.marks-widget__theme</code> · <code>.marks-widget__actions</code>
            </div>
          </div>
        </div>

        <h3>Token reference</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Card container</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>border-radius</td><td><code>--marks-radius-12</code></td><td>12px</td></tr>
              <tr><td>background</td><td><code>--marks-color-white</code></td><td>#FFFFFF</td></tr>
              <tr><td>border</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
              <tr><td>hover bg</td><td><code>--marks-color-gray-100</code></td><td>#F5F5F5</td></tr>
              <tr><td>hover border</td><td><code>--marks-color-black</code></td><td>#1a1a1a</td></tr>
              <tr><td>hover shadow</td><td>—</td><td>0 0 0 4px rgba(0,0,0,0.3)</td></tr>
              <tr><td>transition</td><td>—</td><td>200ms ease (bg, border, shadow)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Desktop spacing</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-20</code> / <code>--marks-spacing-24</code></td><td>20px 24px</td></tr>
              <tr><td>column gap</td><td><code>--marks-spacing-32</code></td><td>32px</td></tr>
              <tr><td>name ↔ subtitle gap</td><td><code>--marks-spacing-4</code></td><td>4px</td></tr>
              <tr><td>action buttons gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Mobile spacing</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding (vertical)</td><td><code>--marks-spacing-16</code></td><td>16px 0</td></tr>
              <tr><td>row gap</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>horizontal padding</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>info sections padding-top</td><td><code>--marks-spacing-20</code></td><td>20px</td></tr>
              <tr><td>info item gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>breakpoint</td><td>—</td><td>830px (container width)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Typography</span>
          <table class="anatomy-table">
            <thead><tr><th>Element</th><th>Mixin / Token</th><th>Color</th></tr></thead>
            <tbody>
              <tr><td>name</td><td><code>marks-typography-paragraph-md-multiline</code></td><td><code>--marks-color-black</code></td></tr>
              <tr><td>subtitle</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td><code>--marks-color-gray-300</code></td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants</h2>
        <p class="comp-section-desc">Variations depend on which optional subtitle props are provided.</p>

        <div class="variant-section">
          <p class="variant-section__label">All subtitles provided</p>
          <div class="variant-grid">
            <Widget
              widget-name="Intro Meeting"
              subtitle="Team onboarding"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
            />
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">No detail subtitles</p>
          <div class="variant-grid">
            <Widget
              widget-name="Quick Call"
              subtitle="Sales pipeline"
              duration="15 min"
              language="Czech"
              theme="Minimal"
            />
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Mixed subtitles (duration only)</p>
          <div class="variant-grid">
            <Widget
              widget-name="Discovery Session"
              subtitle="Client research"
              duration="60 min"
              duration-subtitle="Extended"
              language="German"
              theme="Corporate"
            />
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Hover state</p>
          <div class="variant-grid">
            <div class="force-hover">
              <Widget
                widget-name="Intro Meeting"
                subtitle="Team onboarding"
                duration="30 min"
                duration-subtitle="Standard"
                language="English"
                language-code="EN"
                theme="Professional"
                theme-subtitle="Dark"
              />
            </div>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Hover interaction</h3>
        <ul>
          <li>On mouse enter, the card receives class <code>.marks-widget--hover</code> which changes background to <code>--marks-color-gray-100</code>, border to <code>--marks-color-black</code>, and adds a ring shadow.</li>
          <li>All three properties transition over 200 ms ease.</li>
        </ul>

        <h3>Action button</h3>
        <ul>
          <li>The trailing <code>ButtonLine</code> icon button emits <code>action-click</code> when pressed.</li>
          <li>Default icon is <code>PhArrowRight</code>; override via the <code>actionIcon</code> prop.</li>
          <li>Parent handles the event — Widget itself performs no navigation.</li>
        </ul>

        <h3>Dropdown menu</h3>
        <ul>
          <li>The three-dot <code>ButtonSecondary</code> opens a <code>Dropdown</code> component.</li>
          <li>Default slot provides "Copy code" and "Delete widget" actions. Override via the <code>dropdown-actions</code> named slot.</li>
        </ul>

        <h3>Responsive layout</h3>
        <ul>
          <li>Uses <code>ResizeObserver</code> on the root element — not a media query.</li>
          <li>Below 830 px container width, <code>.marks-widget--mobile</code> is applied: desktop row hides, stacked mobile layout shows.</li>
          <li>Mobile layout splits into a customer header row (name + subtitle + actions) and an info-sections grid (duration, language, theme) separated by a top border.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Click the arrow button</span>
            <Widget
              widget-name="Live Demo Widget"
              subtitle="Interactive example"
              duration="45 min"
              duration-subtitle="Custom"
              language="English"
              language-code="EN"
              theme="Modern"
              theme-subtitle="Light"
              @action-click="onActionClick"
            />
            <span style="font-size:0.8rem;color:#6F6F6F;margin-top:8px;">
              action-click count: <code>{{ actionClickCount }}</code>
            </span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Widget name</h3>
        <ul>
          <li>Use sentence case: "Intro meeting", not "Intro Meeting" (title case is acceptable for product names).</li>
          <li>Keep it concise — 2–4 words. The name is the primary identifier for scanning.</li>
        </ul>

        <h3>Subtitle</h3>
        <ul>
          <li>Provides secondary context for the entity — category, team, or short description.</li>
          <li>One short phrase. Avoid full sentences.</li>
        </ul>

        <h3>Detail values</h3>
        <ul>
          <li><strong>Duration</strong> — Use abbreviated time: "30 min", "1 hr", "90 min".</li>
          <li><strong>Language</strong> — Use the full language name: "English", "Czech". The <code>languageCode</code> prop can show the ISO code below.</li>
          <li><strong>Theme</strong> — Label the visual theme or category. Keep to one word when possible.</li>
        </ul>

        <h3>Detail subtitles</h3>
        <ul>
          <li>Optional — only add when the primary value needs qualification.</li>
          <li>Examples: "Standard" under "30 min", "EN" under "English", "Dark" under "Professional".</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>The root element is a <code>&lt;div&gt;</code> — not interactive itself. All interactive elements (buttons, dropdown) are proper focusable controls.</li>
          <li><code>ButtonSecondary</code> (dropdown trigger) and <code>ButtonLine</code> (action) render as <code>&lt;button type="button"&gt;</code>.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus between the dropdown trigger and the action button.</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> — activates the focused button.</li>
          <li>Dropdown keyboard behavior is handled by the <code>Dropdown</code> component (arrow keys, Escape to close).</li>
        </ul>

        <h3>Screen readers</h3>
        <ul>
          <li>Each data column uses a <code>&lt;b&gt;</code> element for the name — ensure surrounding context or <code>aria-label</code> identifies the column when used outside of a labelled list.</li>
          <li>The three-dot button should include an accessible label. <code>ButtonSecondary</code> with <code>icon-only</code> should receive an <code>aria-label</code> like "More actions".</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>When using <code>icon-only</code> buttons inside Widget, always provide an <code>aria-label</code>. The three-dot menu has no visible text — screen readers need explicit labelling.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Widget list — dashboard</span>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <Widget
                widget-name="Intro Meeting"
                subtitle="Team onboarding"
                duration="30 min"
                duration-subtitle="Standard"
                language="English"
                language-code="EN"
                theme="Professional"
                theme-subtitle="Dark"
              />
              <Widget
                widget-name="Quick Call"
                subtitle="Sales pipeline"
                duration="15 min"
                language="Czech"
                language-code="CS"
                theme="Minimal"
              />
              <Widget
                widget-name="Workshop"
                subtitle="Product training"
                duration="90 min"
                duration-subtitle="Extended"
                language="German"
                language-code="DE"
                theme="Corporate"
                theme-subtitle="Branded"
              />
            </div>
          </div>
        </div>

        <h3>Minimal variant — no subtitles</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Clean row without any detail subtitles</span>
            <Widget
              widget-name="Feedback Session"
              subtitle="HR"
              duration="20 min"
              language="English"
              theme="Default"
            />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — overly long names</span>
            <Widget
              widget-name="Extremely Long Widget Name That Breaks Layout"
              subtitle="This subtitle is also way too long and should be trimmed to something short"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
            />
            <span style="font-size:0.75rem;color:#FD3860;">Keep names concise (2–4 words) and subtitles to a short phrase</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use for navigation</span>
            <span style="font-size:0.75rem;color:#FD3860;">Widget does not render as a link. If the whole card should navigate, use a Card component with an anchor wrapper.</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>Widget</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">widgetName</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Primary entity name displayed in the header column.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">subtitle</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary text below the widget name. Category, team, or short description.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">duration</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Duration value shown in the second column (e.g. "30 min").</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">durationSubtitle</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional label below the duration value.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">language</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Language name in the third column.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">languageCode</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional ISO code displayed below the language name.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">theme</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">—</code> <em>required</em></td>
              <td>Theme or category label in the fourth column.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">themeSubtitle</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Optional label below the theme value.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">actionIcon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">PhArrowRight</code></td>
              <td>Icon component for the trailing action button. Accepts any Phosphor icon or raw SVG component.</td>
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
              <td><code class="prop-name">dropdown-actions</code></td>
              <td>Override the default dropdown menu items. Receives no props. Default content: "Copy code" and "Delete widget" buttons.</td>
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
              <td><code class="prop-name">action-click</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Emitted when the trailing action icon button is clicked. No payload.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming & dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Widget colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default appearance</span>
            <Widget
              widget-name="Intro Meeting"
              subtitle="Team onboarding"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
            />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Dark theme</span>
            <Widget
              widget-name="Intro Meeting"
              subtitle="Team onboarding"
              duration="30 min"
              duration-subtitle="Standard"
              language="English"
              language-code="EN"
              theme="Professional"
              theme-subtitle="Dark"
            />
          </div>
          <p class="comp-demo__hint" style="color: var(--marks-color-gray-300); border-top-color: var(--marks-color-gray-200);">
            Tokens are overridden on this container — same technique as the comparison page.
          </p>
        </div>

        <h3>Key token overrides for dark mode</h3>
        <table class="anatomy-table" style="margin-bottom:32px;">
          <thead><tr><th>Token</th><th>Light</th><th>Dark</th></tr></thead>
          <tbody>
            <tr><td><code>--marks-color-white</code></td><td>#FFFFFF</td><td>#000000</td></tr>
            <tr><td><code>--marks-color-black</code></td><td>#1A1A1A</td><td>#FFFFFF</td></tr>
            <tr><td><code>--marks-color-gray-100</code></td><td>#F5F5F5</td><td>#2A2A2A</td></tr>
            <tr><td><code>--marks-color-gray-200</code></td><td>#D1D1D1</td><td>#6F6F6F</td></tr>
            <tr><td><code>--marks-color-gray-300</code></td><td>#8D8D8D</td><td>#8D8D8D</td></tr>
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
<pre><span class="token-comment">// Basic widget with all details</span>
<span class="token-tag">&lt;Widget</span>
  <span class="token-attr">widget-name</span>=<span class="token-string">"Intro Meeting"</span>
  <span class="token-attr">subtitle</span>=<span class="token-string">"Team onboarding"</span>
  <span class="token-attr">duration</span>=<span class="token-string">"30 min"</span>
  <span class="token-attr">duration-subtitle</span>=<span class="token-string">"Standard"</span>
  <span class="token-attr">language</span>=<span class="token-string">"English"</span>
  <span class="token-attr">language-code</span>=<span class="token-string">"EN"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"Professional"</span>
  <span class="token-attr">theme-subtitle</span>=<span class="token-string">"Dark"</span>
  <span class="token-attr">@action-click</span>=<span class="token-string">"handleAction"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Minimal — no detail subtitles</span>
<span class="token-tag">&lt;Widget</span>
  <span class="token-attr">widget-name</span>=<span class="token-string">"Quick Call"</span>
  <span class="token-attr">subtitle</span>=<span class="token-string">"Sales"</span>
  <span class="token-attr">duration</span>=<span class="token-string">"15 min"</span>
  <span class="token-attr">language</span>=<span class="token-string">"Czech"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"Minimal"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Custom action icon</span>
<span class="token-tag">&lt;Widget</span>
  <span class="token-attr">widget-name</span>=<span class="token-string">"Workshop"</span>
  <span class="token-attr">subtitle</span>=<span class="token-string">"Training"</span>
  <span class="token-attr">duration</span>=<span class="token-string">"90 min"</span>
  <span class="token-attr">language</span>=<span class="token-string">"German"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"Corporate"</span>
  <span class="token-attr">:action-icon</span>=<span class="token-string">"PhPencilSimple"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Custom dropdown slot</span>
<span class="token-tag">&lt;Widget</span>
  <span class="token-attr">widget-name</span>=<span class="token-string">"Session"</span>
  <span class="token-attr">subtitle</span>=<span class="token-string">"Support"</span>
  <span class="token-attr">duration</span>=<span class="token-string">"20 min"</span>
  <span class="token-attr">language</span>=<span class="token-string">"English"</span>
  <span class="token-attr">theme</span>=<span class="token-string">"Default"</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#dropdown-actions</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>
      Edit
    <span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-dropdown__item"</span><span class="token-tag">&gt;</span>
      Duplicate
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/Widget&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Widget — desktop rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__desktop"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__info"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__details"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;b</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__name"</span><span class="token-tag">&gt;</span>Name<span class="token-tag">&lt;/b&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__subtitle"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__subtitle-text"</span><span class="token-tag">&gt;</span>
          Subtitle
        <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>

    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__duration"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__language"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__theme"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>

    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__actions"</span><span class="token-tag">&gt;</span>
      <span class="token-comment">&lt;!-- Dropdown trigger --&gt;</span>
      <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button-secondary
        marks-widget__action-button"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/button&gt;</span>
      <span class="token-comment">&lt;!-- Action button --&gt;</span>
      <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button-line"</span><span class="token-tag">&gt;</span>
        …
      <span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Hover state --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget marks-widget--hover"</span><span class="token-tag">&gt;</span>
  …
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- Mobile layout --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget marks-widget--mobile"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__mobile"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__customer-parent"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__customer"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__action"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__info-sections"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__info-item"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__info-item"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-widget__info-item"</span><span class="token-tag">&gt;</span>…<span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-widget
  .marks-widget--hover
  .marks-widget--mobile
  .marks-widget__desktop
  .marks-widget__mobile
  .marks-widget__info
  .marks-widget__details
  .marks-widget__name
  .marks-widget__subtitle
  .marks-widget__subtitle-text
  .marks-widget__duration
  .marks-widget__language
  .marks-widget__theme
  .marks-widget__actions
  .marks-widget__action-button
  .marks-widget__customer-parent
  .marks-widget__customer
  .marks-widget__action
  .marks-widget__info-sections
  .marks-widget__info-item
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Card container ───</span>

<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
<span class="token-attr">transition</span>: background-color <span class="token-number">0.2s</span> ease,
  border-color <span class="token-number">0.2s</span> ease,
  box-shadow <span class="token-number">0.2s</span> ease;


<span class="token-comment">// ─── Hover state ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">border-color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">0</span> <span class="token-number">0</span>
  <span class="token-number">4px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.3</span>);


<span class="token-comment">// ─── Desktop layout ───</span>

<span class="token-attr">display</span>: flex;
<span class="token-attr">align-items</span>: center;
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-20</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-32</span>);


<span class="token-comment">// ─── Name typography ───</span>

<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: <span class="token-number">$marks-font-weight-medium</span>;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Subtitle typography ───</span>

<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── Actions area ───</span>

<span class="token-attr">display</span>: flex;
<span class="token-attr">align-items</span>: center;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
<span class="token-attr">margin-left</span>: auto;


<span class="token-comment">// ─── Action button shadow ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">2px</span> <span class="token-number">6px</span>
  rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.08</span>);


<span class="token-comment">// ─── Mobile breakpoint (830px) ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>) <span class="token-number">0</span>;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);

<span class="token-comment">// Info sections divider</span>
<span class="token-attr">border-top</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);</pre>
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
  name: 'WidgetDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      actionClickCount: 0,
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
    onActionClick() {
      this.actionClickCount++
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

/* Force hover state for Widget */
.force-hover .marks-widget { background-color: var(--marks-color-gray-100) !important; border-color: var(--marks-color-black) !important; box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3) !important; }
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
</style>
