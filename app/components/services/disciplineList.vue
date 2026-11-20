<script setup lang="ts">
import { serviceDetails } from "~/data/services";
</script>

<template>
  <section
    id="services-list"
    class="bg-default border-default border-b scroll-mt-24"
  >
    <UContainer class="py-6 sm:py-8 max-w-7xl">
      <AppSectionHeading
        id="services-header"
        eyebrow="Our Publishing Services"
        description="Writing, editing, design, ISBN and printing, handled by one team in Accra from the first idea to the finished book."
        :show-eyebrow="false"
      >
        Everything your book needs, <span class="text-accent">in one place.</span>
      </AppSectionHeading>

      <div class="mt-4">
        <ServicesDisciplineEntry
          v-for="(service, index) in serviceDetails"
          :key="service.slug"
          :service="service"
          :index="index"
        />
      </div>
    </UContainer>
  </section>
</template>
