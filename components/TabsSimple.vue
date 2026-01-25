<!--
  Figma Node ID: 16-10618
  Component: Tabs Simple
  Uses: Tab Simple components
-->
<template>
  <div class="marks-tabs-simple">
    <TabSimple
      v-for="(tab, index) in tabs"
      :key="index"
      :active="modelValue === tab.value"
      :disabled="tab.disabled"
      :label="tab.label"
      @click="handleTabClick(tab.value)"
    >
      {{ tab.label }}
    </TabSimple>
  </div>
</template>

<script>
import TabSimple from './TabSimple.vue';

export default {
  name: 'marksTabsSimple',
  components: {
    TabSimple
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    tabs: {
      type: Array,
      required: true,
      validator: (tabs) => {
        return tabs.every(tab => 
          tab && 
          typeof tab.value !== 'undefined' && 
          typeof tab.label !== 'undefined'
        );
      }
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleTabClick(value) {
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-tabs-simple {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--marks-color-gray-150);
  box-sizing: border-box;
  width: 100%;
}
</style>
