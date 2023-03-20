<template>
  <div class="flex flex-col md:flex-row">
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
      <div
        class="m-6 rounded-sm bg-teal-700 text-white font-bold hover:bg-teal-800 active:bg-teal-900"
      >
        <button class="w-full p-4" @click="calculatorStore.fetchRatesTableData">Calculate</button>
      </div>
    </div>

    <div class="app-container flex-auto">
      <div class="card title">Rates Table</div>
      <hr />
      <div class="card">
        <RatesCard :rates="rates_table" v-if="Object.keys(rates_table).length" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseInput from '@/common/BaseComponents/BaseInput.vue'
import BaseToggle from '@/common/BaseComponents/BaseToggle.vue'
import { useCalculatorStore } from '@/stores/calculatorStore'
import InfoCard from '@/components/Home/InfoCard.vue'
import RatesCard from '@/components/Home/RatesCard.vue'

const calculatorStore = useCalculatorStore()

const { property_price, total_savings, real_estate_commission, annual_repayment_rate } =
  storeToRefs(calculatorStore)

const { raw_loan_amount, loanToValue, rates_table } = storeToRefs(calculatorStore)
const roundValue = (_value: number) => Math.round(_value * 10) / 10
</script>

<style lang="postcss">
.app-container {
  @apply shadow-md m-1;
}

.card {
  @apply p-1 m-2 md:p-1 lg:p-2;
}

.title {
  @apply text-2xl;
}
</style>
