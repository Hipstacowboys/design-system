<!--
  Figma Node ID: TBD
  Component: Time Slot
  Context: Calendar day pill – single timeslot

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
  - time (String, required) - Time label (e.g. "12:00")
  - label (String, optional) - Optional guest / note label
  - status (String, default: 'empty') - 'confirmed' | 'empty' | 'past' | 'pending'
  - disabled (Boolean, default: false)
-->
<template>
  <button
    type="button"
    :class="[
      'marks-time-slot',
      `marks-time-slot--status-${status}`,
      {
        'marks-time-slot--hover': hover && !disabled,
        'marks-time-slot--clicked': clicked && !disabled,
        'marks-time-slot--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span class="marks-time-slot__time">
      {{ time }}
    </span>
    <span v-if="label" class="marks-time-slot__label">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'marksTimeSlot',
  props: {
    time: {
      type: String,
      required: true
    },
    label: {
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

.marks-time-slot {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--marks-spacing-8);
  padding: var(--marks-spacing-4) var(--marks-spacing-12) var(--marks-spacing-4) var(--marks-spacing-8);
  border-radius: var(--marks-radius-8);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  background: var(--marks-color-gray-100);
  box-sizing: border-box;
  transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  @include marks-typography-paragraph-sm-one-line;

  // Base text colors
  color: var(--marks-color-black);

  &:focus-visible {
    outline: 2px solid var(--marks-color-primary-solid);
    outline-offset: 2px;
  }

  &__time {
    @include marks-typography-paragraph-sm-one-line;
    color: var(--marks-color-black);
  }

  &__label {
    @include marks-typography-paragraph-sm-one-line;
    color: var(--marks-color-gray-400);
  }

  // Status: confirmed (green)
  &--status-confirmed {
    background: var(--marks-color-green-100);
    border-color: var(--marks-color-green-200);
  }

  // Status: pending (orange)
  &--status-pending {
    background:
      repeating-linear-gradient(
        45deg,
        var(--marks-color-orange-100),
        var(--marks-color-orange-100) 4px,
        rgba(255, 255, 255, 0.4) 4px,
        rgba(255, 255, 255, 0.4) 8px
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

  // Hover state – slightly increase opacity / darken border
  &--hover.marks-time-slot--status-confirmed {
    opacity: 0.9;
  }

  &--hover.marks-time-slot--status-pending {
    // Slightly stronger pending texture on hover, but still subtle
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

  &--hover.marks-time-slot--status-empty {
    background: var(--marks-color-gray-150);
  }

  &--hover.marks-time-slot--status-past {
    opacity: 0.8;
  }

  // Clicked state – stronger emphasis
  &--clicked.marks-time-slot--status-confirmed {
    opacity: 0.8;
  }

  &--clicked.marks-time-slot--status-pending {
    opacity: 0.8;
  }

  &--clicked.marks-time-slot--status-empty {
    background: var(--marks-color-gray-150);
    border-color: var(--marks-color-gray-300);
  }

  &--clicked.marks-time-slot--status-past {
    opacity: 0.6;
  }

  // Disabled state – overrides others
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: transparent;
    border-color: var(--marks-color-gray-150);

    .marks-time-slot__time,
    .marks-time-slot__label {
      color: var(--marks-color-gray-200);
    }
  }
}
</style>

