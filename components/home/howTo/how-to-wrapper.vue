<script setup lang="ts">
const partnersList: Partners[] = [
  {
    link: '/',
    logo: 'icon-logo-1'
  },
  {
    link: '/',
    logo: 'icon-logo-2'
  },
  {
    link: '/',
    logo: 'icon-logo-1'
  },
  {
    link: '/',
    logo: 'icon-logo-2'
  },
  {
    link: '/',
    logo: 'icon-logo-1'
  }
];
const listOfSteps: CardInfo[] = [
  {
    icon: 'house',
    title: 'Find property',
    description: 'Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.'
  },
  {
    icon: 'contract',
    title: 'Make a deal',
    description: 'Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.'
  },
  {
    icon: 'key',
    title: 'Get your keys',
    description: 'Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.'
  }
]
</script>

<template>
  <section class="pt-8 sm:pt-16 pb-12 lg:pb-32">
    <how-to-header :data="partnersList"/>
    <h2 class="mt-12 sm:mt-32 text-5xl font-bold text-center">How it works</h2>
    <div class="mt-5 text-lg text-faint-strong text-center">
      <p>'Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque.</p>
      <p>Maecenas varius felis felis.</p>
    </div>
    <div class="grid-template--base mt-8 sm:mt-16">
      <how-to-card v-for="(item, index) in listOfSteps" :key="index" :data="item"/>
    </div>
  </section>
</template>
