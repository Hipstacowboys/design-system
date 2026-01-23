<!--
  Figma Node ID: 16-10663
  Component: Tabs
  Uses: Tab components
-->
<template>
  <div class="desys-tabs">
    <div class="desys-tabs__left-border"></div>
    <div class="desys-tabs__tabs-container">
      <Tab
        v-for="(tab, index) in tabs"
        :key="index"
        :active="modelValue === tab.value"
        :disabled="tab.disabled"
        :label="tab.label"
        @click="handleTabClick(tab.value)"
      >
        {{ tab.label }}
      </Tab>
    </div>
    <div class="desys-tabs__right-border"></div>
  </div>
</template>

<script>
import Tab from './Tab.vue';

export default {
  name: 'DesysTabs',
  components: {
    Tab
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

.desys-tabs {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  width: 100%;
}

.desys-tabs__left-border {
  width: var(--desys-spacing-gutter-16);
  border-bottom: 1px solid var(--desys-color-gray-200);
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.desys-tabs__tabs-container {
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  padding-left: 0;
}

.desys-tabs__right-border {
  flex: 1;
  border-bottom: 1px solid var(--desys-color-gray-200);
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
}
</style>
