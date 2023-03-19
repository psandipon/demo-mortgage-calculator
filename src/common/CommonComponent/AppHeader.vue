<template>
  <header class="app-header">
    <h1 class="w-6/12">
      <router-link to="/">
        <img :src="logo" class="app-header__logo" />
      </router-link>
    </h1>

    <div class="w-6/12 flex justify-end">
      <RegionSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import RegionSelector from '@/components/Navbar/RegionSelector.vue'
</script>

<style lang="postcss">
.app-header {
  @apply sticky top-0 bg-white shadow-md flex items-center justify-between px-6 py-6;
  &__logo {
    display: block;
    height: 28px;
  }
}
</style>
