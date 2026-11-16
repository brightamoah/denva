<script setup lang="ts">
import { atelierStages } from "~/data/home";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

const stages = atelierStages.map((stage) => {
  const [numeral = "", ...rest] = (stage.title ?? "").split(". ");
  return {
    numeral,
    title: rest.join(". ") || stage.title,
    description: stage.description,
  };
});

useGsapContext(sectionRef, (gsap) => {
  gsap.from("[data-atelier-image]", {
    y: 28,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 80%",
      once: true,
    },
  });

  gsap.from("[data-atelier-copy]", {
    y: 22,
    opacity: 0,
    duration: 0.85,
    stagger: 0.08,
    delay: 0.1,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 80%",
      once: true,
    },
  });
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-default border-default border-b"
  >
    <UContainer class="py-15 max-w-7xl">
      <div class="items-center gap-14 lg:gap-20 grid grid-cols-1 lg:grid-cols-12">
        <figure
          data-atelier-image
          class="relative order-1 lg:col-span-6"
        >
          <div class="bg-muted aspect-4/5 overflow-hidden">
            <NuxtImg
              src="/images/atelier-craft.jpg"
              alt="Denva Books bookbinding workbench with cotton manuscript pages, fountain pen, and linen swatches"
              width="1200"
              height="896"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          <figcaption class="relative bg-default shadow-sm mx-6 sm:mx-10 -mt-12 p-5 sm:p-6 border border-default">
            <p class="font-serif font-light text-highlighted text-lg sm:text-xl italic leading-snug">
              “Paper, thread, and proportion — the quiet architecture of a memory.”
            </p>

            <p class="mt-3 font-normal text-[9px] text-muted uppercase tracking-[0.28em]">
              The Denva Bindery
            </p>
          </figcaption>
        </figure>

        <div class="order-2 lg:col-span-6">
          <p
            data-atelier-copy
            class="flex items-center gap-3 font-normal text-[10px] text-muted uppercase tracking-[0.32em]"
          >
            <span
              class="bg-secondary w-8 h-px"
              aria-hidden="true"
            />
            The Atelier Process
          </p>

          <h2
            data-atelier-copy
            class="mt-5 font-serif font-light text-highlighted text-4xl sm:text-5xl text-balance leading-[1.05] tracking-tight"
          >
            Unhurried prose. <em class="text-primary italic">Tactile permanence.</em>
          </h2>

          <p
            data-atelier-copy
            class="mt-6 max-w-xl font-light text-muted text-sm text-pretty leading-relaxed"
          >
            Whether authoring a public cultural statement or a confidential family history, our
            writers and master bookbinders collaborate with quiet precision.
          </p>

          <ol
            data-atelier-copy
            class="mt-10 border-default border-t"
          >
            <li
              v-for="stage in stages"
              :key="stage.title"
              class="gap-4 sm:gap-6 grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.25rem_1fr] py-5 border-default border-b"
            >
              <span class="font-serif font-light text-secondary-700 dark:text-secondary-300 text-lg italic leading-none">
                {{ stage.numeral }}
              </span>

              <div class="min-w-0">
                <h3 class="font-serif font-light text-highlighted text-xl sm:text-2xl tracking-tight">
                  {{ stage.title }}
                </h3>

                <p class="mt-1.5 max-w-lg font-light text-muted text-sm text-pretty leading-relaxed">
                  {{ stage.description }}
                </p>
              </div>
            </li>
          </ol>

          <div
            data-atelier-copy
            class="mt-9"
          >
            <UButton
              label="Inside the atelier"
              to="/about"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-right"
              class="px-6 rounded-none min-h-11 font-light text-[10px] uppercase tracking-[0.24em] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
