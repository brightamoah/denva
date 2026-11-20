<script setup lang="ts">
import { storeEditions } from "~/data/store";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const activeCategory = ref("All");

const categories = [
  "All",
  ...new Set(storeEditions.map(edition => edition.category)),
];

const filteredEditions = computed(() =>
  activeCategory.value === "All"
    ? storeEditions
    : storeEditions.filter(edition => edition.category === activeCategory.value),
);

useSectionReveal(sectionRef, {
  start: "top 85%",
  stagger: 0.06,
});
</script>

<template>
  <section
    id="editions"
    ref="sectionRef"
    class="scroll-mt-28 border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-15">
      <div class="flex flex-col gap-8 border-b border-default pb-8 lg:flex-row lg:items-end lg:justify-between">
        <AppSectionHeading
          eyebrow="The Edition Room"
          description="A working selection, not a permanent catalogue. Each edition is printed once and recorded in the house ledger."
          data-reveal
        >
          Selected editions, <span class="text-accent">numbered and kept.</span>
        </AppSectionHeading>

        <div
          data-reveal
          class="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter editions"
        >
          <UButton
            v-for="category in categories"
            :key="category"
            :label="category"
            type="button"
            size="sm"
            :color="activeCategory === category ? 'primary' : 'neutral'"
            :variant="activeCategory === category ? 'solid' : 'ghost'"
            :aria-pressed="activeCategory === category"
            :class="activeCategory === category ? 'text-primary-50' : ''"
            class="min-h-11 cursor-pointer rounded-none px-4 text-[9px] font-normal uppercase tracking-[0.2em]"
            @click="activeCategory = category"
          />
        </div>
      </div>

      <p
        class="sr-only"
        aria-live="polite"
      >
        {{ filteredEditions.length }} {{ filteredEditions.length === 1 ? "edition" : "editions" }} shown
      </p>

      <div
        v-auto-animate
        class="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <StoreEditionCard
          v-for="edition in filteredEditions"
          :key="edition.id"
          :edition="edition"
        />
      </div>

      <p
        v-if="!filteredEditions.length"
        class="mt-10 text-sm font-normal text-muted"
      >
        No editions in this category at the moment.
        <NuxtLink
          to="/contact"
          class="text-accent underline underline-offset-4"
        >
          Commission one instead.
        </NuxtLink>
      </p>
    </UContainer>
  </section>
</template>
