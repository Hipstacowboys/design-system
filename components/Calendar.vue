<!--
  Figma Node ID: 82-20079
  Component: Calendar
  Features: month view calendar with days and bookings
  
  Props:
  - variant (String, default: 'month') - Calendar variant: 'month' or 'year'
  - days (Array, required) - Array of day objects, each with:
    - dayNumber (String|Number, required) - Day number
    - price (String, optional) - Price to display
    - currency (String, optional) - Currency code
    - active (Boolean, optional) - Whether day is active
    - notActive (Boolean, optional) - Whether day is not active
    - notAvailable (Boolean, optional) - Whether day is not available
    - booked (Boolean, optional) - Whether day is booked
    - isPreviousMonth (Boolean, optional) - Whether day belongs to previous month
    - isNextMonth (Boolean, optional) - Whether day belongs to next month
  
  Events:
  - day-click - Emitted when a day is clicked, passes the day object
-->
<template>
  <div class="marks-calendar">
    <div
      v-for="(week, weekIndex) in weeks"
      :key="weekIndex"
      class="marks-calendar__week"
      :class="{
        'marks-calendar__week--first': weekIndex === 0,
        'marks-calendar__week--last': weekIndex === weeks.length - 1
      }"
    >
      <div
        v-for="(day, dayIndex) in week"
        :key="dayIndex"
        class="marks-calendar__day-wrapper"
        :class="{
          'marks-calendar__day-wrapper--first-in-week': dayIndex === 0,
          'marks-calendar__day-wrapper--last-in-week': dayIndex === 6,
          'marks-calendar__day-wrapper--first-week': weekIndex === 0,
          'marks-calendar__day-wrapper--last-week': weekIndex === weeks.length - 1,
          'marks-calendar__day-wrapper--first-week-first-day': weekIndex === 0 && dayIndex === 0,
          'marks-calendar__day-wrapper--first-week-last-day': weekIndex === 0 && dayIndex === 6,
          'marks-calendar__day-wrapper--last-week-first-day': weekIndex === weeks.length - 1 && dayIndex === 0,
          'marks-calendar__day-wrapper--last-week-last-day': weekIndex === weeks.length - 1 && dayIndex === 6,
          'marks-calendar__day-wrapper--not-active': day.notActive || day.isPreviousMonth || day.isNextMonth,
          'marks-calendar__day-wrapper--not-available': day.notAvailable,
          'marks-calendar__day-wrapper--active': day.active
        }"
      >
        <CalendarDay
          :day-number="day.dayNumber === 'Today' ? 'Today' : day.dayNumber"
          :price="day.price"
          :currency="day.currency"
          :variant="variant"
          :active="day.active"
          :not-active="day.notActive || day.isPreviousMonth || day.isNextMonth"
          :not-available="day.notAvailable"
          :booked="day.booked"
          :no-border="true"
          @click="handleDayClick(day)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'marksCalendar',
  components: {
    CalendarDay
  },
  props: {
    variant: {
      type: String,
      default: 'month',
      validator: (value) => ['month', 'year'].includes(value)
    },
    days: {
      type: Array,
      required: true,
      default: () => []
      // Each day object should have:
      // - dayNumber: String|Number (required)
      // - price: String (optional)
      // - currency: String (optional)
      // - active: Boolean (optional)
      // - notActive: Boolean (optional)
      // - notAvailable: Boolean (optional)
      // - booked: Boolean (optional)
    },
    modelValue: {
      type: Object,
      default: null
      // Selected day object (for v-model support)
    }
  },
  emits: ['day-click', 'update:modelValue', 'change'],
  computed: {
    weeks() {
      // Organize days into weeks (7 days per week)
      // If modelValue is provided, mark the matching day as active
      const daysWithActive = this.days.map(day => {
        if (this.modelValue && this.modelValue.dayNumber === day.dayNumber) {
          return { ...day, active: true };
        }
        // If modelValue is not used, keep the original active state from days prop
        return day;
      });
      
      const weeks = [];
      for (let i = 0; i < daysWithActive.length; i += 7) {
        weeks.push(daysWithActive.slice(i, i + 7));
      }
      return weeks;
    }
  },
  methods: {
    handleDayClick(day) {
      this.$emit('day-click', day);
      
      // If v-model is used, update the modelValue
      if (!day.notAvailable && !day.isPreviousMonth && !day.isNextMonth) {
        this.$emit('update:modelValue', day);
        this.$emit('change', day);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-calendar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.marks-calendar__week {
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.marks-calendar__day-wrapper {
  align-self: stretch;
  flex: 1;
  position: relative;
  // Reserve space for all borders to prevent jump
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: border-color 0.2s ease, z-index 0s;

  // Default borders - right and bottom visible, top and left match background
  // Default: white background
  border-right: 1px solid var(--marks-color-gray-200);
  border-bottom: 1px solid var(--marks-color-gray-200);
  border-top: 1px solid var(--marks-color-white);
  border-left: 1px solid var(--marks-color-white);

  // Not active - match background gray-150
  &--not-active {
    border-top-color: var(--marks-color-gray-150);
    border-left-color: var(--marks-color-gray-150);
    border-right-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);
  }

  // Not available - match background gray-100
  &--not-available {
    border-top-color: var(--marks-color-gray-100);
    border-left-color: var(--marks-color-gray-100);
    border-right-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);
  }

  // Active state - border-top and border-left match active background (primary-light)
  &--active {
    border-top-color: var(--marks-color-primary-light);
    border-left-color: var(--marks-color-primary-light);
    border-right-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);
  }

  // First column - border-left matches background
  &--first-in-week {
    border-left: 1px solid transparent;

    &.marks-calendar__day-wrapper--not-active {
      border-left-color: var(--marks-color-gray-150);
    }

    &.marks-calendar__day-wrapper--not-available {
      border-left-color: var(--marks-color-gray-100);
    }

    &.marks-calendar__day-wrapper--active {
      border-left-color: var(--marks-color-primary-light);
    }
  }

  // Last column - border-right matches background
  &--last-in-week {
    border-right: 1px solid transparent;

    &.marks-calendar__day-wrapper--not-active {
      border-right-color: var(--marks-color-gray-150);
    }

    &.marks-calendar__day-wrapper--not-available {
      border-right-color: var(--marks-color-gray-100);
    }

    &.marks-calendar__day-wrapper--active {
      border-right-color: var(--marks-color-primary-light);
    }
  }

  // First week - top border should match background (already set above via state classes)

  // Last week - border-bottom matches background
  &--last-week {
    border-bottom: 1px solid var(--marks-color-white);

    &.marks-calendar__day-wrapper--not-active {
      border-bottom-color: var(--marks-color-gray-150);
    }

    &.marks-calendar__day-wrapper--not-available {
      border-bottom-color: var(--marks-color-gray-100);
    }

    &.marks-calendar__day-wrapper--active {
      border-bottom-color: var(--marks-color-primary-light);
    }
  }

  // Hover state - show all borders in black (white in dark mode)
  // Active state background should remain visible on hover
  &:hover {
    z-index: 2;
    border-top: 1px solid var(--marks-color-black) !important;
    border-right: 1px solid var(--marks-color-black) !important;
    border-bottom: 1px solid var(--marks-color-black) !important;
    border-left: 1px solid var(--marks-color-black) !important;
    border-radius: 0 !important;

    // Keep active background visible on hover - override any hover state from CalendarDay
    &.marks-calendar__day-wrapper--active {
      :deep(.marks-calendar-day--active) {
        background-color: var(--marks-color-primary-light) !important;
      }
      :deep(.marks-calendar-day--active.marks-calendar-day--hover) {
        background-color: var(--marks-color-primary-light) !important;
      }
      :deep(.marks-calendar-day--active.marks-calendar-day--month),
      :deep(.marks-calendar-day--active.marks-calendar-day--year) {
        background-color: var(--marks-color-primary-light) !important;
      }
    }
  }

  // Clicked state (mouse pressed down) - same as hover
  &:active {
    z-index: 2;
    border-top: 1px solid var(--marks-color-black) !important;
    border-right: 1px solid var(--marks-color-black) !important;
    border-bottom: 1px solid var(--marks-color-black) !important;
    border-left: 1px solid var(--marks-color-black) !important;
    border-radius: 0 !important;
  }

  // Active state - ensure border and background are visible
  // This should match CalendarDatepicker's approach
  &--active {
    :deep(.marks-calendar-day--active) {
      z-index: 1;
      background-color: var(--marks-color-primary-light) !important;
    }

    // Ensure active background is visible even when CalendarDay has hover class
    :deep(.marks-calendar-day--active.marks-calendar-day--hover) {
      background-color: var(--marks-color-primary-light) !important;
    }

    // Ensure active background is visible for both month and year variants
    :deep(.marks-calendar-day--active.marks-calendar-day--month),
    :deep(.marks-calendar-day--active.marks-calendar-day--year) {
      background-color: var(--marks-color-primary-light) !important;
    }
  }

  // Rounded corner support for non-full-width calendar (kept for future use)
  // &--first-week-first-day {
  //   border-top-left-radius: var(--marks-radius-16);
  //
  //   :deep(.marks-calendar-day--no-border),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--hover),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-available) {
  //     border-top-left-radius: var(--marks-radius-16);
  //   }
  // }
  //
  // &--first-week-last-day {
  //   border-top-right-radius: var(--marks-radius-16);
  //
  //   :deep(.marks-calendar-day--no-border),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--hover),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-available) {
  //     border-top-right-radius: var(--marks-radius-16);
  //   }
  // }
  //
  // &--last-week-first-day {
  //   border-bottom-left-radius: var(--marks-radius-16);
  //
  //   :deep(.marks-calendar-day--no-border),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--hover),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-available) {
  //     border-bottom-left-radius: var(--marks-radius-16);
  //   }
  // }
  //
  // &--last-week-last-day {
  //   border-bottom-right-radius: var(--marks-radius-16);
  //
  //   :deep(.marks-calendar-day--no-border),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--hover),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-active),
  //   :deep(.marks-calendar-day--no-border.marks-calendar-day--not-available) {
  //     border-bottom-right-radius: var(--marks-radius-16);
  //   }
  // }
}

</style>

<style lang="scss">
@use '../tokens/variables' as *;

// Dark mode support - global styles to override scoped styles
:root[data-theme="dark"] .marks-calendar {
  &__day-wrapper {
    // Default borders in dark mode
    border-top-color: var(--marks-color-white);
    border-left-color: var(--marks-color-white);
    border-right-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);

    // Not active - match background gray-150 in dark mode
    &--not-active {
      border-top-color: var(--marks-color-gray-150);
      border-left-color: var(--marks-color-gray-150);
      border-right-color: var(--marks-color-gray-200);
      border-bottom-color: var(--marks-color-gray-200);
    }

    // Not available - match background gray-100 in dark mode
    &--not-available {
      border-top-color: var(--marks-color-gray-100);
      border-left-color: var(--marks-color-gray-100);
      border-right-color: var(--marks-color-gray-200);
      border-bottom-color: var(--marks-color-gray-200);
    }

    // Active state - match primary-light in dark mode
    &--active {
      border-top-color: var(--marks-color-primary-light);
      border-left-color: var(--marks-color-primary-light);
      border-right-color: var(--marks-color-gray-200);
      border-bottom-color: var(--marks-color-gray-200);
    }

    // First column adjustments
    &--first-in-week {
      border-left-color: transparent;

      &.marks-calendar__day-wrapper--not-active {
        border-left-color: var(--marks-color-gray-150);
      }

      &.marks-calendar__day-wrapper--not-available {
        border-left-color: var(--marks-color-gray-100);
      }

      &.marks-calendar__day-wrapper--active {
        border-left-color: var(--marks-color-primary-light);
      }
    }

    // Last column adjustments
    &--last-in-week {
      border-right-color: transparent;

      &.marks-calendar__day-wrapper--not-active {
        border-right-color: var(--marks-color-gray-150);
      }

      &.marks-calendar__day-wrapper--not-available {
        border-right-color: var(--marks-color-gray-100);
      }

      &.marks-calendar__day-wrapper--active {
        border-right-color: var(--marks-color-primary-light);
      }
    }

    // Last week adjustments
    &--last-week {
      border-bottom-color: var(--marks-color-white);

      &.marks-calendar__day-wrapper--not-active {
        border-bottom-color: var(--marks-color-gray-150);
      }

      &.marks-calendar__day-wrapper--not-available {
        border-bottom-color: var(--marks-color-gray-100);
      }

      &.marks-calendar__day-wrapper--active {
        border-bottom-color: var(--marks-color-primary-light);
      }
    }

    // Hover state - white borders in dark mode
    &:hover {
      border-top-color: var(--marks-color-white) !important;
      border-right-color: var(--marks-color-white) !important;
      border-bottom-color: var(--marks-color-white) !important;
      border-left-color: var(--marks-color-white) !important;
    }

    // Clicked state (mouse pressed down) - white borders in dark mode
    &:active {
      border-top-color: var(--marks-color-white) !important;
      border-right-color: var(--marks-color-white) !important;
      border-bottom-color: var(--marks-color-white) !important;
      border-left-color: var(--marks-color-white) !important;
    }

    // Rounded corner support for non-full-width calendar in dark mode (kept for future use)
    // &--first-week-first-day:hover,
    // &--first-week-last-day:hover,
    // &--last-week-first-day:hover,
    // &--last-week-last-day:hover,
    // &--first-week-first-day:active,
    // &--first-week-last-day:active,
    // &--last-week-first-day:active,
    // &--last-week-last-day:active {
    //   border-radius: var(--marks-radius-16) !important;
    // }

  }
}
</style>
