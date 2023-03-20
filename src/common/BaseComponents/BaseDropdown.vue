<template>
  <div class="base-dropdown">
    <div>
      <button @click="isOpen = !isOpen" class="base-dropdown__trigger">
        <span class="capitalize">{{ selectedOption }}</span>
        <img
          :src="DownArrow"
          height="20"
          width="20"
          alt=""
          :class="{
            'rotate-180': isOpen
          }"
        />
      </button>
    </div>

    <div v-show="isOpen" class="base-dropdown__list">
      <div class="py-1">
        <span
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="base-dropdown__list-item"
          :class="{
            'bg-gray-100': isOptionSelected(option)
          }"
        >
          {{ option.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import DownArrow from '@/assets/icons/DownArrow.svg'

type OptionItemType = {
  label: string
  value: string
}

const props = defineProps({
  options: {
    type: Array as PropType<OptionItemType[]>,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectedOption = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const selectOption = (option: OptionItemType) => {
  selectedOption.value = option.label
  isOpen.value = false
}

const isOptionSelected = (currentOption: OptionItemType) => {
  return selectedOption.value === currentOption.label
}
</script>

<style lang="postcss" scoped>
.base-dropdown {
  &__trigger {
    @apply inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-900;
  }

  &__list {
    @apply origin-top-right absolute right-0 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none;
  }

  &__list-item {
    @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer;
  }
}
</style>
