<!--
  Figma Node ID: TBD
  Component: Time Slot Big
  Context: Week calendar view – vertical timeslot card

  Statuses:
  - confirmed
  - empty
  - past
  - pending

  States:
  - default
  - hover
  - clicked
  - disabled

  Props:
  - name (String, optional) - Guest / booking name
  - timeRange (String, required) - Time range label (e.g. "11:00 - 12:00")
  - price (String, optional) - Price label (e.g. "1900 CZK")
  - note (String, optional) - Additional note (shown when space allows)
  - status (String, default: 'empty') - 'confirmed' | 'empty' | 'past' | 'pending'
  - disabled (Boolean, default: false)
-->
<template>
  <button
    type="button"
    :class="[
      'marks-time-slot-big',
      `marks-time-slot-big--status-${status}`,
      {
        'marks-time-slot-big--hover': hover && !disabled,
        'marks-time-slot-big--clicked': clicked && !disabled,
        'marks-time-slot-big--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div class="marks-time-slot-big__content">
      <span v-if="name" class="marks-time-slot-big__name">
        {{ name }}
      </span>
      <span class="marks-time-slot-big__time">
        {{ timeRange }}
      </span>
      <span v-if="price" class="marks-time-slot-big__price">
        {{ price }}
      </span>
      <span v-if="note" class="marks-time-slot-big__note">
        {{ note }}
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'marksTimeSlotBig',
  props: {
    name: {
      type: String,
      default: ''
    },
    timeRange: {
      type: String,
      required: true
    },
    price: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: 'empty',
      validator: (value) => ['confirmed', 'empty', 'past', 'pending'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hover: false,
      clicked: false
    }
  },
  methods: {
    onMouseEnter() {
      if (!this.disabled) {
        this.hover = true
      }
    },
    onMouseLeave() {
      this.hover = false
      this.clicked = false
    },
    onMouseDown() {
      if (!this.disabled) {
        this.clicked = true
      }
    },
    onMouseUp() {
      if (!this.disabled) {
        this.clicked = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-time-slot-big {
  display: inline-flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: flex-start;
  padding: var(--marks-spacing-8) var(--marks-spacing-12) var(--marks-spacing-8) var(--marks-spacing-8);
  border-radius: var(--marks-radius-8);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  background: var(--marks-color-gray-100);
  box-sizing: border-box;
  transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-black);

  &:focus-visible {
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
    width: 100%;
    height: 100%;
  }

  &__name {
    @include marks-typography-paragraph-sm-one-line;
    font-weight: $marks-font-weight-bold;
    color: var(--marks-color-black);
  }

  &__time {
    @include marks-typography-paragraph-sm-one-line;
    color: var(--marks-color-gray-400);
  }

  &__price {
    @include marks-typography-paragraph-sm-one-line;
    color: var(--marks-color-gray-400);
  }

  &__note {
    @include marks-typography-paragraph-sm-multiline;
    color: var(--marks-color-gray-400);
    align-self: stretch;
    text-align: left;
    margin-top: auto; // push note to bottom when space allows
  }

  // Status: confirmed (green)
  &--status-confirmed {
    background: var(--marks-color-green-100);
    border-color: var(--marks-color-green-200);
  }

  // Status: pending (orange with subtle texture, same language as small slot)
  &--status-pending {
    background:
      repeating-linear-gradient(
        45deg,
        var(--marks-color-orange-100),
        var(--marks-color-orange-100) 6px,
        rgba(255, 255, 255, 0.4) 6px,
        rgba(255, 255, 255, 0.4) 10px
      );
    border-color: var(--marks-color-orange-200);
  }

  // Status: empty (light gray)
  &--status-empty {
    background: var(--marks-color-gray-100);
    border-color: var(--marks-color-gray-200);
  }

  // Status: past (green, reduced opacity)
  &--status-past {
    background: var(--marks-color-green-100);
    border-color: var(--marks-color-green-200);
    opacity: 0.6;
  }

  // Hover state
  &--hover.marks-time-slot-big--status-confirmed {
    opacity: 0.9;
  }

  &--hover.marks-time-slot-big--status-pending {
    // Match small TimeSlot pending hover effect
    background:
      repeating-linear-gradient(
        45deg,
        var(--marks-color-orange-100),
        var(--marks-color-orange-100) 6px,
        rgba(255, 255, 255, 0.28) 6px,
        rgba(255, 255, 255, 0.28) 10px
      );
    border-color: var(--marks-color-orange-200);
  }

  &--hover.marks-time-slot-big--status-empty {
    background: var(--marks-color-gray-150);
  }

  &--hover.marks-time-slot-big--status-past {
    opacity: 0.8;
  }

  // Clicked state
  &--clicked.marks-time-slot-big--status-confirmed {
    opacity: 0.8;
  }

  &--clicked.marks-time-slot-big--status-pending {
    opacity: 0.85;
  }

  &--clicked.marks-time-slot-big--status-empty {
    background: var(--marks-color-gray-150);
    border-color: var(--marks-color-gray-300);
  }

  &--clicked.marks-time-slot-big--status-past {
    opacity: 0.6;
  }

  // Disabled state – overrides others
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: transparent;
    border-color: var(--marks-color-gray-150);

    .marks-time-slot-big__name,
    .marks-time-slot-big__time,
    .marks-time-slot-big__price,
    .marks-time-slot-big__note {
      color: var(--marks-color-gray-200);
    }
  }
}
</style>

