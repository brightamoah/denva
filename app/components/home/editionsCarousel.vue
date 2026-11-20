<script setup lang="ts">
import { editions } from "~/data/home";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useGsapContext(sectionRef, (gsap) => {
  gsap.from("[data-editions-header]", {
    y: 20,
    opacity: 0,
    duration: 0.75,
    stagger: 0.08,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 82%",
      once: true,
    },
  });

  gsap.from("[data-edition-slide]", {
    y: 28,
    opacity: 0,
    duration: 0.8,
    stagger: 0.09,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: "[data-editions-track]",
      start: "top 85%",
      once: true,
    },
  });
});
</script>

<template>
  <section
    id="editions"
    ref="sectionRef"
    class="bg-default overflow-x-clip scroll-mt-24"
  >
    <UContainer class="pt-15 max-w-7xl">
      <div
        data-editions-header
        class="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-8 pb-10 border-default border-b"
      >
        <div class="max-w-3xl">
          <p class="flex items-center gap-3 font-normal text-[10px] text-muted uppercase tracking-[0.32em]">
            <span
              class="bg-secondary w-8 h-px"
              aria-hidden="true"
            />
            What We Publish
          </p>

          <h2 class="mt-5 font-serif text-highlighted text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight">
            Your book, <span class="text-primary">whatever its genre.</span>
          </h2>

          <p class="mt-5 max-w-2xl font-normal text-muted text-sm sm:text-base text-pretty leading-relaxed">
            From a first autobiography to a business book or a collection of poems, every project
            gets the same editorial care and the same attention to the finished book.
          </p>
        </div>
      </div>

      <div
        data-editions-track
        class="relative mt-12 pb-12"
      >
        <UCarousel
          v-slot="{ item }"
          loop
          arrows
          dots
          wheel-gestures
          :items="editions"
          :prev="{
            variant: 'outline',
            color: 'neutral',
            class:
              'size-11 rounded-none bg-default text-muted flex items-center justify-center text-center ring-default hover:text-primary sm:-inset-s-5! cursor-pointer',
          }"
          :next="{
            variant: 'outline',
            color: 'neutral',
            class:
              'size-11 rounded-none bg-default text-muted ring-default flex items-center justify-center text-center hover:text-primary sm:-inset-e-5! cursor-pointer',
          }"
          :ui="{
            item: 'basis-[86%] sm:basis-1/2 lg:basis-1/3',
            container: 'items-stretch',
            prev: 'hidden sm:inline-flex',
            next: 'hidden sm:inline-flex',
            dots: '-bottom-8 gap-2 sm:hidden',
            dot: 'h-px w-6 rounded-none bg-accented transition-[width,background-color] duration-300 data-[state=active]:w-10 data-[state=active]:bg-secondary',
          }"
        >
          <NuxtLink
            data-edition-slide
            :to="item.to"
            class="group block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 h-full"
          >
            <article class="flex flex-col h-full">
              <div class="relative bg-muted overflow-hidden">
                <div class="aspect-3/4 overflow-hidden">
                  <NuxtImg
                    :src="item.image"
                    :alt="item.alt"
                    width="720"
                    height="960"
                    format="webp"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>

                <div
                  aria-hidden="true"
                  class="top-0 absolute inset-x-0 bg-linear-to-b from-primary-950/50 to-transparent h-24 pointer-events-none"
                />

                <div
                  aria-hidden="true"
                  class="absolute inset-0 bg-linear-to-t from-primary-950/75 via-primary-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                <span class="bottom-4 left-4 absolute flex items-center gap-2 opacity-0 group-hover:opacity-100 font-normal text-[10px] text-primary-50 uppercase tracking-[0.26em] transition-[opacity,transform] translate-y-1 group-hover:translate-y-0 duration-500">
                  See how we help
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-3.5"
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div class="flex justify-between items-start gap-4 mt-4 pt-4 border-default border-t">
                <div class="min-w-0">
                  <p class="font-normal text-[10px] text-muted uppercase tracking-[0.26em]">
                    {{ item.category }}
                  </p>

                  <h3 class="mt-1.5 font-serif font-normal text-highlighted group-hover:text-primary text-xl sm:text-2xl tracking-tight transition-colors duration-300">
                    {{ item.title }}
                  </h3>
                </div>

                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="mt-1 size-4 text-muted dark:group-hover:text-secondary-300 group-hover:text-secondary-700 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300 shrink-0"
                  aria-hidden="true"
                />
              </div>

              <!-- <p class="mt-2 font-normal text-muted text-xs leading-relaxed">
                {{ item.specification }}
              </p> -->
            </article>
          </NuxtLink>
        </UCarousel>
      </div>
    </UContainer>
  </section>
</template>
