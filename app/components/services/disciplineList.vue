<script setup lang="ts">
import { serviceDetails } from "~/data/services";
</script>

<template>
  <section
    id="services"
    class="bg-default border-default border-b scroll-mt-28"
  >
    <UContainer class="max-w-7xl">
      <p class="mt-5 font-serif text-highlighted text-4xl text-balance leading-[1.05]">
        Services We Offer
      </p>

      <ServicesDisciplineEntry
        v-for="(service, index) in serviceDetails"
        :key="service.slug"
        :service="service"
        :index="index"
      />
    </UContainer>
  </section>
</template>
