<!--
  Figma Node ID: 17-11441
  Component: Booking
  Variants: desktop, mobile (responsive), minimal (prop-controlled)
  States: default, hover
  Features: booking info, status badges, action buttons with dropdown
-->
<template>
  <div
    ref="bookingContainer"
    :class="[
      'marks-booking',
      {
        'marks-booking--hover': hover && !minimal,
        'marks-booking--mobile': isMobileLayout && !minimal,
        'marks-booking--minimal': minimal
      }
    ]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Minimal Layout -->
    <div v-if="minimal" class="marks-booking__minimal">
      <div class="marks-booking__customer-details-minimal">
        <div class="marks-booking__customer-minimal">
          <div class="marks-booking__date-minimal">
            <div class="marks-booking__avatar" :style="{ backgroundColor: avatarColor || '#d1d1d1' }">
              <div class="marks-booking__avatar-text">{{ customerInitial }}</div>
            </div>
            <b class="marks-booking__name-minimal">{{ customerName }}</b>
          </div>
          <div class="marks-booking__nights-minimal">
            <div class="marks-booking__subtitle-text">{{ peopleCount }} pax</div>
          </div>
        </div>
        <div class="marks-booking__status-container-minimal">
          <Dropdown>
            <template #trigger>
              <div class="marks-booking__status-trigger">
                <Status
                  variant="prominent"
              :type="statusType"
              :label="currentStatusLabel"
                />
              </div>
            </template>
            <button
              v-for="option in statusOptions"
              :key="option"
              class="marks-dropdown__item"
              :class="{ 'marks-dropdown__item--selected': option === currentStatusLabel }"
              @click="selectStatus(option)"
            >
              {{ option }}
            </button>
          </Dropdown>
        </div>
      </div>
      <div class="marks-booking__status-parent">
        <div class="marks-booking__badge-custom" :style="{ backgroundColor: badgeColor }">
          <div class="marks-booking__badge-text">{{ badgeLabel }}</div>
        </div>
        <div class="marks-booking__date-range-minimal">
          <div class="marks-booking__subtitle-text">{{ startDateShort }}</div>
          <PhArrowRight :size="12" :weight="'regular'" color="currentColor" />
          <div class="marks-booking__subtitle-text">{{ endDateShort }} ({{ nights }}n)</div>
          <div class="marks-booking__price-minimal">
            <b class="marks-booking__name-minimal">{{ price }}</b>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div v-else-if="!isMobileLayout" class="marks-booking__desktop">
      <!-- Customer Info -->
      <div class="marks-booking__customer-info">
        <div class="marks-booking__customer-details">
          <b class="marks-booking__name">{{ customerName }}</b>
        </div>
        <div class="marks-booking__customer-additional">
          <div class="marks-booking__subtitle-text">{{ peopleCount }}</div>
        </div>
      </div>

      <!-- Date and Nights Info -->
      <div class="marks-booking__date-nights">
        <div class="marks-booking__start-date-info">
          <b class="marks-booking__name">{{ startDateShort }}</b>
          <PhArrowRight :size="12" :weight="'regular'" color="currentColor" />
          <b class="marks-booking__name">{{ endDateShort }}</b>
        </div>
        <div class="marks-booking__nights">
          <div class="marks-booking__subtitle-text">{{ nights }} nights</div>
        </div>
      </div>

      <!-- Price Info -->
      <div class="marks-booking__price-info">
        <div class="marks-booking__customer-details">
          <b class="marks-booking__name">{{ price }}</b>
        </div>
        <div class="marks-booking__nights">
          <PhCheck :size="16" :weight="'regular'" color="currentColor" />
          <div class="marks-booking__subtitle-text">{{ deposit }}</div>
        </div>
      </div>

      <!-- Status Container -->
      <div class="marks-booking__status-container">
        <div class="marks-booking__badge-custom" :style="{ backgroundColor: badgeColor }">
          <div class="marks-booking__badge-text">{{ badgeLabel }}</div>
        </div>
        <Dropdown>
          <template #trigger>
            <div class="marks-booking__status-trigger">
              <Status
                variant="prominent"
              :type="statusType"
              :label="currentStatusLabel"
              />
            </div>
          </template>
          <button
            v-for="option in statusOptions"
            :key="option"
            class="marks-dropdown__item"
            :class="{ 'marks-dropdown__item--selected': option === currentStatusLabel }"
            @click="selectStatus(option)"
          >
            {{ option }}
          </button>
        </Dropdown>
      </div>

      <!-- Actions -->
      <div class="marks-booking__actions">
        <Dropdown>
          <template #trigger>
            <ButtonSecondary
              size="small"
              :icon-only="true"
              :left-icon="PhDotsThree"
              class="marks-booking__action-button"
            />
          </template>
          <slot name="dropdown-actions">
            <button class="marks-dropdown__item">Add payment</button>
            <button class="marks-dropdown__item">Remove booking</button>
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
    <div v-else class="marks-booking__mobile">
      <!-- Customer Parent -->
      <div class="marks-booking__customer-parent">
        <div class="marks-booking__customer-mobile">
          <div class="marks-booking__customer-details">
            <b class="marks-booking__name">{{ customerName }}</b>
          </div>
          <div class="marks-booking__nights-mobile">
            <div class="marks-booking__subtitle-text">{{ peopleCount }}</div>
          </div>
        </div>
        <div class="marks-booking__status-container-mobile">
          <Dropdown>
            <template #trigger>
              <div class="marks-booking__status-trigger">
                <Status
                  variant="prominent"
              :type="statusType"
              :label="currentStatusLabel"
                />
              </div>
            </template>
            <button
              v-for="option in statusOptions"
              :key="option"
              class="marks-dropdown__item"
              :class="{ 'marks-dropdown__item--selected': option === currentStatusLabel }"
              @click="selectStatus(option)"
            >
              {{ option }}
            </button>
          </Dropdown>
        </div>
      </div>

      <!-- Date and Nights -->
      <div class="marks-booking__date-nights-mobile">
        <div class="marks-booking__start-date-info">
          <b class="marks-booking__name">{{ startDateLong }}</b>
          <PhArrowRight :size="12" :weight="'regular'" color="currentColor" />
          <b class="marks-booking__name">{{ endDateLong }}</b>
        </div>
        <div class="marks-booking__nights">
          <div class="marks-booking__subtitle-text">{{ nights }} nights</div>
        </div>
      </div>

      <!-- Price Container Parent -->
      <div class="marks-booking__price-container-parent">
        <div class="marks-booking__price-container-mobile">
          <div class="marks-booking__customer-details">
            <b class="marks-booking__name">{{ price }}</b>
          </div>
          <div class="marks-booking__nights">
            <PhCheck :size="16" :weight="'regular'" color="currentColor" />
            <div class="marks-booking__subtitle-text">{{ deposit }}</div>
          </div>
        </div>
        <div class="marks-booking__action-mobile">
          <div class="marks-booking__badge-custom" :style="{ backgroundColor: badgeColor }">
            <div class="marks-booking__badge-text">{{ badgeLabel }}</div>
          </div>
          <Dropdown>
            <template #trigger>
              <ButtonSecondary
                size="small"
                :left-icon="PhDotsThree"
                text="Actions"
                class="marks-booking__action-button-mobile"
              />
            </template>
            <slot name="dropdown-actions">
              <button class="marks-dropdown__item">Add payment</button>
              <button class="marks-dropdown__item">Remove booking</button>
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
import { markRaw } from 'vue';
import { PhDotsThree, PhArrowRight, PhCheck } from '@phosphor-icons/vue';
import Status from './Status.vue';
import ButtonSecondary from './ButtonSecondary.vue';
import ButtonLine from './ButtonLine.vue';
import Dropdown from './Dropdown.vue';

export default {
  name: 'marksBooking',
  components: {
    PhDotsThree,
    PhArrowRight,
    PhCheck,
    Status,
    ButtonSecondary,
    ButtonLine,
    Dropdown
  },
  props: {
    customerName: {
      type: String,
      required: true
    },
    peopleCount: {
      type: String,
      required: true
    },
    startDateShort: {
      type: String,
      required: true
    },
    endDateShort: {
      type: String,
      required: true
    },
    startDateLong: {
      type: String,
      required: true
    },
    endDateLong: {
      type: String,
      required: true
    },
    nights: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    deposit: {
      type: String,
      required: true
    },
    badgeLabel: {
      type: String,
      required: true
    },
    badgeColor: {
      type: String,
      default: '#fd3860'
    },
    avatarColor: {
      type: String,
      default: '#d1d1d1'
    },
    statusType: {
      type: String,
      required: true,
      validator: (value) => ['success', 'warning', 'info', 'error'].includes(value)
    },
    statusLabel: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: null
    },
    actionIcon: {
      type: [Object, String],
      default: () => markRaw(PhArrowRight)
    },
    minimal: {
      type: Boolean,
      default: false
    }
  },
  emits: ['action-click', 'update:modelValue', 'status-change'],
  data() {
    return {
      hover: false,
      PhDotsThree: markRaw(PhDotsThree),
      PhArrowRight: markRaw(PhArrowRight),
      PhCheck: markRaw(PhCheck),
      isMobileLayout: false,
      resizeObserver: null,
      statusOptions: ['Pending', 'Confirmed', 'Payment details sent', 'Paid']
    }
  },
  computed: {
    actionIconComponent() {
      return this.actionIcon || PhArrowRight;
    },
    customerInitial() {
      if (!this.customerName) return '';
      return this.customerName.charAt(0).toUpperCase();
    },
    currentStatusLabel() {
      return this.modelValue !== null ? this.modelValue : this.statusLabel;
    }
  },
  methods: {
    checkLayout() {
      if (this.$refs.bookingContainer && !this.minimal) {
        const width = this.$refs.bookingContainer.offsetWidth;
        this.isMobileLayout = width < 830;
      }
    },
    selectStatus(status) {
      this.$emit('update:modelValue', status);
      this.$emit('status-change', status);
    }
  },
  mounted() {
    if (!this.minimal) {
      this.checkLayout();
      // Use ResizeObserver to watch container width
      if (window.ResizeObserver) {
        this.resizeObserver = new ResizeObserver(() => {
          this.checkLayout();
        });
        if (this.$refs.bookingContainer) {
          this.resizeObserver.observe(this.$refs.bookingContainer);
        }
      } else {
        // Fallback: listen to window resize
        window.addEventListener('resize', this.checkLayout);
      }
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

.marks-booking {
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

.marks-booking__desktop {
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-20) var(--marks-spacing-24);
  gap: var(--marks-spacing-32);
}

.marks-booking__mobile {
  display: none; // Hidden on desktop
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--marks-spacing-16) 0;
  gap: var(--marks-spacing-16);
  width: 100%;
  box-sizing: border-box;
}

.marks-booking__minimal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--marks-spacing-8);
  gap: var(--marks-spacing-8);
  width: 100%;
  box-sizing: border-box;
}

.marks-booking__customer-info,
.marks-booking__date-nights,
.marks-booking__price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-4);
}

.marks-booking__customer-details {
  display: flex;
  align-items: center;
}

.marks-booking__name {
  @include marks-typography-paragraph-md-multiline;
  font-weight: $marks-font-weight-medium;
  color: var(--marks-color-black);
  position: relative;
}

.marks-booking__subtitle-text {
  @include marks-typography-paragraph-sm-multiline;
  color: var(--marks-color-gray-300);
}

.marks-booking__start-date-info {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 6px;
}

.marks-booking__nights {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-8);
}

.marks-booking__status-container {
  display: flex;
  align-items: center;
  gap: 7px;
}

.marks-booking__status-trigger {
  cursor: pointer;
  display: inline-block;
}

.marks-booking__badge-custom {
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-8) var(--marks-spacing-12);
  color: var(--marks-color-white);
}

.marks-booking__badge-text {
  @include marks-typography-paragraph-sm-multiline;
  font-weight: $marks-font-weight-medium;
  color: inherit;
  white-space: nowrap;
}

.marks-booking__actions {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-8);
  margin-left: auto;
}

.marks-booking__action-button {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

.marks-booking__action-button-mobile {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
}

// Mobile styles (based on component width, not viewport)
.marks-booking--mobile {
  .marks-booking__desktop {
    display: none;
  }

  .marks-booking__mobile {
    display: flex;
  }

  .marks-booking__customer-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--marks-spacing-16);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-booking__customer-mobile {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--marks-spacing-4);
  }

  .marks-booking__nights-mobile {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-8);
  }

  .marks-booking__status-container-mobile {
    display: flex;
    align-items: center;
  }

  .marks-booking__date-nights-mobile {
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

  .marks-booking__price-container-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--marks-spacing-16);
    gap: var(--marks-spacing-16);
    width: 100%;
    box-sizing: border-box;
  }

  .marks-booking__price-container-mobile {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--marks-spacing-4);
  }

  .marks-booking__action-mobile {
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-8);
  }
}

// Minimal styles
.marks-booking--minimal {
  .marks-booking__desktop,
  .marks-booking__mobile {
    display: none;
  }

  .marks-booking__minimal {
    display: flex;
  }

  .marks-booking__customer-details-minimal {
    align-self: stretch;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }

  .marks-booking__customer-minimal {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-8);
  }

  .marks-booking__date-minimal {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .marks-booking__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .marks-booking__avatar-text {
    @include marks-typography-paragraph-sm-multiline;
    font-weight: $marks-font-weight-medium;
    color: var(--marks-color-black);
  }

  .marks-booking__name-minimal {
    @include marks-typography-paragraph-md-multiline;
    font-weight: $marks-font-weight-medium;
    color: var(--marks-color-black);
    position: relative;
  }

  .marks-booking__nights-minimal {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-8);
  }

  .marks-booking__status-container-minimal {
    display: flex;
    align-items: center;
  }

  .marks-booking__status-parent {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: var(--marks-spacing-16);
  }

  .marks-booking__date-range-minimal {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .marks-booking__price-minimal {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 var(--marks-spacing-12) 0 0;
  }
}
</style>
