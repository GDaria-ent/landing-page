<script setup lang="ts">

const sectionDescription: Info = {
  tag: 'Blog',
  title: 'Latest posts',
  description : 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.'
}

const cardsList: ProductCard[] = [
  {
    image: 'images/houses/img-1.png',
    title: 'The 9 best homes in New York',
    link: '/',
    blog: {
      tag: 'Trends',
      date: 'May 10, 2022',
      description: 'Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.'
    }
  },
  {
    image: 'images/houses/img-2.png',
    title: 'Renting houses - complete guide',
    link: '/',
    blog: {
      tag: 'DIY',
      date: 'May 10, 2022',
      description: 'Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.'
    }
  },
  {
    image: 'images/houses/img-3.png',
    title: 'Crown house in New York',
    link: '/',
    blog: {
      tag: 'DIY',
      date: 'May 10, 2022',
      description: 'Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.'
    }
  },
  ]
</script>

<template>
  <section class="py-12 md:py-32 bg-complement-weak">
    <div class="container">
      <div class="md:flex justify-between items-end">
        <base-info
            :data="sectionDescription"
            style-mode="md"
        />
        <base-link title="View all" link="/" class="mt-4 md:mt-0"/>
      </div>
      <div class="grid-template--base mt-8 sm:mt-16">
        <blog-card v-for="(item, index) in cardsList" :key="index" :data="item"/>
      </div>
    </div>
  </section>
</template>
