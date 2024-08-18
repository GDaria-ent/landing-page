<script setup lang="ts">
interface Props {
  data: Partners[];
}
defineProps<Props>();
const description = 'As seen on the world\'s best magazines and media';
</script>

<template>
  <section class="flex sm:justify-center lg:justify-between items-center overflow-x-auto w-full">
    <p class="hidden lg:block max-w-60 text-lg leading-6">{{description}}</p>
    <div class="flex shrink-0 items-center space-x-5 ">
      <a v-for="(item, index) in data" :href="item.link" :key="index" class="group self-center">
        <component :is="item.logo" class="w-24 h-10 text-faint-strong-u group-hover:text-accent transition-colors duration-200"/>
      </a>
    </div>
  </section>
</template>
