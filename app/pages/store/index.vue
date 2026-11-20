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
    <!-- <AppPageHeader
      id="store-header"
      title="Store"
    /> -->

    <section
      id="store-catalog"
      ref="sectionRef"
      class="bg-default scroll-mt-24"
    >
      <UContainer class="py-8 sm:py-10 max-w-7xl">
        <div class="gap-4 sm:gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
