<script setup lang="ts">
interface Props {
  title: string;
}
defineProps<Props>();
</script>

<template>
  <div class="rounded-2xl bg-faint px-3 py-1 text-center text-sm">
    {{title}}
  </div>
</template>
