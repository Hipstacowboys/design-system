<!--
  Figma Node ID: 74-19878
  Component: Tooltip
  Features: hover-triggered tooltip with dynamic triangle positioning
-->
<template>
  <div class="marks-tooltip-wrapper" ref="wrapperRef" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot name="trigger" />
    <Teleport to="body">
      <Transition name="tooltip">
        <div
          v-if="isVisible"
          ref="tooltipRef"
          class="marks-tooltip"
          :class="{
            'marks-tooltip--arrow-left': arrowPosition === 'left',
            'marks-tooltip--arrow-right': arrowPosition === 'right',
            'marks-tooltip--arrow-center': arrowPosition === 'center'
          }"
          :style="tooltipStyle"
        >
        <div class="marks-tooltip__content">
          <div class="marks-tooltip__upper">
            <div class="marks-tooltip__text">{{ upperLeft }}</div>
            <div class="marks-tooltip__dot"></div>
            <div class="marks-tooltip__text">{{ upperRight }}</div>
          </div>
          <div class="marks-tooltip__bottom">
            <div class="marks-tooltip__text marks-tooltip__text--secondary">{{ bottomLeft }}</div>
            <div class="marks-tooltip__dot marks-tooltip__dot--secondary"></div>
            <div class="marks-tooltip__text marks-tooltip__text--secondary">{{ bottomRight }}</div>
          </div>
        </div>
        <div class="marks-tooltip__arrow"></div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'marksTooltip',
  props: {
    upperLeft: {
      type: String,
      default: ''
    },
    upperRight: {
      type: String,
      default: ''
    },
    bottomLeft: {
      type: String,
      default: ''
    },
    bottomRight: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVisible: false,
      tooltipStyle: {},
      arrowPosition: 'center'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updatePosition, true);
    window.addEventListener('resize', this.updatePosition);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updatePosition, true);
    window.removeEventListener('resize', this.updatePosition);
  },
  methods: {
    showTooltip() {
      this.isVisible = true;
      this.$nextTick(() => {
        this.updatePosition();
      });
    },
    hideTooltip() {
      this.isVisible = false;
    },
    updatePosition() {
      if (!this.$refs.wrapperRef || !this.$refs.tooltipRef) return;

      const triggerRect = this.$refs.wrapperRef.getBoundingClientRect();
      const tooltipRect = this.$refs.tooltipRef.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate horizontal position (centered by default)
      let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
      // Show above by default (10px gap above trigger)
      let top = triggerRect.top - tooltipRect.height - 10;

      // Check if tooltip fits horizontally
      const spaceOnLeft = triggerRect.left;
      const spaceOnRight = viewportWidth - triggerRect.right;
      const tooltipHalfWidth = tooltipRect.width / 2;

      // Determine arrow position and adjust tooltip position
      if (left < 0) {
        // Tooltip would overflow on the left
        left = triggerRect.left;
        this.arrowPosition = 'left';
      } else if (left + tooltipRect.width > viewportWidth) {
        // Tooltip would overflow on the right
        left = triggerRect.right - tooltipRect.width;
        this.arrowPosition = 'right';
      } else {
        // Tooltip fits, center it
        this.arrowPosition = 'center';
      }

      // Check if tooltip fits vertically above (if not, show below)
      if (top < 0 && triggerRect.bottom + tooltipRect.height + 10 <= viewportHeight) {
        top = triggerRect.bottom + 10; // 10px gap below trigger
      }

      this.tooltipStyle = {
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,
        zIndex: 9999
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-tooltip-wrapper {
  display: inline-block;
  position: relative;
}

.marks-tooltip {
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.15);
  border-radius: var(--marks-radius-12);
  background-color: var(--marks-color-black);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--marks-spacing-gutter-8) var(--marks-spacing-gutter-12);
  isolation: isolate;
  position: relative;
}

.marks-tooltip__content {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

.marks-tooltip__upper {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  z-index: 0;
  flex-shrink: 0;
}

.marks-tooltip__bottom {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  z-index: 1;
  flex-shrink: 0;
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-200);
}

.marks-tooltip__text {
  position: relative;
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-white);
  line-height: 150%;

  &--secondary {
    @include marks-typography-paragraph-sm-multiline;
    color: var(--marks-color-gray-200);
  }
}

.marks-tooltip__dot {
  height: 4px;
  width: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--marks-color-white);
  flex-shrink: 0;

  &--secondary {
    background-color: var(--marks-color-gray-200);
  }
}

.marks-tooltip__arrow {
  width: 0;
  height: 0;
  position: absolute;
  bottom: -10px;
  left: calc(50% - 9.5px);
  border-left: 9.5px solid transparent;
  border-right: 9.5px solid transparent;
  border-top: 10px solid var(--marks-color-black);
  z-index: 2;
  flex-shrink: 0;
}

.marks-tooltip--arrow-left .marks-tooltip__arrow {
  left: 20px;
}

.marks-tooltip--arrow-right .marks-tooltip__arrow {
  left: auto;
  right: 20px;
}

.marks-tooltip--arrow-center .marks-tooltip__arrow {
  left: calc(50% - 9.5px);
}

// Tooltip animation
.tooltip-enter-active {
  transition: all 0.2s ease-out;
}

.tooltip-leave-active {
  transition: all 0.15s ease-in;
}

.tooltip-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
