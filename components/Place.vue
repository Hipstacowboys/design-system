<!--
  Figma Node ID: 18-11814
  Component: Place
  Variants: desktop, mobile (responsive)
  States: default, hover
  Features: optional photo, status, action buttons with dropdown
-->
<template>
  <div
    ref="placeContainer"
    :class="[
      'marks-place',
      {
        'marks-place--hover': hover,
        'marks-place--mobile': isMobileLayout
      }
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Desktop Layout -->
    <div class="marks-place__desktop">
      <!-- Image (always shown on desktop) -->
      <div class="marks-place__image-desktop">
        <slot name="image">
          <div v-if="!image" class="marks-place__image-placeholder"></div>
          <img v-else :src="image" :alt="customerName || 'Place image'" />
        </slot>
      </div>
      <!-- Customer Info -->
      <div class="marks-place__customer-info">
        <div class="marks-place__customer-details">
          <div class="marks-place__customer-name" :title="customerName">{{ truncatedCustomerName }}</div>
        </div>
        <div v-if="peopleCount" class="marks-place__customer-additional">
          <div class="marks-place__customer-additional-text">{{ peopleCount }}</div>
        </div>
      </div>

      <!-- Date and Nights Info -->
      <div class="marks-place__date-nights">
        <div class="marks-place__customer-details">
          <div class="marks-place__customer-name" :title="placeType">{{ truncatedPlaceType }}</div>
        </div>
        <div v-if="pricePerNight" class="marks-place__nights">
          <div class="marks-place__nights-text">{{ pricePerNight }}</div>
        </div>
      </div>

      <!-- Price Info -->
      <div class="marks-place__price-info">
        <div class="marks-place__customer-details">
          <div class="marks-place__customer-name" :title="season">{{ truncatedSeason }}</div>
        </div>
        <div v-if="pricingBasis" class="marks-place__discount-price">
          <div class="marks-place__discount-price-text">{{ pricingBasis }}</div>
        </div>
      </div>

      <!-- Status -->
      <div v-if="statusType" class="marks-place__status-container">
        <Status
          :type="statusType"
          :label="statusLabel"
        />
      </div>

      <!-- Actions -->
      <div class="marks-place__actions">
        <Dropdown>
          <template #trigger>
            <ButtonSecondary
              size="small"
              :icon-only="true"
              :left-icon="PhDotsThree"
              class="marks-place__action-button"
            />
          </template>
          <slot name="dropdown-actions">
            <button class="marks-dropdown__item">Sync availability</button>
            <button class="marks-dropdown__item">Remove place</button>
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
    <div class="marks-place__mobile">
      <!-- Image (shown on mobile) -->
      <div v-if="image || $slots.image" class="marks-place__image">
        <slot name="image">
          <div v-if="!image" class="marks-place__image-placeholder"></div>
          <img v-else :src="image" :alt="customerName || 'Place image'" />
        </slot>
      </div>
      <!-- Customer Parent (with status) -->
      <div class="marks-place__customer-parent">
        <div class="marks-place__customer-mobile">
          <div class="marks-place__customer-details">
            <div class="marks-place__customer-name" :title="customerName">{{ truncatedCustomerName }}</div>
          </div>
          <div v-if="peopleCount" class="marks-place__nights-mobile">
            <div class="marks-place__customer-additional-text">{{ peopleCount }}</div>
          </div>
        </div>
        <div v-if="statusType" class="marks-place__status-container-mobile">
          <Status
            :type="statusType"
            :label="statusLabel"
          />
        </div>
      </div>

      <!-- Date and Nights (with borders) -->
      <div class="marks-place__date-nights-mobile">
        <div class="marks-place__customer-details">
          <div class="marks-place__customer-name" :title="placeType">{{ truncatedPlaceType }}</div>
        </div>
        <div v-if="pricePerNight" class="marks-place__nights">
          <div class="marks-place__nights-text">{{ pricePerNight }}</div>
        </div>
      </div>

      <!-- Price Container Parent (with actions) -->
      <div class="marks-place__price-container-parent">
        <div class="marks-place__price-container-mobile">
          <div class="marks-place__customer-details">
            <div class="marks-place__customer-name" :title="season">{{ truncatedSeason }}</div>
          </div>
          <div v-if="pricingBasis" class="marks-place__discount-price">
            <div class="marks-place__discount-price-text">{{ pricingBasis }}</div>
          </div>
        </div>
        <div class="marks-place__actions-mobile">
          <Dropdown>
            <template #trigger>
              <ButtonSecondary
                size="small"
                :left-icon="PhDotsThree"
                text="Actions"
                class="marks-place__action-button-mobile"
              />
            </template>
            <slot name="dropdown-actions">
              <button class="marks-dropdown__item">Edit</button>
              <button class="marks-dropdown__item">Duplicate</button>
              <button class="marks-dropdown__item">Delete</button>
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
    </div>
  </div>
</template>

<script>
import { PhDotsThree, PhArrowRight } from '@phosphor-icons/vue';
import Status from './Status.vue';
import ButtonSecondary from './ButtonSecondary.vue';
import ButtonLine from './ButtonLine.vue';
import Dropdown from './Dropdown.vue';

export default {
  name: 'marksPlace',
  components: {
    PhDotsThree,
    PhArrowRight,
    Status,
    ButtonSecondary,
    ButtonLine,
    Dropdown
  },
  props: {
    image: {
      type: String,
      default: null
    },
    customerName: {
      type: String,
      required: true
    },
    peopleCount: {
      type: String,
      default: null
    },
    placeType: {
      type: String,
      default: null
    },
    pricePerNight: {
      type: String,
      default: null
    },
    season: {
      type: String,
      default: null
    },
    pricingBasis: {
      type: String,
      default: null
    },
    statusType: {
      type: String,
      default: null,
      validator: (value) => !value || ['success', 'warning', 'info', 'error'].includes(value)
    },
    statusLabel: {
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
    },
    truncatedCustomerName() {
      return this.truncateText(this.customerName, 18);
    },
    truncatedPlaceType() {
      return this.truncateText(this.placeType, 18);
    },
    truncatedSeason() {
      return this.truncateText(this.season, 18);
    }
  },
  methods: {
    truncateText(text, maxLength) {
      if (!text) return '';
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    },
    checkLayout() {
      if (this.$refs.placeContainer) {
        const width = this.$refs.placeContainer.offsetWidth;
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
      if (this.$refs.placeContainer) {
        this.resizeObserver.observe(this.$refs.placeContainer);
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

.marks-place {
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

.marks-place__image-desktop {
  height: 66px;
  width: 98px;
  position: relative;
  border-radius: var(--marks-radius-8);
  background-color: var(--marks-color-gray-150);
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.marks-place__image-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--marks-color-gray-150);
}

.marks-place__image {
  display: none; // Hidden on desktop, shown on mobile
}

.marks-place__desktop {
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-8) var(--marks-spacing-24) var(--marks-spacing-8) var(--marks-spacing-8);
  gap: var(--marks-spacing-24);
}

.marks-place__mobile {
  display: none; // Hidden on desktop
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--marks-spacing-16) 0;
  gap: var(--marks-spacing-16);
  width: 100%;
  box-sizing: border-box;
}

.marks-place__customer-info,
.marks-place__date-nights,
.marks-place__price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--marks-spacing-4) 0;
  gap: var(--marks-spacing-4);
}

.marks-place__customer-details {
  display: flex;
  align-items: center;
}

.marks-place__customer-name {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.marks-place__customer-additional,
.marks-place__customer-additional-text,
.marks-place__nights,
.marks-place__nights-text,
.marks-place__discount-price,
.marks-place__discount-price-text {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
}

.marks-place__status-container {
  display: flex;
  align-items: center;
}

.marks-place__actions {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-8);
  margin-left: auto;
}

.marks-place__action-button {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

.marks-place__action-button-mobile {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

// Mobile styles (based on component width, not viewport)
.marks-place--mobile {
  .marks-place__desktop {
    display: none;
  }

  .marks-place__mobile {
    display: flex;
  }

  .marks-place__image {
    display: block;
    align-self: stretch;
    padding: 0 var(--marks-spacing-16);
    width: 100%;
    box-sizing: border-box;

    img,
    .marks-place__image-placeholder {
      width: 100%;
      max-width: 139.2px;
      height: 96px;
      border-radius: var(--marks-radius-8);
      background-color: var(--marks-color-gray-150);
      object-fit: cover;
    }
  }

  .marks-place__customer-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--marks-spacing-16);
    gap: var(--marks-spacing-16);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-place__customer-mobile {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--marks-spacing-4);
  }

  .marks-place__status-container-mobile {
    display: flex;
    align-items: center;
  }

  .marks-place__date-nights-mobile {
    align-self: stretch;
    border-top: 1px solid var(--marks-color-gray-200);
    border-bottom: 1px solid var(--marks-color-gray-200);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--marks-spacing-20) var(--marks-spacing-16);
    gap: var(--marks-spacing-4);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-place__price-container-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--marks-spacing-16);
    gap: var(--marks-spacing-16);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-place__price-container-mobile {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--marks-spacing-4);
  }

  .marks-place__actions-mobile {
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-8);
    text-align: center;
  }

  .marks-place__nights-mobile {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-4);
  }
}
</style>
