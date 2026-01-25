<!--
  Figma Node ID: 16-10602
  Component: Breadcrumbs
  Uses: Breadcrumb components
-->
<template>
  <nav class="marks-breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <Breadcrumb
        :active="index === items.length - 1"
        :label="item.label"
      >
        {{ item.label }}
      </Breadcrumb>
      <PhCaretRight
        v-if="index < items.length - 1"
        :class="'marks-breadcrumbs__separator'"
        :size="12"
        :weight="'regular'"
        color="currentColor"
      />
    </template>
  </nav>
</template>

<script>
import { PhCaretRight } from '@phosphor-icons/vue';
import Breadcrumb from './Breadcrumb.vue';

export default {
  name: 'marksBreadcrumbs',
  components: {
    Breadcrumb,
    PhCaretRight
  },
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.length > 0 && items.every(item => 
          item && typeof item.label !== 'undefined'
        );
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-8);
  flex-wrap: wrap;
}

.marks-breadcrumbs__separator {
  flex-shrink: 0;
  color: var(--marks-color-gray-400);
}
</style>
