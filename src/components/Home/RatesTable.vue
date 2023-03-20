<template>
  <div class="rates_table">
    <table class="w-full">
      <tr>
        <th>Fixation Length</th>
        <th>Monthly Rate</th>
        <th>Interest Rate</th>
      </tr>
      <tr v-for="(value, key) in rates" :key="key">
        <td>{{ key }} Years</td>
        <td>{{ value.monthlyRate }} €</td>
        <td>{{ value.borrowingRate }} %</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  rates: {
    type: Object,
    required: true
  }
})
</script>

<style lang="postcss" scoped>
.rates_table {
  @apply p-2 md:p-3 lg:p-5  rounded-sm bg-white;
}

table {
  @apply w-full;
}

th {
  @apply p-2 text-left text-lg md:p-3 lg:p-4 font-bold border-2 bg-gray-100;
}

td {
  @apply p-2 text-left text-lg md:p-3 lg:p-4 font-normal border-2;
}

tr:nth-child(even) {
  @apply bg-gray-50;
}
</style>
