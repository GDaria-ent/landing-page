<script setup lang="ts">
interface Props {
  data: CardInfo,
  infoStyle?: string;
}
const props = withDefaults(defineProps<Props>(), {infoStyle: 'center'});

const currentStyle = computed(() => {
  return `base-card-info--${props.infoStyle}`
})
</script>

<template>
  <div class="base-card-info" :class="currentStyle">
    <div class="bg-accent/20 rounded-lg w-12 h-12 flex justify-center items-center">
      <NuxtIcon
          :name="`icon-${data.icon}`"
          filled
          class="text-accent text-2xl"
      />
    </div>
    <h3 class="mt-6 font-bold text-2xl">{{data.title}}</h3>
    <p class="mt-4 text-faint-strong">{{data.description}}</p>
  </div>
</template>
