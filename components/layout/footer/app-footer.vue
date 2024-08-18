<script setup lang="ts">

const siteMenu: FooterMenu[] = [
  {
    title: 'Pages',
    pagesList: [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'About',
        link: '/'
      },
      {
        title: 'Blog',
        link: '/'
      },
      {
        title: 'Agents',
        link: '/'
      },
      {
        title: 'Contacts',
        link: '/'
      },
      {
        title: 'FAQs',
        link: '/'
      },
      {
        title: 'Properties',
        link: '/'
      },
    ]
  },
  {
    title: 'CMS Pages',
    pagesList: [
      {
        title: 'Property',
        link: '/'
      },
      {
        title: 'Property Single',
        link: '/'
      },
      {
        title: 'Blog Categories',
        link: '/'
      },
      {
        title: 'Blog Single',
        link: '/'
      },
      {
        title: 'Agent Single',
        link: '/'
      }
    ]
  },
  {
    title: 'Utility Pages',
    pagesList: [
      {
        title: 'Style Guide',
        link: '/'
      },
      {
        title: 'Changelog',
        link: '/'
      },
      {
        title: 'Licenses',
        link: '/'
      },
      {
        title: '404',
        link: '/'
      },
      {
        title: 'Password',
        link: '/'
      }
    ]
  }
]
</script>

<template>
  <footer>
    <div class="py-16 container lg:grid grid-cols-12 gap-16 justify-between">
      <base-logo class="col-span-2 self-start mb-8 lg:mb-0"/>
      <nav class="col-span-5 flex justify-between mb-8 lg:mb-0">
        <div v-for="(item, index) in siteMenu" :key="index" class="flex flex-col space-y-3">
          <h6 class="mb-1.5 font-semibold">{{item.title}}</h6>
          <nuxt-link v-for="(i, index) in item.pagesList" :key="index" :to="i.link" class="hover:text-accent">
            <span>{{i.title}}</span>
          </nuxt-link>
        </div>
      </nav>
      <app-footer-subscribe class="col-span-5"/>
    </div>
  </footer>
</template>
