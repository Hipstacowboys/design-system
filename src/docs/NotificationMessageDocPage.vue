<template>
  <DocHeader active-page="notification-message" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="notification-message" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Notification Message</h1>
        <p class="content__lead">
          A read-only notification item that surfaces events, alerts, or updates.
          Supports an icon, title, timestamp, body text, description, and a
          "new" indicator dot. Use <code>type="single"</code> for standalone
          cards and <code>type="inList"</code> for stacked rows inside a
          <code>NotificationDialog</code>.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Single</strong> — A standalone notification card with shadow and rounded corners. Toast-like messages, single-item alerts, or isolated event cards.</li>
          <li><strong>In-list</strong> — A border-separated row inside a notification dialog or feed. Stacked notification lists, activity feeds, inbox panels.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For inline validation feedback — use an <code>Alert</code> instead.</li>
          <li>For small count indicators — use a <code>NotificationBadge</code>.</li>
          <li>For dismissible banners — use an <code>Alert</code> with a close action.</li>
          <li>For interactive dialogs — use a <code>NotificationDialog</code> that wraps these messages.</li>
        </ul>

        <h3>Single vs In-list</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Single (standalone card)</span>
            <NotificationMessage
              type="single"
              title="Booking confirmed"
              timestamp="2 min ago"
              mainText="Your reservation for Dec 15 has been confirmed."
              :new="true"
            />
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">In-list (stacked row)</span>
            <div style="border:1px solid var(--marks-color-gray-150);border-radius:var(--marks-radius-16);overflow:hidden;">
              <NotificationMessage
                type="inList"
                title="Payment received"
                timestamp="1 h ago"
                mainText="Invoice #1042 — $320.00"
                :new="true"
              />
              <NotificationMessage
                type="inList"
                title="New review"
                timestamp="3 h ago"
                description="A guest left a 5-star review."
              />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; spacing</h2>
        <p class="comp-section-desc">Every notification message shares the same internal structure: icon circle, text column, and optional new-dot indicator.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <NotificationMessage
              type="single"
              title="Event title"
              timestamp="5 min ago"
              mainText="Primary body text goes here."
              description="Secondary description with extra detail."
              :new="true"
            />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>__icon</code> (48 px circle) ·
              <code>__title</code> + <code>__timestamp</code> (header row) ·
              <code>__main-text</code> (body) ·
              <code>__description</code> (secondary) ·
              <code>__new-indicator</code> (8 px dot)
            </div>
          </div>
        </div>

        <h3>Spacing tokens</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">NotificationMessage — single</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>container padding</td><td><code>--marks-spacing-16</code></td><td>16 px</td></tr>
              <tr><td>icon → content gap</td><td><code>--marks-spacing-12</code></td><td>12 px</td></tr>
              <tr><td>icon circle size</td><td><code>—</code></td><td>48 px</td></tr>
              <tr><td>icon inner size</td><td><code>—</code></td><td>32 px</td></tr>
              <tr><td>header → body gap</td><td><code>--marks-spacing-8</code></td><td>8 px</td></tr>
              <tr><td>title ↔ timestamp gap</td><td><code>--marks-spacing-8</code></td><td>8 px</td></tr>
              <tr><td>body items gap</td><td><code>--marks-spacing-8</code></td><td>8 px</td></tr>
              <tr><td>text → actions gap</td><td><code>--marks-spacing-20</code></td><td>20 px</td></tr>
              <tr><td>new-dot diameter</td><td><code>—</code></td><td>8 px</td></tr>
              <tr><td>border radius (single)</td><td><code>--marks-radius-16</code></td><td>16 px</td></tr>
              <tr><td>box-shadow (single)</td><td><code>—</code></td><td>0 14px 30px rgba(0,0,0,0.15)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">NotificationMessage — inList</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding vertical</td><td><code>—</code></td><td>24 px</td></tr>
              <tr><td>padding horizontal</td><td><code>--marks-spacing-16</code></td><td>16 px</td></tr>
              <tr><td>border top/bottom</td><td><code>--marks-color-gray-150</code></td><td>1 px solid</td></tr>
              <tr><td>margin-top (collapse)</td><td><code>—</code></td><td>-1 px</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; content tiers</h2>
        <p class="comp-section-desc">Content density produces three visual tiers. Each tier can be "new" or "read".</p>

        <div class="variant-section">
          <p class="variant-section__label">Single-line — title only</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Read</th>
                  <th>New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">single</span></td>
                  <td><NotificationMessage type="single" title="Booking confirmed" timestamp="2 min ago" /></td>
                  <td><NotificationMessage type="single" title="Booking confirmed" timestamp="2 min ago" :new="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">inList</span></td>
                  <td><NotificationMessage type="inList" title="Booking confirmed" timestamp="2 min ago" /></td>
                  <td><NotificationMessage type="inList" title="Booking confirmed" timestamp="2 min ago" :new="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Double-line — title + main text</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Read</th>
                  <th>New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">single</span></td>
                  <td><NotificationMessage type="single" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042 — $320.00" /></td>
                  <td><NotificationMessage type="single" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042 — $320.00" :new="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">inList</span></td>
                  <td><NotificationMessage type="inList" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042 — $320.00" /></td>
                  <td><NotificationMessage type="inList" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042 — $320.00" :new="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Triple-line — title + main text + description</p>
          <div class="variant-grid">
            <table class="variant-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Read</th>
                  <th>New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="state-chip state-chip--default">single</span></td>
                  <td><NotificationMessage type="single" title="New review" timestamp="3 h ago" mainText="A guest rated your property." description="5-star review with a comment about cleanliness." /></td>
                  <td><NotificationMessage type="single" title="New review" timestamp="3 h ago" mainText="A guest rated your property." description="5-star review with a comment about cleanliness." :new="true" /></td>
                </tr>
                <tr>
                  <td><span class="state-chip state-chip--default">inList</span></td>
                  <td><NotificationMessage type="inList" title="New review" timestamp="3 h ago" mainText="A guest rated your property." description="5-star review with a comment about cleanliness." /></td>
                  <td><NotificationMessage type="inList" title="New review" timestamp="3 h ago" mainText="A guest rated your property." description="5-star review with a comment about cleanliness." :new="true" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Display only</h3>
        <ul>
          <li>NotificationMessage is a purely presentational component — it emits no events.</li>
          <li>Click handling, dismissal, or navigation must be implemented by the parent (e.g. wrapping in a router-link or adding <code>@click</code> on the container).</li>
        </ul>

        <h3>New indicator</h3>
        <ul>
          <li>When <code>:new="true"</code>, an 8 px green dot (<code>--marks-color-green-200</code>) renders at the top-right of the message.</li>
          <li>Toggle the prop to <code>false</code> once the notification is read — the dot disappears reactively.</li>
        </ul>

        <h3>Content slots</h3>
        <ul>
          <li>Every text area (<code>title</code>, <code>timestamp</code>, <code>mainText</code>, <code>description</code>) supports both a prop and a named slot for rich content.</li>
          <li>An <code>actions</code> slot is available below the text content for buttons or links.</li>
          <li>Sections with neither prop nor slot content are not rendered (no empty wrappers in the DOM).</li>
        </ul>

        <h3>Icon</h3>
        <ul>
          <li>Defaults to <code>PhWarningCircle</code> from Phosphor Icons. Pass any Phosphor component or a custom component via the <code>icon</code> prop.</li>
          <li>Icon is rendered at 32 px inside a 48 px circle with <code>--marks-color-gray-100</code> background.</li>
        </ul>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title</h3>
        <ul>
          <li>Use sentence case: "Booking confirmed", not "Booking Confirmed".</li>
          <li>Keep it to 2–5 words. The title identifies the event type.</li>
          <li>Frame as a completed action: "Payment received", "Review submitted".</li>
        </ul>

        <h3>Timestamp</h3>
        <ul>
          <li>Use relative time for recent events: "2 min ago", "1 h ago", "Yesterday".</li>
          <li>Switch to absolute dates for older items: "Dec 15, 2025".</li>
          <li>The timestamp sits right-aligned in the header row beside the title.</li>
        </ul>

        <h3>Main text &amp; description</h3>
        <ul>
          <li><code>mainText</code> — primary body content. One sentence describing the event detail.</li>
          <li><code>description</code> — secondary/supplementary info in lighter color. Keep to one sentence.</li>
          <li>Either can be omitted independently. The component adapts its layout automatically.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders as a <code>&lt;div&gt;</code> — it is not interactive by default.</li>
          <li>When making notifications clickable, wrap with an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> and add <code>role="article"</code> or <code>role="listitem"</code> depending on context.</li>
          <li>For notification feeds, wrap the list in <code>&lt;div role="feed" aria-label="Notifications"&gt;</code>.</li>
        </ul>

        <h3>Screen readers</h3>
        <ul>
          <li>The title, timestamp, main text, and description are all plain text — screen readers announce them in source order.</li>
          <li>The new-indicator dot is purely visual (no ARIA). Add <code>aria-label="New"</code> on the wrapper or use <code>visually-hidden</code> text if the unread state must be announced.</li>
        </ul>

        <h3>Color contrast</h3>
        <ul>
          <li>Title uses <code>--marks-color-black</code> — AAA contrast on white.</li>
          <li>Timestamp and description use <code>--marks-color-gray-300</code> — verify AA compliance when overriding tokens.</li>
          <li>The green new-dot is decorative, not the sole indicator of state — pair with text or ARIA for full accessibility.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>If the new-dot is the only way to distinguish unread items, add a screen-reader-only label. Visual-only state cues exclude assistive-technology users.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Notification feed</span>
            <div style="border:1px solid var(--marks-color-gray-150);border-radius:var(--marks-radius-16);overflow:hidden;max-width:480px;">
              <NotificationMessage
                type="inList"
                title="Booking confirmed"
                timestamp="2 min ago"
                mainText="Your reservation for Dec 15 has been confirmed."
                :new="true"
              />
              <NotificationMessage
                type="inList"
                title="Payment received"
                timestamp="1 h ago"
                mainText="Invoice #1042 — $320.00"
                description="Funds will be available in 2 business days."
                :new="true"
              />
              <NotificationMessage
                type="inList"
                title="New review"
                timestamp="Yesterday"
                description="A guest left a 5-star review."
              />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Standalone toast</span>
            <div style="max-width:420px;">
              <NotificationMessage
                type="single"
                title="Upload complete"
                timestamp="Just now"
                mainText="3 photos were added to the gallery."
                :new="true"
              />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use inList without a container</span>
            <NotificationMessage
              type="inList"
              title="Orphaned row"
              timestamp="Now"
            />
            <span style="font-size:0.75rem;color:#FD3860;">In-list items need a parent with border/radius to look correct.</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — overload with long text</span>
            <NotificationMessage
              type="single"
              title="Extremely long notification title that wraps to multiple lines"
              mainText="This message body is far too verbose. Notifications should be concise summaries, not full paragraphs of information that users must read in detail."
              description="And this description adds even more text that no user will read in a notification context."
            />
            <span style="font-size:0.75rem;color:#FD3860;">Keep text concise — one sentence per field.</span>
          </div>
        </div>

        <!-- ─── 8. API / Props ─── -->
        <h2 id="api" class="comp-section-h2">API / Props</h2>

        <h3>NotificationMessage</h3>
        <table class="props-table">
          <thead>
            <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'single'</code></td>
              <td>Layout variant. <code>'single'</code> renders a shadowed card; <code>'inList'</code> renders a border-separated row.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">Object | String</code></td>
              <td><code class="prop-default">'PhWarningCircle'</code></td>
              <td>Phosphor icon component or name rendered inside the 48 px circle.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary heading in the notification header row.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">timestamp</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Time label displayed right-aligned beside the title.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">mainText</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Primary body text below the header.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">null</code></td>
              <td>Secondary description in lighter color below the main text.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">new</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Shows an 8 px green dot at the top-right when <code>true</code>.</td>
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
              <td><code class="prop-type">title prop</code></td>
              <td>Custom title content (rich HTML).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">timestamp</code></td>
              <td><code class="prop-type">timestamp prop</code></td>
              <td>Custom timestamp content.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">mainText</code></td>
              <td><code class="prop-type">mainText prop</code></td>
              <td>Custom body content.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">description prop</code></td>
              <td>Custom secondary description.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">actions</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Action buttons/links below text content.</td>
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
              <td colspan="3" style="color:var(--marks-color-gray-300);font-style:italic;">None — this is a display-only component. Add click handling on the parent wrapper.</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">NotificationMessage adapts automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Single card</span>
            <div style="max-width:420px;">
              <NotificationMessage
                type="single"
                title="Booking confirmed"
                timestamp="2 min ago"
                mainText="Your reservation for Dec 15 has been confirmed."
                :new="true"
              />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">In-list rows</span>
            <div style="border:1px solid var(--marks-color-gray-150);border-radius:var(--marks-radius-16);overflow:hidden;max-width:420px;">
              <NotificationMessage type="inList" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042" :new="true" />
              <NotificationMessage type="inList" title="New review" timestamp="Yesterday" description="5-star review." />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Single card</span>
            <div style="max-width:420px;">
              <NotificationMessage
                type="single"
                title="Booking confirmed"
                timestamp="2 min ago"
                mainText="Your reservation for Dec 15 has been confirmed."
                :new="true"
              />
            </div>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">In-list rows</span>
            <div style="border:1px solid var(--marks-color-gray-150);border-radius:var(--marks-radius-16);overflow:hidden;max-width:420px;">
              <NotificationMessage type="inList" title="Payment received" timestamp="1 h ago" mainText="Invoice #1042" :new="true" />
              <NotificationMessage type="inList" title="New review" timestamp="Yesterday" description="5-star review." />
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
<pre><span class="token-comment">// Standalone card (single)</span>
<span class="token-tag">&lt;NotificationMessage</span>
  <span class="token-attr">type</span>=<span class="token-string">"single"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Booking confirmed"</span>
  <span class="token-attr">timestamp</span>=<span class="token-string">"2 min ago"</span>
  <span class="token-attr">mainText</span>=<span class="token-string">"Reservation for Dec 15
    has been confirmed."</span>
  <span class="token-attr">:new</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// In-list row</span>
<span class="token-tag">&lt;NotificationMessage</span>
  <span class="token-attr">type</span>=<span class="token-string">"inList"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Payment received"</span>
  <span class="token-attr">timestamp</span>=<span class="token-string">"1 h ago"</span>
  <span class="token-attr">mainText</span>=<span class="token-string">"Invoice #1042 — $320"</span>
  <span class="token-attr">description</span>=<span class="token-string">"Funds available
    in 2 business days."</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Title-only (minimal)</span>
<span class="token-tag">&lt;NotificationMessage</span>
  <span class="token-attr">title</span>=<span class="token-string">"System maintenance"</span>
  <span class="token-attr">timestamp</span>=<span class="token-string">"5 min ago"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Custom icon</span>
<span class="token-tag">&lt;NotificationMessage</span>
  <span class="token-attr">:icon</span>=<span class="token-string">"PhCheckCircle"</span>
  <span class="token-attr">title</span>=<span class="token-string">"Upload complete"</span>
  <span class="token-attr">mainText</span>=<span class="token-string">"3 photos added."</span>
  <span class="token-attr">:new</span>=<span class="token-string">"true"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With actions slot</span>
<span class="token-tag">&lt;NotificationMessage</span>
  <span class="token-attr">title</span>=<span class="token-string">"New request"</span>
  <span class="token-attr">mainText</span>=<span class="token-string">"Guest wants early check-in."</span>
<span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;template</span> <span class="token-attr">#actions</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;Button</span> <span class="token-attr">size</span>=<span class="token-string">"sm"</span><span class="token-tag">&gt;</span>Approve<span class="token-tag">&lt;/Button&gt;</span>
    <span class="token-tag">&lt;Button</span> <span class="token-attr">size</span>=<span class="token-string">"sm"</span> <span class="token-attr">variant</span>=<span class="token-string">"ghost"</span><span class="token-tag">&gt;</span>Dismiss<span class="token-tag">&lt;/Button&gt;</span>
  <span class="token-tag">&lt;/template&gt;</span>
<span class="token-tag">&lt;/NotificationMessage&gt;</span></pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Single (standalone card) --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-message
     marks-notification-message--single"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-message__icon"</span><span class="token-tag">&gt;</span>
    <span class="token-comment">&lt;!-- 32px Phosphor icon --&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-message__content"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__text-content"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__header"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/div&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__timestamp"</span><span class="token-tag">&gt;</span>2 min ago<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__body"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__main-text"</span><span class="token-tag">&gt;</span>Body<span class="token-tag">&lt;/div&gt;</span>
        <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__description"</span><span class="token-tag">&gt;</span>Desc<span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__new-indicator"</span><span class="token-tag">&gt;&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- InList (stacked row) --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-message
     marks-notification-message--inList"</span><span class="token-tag">&gt;</span>
  …
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-notification-message
  .marks-notification-message--single
  .marks-notification-message--inList
  .marks-notification-message__icon
  .marks-notification-message__icon-inner
  .marks-notification-message__content
  .marks-notification-message__text-content
  .marks-notification-message__header
  .marks-notification-message__title
  .marks-notification-message__timestamp
  .marks-notification-message__body
  .marks-notification-message__main-text
  .marks-notification-message__description
  .marks-notification-message__actions
  .marks-notification-message__new-indicator
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Layout ───</span>

<span class="token-attr">display</span>: flex;
<span class="token-attr">align-items</span>: flex-start;
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>);


<span class="token-comment">// ─── Single variant ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">14px</span> <span class="token-number">30px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.15</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-16</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>: <span class="token-number">1px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);


<span class="token-comment">// ─── InList variant ───</span>

<span class="token-attr">border-top</span>: <span class="token-number">1px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);
<span class="token-attr">border-bottom</span>: <span class="token-number">1px</span> solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);
<span class="token-attr">padding</span>: <span class="token-number">24px</span> <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">margin-top</span>: <span class="token-number">-1px</span>;


<span class="token-comment">// ─── Icon circle ───</span>

<span class="token-attr">width</span>: <span class="token-number">48px</span>;
<span class="token-attr">height</span>: <span class="token-number">48px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);

<span class="token-comment">// icon inner</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);


<span class="token-comment">// ─── Typography ───</span>

<span class="token-comment">// Title</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: $marks-font-weight-medium;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Timestamp</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);

<span class="token-comment">// Main text</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Description</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);


<span class="token-comment">// ─── New indicator ───</span>

<span class="token-attr">width</span>: <span class="token-number">8px</span>;
<span class="token-attr">height</span>: <span class="token-number">8px</span>;
<span class="token-attr">border-radius</span>: <span class="token-number">50%</span>;
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-green-200</span>);</pre>
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
  name: 'NotificationMessageDocPage',
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
