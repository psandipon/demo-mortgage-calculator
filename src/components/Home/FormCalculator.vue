<template>
  <!-- calculator -->
  <div class="app-container min-w-[40%]">
    <div class="card title">Mortgage Calculator</div>
    <hr />
    <div class="card">
      <BaseInput v-model="property_price" label="Property Purchase Price (€)" />
      <BaseInput v-model="total_savings" label="Total Savings (€)" class="mt-3" />
      <BaseInput v-model="annual_repayment_rate" label="Annual repayment rate (%)" class="mt-3" />
      <BaseToggle v-model="real_estate_commission" label="Real Estate Commission" class="mt-3" />
    </div>
    <div class="flex flex-row mb-5 m-6 mt-3">
      <div class="flex-1 mr-1">
        <InfoCard title="Implied Load">
          {{ roundValue(raw_loan_amount).toLocaleString() }} €
        </InfoCard>
      </div>
      <div class="flex-1 ml-1">
        <InfoCard title="Loan To Value">
          {{ roundValue(loanToValue * 100).toLocaleString() }} %
        </InfoCard>
      </div>
    </div>
    <!-- In a large scale app, I would like to have a BaseButton with extra props like size, loading etc -->
    <div class="calculate-btn">
      <button class="w-full p-4" @click="calculatorStore.fetchRatesTableData()">Calculate</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { BaseInput, BaseToggle } from '@/common/BaseComponents'
import { useCalculatorStore } from '@/stores/calculatorStore'
import InfoCard from './InfoCard.vue'

const calculatorStore = useCalculatorStore()

const { property_price, total_savings, real_estate_commission, annual_repayment_rate } =
  storeToRefs(calculatorStore)

const { raw_loan_amount, loanToValue } = storeToRefs(calculatorStore)
const roundValue = (_value: number) => Math.round(_value * 10) / 10
</script>

<style lang="postcss" scoped>
.calculate-btn {
  @apply m-6 rounded-sm bg-teal-700 text-white font-bold hover:bg-teal-800 active:bg-teal-900;
}
</style>
