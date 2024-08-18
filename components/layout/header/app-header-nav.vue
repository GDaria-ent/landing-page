<script setup lang="ts">
interface Props {
  navData: Menu[];
}
defineProps<Props>();
</script>

<template>
  <nav class="hidden md:flex space-x-2.5 text-lg font-semibold">
    <nuxt-link v-for="(item, index) in navData" :key="index" :to="item.link" class="hover:text-accent transition-all duration-300">
      {{item.title}}
    </nuxt-link>
  </nav>
</template>
