<script setup lang="ts">
interface Props {
  data: ProductCard;
}

defineProps<Props>();
</script>

<template>
  <base-card-template :data="data">
    <template #date>
      <div class="flex items-center space-x-4 mb-4 text-sm">
        <div class="py-1 px-2 font-semibold rounded-xl bg-accent/10">{{data.blog.tag}}</div>
        <span class="text-faint-strong">{{data.blog.date}}</span>
      </div>
    </template>
    <template #content>
      <p class="mt-2.5 text-faint-strong">{{data.blog.description}}</p>
    </template>
  </base-card-template>
</template>
