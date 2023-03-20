<template>
  <div class="p-5 shadow-lg rounded-sm bg-gray-100">
    <span class="">{{ title }}:</span><br />
    <span class="text-2xl text-teal-900 font-bold">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="postcss"></style>
