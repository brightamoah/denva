<script setup lang="ts">
import { aboutIntro } from "~/data/about";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 95%",
  stagger: 0.08,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-default border-default border-b overflow-hidden"
  >
    <UContainer class="py-6 max-w-7xl">
      <div class="items-center gap-12">
        <p
          data-reveal
          class="max-w-4xl font-normal text-toned text-base sm:text-lg text-pretty leading-relaxed"
        >
          {{ aboutIntro }}
        </p>
      </div>
    </UContainer>
  </section>
</template>
