<!--
  Figma Node ID: 82-19906
  Component: Calendar Day
  Variants: month, year
  States: default, hover, active, notActive, notAvailable, booked
  
  Props:
  - dayNumber (String|Number, required) - The day number to display (can be "Today")
  - price (String, optional) - Price to display below day number
  - currency (String, optional) - Currency code to display (only shown in month variant)
  - variant (String, default: 'month') - Display variant: 'month' or 'year'
  - active (Boolean, default: false) - Whether the day is currently selected/active
  - notActive (Boolean, default: false) - Whether the day is not active (grayed out)
  - notAvailable (Boolean, default: false) - Whether the day is not available (strikethrough, grayed out)
  - booked (Boolean, default: false) - Whether the day is booked (hides price)
  - noBorder (Boolean, default: false) - Removes border from component (used in datepicker)
  
  Events:
  - click - Emitted when day is clicked (not emitted if notAvailable is true)
-->
<template>
  <div
    :class="[
      'marks-calendar-day',
      `marks-calendar-day--${variant}`,
      {
      'marks-calendar-day--hover': hover,
      'marks-calendar-day--active': active,
      'marks-calendar-day--not-active': notActive,
      'marks-calendar-day--not-available': notAvailable,
      'marks-calendar-day--booked': booked,
      'marks-calendar-day--no-border': noBorder
      }
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="handleClick"
  >
    <b :class="['marks-calendar-day__day-number', { 'marks-calendar-day__day-number--strikethrough': notAvailable }]">
      {{ dayNumber }}
    </b>
    <div v-if="!booked && !notAvailable" class="marks-calendar-day__price-container">
      <div v-if="variant === 'month'" class="marks-calendar-day__price">{{ price }}</div>
      <div v-if="variant === 'month' && currency" class="marks-calendar-day__currency">{{ currency }}</div>
      <div v-else-if="variant === 'year'" class="marks-calendar-day__price-year">
        {{ price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marksCalendarDay',
  props: {
    dayNumber: {
      type: [String, Number],
      required: true
    },
    price: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'month',
      validator: (value) => ['month', 'year'].includes(value)
    },
    active: {
      type: Boolean,
      default: false
    },
    notActive: {
      type: Boolean,
      default: false
    },
    notAvailable: {
      type: Boolean,
      default: false
    },
    booked: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  data() {
    return {
      hover: false
    }
  },
  methods: {
    handleClick() {
      if (!this.notAvailable) {
        this.$emit('click');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-calendar-day {
  background-color: var(--marks-color-white);
  border: 1px solid var(--marks-color-gray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &--no-border {
    border: none;
  }

  // Year variant with no-border - corner radius for last week
  &--year.marks-calendar-day--no-border {
    // These will be applied via parent wrapper classes
  }

  // Month variant
  &--month {
    min-width: 120px;
    min-height: 120px;
    padding: var(--marks-spacing-gutter-16);
    gap: var(--marks-spacing-gutter-16);
  }

  // Year variant
  &--year {
    min-width: 45px;
    min-height: 65px;
    padding: var(--marks-spacing-gutter-8);
    gap: var(--marks-spacing-gutter-4);
  }

  // Hover state
  &--hover {
    background-color: var(--marks-color-gray-100);
    border-color: var(--marks-color-black);
  }

  // Active state
  &--active {
    background-color: var(--marks-color-primary-light);
    
    &.marks-calendar-day--month {
      border-color: var(--marks-color-primary-solid);
    }
    
    &.marks-calendar-day--year {
      border-color: var(--marks-color-black);
    }
  }

  // Not active state
  &--not-active {
    background-color: var(--marks-color-gray-150);
    border-color: var(--marks-color-gray-200);
    color: var(--marks-color-gray-300);
  }

  // Not available state
  &--not-available {
    background-color: var(--marks-color-gray-100);
    border-color: var(--marks-color-gray-200);
    color: var(--marks-color-gray-300);
  }

  // Booked state
  &--booked {
    background-color: var(--marks-color-white);
    border-color: var(--marks-color-gray-200);
  }
}

.marks-calendar-day__day-number {
  align-self: stretch;
  flex: 1;
  position: relative;
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-bold;
  color: var(--marks-color-black);

  .marks-calendar-day--not-active &,
  .marks-calendar-day--not-available & {
    color: var(--marks-color-gray-300);
  }

  &--strikethrough {
    text-decoration: line-through;
  }
}

.marks-calendar-day__price-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--marks-spacing-gutter-4);
  font-size: 16px;

  .marks-calendar-day--year & {
    font-size: 10px;
    color: var(--marks-color-gray-350);
  }
}

.marks-calendar-day__price {
  align-self: stretch;
  position: relative;
  @include marks-typography-paragraph-md-multiline;
  font-size: 16px;
  color: var(--marks-color-black);

  .marks-calendar-day--year & {
    @include marks-typography-paragraph-xs-one-line;
    color: var(--marks-color-gray-350);
  }

  .marks-calendar-day--not-active & {
    color: var(--marks-color-gray-300);
  }
}

.marks-calendar-day__currency {
  align-self: stretch;
  position: relative;
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-350);
}

.marks-calendar-day__price-year {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  @include marks-typography-paragraph-xs-one-line;
  color: var(--marks-color-gray-350);

  .marks-calendar-day--not-active & {
    color: var(--marks-color-gray-300);
  }
}
</style>
