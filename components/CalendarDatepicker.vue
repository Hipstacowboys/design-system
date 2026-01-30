<!--
  Figma Node ID: 82-20485
  Component: Calendar Datepicker
  Features: compact calendar with month navigation and date selection
  
  Props:
  - modelValue (Date, optional) - v-model binding for selected date
  
  Events:
  - update:modelValue - Emitted when date is selected (for v-model)
  - change - Emitted when date is selected, passes the selected Date object
-->
<template>
  <div class="marks-calendar-datepicker">
    <div class="marks-calendar-datepicker__header">
      <div class="marks-calendar-datepicker__title">
        <b class="marks-calendar-datepicker__month-name">{{ currentMonthName }}</b>
        <div class="marks-calendar-datepicker__month-switches">
          <ButtonLine
            size="small"
            :icon-only="true"
            :left-icon="PhCaretLeft"
            @click="previousMonth"
          />
          <ButtonLine
            size="small"
            :icon-only="true"
            :right-icon="PhCaretRight"
            @click="nextMonth"
          />
        </div>
      </div>
      <div class="marks-calendar-datepicker__weekdays">
        <div class="marks-calendar-datepicker__weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
      </div>
    </div>
    <div class="marks-calendar-datepicker__month-grid">
      <div
        v-for="(week, weekIndex) in weeks"
        :key="weekIndex"
        class="marks-calendar-datepicker__week"
        :class="{
          'marks-calendar-datepicker__week--first': weekIndex === 0,
          'marks-calendar-datepicker__week--last': weekIndex === weeks.length - 1
        }"
      >
        <div
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          class="marks-calendar-datepicker__day-wrapper"
          :class="{
            'marks-calendar-datepicker__day-wrapper--first-in-week': dayIndex === 0,
            'marks-calendar-datepicker__day-wrapper--last-in-week': dayIndex === 6,
            'marks-calendar-datepicker__day-wrapper--first-week': weekIndex === 0,
            'marks-calendar-datepicker__day-wrapper--last-week': weekIndex === weeks.length - 1,
            'marks-calendar-datepicker__day-wrapper--first-week-first-day': weekIndex === 0 && dayIndex === 0,
            'marks-calendar-datepicker__day-wrapper--first-week-last-day': weekIndex === 0 && dayIndex === 6,
            'marks-calendar-datepicker__day-wrapper--last-week-first-day': weekIndex === weeks.length - 1 && dayIndex === 0,
            'marks-calendar-datepicker__day-wrapper--last-week-last-day': weekIndex === weeks.length - 1 && dayIndex === 6,
            'marks-calendar-datepicker__day-wrapper--not-active': day.notActive || day.isPreviousMonth || day.isNextMonth,
            'marks-calendar-datepicker__day-wrapper--not-available': day.notAvailable,
            'marks-calendar-datepicker__day-wrapper--active': day.active
          }"
        >
          <CalendarDay
            :day-number="day.dayNumber"
            :price="day.price"
            :variant="'year'"
            :active="day.active"
            :not-active="day.notActive || day.isPreviousMonth || day.isNextMonth"
            :not-available="day.notAvailable"
            :no-border="true"
            @click="handleDayClick(day)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue';
import ButtonLine from './ButtonLine.vue';
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';

export default {
  name: 'marksCalendarDatepicker',
  components: {
    CalendarDay,
    ButtonLine,
    PhCaretLeft,
    PhCaretRight
  },
  props: {
    modelValue: {
      type: Date,
      default: null
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      currentDate: this.modelValue ? new Date(this.modelValue) : new Date(),
      weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      // Icons must be in data() to be passed as props
      PhCaretLeft,
      PhCaretRight
    }
  },
  computed: {
    currentMonthName() {
      return this.monthNames[this.currentDate.getMonth()];
    },
    weeks() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      
      // Get first day of month and last day of month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      
      // Get first Monday of the calendar view (might be previous month)
      const firstMonday = new Date(firstDay);
      const dayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Convert to Monday = 0
      firstMonday.setDate(firstDay.getDate() - daysToMonday);
      
      // Get last Sunday of the calendar view (might be next month)
      const lastSunday = new Date(lastDay);
      const lastDayOfWeek = lastDay.getDay();
      const daysToSunday = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;
      lastSunday.setDate(lastDay.getDate() + daysToSunday);
      
      // Generate all days
      const days = [];
      const current = new Date(firstMonday);
      
      while (current <= lastSunday) {
        const dayDate = new Date(current);
        const isPreviousMonth = dayDate.getMonth() < month;
        const isNextMonth = dayDate.getMonth() > month;
        const isCurrentMonth = !isPreviousMonth && !isNextMonth;
        const isSelected = this.modelValue && 
          dayDate.getDate() === this.modelValue.getDate() &&
          dayDate.getMonth() === this.modelValue.getMonth() &&
          dayDate.getFullYear() === this.modelValue.getFullYear();
        
        days.push({
          dayNumber: dayDate.getDate(),
          date: new Date(dayDate),
          isPreviousMonth,
          isNextMonth,
          isCurrentMonth,
          active: isSelected,
          price: isCurrentMonth ? '99.00' : null,
          notAvailable: isPreviousMonth && dayDate.getDate() <= 7 // Days 1-7 of previous month
        });
        
        current.setDate(current.getDate() + 1);
      }
      
      // Organize into weeks
      const weeks = [];
      for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
      }
      
      return weeks;
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue) {
        this.currentDate = new Date(newValue);
      }
    }
  },
  methods: {
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },
    handleDayClick(day) {
      if (!day.notAvailable && day.isCurrentMonth) {
        this.$emit('update:modelValue', day.date);
        this.$emit('change', day.date);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-calendar-datepicker {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.marks-calendar-datepicker__header {
  align-self: stretch;
  border-radius: var(--marks-radius-12) var(--marks-radius-12) 0px 0px;
  border-top: 1px solid var(--marks-color-gray-200);
  border-right: 1px solid var(--marks-color-gray-200);
  border-left: 1px solid var(--marks-color-gray-200);
  border-bottom: 1px solid var(--marks-color-gray-200);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marks-calendar-datepicker__title {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-16);
  gap: var(--marks-spacing-gutter-20);
}

.marks-calendar-datepicker__month-name {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-bold;
  color: var(--marks-color-black);
}

.marks-calendar-datepicker__month-switches {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-4);
}

.marks-calendar-datepicker__weekdays {
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
  gap: var(--marks-spacing-gutter-28);
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-350);
}

.marks-calendar-datepicker__weekday {
  flex: 1;
  text-align: center;
}

.marks-calendar-datepicker__month-grid {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid var(--marks-color-gray-200);
  border-bottom: 1px solid var(--marks-color-gray-200);
  border-left: 1px solid var(--marks-color-gray-200);
  border-radius: 0px 0px var(--marks-radius-12) var(--marks-radius-12);
}

.marks-calendar-datepicker__week {
  align-self: stretch;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.marks-calendar-datepicker__day-wrapper {
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

    &.marks-calendar-datepicker__day-wrapper--not-active {
      border-left-color: var(--marks-color-gray-150);
    }

    &.marks-calendar-datepicker__day-wrapper--not-available {
      border-left-color: var(--marks-color-gray-100);
    }

    &.marks-calendar-datepicker__day-wrapper--active {
      border-left-color: var(--marks-color-primary-light);
    }
  }

  // Last column - border-right matches background
  &--last-in-week {
    border-right: 1px solid transparent;

    &.marks-calendar-datepicker__day-wrapper--not-active {
      border-right-color: var(--marks-color-gray-150);
    }

    &.marks-calendar-datepicker__day-wrapper--not-available {
      border-right-color: var(--marks-color-gray-100);
    }

    &.marks-calendar-datepicker__day-wrapper--active {
      border-right-color: var(--marks-color-primary-light);
    }
  }

  // First row - top border should match background (already set above via state classes)

  // Last week - border-bottom matches background
  &--last-week {
    border-bottom: 1px solid var(--marks-color-white);

    &.marks-calendar-datepicker__day-wrapper--not-active {
      border-bottom-color: var(--marks-color-gray-150);
    }

    &.marks-calendar-datepicker__day-wrapper--not-available {
      border-bottom-color: var(--marks-color-gray-100);
    }

    &.marks-calendar-datepicker__day-wrapper--active {
      border-bottom-color: var(--marks-color-primary-light);
    }
  }

  // Active state - border-top and border-left match background (handled by wrapper state classes)

  // Hover state - show all borders in black (white in dark mode)
  &:hover {
    z-index: 2;
    border-top: 1px solid var(--marks-color-black) !important;
    border-right: 1px solid var(--marks-color-black) !important;
    border-bottom: 1px solid var(--marks-color-black) !important;
    border-left: 1px solid var(--marks-color-black) !important;
    border-radius: 0 !important;
  }

  // Last week first day - bottom-left radius
  &--last-week-first-day {
    border-bottom-left-radius: var(--marks-radius-12);

    :deep(.marks-calendar-day--year.marks-calendar-day--no-border),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--hover),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--active),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--not-active),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--not-available) {
      border-bottom-left-radius: var(--marks-radius-12);
    }
  }

  // Last week last day - bottom-right radius
  &--last-week-last-day {
    border-bottom-right-radius: var(--marks-radius-12);

    :deep(.marks-calendar-day--year.marks-calendar-day--no-border),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--hover),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--active),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--not-active),
    :deep(.marks-calendar-day--year.marks-calendar-day--no-border.marks-calendar-day--not-available) {
      border-bottom-right-radius: var(--marks-radius-12);
    }
  }

  // Hover state - preserve border radius for last week corners
  &--last-week-first-day:hover {
    border-bottom-left-radius: var(--marks-radius-12) !important;
  }

  &--last-week-last-day:hover {
    border-bottom-right-radius: var(--marks-radius-12) !important;
  }

  // Active state - ensure border is visible
  :deep(.marks-calendar-day--active) {
    z-index: 1;
  }
}
</style>

<style lang="scss">
@use '../tokens/variables' as *;

// Dark mode support - global styles to override scoped styles
// Using attribute selector with higher specificity
[data-theme="dark"] .marks-calendar-datepicker__month-name {
  color: var(--marks-color-black) !important;
}

// Dark mode support for borders
:root[data-theme="dark"] .marks-calendar-datepicker {

  &__header {
    border-top-color: var(--marks-color-gray-200);
    border-right-color: var(--marks-color-gray-200);
    border-left-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);
  }

  &__month-grid {
    border-right-color: var(--marks-color-gray-200);
    border-bottom-color: var(--marks-color-gray-200);
    border-left-color: var(--marks-color-gray-200);
  }

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

      &.marks-calendar-datepicker__day-wrapper--not-active {
        border-left-color: var(--marks-color-gray-150);
      }

      &.marks-calendar-datepicker__day-wrapper--not-available {
        border-left-color: var(--marks-color-gray-100);
      }

      &.marks-calendar-datepicker__day-wrapper--active {
        border-left-color: var(--marks-color-primary-light);
      }
    }

    // Last column adjustments
    &--last-in-week {
      border-right-color: transparent;

      &.marks-calendar-datepicker__day-wrapper--not-active {
        border-right-color: var(--marks-color-gray-150);
      }

      &.marks-calendar-datepicker__day-wrapper--not-available {
        border-right-color: var(--marks-color-gray-100);
      }

      &.marks-calendar-datepicker__day-wrapper--active {
        border-right-color: var(--marks-color-primary-light);
      }
    }

    // Last week adjustments
    &--last-week {
      border-bottom-color: var(--marks-color-white);

      &.marks-calendar-datepicker__day-wrapper--not-active {
        border-bottom-color: var(--marks-color-gray-150);
      }

      &.marks-calendar-datepicker__day-wrapper--not-available {
        border-bottom-color: var(--marks-color-gray-100);
      }

      &.marks-calendar-datepicker__day-wrapper--active {
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

    // Hover state - preserve border radius for last week corners in dark mode
    &--last-week-first-day:hover {
      border-bottom-left-radius: var(--marks-radius-12) !important;
    }

    &--last-week-last-day:hover {
      border-bottom-right-radius: var(--marks-radius-12) !important;
    }
  }

  // Last week first day - bottom-left radius in dark mode
  &__day-wrapper--last-week-first-day {
    border-bottom-left-radius: var(--marks-radius-12);
  }

  // Last week last day - bottom-right radius in dark mode
  &__day-wrapper--last-week-last-day {
    border-bottom-right-radius: var(--marks-radius-12);
  }
}
</style>
