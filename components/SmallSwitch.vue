<!--
  Figma Node ID: 20-12761
  Component: Small Switch
  Functionality: Container for Small Switch Options (radio button group)
-->
<template>
  <div class="marks-small-switch">
    <template v-for="(option, index) in options" :key="index">
      <div v-if="index > 0" class="marks-small-switch__divider"></div>
      <SmallSwitchOption
        :model-value="modelValue"
        :value="option.value"
        :title="option.title"
        :description="option.description"
        :disabled="option.disabled || disabled"
        @update:model-value="handleUpdate"
        @change="handleChange"
      />
    </template>
  </div>
</template>

<script>
import SmallSwitchOption from './SmallSwitchOption.vue';

export default {
  name: 'marksSmallSwitch',
  components: {
    SmallSwitchOption
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    options: {
      type: Array,
      required: true,
      validator: (options) => {
        return options.every(option => 
          option && typeof option === 'object' && 
          ('value' in option) && 
          ('title' in option)
        );
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleUpdate(value) {
      this.$emit('update:modelValue', value);
    },
    handleChange(value) {
      this.$emit('change', value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-small-switch {
  width: 100%;
  border-radius: var(--marks-radius-16);
  border: 1px solid var(--marks-color-gray-200);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--marks-color-white);
}

.marks-small-switch__divider {
  align-self: stretch;
  height: 1px;
  background-color: var(--marks-color-gray-200);
  box-sizing: border-box;
}
</style>
