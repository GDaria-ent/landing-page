<script setup lang="ts">
interface Props {
  data: CardInfo
}
defineProps<Props>();
</script>

<template>
  <div class="flex flex-col items-start">
    <base-card-info :data="data"/>
  </div>
</template>
