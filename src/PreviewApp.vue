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
        <li><a href="#empty-state" class="nav-link" :class="{ active: activeSection === 'empty-state' }" @click.prevent="setSection('empty-state')">Empty State</a></li>
        <li><a href="#notification" class="nav-link" :class="{ active: activeSection === 'notification' }" @click.prevent="setSection('notification')">Notification</a></li>
        <li><a href="#big-switch" class="nav-link" :class="{ active: activeSection === 'big-switch' }" @click.prevent="setSection('big-switch')">Big Switch</a></li>
        <li><a href="#small-switch" class="nav-link" :class="{ active: activeSection === 'small-switch' }" @click.prevent="setSection('small-switch')">Small Switch</a></li>
        <li><a href="#card-with-counter" class="nav-link" :class="{ active: activeSection === 'card-with-counter' }" @click.prevent="setSection('card-with-counter')">Card with Counter</a></li>
        <li><a href="#place" class="nav-link" :class="{ active: activeSection === 'place' }" @click.prevent="setSection('place')">Place</a></li>
        <li><a href="#widget" class="nav-link" :class="{ active: activeSection === 'widget' }" @click.prevent="setSection('widget')">Widget</a></li>
        <li><a href="#booking" class="nav-link" :class="{ active: activeSection === 'booking' }" @click.prevent="setSection('booking')">Booking</a></li>
        <li><a href="#week-pricing-day" class="nav-link" :class="{ active: activeSection === 'week-pricing-day' }" @click.prevent="setSection('week-pricing-day')">Week Pricing Day</a></li>
        <li><a href="#navbar" class="nav-link" :class="{ active: activeSection === 'navbar' }" @click.prevent="setSection('navbar')">Navbar</a></li>
        <li><a href="#horizontal-switch" class="nav-link" :class="{ active: activeSection === 'horizontal-switch' }" @click.prevent="setSection('horizontal-switch')">Horizontal Switch</a></li>
        <li><a href="#tooltip" class="nav-link" :class="{ active: activeSection === 'tooltip' }" @click.prevent="setSection('tooltip')">Tooltip</a></li>
        <li><a href="#calendar-day" class="nav-link" :class="{ active: activeSection === 'calendar-day' }" @click.prevent="setSection('calendar-day')">Calendar Day</a></li>
        <li><a href="#booking-in-calendar" class="nav-link" :class="{ active: activeSection === 'booking-in-calendar' }" @click.prevent="setSection('booking-in-calendar')">Booking in Calendar</a></li>
        <li><a href="#calendar" class="nav-link" :class="{ active: activeSection === 'calendar' }" @click.prevent="setSection('calendar')">Calendar</a></li>
        <li><a href="#calendar-datepicker" class="nav-link" :class="{ active: activeSection === 'calendar-datepicker' }" @click.prevent="setSection('calendar-datepicker')">Calendar Datepicker</a></li>
        <li><a href="#table" class="nav-link" :class="{ active: activeSection === 'table' }" @click.prevent="setSection('table')">Table</a></li>
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
              <div class="token-card-value">--marks-color-primary-solid</div>
            </div>
          </div>
        </div>

        <h2>Red Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-red-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 100</div>
              <div class="token-card-value">--marks-color-red-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-red-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 200</div>
              <div class="token-card-value">--marks-color-red-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-red-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Red 300</div>
              <div class="token-card-value">--marks-color-red-300</div>
            </div>
          </div>
        </div>

        <h2>Blue Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-blue-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 100</div>
              <div class="token-card-value">--marks-color-blue-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-blue-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 200</div>
              <div class="token-card-value">--marks-color-blue-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-blue-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Blue 300</div>
              <div class="token-card-value">--marks-color-blue-300</div>
            </div>
          </div>
        </div>

        <h2>Green Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-green-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 100</div>
              <div class="token-card-value">--marks-color-green-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-green-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 200</div>
              <div class="token-card-value">--marks-color-green-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-green-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Green 300</div>
              <div class="token-card-value">--marks-color-green-300</div>
            </div>
          </div>
        </div>

        <h2>Orange Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-orange-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 100</div>
              <div class="token-card-value">--marks-color-orange-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-orange-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 200</div>
              <div class="token-card-value">--marks-color-orange-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-orange-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Orange 300</div>
              <div class="token-card-value">--marks-color-orange-300</div>
            </div>
          </div>
        </div>

        <h2>Gray Scale</h2>
        <div class="token-grid">
          <div class="token-card">
            <div class="color-sample color-sample-gray-100"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 100</div>
              <div class="token-card-value">--marks-color-gray-100</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-150"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 150</div>
              <div class="token-card-value">--marks-color-gray-150</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-200"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 200</div>
              <div class="token-card-value">--marks-color-gray-200</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-300"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 300</div>
              <div class="token-card-value">--marks-color-gray-300</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-350"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 350</div>
              <div class="token-card-value">--marks-color-gray-350</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-400"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 400</div>
              <div class="token-card-value">--marks-color-gray-400</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-gray-500"></div>
            <div class="token-card-header">
              <div class="token-card-name">Gray 500</div>
              <div class="token-card-value">--marks-color-gray-500</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-white"></div>
            <div class="token-card-header">
              <div class="token-card-name">White</div>
              <div class="token-card-value">--marks-color-white</div>
            </div>
          </div>
          <div class="token-card">
            <div class="color-sample color-sample-black"></div>
            <div class="token-card-header">
              <div class="token-card-name">Black</div>
              <div class="token-card-value">--marks-color-black</div>
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
              <div class="token-card-value">--marks-spacing-0</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-4">
              <div class="spacing-sample-label">4px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 4</div>
              <div class="token-card-value">--marks-spacing-4</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-8">
              <div class="spacing-sample-label">8px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 8</div>
              <div class="token-card-value">--marks-spacing-8</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-12">
              <div class="spacing-sample-label">12px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 12</div>
              <div class="token-card-value">--marks-spacing-12</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-16">
              <div class="spacing-sample-label">16px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 16</div>
              <div class="token-card-value">--marks-spacing-16</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-20">
              <div class="spacing-sample-label">20px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 20</div>
              <div class="token-card-value">--marks-spacing-20</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-24">
              <div class="spacing-sample-label">24px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 24</div>
              <div class="token-card-value">--marks-spacing-24</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-28">
              <div class="spacing-sample-label">28px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 28</div>
              <div class="token-card-value">--marks-spacing-28</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-32">
              <div class="spacing-sample-label">32px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 32</div>
              <div class="token-card-value">--marks-spacing-32</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-36">
              <div class="spacing-sample-label">36px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 36</div>
              <div class="token-card-value">--marks-spacing-36</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-40">
              <div class="spacing-sample-label">40px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 40</div>
              <div class="token-card-value">--marks-spacing-40</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-56">
              <div class="spacing-sample-label">56px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 56</div>
              <div class="token-card-value">--marks-spacing-56</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-72">
              <div class="spacing-sample-label">72px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 72</div>
              <div class="token-card-value">--marks-spacing-72</div>
            </div>
          </div>
          <div class="token-card">
            <div class="spacing-sample spacing-sample-80">
              <div class="spacing-sample-label">80px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Gutter 80</div>
              <div class="token-card-value">--marks-spacing-80</div>
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
              <div class="token-card-value">--marks-radius-0</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-8">
              <div class="radius-sample-label">8px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 8</div>
              <div class="token-card-value">--marks-radius-8</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-12">
              <div class="radius-sample-label">12px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 12</div>
              <div class="token-card-value">--marks-radius-12</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-16">
              <div class="radius-sample-label">16px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 16</div>
              <div class="token-card-value">--marks-radius-16</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-24">
              <div class="radius-sample-label">24px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius 24</div>
              <div class="token-card-value">--marks-radius-24</div>
            </div>
          </div>
          <div class="token-card">
            <div class="radius-sample radius-sample-full">
              <div class="radius-sample-label">100px</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Radius Full</div>
              <div class="token-card-value">--marks-radius-full</div>
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
              <div class="marks-h1-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H1 Regular</div>
              <div class="token-card-value">.marks-h1-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h1-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H1 Bold</div>
              <div class="token-card-value">.marks-h1-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Two</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h2-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H2 Regular</div>
              <div class="token-card-value">.marks-h2-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h2-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H2 Bold</div>
              <div class="token-card-value">.marks-h2-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Three</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h3-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H3 Regular</div>
              <div class="token-card-value">.marks-h3-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h3-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H3 Bold</div>
              <div class="token-card-value">.marks-h3-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Four</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h4-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H4 Regular</div>
              <div class="token-card-value">.marks-h4-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h4-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H4 Bold</div>
              <div class="token-card-value">.marks-h4-bold</div>
            </div>
          </div>
        </div>

        <h2>Header Five</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h5-regular typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H5 Regular</div>
              <div class="token-card-value">.marks-h5-regular</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-h5-bold typography-sample-text">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">H5 Bold</div>
              <div class="token-card-value">.marks-h5-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Large</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-lg typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Large</div>
              <div class="token-card-value">.marks-paragraph-lg</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Medium</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-md-multiline typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium Multiline</div>
              <div class="token-card-value">.marks-paragraph-md-multiline</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-md-one-line typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium One Line</div>
              <div class="token-card-value">.marks-paragraph-md-one-line</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-md-bold typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Medium Bold</div>
              <div class="token-card-value">.marks-paragraph-md-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Small</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-sm-multiline typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small Multiline</div>
              <div class="token-card-value">.marks-paragraph-sm-multiline</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-sm-one-line typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small One Line</div>
              <div class="token-card-value">.marks-paragraph-sm-one-line</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-sm-bold typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Small Bold</div>
              <div class="token-card-value">.marks-paragraph-sm-bold</div>
            </div>
          </div>
        </div>

        <h2>Paragraph Extra Small</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-paragraph-xs typography-sample-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Paragraph Extra Small</div>
              <div class="token-card-value">.marks-paragraph-xs</div>
            </div>
          </div>
        </div>

        <h2>Button Typography</h2>
        <div class="token-grid token-grid-single">
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-button-lg typography-sample-text">Button Large Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Large</div>
              <div class="token-card-value">@include marks-typography-button-lg;</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-button-md typography-sample-text">Button Medium Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Medium</div>
              <div class="token-card-value">@include marks-typography-button-md;</div>
            </div>
          </div>
          <div class="token-card">
            <div class="typography-sample">
              <div class="marks-button-sm typography-sample-text">Button Small Text</div>
            </div>
            <div class="token-card-header">
              <div class="token-card-name">Button Small</div>
              <div class="token-card-value">@include marks-typography-button-sm;</div>
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
          <div class="toggle-container" style="display: flex; gap: var(--marks-spacing-16);">
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
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: var(--marks-spacing-12);">
            <RadioWithLabel v-model="interactiveRadioTitle" value="option1" name="interactive-radio-title" title="Option 1" />
            <RadioWithLabel v-model="interactiveRadioTitle" value="option2" name="interactive-radio-title" title="Option 2" />
            <RadioWithLabel v-model="interactiveRadioTitle" value="option3" name="interactive-radio-title" title="Option 3" />
          </div>
          <div class="component-status">Selected: {{ interactiveRadioTitle || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: var(--marks-spacing-12);">
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
          <div class="toggle-container" style="display: flex; gap: var(--marks-spacing-12); flex-wrap: wrap;">
            <ButtonPrimary size="medium" text="Click Me" @click="handleButtonClick('Primary')" />
            <ButtonSecondary size="medium" text="Click Me" @click="handleButtonClick('Secondary')" />
            <ButtonLine size="medium" text="Click Me" @click="handleButtonClick('Line')" />
            <ButtonGhost size="medium" text="Click Me" @click="handleButtonClick('Ghost')" />
          </div>
          <div class="component-status">Last clicked: {{ lastClickedButton || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="display: flex; gap: var(--marks-spacing-12); flex-wrap: wrap;">
            <ButtonPrimary size="medium" text="With Left Icon" :left-icon="PhArrowLeft" @click="handleButtonClick('Primary with icon')" />
            <ButtonPrimary size="medium" text="With Right Icon" :right-icon="PhArrowRight" @click="handleButtonClick('Primary with icon')" />
            <ButtonPrimary size="medium" text="Both Icons" :left-icon="PhArrowLeft" :right-icon="PhArrowRight" @click="handleButtonClick('Primary both icons')" />
          </div>
        </div>
      </section>

      <!-- Select Component Section -->
      <section v-show="activeSection === 'select'" id="select" class="preview-section">
        <h1>Select</h1>
        <p>Select dropdown component with 2 sizes (small, medium), optional left icon, optional flag (e.g. libs/country-flags), and multiple states.</p>
        <p><strong>Figma Node ID:</strong> 13-9164</p>

        <div class="select-preview-columns">
          <div class="select-preview-column">
            <h2>Size: Small</h2>
            <div class="select-preview-states">
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
              <div class="component-card">
                <div class="component-label">With Flag</div>
                <div class="toggle-container" style="width: 226px;">
                  <Select
                    size="small"
                    :options="selectOptions"
                    placeholder="Select option..."
                    :flag="flagCzUrl"
                    flag-alt="Czech Republic"
                  />
                </div>
              </div>
              <div class="component-card">
                <div class="component-label">With Left Icon + Flag</div>
                <div class="toggle-container" style="width: 226px;">
                  <Select
                    size="small"
                    :options="selectOptions"
                    v-model="selectValueSmall"
                    placeholder="Select option..."
                    :left-icon="PhArrowLeft"
                    :flag="flagCzUrl"
                    flag-alt="Czech Republic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="select-preview-column">
            <h2>Size: Medium</h2>
            <div class="select-preview-states">
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
              <div class="component-card">
                <div class="component-label">With Flag</div>
                <div class="toggle-container" style="width: 300px;">
                  <Select
                    size="medium"
                    :options="selectOptions"
                    placeholder="Select option..."
                    :flag="flagCzUrl"
                    flag-alt="Czech Republic"
                  />
                </div>
              </div>
              <div class="component-card">
                <div class="component-label">With Left Icon + Flag</div>
                <div class="toggle-container" style="width: 300px;">
                  <Select
                    size="medium"
                    :options="selectOptions"
                    v-model="selectValueMedium"
                    placeholder="Select option..."
                    :left-icon="PhArrowLeft"
                    :flag="flagCzUrl"
                    flag-alt="Czech Republic"
                  />
                </div>
              </div>
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 300px;">
            <Select
              size="medium"
              :options="selectOptions"
              v-model="interactiveSelectWithFlag"
              placeholder="Select an option..."
              :flag="flagCzUrl"
              flag-alt="Czech Republic"
            />
          </div>
          <div class="component-status">Selected: {{ interactiveSelectWithFlag || 'None' }}</div>
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              label="E-mail"
              label-right="Required"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              v-model="inputValueMedium"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ inputValueMedium || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              :disabled="true"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              leading-addon="+420"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 375px;">
            <Input
              size="medium"
              placeholder="Placeholder"
              trailing-addon="USD"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 283px;">
            <Input
              size="small"
              v-model="inputValueSmall"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ inputValueSmall || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              label="Message"
              label-right="Required"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              v-model="textareaValue"
              placeholder="Placeholder"
            />
          </div>
          <div class="component-status">Value: {{ textareaValue || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              v-model="textareaValueError"
              placeholder="Placeholder"
              :error="true"
            />
          </div>
          <div class="component-status">Value: {{ textareaValueError || '(empty)' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 391px;">
            <Textarea
              placeholder="Placeholder"
              :disabled="true"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
          <div class="toggle-container" style="display: flex; align-items: center; gap: 40px; padding: 20px; background: var(--marks-color-gray-100); border-radius: 8px;">
            <NotificationBadge type="simple" />
            <NotificationBadge type="singleNumber" :value="5" />
            <NotificationBadge type="number" :value="12" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
            <Status variant="prominent" type="success" label="Available" />
            <Status variant="prominent" type="warning" label="Maintenance" />
            <Status variant="prominent" type="info" label="Cleaning" />
            <Status variant="prominent" type="error" label="Occupied" />
          </div>
        </div>

        <h2>Use Cases</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 630px; padding: 20px;">
            <TabsSimple
              v-model="activeTab"
              :tabs="tabsOptions"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 630px; padding: 20px;">
            <TabsSimple
              v-model="activeTab2"
              :tabs="tabsOptionsWithDisabled"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab2 || 'None' }}</div>
        </div>

        <h2>Tab States</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="display: flex; align-items: center; gap: 0; padding: 20px; border-bottom: 1px solid var(--marks-color-gray-200); padding-left: 16px;">
            <Tab :active="true" label="General pricing" />
            <Tab label="General pricing" />
          </div>
        </div>

        <h2>Tabs</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 843px; padding: 20px;">
            <Tabs
              v-model="activeTab3"
              :tabs="tabsOptions2"
            />
          </div>
          <div class="component-status">Active tab: {{ activeTab3 || 'None' }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
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
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems1" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems2" />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="padding: 20px;">
            <Breadcrumbs :items="breadcrumbItems3" />
          </div>
        </div>
      </section>

      <!-- Empty State Component Section -->
      <section v-show="activeSection === 'empty-state'" id="empty-state" class="preview-section">
        <h1>Empty State</h1>
        <p>Empty state component for displaying empty states with icon, title, description, and optional action button.</p>
        <p><strong>Figma Node ID:</strong> 16-10695</p>

        <div class="component-interactive">
          <div class="toggle-container" style="width: 342px; padding: 20px;">
            <EmptyState
              title="No messages yet"
              description="When you receive messages, they'll appear here"
              button-text="Primary Button"
              @action="handleEmptyStateAction"
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 342px; padding: 20px;">
            <EmptyState
              :icon="PhWarningCircle"
              title="No items found"
              description="Try adjusting your search or filters to find what you're looking for."
            >
              <template #action>
                <ButtonPrimary size="medium" text="Clear Filters" />
              </template>
            </EmptyState>
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 342px; padding: 20px;">
            <EmptyState
              title="All caught up!"
              description="You have no pending tasks at the moment."
            />
          </div>
        </div>
      </section>

      <!-- Notification Component Section -->
      <section v-show="activeSection === 'notification'" id="notification" class="preview-section">
        <h1>Notification</h1>
        <p>Notification message and dialog components for displaying notifications with actions.</p>
        <p><strong>Figma Node ID:</strong> 16-11051 (Notification Dialog), 16-10728 (Notification Message)</p>

        <h2>Notification Message - Single</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 529px; padding: 20px;">
            <NotificationMessage
              type="single"
              title="Cute Turtle is generated"
              timestamp="1h ago"
              main-text="Matte texture - UI8 Style"
              description="Prompt: Create 3D character dancing"
              :new="true"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </NotificationMessage>
          </div>
        </div>

        <h2>Notification Message - In List</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 529px; padding: 20px; background: var(--marks-color-white); border-radius: var(--marks-radius-24); box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);">
            <NotificationMessage
              type="inList"
              title="Cute Turtle is generated"
              timestamp="1h ago"
              main-text="Matte texture - UI8 Style"
              description="Prompt: Create 3D character dancing"
              :new="true"
            >
              <template #actions>
                <ButtonPrimary size="small" text="Primary Button" :left-icon="PhArrowLeft" />
                <ButtonSecondary size="small" text="Secondary Button" />
              </template>
            </NotificationMessage>
          </div>
        </div>

        <h2>Notification Dialog</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 529px; padding: 20px;">
            <NotificationDialog
              v-model:filter="notificationFilter"
              :messages="notificationMessages"
              @action="handleNotificationAction"
            />
          </div>
          <div class="component-status">Filter: {{ notificationFilter }}</div>
        </div>
      </section>

      <!-- Big Switch Component Section -->
      <section v-show="activeSection === 'big-switch'" id="big-switch" class="preview-section">
        <h1>Big Switch</h1>
        <p>Big switch component with radio button functionality. Used for selecting a single option from multiple choices.</p>
        <p><strong>Figma Node ID:</strong> 4-877</p>

        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <BigSwitch
              v-model="bigSwitchValue"
              value="whole-place"
              title="Whole place"
              description="Lorem ipsum dolor sit amet, consectetur."
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <BigSwitch
              v-model="bigSwitchValue"
              value="private-room"
              title="Private room"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <BigSwitch
              v-model="bigSwitchValue"
              value="shared-room"
              title="Shared room"
              description="Lorem ipsum dolor sit amet, consectetur."
              :disabled="true"
            />
          </div>
        </div>

        <h2>Interactive Example</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
            <BigSwitch
              v-model="bigSwitchValue2"
              value="option1"
              title="Option 1"
              description="This is the first option with a longer description text."
            />
            <BigSwitch
              v-model="bigSwitchValue2"
              value="option2"
              title="Option 2"
              description="This is the second option with different content."
            />
            <BigSwitch
              v-model="bigSwitchValue2"
              value="option3"
              title="Option 3"
              description="This is the third option."
            />
          </div>
          <div class="component-status">Selected: {{ bigSwitchValue2 || 'None' }}</div>
        </div>
      </section>

      <!-- Small Switch Section -->
      <section v-show="activeSection === 'small-switch'" id="small-switch" class="preview-section">
        <h1>Small Switch</h1>
        <p>Small switch component with radio button functionality. Used for selecting a single option from multiple choices in a compact format.</p>
        <p><strong>Figma Node ID:</strong> 20-12761 (Small Switch), 20-12652 (Small Switch Option)</p>

        <h2>Variations</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <SmallSwitch
              v-model="smallSwitchValue"
              :options="smallSwitchOptions"
            />
          </div>
          <div class="component-status">Selected: {{ smallSwitchValue || 'None' }}</div>
        </div>

        <h2>Interactive Example</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <SmallSwitch
              v-model="smallSwitchValue2"
              :options="smallSwitchOptions2"
            />
          </div>
          <div class="component-status">Selected: {{ smallSwitchValue2 || 'None' }}</div>
        </div>
      </section>

      <!-- Card with Counter Section -->
      <section v-show="activeSection === 'card-with-counter'" id="card-with-counter" class="preview-section">
        <h1>Card with Counter</h1>
        <p>Counter component with increment/decrement buttons using line buttons. Selected state when count is greater than 0.</p>
        <p><strong>Figma Node ID:</strong> 5-4894</p>

        <h2>Variations</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 250px; padding: 20px;">
            <CardWithCounter
              v-model="cardWithCounterValue"
              :icon="PhBed"
              title="Double bed"
              description="Lorem ipsum dolor sit"
            />
          </div>
          <div class="component-status">Count: {{ cardWithCounterValue }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 250px; padding: 20px;">
            <CardWithCounter
              v-model="cardWithCounterValue2"
              :icon="PhBed"
              title="Single bed"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div class="component-status">Count: {{ cardWithCounterValue2 }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 250px; padding: 20px;">
            <CardWithCounter
              v-model="cardWithCounterValue3"
              :icon="PhBed"
              title="Sofa bed"
              description="Lorem ipsum dolor sit"
              :disabled="true"
            />
          </div>
          <div class="component-status">Count: {{ cardWithCounterValue3 }} (disabled)</div>
        </div>
      </section>

      <!-- Place Section -->
      <section v-show="activeSection === 'place'" id="place" class="preview-section">
        <h1>Place</h1>
        <p>Place component with responsive desktop and mobile layouts. Includes optional photo, status component, and action buttons with dropdown menu.</p>
        <p><strong>Figma Node ID:</strong> 18-11814</p>

        <h2>Desktop Layout</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 870px; padding: 20px;">
            <Place
              customer-name="Hanusova Chalupa"
              people-count="8 people"
              place-type="Whole place"
              price-per-night="from 5 000 CZK / night"
              season="Summer season"
              pricing-basis="Per night based"
              status-type="success"
              status-label="Synced"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Sync availability</button>
                <button class="marks-dropdown__item">Remove place</button>
              </template>
            </Place>
          </div>
        </div>

        <h2>Mobile Layout</h2>
        <p>Resize the browser window to see the mobile layout (below 830px).</p>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <Place
              customer-name="Hanusova Chalupa"
              people-count="8 people"
              place-type="Whole place"
              price-per-night="from 5 000 CZK / night"
              season="Summer season"
              pricing-basis="Per night based"
              status-type="info"
              status-label="Synced"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Sync availability</button>
                <button class="marks-dropdown__item">Remove place</button>
              </template>
            </Place>
          </div>
        </div>
      </section>

      <!-- Widget Section -->
      <section v-show="activeSection === 'widget'" id="widget" class="preview-section">
        <h1>Widget</h1>
        <p>Widget component with responsive desktop and mobile layouts. Includes widget information and action buttons with dropdown menu.</p>
        <p><strong>Figma Node ID:</strong> 18-12114</p>

        <h2>Desktop Layout</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 870px; padding: 20px;">
            <Widget
              widget-name="My first widget"
              subtitle="Hanusova Chalupa"
              duration="3 months"
              duration-subtitle="Prices in tooltips"
              language="Danish"
              language-code="DNK"
              theme="Light mode"
              theme-subtitle="Transparent"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Copy code</button>
                <button class="marks-dropdown__item">Delete widget</button>
              </template>
            </Widget>
          </div>
        </div>

        <h2>Mobile Layout</h2>
        <p>Resize the browser window to see the mobile layout (below 830px).</p>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <Widget
              widget-name="My first widget"
              subtitle="Hanusova Chalupa"
              duration="3 months"
              duration-subtitle="Prices in tooltips"
              language="Danish"
              language-code="DNK"
              theme="Light mode"
              theme-subtitle="Transparent"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Copy code</button>
                <button class="marks-dropdown__item">Delete widget</button>
              </template>
            </Widget>
          </div>
        </div>
      </section>

      <!-- Booking Section -->
      <section v-show="activeSection === 'booking'" id="booking" class="preview-section">
        <h1>Booking</h1>
        <p>Booking component with responsive desktop, mobile, and minimal layouts. Includes booking information, status badges, and action buttons with dropdown menu.</p>
        <p><strong>Figma Node ID:</strong> 17-11441</p>

        <h2>Desktop Layout</h2>
        <div class="component-interactive">
          <div class="toggle-container" style="width: 100%; max-width: 870px; padding: 20px;">
            <Booking
              v-model="bookingStatus"
              customer-name="Jeremy Clarcson"
              people-count="8 people"
              start-date-short="Čer 28"
              end-date-short="Čer 28"
              start-date-long="Červen 28, 2026"
              end-date-long="Červen 28, 2026"
              nights="4"
              price="5 000 CZK"
              deposit="0 CZK"
              badge-label="AIRBNB"
              badge-color="#fd3860"
              status-type="info"
              status-label="Confirmed"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Add payment</button>
                <button class="marks-dropdown__item">Remove booking</button>
              </template>
            </Booking>
          </div>
        </div>

        <h2>Mobile Layout</h2>
        <p>Resize the browser window to see the mobile layout (below 830px).</p>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <Booking
              v-model="bookingStatus"
              customer-name="Jeremy Clarcson"
              people-count="8 people"
              start-date-short="Čer 28"
              end-date-short="Čer 28"
              start-date-long="Červen 28, 2026"
              end-date-long="Červen 28, 2026"
              nights="4"
              price="5 000 CZK"
              deposit="0 CZK"
              badge-label="AIRBNB"
              badge-color="#fd3860"
              status-type="info"
              status-label="Confirmed"
            >
              <template #dropdown-actions>
                <button class="marks-dropdown__item">Add payment</button>
                <button class="marks-dropdown__item">Remove booking</button>
              </template>
            </Booking>
          </div>
        </div>

        <h2>Minimal Layout</h2>
        <p>Compact view for special use cases.</p>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div class="toggle-container" style="width: 100%; max-width: 400px; padding: 20px;">
            <Booking
              :minimal="true"
              customer-name="Jeremy Clarcson"
              people-count="8"
              start-date-short="Čer 28"
              end-date-short="Čer 28"
              start-date-long="Červen 28, 2026"
              end-date-long="Červen 28, 2026"
              nights="4"
              price="5 000 CZK"
              deposit="0 CZK"
              badge-label="AIRBNB"
              badge-color="#fd3860"
              status-type="info"
              status-label="Confirmed"
            />
          </div>
        </div>
      </section>

      <!-- Week Pricing Day Section -->
      <section v-show="activeSection === 'week-pricing-day'" id="week-pricing-day" class="preview-section">
        <h1>Week Pricing Day</h1>
        <p>Component for setting daily pricing in a week view. Supports vertical and horizontal layouts with default and filled states.</p>
        <p><strong>Figma Node ID:</strong> 20-12795</p>

        <h2>Vertical Type</h2>
        <div class="component-interactive">
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <WeekPricingDay
              v-model="weekPricingDay1"
              day-label="Tue"
              type="vertical"
            />
            <WeekPricingDay
              v-model="weekPricingDay2"
              day-label="Wed"
              type="vertical"
            />
          </div>
          <div class="component-status">Values: {{ weekPricingDay1 }}, {{ weekPricingDay2 }}</div>
        </div>

        <h2>Horizontal Type</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
            <WeekPricingDay
              v-model="weekPricingDay3"
              day-label="Tuesday"
              type="horizontal"
            />
            <WeekPricingDay
              v-model="weekPricingDay4"
              day-label="Wednesday"
              type="horizontal"
            />
          </div>
          <div class="component-status">Values: {{ weekPricingDay3 }}, {{ weekPricingDay4 }}</div>
        </div>
      </section>

      <!-- Navbar Section -->
      <section v-show="activeSection === 'navbar'" id="navbar" class="preview-section">
        <h1>Navbar</h1>
        <p>Sidebar navigation component with sections and navigation items.</p>
        <p><strong>Figma Node ID:</strong> Navbar Side: 72-19506, Navbar Item: 72-19031</p>

        <h2>Navbar Item</h2>
        <div class="component-interactive">
          <div style="background-color: #000; padding: 20px; border-radius: 12px; max-width: 300px;">
            <NavbarItem
              :icon="PhCalendar"
              label="Calendar"
              :active="false"
            />
            <div style="margin-top: 8px;">
              <NavbarItem
                :icon="PhHouse"
                label="Places"
                :active="false"
              />
            </div>
            <div style="margin-top: 8px;">
              <NavbarItem
                :icon="PhCalendar"
                label="Calendar"
                :active="true"
              />
            </div>
          </div>
        </div>

        <h2>Navbar Side</h2>
        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <NavbarSide
            :sections="navbarSections"
            :bottom-items="navbarBottomItems"
            v-model="navbarActiveItem"
            :theme="currentTheme"
          />
        </div>
      </section>

      <!-- Horizontal Switch Section -->
      <section v-show="activeSection === 'horizontal-switch'" id="horizontal-switch" class="preview-section">
        <h1>Horizontal Switch</h1>
        <p>Button group component with primary (active) and ghost (inactive) buttons for switching between options.</p>
        <p><strong>Figma Node ID:</strong> 73-19596</p>

        <h2>Variations</h2>
        <div class="component-interactive">
          <HorizontalSwitch
            v-model="horizontalSwitchValue"
            :options="horizontalSwitchOptions"
          />
          <div class="component-status">Selected: {{ horizontalSwitchValue }}</div>
        </div>

        <div class="component-interactive" style="margin-top: var(--marks-spacing-24);">
          <HorizontalSwitch
            v-model="horizontalSwitchValue2"
            :options="horizontalSwitchOptions2"
          />
          <div class="component-status">Selected: {{ horizontalSwitchValue2 }}</div>
        </div>
      </section>

      <!-- Tooltip Section -->
      <section v-show="activeSection === 'tooltip'" id="tooltip" class="preview-section">
        <h1>Tooltip</h1>
        <p>Hover-triggered tooltip component with dynamic triangle positioning. The triangle adjusts to left, right, or center based on available viewport space.</p>
        <p><strong>Figma Node ID:</strong> 74-19878</p>

        <h2>Basic Usage</h2>
        <div class="component-interactive">
          <Tooltip
            upper-left="Marta Kaufmann"
            upper-right="347 USD"
            bottom-left="10 people"
            bottom-right="Airbnb"
          >
            <template #trigger>
              <ButtonPrimary size="medium" text="Hover me" />
            </template>
          </Tooltip>
        </div>

        <h2>Positioning Examples</h2>
        <div class="component-interactive" style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: space-between;">
          <Tooltip
            upper-left="Left edge"
            upper-right="Test"
            bottom-left="Tooltip"
            bottom-right="Example"
          >
            <template #trigger>
              <ButtonSecondary size="small" text="Left edge" />
            </template>
          </Tooltip>

          <Tooltip
            upper-left="Center"
            upper-right="Test"
            bottom-left="Tooltip"
            bottom-right="Example"
          >
            <template #trigger>
              <ButtonSecondary size="small" text="Center" />
            </template>
          </Tooltip>

          <Tooltip
            upper-left="Right edge"
            upper-right="Test"
            bottom-left="Tooltip"
            bottom-right="Example"
          >
            <template #trigger>
              <ButtonSecondary size="small" text="Right edge" />
            </template>
          </Tooltip>
        </div>

        <h2>With Different Content</h2>
        <div class="component-interactive">
          <Tooltip
            upper-left="John Doe"
            upper-right="1,250 USD"
            bottom-left="5 people"
            bottom-right="Booking.com"
          >
            <template #trigger>
              <Status type="success" label="Confirmed" />
            </template>
          </Tooltip>
        </div>
      </section>

      <!-- Calendar Day Section -->
      <section v-show="activeSection === 'calendar-day'" id="calendar-day" class="preview-section">
        <h1>Calendar Day</h1>
        <p>Calendar day component with month and year variants, multiple states for different day conditions.</p>
        <p><strong>Figma Node ID:</strong> 82-19906</p>

        <h2>Month View Variants</h2>
        <div class="component-interactive" style="display: flex; flex-wrap: wrap; gap: 16px;">
          <CalendarDay variant="month" :day-number="1" price="99.00" currency="CZK" />
          <CalendarDay variant="month" :day-number="1" price="99.00" currency="CZK" :active="true" />
          <CalendarDay variant="month" :day-number="1" price="99.00" currency="CZK" :not-active="true" />
          <CalendarDay variant="month" :day-number="1" :not-available="true" />
          <CalendarDay variant="month" :day-number="1" :booked="true" />
        </div>
        <p style="margin-top: 8px; color: var(--marks-color-gray-400); font-size: 13px;">Hover over any day to see the hover state</p>

        <h2>Year View Variants</h2>
        <div class="component-interactive" style="display: flex; flex-wrap: wrap; gap: 16px;">
          <CalendarDay variant="year" :day-number="1" price="3900" />
          <CalendarDay variant="year" :day-number="1" price="99.00" :active="true" />
          <CalendarDay variant="year" :day-number="1" price="99.00" :not-active="true" />
          <CalendarDay variant="year" :day-number="1" :not-available="true" />
          <CalendarDay variant="year" :day-number="1" :booked="true" />
        </div>
        <p style="margin-top: 8px; color: var(--marks-color-gray-400); font-size: 13px;">Hover over any day to see the hover state</p>
      </section>

      <!-- Booking in Calendar Section -->
      <section v-show="activeSection === 'booking-in-calendar'" id="booking-in-calendar" class="preview-section">
        <h1>Booking in Calendar</h1>
        <p>Booking component for displaying within calendar cells. Supports full width, start (left), and end (right) types for both month and year views.</p>
        <p><strong>Figma Node ID:</strong> 82-20305</p>
        
        <h2>Month View</h2>
        <div class="component-interactive" style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
          <div style="width: 100%; max-width: 600px;">
            <h3>Default (Full Width)</h3>
            <BookingInCalendar
              variant="month"
              type="default"
              customer-name="Jeremy Clarcson"
              pax="8 pax"
              source="AIRBNB"
              price="5 000 CZK"
              status-badge-text="J"
              status-badge-color="#fd3860"
              source-badge-color="#fd3860"
            />
          </div>
          <div style="width: 100%; max-width: 400px;">
            <h3>Start (Left Only)</h3>
            <BookingInCalendar
              variant="month"
              type="start"
              customer-name="Jeremy Clarcson"
              pax="8 pax"
              status-badge-text="J"
              status-badge-color="#fd3860"
            />
          </div>
          <div style="width: 100%; max-width: 300px; display: flex; justify-content: flex-end;">
            <div>
              <h3>End (Right Only)</h3>
              <BookingInCalendar
                variant="month"
                type="end"
                source="AIRBNB"
                price="5 000 CZK"
                source-badge-color="#fd3860"
              />
            </div>
          </div>
        </div>

        <h2>Year View</h2>
        <div class="component-interactive" style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
          <div style="width: 100%; max-width: 600px;">
            <h3>Default (Full Width)</h3>
            <BookingInCalendar
              variant="year"
              type="default"
              status-badge-text="J"
              status-badge-color="#fd3860"
            />
          </div>
          <div style="width: 100%; max-width: 400px;">
            <h3>Start (Left Only)</h3>
            <BookingInCalendar
              variant="year"
              type="start"
              status-badge-text="J"
              status-badge-color="#fd3860"
            />
          </div>
          <div style="width: 100%; max-width: 300px; display: flex; justify-content: flex-end;">
            <div>
              <h3>End (Right Only)</h3>
              <BookingInCalendar
                variant="year"
                type="end"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Calendar Section -->
      <section v-show="activeSection === 'calendar'" id="calendar" class="preview-section">
        <h1>Calendar</h1>
        <p>Month view calendar component built from CalendarDay components. Displays a full month calendar grid.</p>
        <p><strong>Figma Node ID:</strong> 82-20079</p>
        
        <h2>Month View</h2>
        <div class="component-interactive" style="width: 100%; max-width: 870px;">
          <Calendar
            variant="month"
            :days="calendarDays"
            @day-click="handleCalendarDayClick"
          />
        </div>
      </section>

      <!-- Calendar Datepicker Section -->
      <section v-show="activeSection === 'calendar-datepicker'" id="calendar-datepicker" class="preview-section">
        <h1>Calendar Datepicker</h1>
        <p>Compact calendar component with month navigation and date selection functionality. Uses CalendarDay components with year variant.</p>
        <p><strong>Figma Node ID:</strong> 82-20485</p>
        
        <h2>Basic Usage</h2>
        <div class="component-interactive" style="width: 100%; max-width: 400px;">
          <CalendarDatepicker
            v-model="selectedDate"
            @change="handleDateChange"
          />
          <div class="component-status" style="margin-top: var(--marks-spacing-16);">
            Selected date: {{ selectedDate ? selectedDate.toLocaleDateString() : 'None' }}
          </div>
        </div>
      </section>

      <!-- Table Component Section -->
      <section v-show="activeSection === 'table'" id="table" class="preview-section">
        <h1>Table</h1>
        <p>Card-style data table with optional header (title, supporting text, actions), sortable column headers, and rows. Composes Checkbox, ButtonGhost, ButtonSecondary, ButtonPrimary, and Status.</p>
        
        <h2>With header and actions</h2>
        <div class="component-interactive" style="width: 100%; overflow: auto;">
          <Table
            v-model="tableSelectedRows"
            header-title="Headline"
            header-supporting-text="A descriptive body text comes here"
            :columns="tableColumns"
            :rows="tableRows"
            selectable
            @row-action="handleTableRowAction"
          >
            <template #header-actions>
              <ButtonGhost size="medium" text="Delete" :left-icon="PhTrash" />
              <ButtonGhost size="medium" text="Filter" :left-icon="PhFunnelSimple" />
              <ButtonSecondary size="medium" text="Export" :left-icon="PhDownloadSimple" />
              <ButtonPrimary size="medium" text="Add new" :left-icon="PhPlus" />
            </template>
            <template #cell-col2="{ row }">
              <div class="marks-table__cell-with-action">
                <span class="marks-table__cell-with-action-text">
                  {{ row.col2 }}
                </span>
                <ButtonSecondary
                  size="small"
                  text="Copy"
                  class="marks-table__cell-with-action-button"
                />
              </div>
            </template>
          </Table>
          <div class="component-status" style="margin-top: var(--marks-spacing-16);">
            Selected rows: {{ tableSelectedRows.length ? tableSelectedRows.join(', ') : 'None' }}
          </div>
        </div>
      </section>

    </main>
  </div>

  <!-- Theme Toggle -->
  <button class="theme-toggle" @click="toggleTheme">{{ themeButtonText }}</button>
</template>


<script>
import { markRaw } from 'vue';
import { PhArrowLeft, PhArrowRight, PhWarningCircle, PhBed, PhCalendar, PhHouse, PhBookOpen, PhAppWindow, PhGear, PhChatCircle, PhSignOut, PhTrash, PhFunnelSimple, PhDownloadSimple, PhPlus } from '@phosphor-icons/vue';

export default {
  name: 'PreviewApp',
  components: {
    PhArrowLeft,
    PhArrowRight,
    PhWarningCircle,
    PhBed,
    PhCalendar,
    PhHouse,
    PhBookOpen,
    PhAppWindow,
    PhGear,
    PhChatCircle,
    PhSignOut,
    PhTrash,
    PhFunnelSimple,
    PhDownloadSimple,
    PhPlus
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
      interactiveSelectWithFlag: null,
      flagCzUrl: new URL('../libs/country-flags/cz.svg', import.meta.url).href,
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
      notificationFilter: 'all',
      notificationMessages: [
        {
          title: 'Cute Turtle is generated',
          timestamp: '1h ago',
          mainText: 'Matte texture - UI8 Style',
          description: 'Prompt: Create 3D character dancing',
          new: true
        },
        {
          title: 'Cute Turtle is generated',
          timestamp: '2h ago',
          mainText: 'Matte texture - UI8 Style',
          description: 'Prompt: Create 3D character dancing',
          new: true,
          actions: {
            primary: { text: 'Primary Button', leftIcon: markRaw(PhArrowLeft) },
            secondary: { text: 'Secondary Button' }
          }
        },
        {
          title: 'Cute Turtle is generated',
          timestamp: '3h ago',
          mainText: 'Matte texture - UI8 Style',
          description: 'Prompt: Create 3D character dancing',
          new: false
        },
        {
          title: 'Cute Turtle is generated',
          timestamp: '4h ago',
          mainText: 'Matte texture - UI8 Style',
          description: 'Prompt: Create 3D character dancing',
          new: false
        }
      ],
      bigSwitchValue: null,
      bigSwitchValue2: 'option1',
      smallSwitchValue: null,
      smallSwitchValue2: 'whole-place',
      smallSwitchOptions: [
        {
          value: 'whole-place',
          title: 'Whole place',
          description: 'Lorem ipsum dolor sit amet, consectetur.'
        },
        {
          value: 'private-room',
          title: 'Private room',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          value: 'shared-room',
          title: 'Shared room',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
          disabled: true
        }
      ],
      smallSwitchOptions2: [
        {
          value: 'whole-place',
          title: 'Whole place',
          description: 'This is the first option with a longer description text.'
        },
        {
          value: 'private-room',
          title: 'Private room',
          description: 'This is the second option.'
        },
        {
          value: 'shared-room',
          title: 'Shared room',
          description: 'This is the third option.'
        }
      ],
      cardWithCounterValue: 0,
      cardWithCounterValue2: 2,
      cardWithCounterValue3: 0,
      bookingStatus: 'Confirmed',
      weekPricingDay1: null,
      weekPricingDay2: 9999.00,
      weekPricingDay3: null,
      weekPricingDay4: 9999.00,
      navbarActiveItem: 'calendar',
      navbarSections: [
        {
          label: 'Your setup',
          items: [
            { icon: markRaw(PhCalendar), label: 'Calendar', value: 'calendar' },
            { icon: markRaw(PhHouse), label: 'Places', value: 'places' },
            { icon: markRaw(PhBookOpen), label: 'Bookings', value: 'bookings' }
          ]
        },
        {
          label: 'Your setup',
          items: [
            { icon: markRaw(PhAppWindow), label: 'Widgets', value: 'widgets' }
          ]
        },
        {
          label: 'Your setup',
          items: [
            { icon: markRaw(PhGear), label: 'Settings', value: 'settings' }
          ]
        }
      ],
      navbarBottomItems: [
        { icon: markRaw(PhChatCircle), label: 'Feedback', value: 'feedback' },
        { icon: markRaw(PhSignOut), label: 'Log out', value: 'logout' }
      ],
      horizontalSwitchValue: 'month',
      horizontalSwitchOptions: [
        { label: 'Month view', value: 'month' },
        { label: 'Year view', value: 'year' },
        { label: 'All time', value: 'all' }
      ],
      horizontalSwitchValue2: 'day',
      horizontalSwitchOptions2: [
        { label: 'Day view', value: 'day' },
        { label: 'Week view', value: 'week' },
        { label: 'Month view', value: 'month' }
      ],
      // Icon components used as props in preview – keep them non-reactive
      PhArrowLeft: markRaw(PhArrowLeft),
      PhArrowRight: markRaw(PhArrowRight),
      PhBed: markRaw(PhBed),
      PhCalendar: markRaw(PhCalendar),
      PhHouse: markRaw(PhHouse),
      PhBookOpen: markRaw(PhBookOpen),
      PhAppWindow: markRaw(PhAppWindow),
      PhGear: markRaw(PhGear),
      PhChatCircle: markRaw(PhChatCircle),
      PhSignOut: markRaw(PhSignOut),
      PhWarningCircle: markRaw(PhWarningCircle),
      PhTrash: markRaw(PhTrash),
      PhFunnelSimple: markRaw(PhFunnelSimple),
      PhDownloadSimple: markRaw(PhDownloadSimple),
      PhPlus: markRaw(PhPlus),
      currentTheme: 'light',
      calendarDays: [
        // Week 1
        { dayNumber: 29, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 30, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 31, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 1, price: '99.00', currency: 'CZK' },
        { dayNumber: 2, price: '99.00', currency: 'CZK' },
        { dayNumber: 3, price: '99.00', currency: 'CZK' },
        { dayNumber: 4, price: '99.00', currency: 'CZK' },
        // Week 2
        { dayNumber: 5, notAvailable: true },
        { dayNumber: 6, notAvailable: true },
        { dayNumber: 7, notAvailable: true },
        { dayNumber: 8, price: '99.00', currency: 'CZK' },
        { dayNumber: 'Today', price: '99.00', currency: 'CZK' },
        { dayNumber: 10, price: '99.00', currency: 'CZK' },
        { dayNumber: 11, price: '99.00', currency: 'CZK' },
        // Week 3
        { dayNumber: 12, notAvailable: true },
        { dayNumber: 13, notAvailable: true },
        { dayNumber: 14, notAvailable: true },
        { dayNumber: 15, bookings: [{
          type: 'default',
          startDayIndex: 17, // Day 15 is at index 17 (0-based: 29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
          spanDays: 4, // Spans days 15-18
          customerName: 'Jeremy Clarcson',
          pax: '8 pax',
          source: 'AIRBNB',
          price: '5 000 CZK',
          statusBadgeText: 'J',
          statusBadgeColor: '#fd3860',
          sourceBadgeColor: '#fd3860',
          backgroundColor: '#ffe4e9'
        }] },
        { dayNumber: 16 },
        { dayNumber: 17 },
        { dayNumber: 18 },
        // Week 4
        { dayNumber: 19, notAvailable: true },
        { dayNumber: 20, notAvailable: true },
        { dayNumber: 21, notAvailable: true },
        { dayNumber: 22, price: '99.00', currency: 'CZK' },
        { dayNumber: 23, price: '99.00', currency: 'CZK', bookings: [{
          type: 'start',
          startDayIndex: 25, // Day 23 is at index 25
          spanDays: 3, // Spans 3 days (23, 24, 25)
          customerName: 'Jeremy Clarcson',
          pax: '8 pax',
          statusBadgeText: 'J',
          statusBadgeColor: '#fd3860',
          backgroundColor: '#ffe4e9'
        }] },
        { dayNumber: 24, price: '99.00', currency: 'CZK' },
        { dayNumber: 25, price: '99.00', currency: 'CZK' },
        // Week 5
        { dayNumber: 26, price: '99.00', currency: 'CZK' },
        { dayNumber: 27, price: '99.00', currency: 'CZK', bookings: [{
          type: 'end',
          endDayIndex: 29, // Day 27 is at index 29
          spanDays: 2, // Spans 2 days (26, 27)
          source: 'AIRBNB',
          price: '5 000 CZK',
          sourceBadgeColor: '#fd3860',
          backgroundColor: '#ffe4e9'
        }] },
        { dayNumber: 28, price: '99.00', currency: 'CZK' },
        { dayNumber: 29, price: '99.00', currency: 'CZK' },
        { dayNumber: 1, price: '99.00', currency: 'CZK', isNextMonth: true },
        { dayNumber: 2, price: '99.00', currency: 'CZK', isNextMonth: true },
        { dayNumber: 3, price: '99.00', currency: 'CZK', isNextMonth: true }
      ],
      selectedDate: null,
      tableSelectedRows: [],
      tableColumns: [
        { id: 'name', label: 'Column heading', type: 'bold', sortable: true },
        { id: 'col2', label: 'Column heading', sortable: true, truncate: true },
        { id: 'col3', label: 'Column heading', sortable: true },
        { id: 'status', label: 'Column heading', type: 'status', sortable: true }
      ],
      tableRows: [
        { name: 'Bold text column', col2: 'https://very-long-url-example.com/path/to/resource/with/many/segments/that-will-definitely-overflow', col3: 'Regular text column', status: { type: 'success', label: 'Available' } },
        { name: 'Bold text column', col2: 'https://another-example-domain.com/api/v1/users/12345/orders/67890/details/items', col3: 'Regular text column', status: { type: 'success', label: 'Available' } },
        { name: 'Bold text column', col2: 'Regular text column', col3: 'Regular text column', status: { type: 'success', label: 'Available' } },
        { name: 'Bold text column', col2: 'Regular text column', col3: 'Regular text column', status: { type: 'success', label: 'Available' } },
        { name: 'Bold text column', col2: 'Regular text column', col3: 'Regular text column', status: { type: 'success', label: 'Available' } },
        { name: 'Bold text column', col2: 'Regular text column', col3: 'Regular text column', status: { type: 'success', label: 'Available' } }
      ]
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
    handleEmptyStateAction() {
      // Handle empty state action button click
    },
    handleNotificationAction({ type, index, message }) {
      // Handle notification action button click
    },
    handleCalendarDayClick(day) {
      console.log('Calendar day clicked:', day);
    },
    handleDateChange(date) {
      console.log('Date selected:', date);
    },
    handleTableRowAction({ row, rowIndex }) {
      console.log('Table row action:', rowIndex, row);
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
@use '../tokens/variables' as *;
</style>

<style lang="scss">
@use '../tokens/variables' as *;

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: var(--marks-spacing-12) var(--marks-spacing-16);
  background: var(--marks-color-white);
  border: 1px solid var(--marks-color-gray-200);
  border-radius: var(--marks-radius-8);
  cursor: pointer;
  font-size: 14px;
  color: var(--marks-color-gray-500);
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--marks-color-gray-100);
    border-color: var(--marks-color-gray-300);
  }
}

:root[data-theme="dark"] .theme-toggle {
  background: var(--marks-color-gray-500);
  border-color: var(--marks-color-gray-400);
  color: var(--marks-color-white);

  &:hover {
    background: var(--marks-color-gray-400);
    border-color: var(--marks-color-gray-350);
  }
}
</style>
