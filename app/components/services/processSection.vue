<script setup lang="ts">
import { serviceProcess } from "~/data/services";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.08,
});
</script>

<template>
  <section
    id="service-process"
    ref="sectionRef"
    class="bg-muted/60 border-default border-b scroll-mt-24"
  >
    <UContainer class="py-14 sm:py-16 max-w-7xl">
      <div class="gap-10 lg:gap-20 grid lg:grid-cols-12">
        <div class="lg:col-span-5">
          <AppSectionHeading
            eyebrow="The Process"
            description="A collaborative and confidential roadmap so you always know what is happening and what comes next."
            data-reveal
          >
            From your raw ideas <span class="text-accent">to a finished book.</span>
          </AppSectionHeading>
        </div>

        <div class="lg:col-span-7">
          <ol class="gap-x-8 gap-y-8 grid sm:grid-cols-2">
            <li
              v-for="step in serviceProcess"
              :key="step.number"
              data-reveal
              class="pt-5 border-default border-t"
            >
              <span class="font-serif tabular-nums text-secondary text-base">
                {{ step.number }}
              </span>

              <h3 class="mt-2 font-serif font-normal text-highlighted text-xl sm:text-2xl tracking-tight">
                {{ step.title }}
              </h3>

              <p class="mt-2 font-normal text-muted text-sm text-pretty leading-relaxed">
                {{ step.description }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </UContainer>
  </section>
</template>
