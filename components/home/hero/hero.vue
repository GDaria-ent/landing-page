<script setup lang="ts">
const heroInfo: Info= {
  title: 'Find house for your family in minutes',
  description: 'Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus',
  tag: 'Find your dream place'
}
</script>

<template>
  <section class="hero-wrapper">
    <div class="hero-wrapper__info-block">
      <base-decor class="absolute top-0 left-0"/>
      <base-decor class="absolute bottom-0 right-0 rotate-180"/>
      <base-info :data="heroInfo">
        <template #item>
          <div class="md:flex md:space-x-4 mt-5 w-full">
            <base-search>
              <template #icon>
                <NuxtIcon
                    name="icon-search"
                    filled
                    class="self-center text-base text-xl mr-1"
                />
              </template>
            </base-search>
            <base-button title="Find a property" class="mt-2 md:mt-0 w-full md:w-auto"/>
          </div>
        </template>
      </base-info>
    </div>
    <figure class="overflow-hidden h-full hidden lg:flex">
      <img src="/images/hero-image.png" class="w-full h-full object-cover"/>
    </figure>
  </section>
</template>

