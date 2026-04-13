<template>
  <DocHeader active-page="theming" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="theming" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Foundations</span>
        <h1>Theming</h1>
        <p class="content__lead">
          The Ventrata Design System ships two themes &mdash; <strong>light</strong> (default)
          and <strong>dark</strong> &mdash; implemented entirely through CSS custom properties.
          Components reference token names, never raw hex values, so switching themes
          requires zero component-level changes.
        </p>

        <!-- ─── 1. Overview ─── -->
        <h2 id="overview" class="comp-section-h2">Overview</h2>
        <p class="comp-section-desc">
          Two themes are available: <strong>light</strong> (the default, applied at <code>:root</code>)
          and <strong>dark</strong>. Both themes define the same set of CSS custom properties
          with different values. Components bind to these tokens, so they adapt
          automatically when the active theme changes.
        </p>
        <ul>
          <li><strong>Light mode</strong> &mdash; default. Active on <code>:root</code> and when <code>data-theme="light"</code> is set.</li>
          <li><strong>Dark mode</strong> &mdash; activated by setting <code>data-theme="dark"</code> on <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>.</li>
          <li><strong>Same token names</strong> &mdash; only the resolved values change between themes.</li>
        </ul>

        <!-- ─── 2. How It Works ─── -->
        <h2 id="how-it-works" class="comp-section-h2">How it works</h2>
        <p class="comp-section-desc">
          Theme values are defined behind two CSS selectors. The light palette lives
          on <code>:root</code> (and optionally <code>[data-theme="light"]</code>),
          while dark overrides are scoped to <code>[data-theme="dark"]</code>.
        </p>

        <h3>Gray scale inversion</h3>
        <p>The core mechanism is a symmetric inversion of the gray scale:</p>
        <ul>
          <li><code>gray-100</code> &#8596; <code>gray-500</code> swap values</li>
          <li><code>gray-150</code> &#8596; <code>gray-400</code> swap values</li>
          <li><code>gray-200</code> &#8596; <code>gray-350</code> swap values</li>
          <li><code>gray-300</code> stays the same &mdash; it is the midpoint</li>
          <li><code>white</code> &#8596; <code>black</code> swap values</li>
        </ul>

        <h3>CSS structure</h3>
        <div class="code-block">
<pre><span class="token-comment">/* Light — default (:root) */</span>
<span class="token-keyword">:root</span>,
<span class="token-keyword">[data-theme="light"]</span> {
  <span class="token-attr">--marks-color-gray-100</span>: <span class="token-string">#FAFAFA</span>;
  <span class="token-attr">--marks-color-gray-500</span>: <span class="token-string">#2A2A2A</span>;
  <span class="token-attr">--marks-color-white</span>:    <span class="token-string">#FFFFFF</span>;
  <span class="token-attr">--marks-color-black</span>:    <span class="token-string">#000000</span>;
  <span class="token-comment">/* …all other tokens… */</span>
}

<span class="token-comment">/* Dark — override */</span>
<span class="token-keyword">[data-theme="dark"]</span> {
  <span class="token-attr">--marks-color-gray-100</span>: <span class="token-string">#2A2A2A</span>;
  <span class="token-attr">--marks-color-gray-500</span>: <span class="token-string">#FAFAFA</span>;
  <span class="token-attr">--marks-color-white</span>:    <span class="token-string">#000000</span>;
  <span class="token-attr">--marks-color-black</span>:    <span class="token-string">#FFFFFF</span>;
  <span class="token-comment">/* …all other tokens… */</span>
}</pre>
        </div>

        <!-- ─── 3. Token Mapping Table ─── -->
        <h2 id="token-mapping" class="comp-section-h2">Token mapping</h2>
        <p class="comp-section-desc">
          Side-by-side comparison of every color token in light vs dark mode.
          The gray scale inverts symmetrically; <code>gray-300</code> is the unchanged midpoint.
        </p>

        <table class="token-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Light value</th>
              <th></th>
              <th>Dark value</th>
              <th></th>
              <th>Relationship</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--marks-color-gray-100</code></td>
              <td class="token-table__hex">#FAFAFA</td>
              <td><span class="swatch" style="background:#FAFAFA;"></span></td>
              <td class="token-table__hex">#2A2A2A</td>
              <td><span class="swatch" style="background:#2A2A2A;"></span></td>
              <td class="token-table__note">Swaps with gray-500</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-150</code></td>
              <td class="token-table__hex">#ECECEC</td>
              <td><span class="swatch" style="background:#ECECEC;"></span></td>
              <td class="token-table__hex">#505050</td>
              <td><span class="swatch" style="background:#505050;"></span></td>
              <td class="token-table__note">Swaps with gray-400</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-200</code></td>
              <td class="token-table__hex">#D1D1D1</td>
              <td><span class="swatch" style="background:#D1D1D1;"></span></td>
              <td class="token-table__hex">#6F6F6F</td>
              <td><span class="swatch" style="background:#6F6F6F;"></span></td>
              <td class="token-table__note">Swaps with gray-350</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-300</code></td>
              <td class="token-table__hex">#8D8D8D</td>
              <td><span class="swatch" style="background:#8D8D8D;"></span></td>
              <td class="token-table__hex">#8D8D8D</td>
              <td><span class="swatch" style="background:#8D8D8D;"></span></td>
              <td class="token-table__note">Midpoint &mdash; unchanged</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-350</code></td>
              <td class="token-table__hex">#6F6F6F</td>
              <td><span class="swatch" style="background:#6F6F6F;"></span></td>
              <td class="token-table__hex">#D1D1D1</td>
              <td><span class="swatch" style="background:#D1D1D1;"></span></td>
              <td class="token-table__note">Swaps with gray-200</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-400</code></td>
              <td class="token-table__hex">#505050</td>
              <td><span class="swatch" style="background:#505050;"></span></td>
              <td class="token-table__hex">#ECECEC</td>
              <td><span class="swatch" style="background:#ECECEC;"></span></td>
              <td class="token-table__note">Swaps with gray-150</td>
            </tr>
            <tr>
              <td><code>--marks-color-gray-500</code></td>
              <td class="token-table__hex">#2A2A2A</td>
              <td><span class="swatch" style="background:#2A2A2A;"></span></td>
              <td class="token-table__hex">#FAFAFA</td>
              <td><span class="swatch" style="background:#FAFAFA;"></span></td>
              <td class="token-table__note">Swaps with gray-100</td>
            </tr>
            <tr class="token-table__divider">
              <td><code>--marks-color-white</code></td>
              <td class="token-table__hex">#FFFFFF</td>
              <td><span class="swatch" style="background:#FFFFFF;"></span></td>
              <td class="token-table__hex">#000000</td>
              <td><span class="swatch swatch--bordered" style="background:#000000;"></span></td>
              <td class="token-table__note">Swaps with black</td>
            </tr>
            <tr>
              <td><code>--marks-color-black</code></td>
              <td class="token-table__hex">#000000</td>
              <td><span class="swatch swatch--bordered" style="background:#000000;"></span></td>
              <td class="token-table__hex">#FFFFFF</td>
              <td><span class="swatch" style="background:#FFFFFF;"></span></td>
              <td class="token-table__note">Swaps with white</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 4. Switching Themes ─── -->
        <h2 id="switching" class="comp-section-h2">Switching themes</h2>
        <p class="comp-section-desc">
          Set the <code>data-theme</code> attribute on <code>&lt;html&gt;</code> or
          <code>&lt;body&gt;</code> to switch between light and dark mode at runtime.
        </p>

        <h3>JavaScript example</h3>
        <div class="code-block">
<pre><span class="token-comment">// Toggle between light and dark</span>
<span class="token-keyword">function</span> <span class="token-attr">toggleTheme</span>() {
  <span class="token-keyword">const</span> html = document.documentElement;
  <span class="token-keyword">const</span> current = html.getAttribute(<span class="token-string">'data-theme'</span>) || <span class="token-string">'light'</span>;
  html.setAttribute(
    <span class="token-string">'data-theme'</span>,
    current === <span class="token-string">'light'</span> ? <span class="token-string">'dark'</span> : <span class="token-string">'light'</span>
  );
}

<span class="token-comment">// Set a specific theme</span>
document.documentElement.setAttribute(<span class="token-string">'data-theme'</span>, <span class="token-string">'dark'</span>);

<span class="token-comment">// Read the current theme</span>
<span class="token-keyword">const</span> theme = document.documentElement.getAttribute(<span class="token-string">'data-theme'</span>);</pre>
        </div>

        <h3>Persist preference</h3>
        <div class="code-block">
<pre><span class="token-comment">// Save to localStorage</span>
localStorage.setItem(<span class="token-string">'theme'</span>, <span class="token-string">'dark'</span>);

<span class="token-comment">// Restore on page load</span>
<span class="token-keyword">const</span> saved = localStorage.getItem(<span class="token-string">'theme'</span>) || <span class="token-string">'light'</span>;
document.documentElement.setAttribute(<span class="token-string">'data-theme'</span>, saved);</pre>
        </div>

        <!-- ─── 5. Component Behavior ─── -->
        <h2 id="component-behavior" class="comp-section-h2">Component behavior</h2>
        <p class="comp-section-desc">
          Every component in the design system references <code>--marks-color-*</code>
          tokens for its colors. When the theme changes, token values update via CSS
          cascade and components re-render with the new palette automatically.
        </p>
        <ul>
          <li><strong>Zero changes needed</strong> &mdash; no props, no classes, no JavaScript at the component level.</li>
          <li><strong>Backgrounds</strong> use <code>--marks-color-white</code> (surfaces) and <code>--marks-color-gray-100</code> (subtle backgrounds).</li>
          <li><strong>Text</strong> uses <code>--marks-color-gray-500</code> (primary) and <code>--marks-color-gray-300</code> (secondary).</li>
          <li><strong>Borders</strong> use <code>--marks-color-gray-200</code> and <code>--marks-color-gray-150</code>.</li>
        </ul>

        <h3>Side-by-side preview</h3>
        <p class="comp-section-desc">The same UI card rendered in light and dark mode.</p>

        <div class="theme-comparison">
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Light mode</span>
            <div class="preview-card preview-card--light">
              <div class="preview-card__header">
                <span class="preview-card__dot preview-card__dot--green"></span>
                <span class="preview-card__title">Booking confirmed</span>
              </div>
              <p class="preview-card__body">Your reservation for <strong>2 adults</strong> on June 15 has been confirmed. A confirmation email is on its way.</p>
              <div class="preview-card__footer">
                <span class="preview-card__meta">Order #4821</span>
                <span class="preview-card__action">View details</span>
              </div>
            </div>
          </div>
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Dark mode</span>
            <div class="preview-card preview-card--dark">
              <div class="preview-card__header">
                <span class="preview-card__dot preview-card__dot--green"></span>
                <span class="preview-card__title">Booking confirmed</span>
              </div>
              <p class="preview-card__body">Your reservation for <strong>2 adults</strong> on June 15 has been confirmed. A confirmation email is on its way.</p>
              <div class="preview-card__footer">
                <span class="preview-card__meta">Order #4821</span>
                <span class="preview-card__action">View details</span>
              </div>
            </div>
          </div>
        </div>

        <h3>Token usage in components</h3>
        <div class="code-block">
<pre><span class="token-comment">/* Components never use raw hex — only tokens */</span>
<span class="token-keyword">.marks-button</span> {
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
  <span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);
  <span class="token-attr">border</span>: 1px solid <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-200</span>);
}

<span class="token-comment">/* In dark mode these resolve to inverted values
   automatically — no overrides needed */</span></pre>
        </div>

        <!-- ─── 6. Dark Mode in Documentation ─── -->
        <h2 id="doc-dark-mode" class="comp-section-h2">Dark mode in documentation</h2>
        <p class="comp-section-desc">
          The documentation pages use a <code>.dark-preview</code> class with manual
          token overrides on a container element. This technique avoids setting
          <code>data-theme</code> on the page root, keeping the doc itself in light mode
          while previewing dark variants inline.
        </p>

        <h3>How it works</h3>
        <ul>
          <li>Apply <code>.dark-preview</code> to any container (typically a <code>.comp-demo</code>).</li>
          <li>The scoped CSS block overrides all <code>--marks-color-*</code> tokens with dark values.</li>
          <li>Components inside that container render as if in dark mode.</li>
          <li>The surrounding page stays in light mode.</li>
        </ul>

        <h3>Full override block</h3>
        <div class="code-block">
<pre><span class="token-keyword">.dark-preview</span> {
  <span class="token-attr">background</span>: <span class="token-string">#000000</span>;
  <span class="token-attr">border-color</span>: <span class="token-string">#6F6F6F</span>;

  <span class="token-attr">--marks-color-primary-solid</span>: <span class="token-string">#0E5842</span>;
  <span class="token-attr">--marks-color-primary-light</span>: <span class="token-string">#032F22</span>;

  <span class="token-attr">--marks-color-red-100</span>: <span class="token-string">#FFE4E9</span>;
  <span class="token-attr">--marks-color-red-200</span>: <span class="token-string">#FD3860</span>;
  <span class="token-attr">--marks-color-red-300</span>: <span class="token-string">#97001E</span>;

  <span class="token-attr">--marks-color-blue-100</span>: <span class="token-string">#D7E7FF</span>;
  <span class="token-attr">--marks-color-blue-200</span>: <span class="token-string">#2576F7</span>;
  <span class="token-attr">--marks-color-blue-300</span>: <span class="token-string">#050D3A</span>;

  <span class="token-attr">--marks-color-green-100</span>: <span class="token-string">#C0F3E4</span>;
  <span class="token-attr">--marks-color-green-200</span>: <span class="token-string">#0FAF80</span>;
  <span class="token-attr">--marks-color-green-300</span>: <span class="token-string">#0E5842</span>;

  <span class="token-attr">--marks-color-orange-100</span>: <span class="token-string">#FFEBD2</span>;
  <span class="token-attr">--marks-color-orange-200</span>: <span class="token-string">#FF8C00</span>;
  <span class="token-attr">--marks-color-orange-300</span>: <span class="token-string">#854900</span>;

  <span class="token-attr">--marks-color-gray-100</span>: <span class="token-string">#2A2A2A</span>;
  <span class="token-attr">--marks-color-gray-150</span>: <span class="token-string">#505050</span>;
  <span class="token-attr">--marks-color-gray-200</span>: <span class="token-string">#6F6F6F</span>;
  <span class="token-attr">--marks-color-gray-300</span>: <span class="token-string">#8D8D8D</span>;
  <span class="token-attr">--marks-color-gray-350</span>: <span class="token-string">#D1D1D1</span>;
  <span class="token-attr">--marks-color-gray-400</span>: <span class="token-string">#ECECEC</span>;
  <span class="token-attr">--marks-color-gray-500</span>: <span class="token-string">#FAFAFA</span>;

  <span class="token-attr">--marks-color-white</span>: <span class="token-string">#000000</span>;
  <span class="token-attr">--marks-color-black</span>: <span class="token-string">#FFFFFF</span>;
}</pre>
        </div>

        <h3>Usage example</h3>
        <div class="code-block">
<pre><span class="token-comment">&lt;!-- In a doc page template --&gt;</span>
<span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"comp-demo dark-preview"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;Toggle</span> <span class="token-attr">:model-value</span>=<span class="token-string">"true"</span> <span class="token-tag">/&gt;</span>
<span class="token-tag">&lt;/div&gt;</span>

<span class="token-comment">&lt;!-- In scoped styles --&gt;</span>
<span class="token-tag">&lt;style scoped&gt;</span>
<span class="token-keyword">.dark-preview</span> {
  <span class="token-comment">/* full override block above */</span>
}
<span class="token-tag">&lt;/style&gt;</span></pre>
        </div>

        <!-- ─── 7. Best Practices ─── -->
        <h2 id="best-practices" class="comp-section-h2">Best practices</h2>

        <h3>Always use tokens</h3>
        <ul>
          <li>Never hard-code hex values in component styles. Use <code>var(--marks-color-*)</code> so themes work automatically.</li>
          <li>If you need a color not in the token set, add it as a new token &mdash; not as a raw value.</li>
        </ul>

        <h3>Test both themes</h3>
        <ul>
          <li>Preview every component in both light and dark mode during development.</li>
          <li>Pay attention to contrast ratios &mdash; especially for text on subtle backgrounds (<code>gray-300</code> on <code>gray-100</code>).</li>
          <li>Borders that are visible in light mode may disappear in dark mode if they use the wrong token.</li>
        </ul>

        <h3>Understand the gray scale logic</h3>
        <ul>
          <li>Tokens at the extremes (<code>100</code>/<code>500</code>) are for strong foreground/background contrast.</li>
          <li>Tokens near the middle (<code>200</code>/<code>300</code>/<code>350</code>) are for secondary text, borders, and dividers.</li>
          <li>The midpoint <code>gray-300</code> is the anchor &mdash; it reads as "muted" in both themes.</li>
        </ul>

        <h3>White and black semantics</h3>
        <ul>
          <li><code>--marks-color-white</code> means "primary surface" &mdash; it is white in light and black in dark.</li>
          <li><code>--marks-color-black</code> means "strongest foreground" &mdash; it is black in light and white in dark.</li>
          <li>These are semantic, not literal. Don't use them to force a visual white or black.</li>
        </ul>

        <div class="callout callout--warning">
          <span class="callout__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>
          </span>
          <span>
            Avoid using <code>--marks-color-white</code> when you literally need <code>#FFFFFF</code>
            (e.g. for SVG fills that must stay white). Use a raw value or a separate non-semantic token instead.
          </span>
        </div>

        <!-- ─── Visual comparison: gray scale ─── -->
        <h2 id="visual-scale" class="comp-section-h2">Visual gray scale comparison</h2>
        <p class="comp-section-desc">
          The full gray ramp rendered side-by-side for both themes.
        </p>

        <div class="theme-comparison">
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Light mode</span>
            <div class="scale-strip scale-strip--light">
              <div class="scale-strip__swatch" style="background:#FAFAFA;"><span>100</span></div>
              <div class="scale-strip__swatch" style="background:#ECECEC;"><span>150</span></div>
              <div class="scale-strip__swatch" style="background:#D1D1D1;"><span>200</span></div>
              <div class="scale-strip__swatch" style="background:#8D8D8D;color:#fff;"><span>300</span></div>
              <div class="scale-strip__swatch" style="background:#6F6F6F;color:#fff;"><span>350</span></div>
              <div class="scale-strip__swatch" style="background:#505050;color:#fff;"><span>400</span></div>
              <div class="scale-strip__swatch" style="background:#2A2A2A;color:#fff;"><span>500</span></div>
            </div>
          </div>
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Dark mode</span>
            <div class="scale-strip scale-strip--dark">
              <div class="scale-strip__swatch" style="background:#2A2A2A;color:#fff;"><span>100</span></div>
              <div class="scale-strip__swatch" style="background:#505050;color:#fff;"><span>150</span></div>
              <div class="scale-strip__swatch" style="background:#6F6F6F;color:#fff;"><span>200</span></div>
              <div class="scale-strip__swatch" style="background:#8D8D8D;color:#fff;"><span>300</span></div>
              <div class="scale-strip__swatch" style="background:#D1D1D1;"><span>350</span></div>
              <div class="scale-strip__swatch" style="background:#ECECEC;"><span>400</span></div>
              <div class="scale-strip__swatch" style="background:#FAFAFA;"><span>500</span></div>
            </div>
          </div>
        </div>

        <div class="theme-comparison" style="margin-top:24px;">
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Light: white / black</span>
            <div class="scale-strip scale-strip--light" style="grid-template-columns:1fr 1fr;">
              <div class="scale-strip__swatch" style="background:#FFFFFF;"><span>white</span></div>
              <div class="scale-strip__swatch" style="background:#000000;color:#fff;"><span>black</span></div>
            </div>
          </div>
          <div class="theme-comparison__panel">
            <span class="theme-comparison__label">Dark: white / black</span>
            <div class="scale-strip scale-strip--dark" style="grid-template-columns:1fr 1fr;">
              <div class="scale-strip__swatch" style="background:#000000;color:#fff;"><span>white</span></div>
              <div class="scale-strip__swatch" style="background:#FFFFFF;"><span>black</span></div>
            </div>
          </div>
        </div>

      </article>
    </main>

    <!-- ─── Right aside — token reference ─── -->
    <aside class="layout__aside">
      <div class="aside">
        <div class="aside__block">
          <h4 class="aside__heading">Token quick reference</h4>

          <p class="aside__sub">Gray scale (Light → Dark)</p>
          <ul class="aside-tokens">
            <li><span class="aside-swatch" style="background:#FAFAFA;"></span> <code>100</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#2A2A2A;"></span></li>
            <li><span class="aside-swatch" style="background:#ECECEC;"></span> <code>150</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#505050;"></span></li>
            <li><span class="aside-swatch" style="background:#D1D1D1;"></span> <code>200</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#6F6F6F;"></span></li>
            <li><span class="aside-swatch" style="background:#8D8D8D;"></span> <code>300</code> <span class="aside-arrow">=</span> <span class="aside-swatch" style="background:#8D8D8D;"></span></li>
            <li><span class="aside-swatch" style="background:#6F6F6F;"></span> <code>350</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#D1D1D1;"></span></li>
            <li><span class="aside-swatch" style="background:#505050;"></span> <code>400</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#ECECEC;"></span></li>
            <li><span class="aside-swatch" style="background:#2A2A2A;"></span> <code>500</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#FAFAFA;"></span></li>
          </ul>

          <p class="aside__sub" style="margin-top:16px;">White / Black</p>
          <ul class="aside-tokens">
            <li><span class="aside-swatch" style="background:#FFFFFF;"></span> <code>white</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#000000;"></span></li>
            <li><span class="aside-swatch" style="background:#000000;"></span> <code>black</code> <span class="aside-arrow">&#8594;</span> <span class="aside-swatch" style="background:#FFFFFF;"></span></li>
          </ul>

          <p class="aside__sub" style="margin-top:16px;">Inversion pattern</p>
          <div class="aside-pattern">
            <code>100 &#8596; 500</code><br>
            <code>150 &#8596; 400</code><br>
            <code>200 &#8596; 350</code><br>
            <code>300 = 300</code><br>
            <code>white &#8596; black</code>
          </div>

          <p class="aside__sub" style="margin-top:16px;">Switch theme</p>
          <div class="aside-pattern">
            <code>data-theme="dark"</code>
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
  name: 'ThemingDocPage',
  components: { DocHeader, DocNav }
}
</script>

<style>
@import '../../docs/reference-main.css';
</style>

<style scoped>
/* ─── Dark preview container (reusable doc pattern) ─── */
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

/* ─── Token mapping table ─── */
.token-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 32px;
  font-size: 13px;
}

.token-table th {
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-muted, #8D8D8D);
  padding: 8px 10px 8px 0;
  border-bottom: 2px solid var(--color-border, #e5e5e5);
}

.token-table td {
  padding: 7px 10px 7px 0;
  border-bottom: 1px solid var(--color-border, #e5e5e5);
  vertical-align: middle;
}

.token-table__hex {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: var(--color-text-secondary, #505050);
  white-space: nowrap;
}

.token-table__note {
  font-size: 12px;
  color: var(--color-text-muted, #8D8D8D);
}

.token-table__divider td {
  border-top: 2px solid var(--color-border, #e5e5e5);
}

.swatch {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.swatch--bordered {
  border: 1px solid var(--color-border-strong, #d4d4d4);
}

/* ─── Code blocks ─── */
.code-block {
  background: var(--color-code-bg, #1a1d23);
  border: 1px solid var(--color-code-border, #2d3748);
  border-radius: 8px;
  padding: 20px 24px;
  margin: 12px 0 28px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-code-text, #e2e8f0);
  white-space: pre;
}

/* ─── Theme comparison panels ─── */
.theme-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 16px 0 32px;
}

.theme-comparison__panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.theme-comparison__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted, #8D8D8D);
}

/* ─── Preview card (light/dark demos) ─── */
.preview-card {
  border-radius: 10px;
  padding: 20px;
  font-size: 13px;
  line-height: 1.6;
}

.preview-card--light {
  background: #FFFFFF;
  color: #2A2A2A;
  border: 1px solid #D1D1D1;
}

.preview-card--dark {
  background: #000000;
  color: #FAFAFA;
  border: 1px solid #6F6F6F;
}

.preview-card__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.preview-card__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.preview-card__dot--green {
  background: #0FAF80;
}

.preview-card__title {
  font-weight: 600;
  font-size: 14px;
}

.preview-card__body {
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 1.6;
}

.preview-card--light .preview-card__body {
  color: #505050;
}

.preview-card--dark .preview-card__body {
  color: #ECECEC;
}

.preview-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  font-size: 12px;
}

.preview-card--light .preview-card__footer {
  border-top: 1px solid #ECECEC;
}

.preview-card--dark .preview-card__footer {
  border-top: 1px solid #505050;
}

.preview-card--light .preview-card__meta {
  color: #8D8D8D;
}

.preview-card--dark .preview-card__meta {
  color: #8D8D8D;
}

.preview-card--light .preview-card__action {
  color: #0FAF80;
  font-weight: 600;
}

.preview-card--dark .preview-card__action {
  color: #0FAF80;
  font-weight: 600;
}

/* ─── Gray scale strip ─── */
.scale-strip {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border, #e5e5e5);
}

.scale-strip--dark {
  border-color: #505050;
}

.scale-strip__swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 4px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

/* ─── Aside tokens list ─── */
.aside-tokens {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  font-size: 12px;
  line-height: 1.3;
}

.aside-tokens li {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
}

.aside-tokens code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
  min-width: 36px;
}

.aside-swatch {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.aside-arrow {
  color: var(--color-text-muted, #8D8D8D);
  font-size: 11px;
  flex-shrink: 0;
}

.aside-pattern {
  background: var(--color-surface-raised, #f0f0f0);
  border-radius: 6px;
  padding: 10px 12px;
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.8;
}

.aside-pattern code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
}

.aside__sub {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-muted, #8D8D8D);
  margin: 0;
}
</style>
