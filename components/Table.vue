<!--
  Component: Table
  Card-style data table with optional header (title, supporting text, actions), column headers, and rows.
  Composes: Checkbox, ButtonGhost, ButtonSecondary, ButtonPrimary, Status.
-->
<template>
  <div class="marks-table">
    <header v-if="headerTitle || headerSupportingText || $slots['header-actions']" class="marks-table__header">
      <div class="marks-table__header-inner">
        <div v-if="headerTitle || headerSupportingText" class="marks-table__header-text">
          <h2 v-if="headerTitle" class="marks-table__title">{{ headerTitle }}</h2>
          <p v-if="headerSupportingText" class="marks-table__supporting">{{ headerSupportingText }}</p>
        </div>
        <div v-if="$slots['header-actions']" class="marks-table__actions">
          <slot name="header-actions" />
        </div>
      </div>
    </header>
    <div class="marks-table__body">
      <template v-for="(col, colIndex) in displayColumns" :key="col.id || colIndex">
        <div
          :class="['marks-table__column', { 'marks-table__column--checkbox': col.type === 'checkbox', 'marks-table__column--actions': col.type === 'actions' }]"
          :style="col.width ? { width: col.width, flex: 'none' } : undefined"
        >
          <div class="marks-table__header-cell">
            <template v-if="col.type === 'checkbox'">
              <Checkbox
                :model-value="isAllSelected"
                :indeterminate="isIndeterminate"
                @update:model-value="toggleSelectAll"
              />
            </template>
            <template v-else-if="col.type === 'actions'">
              <!-- empty header for actions column -->
            </template>
            <template v-else>
              <span class="marks-table__header-label">{{ col.label }}</span>
              <component
                v-if="col.sortable && sortIcon"
                :is="sortIcon"
                class="marks-table__sort-icon"
                :size="16"
                weight="bold"
              />
            </template>
          </div>
          <template v-for="(row, rowIndex) in rows" :key="rowIndex">
            <div class="marks-table__cell">
              <template v-if="col.type === 'checkbox'">
                <Checkbox
                  :model-value="isRowSelected(rowIndex)"
                  @update:model-value="(v) => setRowSelected(rowIndex, v)"
                />
              </template>
              <template v-else-if="col.type === 'actions'">
                <ButtonSecondary
                  size="small"
                  :icon-only="true"
                  :left-icon="actionsIcon"
                  @click="$emit('row-action', { row, rowIndex })"
                />
              </template>
              <template v-else-if="col.type === 'status'">
                <Status
                  variant="prominent"
                  :type="getStatusType(row[col.id])"
                  :label="getStatusLabel(row[col.id])"
                />
              </template>
              <template v-else-if="$slots[`cell-${col.id}`]">
                <slot :name="`cell-${col.id}`" :row="row" :row-index="rowIndex" :column="col" />
              </template>
              <template v-else>
                <span :class="{ 'marks-table__cell--bold': col.type === 'bold' }">{{ row[col.id] }}</span>
              </template>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue';
import ButtonSecondary from './ButtonSecondary.vue';
import Status from './Status.vue';
import { PhCaretDown, PhDotsThreeVertical } from '@phosphor-icons/vue';

export default {
  name: 'marksTable',
  components: {
    Checkbox,
    ButtonSecondary,
    Status
  },
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    headerSupportingText: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => []
      // { id: string, label: string, type?: 'text'|'bold'|'status'|'checkbox'|'actions', sortable?: boolean, width?: string }
    },
    rows: {
      type: Array,
      default: () => []
    },
    selectable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Array,
      default: () => []
      // selected row indices
    }
  },
  emits: ['update:modelValue', 'row-action'],
  data() {
    return {
      sortIcon: PhCaretDown,
      actionsIcon: PhDotsThreeVertical
    };
  },
  computed: {
    displayColumns() {
      let cols = this.columns;
      if (this.selectable) {
        const hasCheckbox = cols.some((c) => c.type === 'checkbox');
        if (!hasCheckbox) cols = [{ id: '_select', label: '', type: 'checkbox', width: '66px' }, ...cols];
      }
      const hasActions = cols.some((c) => c.type === 'actions');
      if (!hasActions) cols = [...cols, { id: '_actions', label: '', type: 'actions', width: '72px' }];
      return cols;
    },
    isAllSelected() {
      if (!this.rows.length) return false;
      return this.modelValue.length === this.rows.length;
    },
    isIndeterminate() {
      return this.modelValue.length > 0 && this.modelValue.length < this.rows.length;
    }
  },
  methods: {
    isRowSelected(rowIndex) {
      return this.modelValue.includes(rowIndex);
    },
    setRowSelected(rowIndex, selected) {
      let next = [...this.modelValue];
      if (selected) {
        if (!next.includes(rowIndex)) next.push(rowIndex);
      } else {
        next = next.filter((i) => i !== rowIndex);
      }
      this.$emit('update:modelValue', next.sort((a, b) => a - b));
    },
    toggleSelectAll() {
      if (this.isAllSelected || this.isIndeterminate) {
        this.$emit('update:modelValue', []);
      } else {
        this.$emit('update:modelValue', this.rows.map((_, i) => i));
      }
    },
    getStatusType(value) {
      if (value && typeof value === 'object' && value.type) return value.type;
      return 'success';
    },
    getStatusLabel(value) {
      if (value && typeof value === 'object' && value.label) return value.label;
      return typeof value === 'string' ? value : '';
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../tokens/variables' as *;

.marks-table {
  width: 100%;
  border-radius: var(--marks-radius-8);
  background-color: var(--marks-color-white);
  border: 1px solid var(--marks-color-gray-200);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  font-family: $marks-font-family;
  color: var(--marks-color-black);
}

.marks-table__header {
  align-self: stretch;
  background-color: var(--marks-color-white);
  border-bottom: 1px solid var(--marks-color-gray-200);
}

.marks-table__header-inner {
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-20) var(--marks-spacing-gutter-24) var(--marks-spacing-gutter-20);
  gap: var(--marks-spacing-gutter-16);
}

.marks-table__header-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--marks-spacing-gutter-8);
}

.marks-table__title {
  margin: 0;
  @include marks-typography-h4-bold;
  color: var(--marks-color-black);
}

.marks-table__supporting {
  margin: 0;
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-gray-350);
}

.marks-table__actions {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
}

.marks-table__body {
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  background-color: var(--marks-color-white);
}

.marks-table__column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;

  &--checkbox {
    flex: none;
    width: 66px;
  }

  &--actions {
    flex: none;
    width: 72px;
  }
}

.marks-table__header-cell {
  align-self: stretch;
  min-height: 44px;
  background-color: var(--marks-color-gray-100);
  border-bottom: 1px solid var(--marks-color-gray-200);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-24);
  @include marks-typography-paragraph-sm-one-line;
  color: var(--marks-color-gray-350);

  .marks-table__column--checkbox & {
    justify-content: center;
    padding: var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-24);
  }

  .marks-table__column--actions & {
    padding: var(--marks-spacing-gutter-12) var(--marks-spacing-gutter-24);
  }
}

.marks-table__header-label {
  display: inline-flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-4);
}

.marks-table__sort-icon {
  flex-shrink: 0;
  color: var(--marks-color-black);
}

.marks-table__cell {
  align-self: stretch;
  min-height: 44px;
  border-bottom: 1px solid var(--marks-color-gray-200);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 var(--marks-spacing-gutter-24);
  @include marks-typography-paragraph-md-one-line;
  color: var(--marks-color-black);

  .marks-table__column--checkbox & {
    justify-content: center;
    padding: 0 var(--marks-spacing-gutter-16);
  }

  .marks-table__column--actions & {
    justify-content: center;
    padding: 0 var(--marks-spacing-gutter-16);
  }
}

.marks-table__cell--bold {
  font-weight: $marks-font-weight-bold;
}
</style>
