<script setup lang="ts">
interface Props {
  name: string;
  img: string;
}
defineProps<Props>();
</script>

<template>
  <div class="flex space-x-4">
    <figure class="w-12 h-12 rounded-full overflow-hidden">
      <img :src="img" alt="User photo"/>
    </figure>
    <div class="flex flex-col">
      <span class="font-bold">{{name}}</span>
      <span class="text-faint-strong">Customer</span>
    </div>
  </div>
</template>
