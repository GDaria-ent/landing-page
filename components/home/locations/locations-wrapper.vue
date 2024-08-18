<script setup lang="ts">

const locationsList: Locations[] = [
  {
    title: 'San Francisco, CA',
    link: '/'
  },
  {
    title: 'Los Angeles, CA',
    link: '/'
  },
  {
    title: 'San Diego, CA',
    link: '/'
  },
  {
    title: 'New York, NY',
    link: '/'
  },
  {
    title: 'Las Vegas, NV',
    link: '/'
  },
  {
    title: 'Miami, FL',
    link: '/'
  },
]
</script>

<template>
  <section class="pb-8 sm:pb-32 flex flex-col items-center bg-complement-weak">
    <h3 class="font-bold text-5xl">Locations</h3>
    <p class="mt-6 text-lg text-center">Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet.</p>
    <div class="container mt-8 sm:mt-16 grid-template--base">
      <locations-card v-for="(item, index) in locationsList" :key="index" :data="item"/>
    </div>
    <base-buttons-duo class="mt-8 sm:mt-20"/>
  </section>
</template>
