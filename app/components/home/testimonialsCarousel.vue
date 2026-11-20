<script setup lang="ts">
import { editorialNotes } from "~/data/home";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useGsapContext(sectionRef, (gsap) => {
  gsap.from("[data-notes-wrap]", {
    y: 22,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 82%",
      once: true,
    },
  });
});
</script>

<template>
  <section
    id="core-values"
    ref="sectionRef"
    class="bg-muted/60 border-default border-b scroll-mt-24"
  >
    <UContainer class="py-15 max-w-4xl">
      <div
        data-notes-wrap
        class="relative pt-10 text-center"
      >
        <span
          aria-hidden="true"
          class="top-0 left-1/2 absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <span class="bg-secondary size-1.5 rotate-45" />

          <span class="flex gap-2.5">
            <span class="bg-secondary size-1.5 rotate-45" />

            <span class="bg-secondary size-1.5 rotate-45" />
          </span>
        </span>

        <p class="relative font-normal text-[10px] text-muted uppercase tracking-[0.34em]">
          Our Core Values
        </p>

        <div class="relative mt-8 pb-12">
          <UCarousel
            v-slot="{ item }"
            fade
            loop
            dots
            :items="editorialNotes"
            :ui="{
              dots: '-bottom-2 gap-2',
              dot: 'h-px w-6 rounded-none bg-accented transition-[width,background-color] duration-300 data-[state=active]:w-10 data-[state=active]:bg-secondary',
            }"
          >
            <figure class="mx-auto px-2 sm:px-6 max-w-3xl">
              <blockquote class="font-serif text-highlighted text-2xl sm:text-3xl lg:text-4xl text-balance leading-snug">
                {{ item.quote }}
              </blockquote>

              <figcaption class="flex flex-col items-center mt-8">
                <span
                  class="bg-secondary w-10 h-px"
                  aria-hidden="true"
                />

                <span class="mt-5 font-normal text-[10px] text-highlighted uppercase tracking-[0.28em]">
                  {{ item.attribution }}
                </span>

                <span class="mt-2 font-normal text-muted text-xs">
                  {{ item.context }}
                </span>
              </figcaption>
            </figure>
          </UCarousel>
        </div>
      </div>
    </UContainer>
  </section>
</template>
