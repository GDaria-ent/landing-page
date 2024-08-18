<script setup lang="ts"></script>

<template>
  <section class="relative px-5">
    <div class="absolute top-0 left-0 z-0 w-full h-1/2 bg-complement-weak"/>
    <div class="relative flex flex-col items-center z-10 container px-5 py-16 xs:py-24 rounded-2xl bg-faint-strong text-base-weak text-center">
      <div class="h-12 w-12 flex justify-center items-center shrink-0 rounded-xl bg-base-weak">
        <NuxtIcon name="icon-family" class="text-faint-strong text-2xl"/>
      </div>
      <h6 class="mt-3 text-3xl md:text-5xl font-semibold">Families are our priority</h6>
      <p class="mt-6 md:w-1/2 text-faint ">Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.</p>
      <base-button title="Get started" class="mt-5"/>
    </div>
  </section>
</template>
