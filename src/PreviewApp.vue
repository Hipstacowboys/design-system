<template>
  <div class="preview-container">
    <!-- Left Navigation -->
    <nav class="preview-nav">
      <h2>Tokens</h2>
      <ul>
        <li><a href="#colors" class="nav-link" :class="{ active: activeSection === 'colors' }" @click.prevent="setSection('colors')">Colors</a></li>
        <li><a href="#spacing" class="nav-link" :class="{ active: activeSection === 'spacing' }" @click.prevent="setSection('spacing')">Spacing</a></li>
        <li><a href="#typography" class="nav-link" :class="{ active: activeSection === 'typography' }" @click.prevent="setSection('typography')">Typography</a></li>
      </ul>
      <h2>Components</h2>
      <ul>
        <li><a href="#toggle" class="nav-link" :class="{ active: activeSection === 'toggle' }" @click.prevent="setSection('toggle')">Toggle</a></li>
        <li><a href="#toggle-with-label" class="nav-link" :class="{ active: activeSection === 'toggle-with-label' }" @click.prevent="setSection('toggle-with-label')">Toggle with Label</a></li>
        <li><a href="#checkbox" class="nav-link" :class="{ active: activeSection === 'checkbox' }" @click.prevent="setSection('checkbox')">Checkbox</a></li>
        <li><a href="#checkbox-with-label" class="nav-link" :class="{ active: activeSection === 'checkbox-with-label' }" @click.prevent="setSection('checkbox-with-label')">Checkbox with Label</a></li>
        <li><a href="#radio" class="nav-link" :class="{ active: activeSection === 'radio' }" @click.prevent="setSection('radio')">Radio</a></li>
        <li><a href="#radio-with-label" class="nav-link" :class="{ active: activeSection === 'radio-with-label' }" @click.prevent="setSection('radio-with-label')">Radio with Label</a></li>
        <li><a href="#button" class="nav-link" :class="{ active: activeSection === 'button' }" @click.prevent="setSection('button')">Button</a></li>
        <li><a href="#select" class="nav-link" :class="{ active: activeSection === 'select' }" @click.prevent="setSection('select')">Select</a></li>
        <li><a href="#input" class="nav-link" :class="{ active: activeSection === 'input' }" @click.prevent="setSection('input')">Input</a></li>
        <li><a href="#textarea" class="nav-link" :class="{ active: activeSection === 'textarea' }" @click.prevent="setSection('textarea')">Textarea</a></li>
        <li><a href="#notification-badge" class="nav-link" :class="{ active: activeSection === 'notification-badge' }" @click.prevent="setSection('notification-badge')">Notification Badge</a></li>
        <li><a href="#status" class="nav-link" :class="{ active: activeSection === 'status' }" @click.prevent="setSection('status')">Status</a></li>
        <li><a href="#alert" class="nav-link" :class="{ active: activeSection === 'alert' }" @click.prevent="setSection('alert')">Alert</a></li>
        <li><a href="#tabs" class="nav-link" :class="{ active: activeSection === 'tabs' }" @click.prevent="setSection('tabs')">Tabs</a></li>
        <li><a href="#breadcrumbs" class="nav-link" :class="{ active: activeSection === 'breadcrumbs' }" @click.prevent="setSection('breadcrumbs')">Breadcrumbs</a></li>
      </ul>
    </nav>

    <!-- Right Content -->
    <main class="preview-content">
      <!-- Colors Section -->
      <section v-show="activeSection === 'colors'" id="colors" class="preview-section">
        <h1>Colors</h1>
        <p>Color tokens from Figma design system. Toggle between light and dark modes to see how colors adapt.</p>

        <h2>Primary</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-primary"></div>
            <div class="token-card-header">
              <div class="token-card-name">Primary Solid</div>
              <div class="token-card-value">--desys-color-primary-solid</div>
            </div>
          </div>
        </div>

        <h2>Red Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-red-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 100</div>
              <div class="token-card-value">--desys-color-red-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-red-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 200</div>
              <div class="token-card-value">--desys-color-red-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-red-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 300</div>
              <div class="token-card-value">--desys-color-red-300</div>
            </div>
          </div>
        </div>

        <h2>Blue Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-blue-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 100</div>
              <div class="token-card-value">--desys-color-blue-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-blue-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 200</div>
              <div class="token-card-value">--desys-color-blue-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-blue-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 300</div>
              <div class="token-card-value">--desys-color-blue-300</div>
            </div>
          </div>
        </div>

        <h2>Green Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-green-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 100</div>
              <div class="token-card-value">--desys-color-green-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-green-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 200</div>
              <div class="token-card-value">--desys-color-green-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-green-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 300</div>
              <div class="token-card-value">--desys-color-green-300</div>
            </div>
          </div>
        </div>

        <h2>Orange Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-orange-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 100</div>
              <div class="token-card-value">--desys-color-orange-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-orange-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 200</div>
              <div class="token-card-value">--desys-color-orange-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-orange-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 300</div>
              <div class="token-card-value">--desys-color-orange-300</div>
            </div>
          </div>
        </div>

        <h2>Gray Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-gray-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 100</div>
              <div class="token-card-value">--desys-color-gray-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-150"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 150</div>
              <div class="token-card-value">--desys-color-gray-150</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 200</div>
              <div class="token-card-value">--desys-color-gray-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 300</div>
              <div class="token-card-value">--desys-color-gray-300</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-350"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 350</div>
              <div class="token-card-value">--desys-color-gray-350</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-400"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 400</div>
              <div class="token-card-value">--desys-color-gray-400</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-500"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 500</div>
              <div class="token-card-value">--desys-color-gray-500</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-white"></div>
            <div class="token-card-header">
              <div class="token-card-name">White</div>
              <div class="token-card-value">--desys-color-white</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-black"></div>
            <div class="token-card-header">
              <div class="token-card-name">Black</div>
              <div class="token-card-value">--desys-color-black</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Spacing Section -->
      <section v-show="activeSection === 'spacing'" id="spacing" class="preview-section">
        <h1>Spacing</h1>
        <p>Spacing tokens for gutters and border radiuses from Figma design system.</p>

        <h2>Gutters</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="spacing-sample spacing-sample-0">
              <div class="spacing-sample-label">0px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 0</div>
              <div class="token-card-value">--desys-spacing-gutter-0</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-4">
              <div class="spacing-sample-label">4px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 4</div>
              <div class="token-card-value">--desys-spacing-gutter-4</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-8">
              <div class="spacing-sample-label">8px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 8</div>
              <div class="token-card-value">--desys-spacing-gutter-8</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-12">
              <div class="spacing-sample-label">12px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 12</div>
              <div class="token-card-value">--desys-spacing-gutter-12</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-16">
              <div class="spacing-sample-label">16px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 16</div>
              <div class="token-card-value">--desys-spacing-gutter-16</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-20">
              <div class="spacing-sample-label">20px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 20</div>
              <div class="token-card-value">--desys-spacing-gutter-20</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-24">
              <div class="spacing-sample-label">24px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 24</div>
              <div class="token-card-value">--desys-spacing-gutter-24</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-28">
              <div class="spacing-sample-label">28px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 28</div>
              <div class="token-card-value">--desys-spacing-gutter-28</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-32">
              <div class="spacing-sample-label">32px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 32</div>
              <div class="token-card-value">--desys-spacing-gutter-32</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-36">
              <div class="spacing-sample-label">36px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 36</div>
              <div class="token-card-value">--desys-spacing-gutter-36</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-40">
              <div class="spacing-sample-label">40px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 40</div>
              <div class="token-card-value">--desys-spacing-gutter-40</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-56">
              <div class="spacing-sample-label">56px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 56</div>
              <div class="token-card-value">--desys-spacing-gutter-56</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-72">
              <div class="spacing-sample-label">72px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 72</div>
              <div class="token-card-value">--desys-spacing-gutter-72</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-80">
              <div class="spacing-sample-label">80px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 80</div>
              <div class="token-card-value">--desys-spacing-gutter-80</div>
            </div>
          </div>
        </div>

        <h2>Border Radius</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="radius-sample radius-sample-0">
              <div class="radius-sample-label">0px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 0</div>
              <div class="token-card-value">--desys-radius-0</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-8">
              <div class="radius-sample-label">8px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 8</div>
              <div class="token-card-value">--desys-radius-8</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-12">
              <div class="radius-sample-label">12px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 12</div>
              <div class="token-card-value">--desys-radius-12</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-16">
              <div class="radius-sample-label">16px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 16</div>
              <div class="token-card-value">--desys-radius-16</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-24">
              <div class="radius-sample-label">24px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 24</div>
              <div class="token-card-value">--desys-radius-24</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-full">
              <div class="radius-sample-label">100px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius Full</div>
              <div class="token-card-value">--desys-radius-full</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Typography Section -->
      <section v-show="activeSection === 'typography'" id="typography" class="preview-section">
        <h1>Typography</h1>
        <p>Text styles from Figma design system. Each header has regular (400) and bold (700) variations. Colors are defined in components, shown here in black for preview.</p>

        <h2>Header One</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h1-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H1 Regular</div>
              <div class="token-card-value">.desys-h1-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h1-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H1 Bold</div>
              <div class="token-card-value">.desys-h1-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Two</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h2-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H2 Regular</div>
              <div class="token-card-value">.desys-h2-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h2-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H2 Bold</div>
              <div class="token-card-value">.desys-h2-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Three</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h3-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H3 Regular</div>
              <div class="token-card-value">.desys-h3-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h3-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H3 Bold</div>
              <div class="token-card-value">.desys-h3-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Four</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h4-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H4 Regular</div>
              <div class="token-card-value">.desys-h4-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h4-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H4 Bold</div>
              <div class="token-card-value">.desys-h4-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Five</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h5-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H5 Regular</div>
              <div class="token-card-value">.desys-h5-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-h5-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H5 Bold</div>
              <div class="token-card-value">.desys-h5-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Large</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-lg typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Large</div>
              <div class="token-card-value">.desys-paragraph-lg</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Medium</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-md-multiline typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium Multiline</div>
              <div class="token-card-value">.desys-paragraph-md-multiline</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-md-one-line typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium One Line</div>
              <div class="token-card-value">.desys-paragraph-md-one-line</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-md-bold typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium Bold</div>
              <div class="token-card-value">.desys-paragraph-md-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Small</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-sm-multiline typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small Multiline</div>
              <div class="token-card-value">.desys-paragraph-sm-multiline</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-sm-one-line typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small One Line</div>
              <div class="token-card-value">.desys-paragraph-sm-one-line</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-sm-bold typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small Bold</div>
              <div class="token-card-value">.desys-paragraph-sm-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Extra Small</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-paragraph-xs typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Extra Small</div>
              <div class="token-card-value">.desys-paragraph-xs</div>
            </div>
          </div>
        </div>

        <h2>Button Typography</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-button-lg typography-sample-text">Button Large Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Large</div>
              <div class="token-card-value">@include desys-typography-button-lg;</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-button-md typography-sample-text">Button Medium Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Medium</div>
              <div class="token-card-value">@include desys-typography-button-md;</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="desys-button-sm typography-sample-text">Button Small Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Small</div>
              <div class="token-card-value">@include desys-typography-button-sm;</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Toggle Component Section -->
      <section v-show="activeSection === 'toggle'" id="toggle" class="preview-section">
        <h1>Toggle</h1>
        <p>Toggle component with 6 states: default on/off, hover on/off, and disabled on/off.</p>
        <p><strong>Figma Node ID:</strong> 15-10129</p>

        <h2>All States</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default Off</div>
            <div class="toggle-container">
              <Toggle :model-value="false" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Default On</div>
            <div class="toggle-container">
              <Toggle :model-value="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Hover Off</div>
            <div class="toggle-container">
              <Toggle :model-value="false" class="hover-demo" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Hover On</div>
            <div class="toggle-container">
              <Toggle :model-value="true" class="hover-demo" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Off</div>
            <div class="toggle-container">
              <Toggle :model-value="false" :disabled="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled On</div>
            <div class="toggle-container">
              <Toggle :model-value="true" :disabled="true" />
            </div>
          </div>
        </div>

        <h2>Interactive Example</h2>
        <div class="component-interactive">
          <div class="toggle-container">
            <Toggle v-model="interactiveToggle" />
          </div>
          <div class="component-status">Status: {{ interactiveToggle ? 'On' : 'Off' }}</div>
        </div>
      </section>

      <!-- Toggle with Label Component Section -->
      <section v-show="activeSection === 'toggle-with-label'" id="toggle-with-label" class="preview-section">
        <h1>Toggle with Label</h1>
        <p>Toggle component with text labels. Paragraph text is optional - use the <code>paragraph</code> prop to add additional text below the title.</p>
        <p><strong>Figma Node ID:</strong> 15-10138</p>

        <h2>Variant: Title Only</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default Off</div>
            <div class="toggle-container">
              <ToggleWithLabel :model-value="false" title="Enable notifications" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Default On</div>
            <div class="toggle-container">
              <ToggleWithLabel :model-value="true" title="Enable notifications" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Off</div>
            <div class="toggle-container">
              <ToggleWithLabel :model-value="false" :disabled="true" title="Enable notifications" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled On</div>
            <div class="toggle-container">
              <ToggleWithLabel :model-value="true" :disabled="true" title="Enable notifications" />
            </div>
          </div>
        </div>

        <h2>Variant: Title + Paragraph</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default Off</div>
            <div class="toggle-container">
              <ToggleWithLabel
                :model-value="false"
                title="Enable notifications"
                paragraph="Receive push notifications for important updates"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Default On</div>
            <div class="toggle-container">
              <ToggleWithLabel
                :model-value="true"
                title="Enable notifications"
                paragraph="Receive push notifications for important updates"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Off</div>
            <div class="toggle-container">
              <ToggleWithLabel
                :model-value="false"
                :disabled="true"
                title="Enable notifications"
                paragraph="Receive push notifications for important updates"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled On</div>
            <div class="toggle-container">
              <ToggleWithLabel
                :model-value="true"
                :disabled="true"
                title="Enable notifications"
                paragraph="Receive push notifications for important updates"
              />
            </div>
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container">
            <ToggleWithLabel v-model="interactiveToggleTitle" title="Toggle notifications" />
          </div>
          <div class="component-status">Status: {{ interactiveToggleTitle ? 'On' : 'Off' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container">
            <ToggleWithLabel
              v-model="interactiveToggleTitleParagraph"
              title="Email notifications"
              paragraph="Get notified about new messages and updates via email"
            />
          </div>
          <div class="component-status">Status: {{ interactiveToggleTitleParagraph ? 'On' : 'Off' }}</div>
        </div>
      </section>

      <!-- Checkbox Component Section -->
      <section v-show="activeSection === 'checkbox'" id="checkbox" class="preview-section">
        <h1>Checkbox</h1>
        <p>Checkbox component with states: unchecked, checked, indeterminate, and disabled.</p>
        <p><strong>Figma Node ID:</strong> 15-10095</p>

        <h2>All States</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <Checkbox :model-value="false" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <Checkbox :model-value="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Indeterminate</div>
            <div class="toggle-container">
              <Checkbox :model-value="false" :indeterminate="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <Checkbox :model-value="false" :disabled="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Checked</div>
            <div class="toggle-container">
              <Checkbox :model-value="true" :disabled="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Indeterminate</div>
            <div class="toggle-container">
              <Checkbox :model-value="false" :indeterminate="true" :disabled="true" />
            </div>
          </div>
        </div>

        <h2>Interactive Example</h2>
        <div class="component-interactive">
          <div class="toggle-container">
            <Checkbox v-model="interactiveCheckbox" />
          </div>
          <div class="component-status">Status: {{ interactiveCheckbox ? 'Checked' : 'Unchecked' }}</div>
        </div>
      </section>

      <!-- Checkbox with Label Component Section -->
      <section v-show="activeSection === 'checkbox-with-label'" id="checkbox-with-label" class="preview-section">
        <h1>Checkbox with Label</h1>
        <p>Checkbox component with text labels. Paragraph text is optional - use the <code>paragraph</code> prop to add additional text below the title.</p>
        <p><strong>Figma Node ID:</strong> 15-10095</p>

        <h2>Variant: Title Only</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <CheckboxWithLabel :model-value="false" title="Accept terms and conditions" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <CheckboxWithLabel :model-value="true" title="Accept terms and conditions" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Indeterminate</div>
            <div class="toggle-container">
              <CheckboxWithLabel :model-value="false" :indeterminate="true" title="Accept terms and conditions" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <CheckboxWithLabel :model-value="false" :disabled="true" title="Accept terms and conditions" />
            </div>
          </div>
        </div>

        <h2>Variant: Title + Paragraph</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <CheckboxWithLabel
                :model-value="false"
                title="Accept terms and conditions"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <CheckboxWithLabel
                :model-value="true"
                title="Accept terms and conditions"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Indeterminate</div>
            <div class="toggle-container">
              <CheckboxWithLabel
                :model-value="false"
                :indeterminate="true"
                title="Accept terms and conditions"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <CheckboxWithLabel
                :model-value="false"
                :disabled="true"
                title="Accept terms and conditions"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container">
            <CheckboxWithLabel v-model="interactiveCheckboxTitle" title="I agree to the terms" />
          </div>
          <div class="component-status">Status: {{ interactiveCheckboxTitle ? 'Checked' : 'Unchecked' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container">
            <CheckboxWithLabel
              v-model="interactiveCheckboxTitleParagraph"
              title="Accept terms and conditions"
              paragraph="This is multiline context. This is multiline context. This is multiline context."
            />
          </div>
          <div class="component-status">Status: {{ interactiveCheckboxTitleParagraph ? 'Checked' : 'Unchecked' }}</div>
        </div>
      </section>

      <!-- Radio Component Section -->
      <section v-show="activeSection === 'radio'" id="radio" class="preview-section">
        <h1>Radio</h1>
        <p>Radio button component with states: unchecked, checked, hover (unchecked/checked), and disabled.</p>
        <p><strong>Figma Node ID:</strong> 15-10163</p>

        <h2>All States</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <Radio :model-value="null" value="option1" name="radio-demo-1" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <Radio :model-value="'option1'" value="option1" name="radio-demo-2" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <Radio :model-value="null" value="option1" name="radio-demo-3" :disabled="true" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Checked</div>
            <div class="toggle-container">
              <Radio :model-value="'option1'" value="option1" name="radio-demo-4" :disabled="true" />
            </div>
          </div>
        </div>

        <h2>Interactive Example</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; gap: var(--desys-spacing-gutter-16);">
            <Radio v-model="interactiveRadio" value="option1" name="interactive-radio" />
            <Radio v-model="interactiveRadio" value="option2" name="interactive-radio" />
            <Radio v-model="interactiveRadio" value="option3" name="interactive-radio" />
          </div>
          <div class="component-status">Selected: {{ interactiveRadio || 'None' }}</div>
        </div>
      </section>

      <!-- Radio with Label Component Section -->
      <section v-show="activeSection === 'radio-with-label'" id="radio-with-label" class="preview-section">
        <h1>Radio with Label</h1>
        <p>Radio button component with text labels. Paragraph text is optional - use the <code>paragraph</code> prop to add additional text below the title.</p>
        <p><strong>Figma Node ID:</strong> 15-10163</p>

        <h2>Variant: Title Only</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <RadioWithLabel :model-value="null" value="option1" name="radio-label-demo-1" title="Option 1" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <RadioWithLabel :model-value="'option1'" value="option1" name="radio-label-demo-2" title="Option 1" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <RadioWithLabel :model-value="null" value="option1" name="radio-label-demo-3" :disabled="true" title="Option 1" />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Checked</div>
            <div class="toggle-container">
              <RadioWithLabel :model-value="'option1'" value="option1" name="radio-label-demo-4" :disabled="true" title="Option 1" />
            </div>
          </div>
        </div>

        <h2>Variant: Title + Paragraph</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Unchecked</div>
            <div class="toggle-container">
              <RadioWithLabel
                :model-value="null"
                value="option1"
                name="radio-label-para-demo-1"
                title="Option 1"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Checked</div>
            <div class="toggle-container">
              <RadioWithLabel
                :model-value="'option1'"
                value="option1"
                name="radio-label-para-demo-2"
                title="Option 1"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Unchecked</div>
            <div class="toggle-container">
              <RadioWithLabel
                :model-value="null"
                value="option1"
                name="radio-label-para-demo-3"
                :disabled="true"
                title="Option 1"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled Checked</div>
            <div class="toggle-container">
              <RadioWithLabel
                :model-value="'option1'"
                value="option1"
                name="radio-label-para-demo-4"
                :disabled="true"
                title="Option 1"
                paragraph="This is multiline context. This is multiline context. This is multiline context."
              />
            </div>
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: var(--desys-spacing-gutter-12);">
            <RadioWithLabel v-model="interactiveRadioTitle" value="option1" name="interactive-radio-title" title="Option 1" />
            <RadioWithLabel v-model="interactiveRadioTitle" value="option2" name="interactive-radio-title" title="Option 2" />
            <RadioWithLabel v-model="interactiveRadioTitle" value="option3" name="interactive-radio-title" title="Option 3" />
          </div>
          <div class="component-status">Selected: {{ interactiveRadioTitle || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: var(--desys-spacing-gutter-12);">
            <RadioWithLabel
              v-model="interactiveRadioTitleParagraph"
              value="option1"
              name="interactive-radio-title-para"
              title="Option 1"
              paragraph="This is multiline context. This is multiline context. This is multiline context."
            />
            <RadioWithLabel
              v-model="interactiveRadioTitleParagraph"
              value="option2"
              name="interactive-radio-title-para"
              title="Option 2"
              paragraph="This is multiline context. This is multiline context. This is multiline context."
            />
            <RadioWithLabel
              v-model="interactiveRadioTitleParagraph"
              value="option3"
              name="interactive-radio-title-para"
              title="Option 3"
              paragraph="This is multiline context. This is multiline context. This is multiline context."
            />
          </div>
          <div class="component-status">Selected: {{ interactiveRadioTitleParagraph || 'None' }}</div>
        </div>
      </section>

      <!-- Button Component Section -->
      <section v-show="activeSection === 'button'" id="button" class="preview-section">
        <h1>Button</h1>
        <p>Button components with 4 types (Primary, Secondary, Line, Ghost), 3 sizes (small, medium, large), and 4 states (default, hover, clicked, disabled).</p>
        <p><strong>Figma Node ID:</strong> 13-9075</p>

        <h2>Button Primary</h2>
        <h3>Size: Small</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonPrimary size="small" text="Primary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonPrimary size="small" text="Primary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonPrimary size="small" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Medium</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonPrimary size="medium" text="Primary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonPrimary size="medium" text="Primary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonPrimary size="medium" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Large</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonPrimary size="large" text="Primary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonPrimary size="large" text="Primary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonPrimary size="large" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h2>Button Secondary</h2>
        <h3>Size: Small</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonSecondary size="small" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonSecondary size="small" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonSecondary size="small" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Medium</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonSecondary size="medium" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonSecondary size="medium" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonSecondary size="medium" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Large</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonSecondary size="large" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonSecondary size="large" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonSecondary size="large" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h2>Button Line</h2>
        <h3>Size: Small</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonLine size="small" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonLine size="small" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonLine size="small" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Medium</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonLine size="medium" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonLine size="medium" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonLine size="medium" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Large</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonLine size="large" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonLine size="large" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonLine size="large" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h2>Button Ghost</h2>
        <h3>Size: Small</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonGhost size="small" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonGhost size="small" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonGhost size="small" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Medium</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonGhost size="medium" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonGhost size="medium" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonGhost size="medium" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h3>Size: Large</h3>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container">
              <ButtonGhost size="large" text="Secondary Button" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container">
              <ButtonGhost size="large" text="Secondary Button" :disabled="true" />
            </div>
          </div>
          <div class="component-card">
            <div class="component-label">Icon Only</div>
            <div class="toggle-container">
              <ButtonGhost size="large" :icon-only="true" :left-icon="PhArrowLeft" />
            </div>
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; gap: var(--desys-spacing-gutter-12); flex-wrap: wrap;">
            <ButtonPrimary size="medium" text="Click Me" @click="handleButtonClick('Primary')" />
            <ButtonSecondary size="medium" text="Click Me" @click="handleButtonClick('Secondary')" />
            <ButtonLine size="medium" text="Click Me" @click="handleButtonClick('Line')" />
            <ButtonGhost size="medium" text="Click Me" @click="handleButtonClick('Ghost')" />
          </div>
          <div class="component-status">Last clicked: {{ lastClickedButton || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; gap: var(--desys-spacing-gutter-12); flex-wrap: wrap;">
            <ButtonPrimary size="medium" text="With Left Icon" :left-icon="PhArrowLeft" @click="handleButtonClick('Primary with icon')" />
            <ButtonPrimary size="medium" text="With Right Icon" :right-icon="PhArrowRight" @click="handleButtonClick('Primary with icon')" />
            <ButtonPrimary size="medium" text="Both Icons" :left-icon="PhArrowLeft" :right-icon="PhArrowRight" @click="handleButtonClick('Primary both icons')" />
          </div>
        </div>
      </section>

      <!-- Select Component Section -->
      <section v-show="activeSection === 'select'" id="select" class="preview-section">
        <h1>Select</h1>
        <p>Select dropdown component with 2 sizes (small, medium), optional left icon, and multiple states.</p>
        <p><strong>Figma Node ID:</strong> 13-9164</p>

        <h2>Size: Medium</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container" style="width: 300px;">
              <Select
                size="medium"
                :options="selectOptions"
                placeholder="Select option..."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Hover</div>
            <div class="toggle-container" style="width: 300px;">
              <Select
                size="medium"
                :options="selectOptions"
                placeholder="Select option..."
                class="hover-demo"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Selected</div>
            <div class="toggle-container" style="width: 300px;">
              <Select
                size="medium"
                :options="selectOptions"
                v-model="selectValueMedium"
                placeholder="Select option..."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container" style="width: 300px;">
              <Select
                size="medium"
                :options="selectOptions"
                placeholder="Select option..."
                :disabled="true"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">With Left Icon</div>
            <div class="toggle-container" style="width: 300px;">
              <Select
                size="medium"
                :options="selectOptions"
                placeholder="Select option..."
                :left-icon="PhArrowLeft"
              />
            </div>
          </div>
        </div>

        <h2>Size: Small</h2>
        <div class="component-grid">
          <div class="component-card">
            <div class="component-label">Default</div>
            <div class="toggle-container" style="width: 226px;">
              <Select
                size="small"
                :options="selectOptions"
                placeholder="Select option..."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Hover</div>
            <div class="toggle-container" style="width: 226px;">
              <Select
                size="small"
                :options="selectOptions"
                placeholder="Select option..."
                class="hover-demo"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Selected</div>
            <div class="toggle-container" style="width: 226px;">
              <Select
                size="small"
                :options="selectOptions"
                v-model="selectValueSmall"
                placeholder="Select option..."
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">Disabled</div>
            <div class="toggle-container" style="width: 226px;">
              <Select
                size="small"
                :options="selectOptions"
                placeholder="Select option..."
                :disabled="true"
              />
            </div>
          </div>

          <div class="component-card">
            <div class="component-label">With Left Icon</div>
            <div class="toggle-container" style="width: 226px;">
              <Select
                size="small"
                :options="selectOptions"
                placeholder="Select option..."
                :left-icon="PhArrowLeft"
              />
            </div>
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 300px;">
            <Select
              size="medium"
              :options="selectOptions"
              v-model="interactiveSelect"
              placeholder="Select an option..."
            />
          </div>
          <div class="component-status">Selected: {{ interactiveSelect || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 300px;">
            <Select
              size="medium"
              :options="selectOptions"
              v-model="interactiveSelectWithIcon"
              placeholder="Select an option..."
              :left-icon="PhArrowLeft"
            />
          </div>
          <div class="component-status">Selected: {{ interactiveSelectWithIcon || 'None' }}</div>
        </div>
      </section>

      <!-- Input Component Section -->
      <section v-show="activeSection === 'input'" id="input" class="preview-section">
        <h1>Input</h1>
        <p>Input component with field, optional labels, and message. Supports leading/trailing addons (text or select), left/right icons.</p>
        <p><strong>Figma Node ID:</strong> 13-9678 (Input), 13-9414 (Input Field), 13-9646 (Input Message)</p>

        <h2>Size: Medium</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              label="E-mail"
              label-right="Required"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              v-model="inputValueMedium"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ inputValueMedium || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              v-model="inputValueError"
              placeholder="Placeholder"
              :error="true"
              message="Invalid email address"
              message-type="error"
            />
          </div>
          <div class="component-status">Value: {{ inputValueError || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              :disabled="true"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              leading-addon="+420"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              trailing-addon="USD"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Amount"
              v-model="inputWithCurrency"
              :trailing-addon-select="true"
              :trailing-addon-select-value="selectedCurrency"
              :trailing-addon-select-options="currencyOptions"
              @update:trailingAddonSelectValue="selectedCurrency = $event"
            />
          </div>
          <div class="component-status">Amount: {{ inputWithCurrency || '(empty)' }}, Currency: {{ selectedCurrency || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Phone number"
              v-model="inputWithCountryCode"
              :leading-addon-select="true"
              :leading-addon-select-value="selectedCountryCode"
              :leading-addon-select-options="countryCodeOptions"
              @update:leadingAddonSelectValue="selectedCountryCode = $event"
            />
          </div>
          <div class="component-status">Phone: {{ inputWithCountryCode || '(empty)' }}, Country Code: {{ selectedCountryCode || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Amount"
              v-model="inputWithBothSelects"
              :leading-addon-select="true"
              :leading-addon-select-value="selectedCountryCode2"
              :leading-addon-select-options="countryCodeOptions"
              @update:leadingAddonSelectValue="selectedCountryCode2 = $event"
              :trailing-addon-select="true"
              :trailing-addon-select-value="selectedCurrency2"
              :trailing-addon-select-options="currencyOptions"
              @update:trailingAddonSelectValue="selectedCurrency2 = $event"
            />
          </div>
          <div class="component-status">Amount: {{ inputWithBothSelects || '(empty)' }}, Country: {{ selectedCountryCode2 || 'None' }}, Currency: {{ selectedCurrency2 || 'None' }}</div>
        </div>

        <h2>Size: Small</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 283px;">
            <Input
              size="small"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 283px;">
            <Input
              size="small"
              v-model="inputValueSmall"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ inputValueSmall || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 283px;">
            <Input
              size="small"
              v-model="inputValueSmallError"
              placeholder="Placeholder"
              :error="true"
              message="Invalid email address"
              message-type="error"
            />
          </div>
          <div class="component-status">Value: {{ inputValueSmallError || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 283px;">
            <Input
              size="small"
              placeholder="Placeholder"
              :disabled="true"
            />
          </div>
        </div>

        <h2>Interactive Examples</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              label="E-mail"
              label-right="Required"
              v-model="interactiveInput"
              placeholder="Enter your email"
              message="This is an info message"
              message-type="info"
            />
          </div>
          <div class="component-status">Value: {{ interactiveInput || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              label="Phone"
              v-model="interactiveInputWithAddons"
              placeholder="Phone number"
              leading-addon="+420"
              trailing-addon="USD"
              :left-icon="PhArrowLeft"
            />
          </div>
          <div class="component-status">Value: {{ interactiveInputWithAddons || '(empty)' }}</div>
        </div>
      </section>

      <!-- Textarea Component Section -->
      <section v-show="activeSection === 'textarea'" id="textarea" class="preview-section">
        <h1>Textarea</h1>
        <p>Textarea component with field, optional labels, and character count. Similar to Input but for multi-line text.</p>
        <p><strong>Figma Node ID:</strong> 13-9779 (Textarea), 13-9683 (Textarea Field)</p>

        <div class="component-interactive">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              label="Message"
              label-right="Required"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              v-model="textareaValue"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ textareaValue || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              v-model="textareaValueError"
              placeholder="Placeholder"
              :error="true"
            />
          </div>
          <div class="component-status">Value: {{ textareaValueError || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              placeholder="Placeholder"
              :disabled="true"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              label="Message"
              label-right="Required"
              v-model="textareaWithCount"
              placeholder="Enter your message"
              :max-length="500"
            />
          </div>
          <div class="component-status">Value: {{ textareaWithCount || '(empty)' }}</div>
        </div>
      </section>

      <!-- Notification Badge Component Section -->
      <section v-show="activeSection === 'notification-badge'" id="notification-badge" class="preview-section">
        <h1>Notification Badge</h1>
        <p>Small badge component for displaying notification counts or indicators. Available in three types: simple dot, single number, and multiple digits.</p>
        <p><strong>Figma Node ID:</strong> 16-10265</p>

        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 40px; padding: 20px; background: var(--desys-color-gray-100); border-radius: 8px;">
            <NotificationBadge type="simple" />
            <NotificationBadge type="singleNumber" :value="5" />
            <NotificationBadge type="number" :value="12" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 20px; padding: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>Messages</span>
              <NotificationBadge type="number" :value="99" />
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>Notifications</span>
              <NotificationBadge type="singleNumber" :value="5" />
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>Status</span>
              <NotificationBadge type="simple" />
            </div>
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 20px; padding: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>Large number</span>
              <NotificationBadge type="number" :value="1234" />
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>Zero</span>
              <NotificationBadge type="number" :value="0" />
            </div>
          </div>
        </div>
      </section>

      <!-- Status Component Section -->
      <section v-show="activeSection === 'status'" id="status" class="preview-section">
        <h1>Status</h1>
        <p>Status component for displaying status indicators with colored dots and text. Available in default and prominent variants with four status types.</p>
        <p><strong>Figma Node ID:</strong> 15-10242</p>

        <h2>Default Variant</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
            <Status variant="default" type="success" label="Available" />
            <Status variant="default" type="warning" label="Maintenance" />
            <Status variant="default" type="info" label="Cleaning" />
            <Status variant="default" type="error" label="Occupied" />
          </div>
        </div>

        <h2>Prominent Variant</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
            <Status variant="prominent" type="success" label="Available" />
            <Status variant="prominent" type="warning" label="Maintenance" />
            <Status variant="prominent" type="info" label="Cleaning" />
            <Status variant="prominent" type="error" label="Occupied" />
          </div>
        </div>

        <h2>Use Cases</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span>Room 101:</span>
              <Status variant="default" type="success" label="Available" />
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span>Room 102:</span>
              <Status variant="prominent" type="warning" label="Maintenance" />
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span>Room 103:</span>
              <Status variant="default" type="info" label="Cleaning" />
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span>Room 104:</span>
              <Status variant="prominent" type="error" label="Occupied" />
            </div>
          </div>
        </div>
      </section>

      <!-- Alert Component Section -->
      <section v-show="activeSection === 'alert'" id="alert" class="preview-section">
        <h1>Alert</h1>
        <p>Alert component for displaying important messages with four types: success, warning, error, and info. Supports optional action buttons and close button.</p>
        <p><strong>Figma Node ID:</strong> 16-10369</p>

        <div class="component-interactive">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="success"
              title="Booking successfuly saved"
              description="This is multilne context. This is multilne context. This is multilne context."
              :closable="true"
              @close="handleAlertClose('success')"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </Alert>
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="warning"
              title="Booking successfuly saved"
              description="This is multilne context. This is multilne context. This is multilne context."
              :closable="true"
              @close="handleAlertClose('warning')"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </Alert>
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="error"
              title="Booking successfuly saved"
              description="This is multilne context. This is multilne context. This is multilne context."
              :closable="true"
              @close="handleAlertClose('error')"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </Alert>
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="info"
              title="Booking successfuly saved"
              description="This is multilne context. This is multilne context. This is multilne context."
              :closable="true"
              @close="handleAlertClose('info')"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </Alert>
          </div>
        </div>

        <h2>Without Actions</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="success"
              title="Simple alert"
              description="This alert has no action buttons."
              :closable="true"
              @close="handleAlertClose('simple')"
            />
          </div>
        </div>

        <h2>Without Close Button</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 418px;">
            <Alert
              type="info"
              title="Persistent alert"
              description="This alert cannot be closed."
            />
          </div>
        </div>
      </section>

      <!-- Tabs Component Section -->
      <section v-show="activeSection === 'tabs'" id="tabs" class="preview-section">
        <h1>Tabs Simple</h1>
        <p>Tab navigation component built with Tab Simple components. Supports active, hover, and disabled states.</p>
        <p><strong>Figma Node ID:</strong> 16-10618 (Tabs Simple), 16-10569 (Tab Simple)</p>

        <h2>Tab Simple States</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 0; padding: 20px;">
            <TabSimple :active="true" label="Overview" />
            <TabSimple label="Activity" />
            <TabSimple :disabled="true" label="Settings" />
          </div>
        </div>

        <h2>Tabs Simple</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 630px; padding: 20px;">
            <TabsSimple
              v-model="activeTab"
              :tabs="tabsOptions"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 630px; padding: 20px;">
            <TabsSimple
              v-model="activeTab2"
              :tabs="tabsOptionsWithDisabled"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab2 || 'None' }}</div>
        </div>

        <h2>Tab States</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 0; padding: 20px; border-bottom: 1px solid var(--desys-color-gray-200); padding-left: 16px;">
            <Tab :active="true" label="General pricing" />
            <Tab label="General pricing" />
          </div>
        </div>

        <h2>Tabs</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 843px; padding: 20px;">
            <Tabs
              v-model="activeTab3"
              :tabs="tabsOptions2"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab3 || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="width: 843px; padding: 20px;">
            <Tabs
              v-model="activeTab4"
              :tabs="tabsOptions3"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab4 || 'None' }}</div>
        </div>
      </section>

      <!-- Breadcrumbs Component Section -->
      <section v-show="activeSection === 'breadcrumbs'" id="breadcrumbs" class="preview-section">
        <h1>Breadcrumbs</h1>
        <p>Breadcrumb navigation component built with Breadcrumb components. Shows navigation path with separators.</p>
        <p><strong>Figma Node ID:</strong> 16-10602 (Breadcrumbs), 16-10583 (Breadcrumb)</p>

        <h2>Breadcrumb States</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 8px; padding: 20px;">
            <Breadcrumb label="Products" />
            <Breadcrumb :active="true" label="Dashboard" />
          </div>
        </div>

        <h2>Breadcrumbs</h2>
        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems1" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems2" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--desys-spacing-gutter-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems3" />
          </div>
        </div>
      </section>
    </main>
  </div>

  <!-- Theme Toggle -->
  <button class="theme-toggle" @click="toggleTheme">{{ themeButtonText }}</button>
</template>


<script>
import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue';

export default {
  name: 'PreviewApp',
  components: {
    PhArrowLeft,
    PhArrowRight
  },
  data() {
    return {
      activeSection: 'colors',
      interactiveToggle: false,
      interactiveToggleTitle: false,
      interactiveToggleTitleParagraph: false,
      interactiveCheckbox: false,
      interactiveCheckboxTitle: false,
      interactiveCheckboxTitleParagraph: false,
      interactiveRadio: null,
      interactiveRadioTitle: null,
      interactiveRadioTitleParagraph: null,
      lastClickedButton: null,
      selectValueMedium: 'option1',
      selectValueSmall: 'option1',
      interactiveSelect: null,
      interactiveSelectWithIcon: null,
      selectOptions: [
        { value: 'option1', label: 'Option 1', rightText: '16' },
        { value: 'option2', label: 'Option 2', rightText: '12' },
        { value: 'option3', label: 'Option 3', rightText: '16' },
        { value: 'option4', label: 'Option 4', rightText: '16' },
        { value: 'option5', label: 'Option 5 (Disabled)', rightText: '16', disabled: true }
      ],
      inputValueMedium: 'Filled',
      inputValueSmall: 'Filled',
      inputValueError: 'Option 1',
      inputValueSmallError: 'Option 1',
      interactiveInput: '',
      interactiveInputWithAddons: '',
      inputWithCurrency: '',
      selectedCurrency: 'usd',
      currencyOptions: [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
        { value: 'czk', label: 'CZK' }
      ],
      inputWithCountryCode: '',
      selectedCountryCode: '+420',
      countryCodeOptions: [
        { value: '+420', label: '+420' },
        { value: '+1', label: '+1' },
        { value: '+44', label: '+44' },
        { value: '+49', label: '+49' }
      ],
      inputWithBothSelects: '',
      selectedCountryCode2: '+420',
      selectedCurrency2: 'usd',
      textareaValue: 'Filled',
      textareaValueError: 'Option 1',
      textareaWithCount: '',
      activeTab: 'overview',
      tabsOptions: [
        { value: 'overview', label: 'Overview' },
        { value: 'activity', label: 'Activity' },
        { value: 'settings', label: 'Settings' }
      ],
      activeTab2: 'overview',
      tabsOptionsWithDisabled: [
        { value: 'overview', label: 'Overview' },
        { value: 'activity', label: 'Activity' },
        { value: 'settings', label: 'Settings', disabled: true }
      ],
      activeTab3: 'general',
      tabsOptions2: [
        { value: 'general', label: 'General pricing' },
        { value: 'advanced', label: 'Advanced pricing' },
        { value: 'settings', label: 'Settings' }
      ],
      activeTab4: 'general',
      tabsOptions3: [
        { value: 'general', label: 'General pricing' },
        { value: 'advanced', label: 'Advanced pricing' },
        { value: 'settings', label: 'Settings' },
        { value: 'billing', label: 'Billing' }
      ],
      breadcrumbItems1: [
        { label: 'Products' },
        { label: 'Dashboard' }
      ],
      breadcrumbItems2: [
        { label: 'Products' },
        { label: 'Products' },
        { label: 'Dashboard' }
      ],
      breadcrumbItems3: [
        { label: 'Home' },
        { label: 'Products' },
        { label: 'Category' },
        { label: 'Item' }
      ],
      PhArrowLeft,
      PhArrowRight,
      currentTheme: 'light'
    }
  },
  mounted() {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  },
  computed: {
    themeButtonText() {
      return `Theme: ${this.currentTheme === 'light' ? 'Dark' : 'Light'}`;
    }
  },
  methods: {
    setSection(section) {
      this.activeSection = section;
    },
    handleAlertClose(type) {
      // Handle alert close event
      // In a real app, you might want to hide the alert or handle it differently
    },
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    },
    handleButtonClick(buttonType) {
      this.lastClickedButton = buttonType;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';
</style>
