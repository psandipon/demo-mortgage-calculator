<template>
  <BaseDropdown :options="regionOptions" v-model="selectedOption" />
</template>

<script setup lang="ts">
import BaseDropdown from '@/common/BaseComponents/BaseDropdown.vue'
import { ref } from 'vue'

const regionOptions = ref([
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Brandenburg', value: 'brandenburg' },
  { label: 'Bavaria', value: 'bavaria' },
  { label: 'Hamburg', value: 'hamburg' },
  { label: 'Saxony', value: 'saxony' },
  { label: 'Baden-wurttemberg', value: 'baden-wurttemberg' },
  { label: 'Hesse', value: 'hesse' }
])

const selectedOption = ref('Berlin')
</script>

<style lang="postcss"></style>
