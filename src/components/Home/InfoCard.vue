<template>
  <div class="p-5 shadow-md rounded-sm bg-gray-100">
    <span class="">{{ title }}:</span><br />
    <span class="md:text-xl lg:text-2xl text-lg text-teal-900 font-bold">
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
