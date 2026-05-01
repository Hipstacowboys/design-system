<template>
  <DocHeader active-page="comparison" />

  <div class="comparison-page">
    <div class="comparison-header">
      <h1>Light / Dark Mode Comparison</h1>
      <p>Side-by-side comparison of components in light and dark modes.</p>
    </div>
    
    <div class="comparison-container">
      <!-- Left Column - Light Mode -->
      <div class="comparison-column comparison-column--light" data-theme="light">
        <div
          v-for="item in componentsList"
          :key="`light-${item.id}`"
          class="comparison-item"
        >
          <h3 class="comparison-title">
            <a
              v-if="item.docPath"
              class="comparison-title__link"
              :href="item.docPath"
            >{{ item.title }}</a>
            <span v-else>{{ item.title }}</span>
          </h3>
          <div class="comparison-component" :style="item.wrapperStyle || { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' }">
            <div v-if="item.innerStyle" :style="item.innerStyle">
              <template v-if="item.isGroup && (item.id === 'radio' || item.id === 'radio-with-label')">
                <component
                  v-for="(option, idx) in item.groupOptions"
                  :key="idx"
                  :is="item.component"
                  v-bind="item.id === 'radio' ? { value: option.value, name: option.name } : { title: option.title, value: option.value, name: option.name }"
                  :model-value="item.modelValue"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
              </template>
              <template v-else>
                <component
                  v-if="item.id !== 'tooltip'"
                  :is="item.component"
                  v-bind="item.id === 'navbar-side' ? { ...item.props, theme: 'light' } : item.props"
                  :model-value="item.modelValue"
                  @click="item.onClick ? item.onClick($event) : undefined"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
                <Tooltip
                  v-else
                  v-bind="item.props"
                >
                  <template #trigger>
                    <ButtonPrimary size="medium" text="Hover me" />
                  </template>
                </Tooltip>
              </template>
            </div>
            <template v-else>
              <template v-if="item.isGroup && (item.id === 'radio' || item.id === 'radio-with-label')">
                <div :style="item.innerStyle">
                  <component
                    v-for="(option, idx) in item.groupOptions"
                    :key="idx"
                    :is="item.component"
                    v-bind="item.id === 'radio' ? { value: option.value, name: option.name } : { title: option.title, value: option.value, name: option.name }"
                    :model-value="item.modelValue"
                    @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                  />
                </div>
              </template>
              <template v-else>
                <component
                  v-if="item.id !== 'tooltip'"
                  :is="item.component"
                  v-bind="item.id === 'navbar-side' ? { ...item.props, theme: 'light' } : item.props"
                  :model-value="item.modelValue"
                  @click="item.onClick ? item.onClick($event) : undefined"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
                <Tooltip
                  v-else
                  v-bind="item.props"
                >
                  <template #trigger>
                    <ButtonPrimary size="medium" text="Hover me" />
                  </template>
                </Tooltip>
              </template>
            </template>
          </div>
          <hr class="comparison-divider" />
        </div>
      </div>

      <!-- Right Column - Dark Mode -->
      <div class="comparison-column comparison-column--dark" data-theme="dark">
        <div
          v-for="item in componentsList"
          :key="`dark-${item.id}`"
          class="comparison-item"
        >
          <h3 class="comparison-title">
            <a
              v-if="item.docPath"
              class="comparison-title__link"
              :href="item.docPath"
            >{{ item.title }}</a>
            <span v-else>{{ item.title }}</span>
          </h3>
          <div class="comparison-component" :style="item.wrapperStyle ? { ...item.wrapperStyle, justifyContent: 'flex-start' } : { display: 'flex', justifyContent: 'flex-start', padding: 'var(--marks-spacing-24)', width: '100%' }">
            <div v-if="item.innerStyle" :style="item.innerStyle">
              <template v-if="item.isGroup && (item.id === 'radio' || item.id === 'radio-with-label')">
                <component
                  v-for="(option, idx) in item.groupOptions"
                  :key="idx"
                  :is="item.component"
                  v-bind="item.id === 'radio' ? { value: option.value, name: option.name } : { title: option.title, value: option.value, name: option.name }"
                  :model-value="item.modelValue"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
              </template>
              <template v-else>
                <component
                  v-if="item.id !== 'tooltip'"
                  :is="item.component"
                  v-bind="item.id === 'navbar-side' ? { ...item.props, theme: 'dark' } : item.id === 'booking-in-calendar' ? { ...item.props, theme: 'dark' } : item.props"
                  :model-value="item.modelValue"
                  @click="item.onClick ? item.onClick($event) : undefined"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
                <Tooltip
                  v-else
                  v-bind="item.props"
                >
                  <template #trigger>
                    <ButtonPrimary size="medium" text="Hover me" />
                  </template>
                </Tooltip>
              </template>
            </div>
            <template v-else>
              <template v-if="item.isGroup && (item.id === 'radio' || item.id === 'radio-with-label')">
                <div :style="item.innerStyle">
                  <component
                    v-for="(option, idx) in item.groupOptions"
                    :key="idx"
                    :is="item.component"
                    v-bind="item.id === 'radio' ? { value: option.value, name: option.name } : { title: option.title, value: option.value, name: option.name }"
                    :model-value="item.modelValue"
                    @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                  />
                </div>
              </template>
              <template v-else>
                <component
                  v-if="item.id !== 'tooltip'"
                  :is="item.component"
                  v-bind="item.id === 'navbar-side' ? { ...item.props, theme: 'dark' } : item.id === 'booking-in-calendar' ? { ...item.props, theme: 'dark' } : item.props"
                  :model-value="item.modelValue"
                  @click="item.onClick ? item.onClick($event) : undefined"
                  @update:modelValue="item.onUpdate ? item.onUpdate($event) : undefined"
                />
                <Tooltip
                  v-else
                  v-bind="item.props"
                >
                  <template #trigger>
                    <ButtonPrimary size="medium" text="Hover me" />
                  </template>
                </Tooltip>
              </template>
            </template>
          </div>
          <hr class="comparison-divider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../components/ButtonPrimary.vue';
import ButtonSecondary from '../components/ButtonSecondary.vue';
import ButtonLine from '../components/ButtonLine.vue';
import ButtonGhost from '../components/ButtonGhost.vue';
import Select from '../components/Select.vue';
import Input from '../components/Input.vue';
import Textarea from '../components/Textarea.vue';
import Toggle from '../components/Toggle.vue';
import Checkbox from '../components/Checkbox.vue';
import Radio from '../components/Radio.vue';
import Status from '../components/Status.vue';
import Alert from '../components/Alert.vue';
import BigSwitch from '../components/BigSwitch.vue';
import Booking from '../components/Booking.vue';
import BookingInCalendar from '../components/BookingInCalendar.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import Calendar from '../components/Calendar.vue';
import CalendarDatepicker from '../components/CalendarDatepicker.vue';
import CalendarDay from '../components/CalendarDay.vue';
import CardWithCounter from '../components/CardWithCounter.vue';
import CheckboxWithLabel from '../components/CheckboxWithLabel.vue';
import Dropdown from '../components/Dropdown.vue';
import EmptyState from '../components/EmptyState.vue';
import HorizontalSwitch from '../components/HorizontalSwitch.vue';
import InputField from '../components/InputField.vue';
import InputMessage from '../components/InputMessage.vue';
import NavbarItem from '../components/NavbarItem.vue';
import NavbarSide from '../components/NavbarSide.vue';
import NotificationBadge from '../components/NotificationBadge.vue';
import NotificationDialog from '../components/NotificationDialog.vue';
import NotificationMessage from '../components/NotificationMessage.vue';
import Place from '../components/Place.vue';
import RadioWithLabel from '../components/RadioWithLabel.vue';
import SmallSwitch from '../components/SmallSwitch.vue';
import SmallSwitchOption from '../components/SmallSwitchOption.vue';
import Tab from '../components/Tab.vue';
import Tabs from '../components/Tabs.vue';
import TabSimple from '../components/TabSimple.vue';
import TabsSimple from '../components/TabsSimple.vue';
import Table from '../components/Table.vue';
import TextareaField from '../components/TextareaField.vue';
import ToggleWithLabel from '../components/ToggleWithLabel.vue';
import Tooltip from '../components/Tooltip.vue';
import WeekPricingDay from '../components/WeekPricingDay.vue';
import Widget from '../components/Widget.vue';
import { PhBed, PhCalendar, PhHouse, PhBookOpen, PhAppWindow, PhGear, PhChatCircle, PhSignOut } from '@phosphor-icons/vue';
import DocHeader from './docs/DocHeader.vue';

export default {
  name: 'ComparisonApp',
  components: {
    DocHeader,
    ButtonPrimary,
    ButtonSecondary,
    ButtonLine,
    ButtonGhost,
    Select,
    Input,
    Textarea,
    Toggle,
    Checkbox,
    Radio,
    Status,
    Alert,
    BigSwitch,
    Booking,
    BookingInCalendar,
    Breadcrumb,
    Breadcrumbs,
    Calendar,
    CalendarDatepicker,
    CalendarDay,
    CardWithCounter,
    CheckboxWithLabel,
    Dropdown,
    EmptyState,
    HorizontalSwitch,
    InputField,
    InputMessage,
    NavbarItem,
    NavbarSide,
    NotificationBadge,
    NotificationDialog,
    NotificationMessage,
    Place,
    RadioWithLabel,
    SmallSwitch,
    SmallSwitchOption,
    Tab,
    Tabs,
    TabSimple,
    TabsSimple,
    Table,
    TextareaField,
    ToggleWithLabel,
    Tooltip,
    WeekPricingDay,
    Widget
  },
  data() {
    return {
      interactiveSelect: null,
      inputValueMedium: 'Filled',
      textareaValue: 'Filled',
      interactiveToggle: false,
      interactiveCheckbox: false,
      interactiveRadio: 'option1',
      interactiveToggleWithLabel: false,
      interactiveCheckboxWithLabel: false,
      interactiveRadioWithLabel: 'option1',
      tableSelectedRows: [],
      selectOptions: [
        { value: 'option1', label: 'Option 1', rightText: '16' },
        { value: 'option2', label: 'Option 2', rightText: '12' },
        { value: 'option3', label: 'Option 3', rightText: '16' },
        { value: 'option4', label: 'Option 4', rightText: '16' },
        { value: 'option5', label: 'Option 5 (Disabled)', rightText: '16', disabled: true }
      ],
      tableColumns: [
        { id: 'name', label: 'Column heading', type: 'bold', sortable: true },
        { id: 'col2', label: 'Column heading', sortable: true, truncate: true },
        { id: 'status', label: 'Column heading', type: 'status', sortable: true }
      ],
      tableRows: [
        { name: 'Hanusova Chalupa', col2: 'https://booking.example.com/properties/hanusova-chalupa/calendar/import-source-airbnb', status: { type: 'success', label: 'Available' } },
        { name: 'Mountain Cabin', col2: 'https://booking.example.com/properties/mountain-cabin/rates/summer-season-2026', status: { type: 'success', label: 'Available' } },
        { name: 'Lake House', col2: 'Whole place', status: { type: 'success', label: 'Available' } },
        { name: 'City Apartment', col2: 'Private room', status: { type: 'success', label: 'Available' } },
        { name: 'Garden Studio', col2: 'Instant booking enabled', status: { type: 'success', label: 'Available' } },
        { name: 'Old Town Loft', col2: 'Manual approval required', status: { type: 'success', label: 'Available' } }
      ],
      calendarDays: [
        { dayNumber: 29, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 30, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 31, price: '99.00', currency: 'CZK', isPreviousMonth: true },
        { dayNumber: 1, price: '99.00', currency: 'CZK' },
        { dayNumber: 2, price: '99.00', currency: 'CZK' },
        { dayNumber: 3, price: '99.00', currency: 'CZK' },
        { dayNumber: 4, price: '99.00', currency: 'CZK' },
        { dayNumber: 5, notAvailable: true },
        { dayNumber: 6, notAvailable: true },
        { dayNumber: 7, notAvailable: true },
        { dayNumber: 8, price: '99.00', currency: 'CZK' },
        { dayNumber: 'Today', price: '99.00', currency: 'CZK' },
        { dayNumber: 10, price: '99.00', currency: 'CZK' },
        { dayNumber: 11, price: '99.00', currency: 'CZK' },
        { dayNumber: 12, notAvailable: true },
        { dayNumber: 13, notAvailable: true },
        { dayNumber: 14, notAvailable: true },
        { dayNumber: 15, bookings: [{
          type: 'default',
          startDayIndex: 17,
          spanDays: 4,
          customerName: 'Jeremy Clark',
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
        { dayNumber: 19, notAvailable: true },
        { dayNumber: 20, notAvailable: true },
        { dayNumber: 21, notAvailable: true },
        { dayNumber: 22, price: '99.00', currency: 'CZK' },
        { dayNumber: 23, price: '99.00', currency: 'CZK', bookings: [{
          type: 'start',
          startDayIndex: 25,
          spanDays: 3,
          customerName: 'Jeremy Clark',
          pax: '8 pax',
          statusBadgeText: 'J',
          statusBadgeColor: '#fd3860',
          backgroundColor: '#ffe4e9'
        }] },
        { dayNumber: 24, price: '99.00', currency: 'CZK' },
        { dayNumber: 25, price: '99.00', currency: 'CZK' },
        { dayNumber: 26, price: '99.00', currency: 'CZK' },
        { dayNumber: 27, price: '99.00', currency: 'CZK', bookings: [{
          type: 'end',
          endDayIndex: 29,
          spanDays: 2,
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
      cardWithCounterValue: 0,
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
            { icon: PhCalendar, label: 'Calendar', value: 'calendar' },
            { icon: PhHouse, label: 'Places', value: 'places' },
            { icon: PhBookOpen, label: 'Bookings', value: 'bookings' }
          ]
        },
        {
          label: 'Your setup',
          items: [
            { icon: PhAppWindow, label: 'Widgets', value: 'widgets' }
          ]
        },
        {
          label: 'Your setup',
          items: [
            { icon: PhGear, label: 'Settings', value: 'settings' }
          ]
        }
      ],
      navbarBottomItems: [
        { icon: PhChatCircle, label: 'Feedback', value: 'feedback' },
        { icon: PhSignOut, label: 'Log out', value: 'logout' }
      ],
      horizontalSwitchValue: 'month',
      horizontalSwitchOptions: [
        { label: 'Month view', value: 'month' },
        { label: 'Year view', value: 'year' },
        { label: 'All time', value: 'all' }
      ],
      bigSwitchValue: null,
      smallSwitchValue: null,
      smallSwitchOptions: [
        {
          value: 'whole-place',
          title: 'Whole place',
          description: 'Guests book the entire property.'
        },
        {
          value: 'private-room',
          title: 'Private room',
          description: 'Guests book a private room in a shared property.'
        },
        {
          value: 'shared-room',
          title: 'Shared room',
          description: 'Guests book a shared room or dormitory.',
          disabled: true
        }
      ],
      activeTab: 'overview',
      tabsOptions: [
        { value: 'overview', label: 'Overview' },
        { value: 'activity', label: 'Activity' },
        { value: 'settings', label: 'Settings' }
      ],
      breadcrumbItems: [
        { label: 'Home' },
        { label: 'Products' },
        { label: 'Category' },
        { label: 'Item' }
      ],
      notificationFilter: 'all',
      notificationMessages: [
        {
          title: 'Booking request received',
          timestamp: '1h ago',
          mainText: 'Hanusova Chalupa',
          description: 'Guest requested 3 nights in July.',
          new: true
        },
        {
          title: 'Payment reminder sent',
          timestamp: '2h ago',
          mainText: 'Reservation #1042',
          description: 'Deposit reminder was sent to the guest.',
          new: true,
          actions: {
            primary: { text: 'Primary Button' },
            secondary: { text: 'Secondary Button' }
          }
        },
        {
          title: 'Booking confirmed',
          timestamp: '3h ago',
          mainText: 'Weekend stay',
          description: 'Guest confirmation was received.',
          new: false
        },
        {
          title: 'Calendar synced',
          timestamp: '4h ago',
          mainText: 'Airbnb import',
          description: 'Availability was updated from the channel.',
          new: false
        }
      ]
    };
  },
  computed: {
    componentsList() {
      return [
        {
          id: 'button-primary',
          title: 'Button Primary',
          docPath: '/documentation/button.html',
          component: ButtonPrimary,
          props: { size: 'medium', text: 'Click Me' },
          onClick: () => this.handleButtonClick('Primary')
        },
        {
          id: 'button-secondary',
          title: 'Button Secondary',
          docPath: '/documentation/button.html',
          component: ButtonSecondary,
          props: { size: 'medium', text: 'Click Me' },
          onClick: () => this.handleButtonClick('Secondary')
        },
        {
          id: 'button-line',
          title: 'Button Line',
          docPath: '/documentation/button.html',
          component: ButtonLine,
          props: { size: 'medium', text: 'Click Me' },
          onClick: () => this.handleButtonClick('Line')
        },
        {
          id: 'button-ghost',
          title: 'Button Ghost',
          docPath: '/documentation/button.html',
          component: ButtonGhost,
          props: { size: 'medium', text: 'Click Me' },
          onClick: () => this.handleButtonClick('Ghost')
        },
        {
          id: 'select',
          title: 'Select',
          docPath: '/documentation/select.html',
          component: Select,
          props: { size: 'medium', options: this.selectOptions, placeholder: 'Select an option...' },
          modelValue: this.interactiveSelect,
          onUpdate: (val) => { this.interactiveSelect = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '300px' }
        },
        {
          id: 'input',
          title: 'Input',
          docPath: '/documentation/input.html',
          component: Input,
          props: { size: 'medium', placeholder: 'Placeholder' },
          modelValue: this.inputValueMedium,
          onUpdate: (val) => { this.inputValueMedium = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '375px' }
        },
        {
          id: 'textarea',
          title: 'Textarea',
          docPath: '/documentation/textarea.html',
          component: Textarea,
          props: { placeholder: 'Placeholder' },
          modelValue: this.textareaValue,
          onUpdate: (val) => { this.textareaValue = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '391px' }
        },
        {
          id: 'toggle',
          title: 'Toggle',
          docPath: '/documentation/toggle.html',
          component: Toggle,
          modelValue: this.interactiveToggle,
          onUpdate: (val) => { this.interactiveToggle = val; }
        },
        {
          id: 'toggle-with-label',
          title: 'Toggle With Label',
          docPath: '/documentation/toggle.html',
          component: ToggleWithLabel,
          props: { title: 'Enable notifications' },
          modelValue: this.interactiveToggleWithLabel,
          onUpdate: (val) => { this.interactiveToggleWithLabel = val; }
        },
        {
          id: 'checkbox',
          title: 'Checkbox',
          docPath: '/documentation/checkbox.html',
          component: Checkbox,
          modelValue: this.interactiveCheckbox,
          onUpdate: (val) => { this.interactiveCheckbox = val; }
        },
        {
          id: 'checkbox-with-label',
          title: 'Checkbox With Label',
          docPath: '/documentation/checkbox.html',
          component: CheckboxWithLabel,
          props: { title: 'Accept terms and conditions' },
          modelValue: this.interactiveCheckboxWithLabel,
          onUpdate: (val) => { this.interactiveCheckboxWithLabel = val; }
        },
        {
          id: 'radio',
          title: 'Radio',
          docPath: '/documentation/radio.html',
          component: Radio,
          props: { value: 'option1', name: 'radio-group-1' },
          modelValue: this.interactiveRadio,
          onUpdate: (val) => { this.interactiveRadio = val; },
          isGroup: true,
          groupOptions: [
            { value: 'option1', name: 'radio-group-1' },
            { value: 'option2', name: 'radio-group-1' },
            { value: 'option3', name: 'radio-group-1' }
          ],
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { display: 'flex', flexDirection: 'column', gap: 'var(--marks-spacing-8)' }
        },
        {
          id: 'radio-with-label',
          title: 'Radio With Label',
          docPath: '/documentation/radio.html',
          component: RadioWithLabel,
          props: { title: 'Option 1', value: 'option1', name: 'radio-group-2' },
          modelValue: this.interactiveRadioWithLabel,
          onUpdate: (val) => { this.interactiveRadioWithLabel = val; },
          isGroup: true,
          groupOptions: [
            { title: 'Option 1', value: 'option1', name: 'radio-group-2' },
            { title: 'Option 2', value: 'option2', name: 'radio-group-2' },
            { title: 'Option 3', value: 'option3', name: 'radio-group-2' }
          ],
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { display: 'flex', flexDirection: 'column', gap: 'var(--marks-spacing-8)' }
        },
        {
          id: 'status',
          title: 'Status',
          docPath: '/documentation/status.html',
          component: Status,
          props: { type: 'success', label: 'Available' }
        },
        {
          id: 'alert',
          title: 'Alert',
          docPath: '/documentation/alert.html',
          component: Alert,
          props: { type: 'info', title: 'Booking successfully saved', description: 'This message can include supporting context across multiple lines.', closable: true },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '418px' }
        },
        {
          id: 'notification-badge',
          title: 'Notification Badge',
          docPath: '/documentation/notification-badge.html',
          component: NotificationBadge,
          props: { count: 5 }
        },
        {
          id: 'empty-state',
          title: 'Empty State',
          docPath: '/documentation/empty-state.html',
          component: EmptyState,
          props: { title: 'No bookings yet', message: 'When you receive bookings, they will appear here.' },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' }
        },
        {
          id: 'table',
          title: 'Table',
          docPath: '/documentation/table.html',
          component: Table,
          props: {
            headerTitle: 'Headline',
            headerSupportingText: 'A descriptive body text',
            columns: this.tableColumns,
            rows: this.tableRows,
            selectable: true
          },
          modelValue: this.tableSelectedRows,
          onUpdate: (val) => { this.tableSelectedRows = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' }
        },
        {
          id: 'big-switch',
          title: 'Big Switch',
          docPath: '/documentation/switch.html',
          component: BigSwitch,
          props: { value: 'whole-place', title: 'Whole place', description: 'Guests book the entire property.' },
          modelValue: this.bigSwitchValue,
          onUpdate: (val) => { this.bigSwitchValue = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '400px' }
        },
        {
          id: 'small-switch',
          title: 'Small Switch',
          docPath: '/documentation/switch.html',
          component: SmallSwitch,
          props: { options: this.smallSwitchOptions },
          modelValue: this.smallSwitchValue,
          onUpdate: (val) => { this.smallSwitchValue = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '420px' }
        },
        {
          id: 'breadcrumbs',
          title: 'Breadcrumbs',
          docPath: '/documentation/breadcrumbs.html',
          component: Breadcrumbs,
          props: { items: this.breadcrumbItems }
        },
        {
          id: 'tabs-simple',
          title: 'Tabs Simple',
          docPath: '/documentation/tabs.html',
          component: TabsSimple,
          props: { tabs: this.tabsOptions },
          modelValue: this.activeTab,
          onUpdate: (val) => { this.activeTab = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '450px' }
        },
        {
          id: 'tabs',
          title: 'Tabs',
          docPath: '/documentation/tabs.html',
          component: Tabs,
          props: { tabs: this.tabsOptions },
          modelValue: this.activeTab,
          onUpdate: (val) => { this.activeTab = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '500px' }
        },
        {
          id: 'notification-dialog',
          title: 'Notification Dialog',
          docPath: '/documentation/notification-dialog.html',
          component: NotificationDialog,
          props: { messages: this.notificationMessages },
          modelValue: this.notificationFilter,
          onUpdate: (val) => { this.notificationFilter = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '529px' }
        },
        {
          id: 'horizontal-switch',
          title: 'Horizontal Switch',
          docPath: '/documentation/horizontal-switch.html',
          component: HorizontalSwitch,
          props: { options: this.horizontalSwitchOptions },
          modelValue: this.horizontalSwitchValue,
          onUpdate: (val) => { this.horizontalSwitchValue = val; }
        },
        {
          id: 'card-with-counter',
          title: 'Card With Counter',
          docPath: '/documentation/card-with-counter.html',
          component: CardWithCounter,
          props: { icon: PhBed, title: 'Double bed', description: 'Sleeps 2 guests' },
          modelValue: this.cardWithCounterValue,
          onUpdate: (val) => { this.cardWithCounterValue = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '250px' }
        },
        {
          id: 'week-pricing-day',
          title: 'Week Pricing Day',
          component: WeekPricingDay,
          props: { dayLabel: 'Tue', type: 'vertical' },
          modelValue: this.weekPricingDay1,
          onUpdate: (val) => { this.weekPricingDay1 = val; }
        },
        {
          id: 'booking',
          title: 'Booking',
          component: Booking,
          props: {
            customerName: 'Jeremy Clark',
            peopleCount: '8 people',
            startDateShort: 'Čer 28',
            endDateShort: 'Čer 28',
            startDateLong: 'Červen 28, 2026',
            endDateLong: 'Červen 28, 2026',
            nights: '4',
            price: '5 000 CZK',
            deposit: '0 CZK',
            badgeLabel: 'AIRBNB',
            badgeColor: '#fd3860',
            statusType: 'info',
            statusLabel: 'Confirmed'
          },
          modelValue: this.bookingStatus,
          onUpdate: (val) => { this.bookingStatus = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '400px' }
        },
        {
          id: 'booking-in-calendar',
          title: 'Booking In Calendar',
          component: BookingInCalendar,
          props: {
            variant: 'month',
            type: 'default',
            customerName: 'Jeremy Clark',
            pax: '8 pax',
            source: 'AIRBNB',
            price: '5 000 CZK',
            statusBadgeText: 'J',
            statusBadgeColor: 'var(--marks-color-red-200)',
            sourceBadgeColor: 'var(--marks-color-red-200)',
            theme: 'light'
          },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '600px' }
        },
        {
          id: 'calendar',
          title: 'Calendar',
          component: Calendar,
          props: { variant: 'month', days: this.calendarDays },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '870px' }
        },
        {
          id: 'calendar-datepicker',
          title: 'Calendar Datepicker',
          component: CalendarDatepicker,
          props: {},
          modelValue: this.selectedDate,
          onUpdate: (val) => { this.selectedDate = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '400px' }
        },
        {
          id: 'place',
          title: 'Place',
          component: Place,
          props: {
            customerName: 'Hanusova Chalupa',
            peopleCount: '8 people',
            placeType: 'Whole place',
            pricePerNight: 'from 5 000 CZK / night',
            season: 'Summer season',
            pricingBasis: 'Per night based',
            statusType: 'success',
            statusLabel: 'Synced'
          },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '400px' }
        },
        {
          id: 'widget',
          title: 'Widget',
          docPath: '/documentation/widget.html',
          component: Widget,
          props: {
            widgetName: 'My first widget',
            subtitle: 'Hanusova Chalupa',
            duration: '3 months',
            durationSubtitle: 'Prices in tooltips',
            language: 'Danish',
            languageCode: 'DNK',
            theme: 'Light mode',
            themeSubtitle: 'Transparent'
          },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '400px' }
        },
        {
          id: 'navbar-side',
          title: 'Navbar Side',
          docPath: '/documentation/navbar-side.html',
          component: NavbarSide,
          props: {
            sections: this.navbarSections,
            bottomItems: this.navbarBottomItems,
            theme: 'light'
          },
          modelValue: this.navbarActiveItem,
          onUpdate: (val) => { this.navbarActiveItem = val; },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '300px' }
        },
        {
          id: 'tooltip',
          title: 'Tooltip',
          docPath: '/documentation/tooltip.html',
          component: Tooltip,
          props: { 
            upperLeft: 'Marta Kaufmann',
            upperRight: '347 USD',
            bottomLeft: '10 people',
            bottomRight: 'Airbnb'
          },
          wrapperStyle: { display: 'flex', justifyContent: 'flex-end', padding: 'var(--marks-spacing-24)', width: '100%' },
          innerStyle: { width: '200px' }
        }
      ];
    }
  },
  methods: {
    handleButtonClick(type) {
      console.log(`Button clicked: ${type}`);
    }
  }
};
</script>

<style>
@import '../docs/reference-main.css';
</style>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.comparison-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.comparison-header {
  background: var(--marks-color-white);
  border-bottom: 1px solid var(--marks-color-gray-200);
  padding: calc(var(--header-height, 56px) + 50px) var(--marks-spacing-40) var(--marks-spacing-40);
  
  h1 {
    font-size: 32px;
    font-weight: 600;
    color: var(--marks-color-gray-500);
    margin-bottom: var(--marks-spacing-8);
  }
  
  p {
    color: var(--marks-color-gray-400);
    font-size: 16px;
    margin: 0;
  }
}

.comparison-container {
  display: flex;
  width: 100%;
  flex: 1;
}

.comparison-column {
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  
  &--light {
    background: var(--marks-color-white);
  }
  
  &--dark {
    // Dark background
    background: #2A2A2A;

    // Override design system tokens to dark-mode values for everything inside this column
    // Primary
    --marks-color-primary-solid: #0E5842;
    --marks-color-primary-light: #032F22;

    // Red Scale
    --marks-color-red-100: #FFE4E9;
    --marks-color-red-200: #FD3860;
    --marks-color-red-300: #97001E;

    // Blue Scale
    --marks-color-blue-100: #D7E7FF;
    --marks-color-blue-200: #2576F7;
    --marks-color-blue-300: #050D3A;

    // Green Scale
    --marks-color-green-100: #C0F3E4;
    --marks-color-green-200: #0FAF80;
    --marks-color-green-300: #0E5842;

    // Orange Scale
    --marks-color-orange-100: #FFEBD2;
    --marks-color-orange-200: #FF8C00;
    --marks-color-orange-300: #854900;

    // Gray Scale
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
}

.comparison-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding-top: 40px;
}

.comparison-component {
  width: 100%;
  min-height: 100px;
}

.comparison-divider {
  width: 100%;
  border: none;
  margin: 0;
  height: 1px;
  background-image: repeating-linear-gradient(
    to right,
    var(--marks-color-gray-200) 0,
    var(--marks-color-gray-200) 8px,
    transparent 8px,
    transparent 16px
  );
  background-size: 16px 1px;
  background-repeat: repeat-x;
}

.comparison-column--dark .comparison-divider {
  background-image: repeating-linear-gradient(
    to right,
    var(--marks-color-gray-200) 0,
    var(--marks-color-gray-200) 8px,
    transparent 8px,
    transparent 16px
  );
}

.comparison-title {
  position: absolute;
  top: var(--marks-spacing-16);
  font-size: 16px;
  font-weight: 600;
  color: var(--marks-color-gray-500);
  margin: 0;
  z-index: 1;
}

.comparison-title__link {
  color: inherit;
  text-decoration: none;
  text-underline-offset: 3px;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
    border-radius: 2px;
  }
}

.comparison-column--light .comparison-title {
  left: var(--marks-spacing-24);
}

.comparison-column--dark .comparison-title {
  right: var(--marks-spacing-24);
  color: var(--marks-color-gray-350);
}
</style>
