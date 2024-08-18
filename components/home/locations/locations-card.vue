<script setup lang="ts">
interface Props {
  data: Locations;
}
defineProps<Props>();
</script>

<template>
  <nuxt-link :to="data.link" class="p-8 bg-base-weak rounded-lg shadow-md group transition-colors duration-200">
    <h4 class="font-bold text-2xl group-hover:text-accent">{{data.title}}</h4>
    <div class="flex items-center space-x-2 text-base-strong group-hover:text-accent">
      <span class="text-lg">View Properties</span>
      <NuxtIcon name="icon-chevron" filled class="text-xs mt-1 self-center"/>
    </div>
  </nuxt-link>
</template>
