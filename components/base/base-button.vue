<script setup lang="ts">
interface Props {
  title: string;
}
defineProps<Props>();
</script>

<template>
  <button class="base-component base-component--button">
    <slot name="icon"></slot>
    {{ title }}
  </button>
</template>
