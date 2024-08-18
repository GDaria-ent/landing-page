<script setup lang="ts">
interface Props {
  data: ProductCard;
}

defineProps<Props>();
</script>

<template>
  <nuxt-link :to="data.link" class="rounded-b-xl bg-base-weak shadow-lg group hover:shadow-accent/20 transition-all duration-300">
    <figure class="h-64 w-full overflow-hidden">
      <img :src="data.image" alt="Card photo" class="w-full h-full fit-cover"/>
    </figure>
    <div class="p-4 xs:p-6">
      <slot name="date"></slot>
      <h4 class="font-bold text-lg xl:text-2xl group-hover:text-accent">{{data.title}}</h4>
      <slot name="content"></slot>
    </div>
  </nuxt-link>
</template>
