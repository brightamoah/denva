<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import { heroSlides } from "~/data/home";

interface CarouselAutoplay {
  stop: () => void;
  play: () => void;
}

const heroRef = useTemplateRef<HTMLElement>("heroRef");
const carouselRef = useTemplateRef<{
  emblaApi?: {
    scrollTo: (index: number) => void;
    plugins?: () => { autoplay?: CarouselAutoplay };
  };
}>("carouselRef");

const activeIndex = ref(0);
const playing = ref(true);
const reduceMotion = import.meta.client
  ? prefersReducedMotion()
  : false;

const activeSlide = computed(() => heroSlides[activeIndex.value] ?? heroSlides[0]!);

const links: ButtonProps[] = [
  {
    label: "Start your story",
    to: "/contact",
    color: "secondary",
    variant: "solid",
    trailingIcon: "i-lucide-arrow-right",
    class:
      "min-h-12 rounded-none px-8 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-950 hover:bg-secondary-400 active:bg-secondary-400 focus-visible:outline-3 focus-visible:outline-secondary-100",
  },
  {
    label: "Explore our services",
    to: "/services",
    color: "primary",
    variant: "outline",
    class:
      "min-h-12 rounded-none px-8 text-[11px] font-light uppercase tracking-[0.24em] text-primary-50 ring-1 ring-inset ring-primary-50/30 hover:bg-primary-50/10 hover:text-primary-50 hover:ring-primary-50/60 focus-visible:ring-primary-50",
  },
];

function selectSlide(index: number) {
  activeIndex.value = index;
  carouselRef.value?.emblaApi?.scrollTo(index);
}

function togglePlayback() {
  const autoplay = carouselRef.value?.emblaApi?.plugins?.()?.autoplay;
  if (!autoplay) return;

  if (playing.value) {
    autoplay.stop();
  }
  else {
    autoplay.play();
  }
  playing.value = !playing.value;
}

useGsapContext(heroRef, (gsap) => {
  gsap.from("[data-hero-line]", {
    yPercent: 115,
    duration: 1.15,
    stagger: 0.12,
    ease: "power4.out",
    clearProps: "transform",
  });

  gsap.from("[data-hero-fade]", {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.09,
    delay: 0.15,
    ease: "power3.out",
    clearProps: "transform,opacity",
  });

  gsap.from("[data-hero-rule]", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1.2,
    delay: 0.2,
    ease: "power3.inOut",
  });

  gsap.to("[data-hero-bg]", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: heroRef.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<template>
  <section
    ref="heroRef"
    class="isolate relative flex flex-col bg-primary-950 min-h-[calc(100dvh-5rem)] overflow-hidden text-primary-50"
  >
    <!-- Full-bleed photography -->
    <div
      data-hero-bg
      class="-z-20 absolute inset-0 will-change-transform"
    >
      <UCarousel
        ref="carouselRef"
        v-slot="{ item, index }"
        fade
        loop
        :autoplay="
          reduceMotion ? false : { delay: 6000, stopOnInteraction: false, playOnInit: true }
        "
        :items="heroSlides"
        class="w-full h-full"
        :ui="{
          root: 'h-full w-full',
          viewport: 'h-full w-full overflow-hidden',
          container: 'ms-0 h-full',
          item: 'h-full basis-full ps-0',
        }"
        @select="(index: number) => (activeIndex = index)"
      >
        <div class="relative w-full h-full">
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            width="1200"
            height="896"
            format="webp"
            loading="eager"
            :fetchpriority="index === 0 ? 'high' : undefined"
            class="w-full h-full object-cover denva-hero-drift"
          />
        </div>
      </UCarousel>
    </div>

    <!-- Cinematic scrim, tinted with the house blue -->
    <div
      aria-hidden="true"
      class="-z-10 absolute inset-0 bg-primary-950/45 pointer-events-none"
    />

    <div
      aria-hidden="true"
      class="-z-10 absolute inset-0 bg-linear-to-t from-primary-950 via-primary-950/45 to-primary-950/15 pointer-events-none"
    />

    <div
      aria-hidden="true"
      class="-z-10 absolute inset-0 bg-linear-to-r from-primary-950/85 via-primary-950/30 to-transparent pointer-events-none"
    />

    <div class="z-10 relative flex flex-col flex-1 justify-end lg:justify-center mx-auto px-4 sm:px-6 pt-0 lg:pt-24 w-full max-w-7xl">
      <div class="pb-14 lg:pb-24 max-w-3xl">
        <h1 class="mt-7 font-serif font-light text-[2.9rem] text-primary-50 xl:text-[5.4rem] sm:text-6xl lg:text-7xl text-balance leading-[0.98] tracking-[-0.015em]">
          <span class="block pb-1">
            <span
              data-hero-line
              class="block"
            >Stories Worth Keeping.</span>
          </span>

          <span class="block pb-2 overflow-hidden">
            <span
              data-hero-line
              class="block text-secondary-300 italic"
            >
              Bound for Centuries.
            </span>
          </span>
        </h1>

        <p
          data-hero-fade
          class="mt-7 max-w-xl font-light text-primary-50/80 text-base sm:text-lg text-pretty leading-relaxed"
        >
          Confidential ghostwriting, editorial direction, and heirloom hardcover publishing for
          founders, collectors, and cultural houses.
        </p>

        <div
          data-hero-fade
          class="flex flex-wrap items-center gap-3 mt-9"
        >
          <UButton
            v-for="link in links"
            :key="link.label"
            v-bind="link"
          />
        </div>
      </div>
    </div>

    <!-- Plate register -->
    <div class="z-10 relative bg-primary-950/25 backdrop-blur-[2px] border-primary-50/15 border-t">
      <div class="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-5 mx-auto px-4 sm:px-6 py-5 w-full max-w-7xl">
        <div
          data-hero-fade
          class="max-w-md"
        >
          <p class="font-light text-[10px] text-primary-50/75 uppercase tracking-[0.3em]">
            {{ activeSlide.title }}
          </p>

          <p class="mt-2 font-serif font-light text-primary-50/90 text-lg">
            {{ activeSlide.caption }}
          </p>
        </div>

        <div
          data-hero-fade
          class="flex items-center gap-4"
        >
          <div
            class="flex items-center"
            role="group"
            aria-label="Choose a hero plate"
          >
            <button
              v-for="(slide, idx) in heroSlides"
              :key="slide.index"
              type="button"
              :aria-label="`Show plate ${slide.index}: ${slide.title}`"
              :aria-pressed="activeIndex === idx"
              class="group flex items-center gap-3 px-2 focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 min-h-11 cursor-pointer"
              @click="selectSlide(idx)"
            >
              <span
                class="inline-block w-5 text-[10px] text-right transition-colors duration-300"
                :class="
                  activeIndex === idx
                    ? 'text-secondary-300'
                    : 'text-primary-100/45 group-hover:text-primary-50'
                "
              >
                {{ slide.index }}
              </span>

              <span
                class="block h-px transition-[width,background-color] duration-500 ease-out"
                :class="
                  activeIndex === idx
                    ? 'w-14 bg-secondary'
                    : 'w-6 bg-primary-50/25 group-hover:bg-primary-50/60'
                "
              />
            </button>
          </div>

          <span
            v-if="!reduceMotion"
            class="bg-primary-50/15 w-px h-6"
            aria-hidden="true"
          />

          <button
            v-if="!reduceMotion"
            type="button"
            :aria-label="playing ? 'Pause the hero slideshow' : 'Play the hero slideshow'"
            class="flex justify-center items-center border border-primary-50/25 hover:border-secondary focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-4 size-11 text-primary-50/70 hover:text-secondary transition-colors duration-300 cursor-pointer"
            @click="togglePlayback"
          >
            <UIcon
              :name="playing ? 'i-lucide-pause' : 'i-lucide-play'"
              class="size-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
