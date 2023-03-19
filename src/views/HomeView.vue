<template>
  <div class="grid md:grid-cols-1 lg:grid-cols-2 place-content-center mt-10 w-full">
    <div class="app-container">
      <div class="card title">Mortgage Calculator</div>
      <hr />

      <div class="card">
        <BaseToggle v-model="_realEstateCommission" label="Real Estate Commission" />
        <BaseInput v-model="_propertyPurchasePrice" label="Property Purchase Price" class="mt-6" />
        <BaseInput v-model="_totalSavings" label="Total Savings" class="mt-6" />
      </div>
    </div>
    <div class="app-container">
      <div class="card title">Table</div>
      <hr />

      <div class="card"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/common/BaseComponents/BaseInput.vue'
import BaseToggle from '@/common/BaseComponents/BaseToggle.vue'
import { ref } from 'vue'

const _totalSavings = ref(0)
const _propertyPurchasePrice = ref(0)
const _realEstateCommission = ref(true)
</script>

<style lang="postcss">
.app-container {
  @apply shadow-lg w-full;
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
