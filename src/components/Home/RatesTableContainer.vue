<template>
  <div class="app-container flex-auto">
    <div class="card title">Rates Table</div>
    <hr />
    <div class="card">
      <RatesCard :rates="rates_table" v-if="Object.keys(rates_table).length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCalculatorStore } from '@/stores/calculatorStore'

import RatesCard from '@/components/Home/RatesTable.vue'

const calculatorStore = useCalculatorStore()

const { rates_table } = storeToRefs(calculatorStore)
</script>
