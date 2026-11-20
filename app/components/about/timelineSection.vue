<script setup lang="ts">
import { audiences, entryPoints } from "~/data/about";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.06,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-muted/60 border-default border-b"
  >
    <UContainer class="py-15 max-w-7xl">
      <AppSectionHeading
        eyebrow="Where You Start"
        :show-eyebrow="false"
        description="You do not need to understand publishing before you contact us. Tell us where the book is, and we will explain the next step."
        data-reveal
      >
        Wherever you are, <span class="text-accent">start here.</span>
      </AppSectionHeading>

      <ol class="mt-10 border-default border-t">
        <li
          v-for="point in entryPoints"
          :key="point.number"
          data-reveal
          class="gap-5 sm:gap-8 grid grid-cols-[2.5rem_1fr] sm:grid-cols-[5rem_1fr] py-6 border-default border-b"
        >
          <span class="font-serif font-normal tabular-nums text-secondary text-2xl leading-none">
            {{ point.number }}
          </span>

          <div>
            <h3 class="font-serif font-normal text-highlighted text-xl sm:text-2xl tracking-tight">
              {{ point.title }}
            </h3>

            <p class="mt-2 max-w-2xl font-normal text-muted text-sm text-pretty leading-relaxed">
              {{ point.description }}
            </p>
          </div>
        </li>
      </ol>

      <div class="gap-6 lg:gap-10 grid lg:grid-cols-12 mt-12">
        <h3 class="lg:col-span-4 font-serif font-normal text-highlighted text-3xl tracking-tight">
          Who we work with
        </h3>

        <ul class="flex flex-wrap gap-3 lg:col-span-8">
          <li
            v-for="audience in audiences"
            :key="audience"
            class="px-3 py-1.5 border border-muted font-normal text-sm"
          >
            {{ audience }}
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
