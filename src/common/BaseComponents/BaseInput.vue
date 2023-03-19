<template>
  <div class="flex flex-col">
    <label class="input-label">{{ label }}</label>
    <div class="number-input">
      <button class="input-button" @click="decrement">
        <span> - </span>
      </button>
      <input type="number" v-model="inputValue" class="input-box" />
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
    emit('update:modelValue', _value)
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
  @apply mb-2 font-medium text-gray-700 text-lg capitalize;
}

.input-button {
  @apply px-8 py-2 rounded-md text-3xl hover:bg-gray-200 border-none active:bg-gray-300;
}

.number-input {
  @apply p-0  bg-gray-100 flex flex-row border-teal-300 rounded-md shadow-md;
}

.input-box {
  @apply focus:ring-opacity-0 text-center outline-0 w-full bg-gray-100 text-xl;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 0;
}
</style>
