<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <Header />

    <RouterView />
  </div>
</template>
