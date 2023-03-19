<template>
  <div class="flex flex-col">
    <label class="toggle-label">{{ label }}</label>
    <div class="toggle-buttons-container">
      <button class="toggle-button" :class="{ active: toggleValue }" @click="toggleValue = true">
        <span> Yes </span>
      </button>
      <button class="toggle-button" :class="{ active: !toggleValue }" @click="toggleValue = false">
        <span> No </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Boolean): void
}>()

const toggleValue = computed({
  get() {
    return props.modelValue
  },
  set(_value) {
    emit('update:modelValue', _value)
  }
})
</script>

<style scoped lang="postcss">
.toggle-label {
  @apply mb-2 font-medium text-gray-700 text-lg capitalize;
}

.toggle-button {
  @apply m-2 px-8 py-2 rounded-md text-xl bg-gray-100 hover:bg-white  active:bg-gray-200 w-1/2;
}

.active {
  @apply bg-white text-teal-800 font-medium;
}

.toggle-buttons-container {
  @apply p-0  bg-gray-100  flex flex-row border-teal-300 rounded-md shadow-md;
}

/*.input-box {
  @apply focus:ring-opacity-0 text-center outline-0 w-full bg-gray-50 text-xl;
}*/

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 0;
}
</style>
