<script setup lang="ts">
import { missionStatement, visionStatement } from "~/data/about";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.08,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="isolate relative bg-primary-800 overflow-hidden text-primary-50"
  >
    <UContainer class="py-16 sm:py-20 max-w-7xl">
      <div class="gap-12 lg:gap-16 grid lg:grid-cols-12">
        <div class="flex flex-col justify-center lg:col-span-4">
          <AppEyebrowLabel
            label="Mission & Vision"
            tone="secondary"
            data-reveal
          />

          <h2
            data-reveal
            class="mt-5 max-w-md font-serif font-normal text-primary-50 text-3xl sm:text-4xl text-balance tracking-tight"
          >
            Why <span class="text-secondary">Denva</span> exists.
          </h2>
        </div>

        <div class="gap-10 grid sm:grid-cols-2 lg:col-span-8">
          <div
            data-reveal
            class="pt-5 border-primary-50/20 border-t"
          >
            <p class="font-medium text-secondary text-sm uppercase tracking-[0.3em]">
              Our mission
            </p>

            <p class="mt-4 font-serif font-normal text-primary-50 text-base sm:text-lg text-pretty leading-relaxed">
              {{ missionStatement }}
            </p>
          </div>

          <div
            data-reveal
            class="pt-5 border-primary-50/20 border-t"
          >
            <p class="font-medium text-secondary text-sm uppercase tracking-[0.3em]">
              Our vision
            </p>

            <p class="mt-4 font-serif font-normal text-primary-50 text-base sm:text-lg text-pretty leading-relaxed">
              {{ visionStatement }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
