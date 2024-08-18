<script setup lang="ts">
interface Props {
  data: CardInfo
}
defineProps<Props>()
</script>

<template>
  <article class="border rounded-lg py-6 sm:py-12 px-4 sm:px-8 shadow-md text-center">
    <base-card-info :data="data"/>
  </article>
</template>
