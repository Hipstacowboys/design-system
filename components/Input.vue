<!--
  Figma Node ID: 13-9678
  Component: Input
  Includes: Input Field, Input Label, Input Message
  Sizes: small, medium
-->
<template>
  <div class="marks-input">
    <!-- Labels (above input) -->
    <div v-if="label || labelRight" class="marks-input__labels">
      <label v-if="label" :for="inputId" class="marks-input__label marks-input__label--left">
        {{ label }}
      </label>
      <span v-if="labelRight" class="marks-input__label marks-input__label--right">
        {{ labelRight }}
      </span>
    </div>

    <!-- Input Field -->
    <div class="marks-input__field-wrapper">
      <InputField
        :input-id="inputId"
        :model-value="modelValue"
        :size="size"
        :type="type"
        :placeholder="placeholder"
        :leading-addon="leadingAddon"
        :leading-addon-select="leadingAddonSelect"
        :leading-addon-select-value="leadingAddonSelectValue"
        :leading-addon-select-options="leadingAddonSelectOptions"
        :trailing-addon="trailingAddon"
        :trailing-addon-select="trailingAddonSelect"
        :trailing-addon-select-value="trailingAddonSelectValue"
        :trailing-addon-select-options="trailingAddonSelectOptions"
        :left-icon="leftIcon"
        :right-icon="rightIcon"
        :disabled="disabled"
        :error="error || (messageType === 'error')"
        @update:modelValue="$emit('update:modelValue', $event)"
        @update:leadingAddonSelectValue="$emit('update:leadingAddonSelectValue', $event)"
        @update:trailingAddonSelectValue="$emit('update:trailingAddonSelectValue', $event)"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </div>

    <!-- Message (below input) - only show if message exists -->
    <InputMessage
      v-if="message"
      :type="messageType || 'info'"
      :message="message"
      class="marks-input__message"
    />
  </div>
</template>

<script>
import InputField from './InputField.vue';
import InputMessage from './InputMessage.vue';

export default {
  name: 'marksInput',
  components: {
    InputField,
    InputMessage
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium'].includes(value)
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    labelRight: {
      type: String,
      default: null
    },
    leadingAddon: {
      type: String,
      default: null
    },
    leadingAddonSelect: {
      type: Boolean,
      default: false
    },
    leadingAddonSelectValue: {
      type: [String, Number],
      default: null
    },
    leadingAddonSelectOptions: {
      type: Array,
      default: () => []
    },
    trailingAddon: {
      type: String,
      default: null
    },
    trailingAddonSelect: {
      type: Boolean,
      default: false
    },
    trailingAddonSelectValue: {
      type: [String, Number],
      default: null
    },
    trailingAddonSelectOptions: {
      type: Array,
      default: () => []
    },
    leftIcon: {
      type: [Object, String],
      default: null
    },
    rightIcon: {
      type: [Object, String],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: null
    },
    messageType: {
      type: String,
      default: 'info',
      validator: (value) => ['error', 'info'].includes(value)
    }
  },
  emits: ['update:modelValue', 'update:leadingAddonSelectValue', 'update:trailingAddonSelectValue', 'input', 'focus', 'blur'],
  computed: {
    inputId() {
      return `input-${this._uid}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../tokens/variables';

.marks-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.marks-input__labels {
  display: flex;
  align-items: center;
  gap: var(--marks-spacing-gutter-12);
  margin-bottom: var(--marks-spacing-gutter-12);
}

.marks-input__label {
  @include marks-typography-paragraph-md-multiline;
  color: var(--marks-color-black);

  &--left {
    flex: 1;
  }

  &--right {
    color: var(--marks-color-gray-300);
    text-align: right;
  }
}

.marks-input__field-wrapper {
  // Spacing handled by labels margin-bottom and message margin-top
}

.marks-input__message {
  margin-top: var(--marks-spacing-gutter-4);
}
</style>
