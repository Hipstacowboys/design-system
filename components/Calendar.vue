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
          'marks-calendar__day-wrapper--first-week-first-day': weekIndex === 0 && dayIndex === 0,
          'marks-calendar__day-wrapper--first-week-last-day': weekIndex === 0 && dayIndex === 6,
          'marks-calendar__day-wrapper--last-week-first-day': weekIndex === weeks.length - 1 && dayIndex === 0,
          'marks-calendar__day-wrapper--last-week-last-day': weekIndex === weeks.length - 1 && dayIndex === 6
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
    }
  },
  emits: ['day-click'],
  computed: {
    weeks() {
      // Organize days into weeks (7 days per week)
      const weeks = [];
      for (let i = 0; i < this.days.length; i += 7) {
        weeks.push(this.days.slice(i, i + 7));
      }
      return weeks;
    }
  },
  methods: {
    handleDayClick(day) {
      this.$emit('day-click', day);
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
  margin-top: -1px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
}

.marks-calendar__day-wrapper {
  align-self: stretch;
  flex: 1;
  position: relative;
  margin-left: -1px;

  &:first-child {
    margin-left: 0;
  }

  // Corner border radius - using :deep() to target CalendarDay
  &--first-week-first-day {
    :deep(.marks-calendar-day) {
      border-radius: var(--marks-radius-16) 0px 0px 0px;
    }
  }

  &--first-week-last-day {
    :deep(.marks-calendar-day) {
      border-radius: 0px var(--marks-radius-16) 0px 0px;
    }
  }

  &--last-week-first-day {
    :deep(.marks-calendar-day) {
      border-radius: 0px 0px 0px var(--marks-radius-16);
    }
  }

  &--last-week-last-day {
    :deep(.marks-calendar-day) {
      border-radius: 0px 0px var(--marks-radius-16) 0px;
    }
  }
}

</style>
