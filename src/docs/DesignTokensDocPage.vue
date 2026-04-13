<template>
  <DocHeader active-page="design-tokens" />

  <div class="layout">

    <!-- ─── Left nav ─── -->
    <DocNav active-page="design-tokens" />

    <!-- ─── Main content ─── -->
    <main class="layout__content">
      <article class="content">

        <span class="content__eyebrow">Foundations</span>
        <h1>Design Tokens</h1>
        <p class="content__lead">
          Design tokens are the single source of truth for colors, spacing, border radii, and
          typography in the Marks Design System. They bridge design (Figma) and code (SCSS/CSS
          custom properties), ensuring every component stays consistent across products.
        </p>

        <!-- ─── 1. Overview ─── -->
        <h2 id="overview" class="comp-section-h2">Overview</h2>
        <p class="comp-section-desc">
          Tokens are primitive values — colors, sizes, radii — stored as CSS custom properties.
          They originate in Figma, are exported as JSON, and compiled into SCSS variables and
          CSS custom properties during the build.
        </p>

        <h3>Why tokens matter</h3>
        <ul>
          <li><strong>Consistency</strong> — Every component references the same value, eliminating magic numbers.</li>
          <li><strong>Theming</strong> — Override the custom properties on a parent element and every descendant adapts (light ↔ dark, brand variants).</li>
          <li><strong>Maintainability</strong> — Change a token once, and it propagates everywhere.</li>
        </ul>

        <h3>Token pipeline</h3>
        <ol>
          <li><strong>Figma</strong> — Designers define tokens as Figma variables / styles.</li>
          <li><strong>JSON export</strong> — Tokens are exported as a structured JSON file.</li>
          <li><strong>Build</strong> — The build script generates <code>_variables.scss</code> (SCSS map + CSS custom properties on <code>:root</code>).</li>
          <li><strong>Consumption</strong> — Components use <code>var(--marks-*)</code> in CSS or the SCSS mixins.</li>
        </ol>

        <!-- ─── 2. Colors ─── -->
        <h2 id="colors" class="comp-section-h2">Colors</h2>
        <p class="comp-section-desc">
          The color palette is organized into semantic groups. Each group provides 100 (light),
          200 (mid), and 300 (dark) variants — except gray, which uses a wider scale.
        </p>

        <!-- Primary -->
        <h3>Primary</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#0E5842;"></div>
            <span class="swatch__name">--marks-color-primary-solid</span>
            <span class="swatch__value">#0E5842</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:rgba(14,88,66,0.05); border:1px solid #ECECEC;"></div>
            <span class="swatch__name">--marks-color-primary-light</span>
            <span class="swatch__value">rgba(14,88,66,0.05)</span>
          </div>
        </div>

        <!-- Red -->
        <h3>Red</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#FFE4E9;"></div>
            <span class="swatch__name">--marks-color-red-100</span>
            <span class="swatch__value">#FFE4E9</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#FD3860;"></div>
            <span class="swatch__name">--marks-color-red-200</span>
            <span class="swatch__value">#FD3860</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#97001E;"></div>
            <span class="swatch__name">--marks-color-red-300</span>
            <span class="swatch__value">#97001E</span>
          </div>
        </div>

        <!-- Blue -->
        <h3>Blue</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#D7E7FF;"></div>
            <span class="swatch__name">--marks-color-blue-100</span>
            <span class="swatch__value">#D7E7FF</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#2576F7;"></div>
            <span class="swatch__name">--marks-color-blue-200</span>
            <span class="swatch__value">#2576F7</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#050D3A;"></div>
            <span class="swatch__name">--marks-color-blue-300</span>
            <span class="swatch__value">#050D3A</span>
          </div>
        </div>

        <!-- Green -->
        <h3>Green</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#C0F3E4;"></div>
            <span class="swatch__name">--marks-color-green-100</span>
            <span class="swatch__value">#C0F3E4</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#0FAF80;"></div>
            <span class="swatch__name">--marks-color-green-200</span>
            <span class="swatch__value">#0FAF80</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#0E5842;"></div>
            <span class="swatch__name">--marks-color-green-300</span>
            <span class="swatch__value">#0E5842</span>
          </div>
        </div>

        <!-- Orange -->
        <h3>Orange</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#FFEBD2;"></div>
            <span class="swatch__name">--marks-color-orange-100</span>
            <span class="swatch__value">#FFEBD2</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#FF8C00;"></div>
            <span class="swatch__name">--marks-color-orange-200</span>
            <span class="swatch__value">#FF8C00</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#854900;"></div>
            <span class="swatch__name">--marks-color-orange-300</span>
            <span class="swatch__value">#854900</span>
          </div>
        </div>

        <!-- Gray -->
        <h3>Gray</h3>
        <div class="swatch-grid swatch-grid--wide">
          <div class="swatch">
            <div class="swatch__color" style="background:#FAFAFA; border:1px solid #ECECEC;"></div>
            <span class="swatch__name">--marks-color-gray-100</span>
            <span class="swatch__value">#FAFAFA</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#ECECEC;"></div>
            <span class="swatch__name">--marks-color-gray-150</span>
            <span class="swatch__value">#ECECEC</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#D1D1D1;"></div>
            <span class="swatch__name">--marks-color-gray-200</span>
            <span class="swatch__value">#D1D1D1</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#8D8D8D;"></div>
            <span class="swatch__name">--marks-color-gray-300</span>
            <span class="swatch__value">#8D8D8D</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#6F6F6F;"></div>
            <span class="swatch__name">--marks-color-gray-350</span>
            <span class="swatch__value">#6F6F6F</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#505050;"></div>
            <span class="swatch__name">--marks-color-gray-400</span>
            <span class="swatch__value">#505050</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#2A2A2A;"></div>
            <span class="swatch__name">--marks-color-gray-500</span>
            <span class="swatch__value">#2A2A2A</span>
          </div>
        </div>

        <!-- Black / White -->
        <h3>Black &amp; White</h3>
        <div class="swatch-grid">
          <div class="swatch">
            <div class="swatch__color" style="background:#FFFFFF; border:1px solid #ECECEC;"></div>
            <span class="swatch__name">--marks-color-white</span>
            <span class="swatch__value">#FFFFFF</span>
          </div>
          <div class="swatch">
            <div class="swatch__color" style="background:#000000;"></div>
            <span class="swatch__name">--marks-color-black</span>
            <span class="swatch__value">#000000</span>
          </div>
        </div>

        <!-- ─── 3. Spacing ─── -->
        <h2 id="spacing" class="comp-section-h2">Spacing</h2>
        <p class="comp-section-desc">
          A linear spacing scale based on a 4 px base unit. Use these tokens for all margin,
          padding, and gap values to maintain consistent rhythm.
        </p>

        <div class="spacing-scale">
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-0</span>
            <div class="spacing-row__bar" style="width:0px;"></div>
            <span class="spacing-row__value">0 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-4</span>
            <div class="spacing-row__bar" style="width:4px;"></div>
            <span class="spacing-row__value">4 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-8</span>
            <div class="spacing-row__bar" style="width:8px;"></div>
            <span class="spacing-row__value">8 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-12</span>
            <div class="spacing-row__bar" style="width:12px;"></div>
            <span class="spacing-row__value">12 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-16</span>
            <div class="spacing-row__bar" style="width:16px;"></div>
            <span class="spacing-row__value">16 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-20</span>
            <div class="spacing-row__bar" style="width:20px;"></div>
            <span class="spacing-row__value">20 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-24</span>
            <div class="spacing-row__bar" style="width:24px;"></div>
            <span class="spacing-row__value">24 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-28</span>
            <div class="spacing-row__bar" style="width:28px;"></div>
            <span class="spacing-row__value">28 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-32</span>
            <div class="spacing-row__bar" style="width:32px;"></div>
            <span class="spacing-row__value">32 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-36</span>
            <div class="spacing-row__bar" style="width:36px;"></div>
            <span class="spacing-row__value">36 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-40</span>
            <div class="spacing-row__bar" style="width:40px;"></div>
            <span class="spacing-row__value">40 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-56</span>
            <div class="spacing-row__bar" style="width:56px;"></div>
            <span class="spacing-row__value">56 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-72</span>
            <div class="spacing-row__bar" style="width:72px;"></div>
            <span class="spacing-row__value">72 px</span>
          </div>
          <div class="spacing-row">
            <span class="spacing-row__label">--marks-spacing-80</span>
            <div class="spacing-row__bar" style="width:80px;"></div>
            <span class="spacing-row__value">80 px</span>
          </div>
        </div>

        <!-- ─── 4. Border Radius ─── -->
        <h2 id="radius" class="comp-section-h2">Border Radius</h2>
        <p class="comp-section-desc">
          Radius tokens control corner rounding across all components. Use
          <code>--marks-radius-full</code> for pill shapes and avatars.
        </p>

        <div class="radius-grid">
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:0px;"></div>
            <span class="radius-demo__name">--marks-radius-0</span>
            <span class="radius-demo__value">0 px</span>
          </div>
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:8px;"></div>
            <span class="radius-demo__name">--marks-radius-8</span>
            <span class="radius-demo__value">8 px</span>
          </div>
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:12px;"></div>
            <span class="radius-demo__name">--marks-radius-12</span>
            <span class="radius-demo__value">12 px</span>
          </div>
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:16px;"></div>
            <span class="radius-demo__name">--marks-radius-16</span>
            <span class="radius-demo__value">16 px</span>
          </div>
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:24px;"></div>
            <span class="radius-demo__name">--marks-radius-24</span>
            <span class="radius-demo__value">24 px</span>
          </div>
          <div class="radius-demo">
            <div class="radius-demo__box" style="border-radius:100px;"></div>
            <span class="radius-demo__name">--marks-radius-full</span>
            <span class="radius-demo__value">100 px</span>
          </div>
        </div>

        <!-- ─── 5. Typography ─── -->
        <h2 id="typography" class="comp-section-h2">Typography</h2>
        <p class="comp-section-desc">
          The system uses Inter as the primary typeface with a system-font fallback stack.
          Typography tokens cover font families, sizes, weights, and line heights.
        </p>

        <h3>Font family</h3>
        <div class="type-specimen">
          <p class="type-specimen__sample" style="font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; font-size:24px;">
            The quick brown fox jumps over the lazy dog
          </p>
          <code class="type-specimen__stack">Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif</code>
        </div>

        <h3>Font sizes</h3>
        <table class="token-table">
          <thead>
            <tr><th>Token</th><th>Size</th><th>Preview</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--marks-font-size-xs</code></td>
              <td>10 px</td>
              <td><span style="font-size:10px;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-sm</code></td>
              <td>13 px</td>
              <td><span style="font-size:13px;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-md</code></td>
              <td>15 px</td>
              <td><span style="font-size:15px;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-base</code></td>
              <td>16 px</td>
              <td><span style="font-size:16px;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-lg</code></td>
              <td>18 px</td>
              <td><span style="font-size:18px;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-h5</code></td>
              <td>16 px</td>
              <td><span style="font-size:16px; font-weight:700;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-h4</code></td>
              <td>18 px</td>
              <td><span style="font-size:18px; font-weight:700;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-h3</code></td>
              <td>24 px</td>
              <td><span style="font-size:24px; font-weight:700;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-h2</code></td>
              <td>36 px</td>
              <td><span style="font-size:36px; font-weight:700; line-height:1.2;">Design Tokens</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-size-h1</code></td>
              <td>48 px</td>
              <td><span style="font-size:48px; font-weight:700; line-height:1.1;">Design Tokens</span></td>
            </tr>
          </tbody>
        </table>

        <h3>Font weights</h3>
        <table class="token-table">
          <thead>
            <tr><th>Token</th><th>Value</th><th>Preview</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--marks-font-weight-regular</code></td>
              <td>400</td>
              <td><span style="font-weight:400; font-size:18px;">Regular weight text</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-weight-medium</code></td>
              <td>500</td>
              <td><span style="font-weight:500; font-size:18px;">Medium weight text</span></td>
            </tr>
            <tr>
              <td><code>--marks-font-weight-bold</code></td>
              <td>700</td>
              <td><span style="font-weight:700; font-size:18px;">Bold weight text</span></td>
            </tr>
          </tbody>
        </table>

        <h3>Line heights</h3>
        <table class="token-table">
          <thead>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--marks-line-height-xs</code></td>
              <td>1</td>
              <td>Single-line labels, badges</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-sm</code></td>
              <td>19.5 px</td>
              <td>Small paragraph text (13 px &times; 1.5)</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-md</code></td>
              <td>22.5 px</td>
              <td>Medium paragraph text (15 px &times; 1.5)</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-lg</code></td>
              <td>27 px</td>
              <td>Large paragraph text (18 px &times; 1.5)</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-h5</code></td>
              <td>1.3</td>
              <td>Heading 5</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-h4</code></td>
              <td>1.3</td>
              <td>Heading 4</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-h3</code></td>
              <td>1.25</td>
              <td>Heading 3</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-h2</code></td>
              <td>1.2</td>
              <td>Heading 2</td>
            </tr>
            <tr>
              <td><code>--marks-line-height-h1</code></td>
              <td>1.1</td>
              <td>Heading 1</td>
            </tr>
          </tbody>
        </table>

        <h3>Typography mixins</h3>
        <p class="comp-section-desc">
          SCSS mixins combine size, weight, and line-height into reusable presets.
          Use these instead of setting individual properties.
        </p>
        <table class="token-table">
          <thead>
            <tr><th>Mixin</th><th>Font size</th><th>Weight</th><th>Line height</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>marks-typography-paragraph-sm</code></td>
              <td>13 px</td>
              <td>400</td>
              <td>19.5 px</td>
            </tr>
            <tr>
              <td><code>marks-typography-paragraph-md</code></td>
              <td>15 px</td>
              <td>400</td>
              <td>22.5 px</td>
            </tr>
            <tr>
              <td><code>marks-typography-paragraph-lg</code></td>
              <td>18 px</td>
              <td>400</td>
              <td>27 px</td>
            </tr>
            <tr>
              <td><code>marks-typography-heading-h5</code></td>
              <td>16 px</td>
              <td>700</td>
              <td>1.3</td>
            </tr>
            <tr>
              <td><code>marks-typography-heading-h4</code></td>
              <td>18 px</td>
              <td>700</td>
              <td>1.3</td>
            </tr>
            <tr>
              <td><code>marks-typography-heading-h3</code></td>
              <td>24 px</td>
              <td>700</td>
              <td>1.25</td>
            </tr>
            <tr>
              <td><code>marks-typography-heading-h2</code></td>
              <td>36 px</td>
              <td>700</td>
              <td>1.2</td>
            </tr>
            <tr>
              <td><code>marks-typography-heading-h1</code></td>
              <td>48 px</td>
              <td>700</td>
              <td>1.1</td>
            </tr>
          </tbody>
        </table>

        <!-- ─── 6. Usage ─── -->
        <h2 id="usage" class="comp-section-h2">Usage</h2>
        <p class="comp-section-desc">
          How to consume tokens in your SCSS and CSS.
        </p>

        <h3>Using CSS custom properties</h3>
        <div class="code-example">
<pre><span class="token-comment">/* Reference tokens directly via var() */</span>
<span class="token-selector">.card</span> {
  <span class="token-attr">padding</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-spacing-16</span>);
  <span class="token-attr">border-radius</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-radius-12</span>);
  <span class="token-attr">background</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-white</span>);
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);
}

<span class="token-selector">.card__title</span> {
  <span class="token-attr">font-size</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-font-size-h4</span>);
  <span class="token-attr">font-weight</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-font-weight-bold</span>);
}</pre>
        </div>

        <h3>Using SCSS mixins</h3>
        <div class="code-example">
<pre><span class="token-keyword">@use</span> <span class="token-string">'tokens/variables'</span> <span class="token-keyword">as</span> *;

<span class="token-selector">.card__title</span> {
  <span class="token-keyword">@include</span> marks-typography-heading-h4;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-500</span>);
}

<span class="token-selector">.card__body</span> {
  <span class="token-keyword">@include</span> marks-typography-paragraph-md;
  <span class="token-attr">color</span>: <span class="token-keyword">var</span>(<span class="token-string">--marks-color-gray-350</span>);
}</pre>
        </div>

        <h3>Importing the token stylesheet</h3>
        <div class="code-example">
<pre><span class="token-comment">/* In your main SCSS entry point */</span>
<span class="token-keyword">@use</span> <span class="token-string">'@aspect/marks-design-system/tokens/variables'</span>;

<span class="token-comment">/* Or import the compiled CSS */</span>
<span class="token-keyword">@import</span> <span class="token-string">'@aspect/marks-design-system/design-system.css'</span>;</pre>
        </div>

        <h3>Theming override example</h3>
        <div class="code-example">
<pre><span class="token-comment">/* Override tokens on a container for dark mode */</span>
<span class="token-selector">.dark-theme</span> {
  <span class="token-attr">--marks-color-white</span>: <span class="token-string">#000000</span>;
  <span class="token-attr">--marks-color-black</span>: <span class="token-string">#FFFFFF</span>;
  <span class="token-attr">--marks-color-gray-100</span>: <span class="token-string">#2A2A2A</span>;
  <span class="token-attr">--marks-color-gray-500</span>: <span class="token-string">#FAFAFA</span>;
  <span class="token-comment">/* All descendants adapt automatically */</span>
}</pre>
        </div>

      </article>
    </main>

    <!-- ─── Right aside — token quick reference ─── -->
    <aside class="layout__aside">
      <div class="aside">
        <div class="aside__block">
          <span class="aside__title">Quick reference</span>

          <span class="aside__subtitle">On this page</span>
          <ul class="aside__toc">
            <li><a href="#overview" class="aside__toc-link" @click.prevent="scrollTo('overview')">Overview</a></li>
            <li><a href="#colors" class="aside__toc-link" @click.prevent="scrollTo('colors')">Colors</a></li>
            <li><a href="#spacing" class="aside__toc-link" @click.prevent="scrollTo('spacing')">Spacing</a></li>
            <li><a href="#radius" class="aside__toc-link" @click.prevent="scrollTo('radius')">Border Radius</a></li>
            <li><a href="#typography" class="aside__toc-link" @click.prevent="scrollTo('typography')">Typography</a></li>
            <li><a href="#usage" class="aside__toc-link" @click.prevent="scrollTo('usage')">Usage</a></li>
          </ul>

          <span class="aside__subtitle">Color tokens</span>
          <ul class="aside__token-list">
            <li><code>--marks-color-primary-solid</code></li>
            <li><code>--marks-color-primary-light</code></li>
            <li><code>--marks-color-red-{100,200,300}</code></li>
            <li><code>--marks-color-blue-{100,200,300}</code></li>
            <li><code>--marks-color-green-{100,200,300}</code></li>
            <li><code>--marks-color-orange-{100,200,300}</code></li>
            <li><code>--marks-color-gray-{100..500}</code></li>
            <li><code>--marks-color-white</code></li>
            <li><code>--marks-color-black</code></li>
          </ul>

          <span class="aside__subtitle">Spacing tokens</span>
          <ul class="aside__token-list">
            <li><code>--marks-spacing-{0..80}</code></li>
          </ul>

          <span class="aside__subtitle">Radius tokens</span>
          <ul class="aside__token-list">
            <li><code>--marks-radius-0</code></li>
            <li><code>--marks-radius-8</code></li>
            <li><code>--marks-radius-12</code></li>
            <li><code>--marks-radius-16</code></li>
            <li><code>--marks-radius-24</code></li>
            <li><code>--marks-radius-full</code></li>
          </ul>

          <span class="aside__subtitle">Typography tokens</span>
          <ul class="aside__token-list">
            <li><code>--marks-font-size-{xs..h1}</code></li>
            <li><code>--marks-font-weight-{regular,medium,bold}</code></li>
            <li><code>--marks-line-height-{xs..h1}</code></li>
          </ul>
        </div>
      </div>
    </aside>

  </div>
</template>

<script>
import DocHeader from './DocHeader.vue';
import DocNav from './DocNav.vue';

export default {
  name: 'DesignTokensDocPage',
  components: { DocHeader, DocNav },
  methods: {
    scrollTo(id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
@import '../../docs/reference-main.css';
</style>

<style scoped>
/* ─── Color swatches ─── */
.swatch-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.swatch-grid--wide {
  grid-template-columns: repeat(4, 1fr);
}

.swatch {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.swatch__color {
  width: 100%;
  height: 64px;
  border-radius: 8px;
}

.swatch__name {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 11px;
  color: var(--marks-color-gray-500, #2A2A2A);
  word-break: break-all;
  line-height: 1.4;
}

.swatch__value {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 11px;
  color: var(--marks-color-gray-300, #8D8D8D);
}

/* ─── Spacing scale ─── */
.spacing-scale {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}

.spacing-row {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 28px;
}

.spacing-row__label {
  flex: 0 0 180px;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 12px;
  color: var(--marks-color-gray-500, #2A2A2A);
  text-align: right;
}

.spacing-row__bar {
  height: 16px;
  min-width: 2px;
  background: #0E5842;
  border-radius: 3px;
  transition: width 0.2s ease;
}

.spacing-row__value {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 11px;
  color: var(--marks-color-gray-300, #8D8D8D);
  white-space: nowrap;
}

/* ─── Border radius demos ─── */
.radius-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.radius-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.radius-demo__box {
  width: 72px;
  height: 72px;
  background: #0E5842;
}

.radius-demo__name {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 10px;
  color: var(--marks-color-gray-500, #2A2A2A);
  text-align: center;
  word-break: break-all;
  line-height: 1.4;
}

.radius-demo__value {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 10px;
  color: var(--marks-color-gray-300, #8D8D8D);
}

/* ─── Typography specimen ─── */
.type-specimen {
  margin-bottom: 32px;
  padding: 24px;
  background: var(--marks-color-gray-100, #FAFAFA);
  border-radius: 8px;
}

.type-specimen__sample {
  margin: 0 0 12px 0;
  color: var(--marks-color-gray-500, #2A2A2A);
}

.type-specimen__stack {
  font-size: 12px;
  color: var(--marks-color-gray-300, #8D8D8D);
  word-break: break-all;
}

/* ─── Token tables ─── */
.token-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 32px;
  font-size: 13px;
}

.token-table th {
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--marks-color-gray-300, #8D8D8D);
  padding: 8px 12px 8px 0;
  border-bottom: 2px solid var(--marks-color-gray-400, #ECECEC);
}

.token-table td {
  padding: 8px 12px 8px 0;
  border-bottom: 1px solid var(--marks-color-gray-400, #ECECEC);
  vertical-align: middle;
}

.token-table td:first-child {
  white-space: nowrap;
}

.token-table td:first-child code {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 12px;
  color: var(--marks-color-gray-500, #2A2A2A);
  background: var(--marks-color-gray-100, #FAFAFA);
  padding: 2px 6px;
  border-radius: 4px;
}

.token-table td:nth-child(2) {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 12px;
  color: var(--marks-color-gray-350, #6F6F6F);
  white-space: nowrap;
}

/* ─── Code examples ─── */
.code-example {
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
}

.code-example pre {
  margin: 0;
  padding: 20px;
  background: #1a1d23;
  color: #e2e8f0;
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  white-space: pre;
  border-radius: 8px;
}

/* ─── Aside token list ─── */
.aside__toc {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.aside__toc li {
  margin-bottom: 4px;
}

.aside__toc-link {
  font-size: 13px;
  color: var(--marks-color-gray-350, #6F6F6F);
  text-decoration: none;
  line-height: 1.6;
}

.aside__toc-link:hover {
  color: var(--marks-color-gray-500, #2A2A2A);
}

.aside__subtitle {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--marks-color-gray-300, #8D8D8D);
  margin-bottom: 6px;
  margin-top: 16px;
}

.aside__subtitle:first-of-type {
  margin-top: 0;
}

.aside__token-list {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}

.aside__token-list li {
  margin-bottom: 3px;
}

.aside__token-list code {
  font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
  font-size: 10.5px;
  color: var(--marks-color-gray-350, #6F6F6F);
  line-height: 1.5;
}

/* ─── Responsive adjustments ─── */
@media (max-width: 900px) {
  .swatch-grid { grid-template-columns: repeat(2, 1fr); }
  .swatch-grid--wide { grid-template-columns: repeat(3, 1fr); }
  .radius-grid { grid-template-columns: repeat(3, 1fr); }
  .spacing-row__label { flex: 0 0 140px; }
}

@media (max-width: 600px) {
  .swatch-grid,
  .swatch-grid--wide { grid-template-columns: 1fr 1fr; }
  .radius-grid { grid-template-columns: repeat(2, 1fr); }
  .spacing-row__label { flex: 0 0 100px; font-size: 10px; }
}
</style>
