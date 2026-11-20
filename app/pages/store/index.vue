<script setup lang="ts">
import { storeEditions } from "~/data/store";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSeoMeta({
  title: "Store · Denva Books",
  description: "Books published by Denva Books in Accra, Ghana.",
  ogTitle: "Store · Denva Books",
  ogDescription: "Books published by Denva Books in Accra, Ghana.",
  ogType: "website",
});

useSectionReveal(sectionRef, {
  start: "top 90%",
  stagger: 0.05,
});
</script>

<template>
  <div>
    <AppPageHeader title="Store" />

    <section
      ref="sectionRef"
      class="bg-default"
    >
      <UContainer class="py-10 sm:py-12 max-w-7xl">
        <div class="gap-x-5 gap-y-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <StoreProductTile
            v-for="edition in storeEditions"
            :key="edition.id"
            :edition="edition"
            data-reveal
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
