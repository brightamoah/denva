<script setup lang="ts">
import { housePrinciples } from "~/data/about";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.05,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-default border-default border-b"
  >
    <UContainer class="py-15 max-w-7xl">
      <div class="gap-10 lg:gap-20 grid lg:grid-cols-12">
        <div class="lg:top-28 lg:sticky lg:self-start lg:col-span-5">
          <AppSectionHeading
            eyebrow="Core Values"
            description="The mindset and attitude that guide how we work, serve our clients and achieve our goals."
            data-reveal
          >
            What we hold <span class="text-accent">ourselves to.</span>
          </AppSectionHeading>
        </div>

        <ul class="gap-x-10 gap-y-7 grid sm:grid-cols-2 lg:col-span-7">
          <li
            v-for="(principle, index) in housePrinciples"
            :key="principle.title"
            data-reveal
            class="pt-4 border-default border-t"
          >
            <div class="flex items-baseline gap-3">
              <span class="font-serif tabular-nums text-secondary text-sm">
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <h3 class="font-serif font-normal text-primary text-xl tracking-tight">
                {{ principle.title }}
              </h3>
            </div>

            <p class="mt-2 font-normal text-muted text-sm text-pretty leading-relaxed">
              {{ principle.description }}
            </p>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
