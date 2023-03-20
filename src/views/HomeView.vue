<template>
  <div class="flex flex-col md:flex-row">
    <div class="app-container">
      <div class="card title">Mortgage Calculator</div>
      <hr />

      <div class="card">
        <BaseInput v-model="property_price" label="Property Purchase Price (€)" />
        <BaseToggle v-model="real_estate_commission" label="Real Estate Commission" class="mt-6" />
        <BaseInput v-model="total_savings" label="Total Savings (€)" class="mt-6" />
        <BaseInput v-model="annual_repayment_rate" label="Annual repayment rate (%)" class="mt-6" />
      </div>
      <div class="flex flex-row mb-5 m-6">
        <div class="flex-1 mr-1">
          <InfoCard title="Implied Load"
            >{{ roundValue(raw_loan_amount).toLocaleString() }} €
          </InfoCard>
        </div>
        <div class="flex-1 ml-1">
          <InfoCard title="Loan To Value">
            {{ roundValue(loanToValue * 100).toLocaleString() }} %
          </InfoCard>
        </div>
      </div>
    </div>
    <div class="app-container flex-auto">
      <div class="card title">Mortgage Calculator</div>
      <hr />

      <div class="card"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseInput from '@/common/BaseComponents/BaseInput.vue'
import BaseToggle from '@/common/BaseComponents/BaseToggle.vue'
import { useCalculatorStore } from '@/stores/calculatorStore'
import InfoCard from '@/components/Home/InfoCard.vue'

const calculatorStore = useCalculatorStore()

const { property_price, total_savings, real_estate_commission, annual_repayment_rate } =
  storeToRefs(calculatorStore)

const { raw_loan_amount, loanToValue } = storeToRefs(calculatorStore)
const roundValue = (_value: number) => Math.round(_value * 10) / 10
</script>

<style lang="postcss">
.app-container {
  @apply shadow-lg;
}

.card {
  background: rgb(255, 255, 255);
  padding: 20px;
  margin: 10px;
  border: 0px solid black;
}

.title {
  @apply text-2xl;
}
</style>
