<script setup lang="ts">
interface Props {
  placeholder?: string;
}
withDefaults(defineProps<Props>(), {placeholder: 'Search'});
</script>

<template>
  <label class="search-wrapper">
    <slot name="icon"></slot>
    <input type="text" :placeholder="placeholder" class="w-full h-full self-center bg-base-weak text-xl"/>
  </label>
</template>
