<template>
  <div class="flex flex-col md:flex-row font-mono">
    <FormCalculator />
    <RatesTable />
  </div>
</template>

<script setup lang="ts">
import RatesTable from '@/components/Home/RatesTableContainer.vue'
import FormCalculator from '@/components/Home/FormCalculator.vue'
</script>

<style lang="postcss">
.app-container {
  @apply shadow-md m-1;
}

.card {
  @apply p-1 m-2 md:p-1 lg:p-2;
}

.title {
  @apply text-2xl font-bold;
}
</style>
