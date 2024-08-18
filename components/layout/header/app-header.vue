<script setup lang="ts">

const headerMenu: Menu[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/'
  },
  {
    title: 'Properties',
    link: '/'
  },
  {
    title: 'Contact',
    link: '/'
  }
]
const isMobileMenuVisible = ref<boolean>(false);
function handleModalVisibility() {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
}
</script>

<template>
  <header class="container--wide app-header">
    <base-logo/>
    <div class="hidden md:flex items-center space-x-10">
      <app-header-nav :nav-data="headerMenu"/>
      <div class="flex space-x-3">
        <base-link title="Cart" link="/">
          <template #icon>
            <NuxtIcon
                name="icon-bag"
                filled
                class="self-center text-xl mr-1"
            />
          </template>
        </base-link>
        <base-button title="Find a property"/>
      </div>
    </div>
    <button class="block md:hidden hover:opacity-70 transition-all duration-300" @click="handleModalVisibility">
      <NuxtIcon
          name="icon-burger"
          filled
          class="self-center text-3xl text-accent"
      />
    </button>
    <transition name="slide-right">
      <app-header-mobile-menu
          v-show="isMobileMenuVisible"
          :nav-data="headerMenu"
          @close="handleModalVisibility"
      />
    </transition>
  </header>
</template>
