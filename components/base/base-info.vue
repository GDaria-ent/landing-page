<script setup lang="ts">
interface Props {
  data: Info;
  styleMode?: string;
}
const props = withDefaults(defineProps<Props>(), {styleMode: 'large'});
const currentStyle = computed(() => {
  return `base-info-wrapper--${props.styleMode}`
})
</script>

<template>
  <div class="base-info-wrapper" :class="currentStyle">
    <base-description :title="data.tag" class="mb-5"/>
    <h2 class="text-3xl xs:text-6xl">{{ data.title }}</h2>
    <p class="text-lg xs:text-2xl text-faint-strong mt-5">{{ data.description }}</p>
    <slot name="item"></slot>
  </div>
</template>
