<template>
  <DocHeader active-page="table" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="table" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Components</span>
        <h1>Table</h1>
        <p class="content__lead">
          A card-style data table with an optional header area (title, supporting text,
          action buttons), column headers, and rows. Supports row selection via
          <code>v-model</code>, status cells, per-row action buttons, and custom cell
          slots. Composes <code>Checkbox</code>, <code>ButtonSecondary</code>, and
          <code>Status</code> internally.
        </p>

        <!-- ─── 1. Purpose & when to use ─── -->
        <h2 id="purpose" class="comp-section-h2">Purpose &amp; when to use</h2>

        <h3>When to use</h3>
        <ul>
          <li><strong>Structured data</strong> — Displaying tabular records such as users, orders, projects, or transactions.</li>
          <li><strong>Batch operations</strong> — When users need to select one or more rows to act on (delete, export, assign).</li>
          <li><strong>Status overview</strong> — Showing live status indicators alongside data via the built-in <code>status</code> column type.</li>
          <li><strong>Row-level actions</strong> — Each row can surface a context action via the actions column (three-dot button by default).</li>
        </ul>

        <h3>When NOT to use</h3>
        <ul>
          <li>For key-value pairs or settings — use a description list or form layout.</li>
          <li>For card-based browsing (images, previews) — use a grid of <code>Card</code> components.</li>
          <li>For fewer than 3 rows — consider an inline list or simple text layout.</li>
          <li>For deeply nested or tree-structured data — use a tree view component.</li>
        </ul>

        <!-- ─── 2. Anatomy ─── -->
        <h2 id="anatomy" class="comp-section-h2">Anatomy &amp; sizing</h2>
        <p class="comp-section-desc">The Table is a full-width card that stacks a header region over a native <code>&lt;table&gt;</code> element.</p>

        <h3>Structural parts</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width: 100%;">
            <span class="comp-demo__group-label">Header + Column headers + Rows + Actions</span>
            <Table
              header-title="Team members"
              header-supporting-text="Manage your team and their roles."
              :columns="anatomyCols"
              :rows="anatomyRows"
              style="pointer-events:none;"
            />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;line-height:1.6">
              <code>.marks-table</code> (card wrapper) ·
              <code>.marks-table__header</code> (title area) ·
              <code>.marks-table__table</code> (native table) ·
              <code>.marks-table__row</code> · <code>.marks-table__cell</code> ·
              <code>.marks-table__cell--actions</code>
            </div>
          </div>
        </div>

        <h3>Header area</h3>
        <p class="comp-section-desc">Visible only when <code>headerTitle</code>, <code>headerSupportingText</code>, or the <code>header-actions</code> slot is provided.</p>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Header</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>padding</td><td><code>--marks-spacing-20</code> / <code>--marks-spacing-24</code></td><td>20px 24px</td></tr>
              <tr><td>gap (text → actions)</td><td><code>--marks-spacing-16</code></td><td>16px</td></tr>
              <tr><td>title ↔ supporting gap</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>border-bottom</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
              <tr><td>title typography</td><td><code>marks-typography-h4-bold</code></td><td>—</td></tr>
              <tr><td>supporting typography</td><td><code>marks-typography-paragraph-md-multiline</code></td><td>—</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Columns &amp; rows</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Table cells</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>header cell padding</td><td><code>--marks-spacing-12</code> / <code>--marks-spacing-24</code></td><td>12px 24px</td></tr>
              <tr><td>header cell min-height</td><td><code>—</code></td><td>44px</td></tr>
              <tr><td>header bg</td><td><code>--marks-color-gray-100</code></td><td>—</td></tr>
              <tr><td>header label typography</td><td><code>marks-typography-paragraph-sm-one-line</code></td><td>—</td></tr>
              <tr><td>header label color</td><td><code>--marks-color-gray-350</code></td><td>—</td></tr>
              <tr><td>body cell padding</td><td><code>--marks-spacing-8</code> / <code>--marks-spacing-24</code></td><td>8px 24px</td></tr>
              <tr><td>body cell min-height</td><td><code>—</code></td><td>44px</td></tr>
              <tr><td>body cell typography</td><td><code>marks-typography-paragraph-sm-multiline</code></td><td>—</td></tr>
              <tr><td>body cell color</td><td><code>--marks-color-gray-300</code></td><td>—</td></tr>
              <tr><td>bold cell typography</td><td><code>marks-typography-paragraph-md-bold</code></td><td>—</td></tr>
              <tr><td>bold cell color</td><td><code>--marks-color-black</code></td><td>—</td></tr>
              <tr><td>row divider</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Actions &amp; checkbox columns</h3>
        <div class="anatomy-block">
          <span class="anatomy-block__label">Special columns</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>checkbox column width</td><td><code>—</code></td><td>66px</td></tr>
              <tr><td>checkbox padding</td><td><code>--marks-spacing-12</code> / <code>--marks-spacing-16</code></td><td>12px 16px</td></tr>
              <tr><td>actions column width</td><td><code>—</code></td><td>72px</td></tr>
              <tr><td>actions padding</td><td><code>--marks-spacing-8</code></td><td>8px</td></tr>
              <tr><td>actions button</td><td><code>ButtonSecondary</code> small icon-only</td><td>PhDotsThreeVertical</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Card wrapper</h3>
        <div class="anatomy-block" style="border-bottom:none;margin-bottom:24px;padding-bottom:0;">
          <span class="anatomy-block__label">Container</span>
          <table class="anatomy-table">
            <thead><tr><th>Property</th><th>Token</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>border-radius</td><td><code>--marks-radius-8</code></td><td>8px</td></tr>
              <tr><td>border</td><td><code>--marks-color-gray-200</code></td><td>1px solid</td></tr>
              <tr><td>background</td><td><code>--marks-color-white</code></td><td>—</td></tr>
              <tr><td>table-layout</td><td><code>—</code></td><td>fixed</td></tr>
            </tbody>
          </table>
        </div>

        <!-- ─── 3. Variants ─── -->
        <h2 id="variants" class="comp-section-h2">Variants &amp; all states</h2>
        <p class="comp-section-desc">Five main configurations — from a minimal data grid to a fully-featured selectable table with header and status cells.</p>

        <div class="variant-section">
          <p class="variant-section__label">Basic table</p>
          <p class="comp-section-desc">Columns and rows only — no header, no selection.</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <Table :columns="basicCols" :rows="basicRows" />
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">With header</p>
          <p class="comp-section-desc">Title and supporting text provide context above the data.</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <Table
                header-title="Team members"
                header-supporting-text="Manage your team and their account permissions."
                :columns="basicCols"
                :rows="basicRows"
              />
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">Selectable rows</p>
          <p class="comp-section-desc">A checkbox column is prepended automatically when <code>:selectable="true"</code>.</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <Table
                header-title="Projects"
                :columns="selectCols"
                :rows="selectRows"
                :selectable="true"
                :model-value="[0, 2]"
              />
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">With actions column</p>
          <p class="comp-section-desc">An actions column with a three-dot button is appended automatically. Emits <code>row-action</code> on click.</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <Table
                header-title="Orders"
                :columns="actionCols"
                :rows="actionRows"
              />
            </div>
          </div>
        </div>

        <div class="variant-section">
          <p class="variant-section__label">With status cells</p>
          <p class="comp-section-desc">Columns with <code>type: 'status'</code> render an inline <code>Status</code> badge. Row values can be a string or an object with <code>type</code> and <code>label</code>.</p>
          <div class="comp-demo">
            <div class="comp-demo__group" style="width:100%;">
              <Table
                header-title="Deployments"
                :columns="statusCols"
                :rows="statusRows"
              />
            </div>
          </div>
        </div>

        <!-- ─── 4. Behavior rules ─── -->
        <h2 id="behavior" class="comp-section-h2">Behavior rules</h2>

        <h3>Row selection (v-model)</h3>
        <ul>
          <li>Bind an array of selected row indices with <code>v-model</code>. The array is always sorted ascending.</li>
          <li>Individual row checkboxes toggle their index in the array.</li>
          <li>The header checkbox has three states: unchecked (none selected), indeterminate (some selected), and checked (all selected).</li>
          <li>Clicking the header checkbox when indeterminate or checked clears all; when unchecked it selects all rows.</li>
        </ul>

        <h3>Select-all logic</h3>
        <ul>
          <li><code>isAllSelected</code> — true when <code>modelValue.length === rows.length</code>.</li>
          <li><code>isIndeterminate</code> — true when <code>modelValue.length &gt; 0</code> and fewer than all rows are selected.</li>
          <li>Toggling select-all emits either an empty array or all indices.</li>
        </ul>

        <h3>Row action emit</h3>
        <ul>
          <li>Clicking the actions button emits <code>row-action</code> with a payload of <code>{ row, rowIndex }</code>.</li>
          <li>Use the <code>cell-actions</code> slot to replace the default three-dot button with custom action UI.</li>
        </ul>

        <h3>Live demo</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Toggle rows to see v-model update</span>
            <Table
              header-title="Interactive demo"
              header-supporting-text="Select rows and watch the bound value change."
              :columns="liveCols"
              :rows="liveRows"
              :selectable="true"
              v-model="liveSelected"
              @row-action="onRowAction"
            />
            <div style="margin-top:12px;font-size:0.8rem;color:#6F6F6F;display:flex;gap:24px;flex-wrap:wrap;">
              <span>v-model: <code>{{ liveSelectedDisplay }}</code></span>
              <span>Last action: <code>{{ lastActionDisplay }}</code></span>
            </div>
          </div>
        </div>

        <!-- ─── 5. Content rules ─── -->
        <h2 id="content" class="comp-section-h2">Content rules</h2>

        <h3>Header title</h3>
        <ul>
          <li>Use a noun or noun phrase: "Team members", "Recent orders", "Deployments".</li>
          <li>Sentence case. Keep to 1–3 words.</li>
        </ul>

        <h3>Supporting text</h3>
        <ul>
          <li>One sentence that describes what the user can do here.</li>
          <li>Example: "Manage your team and their account permissions."</li>
        </ul>

        <h3>Column labels</h3>
        <ul>
          <li>Short, scannable nouns: "Name", "Email", "Role", "Status".</li>
          <li>Sentence case. Avoid verbs or long descriptions.</li>
          <li>Omit units if obvious; include them for ambiguous values ("Size (MB)").</li>
        </ul>

        <h3>Cell content</h3>
        <ul>
          <li>Keep cells concise. Use the <code>truncate</code> column option for potentially long text.</li>
          <li>Use <code>type: 'bold'</code> for the primary identifier column (usually the first data column).</li>
          <li>Status values should use <code>type: 'status'</code> with an object like <code>{ type: 'success', label: 'Active' }</code>.</li>
        </ul>

        <!-- ─── 6. Accessibility ─── -->
        <h2 id="accessibility" class="comp-section-h2">Accessibility</h2>

        <h3>Semantics</h3>
        <ul>
          <li>Renders a native <code>&lt;table&gt;</code> with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code>.</li>
          <li>Column headers use <code>&lt;th scope="col"&gt;</code> for proper association.</li>
          <li>The checkbox in the header row controls bulk selection — its indeterminate state is communicated via the <code>:indeterminate</code> prop on <code>Checkbox</code>.</li>
        </ul>

        <h3>Keyboard</h3>
        <ul>
          <li><kbd>Tab</kbd> — moves focus through interactive elements (checkboxes, action buttons) in reading order.</li>
          <li><kbd>Space</kbd> — toggles checkboxes and activates action buttons.</li>
          <li>No custom key traps — standard table navigation applies.</li>
        </ul>

        <h3>Screen readers</h3>
        <ul>
          <li>Table header text is rendered as an <code>&lt;h2&gt;</code> inside a <code>&lt;header&gt;</code>, giving context before the data region.</li>
          <li>Status cells render the <code>Status</code> component which includes visible text labels — never color-only indicators.</li>
          <li>Action buttons should include an <code>aria-label</code> describing the action when using the default icon-only button.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>Always provide meaningful column labels. Empty header cells (other than checkbox/actions) make the table impossible to navigate with assistive technology.</span>
        </div>

        <!-- ─── 7. Examples & anti-patterns ─── -->
        <h2 id="examples" class="comp-section-h2">Examples &amp; anti-patterns</h2>

        <h3>Full-featured table</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Header + selectable + status + actions</span>
            <Table
              header-title="Team members"
              header-supporting-text="Manage your team and their roles."
              :columns="fullCols"
              :rows="fullRows"
              :selectable="true"
              v-model="fullSelected"
            />
          </div>
        </div>

        <h3>Minimal data list</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">No header, no selection — just data</span>
            <Table :columns="minimalCols" :rows="minimalRows" />
          </div>
        </div>

        <h3>Anti-patterns</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — empty column labels</span>
            <Table :columns="antiEmptyCols" :rows="antiEmptyRows" />
            <span style="font-size:0.75rem;color:#FD3860;">Column headers must be descriptive. Blank labels make the table unusable for screen readers.</span>
          </div>
        </div>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:#FD3860;">Don't — too many columns</span>
            <span style="font-size:0.75rem;color:#FD3860;">Avoid cramming more than 6–7 columns into a single table. Split into multiple views or use a detail panel instead.</span>
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
              <td><code class="prop-name">headerTitle</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Title text rendered in the table header area.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">headerSupportingText</code></td>
              <td><code class="prop-type">String</code></td>
              <td><code class="prop-default">''</code></td>
              <td>Supporting description below the title.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">columns</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code></td>
              <td>Column definitions. Each object: <code>{ id, label, type?, width?, truncate? }</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">rows</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code></td>
              <td>Row data. Each object is keyed by column <code>id</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">selectable</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td><code class="prop-default">false</code></td>
              <td>Prepends a checkbox column for row selection.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">modelValue</code></td>
              <td><code class="prop-type">Array</code></td>
              <td><code class="prop-default">[]</code></td>
              <td>Selected row indices. Use with <code>v-model</code>.</td>
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
              <td><code class="prop-type">Array&lt;Number&gt;</code></td>
              <td>Emitted when selection changes. Enables <code>v-model</code> binding.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">row-action</code></td>
              <td><code class="prop-type">{ row, rowIndex }</code></td>
              <td>Emitted when the default actions button is clicked.</td>
            </tr>
          </tbody>
        </table>

        <h3>Column object shape</h3>
        <table class="props-table">
          <thead>
            <tr><th>Key</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">id</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Unique key matching the row data property.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">label</code></td>
              <td><code class="prop-type">String</code></td>
              <td>Display text in the column header.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">type</code></td>
              <td><code class="prop-type">String</code></td>
              <td>One of <code>'text'</code>, <code>'bold'</code>, <code>'status'</code>, <code>'checkbox'</code>, <code>'actions'</code>.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">width</code></td>
              <td><code class="prop-type">String</code></td>
              <td>CSS width for the column (e.g. <code>'200px'</code>, <code>'30%'</code>).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">truncate</code></td>
              <td><code class="prop-type">Boolean</code></td>
              <td>Truncate cell text with ellipsis on overflow.</td>
            </tr>
          </tbody>
        </table>

        <h3>Slots</h3>
        <table class="props-table">
          <thead>
            <tr><th>Slot</th><th>Scope</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr class="props-row__meta">
              <td><code class="prop-name">header-actions</code></td>
              <td><code class="prop-type">—</code></td>
              <td>Content rendered in the header's action area (right side).</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">cell-[columnId]</code></td>
              <td><code class="prop-type">{ row, rowIndex, column }</code></td>
              <td>Custom cell renderer for a specific column.</td>
            </tr>
            <tr class="props-row__meta">
              <td><code class="prop-name">cell-actions</code></td>
              <td><code class="prop-type">{ row, rowIndex, column }</code></td>
              <td>Custom renderer for the actions column (replaces default button).</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 9. Theming / dark mode ─── -->
        <h2 id="theming" class="comp-section-h2">Theming &amp; dark mode</h2>
        <p class="comp-section-desc">Table colors adapt automatically when <code>--marks-color-*</code> tokens are overridden on a parent container.</p>

        <h3>Light mode</h3>
        <div class="comp-demo">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label">Default appearance</span>
            <Table
              header-title="Light mode"
              :columns="themeCols"
              :rows="themeRows"
              :selectable="true"
              :model-value="[0]"
            />
          </div>
        </div>

        <h3>Dark mode</h3>
        <div class="comp-demo dark-preview">
          <div class="comp-demo__group" style="width:100%;">
            <span class="comp-demo__group-label" style="color:var(--marks-color-gray-300);">Token-overridden container</span>
            <Table
              header-title="Dark mode"
              :columns="themeCols"
              :rows="themeRows"
              :selectable="true"
              :model-value="[1]"
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
<pre><span class="token-comment">// Basic table</span>
<span class="token-tag">&lt;Table</span>
  <span class="token-attr">:columns</span>=<span class="token-string">"columns"</span>
  <span class="token-attr">:rows</span>=<span class="token-string">"rows"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// With header title + supporting text</span>
<span class="token-tag">&lt;Table</span>
  <span class="token-attr">header-title</span>=<span class="token-string">"Team members"</span>
  <span class="token-attr">header-supporting-text</span>=<span class="token-string">"Manage
    your team and their roles."</span>
  <span class="token-attr">:columns</span>=<span class="token-string">"columns"</span>
  <span class="token-attr">:rows</span>=<span class="token-string">"rows"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Selectable with v-model</span>
<span class="token-tag">&lt;Table</span>
  <span class="token-attr">:columns</span>=<span class="token-string">"columns"</span>
  <span class="token-attr">:rows</span>=<span class="token-string">"rows"</span>
  <span class="token-attr">:selectable</span>=<span class="token-string">"true"</span>
  <span class="token-attr">v-model</span>=<span class="token-string">"selectedRows"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Listen to row actions</span>
<span class="token-tag">&lt;Table</span>
  <span class="token-attr">:columns</span>=<span class="token-string">"columns"</span>
  <span class="token-attr">:rows</span>=<span class="token-string">"rows"</span>
  <span class="token-attr">@row-action</span>=<span class="token-string">"handleAction"</span>
<span class="token-tag">/&gt;</span>


<span class="token-comment">// Column definitions</span>
<span class="token-keyword">const</span> columns = [
  { id: <span class="token-string">'name'</span>, label: <span class="token-string">'Name'</span>, type: <span class="token-string">'bold'</span> },
  { id: <span class="token-string">'email'</span>, label: <span class="token-string">'Email'</span> },
  { id: <span class="token-string">'role'</span>, label: <span class="token-string">'Role'</span> },
  { id: <span class="token-string">'status'</span>, label: <span class="token-string">'Status'</span>,
    type: <span class="token-string">'status'</span> }
]

<span class="token-comment">// Row data</span>
<span class="token-keyword">const</span> rows = [
  {
    name: <span class="token-string">'Jane Cooper'</span>,
    email: <span class="token-string">'jane@example.com'</span>,
    role: <span class="token-string">'Admin'</span>,
    status: { type: <span class="token-string">'success'</span>,
              label: <span class="token-string">'Active'</span> }
  }
]</pre>
          </div>

          <!-- ── HTML tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'html' }">
<pre><span class="token-comment">&lt;!-- Rendered output --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;header</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header-inner"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header-text"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;h2</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__title"</span><span class="token-tag">&gt;</span>Title<span class="token-tag">&lt;/h2&gt;</span>
        <span class="token-tag">&lt;p</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__supporting"</span><span class="token-tag">&gt;</span>
          Supporting text
        <span class="token-tag">&lt;/p&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__actions"</span><span class="token-tag">&gt;</span>
        …
      <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/div&gt;</span>
  <span class="token-tag">&lt;/header&gt;</span>

  <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__body"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;table</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__table"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;thead&gt;</span>
        <span class="token-tag">&lt;tr</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__row
             marks-table__row--header"</span><span class="token-tag">&gt;</span>
          <span class="token-tag">&lt;th</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header-cell
               marks-table__header-cell--checkbox"</span>
            <span class="token-attr">scope</span>=<span class="token-string">"col"</span><span class="token-tag">&gt;</span>
            … checkbox …
          <span class="token-tag">&lt;/th&gt;</span>
          <span class="token-tag">&lt;th</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header-cell"</span>
            <span class="token-attr">scope</span>=<span class="token-string">"col"</span><span class="token-tag">&gt;</span>
            <span class="token-tag">&lt;span</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__header-label"</span><span class="token-tag">&gt;</span>
              Name
            <span class="token-tag">&lt;/span&gt;</span>
          <span class="token-tag">&lt;/th&gt;</span>
        <span class="token-tag">&lt;/tr&gt;</span>
      <span class="token-tag">&lt;/thead&gt;</span>
      <span class="token-tag">&lt;tbody&gt;</span>
        <span class="token-tag">&lt;tr</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__row"</span><span class="token-tag">&gt;</span>
          <span class="token-tag">&lt;td</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__cell
               marks-table__cell--checkbox"</span><span class="token-tag">&gt;</span>
            <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__cell-inner"</span><span class="token-tag">&gt;</span>
              … checkbox …
            <span class="token-tag">&lt;/div&gt;</span>
          <span class="token-tag">&lt;/td&gt;</span>
          <span class="token-tag">&lt;td</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__cell
               marks-table__cell--bold"</span><span class="token-tag">&gt;</span>
            <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"marks-table__cell-inner"</span><span class="token-tag">&gt;</span>
              Jane Cooper
            <span class="token-tag">&lt;/div&gt;</span>
          <span class="token-tag">&lt;/td&gt;</span>
        <span class="token-tag">&lt;/tr&gt;</span>
      <span class="token-tag">&lt;/tbody&gt;</span>
    <span class="token-tag">&lt;/table&gt;</span>
  <span class="token-tag">&lt;/div&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>


<span class="token-comment">&lt;!-- BEM class reference --&gt;</span>
<span class="token-comment">&lt;!--
  .marks-table
  .marks-table__header
  .marks-table__header-inner
  .marks-table__header-text
  .marks-table__title
  .marks-table__supporting
  .marks-table__actions
  .marks-table__body
  .marks-table__table
  .marks-table__row
  .marks-table__row--header
  .marks-table__header-cell
  .marks-table__header-cell--checkbox
  .marks-table__header-cell--actions
  .marks-table__header-label
  .marks-table__cell
  .marks-table__cell-inner
  .marks-table__cell--checkbox
  .marks-table__cell--actions
  .marks-table__cell--bold
  .marks-table__cell--truncate
--&gt;</span></pre>
          </div>

          <!-- ── SCSS tab ── -->
          <div class="code-pane" :class="{ 'is-active': activeTab === 'scss' }">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;


<span class="token-comment">// ─── Card wrapper ───</span>

<span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-8</span>);
<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
<span class="token-attr">border</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Header ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-20</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">gap</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
<span class="token-attr">border-bottom</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);

<span class="token-comment">// Title</span>
<span class="token-keyword">@include</span> marks-typography-h4-bold;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Supporting</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-350</span>);


<span class="token-comment">// ─── Header cells ───</span>

<span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-100</span>);
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">min-height</span>: <span class="token-number">44px</span>;
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-one-line;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-350</span>);


<span class="token-comment">// ─── Body cells ───</span>

<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-24</span>);
<span class="token-attr">min-height</span>: <span class="token-number">44px</span>;
<span class="token-keyword">@include</span> marks-typography-paragraph-sm-multiline;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-300</span>);

<span class="token-comment">// Bold variant</span>
<span class="token-keyword">@include</span> marks-typography-paragraph-md-bold;
<span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-black</span>);

<span class="token-comment">// Row divider</span>
<span class="token-attr">border-bottom</span>: <span class="token-number">1px</span> solid
  <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);


<span class="token-comment">// ─── Special columns ───</span>

<span class="token-comment">// Checkbox: 66px, centered</span>
<span class="token-attr">width</span>: <span class="token-number">66px</span>;
<span class="token-attr">text-align</span>: center;
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-12</span>)
  <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);

<span class="token-comment">// Actions: 72px, centered</span>
<span class="token-attr">width</span>: <span class="token-number">72px</span>;
<span class="token-attr">text-align</span>: center;
<span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-8</span>);


<span class="token-comment">// ─── Truncation ───</span>

<span class="token-attr">overflow</span>: hidden;
<span class="token-attr">text-overflow</span>: ellipsis;
<span class="token-attr">white-space</span>: nowrap;</pre>
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
  name: 'TableDocPage',
  components: { DocHeader, DocNav },
  data() {
    return {
      activeTab: 'vue',
      copyLabel: 'Copy',
      codeTabs: [
        { id: 'vue', label: 'Vue' },
        { id: 'html', label: 'HTML' },
        { id: 'scss', label: 'SCSS' }
      ],

      // --- Live demo state ---
      liveSelected: [],
      lastAction: null,
      fullSelected: [0],

      // --- Anatomy demo ---
      anatomyCols: [
        { id: 'name', label: 'Name', type: 'bold' },
        { id: 'email', label: 'Email' },
        { id: 'role', label: 'Role' }
      ],
      anatomyRows: [
        { name: 'Jane Cooper', email: 'jane@example.com', role: 'Admin' },
        { name: 'Alex Rivera', email: 'alex@example.com', role: 'Editor' }
      ],

      // --- Basic variant ---
      basicCols: [
        { id: 'name', label: 'Name', type: 'bold' },
        { id: 'email', label: 'Email' },
        { id: 'role', label: 'Role' }
      ],
      basicRows: [
        { name: 'Jane Cooper', email: 'jane@example.com', role: 'Admin' },
        { name: 'Alex Rivera', email: 'alex@example.com', role: 'Editor' },
        { name: 'Sam Chen', email: 'sam@example.com', role: 'Viewer' }
      ],

      // --- Selectable variant ---
      selectCols: [
        { id: 'project', label: 'Project', type: 'bold' },
        { id: 'owner', label: 'Owner' },
        { id: 'updated', label: 'Last updated' }
      ],
      selectRows: [
        { project: 'Design system', owner: 'Jane Cooper', updated: 'Apr 10, 2026' },
        { project: 'Marketing site', owner: 'Alex Rivera', updated: 'Apr 8, 2026' },
        { project: 'Mobile app', owner: 'Sam Chen', updated: 'Apr 5, 2026' }
      ],

      // --- Actions variant ---
      actionCols: [
        { id: 'order', label: 'Order', type: 'bold' },
        { id: 'customer', label: 'Customer' },
        { id: 'total', label: 'Total' }
      ],
      actionRows: [
        { order: '#1042', customer: 'Jane Cooper', total: '$240.00' },
        { order: '#1041', customer: 'Alex Rivera', total: '$125.50' },
        { order: '#1040', customer: 'Sam Chen', total: '$89.00' }
      ],

      // --- Status variant ---
      statusCols: [
        { id: 'env', label: 'Environment', type: 'bold' },
        { id: 'branch', label: 'Branch' },
        { id: 'status', label: 'Status', type: 'status' }
      ],
      statusRows: [
        { env: 'Production', branch: 'main', status: { type: 'success', label: 'Deployed' } },
        { env: 'Staging', branch: 'develop', status: { type: 'warning', label: 'Building' } },
        { env: 'Preview', branch: 'feat/table', status: { type: 'error', label: 'Failed' } }
      ],

      // --- Live demo ---
      liveCols: [
        { id: 'name', label: 'Name', type: 'bold' },
        { id: 'email', label: 'Email' },
        { id: 'role', label: 'Role' }
      ],
      liveRows: [
        { name: 'Jane Cooper', email: 'jane@example.com', role: 'Admin' },
        { name: 'Alex Rivera', email: 'alex@example.com', role: 'Editor' },
        { name: 'Sam Chen', email: 'sam@example.com', role: 'Viewer' },
        { name: 'Taylor Kim', email: 'taylor@example.com', role: 'Viewer' }
      ],

      // --- Full-featured example ---
      fullCols: [
        { id: 'name', label: 'Name', type: 'bold' },
        { id: 'email', label: 'Email' },
        { id: 'role', label: 'Role' },
        { id: 'status', label: 'Status', type: 'status' }
      ],
      fullRows: [
        { name: 'Jane Cooper', email: 'jane@example.com', role: 'Admin', status: { type: 'success', label: 'Active' } },
        { name: 'Alex Rivera', email: 'alex@example.com', role: 'Editor', status: { type: 'success', label: 'Active' } },
        { name: 'Sam Chen', email: 'sam@example.com', role: 'Viewer', status: { type: 'warning', label: 'Pending' } },
        { name: 'Taylor Kim', email: 'taylor@example.com', role: 'Viewer', status: { type: 'error', label: 'Inactive' } }
      ],

      // --- Minimal example ---
      minimalCols: [
        { id: 'key', label: 'Setting', type: 'bold' },
        { id: 'value', label: 'Value' }
      ],
      minimalRows: [
        { key: 'Language', value: 'English (US)' },
        { key: 'Timezone', value: 'UTC-5 Eastern' },
        { key: 'Currency', value: 'USD ($)' }
      ],

      // --- Anti-pattern: empty labels ---
      antiEmptyCols: [
        { id: 'a', label: '' },
        { id: 'b', label: '' },
        { id: 'c', label: '' }
      ],
      antiEmptyRows: [
        { a: 'Jane', b: 'jane@example.com', c: 'Admin' }
      ],

      // --- Theming ---
      themeCols: [
        { id: 'name', label: 'Name', type: 'bold' },
        { id: 'role', label: 'Role' },
        { id: 'status', label: 'Status', type: 'status' }
      ],
      themeRows: [
        { name: 'Jane Cooper', role: 'Admin', status: { type: 'success', label: 'Active' } },
        { name: 'Alex Rivera', role: 'Editor', status: { type: 'warning', label: 'Pending' } }
      ]
    }
  },
  computed: {
    liveSelectedDisplay() {
      return JSON.stringify(this.liveSelected)
    },
    lastActionDisplay() {
      if (!this.lastAction) return 'none'
      return 'row ' + this.lastAction.rowIndex
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
    },
    onRowAction(payload) {
      this.lastAction = payload
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
