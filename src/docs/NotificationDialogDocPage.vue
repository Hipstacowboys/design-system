<template>
  <DocHeader active-page="notification-dialog" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="notification-dialog" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Notification Dialog</h1>
        <p class="content__lead">
          A floating panel that displays a scrollable list of notification
          messages with filter tabs (All / Unread). Composes
          <code>NotificationMessage</code>, <code>ButtonPrimary</code>, and
          <code>ButtonSecondary</code> internally. Supports
          <code>v-model:filter</code> for tab state and emits
          <code>action</code> events for message-level interactions.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Notification center</strong> — Display a scrollable list of in-app notifications with optional action buttons per message.</li>
          <li><strong>Activity feed</strong> — Show recent events such as new bookings, status changes, or system alerts in a compact overlay.</li>
          <li><strong>Filter by read state</strong> — Let users toggle between all and unread messages without leaving the current page.</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For a single notification or toast — use <code>NotificationMessage</code> standalone or an <code>Alert</code>.</li>
          <li>For persistent sidebar content — use a dedicated navigation panel, not a floating dialog.</li>
          <li>For modal confirmations or destructive actions — use a modal dialog component instead.</li>
        </ul>

        <h3>Default state</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">With messages</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="demoMessages"
                :filter="demoFilter"
                @update:filter="demoFilter = $event"
                @action="handleDemoAction"
              />
            </div>
          </div>
        </div>

        <!-- ─── 2. Anatomy & structure ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; structure</h2>
        <p class="comp-section-desc">The dialog is a vertical stack: header with title and filter tabs, then a scrollable message list. Messages may include action buttons rendered by internal <code>ButtonPrimary</code> / <code>ButtonSecondary</code> components.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Dialog panel — single message</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="demoMessages.slice(0, 1)"
                filter="all"
              />
            </div>
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-notification-dialog</code> (root) ·
              <code>__header</code> (title + switch row) ·
              <code>__title</code> (heading) ·
              <code>__switch</code> (filter tab group) ·
              <code>__switch-option</code> (tab button) ·
              <code>__messages</code> (scrollable list)
            </div>
          </div>
        </div>

        <h3>Dialog panel tokens</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Panel</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>background</td><td><code>--marks-color-white</code></td><td>#FFFFFF</td></tr>
              <tr><td>border-radius</td><td><code>--marks-radius-24</code></td><td>24px</td></tr>
              <tr><td>box-shadow</td><td><code>—</code></td><td>0 14px 30px rgba(0,0,0,0.15)</td></tr>
              <tr><td>overflow</td><td><code>—</code></td><td>hidden</td></tr>
              <tr><td>layout</td><td><code>—</code></td><td>flex column, width 100%</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Header</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-24</code></td><td>24px</td></tr>
              <tr><td>border-bottom</td><td><code>--marks-color-gray-150</code></td><td>1px solid</td></tr>
              <tr><td>alignment</td><td><code>—</code></td><td>flex, center, space-between</td></tr>
              <tr><td>title typography</td><td><code>marks-typography-h4-regular</code></td><td>medium weight</td></tr>
              <tr><td>title color</td><td><code>--marks-color-black</code></td><td>#1A1A1A</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Filter tabs</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>gap between tabs</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>typography</td><td><code>marks-typography-paragraph-md-multiline</code></td><td>medium weight</td></tr>
              <tr><td>inactive color</td><td><code>--marks-color-gray-300</code></td><td>#8D8D8D</td></tr>
              <tr><td>active color</td><td><code>--marks-color-black</code></td><td>#1A1A1A</td></tr>
              <tr><td>hover color</td><td><code>--marks-color-gray-400</code></td><td>#ECECEC</td></tr>
              <tr><td>transition</td><td><code>—</code></td><td>color 0.2s ease</td></tr>
            </tbody>
          </table>
        </div>

        <div class="anatomy-block">
          <span class="anatomy-block__label">Message list</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>max-height</td><td><code>—</code></td><td>600px</td></tr>
              <tr><td>overflow-y</td><td><code>—</code></td><td>auto (scrollable)</td></tr>
              <tr><td>layout</td><td><code>—</code></td><td>flex column</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants & states ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; states</h2>
        <p class="comp-section-desc">Two primary states: populated with messages and empty. Filter tabs control which messages are visible.</p>

        <div class="variant-section">
          <p class="variant-section__label">With messages — All filter active</p>
          <div style="max-width:420px;">
            <NotificationDialog
              :messages="demoMessages"
              filter="all"
            />
          </div>
        </div>

        <div class="variant-section" style="margin-top:32px;">
          <p class="variant-section__label">With messages — Unread filter active</p>
          <div style="max-width:420px;">
            <NotificationDialog
              :messages="unreadMessages"
              filter="unread"
            />
          </div>
        </div>

        <div class="variant-section" style="margin-top:32px;">
          <p class="variant-section__label">Empty state — no messages</p>
          <div style="max-width:420px;">
            <NotificationDialog
              :messages="[]"
              filter="all"
            />
          </div>
        </div>

        <div class="variant-section" style="margin-top:32px;">
          <p class="variant-section__label">Custom title</p>
          <div style="max-width:420px;">
            <NotificationDialog
              title="Activity"
              :messages="demoMessages.slice(0, 1)"
              filter="all"
            />
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Filter tabs</h3>
        <ul>
          <li>Clicking "All" or "Unread" emits <code>update:filter</code> with the string <code>'all'</code> or <code>'unread'</code>.</li>
          <li>The active tab renders in <code>--marks-color-black</code>; inactive tabs use <code>--marks-color-gray-300</code>.</li>
          <li>Bind with <code>v-model:filter</code> for two-way state, or listen to <code>@update:filter</code> manually.</li>
          <li>The component does <strong>not</strong> filter messages internally — the parent must supply the correct array for the active filter.</li>
        </ul>

        <h3>Action events</h3>
        <ul>
          <li>When a message's primary or secondary button is clicked, the dialog emits <code>action</code>.</li>
          <li>Payload shape: <code>{ type: 'primary' | 'secondary', index: Number, message: Object }</code>.</li>
          <li>The parent decides how to handle the action (navigate, confirm, dismiss, etc.).</li>
        </ul>

        <h3>Empty state</h3>
        <ul>
          <li>When <code>messages</code> is an empty array, the message list renders empty.</li>
          <li>Use the default slot to inject a custom empty-state illustration or message.</li>
        </ul>

        <h3>Scrolling</h3>
        <ul>
          <li>The message list scrolls at <code>max-height: 600px</code>.</li>
          <li>The header stays fixed at the top of the dialog panel.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Toggle filter tabs</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="filteredMessages"
                :filter="liveFilter"
                @update:filter="liveFilter = $event"
                @action="lastAction = $event"
              />
            </div>
            <span style="font-size:0.8rem;color:#6F6F6F;margin-top:8px;display:block;">
              Active filter: <code v-text="liveFilter"></code>
            </span>
            <span v-if="lastAction" style="font-size:0.8rem;color:#6F6F6F;display:block;">
              Last action: <code v-text="lastActionText"></code>
            </span>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Title</h3>
        <ul>
          <li>Default title is "Notifications" — override via the <code>title</code> prop when context requires it (e.g., "Activity", "Updates").</li>
          <li>Keep it to one or two words. The title anchors the dialog's purpose.</li>
          <li>Use sentence case.</li>
        </ul>

        <h3>Filter labels</h3>
        <ul>
          <li>"All" and "Unread" are hardcoded in the component template.</li>
          <li>If custom filter labels are needed, use the <code>title</code> slot to replace the entire header area.</li>
        </ul>

        <h3>Message content</h3>
        <ul>
          <li>Each message object should include <code>title</code> and <code>timestamp</code>; <code>mainText</code>, <code>description</code>, and <code>actions</code> are optional.</li>
          <li>Keep titles concise (3–6 words). Use the description for additional detail.</li>
          <li>Action button labels should be verbs: "Accept", "View", "Dismiss".</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>The root element is a <code>&lt;div&gt;</code>. When used as a popover, wrap it in a container with <code>role="dialog"</code> and an <code>aria-label</code>.</li>
          <li>Filter tabs are <code>&lt;button type="button"&gt;</code> — keyboard accessible by default.</li>
          <li>Each <code>NotificationMessage</code> is a self-contained block with its own action buttons.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus through filter tabs, then into message action buttons in DOM order.</li>
          <li><kbd>Enter</kbd> / <kbd>Space</kbd> — activates the focused filter tab or action button.</li>
          <li><kbd>Escape</kbd> — should close the dialog (implement in the parent's popover logic).</li>
        </ul>

        <h3>Screen readers</h3>
        <ul>
          <li>Add <code>aria-label="Notifications"</code> to the dialog container for context.</li>
          <li>Consider adding <code>aria-pressed</code> to filter buttons to indicate the active tab.</li>
          <li>When the list is empty, provide an accessible message via <code>aria-live="polite"</code>.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>When used as a dropdown overlay, wrap in a container with <code>role="dialog"</code> and manage focus trapping. The component itself does not trap focus.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Real-world examples</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Booking notifications with actions</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="bookingMessages"
                filter="all"
              />
            </div>
          </div>
        </div>

        <div class="comp-demo" style="margin-top:24px;">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Minimal — title-only messages</span>
            <div style="max-width:420px;">
              <NotificationDialog
                title="Updates"
                :messages="minimalMessages"
                filter="all"
              />
            </div>
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — use as a full-page layout</span>
            <span style="font-size:0.75rem;color:#FD3860;">The dialog is a floating overlay. Use a list view for full-page notification centers.</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — overload messages with many action buttons</span>
            <span style="font-size:0.75rem;color:#FD3860;">Each message supports at most one primary + one secondary action. Keep interactions simple.</span>
          </div>
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — hide the filter when only one state exists</span>
            <span style="font-size:0.75rem;color:#FD3860;">The filter tabs always render. If filtering is unnecessary, consider a plain message list.</span>
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
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'Notifications'</code></td>
              <td>Heading text displayed in the dialog header.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">filter</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">'all'</code></td>
              <td>Active filter tab. Validated: <code>'all'</code> or <code>'unread'</code>. Bind with <code>v-model:filter</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">messages</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code></td>
              <td>Array of message objects rendered via internal <code>NotificationMessage</code> components.</td>
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
              <td><code class="prop-name">update:filter</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Emitted when a filter tab is clicked. Payload is <code>'all'</code> or <code>'unread'</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">action</code></td>
              <td><code class="prop-type">Object</code></td>
              <td>Emitted on message button click. Shape: <code>{ type, index, message }</code>.</td>
            </tr>
          </tbody>
        </table>

        <h3>Message object shape</h3>
        <table class="props-table">
          <thead>
            <tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">icon</code></td>
              <td><code class="prop-type">String</code></td>
              <td>No</td>
              <td>Icon identifier passed to <code>NotificationMessage</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">title</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Yes</td>
              <td>Message headline.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">timestamp</code></td>
              <td><code class="prop-type">String</code></td>
              <td>No</td>
              <td>Formatted time string (e.g., "2 min ago").</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">mainText</code></td>
              <td><code class="prop-type">String</code></td>
              <td>No</td>
              <td>Primary body text.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">description</code></td>
              <td><code class="prop-type">String</code></td>
              <td>No</td>
              <td>Secondary description below the body.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">new</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td>No</td>
              <td>Marks the message as unread.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">actions</code></td>
              <td><code class="prop-type">Object</code></td>
              <td>No</td>
              <td>Object with <code>primary</code> and/or <code>secondary</code> button configs (<code>{ text, leftIcon? }</code>).</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">All colors use <code>--marks-color-*</code> tokens. Override them on a parent container to theme the entire dialog.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="demoMessages.slice(0, 2)"
                filter="all"
              />
            </div>
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Default</span>
            <div style="max-width:420px;">
              <NotificationDialog
                :messages="demoMessages.slice(0, 2)"
                filter="all"
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
              v-text="tab.label"
            ></button>
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
<pre><span class="token-comment">// Basic usage with messages</span>
<span class="token-tag">&lt;NotificationDialog</span>
  <span class="token-attr">:messages</span>=<span class="token-string">"notifications"</span>
  <span class="token-attr">:filter</span>=<span class="token-string">"activeFilter"</span>
  <span class="token-attr">@update:filter</span>=<span class="token-string">"activeFilter = $event"</span>
  <span class="token-attr">@action</span>=<span class="token-string">"handleAction"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With v-model:filter shorthand</span>
<span class="token-tag">&lt;NotificationDialog</span>
  <span class="token-attr">v-model:filter</span>=<span class="token-string">"activeFilter"</span>
  <span class="token-attr">:messages</span>=<span class="token-string">"notifications"</span>
  <span class="token-attr">@action</span>=<span class="token-string">"handleAction"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Custom title</span>
<span class="token-tag">&lt;NotificationDialog</span>
  <span class="token-attr">title</span>=<span class="token-string">"Activity"</span>
  <span class="token-attr">:messages</span>=<span class="token-string">"activityFeed"</span>
  <span class="token-attr">filter</span>=<span class="token-string">"all"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Message array example</span>
<span class="token-keyword">const</span> notifications = [
  {
    <span class="token-attr">title</span>: <span class="token-string">'New booking request'</span>,
    <span class="token-attr">timestamp</span>: <span class="token-string">'2 min ago'</span>,
    <span class="token-attr">mainText</span>: <span class="token-string">'Room 204, tomorrow 3 PM'</span>,
    <span class="token-attr">new</span>: <span class="token-keyword">true</span>,
    <span class="token-attr">actions</span>: {
      <span class="token-attr">primary</span>: { <span class="token-attr">text</span>: <span class="token-string">'Accept'</span> },
      <span class="token-attr">secondary</span>: { <span class="token-attr">text</span>: <span class="token-string">'Decline'</span> }
    }
  }
]</pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-dialog"</span><span class="token-tag">&gt;</span>

  <span class="token-comment">&lt;!-- Header --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-notification-dialog__header"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__title"</span><span class="token-tag">&gt;</span>
      Notifications
    <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__switch"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;button</span>
        <span class="token-attr">class</span>=<span class="token-string">"…__switch-option
          …__switch-option--active"</span>
        <span class="token-attr">type</span>=<span class="token-string">"button"</span>
      <span class="token-tag">&gt;</span>All<span class="token-tag">&lt;/button&gt;</span>
      <span class="token-tag">&lt;button</span>
        <span class="token-attr">class</span>=<span class="token-string">"…__switch-option"</span>
        <span class="token-attr">type</span>=<span class="token-string">"button"</span>
      <span class="token-tag">&gt;</span>Unread<span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

  <span class="token-comment">&lt;!-- Message list --&gt;</span>
  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"…__messages"</span><span class="token-tag">&gt;</span>
    <span class="token-comment">&lt;!-- NotificationMessage items --&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>

<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-notification-dialog
  .marks-notification-dialog__header
  .marks-notification-dialog__title
  .marks-notification-dialog__switch
  .marks-notification-dialog__switch-option
  .marks-notification-dialog__switch-option--active
  .marks-notification-dialog__messages
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Dialog panel ───</span>

<span class="token-attr">box-shadow</span>: <span class="token-number">0</span> <span class="token-number">14px</span> <span class="token-number">30px</span> rgba(<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0</span>,<span class="token-number">0.15</span>);
<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-24</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">overflow</span>: hidden;


<span class="token-comment">// ─── Header ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">border-bottom</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-150</span>);


<span class="token-comment">// ─── Title ───</span>

<span class="token-keyword">@include</span> marks-typography-h4-regular;
<span class="token-attr">font-weight</span>: $marks-font-weight-medium;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);


<span class="token-comment">// ─── Filter tabs ───</span>

<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);

<span class="token-comment">// Inactive tab</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">font-weight</span>: $marks-font-weight-medium;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);
<span class="token-attr">transition</span>: color <span class="token-number">0.2s</span> ease;

<span class="token-comment">// Active tab</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Hover (inactive)</span>
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-400</span>);


<span class="token-comment">// ─── Message list ───</span>

<span class="token-attr">max-height</span>: <span class="token-number">600px</span>;
<span class="token-attr">overflow-y</span>: auto;</pre>
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
  name: 'NotificationDialogDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      demoFilter: 'all',
      liveFilter: 'all',
      lastAction: null,
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ],
      demoMessages: [
        {
          title: 'New booking request',
          timestamp: '2 min ago',
          mainText: 'John Smith requested a booking for tomorrow at 3:00 PM.',
          new: true,
          actions: {
            primary: { text: 'Accept' },
            secondary: { text: 'Decline' }
          }
        },
        {
          title: 'Booking confirmed',
          timestamp: '1 hour ago',
          description: 'Your booking #1042 has been confirmed by the host.',
          new: true
        },
        {
          title: 'System maintenance',
          timestamp: 'Yesterday',
          description: 'Scheduled maintenance completed. All services operational.',
          new: false
        }
      ],
      bookingMessages: [
        {
          title: 'New reservation',
          timestamp: '5 min ago',
          mainText: 'Emma Wilson — Room 204, Apr 18 at 10:00 AM.',
          new: true,
          actions: {
            primary: { text: 'Confirm' },
            secondary: { text: 'Reschedule' }
          }
        },
        {
          title: 'Cancellation request',
          timestamp: '30 min ago',
          mainText: 'Mark Davis wants to cancel booking #2087.',
          new: true,
          actions: {
            primary: { text: 'Approve' },
            secondary: { text: 'Deny' }
          }
        },
        {
          title: 'Payment received',
          timestamp: '2 hours ago',
          description: 'Invoice #3921 paid — $240.00.',
          new: false
        }
      ],
      minimalMessages: [
        {
          title: 'Version 2.5 released',
          timestamp: '10 min ago',
          new: true
        },
        {
          title: 'New team member added',
          timestamp: '1 hour ago',
          new: false
        },
        {
          title: 'Dashboard widgets updated',
          timestamp: '3 hours ago',
          new: false
        }
      ]
    }
  },
  computed: {
    unreadMessages() {
      return this.demoMessages.filter(m => m.new)
    },
    filteredMessages() {
      if (this.liveFilter === 'unread') {
        return this.demoMessages.filter(m => m.new)
      }
      return this.demoMessages
    },
    lastActionText() {
      if (!this.lastAction) return ''
      return this.lastAction.type + ' on "' + this.lastAction.message.title + '"'
    }
  },
  methods: {
    handleDemoAction(payload) {
      this.lastAction = payload
    },
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    copyCode() {
      const pane = document.querySelector('.code-pane.is-active pre')
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
</style>
