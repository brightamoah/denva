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
    class="bg-muted/60 border-default border-y"
  >
    <UContainer class="py-5 pt-15 max-w-7xl">
      <div class="items-start gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-12">
        <div
          data-service-intro
          class="lg:top-28 lg:sticky lg:col-span-5"
        >
          <p class="flex items-center gap-3 font-normal text-[10px] text-muted uppercase tracking-[0.32em]">
            <span
              class="bg-secondary w-8 h-px"
              aria-hidden="true"
            />
            The Disciplines
          </p>

          <h2 class="mt-5 font-serif font-light text-highlighted text-4xl sm:text-5xl text-balance leading-[1.05] tracking-tight">
            From spoken memory to <em class="text-primary italic">archival form.</em>
          </h2>

          <p class="mt-6 font-light text-muted text-sm text-pretty leading-relaxed">
            Every discipline — from discreet ghostwriting interviews to European bindery production
            and global trade distribution — is stewarded under one roof.
          </p>

          <UButton
            label="Explore all disciplines"
            to="/services"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="mt-8 px-6 rounded-none min-h-11 font-light text-[10px] uppercase tracking-[0.24em] cursor-pointer"
          />
        </div>

        <div
          data-service-list
          class="lg:col-span-7 border-default border-t"
        >
          <NuxtLink
            v-for="service in services"
            :key="service.number"
            data-service-row
            :to="service.to"
            class="group items-start gap-4 sm:gap-6 grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3.5rem_1fr_auto] hover:bg-default -mx-4 px-4 py-7 border-default last:border-0 border-b focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-0 transition-colors duration-300"
          >
            <span class="font-serif font-light tabular-nums text-secondary-700 dark:text-secondary-300 text-xl sm:text-2xl italic leading-none">
              {{ service.number }}
            </span>

            <div class="min-w-0">
              <h3 class="font-serif font-light text-highlighted sm:text-[1.7rem] group-hover:text-primary text-2xl tracking-tight transition-colors duration-300">
                {{ service.title }}
              </h3>

              <p class="mt-2 max-w-xl font-light text-muted text-sm text-pretty leading-relaxed">
                {{ service.summary }}
              </p>
            </div>

            <UIcon
              name="i-lucide-arrow-right"
              class="mt-2 size-4 text-muted group-hover:text-primary transition-[color,transform] group-hover:translate-x-1 duration-300 shrink-0"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </section>
</template>
