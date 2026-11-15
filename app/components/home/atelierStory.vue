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
    class="border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-20 sm:py-28">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <figure
          data-atelier-image
          class="relative order-1 lg:col-span-6"
        >
          <div class="aspect-4/5 overflow-hidden bg-muted">
            <NuxtImg
              src="/images/atelier-craft.jpg"
              alt="Denva Books bookbinding workbench with cotton manuscript pages, fountain pen, and linen swatches"
              width="1200"
              height="896"
              format="webp"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <figcaption class="relative mx-6 -mt-12 border border-default bg-default p-5 shadow-sm sm:mx-10 sm:p-6">
            <p class="font-serif text-lg font-light italic leading-snug text-highlighted sm:text-xl">
              “Paper, thread, and proportion — the quiet architecture of a memory.”
            </p>

            <p class="mt-3 text-[9px] font-normal uppercase tracking-[0.28em] text-muted">
              The Denva Bindery
            </p>
          </figcaption>
        </figure>

        <div class="order-2 lg:col-span-6">
          <p
            data-atelier-copy
            class="flex items-center gap-3 text-[10px] font-normal uppercase tracking-[0.32em] text-muted"
          >
            <span
              class="h-px w-8 bg-secondary"
              aria-hidden="true"
            />
            The Atelier Process
          </p>

          <h2
            data-atelier-copy
            class="mt-5 font-serif text-4xl font-light leading-[1.05] tracking-tight text-highlighted text-balance sm:text-5xl"
          >
            Unhurried prose. <em class="italic text-primary">Tactile permanence.</em>
          </h2>

          <p
            data-atelier-copy
            class="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted text-pretty"
          >
            Whether authoring a public cultural statement or a confidential family history, our
            writers and master bookbinders collaborate with quiet precision.
          </p>

          <ol
            data-atelier-copy
            class="mt-10 border-t border-default"
          >
            <li
              v-for="stage in stages"
              :key="stage.title"
              class="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-default py-5 sm:grid-cols-[3.25rem_1fr] sm:gap-6"
            >
              <span class="font-serif text-lg font-light italic leading-none text-secondary-700 dark:text-secondary-300">
                {{ stage.numeral }}
              </span>

              <div class="min-w-0">
                <h3 class="font-serif text-xl font-light tracking-tight text-highlighted sm:text-2xl">
                  {{ stage.title }}
                </h3>

                <p class="mt-1.5 max-w-lg text-sm font-light leading-relaxed text-muted text-pretty">
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
              class="min-h-11 cursor-pointer rounded-none px-6 text-[10px] font-light uppercase tracking-[0.24em]"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
