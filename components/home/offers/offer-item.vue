<script setup lang="ts">

interface Props {
  data: Info;
  id: number;
}

const props = defineProps<Props>();
const isOdd = computed(() => {
  return  props.id % 2;
})
</script>

<template>
  <div class="lg:grid grid-cols-12 gap-x-20 max-h-[37] overflow-hidden">
    <div class="py-5 col-span-6 flex flex-col justify-center order-1" :class="isOdd ? 'order-2 ' : 'order-1'">
      <base-info :data="data" style-mode="md">
        <template v-if="data.advantages" #item>
          <div class="xs:flex xs:space-x-3 mt-6">
            <base-card-info v-for="(item, index) in data.advantages" :key="index" :data="item" info-style="start" class="mb-2"/>
          </div>
        </template>
      </base-info>
      <base-buttons-duo class="mt-6"/>
    </div>
    <figure class="rounded-lg w-full col-span-6 overflow-hidden" :class="isOdd ? 'order-1' : 'order-2'">
      <img :src="data.image" class="w-full h-full fit-cover" alt="Room photo"/>
    </figure>
  </div>
</template>
