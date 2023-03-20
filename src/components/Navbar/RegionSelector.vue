<template>
  <BaseDropdown :options="regionOptions" v-model="region" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCalculatorStore } from '@/stores/calculatorStore'
import BaseDropdown from '@/common/BaseComponents/BaseDropdown.vue'

const calculatorStore = useCalculatorStore()

const { region } = storeToRefs(calculatorStore)

const regionOptions = ref([
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Brandenburg', value: 'brandenburg' },
  { label: 'Bavaria', value: 'bavaria' },
  { label: 'Hamburg', value: 'hamburg' },
  { label: 'Saxony', value: 'saxony' },
  { label: 'Baden-wurttemberg', value: 'baden-wurttemberg' },
  { label: 'Hesse', value: 'hesse' }
])
</script>
