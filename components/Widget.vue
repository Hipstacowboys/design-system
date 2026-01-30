<!--
  Figma Node ID: 18-12114
  Component: Widget
  Variants: desktop, mobile (responsive)
  States: default, hover
  Features: widget info, action buttons with dropdown
-->
<template>
  <div
    ref="widgetContainer"
    :class="[
      'marks-widget',
      {
        'marks-widget--hover': hover,
        'marks-widget--mobile': isMobileLayout
      }
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Desktop Layout -->
    <div class="marks-widget__desktop">
      <!-- Widget Info -->
      <div class="marks-widget__info">
        <div class="marks-widget__details">
          <b class="marks-widget__name">{{ widgetName }}</b>
        </div>
        <div class="marks-widget__subtitle">
          <div class="marks-widget__subtitle-text">{{ subtitle }}</div>
        </div>
      </div>

      <!-- Duration Info -->
      <div class="marks-widget__duration">
        <div class="marks-widget__details">
          <b class="marks-widget__name">{{ duration }}</b>
        </div>
        <div v-if="durationSubtitle" class="marks-widget__subtitle">
          <div class="marks-widget__subtitle-text">{{ durationSubtitle }}</div>
        </div>
      </div>

      <!-- Language Info -->
      <div class="marks-widget__language">
        <div class="marks-widget__details">
          <b class="marks-widget__name">{{ language }}</b>
        </div>
        <div v-if="languageCode" class="marks-widget__subtitle">
          <div class="marks-widget__subtitle-text">{{ languageCode }}</div>
        </div>
      </div>

      <!-- Theme Info -->
      <div class="marks-widget__theme">
        <div class="marks-widget__details">
          <b class="marks-widget__name">{{ theme }}</b>
        </div>
        <div v-if="themeSubtitle" class="marks-widget__subtitle">
          <div class="marks-widget__subtitle-text">{{ themeSubtitle }}</div>
        </div>
      </div>

      <!-- Actions -->
      <div class="marks-widget__actions">
        <Dropdown>
          <template #trigger>
            <ButtonSecondary
              size="small"
              :icon-only="true"
              :left-icon="PhDotsThree"
              class="marks-widget__action-button"
            />
          </template>
          <slot name="dropdown-actions">
            <button class="marks-dropdown__item">Copy code</button>
            <button class="marks-dropdown__item">Delete widget</button>
          </slot>
        </Dropdown>
        <ButtonLine
          size="small"
          :icon-only="true"
          :left-icon="actionIconComponent"
          @click="$emit('action-click')"
        />
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="marks-widget__mobile">
      <!-- Customer Parent (with actions) -->
      <div class="marks-widget__customer-parent">
        <div class="marks-widget__customer">
          <div class="marks-widget__details">
            <b class="marks-widget__name">{{ widgetName }}</b>
          </div>
          <div class="marks-widget__subtitle-mobile">
            <div class="marks-widget__subtitle-text">{{ subtitle }}</div>
          </div>
        </div>
        <div class="marks-widget__action">
          <Dropdown>
            <template #trigger>
              <ButtonSecondary
                size="small"
                :left-icon="PhDotsThree"
                text="Actions"
                class="marks-widget__action-button-mobile"
              />
            </template>
            <slot name="dropdown-actions">
              <button class="marks-dropdown__item">Copy code</button>
              <button class="marks-dropdown__item">Delete widget</button>
            </slot>
          </Dropdown>
          <ButtonLine
            size="small"
            :icon-only="true"
            :left-icon="actionIconComponent"
            @click="$emit('action-click')"
          />
        </div>
      </div>

      <!-- Date and Info Sections -->
      <div class="marks-widget__info-sections">
        <div class="marks-widget__info-item">
          <div class="marks-widget__details">
            <b class="marks-widget__name">{{ duration }}</b>
          </div>
          <div v-if="durationSubtitle" class="marks-widget__subtitle">
            <div class="marks-widget__subtitle-text">{{ durationSubtitle }}</div>
          </div>
        </div>
        <div class="marks-widget__info-item">
          <div class="marks-widget__details">
            <b class="marks-widget__name">{{ language }}</b>
          </div>
          <div v-if="languageCode" class="marks-widget__subtitle">
            <div class="marks-widget__subtitle-text">{{ languageCode }}</div>
          </div>
        </div>
        <div class="marks-widget__info-item">
          <div class="marks-widget__details">
            <b class="marks-widget__name">{{ theme }}</b>
          </div>
          <div v-if="themeSubtitle" class="marks-widget__subtitle">
            <div class="marks-widget__subtitle-text">{{ themeSubtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhDotsThree, PhArrowRight } from '@phosphor-icons/vue';
import ButtonSecondary from './ButtonSecondary.vue';
import ButtonLine from './ButtonLine.vue';
import Dropdown from './Dropdown.vue';

export default {
  name: 'marksWidget',
  components: {
    PhDotsThree,
    PhArrowRight,
    ButtonSecondary,
    ButtonLine,
    Dropdown
  },
  props: {
    widgetName: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    durationSubtitle: {
      type: String,
      default: null
    },
    language: {
      type: String,
      required: true
    },
    languageCode: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      required: true
    },
    themeSubtitle: {
      type: String,
      default: null
    },
    actionIcon: {
      type: [Object, String],
      default: () => PhArrowRight
    }
  },
  emits: ['action-click'],
  data() {
    return {
      hover: false,
      PhDotsThree,
      PhArrowRight,
      isMobileLayout: false,
      resizeObserver: null
    }
  },
  computed: {
    actionIconComponent() {
      return this.actionIcon || PhArrowRight;
    }
  },
  methods: {
    checkLayout() {
      if (this.$refs.widgetContainer) {
        const width = this.$refs.widgetContainer.offsetWidth;
        this.isMobileLayout = width < 830;
      }
    }
  },
  mounted() {
    this.checkLayout();
    // Use ResizeObserver to watch container width
    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkLayout();
      });
      if (this.$refs.widgetContainer) {
        this.resizeObserver.observe(this.$refs.widgetContainer);
      }
    } else {
      // Fallback: listen to window resize
      window.addEventListener('resize', this.checkLayout);
    }
  },
  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } else {
      window.removeEventListener('resize', this.checkLayout);
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-widget {
  position: relative;
  border-radius: var(--marks-radius-12);
  background-color: var(--marks-color-white);
  border: 1px solid var(--marks-color-gray-200);
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &--hover {
    background-color: var(--marks-color-gray-100);
    border-color: var(--marks-color-black);
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.3);
  }
}

.marks-widget__desktop {
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-20) var(--marks-spacing-gutter-24);
  gap: var(--marks-spacing-gutter-32);
}

.marks-widget__mobile {
  display: none; // Hidden on desktop
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--marks-spacing-gutter-16) 0;
  gap: var(--marks-spacing-gutter-16);
  width: 100%;
  box-sizing: border-box;
}

.marks-widget__info,
.marks-widget__duration,
.marks-widget__language,
.marks-widget__theme {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-4);
}

.marks-widget__details {
  display: flex;
  align-items: center;
}

.marks-widget__name {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  position: relative;
}

.marks-widget__subtitle,
.marks-widget__subtitle-text {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
}

.marks-widget__actions {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  margin-left: auto;
}

.marks-widget__action-button {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

.marks-widget__action-button-mobile {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

// Mobile styles (based on component width, not viewport)
.marks-widget--mobile {
  .marks-widget__desktop {
    display: none;
  }

  .marks-widget__mobile {
    display: flex;
  }

  .marks-widget__customer-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--marks-spacing-gutter-16);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-widget__customer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--marks-spacing-gutter-4);
  }

  .marks-widget__subtitle-mobile {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-gutter-4);
  }

  .marks-widget__action {
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-gutter-8);
    text-align: center;
  }

  .marks-widget__info-sections {
    align-self: stretch;
    border-top: 1px solid var(--marks-color-gray-200);
    display: flex;
    align-items: flex-start;
    padding: var(--marks-spacing-gutter-20) var(--marks-spacing-gutter-16) 0;
    gap: var(--marks-spacing-gutter-8);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-widget__info-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--marks-spacing-gutter-4);
    min-height: 40px;
  }
}
</style>
