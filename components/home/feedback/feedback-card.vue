<script setup lang="ts">
interface Props {
  data: Feedback;
}
defineProps<Props>();
</script>

<template>
  <div class="p-5 xs:p-8 bg-base-weak rounded-lg shadow-md border text-start">
    <div class="flex space-x-1 mb-6">
      <NuxtIcon v-for="i in data.score" name="icon-star" filled class="text-accent"/>
    </div>
    <p>{{data.text}}</p>
    <feedback-avatar-section :name="data.name" :img="data.image" class="mt-6"/>
  </div>
</template>
