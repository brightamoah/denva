<script setup lang="ts">
import { services } from "~/data/home";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useGsapContext(sectionRef, (gsap) => {
  gsap.from("[data-service-intro]", {
    y: 20,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 82%",
      once: true,
    },
  });

  gsap.from("[data-service-row]", {
    y: 18,
    opacity: 0,
    duration: 0.65,
    stagger: 0.07,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: "[data-service-list]",
      start: "top 85%",
      once: true,
    },
  });
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-y border-default bg-muted/60"
  >
    <UContainer class="max-w-7xl py-20 sm:py-28">
      <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
        <div
          data-service-intro
          class="lg:sticky lg:top-28 lg:col-span-4"
        >
          <p class="flex items-center gap-3 text-[10px] font-normal uppercase tracking-[0.32em] text-muted">
            <span
              class="h-px w-8 bg-secondary"
              aria-hidden="true"
            />
            The Disciplines
          </p>

          <h2 class="mt-5 font-serif text-4xl font-light leading-[1.05] tracking-tight text-highlighted text-balance sm:text-5xl">
            From spoken memory to <em class="italic text-primary">archival form.</em>
          </h2>

          <p class="mt-6 text-sm font-light leading-relaxed text-muted text-pretty">
            Every discipline — from discreet ghostwriting interviews to European bindery production
            and global trade distribution — is stewarded under one roof.
          </p>

          <UButton
            label="Explore all disciplines"
            to="/services"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="mt-8 min-h-11 cursor-pointer rounded-none px-6 text-[10px] font-light uppercase tracking-[0.24em]"
          />

          <p class="mt-10 border-t border-default pt-5 text-[10px] font-light uppercase leading-relaxed tracking-[0.24em] text-muted">
            Twelve commissions
            <span class="mx-1.5 text-secondary-700 dark:text-secondary-300">·</span>
            One atelier
          </p>
        </div>

        <div
          data-service-list
          class="border-t border-default lg:col-span-8"
        >
          <NuxtLink
            v-for="service in services"
            :key="service.number"
            data-service-row
            :to="service.to"
            class="group -mx-4 grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 border-b border-default px-4 py-7 transition-colors duration-300 hover:bg-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6"
          >
            <span class="font-serif text-xl font-light italic leading-none text-secondary-700 tabular-nums dark:text-secondary-300 sm:text-2xl">
              {{ service.number }}
            </span>

            <div class="min-w-0">
              <h3 class="font-serif text-2xl font-light tracking-tight text-highlighted transition-colors duration-300 group-hover:text-primary sm:text-[1.7rem]">
                {{ service.title }}
              </h3>

              <p class="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted text-pretty">
                {{ service.summary }}
              </p>
            </div>

            <UIcon
              name="i-lucide-arrow-right"
              class="mt-2 size-4 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-primary"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>
