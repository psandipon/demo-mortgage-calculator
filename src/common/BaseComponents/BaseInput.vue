<template>
  <div class="flex flex-col">
    <label class="input-label">{{ label }}</label>
    <div class="number-input">
      <button class="input-button" @click="decrement">
        <span> - </span>
      </button>
      <input class="input-box" type="number" v-model="inputValue" />
      <button class="input-button" @click="increment">
        <span> + </span>
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
    type: Number,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(_value) {
    emit('update:modelValue', typeof _value === 'string' ? 0 : _value)
  }
})

const increment = () => {
  inputValue.value++
}

const decrement = () => {
  inputValue.value--
}
</script>

<style lang="postcss" scoped>
.input-label {
  @apply mb-2 font-medium text-gray-700  capitalize;
}

.input-button {
  @apply px-8 py-2 rounded-sm  hover:bg-gray-200 border-none active:bg-gray-300 text-lg;
}

.number-input {
  @apply p-0  bg-gray-100 flex flex-row border-teal-300 rounded-sm shadow-md;
}

.input-box {
  @apply focus:ring-opacity-0 text-center outline-0 w-full bg-white  m-2 p-2 rounded-sm text-teal-800 font-medium;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 0;
}
</style>
