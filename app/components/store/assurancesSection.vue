<script setup lang="ts">
import { storeAssurances } from "~/data/store";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.07,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-b border-default bg-muted/60"
  >
    <UContainer class="max-w-7xl py-15">
      <AppSectionHeading
        eyebrow="A Quiet Guarantee"
        description="The edition is not finished when it is printed. It is finished when it is safely in your hands."
        align="center"
        data-reveal
      >
        Made once. <span class="text-accent">Kept properly.</span>
      </AppSectionHeading>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <article
          v-for="assurance in storeAssurances"
          :key="assurance.title"
          data-reveal
          class="border-t border-default pt-5 text-center md:text-left"
        >
          <h3 class="font-serif text-xl font-normal tracking-tight text-highlighted">
            {{ assurance.title }}
          </h3>

          <p class="mt-2 text-sm font-normal leading-relaxed text-muted text-pretty">
            {{ assurance.description }}
          </p>
        </article>
      </div>
    </UContainer>
  </section>
</template>
