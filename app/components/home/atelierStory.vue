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
              alt="Printed manuscript pages, a pen and bookbinding tools on a workbench"
              width="1200"
              height="896"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          <figcaption class="relative bg-default shadow-sm mx-6 sm:mx-10 -mt-12 p-5 sm:p-6 border border-default">
            <p class="font-serif text-highlighted text-lg sm:text-xl leading-snug">
              “Publishing should not feel stressful. Our job is to make the next step clear.”
            </p>

            <p class="mt-3 font-normal text-[9px] text-muted uppercase tracking-[0.28em]">
              The Denva Books promise
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
            The Process
          </p>

          <h2
            data-atelier-copy
            class="mt-5 font-serif text-highlighted text-4xl sm:text-5xl text-balance leading-[1.05] tracking-tight"
          >
            A clear process, <span class="text-accent">from start to finish.</span>
          </h2>

          <p
            data-atelier-copy
            class="mt-6 max-w-xl font-normal text-muted text-sm text-pretty leading-relaxed"
          >
            You do not need to understand publishing before you begin. Tell us where your book is
            now, whether that is an idea, a manuscript or a finished file, and we will explain the
            next step.
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
              <span class="font-serif text-secondary text-lg leading-none">
                {{ stage.numeral }}
              </span>

              <div class="min-w-0">
                <h3 class="font-serif text-highlighted text-xl sm:text-2xl tracking-tight">
                  {{ stage.title }}
                </h3>

                <p class="mt-1.5 max-w-lg font-normal text-muted text-sm text-pretty leading-relaxed">
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
              label="More about Denva"
              to="/about"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-right"
              class="px-6 rounded-none min-h-11 font-normal text-[10px] uppercase tracking-[0.24em] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
