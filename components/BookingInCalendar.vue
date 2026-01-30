<!--
  Figma Node ID: 82-20305
  Component: Booking in Calendar
  Types: default, start, end
  Variants: month, year
  Features: displays booking information in calendar cells
  
  Props:
  - type (String, default: 'default') - Booking type: 'default', 'start', or 'end'
  - variant (String, default: 'month') - Display variant: 'month' or 'year'
  - customerName (String, default: '') - Customer name to display
  - pax (String, default: '') - Number of people (e.g., "8 pax")
  - source (String, default: '') - Booking source (e.g., "AIRBNB")
  - price (String, default: '') - Price to display
  - statusBadgeText (String, default: 'J') - Text for status badge
  - statusBadgeColor (String, default: '#fd3860') - Background color for status badge
  - sourceBadgeColor (String, default: '#fd3860') - Background color for source badge
  - backgroundColor (String, optional) - Custom background color for booking container
-->
<template>
  <div
    :class="[
      'marks-booking-in-calendar',
      `marks-booking-in-calendar--${type}`,
      `marks-booking-in-calendar--${variant}`
    ]"
    :style="containerStyle"
  >
    <!-- Month View - Default (Full) -->
    <template v-if="variant === 'month' && type === 'default'">
      <div class="marks-booking-in-calendar__left-section">
        <div class="marks-booking-in-calendar__status-badge" :style="{ backgroundColor: statusBadgeColor }">
          <div class="marks-booking-in-calendar__status-text">{{ statusBadgeText }}</div>
        </div>
        <div class="marks-booking-in-calendar__customer-info">
          <div class="marks-booking-in-calendar__customer-name">{{ customerName }}</div>
          <div class="marks-booking-in-calendar__pax">{{ pax }}</div>
        </div>
      </div>
      <div class="marks-booking-in-calendar__right-section">
        <div class="marks-booking-in-calendar__source-badge" :style="{ backgroundColor: sourceBadgeColor }">
          <div class="marks-booking-in-calendar__source-text">{{ source }}</div>
        </div>
        <b class="marks-booking-in-calendar__price">{{ price }}</b>
      </div>
    </template>

    <!-- Month View - Start (Left Only) -->
    <template v-if="variant === 'month' && type === 'start'">
      <div class="marks-booking-in-calendar__status-badge" :style="{ backgroundColor: statusBadgeColor }">
        <div class="marks-booking-in-calendar__status-text">{{ statusBadgeText }}</div>
      </div>
      <div class="marks-booking-in-calendar__customer-info">
        <div class="marks-booking-in-calendar__customer-name">{{ customerName }}</div>
        <div class="marks-booking-in-calendar__pax">{{ pax }}</div>
      </div>
    </template>

    <!-- Month View - End (Right Only) -->
    <template v-if="variant === 'month' && type === 'end'">
      <div class="marks-booking-in-calendar__source-badge" :style="{ backgroundColor: sourceBadgeColor }">
        <div class="marks-booking-in-calendar__source-text">{{ source }}</div>
      </div>
      <b class="marks-booking-in-calendar__price">{{ price }}</b>
    </template>

    <!-- Year View - Default (Full) -->
    <template v-if="variant === 'year' && type === 'default'">
      <div class="marks-booking-in-calendar__status-wrapper">
        <div class="marks-booking-in-calendar__status-circle" :style="{ backgroundColor: statusBadgeColor }">
          <div class="marks-booking-in-calendar__status-text">{{ statusBadgeText }}</div>
        </div>
      </div>
    </template>

    <!-- Year View - Start (Left Only) -->
    <template v-if="variant === 'year' && type === 'start'">
      <div class="marks-booking-in-calendar__status-frame">
        <div class="marks-booking-in-calendar__status-circle" :style="{ backgroundColor: statusBadgeColor }">
          <div class="marks-booking-in-calendar__status-text">{{ statusBadgeText }}</div>
        </div>
      </div>
    </template>

    <!-- Year View - End (Right Only) -->
    <template v-if="variant === 'year' && type === 'end'">
      <!-- Empty for end type in year view -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'marksBookingInCalendar',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'start', 'end'].includes(value)
    },
    variant: {
      type: String,
      default: 'month',
      validator: (value) => ['month', 'year'].includes(value)
    },
    customerName: {
      type: String,
      default: ''
    },
    pax: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    statusBadgeText: {
      type: String,
      default: 'J'
    },
    statusBadgeColor: {
      type: String,
      default: '#fd3860'
    },
    sourceBadgeColor: {
      type: String,
      default: '#fd3860'
    },
    backgroundColor: {
      type: String,
      default: null
    }
  },
  computed: {
    containerStyle() {
      const style = {};
      if (this.backgroundColor) {
        style.backgroundColor = this.backgroundColor;
      } else {
        // Default colors based on variant
        style.backgroundColor = this.variant === 'month' ? '#ffe4e9' : '#fd3860';
      }
      return style;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-booking-in-calendar {
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-4) var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-4) var(--marks-spacing-gutter-4);
  box-sizing: border-box;
  gap: var(--marks-spacing-gutter-8);

  // Month variant
  &--month {
    // Default styling handled by containerStyle
  }

  // Year variant
  &--year {
    height: 24px;
  }

  // Type: default (full width)
  &--default {
    // Full width styling
  }

  // Type: start (left side)
  &--start {
    border-radius: 100px 0px 0px 100px;
    justify-content: flex-start;
  }

  // Type: end (right side)
  &--end {
    border-radius: 0px 100px 100px 0px;
    justify-content: flex-end;
  }
}

.marks-booking-in-calendar__left-section {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
}

.marks-booking-in-calendar__right-section {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
}

.marks-booking-in-calendar__status-badge {
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
}

.marks-booking-in-calendar__status-text {
  position: relative;
  @include marks-typography-button-md;
  color: var(--marks-color-white);
}

.marks-booking-in-calendar__customer-info {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  font-size: 16px;
  color: var(--marks-color-black);
}

.marks-booking-in-calendar__customer-name {
  position: relative;
  @include marks-typography-paragraph-md-multiline;
  font-size: 16px;
  color: var(--marks-color-black);
}

.marks-booking-in-calendar__pax {
  position: relative;
  @include marks-typography-paragraph-sm-multiline;
  color: #505050;
}

.marks-booking-in-calendar__source-badge {
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
}

.marks-booking-in-calendar__source-text {
  position: relative;
  @include marks-typography-button-md;
  color: var(--marks-color-white);
}

.marks-booking-in-calendar__price {
  position: relative;
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-bold;
  color: var(--marks-color-black);
}

// Year view specific styles
.marks-booking-in-calendar__status-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marks-booking-in-calendar__status-frame {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marks-booking-in-calendar__status-circle {
  height: 24px;
  width: 24px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
  box-sizing: border-box;
}

.marks-booking-in-calendar--year .marks-booking-in-calendar__status-text {
  position: relative;
  @include marks-typography-button-md;
  color: var(--marks-color-white);
  flex-shrink: 0;
}
</style>
