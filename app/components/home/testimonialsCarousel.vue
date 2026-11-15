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
    ref="sectionRef"
    class="border-b border-default bg-muted/60"
  >
    <UContainer class="max-w-4xl py-20 sm:py-28">
      <div
        data-notes-wrap
        class="relative pt-10 text-center"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
        >
          <span class="size-1.5 rotate-45 bg-secondary" />

          <span class="flex gap-2.5">
            <span class="size-1.5 rotate-45 bg-secondary" />

            <span class="size-1.5 rotate-45 bg-secondary" />
          </span>
        </span>

        <p class="relative text-[10px] font-normal uppercase tracking-[0.34em] text-muted">
          The Denva Charter
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
            <figure class="mx-auto max-w-3xl px-2 sm:px-6">
              <blockquote class="font-serif text-2xl font-light italic leading-snug text-highlighted text-balance sm:text-3xl lg:text-[2.6rem]">
                {{ item.quote }}
              </blockquote>

              <figcaption class="mt-8 flex flex-col items-center">
                <span
                  class="h-px w-10 bg-secondary"
                  aria-hidden="true"
                />

                <span class="mt-5 text-[10px] font-normal uppercase tracking-[0.28em] text-highlighted">
                  {{ item.attribution }}
                </span>

                <span class="mt-2 text-xs font-light text-muted">
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
