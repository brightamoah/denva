<script setup lang="ts">
import { serviceDetails } from "~/data/services";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 95%",
  stagger: 0.08,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-15 sm:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div class="min-w-0 lg:col-span-7">
          <AppEyebrowLabel
            label="Publishing Services"
            data-reveal
          />

          <h1
            data-reveal
            class="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.015em] text-highlighted text-balance sm:text-6xl lg:text-7xl"
          >
            Everything your book needs, <span class="text-accent">in one place.</span>
          </h1>

          <p
            data-reveal
            class="mt-7 max-w-xl text-base font-normal leading-relaxed text-toned text-pretty sm:text-lg"
          >
            Writing, editing, design, ISBN and printing, handled by one team in Accra, from the
            first idea to the finished book.
          </p>

          <div
            data-reveal
            class="mt-9 flex flex-wrap items-center gap-3"
          >
            <UButton
              label="Get a quote"
              to="/contact"
              color="secondary"
              variant="solid"
              trailing-icon="i-lucide-arrow-right"
              class="min-h-12 w-full cursor-pointer rounded-none px-8 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-950 hover:bg-secondary-400 active:bg-secondary-400 sm:w-auto"
            />

            <UButton
              label="Browse services"
              to="#services"
              color="neutral"
              variant="outline"
              class="min-h-12 w-full cursor-pointer rounded-none px-8 text-[11px] font-normal uppercase tracking-[0.24em] sm:w-auto"
            />
          </div>
        </div>

        <nav
          aria-label="Service index"
          class="min-w-0 border-t border-default lg:col-span-5"
        >
          <NuxtLink
            v-for="(service, index) in serviceDetails"
            :key="service.slug"
            :to="`#${service.slug}`"
            data-reveal
            class="group flex items-center justify-between gap-4 border-b border-default py-4 text-highlighted transition-colors duration-300 hover:text-primary dark:hover:text-secondary-300"
          >
            <span class="flex min-w-0 items-baseline gap-4">
              <span class="font-serif text-sm text-secondary-700 tabular-nums dark:text-secondary-300">
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <span class="font-serif text-base font-normal leading-snug tracking-tight sm:text-lg lg:text-xl">
                {{ service.title }}
              </span>
            </span>

            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary-700 dark:group-hover:text-secondary-300"
              aria-hidden="true"
            />
          </NuxtLink>
        </nav>
      </div>
    </UContainer>
  </section>
</template>
