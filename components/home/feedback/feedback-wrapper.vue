<script setup lang="ts">

const feedbackList: Feedback[] = [
  {
    score: 5,
    text: '"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."',
    name: 'Michael Webb',
    image: 'images/feedback/img-1.png'
  },
  {
    score: 5,
    text: '"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."',
    name: 'Amber Keene',
    image: 'images/feedback/img-2.png'
  },
  {
    score: 5,
    text: '"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."',
    name: 'Sarah Tarleton',
    image: 'images/feedback/img-3.png'
  },
]
</script>

<template>
  <section class="container py-20 xs:py-40 text-center">
    <h5 class="text-5xl font-bold">What customers say</h5>
    <p class="mt-6 text-faint-strong">Faucibus orci luctus et ultrices posuere cubilia curae.</p>
    <div class="mt-8 sm:mt-16 grid-template--base">
      <feedback-card v-for="(item, index) in feedbackList" :key="index" :data="item"/>
    </div>
  </section>
</template>
