<template>
  <DocHeader active-page="empty-state" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="empty-state" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Empty State</h1>
        <p class="content__lead">
          A centered placeholder for screens with no data, error pages, or empty
          search results. Combines an icon, title, optional description, and an
          optional <code>ButtonPrimary</code> call-to-action. Emits an
          <code>action</code> event when the button is clicked.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Zero data</strong> — A list, table, or dashboard section has no items yet. Prompt the user to create their first entry.</li>
          <li><strong>Error state</strong> — Something went wrong loading content. Offer a retry action.</li>
          <li><strong>No search results</strong> — A filter or search returned zero matches. Suggest clearing filters or broadening the query.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>If the page still has partial content — use an inline <code>Alert</code> instead of replacing the entire area.</li>
          <li>For transient loading states — use a skeleton or spinner, not an empty state.</li>
          <li>For success confirmations — use a <code>NotificationMessage</code>.</li>
        </ul>

        <h3>Quick preview</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default empty state</span>
            <div style="max-width:420px;margin:0 auto;">
              <EmptyState
                title="No bookings yet"
                description="When customers book appointments, they will appear here."
                buttonText="Create booking"
              />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy + sizing ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">Vertically stacked, center-aligned layout. All spacing is driven by design tokens.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Icon container + Content + Action</span>
            <div style="max-width:420px;margin:0 auto;">
              <EmptyState
                title="No items found"
                description="Try adjusting your search or filter criteria."
                buttonText="Clear filters"
                style="pointer-events:none;"
              />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-empty-state__icon-container</code> ·
              <code>.marks-empty-state__content</code> ·
              <code>.marks-empty-state__title</code> ·
              <code>.marks-empty-state__description</code> ·
              <code>.marks-empty-state__action</code>
            </div>
          </div>
        </div>

        <h3>Spacing &amp; dimension tokens</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">EmptyState</span>
          <div class="btn-anatomy">
            <div class="btn-anatomy__frame anatomy-stack">
              <div class="anatomy-stack__circle">
                <div class="btn-anatomy__badge" :style="{ top: '-22px', left: '50%', transform: 'translateX(-50%)' }">64 × 64</div>
                <span class="anatomy-stack__circle-label">32</span>
              </div>
              <div class="anatomy-stack__gap">
                <div class="btn-anatomy__badge" :style="{ top: '50%', left: '16px', transform: 'translateY(-50%)' }">28</div>
              </div>
              <div class="anatomy-stack__text-row">Title</div>
              <div class="anatomy-stack__gap anatomy-stack__gap--sm">
                <div class="btn-anatomy__badge" :style="{ top: '50%', left: '16px', transform: 'translateY(-50%)' }">8</div>
              </div>
              <div class="anatomy-stack__text-row anatomy-stack__text-row--secondary">Description</div>
              <div class="anatomy-stack__gap">
                <div class="btn-anatomy__badge" :style="{ top: '50%', left: '16px', transform: 'translateY(-50%)' }">28</div>
              </div>
              <div class="anatomy-stack__text-row anatomy-stack__text-row--button">ButtonPrimary</div>
            </div>
          </div>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>icon container</td><td><code>—</code></td><td>64 × 64 px, border-radius: 50%</td></tr>
              <tr><td>icon size</td><td><code>—</code></td><td>32 px (Phosphor <code>:size</code>)</td></tr>
              <tr><td>icon container bg</td><td><code>--marks-color-gray-100</code></td><td>light neutral</td></tr>
              <tr><td>icon color</td><td><code>--marks-color-gray-400</code></td><td>currentColor inherit</td></tr>
              <tr><td>main gap</td><td><code>--marks-spacing-28</code></td><td>28 px</td></tr>
              <tr><td>title ↔ description</td><td><code>--marks-spacing-8</code></td><td>8 px</td></tr>
              <tr><td>title typography</td><td><code>marks-typography-h4-regular</code></td><td>font-weight: medium</td></tr>
              <tr><td>title color</td><td><code>--marks-color-black</code></td><td>primary text</td></tr>
              <tr><td>description typography</td><td><code>marks-typography-paragraph-md-multiline</code></td><td>line-height: 150%</td></tr>
              <tr><td>description color</td><td><code>--marks-color-gray-300</code></td><td>secondary text</td></tr>
              <tr><td>button</td><td><code>—</code></td><td>ButtonPrimary, size medium</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants</h2>
        <p class="comp-section-desc">Content is conditional — show or hide each piece as needed.</p>

        <div class="variant-section">
          <p class="variant-section__label">Full (icon + title + description + button)</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div style="max-width:420px;margin:0 auto;">
                <EmptyState
                  title="No bookings yet"
                  description="When customers book appointments, they will appear here."
                  buttonText="Create booking"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Without button</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div style="max-width:420px;margin:0 auto;">
                <EmptyState
                  title="No results found"
                  description="Try adjusting your search or filter criteria."
                />
              </div>
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Without description</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div style="max-width:420px;margin:0 auto;">
                <EmptyState
                  title="Nothing here yet"
                  buttonText="Get started"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Without icon (icon hidden via CSS)</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div class="hide-icon" style="max-width:420px;margin:0 auto;">
                <EmptyState
                  title="No notifications"
                  description="You're all caught up."
                />
              </div>
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Title only (minimal)</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <div style="max-width:420px;margin:0 auto;">
                <EmptyState title="No notifications" />
              </div>
            </div>
          </div>
        </div>

        <!-- ─── 4. Behavior ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Action click</h3>
        <ul>
          <li>When <code>buttonText</code> is provided, a <code>ButtonPrimary</code> renders inside <code>.marks-empty-state__action</code>.</li>
          <li>Clicking the button emits the <code>action</code> event on the EmptyState component.</li>
          <li>The parent listens with <code>@action</code> and handles navigation, creation, or retry logic.</li>
        </ul>

        <h3>Slot overrides</h3>
        <ul>
          <li>Named slots <code>title</code>, <code>description</code>, and <code>action</code> allow rich content when props are insufficient.</li>
          <li>The <code>action</code> slot replaces the default ButtonPrimary entirely — use it for custom button groups or links.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Click the button to emit <code>action</code></span>
            <div style="max-width:420px;margin:0 auto;">
              <EmptyState
                title="No bookings yet"
                description="When customers book appointments, they will appear here."
                buttonText="Create booking"
                @action="actionCount++"
              />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;margin-top:12px;display:block;text-align:center;">
              action emitted: <code>{{ actionCount }}</code> times
            </span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title</h3>
        <ul>
          <li>Use sentence case: "No bookings yet", not "No Bookings Yet".</li>
          <li>State the absence clearly: "No [items]" or "No [items] found".</li>
          <li>Keep it under 6 words. The title sets context; the description elaborates.</li>
        </ul>

        <h3>Description</h3>
        <ul>
          <li>Optional — only add when the title alone doesn't provide enough guidance.</li>
          <li>One to two sentences max. Explain <em>what to do next</em> or <em>why the area is empty</em>.</li>
          <li>Example: "When customers book appointments, they will appear here."</li>
        </ul>

        <h3>Button text</h3>
        <ul>
          <li>Use an action verb: "Create booking", "Try again", "Clear filters".</li>
          <li>Match the context: if the empty state is about missing data, the button should help <em>create</em> data.</li>
          <li>Omit the button entirely if there is no actionable next step.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Icon</h3>
        <ul>
          <li>The Phosphor icon is <strong>decorative</strong> — it reinforces the message visually but carries no unique information.</li>
          <li>It renders with <code>color="currentColor"</code> and inherits from the container. No <code>aria-label</code> is needed on the icon itself.</li>
        </ul>

        <h3>Button</h3>
        <ul>
          <li>The internal <code>ButtonPrimary</code> receives <code>buttonText</code> as its visible label — accessible by default.</li>
          <li>If using the <code>action</code> slot with a custom element, ensure it has a visible label or <code>aria-label</code>.</li>
        </ul>

        <h3>Screen reader flow</h3>
        <ul>
          <li>The component renders as a plain <code>&lt;div&gt;</code> — content reads linearly: title, description, button.</li>
          <li>Consider wrapping in a <code>role="status"</code> region if the empty state appears dynamically after a search or filter.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>If the empty state replaces previously visible content, add <code>aria-live="polite"</code> on a parent region so assistive technology announces the change.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Empty bookings list</span>
            <div style="max-width:400px;margin:0 auto;">
              <EmptyState
                title="No bookings yet"
                description="When customers book appointments, they will appear here."
                buttonText="Create booking"
              />
            </div>
          </div>
        </div>

        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Search with no results</span>
            <div style="max-width:400px;margin:0 auto;">
              <EmptyState
                title="No results found"
                description="Try adjusting your search or filter criteria."
              />
            </div>
          </div>
        </div>

        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Error / retry</span>
            <div style="max-width:400px;margin:0 auto;">
              <EmptyState
                title="Something went wrong"
                description="We couldn't load your data. Please try again."
                buttonText="Try again"
              />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — vague title with unclear action</span>
            <div style="max-width:400px;margin:0 auto;">
              <EmptyState title="Empty" buttonText="Go" />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Title should explain what is empty; button text should describe the action</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — overly long description</span>
            <div style="max-width:400px;margin:0 auto;">
              <EmptyState
                title="No bookings"
                description="It looks like you haven't created any bookings yet. Bookings are a way for your customers to schedule appointments with you. You can create one by clicking the button below, or you can import them from a CSV file using the settings panel."
              />
            </div>
            <span style="font-size:0.75rem;color:#FD3860;">Keep the description to 1–2 short sentences</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>EmptyState</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">PhWarningCircle</code></td>
              <td>Phosphor icon component or registered component name. Rendered at 32 px inside a 64 px circle.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary heading text. Hidden when <code>null</code> and no <code>title</code> slot is provided.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Supporting text below the title. Hidden when <code>null</code> and no <code>description</code> slot is provided.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">buttonText</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Label for the call-to-action <code>ButtonPrimary</code>. Hidden when <code>null</code> and no <code>action</code> slot is provided.</td>
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
              <td><code class="prop-name">action</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Emitted when the default ButtonPrimary is clicked. Not emitted when using the <code>action</code> slot.</td>
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
              <td><code class="prop-default">title prop</code></td>
              <td>Custom title content. Overrides the <code>title</code> prop text.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-default">description prop</code></td>
              <td>Custom description content. Overrides the <code>description</code> prop text.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">action</code></td>
              <td><code class="prop-default">ButtonPrimary</code></td>
              <td>Custom action area. Replaces the default button entirely.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">
          EmptyState inherits all colors from <code>--marks-color-*</code> tokens.
          Override them on a parent container to switch themes.
        </p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default theme</span>
            <div style="max-width:420px;margin:0 auto;">
              <EmptyState
                title="No bookings yet"
                description="When customers book appointments, they will appear here."
                buttonText="Create booking"
              />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Dark theme</span>
            <div style="max-width:420px;margin:0 auto;">
              <EmptyState
                title="No bookings yet"
                description="When customers book appointments, they will appear here."
                buttonText="Create booking"
              />
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
<pre><span class="token-comment">// Full empty state</span>
<span class="token-tag">&lt;EmptyState</span>
  <span class="token-attr">title</span>=<span class="token-string">"No bookings yet"</span>
  <span class="token-attr">description</span>=<span class="token-string">"When customers book
    appointments, they will appear here."</span>
  <span class="token-attr">buttonText</span>=<span class="token-string">"Create booking"</span>
  <span class="token-attr">@action</span>=<span class="token-string">"handleCreate"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Without button</span>
<span class="token-tag">&lt;EmptyState</span>
  <span class="token-attr">title</span>=<span class="token-string">"No results found"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Try adjusting your
    search or filter criteria."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Without description</span>
<span class="token-tag">&lt;EmptyState</span>
  <span class="token-attr">title</span>=<span class="token-string">"Nothing here yet"</span>
  <span class="token-attr">buttonText</span>=<span class="token-string">"Get started"</span>
  <span class="token-attr">@action</span>=<span class="token-string">"handleStart"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Title only (minimal)</span>
<span class="token-tag">&lt;EmptyState</span>
  <span class="token-attr">title</span>=<span class="token-string">"No notifications"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Custom icon (Phosphor component)</span>
<span class="token-tag">&lt;EmptyState</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhMagnifyingGlass"</span>
  <span class="token-attr">title</span>=<span class="token-string">"No results"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Try a different query."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Slot overrides</span>
<span class="token-tag">&lt;EmptyState&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#title</span><span class="token-tag">&gt;</span>
    Custom <span class="token-tag">&lt;strong&gt;</span>rich<span class="token-tag">&lt;/strong&gt;</span> title
  <span class="token-tag">&lt;/template&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#action</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;ButtonPrimary</span>
      <span class="token-attr">text</span>=<span class="token-string">"Primary"</span>
      <span class="token-attr">@click</span>=<span class="token-string">"doSomething"</span>
    <span class="token-tag">/&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/EmptyState&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- EmptyState — rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state"</span><span class="token-tag">&gt;</span>

  <span class="token-comment">&lt;!-- Icon circle --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__icon-container"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;svg</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__icon"</span>
         <span class="token-attr">width</span>=<span class="token-string">"32"</span> <span class="token-attr">height</span>=<span class="token-string">"32"</span><span class="token-tag">&gt;</span>
      …
    <span class="token-tag">&lt;/svg&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-comment">&lt;!-- Text content --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__content"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__title"</span><span class="token-tag">&gt;</span>
      No bookings yet
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__description"</span><span class="token-tag">&gt;</span>
      When customers book appointments,
      they will appear here.
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-comment">&lt;!-- Action --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-empty-state__action"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;button</span> <span class="token-attr">class</span>=<span class="token-string">"marks-button-primary
           marks-button-primary--medium"</span><span class="token-tag">&gt;</span>
      Create booking
    <span class="token-tag">&lt;/button&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-empty-state
  .marks-empty-state__icon-container
  .marks-empty-state__icon
  .marks-empty-state__content
  .marks-empty-state__title
  .marks-empty-state__description
  .marks-empty-state__action
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Layout ───</span>

<span class="token-selector">.marks-empty-state</span> {
  <span class="token-attr">display</span>: <span class="token-keyword">flex</span>;
  <span class="token-attr">flex-direction</span>: <span class="token-keyword">column</span>;
  <span class="token-attr">align-items</span>: <span class="token-keyword">center</span>;
  <span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-28</span>);
  <span class="token-attr">text-align</span>: <span class="token-keyword">center</span>;
  <span class="token-attr">width</span>: <span class="token-number">100%</span>;
}


<span class="token-comment">// ─── Icon container ───</span>

<span class="token-selector">__icon-container</span> {
  <span class="token-attr">width</span>: <span class="token-number">64px</span>;
  <span class="token-attr">height</span>: <span class="token-number">64px</span>;
  <span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
  <span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
  <span class="token-attr">display</span>: <span class="token-keyword">flex</span>;
  <span class="token-attr">align-items</span>: <span class="token-keyword">center</span>;
  <span class="token-attr">justify-content</span>: <span class="token-keyword">center</span>;
}

<span class="token-selector">__icon</span> {
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);
}


<span class="token-comment">// ─── Content ───</span>

<span class="token-selector">__content</span> {
  <span class="token-attr">display</span>: <span class="token-keyword">flex</span>;
  <span class="token-attr">flex-direction</span>: <span class="token-keyword">column</span>;
  <span class="token-attr">align-items</span>: <span class="token-keyword">center</span>;
  <span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);
}


<span class="token-comment">// ─── Typography ───</span>

<span class="token-selector">__title</span> {
  <span class="token-keyword">@include</span> marks-typography-h4-regular;
  <span class="token-attr">font-weight</span>: <span class="token-keyword">$marks-font-weight-medium</span>;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);
}

<span class="token-selector">__description</span> {
  <span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
  <span class="token-attr">line-height</span>: <span class="token-number">150%</span>;
}


<span class="token-comment">// ─── Action ───</span>

<span class="token-selector">__action</span> {
  <span class="token-attr">display</span>: <span class="token-keyword">flex</span>;
  <span class="token-attr">align-items</span>: <span class="token-keyword">center</span>;
  <span class="token-attr">justify-content</span>: <span class="token-keyword">center</span>;
}</pre>
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
  name: 'EmptyStateDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      actionCount: 0,
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

.btn-anatomy__frame.anatomy-stack {
  flex-direction: column;
  align-items: center;
  gap: 0;
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

/* Anatomy stack pieces */
.anatomy-stack__circle {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--marks-color-gray-400, #ECECEC);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed #2576F7;
}

.anatomy-stack__circle-label {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
  font-weight: 600;
  color: #2576F7;
}

.anatomy-stack__gap {
  position: relative;
  width: 1px;
  height: 28px;
  background: #FD3860;
}

.anatomy-stack__gap--sm {
  height: 8px;
}

.anatomy-stack__text-row {
  position: relative;
  height: 24px;
  padding: 0 16px;
  border-radius: 4px;
  background: rgba(37, 118, 247, 0.08);
  border: 1.5px dashed #2576F7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: #2576F7;
  white-space: nowrap;
}

.anatomy-stack__text-row--secondary {
  background: rgba(37, 118, 247, 0.04);
  color: #6F6F6F;
  border-color: #8D8D8D;
}

.anatomy-stack__text-row--button {
  height: 36px;
  background: rgba(15, 175, 128, 0.08);
  border-color: #0FAF80;
  color: #0FAF80;
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

/* ─── Variant sections ─── */
.variant-section {
  margin-bottom: 32px;
}

.variant-section__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--marks-color-gray-300, #8D8D8D);
  margin-bottom: 12px;
}

/* ─── Hide icon helper (variant demo) ─── */
.hide-icon :deep(.marks-empty-state__icon-container) {
  display: none;
}
</style>
