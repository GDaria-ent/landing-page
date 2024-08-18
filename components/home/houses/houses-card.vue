<script setup lang="ts">
interface Props {
  data: ProductCard;
}

defineProps<Props>();
</script>

<template>
  <base-card-template :data="data">
    <template #content>
      <span class="font-bold xl:text-lg">{{data.property.price}}</span>
      <div class="flex items-center space-x-2 mt-1 xs:mt-3 text-faint-strong">
        <NuxtIcon
            name="icon-location"
            filled
            class="text-sm"
        />
        <span>{{data.property.location}}</span>
      </div>
      <div class="flex items-center space-x-5 text-faint-strong">
        <div class="houses-card-detail">
          <NuxtIcon
              name="icon-kitchen"
              filled
              class="text-sm"
          />
          <span>{{data.property.kitchen}}</span>
        </div>
        <div class="houses-card-detail">
          <NuxtIcon
              name="icon-bedroom"
              filled
              class="text-sm"
          />
          <span>{{data.property.bedrooms}}</span>
        </div>
        <div class="houses-card-detail">
          <NuxtIcon
              name="icon-ruler"
              filled
              class="text-sm"
          />
          <span>{{data.property.area}} sqft</span>
        </div>
      </div>
    </template>
  </base-card-template>
</template>
