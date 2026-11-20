<script setup lang="ts">
import type { MaterialTone } from "~/data/services";
import { printSpecs } from "~/data/services";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.06,
});

const swatches: Record<MaterialTone, string> = {
  navy: "bg-primary-900",
  linen: "bg-muted ring-1 ring-default",
  gold: "bg-secondary-400",
  espresso: "bg-secondary-900",
  charcoal: "bg-primary-950",
  ivory: "bg-primary-50 ring-1 ring-default",
};
</script>

<template>
  <section
    id="printing-specifications"
    ref="sectionRef"
    class="bg-default border-default border-b scroll-mt-24"
  >
    <UContainer class="py-14 sm:py-16 max-w-7xl">
      <div class="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-6">
        <AppSectionHeading
          eyebrow="Printing Standards"
          description="High digital printing technology, archival paper choices and durable finishes tailored to your book's vision. Printed from 300 copies."
          data-reveal
        >
          Quality printing with <span class="text-accent">attention to detail.</span>
        </AppSectionHeading>
      </div>

      <ul class="gap-x-8 gap-y-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10">
        <li
          v-for="spec in printSpecs"
          :key="spec.name"
          data-reveal
          class="flex gap-4 pt-5 border-default border-t"
        >
          <span
            aria-hidden="true"
            class="mt-0.5 size-10 shrink-0"
            :class="swatches[spec.tone]"
          />

          <div class="min-w-0">
            <h3 class="font-serif font-normal text-highlighted text-lg tracking-tight">
              {{ spec.name }}
            </h3>

            <p class="mt-1 font-normal text-muted text-sm text-pretty leading-relaxed">
              {{ spec.description }}
            </p>
          </div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
