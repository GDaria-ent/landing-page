<script setup lang="ts">

const cardsList: ProductCard[] = [
  {
    image: 'images/houses/img-1.png',
    title: 'Cozy studio in Los Angeles',
    link: '/',
    property: {
      price: '$ 1,200.00 USD',
      location: '2263 Southlea, Los Angeles',
      kitchen: 2,
      bedrooms: 2,
      area: 840
    }
  },
  {
    image: 'images/houses/img-2.png',
    title: 'Tiny home in San Diego',
    link: '/',
    property: {
      price: '$ 740,000.00 USD',
      location: '2569 El Segundo, San Diego',
      kitchen: 1,
      bedrooms: 2,
      area: 400
    }
  },
  {
    image: 'images/houses/img-3.png',
    title: 'Crown house in New York',
    link: '/',
    property: {
      price: '$ 980,000.00 USD',
      location: '4489 Smity Fielda, New York',
      kitchen: 2,
      bedrooms: 4,
      area: 3200
    }
  },
  {
    image: 'images/houses/img-4.png',
    title: 'Family house in Los Angeles',
    link: '/',
    property: {
      price: '$ 4,200.00 USD',
      location: '2263 Southlea, Los Angeles',
      kitchen: 2,
      bedrooms: 3,
      area: 1400
    }
  },
  {
    image: 'images/houses/img-5.png',
    title: 'Studio in Las Vegas',
    link: '/',
    property: {
      price: '$ 820,000.00 USD',
      location: '2569 Halls Corner, Las Vegas',
      kitchen: 2,
      bedrooms: 3,
      area: 2400
    }
  },
  {
    image: 'images/houses/img-6.png',
    title: 'San Diego story',
    link: '/',
    property: {
      price: '$ 3,700.00 USD',
      location: '2569 El Segundo, San Diego',
      kitchen: 1,
      bedrooms: 2,
      area: 650
    }
  }
]
</script>

<template>
  <section class="houses-wrapper">
    <base-decor class="absolute -top-5 right-0 rotate-90"/>
    <base-decor class="absolute -bottom-5 left-0 -rotate-90"/>
    <div class="container">
      <div class="houses-wrapper__container">
        <base-description title="Properties"/>
        <h3>Houses in your favorite area</h3>
      </div>
      <div class="mt-8 sm:mt-16 grid-template--base">
        <houses-card v-for="(item, index) in cardsList" :key="index" :data="item" />
      </div>
      <base-buttons-duo class="flex justify-center mt-8 sm:mt-20"/>
    </div>
  </section>
</template>
