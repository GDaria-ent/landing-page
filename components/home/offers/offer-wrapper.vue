<script setup lang="ts">
const sectionInfoList: Info[] = [
  {
    tag: 'Comfort first',
    title: 'The best house for family comfort',
    description: 'Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.',
    image: 'images/offers/img-1.png'
  },
  {
    tag: 'Quick and easy',
    title: 'Fast forward process',
    description: 'Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.',
    image: 'images/offers/img-2.png',
    advantages: [
      {
        icon: 'money',
        title: 'Affordable prices',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
      },
      {
        icon: 'folder',
        title: 'Less paper work',
        description: 'Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.'
      },
    ]
  },
]
</script>

<template>
  <section class="pb-10 sm:pb-32 ">
    <offer-item v-for="(item, index) in sectionInfoList" :key="index" :data="item" :id="index" class=" mb-10 lg:mb-32"/>
  </section>
</template>
