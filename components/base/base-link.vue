<script setup lang="ts">
interface Props {
  title: string;
  link: string;
}
defineProps<Props>();
</script>

<template>
  <nuxt-link :to="link" class="base-component base-component--link">
    <slot name="icon"></slot>
    {{ title }}
  </nuxt-link>
</template>
