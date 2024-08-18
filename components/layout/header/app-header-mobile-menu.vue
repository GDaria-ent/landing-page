<script setup lang="ts">
interface Props {
  navData: Menu[];
}
defineProps<Props>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

function onClose(): void {
  emit('close');
}
</script>

<template>
  <section class="app-header-mobile">
      <button class="absolute top-5 right-5 flex group self-center" @click="onClose">
        <NuxtIcon
          name="icon-close"
          filled
          class="self-center text-2xl text-base-weak group-hover:opacity-70 transition-all duration-200"
        />
      </button>
      <nav class="flex flex-col space-y-2.5 text-lg font-semibold">
        <nuxt-link v-for="(item, index) in navData" :key="index" :to="item.link" class="hover:opacity-70 transition-all duration-300">
          {{item.title}}
        </nuxt-link>
      </nav>
  </section>
</template>
